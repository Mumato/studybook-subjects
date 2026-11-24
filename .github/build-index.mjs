#!/usr/bin/env node
// Rebuilds index.json (every subject folder's version and the sha256 of each file) for the StudyBook mod.
// A subject whose files changed since the last index but whose version wasn't raised gets version + 1,
// so the mod downloads it. Run by .github/workflows/publish.yml on every push; also fine to run by hand:
//   node .github/build-index.mjs .
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.argv[2] ?? ".";
const indexPath = join(root, "index.json");
const old = existsSync(indexPath) ? JSON.parse(readFileSync(indexPath, "utf8")) : { subjects: [] };
const oldById = Object.fromEntries((old.subjects ?? []).map(s => [s.id, s]));

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (name.startsWith(".")) continue; // .git, .github, .managed, temp folders
		if (dir !== root && name === "teachers.txt" && readdirSync(dir).includes("subject.json")) continue; // read live by the mod, not downloaded
		const p = join(dir, name);
		if (statSync(p).isDirectory()) out.push(...walk(p));
		else out.push(p);
	}
	return out;
}

function hashes(folder) {
	const files = {};
	for (const f of walk(folder).sort()) {
		files[relative(folder, f).split(sep).join("/")] = createHash("sha256").update(readFileSync(f)).digest("hex");
	}
	return files;
}

const subjects = [];
for (const id of readdirSync(root).sort()) {
	const folder = join(root, id);
	if (id.startsWith(".") || !statSync(folder).isDirectory() || !existsSync(join(folder, "subject.json"))) continue;
	if (!/^[A-Za-z0-9_-]{1,64}$/.test(id)) {
		console.error(`skipping "${id}": folder names may only use letters, digits, _ and -`);
		continue;
	}
	const sjPath = join(folder, "subject.json");
	const subject = JSON.parse(readFileSync(sjPath, "utf8"));
	let version = subject.version ?? 1;
	let files = hashes(folder);
	const prev = oldById[id];
	// version not raised by hand, but something in the folder differs from the last index: raise it
	if (prev && version <= prev.version && JSON.stringify(files) !== JSON.stringify(prev.files)) {
		version = prev.version + 1;
		subject.version = version;
		writeFileSync(sjPath, JSON.stringify(subject, null, 2) + "\n");
		files = hashes(folder);
		console.log(`${id}: content changed, version ${prev.version} -> ${version}`);
	}
	subjects.push({ id, version, files });
	console.log(`${id}: version ${version}, ${Object.keys(files).length} files`);
}

writeFileSync(indexPath, JSON.stringify({ subjects }, null, 2) + "\n");
console.log(`wrote ${indexPath}`);
