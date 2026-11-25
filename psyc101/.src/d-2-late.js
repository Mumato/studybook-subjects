const { C, svg, arrow, text, rect, circle, line, path } = require("./lib");

const PINK = "#C2477E";

function box(x, y, w, h, label, o = {}) {
	let s = rect(x, y, w, h, { fill: o.fill || C.paper, r: 3 });
	const lines = Array.isArray(label) ? label : [label];
	lines.forEach((t, i) => { s += text(x + w / 2, y + h / 2 + 3 + (i - (lines.length - 1) / 2) * 10, t, { size: o.size || 8, bold: o.bold, color: o.color }); });
	return s;
}

// x/y axes with labels; returns svg body
function axes(x0, y0, x1, y1, xl, yl) {
	return arrow(x0, y0, x1, y0, C.ink, 1) + arrow(x0, y0, x0, y1, C.ink, 1) +
		text(x1, y0 - 4, xl, { size: 7, anchor: "end" }) + text(x0 + 4, y1 + 2, yl, { size: 7, anchor: "start" });
}

module.exports = {
	// Atkinson-Shiffrin model
	"mem-model": svg(200, 92,
		text(20, 12, "input", { size: 7, color: C.faint }) + arrow(10, 30, 22, 30, C.ink, 1) +
		box(22, 18, 48, 24, ["sensory", "memory"], { fill: "#F6DCE8" }) +
		arrow(70, 30, 82, 30, C.ink, 1) +
		box(82, 18, 50, 24, ["short-term", "memory"], { fill: "#FFF6D6" }) +
		arrow(132, 26, 146, 26, C.ink, 1) + arrow(146, 36, 132, 36, C.ink, 1) +
		box(146, 18, 50, 24, ["long-term", "memory"], { fill: "#E3ECF7" }) +
		text(46, 58, "under 1-3 s", { size: 7, color: C.faint }) + text(107, 58, "~20 s, 7±2 items", { size: 7, color: C.faint }) + text(171, 58, "unlimited", { size: 7, color: C.faint }) +
		path("M96,18 C96,4 116,4 116,16", { sw: 0.9, stroke: C.blue }) + arrow(116, 12, 116, 17, C.blue, 0.9, 3) + text(138, 8, "rehearsal", { size: 7, color: C.blue }) +
		text(100, 76, "attention brings input into short-term memory;", { size: 7 }) +
		text(100, 86, "encoding stores it, retrieval brings it back", { size: 7 })),

	// Ebbinghaus forgetting curve
	"mem-forget": (() => {
		const X = d => 26 + d * 5.2, Y = p => 84 - p * 0.68;
		let s = axes(26, 84, 190, 8, "days", "% remembered");
		const pts = [[0, 100], [0.04, 58], [0.4, 44], [1, 34], [2, 28], [6, 25], [31, 21]];
		let d = "";
		for (let t = 0; t <= 31; t += 0.1) { const p = 21 + 79 * Math.exp(-t * 1.9) * 0.62 + 79 * 0.38 * Math.exp(-t * 0.18); d += (d ? "L" : "M") + X(t).toFixed(1) + "," + Y(Math.min(100, p)).toFixed(1); }
		s += path(d, { stroke: PINK, sw: 1.8 });
		for (const v of [0, 50, 100]) s += text(22, Y(v) + 3, v, { size: 7, anchor: "end" });
		for (const t of [0, 10, 20, 30]) s += text(X(t), 94, t, { size: 7 });
		s += text(120, 40, "most is lost in the first day,", { size: 7 }) + text(120, 49, "then forgetting levels off", { size: 7 });
		return svg(200, 98, s);
	})(),

	// serial position curve
	"mem-serial": (() => {
		const X = i => 28 + i * 11, Y = p => 82 - p * 0.66;
		const vals = [88, 72, 58, 46, 40, 36, 34, 35, 38, 50, 68, 84, 92, 95].slice(0, 14);
		let s = axes(24, 82, 190, 8, "position in list", "% recalled");
		s += path(vals.map((v, i) => (i ? "L" : "M") + X(i) + "," + Y(v)).join(""), { stroke: PINK, sw: 1.8 });
		vals.forEach((v, i) => { s += circle(X(i), Y(v), 1.8, { fill: PINK, stroke: PINK }); });
		s += text(X(1), Y(96), "primacy", { size: 7, color: C.blue }) + text(X(12), Y(104), "recency", { size: 7, color: C.blue });
		s += text(X(1), 94, "first", { size: 7, color: C.faint }) + text(X(13), 94, "last", { size: 7, color: C.faint });
		return svg(200, 98, s);
	})(),

	// Piaget's stages
	"dev-piaget": (() => {
		const st = [["sensorimotor", "0-2"], ["preoperational", "2-7"], ["concrete", "7-11"], ["formal", "11+"]];
		const cols = ["#F6DCE8", "#FFF6D6", "#D6EBCF", "#E3ECF7"];
		let s = "";
		st.forEach(([n, a], i) => { s += box(6 + i * 47.5, 22 + (3 - i) * 0, 46, 34, [n, a + " yrs"], { fill: cols[i], size: 7 }); });
		s += arrow(6, 66, 194, 66, C.ink, 1) + text(100, 78, "age", { size: 7, color: C.faint });
		return svg(200, 84, s + text(100, 12, "Piaget's stages of cognitive development", { size: 8 }));
	})(),

	// Maslow's hierarchy
	"emo-maslow": (() => {
		const lv = ["self-actualisation", "esteem", "love and belonging", "safety", "physiological"];
		const cols = ["#C2477E", "#D9779F", "#E9A7C0", "#F2C6D8", "#F8E1EB"];
		let s = "";
		lv.forEach((n, i) => {
			const yT = 6 + i * 18, yB = yT + 18, half = t => 34 + (t - 6) * 0.7;
			s += path(`M${100 - half(yT)},${yT} L${100 + half(yT)},${yT} L${100 + half(yB)},${yB} L${100 - half(yB)},${yB} Z`, { fill: cols[i], sw: 1 });
			s += text(100, yT + 12, n, { size: i === 0 ? 7 : 8, color: i < 2 ? C.paper : C.ink });
		});
		return svg(200, 100, s);
	})(),

	// Yerkes-Dodson inverted U
	"emo-yerkes": (() => {
		let s = axes(24, 82, 190, 8, "arousal", "performance");
		let d = "";
		for (let a = 0; a <= 1; a += 0.02) d += (d ? "L" : "M") + (30 + a * 150).toFixed(1) + "," + (70 - 56 * Math.exp(-Math.pow((a - 0.5) / 0.24, 2))).toFixed(1);
		s += path(d, { stroke: PINK, sw: 1.8 });
		s += text(40, 60, "bored", { size: 7, color: C.faint }) + text(105, 12, "best", { size: 7, color: C.blue }) + text(170, 60, "panicked", { size: 7, color: C.faint });
		s += line(105, 16, 105, 82, { stroke: C.blue, sw: 0.6, dash: "2 2" });
		return svg(200, 94, s);
	})(),

	// Freud's iceberg
	"per-iceberg": svg(200, 110,
		rect(0, 34, 200, 76, { fill: "#D8E6F2", stroke: "none" }) + line(0, 34, 200, 34, { stroke: C.blue }) +
		path("M80,34 L92,8 L112,6 L122,34 Z", { fill: C.paper, sw: 1.2 }) +
		path("M80,34 L62,70 L58,104 L144,106 L140,66 L122,34 Z", { fill: "#F1F5F9", sw: 1.2 }) +
		line(66, 58, 136, 58, { sw: 0.6, dash: "2 2" }) +
		text(100, 26, "ego", { size: 7, bold: true }) + text(100, 50, "superego", { size: 7, bold: true }) + text(100, 86, "id", { size: 8, bold: true }) +
		text(170, 22, "conscious", { size: 7, anchor: "middle" }) + text(172, 50, "preconscious", { size: 7 }) + text(172, 88, "unconscious", { size: 7 }) +
		text(30, 22, "surface", { size: 7, color: C.faint })),

	// Asch line task
	"soc-asch": svg(200, 80,
		text(36, 10, "standard", { size: 8 }) + line(36, 20, 36, 66, { sw: 3 }) +
		text(126, 10, "comparison lines", { size: 8 }) +
		line(96, 30, 96, 66, { sw: 3 }) + line(126, 20, 126, 66, { sw: 3 }) + line(156, 12, 156, 66, { sw: 3 }) +
		text(96, 76, "A", { size: 9, bold: true }) + text(126, 76, "B", { size: 9, bold: true }) + text(156, 76, "C", { size: 9, bold: true })),
};
