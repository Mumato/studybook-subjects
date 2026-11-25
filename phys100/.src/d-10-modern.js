const { C, svg, arrow, text, rect, circle, line, path, wave } = require("./lib");

module.exports = {
	// photoelectric effect
	"atm-photo": svg(200, 90,
		rect(20, 64, 160, 14, { fill: "#B8BCC4" }) + text(100, 74, "metal", { size: 8 }) +
		`<g transform="rotate(50 40 14)">` + wave(40, 14, 52, 3, 8, { stroke: C.purple, sw: 1.2 }) + `</g>` + text(50, 12, "blue light", { size: 8, color: C.purple, anchor: "start" }) +
		circle(96, 58, 3, { fill: C.blue, stroke: C.blue }) + arrow(100, 55, 116, 30, C.blue, 1.2) + text(108, 24, "electron", { size: 8, color: C.blue }) +
		`<g transform="rotate(60 160 6)">` + wave(160, 6, 56, 3, 22, { stroke: C.red, sw: 1.2 }) + `</g>` + text(172, 9, "red: none", { size: 8, color: C.red, anchor: "start" }) +
		text(100, 88, "only high-frequency light frees electrons", { size: 7, color: C.faint })),

	// energy levels and a photon
	"atm-levels": (() => {
		let s = "";
		const lv = [[86, "n = 1"], [50, "n = 2"], [30, "n = 3"], [20, "n = 4"]];
		for (const [y, n] of lv) s += line(30, y, 120, y, { sw: 1.2 }) + text(26, y + 3, n, { size: 8, anchor: "end" });
		s += circle(70, 50, 3, { fill: C.blue, stroke: C.blue }) + arrow(70, 54, 70, 82, C.blue, 1.2);
		s += wave(76, 70, 50, 3, 8, { stroke: C.purple, sw: 1.2 }) + arrow(124, 70, 134, 70, C.purple, 1.2) + text(140, 64, "photon", { size: 8, color: C.purple, anchor: "start" });
		s += text(140, 76, "energy = gap", { size: 8, anchor: "start" });
		return svg(200, 96, s + text(100, 10, "electron drops a level, light comes out", { size: 8, color: C.faint }));
	})(),

	// line spectrum of hydrogen (visible lines)
	"atm-spectrum": (() => {
		let s = rect(10, 20, 180, 26, { fill: "#141418" });
		for (const [nm, col] of [[410, "#7B3FB8"], [434, "#4B4BE0"], [486, "#2FA8C8"], [656, "#E0302A"]]) {
			const x = 10 + (nm - 400) / 300 * 180;
			s += line(x, 20, x, 46, { stroke: col, sw: 2 });
		}
		s += text(10, 58, "400 nm", { size: 7, anchor: "start", color: C.faint }) + text(190, 58, "700 nm", { size: 7, anchor: "end", color: C.faint });
		return svg(200, 64, s + text(100, 12, "hydrogen gives only these colours", { size: 8 }));
	})(),

	// penetration of alpha, beta, gamma
	"nuc-rays": svg(200, 90,
		rect(70, 10, 4, 64, { fill: "#F4EBD8" }) + rect(110, 10, 8, 64, { fill: "#B8BCC4" }) + rect(150, 10, 16, 64, { fill: "#6E6E78" }) +
		text(72, 84, "paper", { size: 7 }) + text(114, 84, "aluminium", { size: 7 }) + text(158, 84, "lead", { size: 7 }) +
		circle(16, 42, 7, { fill: C.orange, stroke: C.ink }) +
		arrow(24, 24, 68, 24, C.red, 1.4) + text(30, 20, "alpha", { size: 8, color: C.red, anchor: "start" }) +
		arrow(24, 42, 108, 42, C.blue, 1.4) + text(30, 38, "beta", { size: 8, color: C.blue, anchor: "start" }) +
		arrow(24, 60, 148, 60, C.green, 1.4) + line(166, 60, 190, 60, { stroke: C.green, sw: 0.6, dash: "2 2" }) + text(30, 56, "gamma", { size: 8, color: C.green, anchor: "start" })),

	// half-life curve
	"nuc-half": (() => {
		const X = t => 26 + t * 40, Y = f => 84 - f * 70;
		let s = arrow(X(0), Y(0), X(4.2), Y(0), C.ink, 1) + arrow(X(0), Y(0), X(0), Y(1.12), C.ink, 1);
		let d = "";
		for (let t = 0; t <= 4.05; t += 0.05) d += (t ? "L" : "M") + X(t).toFixed(1) + "," + Y(Math.pow(0.5, t)).toFixed(1);
		s += path(d, { stroke: C.red, sw: 1.8 });
		for (let k = 1; k <= 3; k++) s += line(X(k), Y(0), X(k), Y(Math.pow(0.5, k)), { stroke: C.faint, sw: 0.6, dash: "2 2" }) + text(X(k), Y(0) + 10, k, { size: 8 });
		s += text(22, Y(1) + 3, "100%", { size: 7, anchor: "end" }) + text(22, Y(0.5) + 3, "50%", { size: 7, anchor: "end" }) + text(22, Y(0.25) + 3, "25%", { size: 7, anchor: "end" });
		s += text(X(4.2), Y(0) + 10, "half-lives", { size: 7, anchor: "end" }) + text(X(0) + 4, 9, "atoms left", { size: 8, anchor: "start" });
		return svg(200, 100, s);
	})(),

	// fission chain reaction
	"nuc-fission": (() => {
		let s = circle(10, 50, 3, { fill: C.blue, stroke: C.blue }) + arrow(14, 50, 42, 50, C.blue, 1);
		s += circle(56, 50, 12, { fill: C.orange }) + text(56, 53, "U", { size: 9, bold: true });
		s += circle(96, 32, 8, { fill: C.sand }) + circle(96, 70, 8, { fill: C.sand });
		s += arrow(66, 44, 88, 34, C.ink, 0.8) + arrow(66, 56, 88, 68, C.ink, 0.8);
		for (const [y2, n] of [[20, 0], [50, 1], [80, 2]]) {
			s += circle(118, y2, 3, { fill: C.blue, stroke: C.blue }) + arrow(70, 50, 114, y2, C.blue, 0.8);
			s += arrow(122, y2, 140, y2, C.blue, 0.8) + circle(152, y2, 9, { fill: C.orange }) + text(152, y2 + 3, "U", { size: 8, bold: true });
		}
		s += text(186, 44, "more", { size: 8, anchor: "end" }) + text(194, 54, "fissions", { size: 8, anchor: "end" });
		return svg(200, 96, s + text(56, 92, "1 neutron in, 3 out", { size: 8, color: C.faint }));
	})(),

	// light clock: at rest vs moving
	"rel-clock": (() => {
		let s = rect(20, 14, 30, 4, { fill: C.sand }) + rect(20, 80, 30, 4, { fill: C.sand }) + arrow(35, 78, 35, 20, C.orange, 1.2) + arrow(39, 20, 39, 78, C.orange, 1.2);
		s += text(35, 96, "at rest", { size: 8 });
		for (const x of [80, 130, 180]) s += rect(x - 15, 14, 30, 4, { fill: C.sand, dash: x === 130 ? "" : "2 2" }) + rect(x - 15, 80, 30, 4, { fill: C.sand, dash: x === 130 ? "" : "2 2" });
		s += arrow(80, 78, 128, 20, C.orange, 1.2) + arrow(132, 20, 180, 78, C.orange, 1.2);
		s += arrow(110, 92, 150, 92, C.ink, 1) + text(130, 104, "moving: longer path", { size: 8 });
		return svg(200, 108, s);
	})(),
};
