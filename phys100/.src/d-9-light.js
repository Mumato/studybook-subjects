const { C, svg, arrow, text, rect, circle, line, path, wave } = require("./lib");

const RAINBOW = ["#C0392B", "#E67E22", "#F1C40F", "#27AE60", "#2E86C1", "#5B2C83"];

module.exports = {
	// electromagnetic spectrum
	"lig-spectrum": (() => {
		let s = rect(8, 30, 184, 14, { fill: C.paper, sw: 0.8 });
		RAINBOW.forEach((c, i) => { s += rect(92 + i * 2.8, 30, 2.8, 14, { fill: c, stroke: "none", sw: 0 }); });
		for (const [n, x] of [["radio", 24], ["infrared", 72], ["UV", 124], ["gamma", 176]]) s += text(x, 25, n, { size: 7 });
		for (const [n, x] of [["microwave", 50], ["X-ray", 150]]) s += text(x, 54, n, { size: 7 });
		s += text(100, 56, "visible", { size: 7, bold: true }) + line(100, 46, 100, 48, { sw: 0.5 });
		s += wave(8, 82, 64, 6, 40, { stroke: C.red, sw: 1 }) + wave(128, 82, 64, 6, 6, { stroke: C.purple, sw: 1 });
		s += text(40, 100, "long wavelength,", { size: 7 }) + text(40, 108, "low frequency", { size: 7 });
		s += text(160, 100, "short wavelength,", { size: 7 }) + text(160, 108, "high energy", { size: 7 });
		return svg(200, 112, s + text(100, 10, "all travel at the speed of light", { size: 8, color: C.faint }));
	})(),

	// reflection from a flat mirror
	"lig-mirror": svg(200, 90,
		line(20, 70, 180, 70, { sw: 2 }) + [...Array(16)].map((_, i) => line(24 + i * 10, 70, 18 + i * 10, 76, { stroke: C.faint, sw: 0.6 })).join("") +
		line(100, 70, 100, 14, { stroke: C.faint, dash: "2 2", sw: 0.8 }) +
		arrow(40, 16, 98, 68, C.orange, 1.4) + arrow(102, 68, 160, 16, C.orange, 1.4) +
		path("M90,61 A12,12 0 0 1 100,58", { stroke: C.ink, sw: 0.8 }) + path("M100,58 A12,12 0 0 1 110,61", { stroke: C.ink, sw: 0.8 }) +
		text(84, 52, "in", { size: 8 }) + text(116, 52, "out", { size: 8 }) + text(100, 86, "angle in = angle out", { size: 8 })),

	// refraction into water and the bent straw
	"lig-refract": svg(200, 100,
		rect(8, 48, 184, 48, { fill: C.water, stroke: "none" }) + line(8, 48, 192, 48, { stroke: C.blue }) +
		line(70, 8, 70, 92, { stroke: C.faint, dash: "2 2", sw: 0.8 }) +
		arrow(30, 10, 69, 47, C.orange, 1.4) + arrow(70, 48, 88, 92, C.orange, 1.4) +
		text(20, 30, "air", { size: 8, anchor: "start" }) + text(20, 70, "water", { size: 8, anchor: "start" }) +
		text(96, 80, "bends toward", { size: 8, anchor: "start", color: C.ink }) + text(96, 90, "the normal", { size: 8, anchor: "start", color: C.ink }) +
		line(140, 14, 158, 48, { stroke: C.red, sw: 3 }) + line(158, 48, 190, 72, { stroke: C.red, sw: 3 }) +
		line(158, 48, 176, 82, { stroke: C.red, sw: 1, dash: "2 2" }) + text(176, 24, "straw", { size: 8, color: C.red }) +
		text(190, 90, "really here", { size: 7, color: C.ink, anchor: "end" })),

	// prism: white light splits into colours
	"lig-prism": (() => {
		let s = path("M80,90 L110,20 L140,90 Z", { fill: "#EAF3FA" }) + line(6, 64, 94, 56, { stroke: C.ink, sw: 2 }) + text(30, 52, "white light", { size: 8 });
		RAINBOW.forEach((c, i) => { s += line(94, 56, 128, 58 + i * 2, { stroke: c, sw: 1.2 }) + line(128, 58 + i * 2, 194, 60 + i * 7, { stroke: c, sw: 1.6 }); });
		return svg(200, 104, s + text(180, 52, "red", { size: 8, color: RAINBOW[0] }) + text(180, 102, "violet", { size: 8, color: RAINBOW[5] }));
	})(),

	// converging lens focuses parallel rays
	"lig-lens": (() => {
		let s = `<ellipse cx="80" cy="50" rx="8" ry="40" fill="#EAF3FA" stroke="${C.ink}" stroke-width="1.2"/>` + line(6, 50, 194, 50, { stroke: C.faint, sw: 0.6, dash: "3 2" });
		for (const y of [22, 36, 64, 78]) s += line(6, y, 80, y, { stroke: C.orange, sw: 1.2 }) + arrow(80, y, 140 + (140 - 80) * 0.001, 50 + (50 - y) * 0.0, C.orange, 1.2) + line(140, 50, 180, 50 + (50 - y) * 0.66, { stroke: C.orange, sw: 1.2 });
		s += line(6, 50, 194, 50, { stroke: C.orange, sw: 1.2 });
		s += circle(140, 50, 2.5, { fill: C.red, stroke: C.red }) + text(140, 12, "focal point", { size: 8, color: C.red }) + line(140, 15, 140, 46, { stroke: C.red, sw: 0.5, dash: "1 2" });
		s += line(80, 92, 140, 92, { sw: 0.6 }) + text(110, 99, "focal length", { size: 7, color: C.faint });
		return svg(200, 102, s);
	})(),

	// additive colour mixing
	"lig-rgb": svg(200, 100,
		`<defs><clipPath id="cR"><circle cx="84" cy="40" r="26"/></clipPath><clipPath id="cG"><circle cx="116" cy="40" r="26"/></clipPath><clipPath id="cB"><circle cx="100" cy="66" r="26"/></clipPath></defs>` +
		`<rect width="200" height="100" rx="4" fill="#1E1E24"/>` +
		`<circle cx="84" cy="40" r="26" fill="#FF2020"/><circle cx="116" cy="40" r="26" fill="#20E020"/><circle cx="100" cy="66" r="26" fill="#2040FF"/>` +
		`<g clip-path="url(#cR)"><circle cx="116" cy="40" r="26" fill="#FFFF30"/><circle cx="100" cy="66" r="26" fill="#FF30FF"/></g>` +
		`<g clip-path="url(#cG)"><circle cx="100" cy="66" r="26" fill="#30FFFF"/></g>` +
		`<g clip-path="url(#cR)"><g clip-path="url(#cG)"><circle cx="100" cy="66" r="26" fill="#FFFFFF"/></g></g>` +
		text(40, 30, "red", { size: 8, color: "#fff" }) + text(160, 30, "green", { size: 8, color: "#fff" }) + text(150, 90, "blue", { size: 8, color: "#fff" })),
};
