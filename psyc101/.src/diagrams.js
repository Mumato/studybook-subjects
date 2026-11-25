// Collects every d-*.js file in this folder: each exports {name: svgString}.
const fs = require("fs"), path = require("path");
const out = {};
for (const f of fs.readdirSync(__dirname).filter(f => /^d-.*\.js$/.test(f)).sort()) {
	const p = path.join(__dirname, f);
	delete require.cache[require.resolve(p)];
	Object.assign(out, require(p));
}
module.exports = out;
