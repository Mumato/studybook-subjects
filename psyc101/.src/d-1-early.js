const { C, svg, arrow, text, rect, circle, line, path } = require("./lib");

const PINK = "#C2477E";

function box(x, y, w, h, label, o = {}) {
	let s = rect(x, y, w, h, { fill: o.fill || C.paper, r: 3 });
	const lines = Array.isArray(label) ? label : [label];
	lines.forEach((t, i) => { s += text(x + w / 2, y + h / 2 + 3 + (i - (lines.length - 1) / 2) * 10, t, { size: o.size || 8, bold: o.bold, color: o.color }); });
	return s;
}

// normal curve with shaded bands; labels under -2..2
function normalCurve(labels, title) {
	const X = z => 100 + z * 34, Y = z => 86 - 64 * Math.exp(-z * z / 2);
	let d = "", band1 = "", band2 = "";
	for (let z = -2.8; z <= 2.8; z += 0.05) d += (d ? "L" : "M") + X(z).toFixed(1) + "," + Y(z).toFixed(1);
	for (let z = -2; z <= 2.0001; z += 0.05) band2 += (band2 ? "L" : "M") + X(z).toFixed(1) + "," + Y(z).toFixed(1);
	for (let z = -1; z <= 1.0001; z += 0.05) band1 += (band1 ? "L" : "M") + X(z).toFixed(1) + "," + Y(z).toFixed(1);
	let s = path(band2 + `L${X(2)},86 L${X(-2)},86 Z`, { fill: "#E3D3E8", stroke: "none" });
	s += path(band1 + `L${X(1)},86 L${X(-1)},86 Z`, { fill: "#C9A9D6", stroke: "none" });
	s += path(d, { stroke: C.ink, sw: 1.6 }) + line(X(-2.9), 86, X(2.9), 86, { sw: 1 });
	labels.forEach((t, i) => { const z = i - 2; s += line(X(z), 86, X(z), 89, { sw: 0.8 }) + text(X(z), 98, t, { size: 8 }); });
	s += text(100, 70, "68%", { size: 8, bold: true });
	return svg(200, 104, s + text(100, 10, title, { size: 8 }));
}

module.exports = {
	// experiment: random assignment, IV, DV
	"psy-experiment": svg(200, 110,
		box(60, 4, 80, 18, "Participants", { bold: true }) +
		text(100, 42, "random assignment", { size: 7, color: C.faint }) +
		arrow(90, 22, 50, 44, C.ink, 1) + arrow(110, 22, 150, 44, C.ink, 1) +
		box(8, 46, 84, 26, ["Experimental group", "gets caffeine"], { fill: "#F6DCE8" }) +
		box(108, 46, 84, 26, ["Control group", "gets a placebo"]) +
		arrow(50, 72, 50, 86, C.ink, 1) + arrow(150, 72, 150, 86, C.ink, 1) +
		box(20, 88, 160, 18, "Measure memory score (dependent variable)", { size: 7 }) +
		""),

	// correlation patterns
	"psy-corr": (() => {
		let s = "";
		const pts = (fn, x0) => { let o = ""; for (let i = 0; i < 14; i++) { const u = (i * 37 % 14) / 13, v = fn(u, i); o += circle(x0 + 6 + u * 48, 70 - v * 48, 2, { fill: PINK, stroke: PINK }); } return o; };
		const frame = (x0, label, r) => rect(x0, 16, 60, 60, { fill: "none", sw: 0.8 }) + text(x0 + 30, 10, label, { size: 8 }) + text(x0 + 30, 88, r, { size: 8, color: C.faint });
		s += frame(4, "positive", "r = +0.9") + pts((u, i) => Math.min(1, Math.max(0, u + ((i * 7) % 5 - 2) * 0.04)), 4);
		s += frame(70, "negative", "r = −0.9") + pts((u, i) => Math.min(1, Math.max(0, 1 - u + ((i * 5) % 5 - 2) * 0.04)), 70);
		s += frame(136, "none", "r ≈ 0") + pts((u, i) => ((i * 53) % 13) / 12, 136);
		return svg(200, 94, s);
	})(),

	"psy-normal": normalCurve(["−2 SD", "−1 SD", "mean", "+1 SD", "+2 SD"], "68% of scores within 1 SD, 95% within 2 SD"),
	"thk-iq": normalCurve(["70", "85", "100", "115", "130"], "IQ: mean 100, SD 15 (68% score 85-115)"),

	// neuron
	"bio-neuron": (() => {
		let s = "";
		for (const [a, l] of [[-150, 18], [-120, 20], [150, 18], [125, 20], [180, 16]]) {
			const r = a * Math.PI / 180, x2 = 34 + Math.cos(r) * l, y2 = 50 + Math.sin(r) * l;
			s += line(34, 50, x2, y2, { sw: 1.4 }) + line(x2, y2, x2 + Math.cos(r - 0.5) * 7, y2 + Math.sin(r - 0.5) * 7, { sw: 1 }) + line(x2, y2, x2 + Math.cos(r + 0.5) * 7, y2 + Math.sin(r + 0.5) * 7, { sw: 1 });
		}
		s += circle(34, 50, 10, { fill: "#F6DCE8" }) + circle(34, 50, 3.5, { fill: PINK, stroke: PINK });
		s += line(44, 50, 168, 50, { sw: 1.6 });
		for (let x = 56; x < 156; x += 22) s += rect(x, 46, 17, 8, { fill: "#FFF6D6", r: 4, sw: 1 });
		for (const dy of [-12, 0, 12]) s += line(168, 50, 182, 50 + dy, { sw: 1.2 }) + circle(184, 50 + dy, 2.5, { fill: C.ink });
		s += text(14, 22, "dendrites", { size: 8 }) + text(22, 86, "cell body", { size: 8 }) + text(105, 40, "myelin sheath", { size: 8 });
		s += text(112, 70, "axon", { size: 8 }) + text(184, 82, "terminals", { size: 8, anchor: "end" });
		s += arrow(70, 92, 140, 92, C.red, 1.2) + text(105, 88, "signal travels this way", { size: 7, color: C.red });
		return svg(200, 98, s);
	})(),

	// synapse
	"bio-synapse": svg(200, 100,
		path("M20,8 L20,38 Q20,52 60,52 Q100,52 100,38 L100,8", { fill: "#F6DCE8", sw: 1.2 }) +
		[[40, 30], [52, 22], [64, 32], [78, 24], [86, 36]].map(([x, y]) => circle(x, y, 3.5, { fill: C.paper, sw: 0.8 }) + circle(x, y, 1.2, { fill: PINK, stroke: PINK })).join("") +
		path("M10,92 L10,72 Q10,64 60,64 Q110,64 110,72 L110,92", { fill: "#E3ECF7", sw: 1.2 }) +
		[30, 50, 70, 90].map(x => rect(x - 4, 62, 8, 3, { fill: C.blue, stroke: C.blue })).join("") +
		[[44, 57], [58, 59], [72, 56], [66, 60]].map(([x, y]) => circle(x, y, 1.3, { fill: PINK, stroke: PINK })).join("") +
		text(150, 22, "axon terminal", { size: 8 }) + line(118, 20, 102, 22, { sw: 0.6 }) +
		text(150, 50, "synapse (gap)", { size: 8 }) + line(122, 48, 104, 58, { sw: 0.6 }) +
		text(150, 72, "receptors", { size: 8, color: C.blue }) + line(126, 70, 94, 63, { sw: 0.6, stroke: C.blue }) +
		text(150, 90, "next neuron", { size: 8 }) +
		text(150, 34, "neurotransmitters", { size: 7, color: PINK })),

	// brain lobes, side view, facing left
	"bio-brain": (() => {
		const outline = "M30,62 C18,40 40,10 84,10 C130,6 172,22 176,52 C178,70 164,80 150,80 L60,82 C44,82 36,74 30,62 Z";
		let s = `<defs><clipPath id="br"><path d="${outline}"/></clipPath></defs>`;
		s += `<g clip-path="url(#br)">` +
			path("M0,0 L92,0 L80,40 L62,84 L0,84 Z", { fill: "#F2C6D8", stroke: "none" }) +
			path("M92,0 L150,0 L140,38 L80,40 Z", { fill: "#CFE0F2", stroke: "none" }) +
			path("M150,0 L200,0 L200,90 L150,90 L140,38 Z", { fill: "#D6EBCF", stroke: "none" }) +
			path("M80,40 L140,38 L150,90 L62,90 Z", { fill: "#F7E3B8", stroke: "none" }) + `</g>`;
		s += path(outline, { sw: 1.4 });
		s += `<ellipse cx="146" cy="88" rx="20" ry="9" fill="#E0D2C0" stroke="${C.ink}" stroke-width="1.2"/>`;
		s += path("M112,82 L112,104 L124,104 L126,82", { fill: "#E0D2C0", sw: 1.2 });
		s += text(52, 40, "frontal", { size: 8, bold: true }) + text(116, 26, "parietal", { size: 8, bold: true });
		s += text(156, 56, "occipital", { size: 7, bold: true }) + text(104, 64, "temporal", { size: 8, bold: true });
		s += text(178, 104, "cerebellum", { size: 7, anchor: "end" }) + text(98, 104, "brainstem", { size: 7, anchor: "end" });
		s += text(14, 96, "front", { size: 7, color: C.faint, anchor: "start" });
		return svg(200, 108, s);
	})(),

	// the eye
	"sen-eye": svg(200, 100,
		circle(108, 50, 38, { fill: C.paper }) +
		path("M146,50 m0,0", {}) +
		path("M108,12 A38,38 0 0 1 108,88", { stroke: PINK, sw: 3 }) +
		path("M73,36 Q62,50 73,64", { fill: "#E3ECF7", sw: 1.2 }) +
		`<ellipse cx="80" cy="50" rx="5" ry="12" fill="#F7E3B8" stroke="${C.ink}" stroke-width="1"/>` +
		line(146, 50, 186, 52, { sw: 4, stroke: "#E0B44A" }) +
		[38, 50, 62].map(y => line(10, y, 80, y + (50 - y) * 0.15, { stroke: C.orange, sw: 0.9 }) + line(80, y + (50 - y) * 0.15, 145, 50, { stroke: C.orange, sw: 0.9 })).join("") +
		circle(145, 50, 2.2, { fill: C.red, stroke: C.red }) +
		text(62, 26, "cornea", { size: 7 }) + text(80, 76, "lens", { size: 7 }) + text(130, 10, "retina", { size: 7, color: PINK }) +
		text(150, 40, "fovea", { size: 7, color: C.red, anchor: "start" }) + text(188, 64, "optic nerve", { size: 7, anchor: "end" }) +
		text(14, 30, "light", { size: 7, color: C.orange, anchor: "start" })),

	// Muller-Lyer illusion
	"sen-muller": svg(200, 70,
		line(50, 20, 150, 20, { sw: 2 }) + line(50, 20, 40, 11, { sw: 2 }) + line(50, 20, 40, 29, { sw: 2 }) + line(150, 20, 160, 11, { sw: 2 }) + line(150, 20, 160, 29, { sw: 2 }) +
		line(50, 52, 150, 52, { sw: 2 }) + line(50, 52, 60, 43, { sw: 2 }) + line(50, 52, 60, 61, { sw: 2 }) + line(150, 52, 140, 43, { sw: 2 }) + line(150, 52, 140, 61, { sw: 2 }) +
		text(18, 24, "A", { size: 9, bold: true }) + text(18, 56, "B", { size: 9, bold: true })),

	// Gestalt grouping
	"sen-gestalt": (() => {
		let s = text(50, 10, "proximity", { size: 8 }) + text(150, 10, "similarity", { size: 8 });
		for (const col of [16, 26, 46, 56, 76, 86]) for (let r = 0; r < 4; r++) s += circle(col, 24 + r * 12, 3, { fill: C.ink });
		for (let c = 0; c < 6; c++) for (let r = 0; r < 4; r++) s += circle(118 + c * 12, 24 + r * 12, 3, r % 2 ? { fill: C.paper } : { fill: PINK, stroke: PINK });
		s += text(50, 78, "seen as 3 columns", { size: 7, color: C.faint }) + text(150, 78, "seen as rows", { size: 7, color: C.faint });
		return svg(200, 84, s);
	})(),

	// sleep cycles (hypnogram)
	"con-sleep": (() => {
		const lv = { W: 14, R: 30, N1: 46, N2: 62, N3: 78 };
		const X = h => 30 + h * 20;
		const seq = [[0, "W"], [0.2, "N1"], [0.4, "N2"], [0.8, "N3"], [1.2, "N2"], [1.4, "R"], [1.55, "N2"], [2.0, "N3"], [2.4, "N2"], [2.8, "R"], [3.1, "N2"], [3.6, "N3"], [3.9, "N2"], [4.3, "R"], [4.7, "N2"], [5.6, "R"], [6.1, "N2"], [6.9, "R"], [7.6, "W"], [8, "W"]];
		let d = "", s = "";
		seq.forEach(([h, st], i) => { const y = lv[st]; d += (i ? `L${X(h)},${(lv[seq[i - 1][1]])} ` : `M${X(h)},${y} `) + `L${X(h)},${y} `; });
		s += path(d + `L${X(8)},${lv.W}`, { stroke: C.blue, sw: 1.4 });
		seq.forEach(([h, st], i) => { if (st === "R" && i + 1 < seq.length) s += line(X(h), lv.R, X(seq[i + 1][0]), lv.R, { stroke: C.red, sw: 3 }); });
		for (const [k, y] of Object.entries(lv)) s += text(24, y + 3, k === "R" ? "REM" : k === "W" ? "awake" : k, { size: 7, anchor: "end" });
		s += line(X(0), 86, X(8), 86, { sw: 0.8 });
		for (let h = 0; h <= 8; h += 2) s += text(X(h), 96, h + " h", { size: 7, color: C.faint });
		return svg(200, 100, s);
	})(),

	// classical conditioning
	"lrn-classical": (() => {
		const row = (y, label, left, right, colL, colR) => text(4, y + 10, label, { size: 7, color: C.faint, anchor: "start" }) +
			box(44, y, 64, 16, left, { fill: colL, size: 7 }) + arrow(110, y + 8, 124, y + 8, C.ink, 1) + box(126, y, 70, 16, right, { fill: colR, size: 7 });
		return svg(200, 100,
			row(4, "before", "food (US)", "drools (UR)", "#F6DCE8", "#FFF6D6") +
			row(26, "before", "bell (neutral)", "no drool", C.paper, C.paper) +
			row(48, "during", "bell + food", "drools", "#F6DCE8", "#FFF6D6") +
			row(70, "after", "bell (CS)", "drools (CR)", "#E3ECF7", "#FFF6D6") +
			text(100, 98, "US/UR unconditioned, CS/CR conditioned", { size: 7, color: C.faint }));
	})(),

	// operant 2x2
	"lrn-operant": svg(200, 96,
		text(104, 10, "add something", { size: 7, bold: true }) + text(164, 10, "take away", { size: 7, bold: true }) +
		text(36, 34, "behaviour", { size: 7, bold: true }) + text(36, 43, "goes up", { size: 7, bold: true }) +
		text(36, 74, "behaviour", { size: 7, bold: true }) + text(36, 83, "goes down", { size: 7, bold: true }) +
		box(74, 16, 60, 38, ["positive", "reinforcement", "(praise)"], { fill: "#D6EBCF", size: 7 }) +
		box(136, 16, 60, 38, ["negative", "reinforcement", "(beeping stops)"], { fill: "#D6EBCF", size: 7 }) +
		box(74, 56, 60, 38, ["positive", "punishment", "(a scolding)"], { fill: "#F6DCE8", size: 7 }) +
		box(136, 56, 60, 38, ["negative", "punishment", "(phone taken)"], { fill: "#F6DCE8", size: 7 })),
};
