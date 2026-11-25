const { C, svg, arrow, text, rect, circle, line, path, ground, wave } = require("./lib");

function thermo(x, label, marks) {
	let s = rect(x - 5, 10, 10, 80, { r: 5, fill: C.paper }) + circle(x, 94, 7, { fill: C.red, stroke: C.ink }) + rect(x - 2, 40, 4, 54, { fill: C.red, stroke: "none" });
	for (const [y, t] of marks) s += line(x + 5, y, x + 10, y, { sw: 0.8 }) + text(x + 12, y + 3, t, { size: 8, anchor: "start" });
	return s + text(x, 8, label, { size: 8, bold: true });
}

module.exports = {
	// Celsius vs Kelvin
	"hea-scales": svg(200, 116,
		thermo(40, "°C", [[20, "100 boils"], [60, "0 freezes"]]) + thermo(130, "K", [[20, "373"], [60, "273"]]) +
		text(100, 114, "absolute zero: −273 °C = 0 K", { size: 8, color: C.faint })),

	// three ways heat moves
	"hea-transfer": svg(200, 110,
		rect(50, 40, 70, 40, { fill: C.water }) + line(46, 40, 124, 40, { sw: 1.4 }) + path("M50,40 L50,80 L120,80 L120,40", { sw: 1.4 }) +
		line(120, 46, 178, 46, { sw: 3, stroke: "#8C8C94" }) + text(150, 58, "conduction", { size: 8, color: C.red }) +
		path("M70,74 C62,60 62,52 72,48 M72,48 L68,46 M72,48 L71,52", { stroke: C.blue }) +
		path("M100,74 C108,60 108,52 98,48", { stroke: C.blue }) + text(85, 64, "convection", { size: 7, color: C.blue }) +
		path("M60,96 L66,84 L72,96 L78,84 L84,96 L90,84 L96,96 L102,84 L108,96", { stroke: C.orange, sw: 1.6 }) +
		ground(30, 140, 100) +
		circle(184, 14, 9, { fill: "#F5D76E", stroke: C.orange }) + arrow(172, 18, 126, 34, C.orange, 1) + text(150, 14, "radiation", { size: 8, color: C.orange }) +
		text(160, 96, "flame heats the pot", { size: 7, color: C.faint })),

	// heating curve of water
	"hea-curve": (() => {
		const X = q => 28 + q * 1.55, Y = t => 92 - (t + 20) * 0.58;
		let s = arrow(X(0), Y(-20), X(108), Y(-20), C.ink, 1) + arrow(X(0), Y(-20), X(0), Y(130), C.ink, 1);
		s += path(`M${X(0)},${Y(-20)} L${X(6)},${Y(0)} L${X(26)},${Y(0)} L${X(46)},${Y(100)} L${X(96)},${Y(100)} L${X(104)},${Y(125)}`, { stroke: C.red, sw: 1.8 });
		s += text(X(16), Y(0) - 4, "melting", { size: 8 }) + text(X(71), Y(100) - 4, "boiling", { size: 8 });
		s += text(24, Y(0) + 3, "0", { size: 8, anchor: "end" }) + text(24, Y(100) + 3, "100", { size: 8, anchor: "end" });
		s += text(X(3), 9, "temperature (°C)", { size: 8, anchor: "start" }) + text(X(108), Y(-20) + 10, "heat added", { size: 8, anchor: "end" });
		return svg(200, 108, s);
	})(),

	// bimetallic strip
	"hea-strip": svg(200, 70,
		rect(10, 26, 70, 5, { fill: "#C97B3A", stroke: "none" }) + rect(10, 31, 70, 5, { fill: "#9AA0A8", stroke: "none" }) +
		text(45, 20, "cold: straight", { size: 8 }) + text(45, 48, "brass on top, steel below", { size: 7, color: C.faint }) +
		path("M110,28 Q150,28 186,52", { stroke: "#C97B3A", sw: 5 }) + path("M110,33 Q148,33 182,56", { stroke: "#9AA0A8", sw: 5 }) +
		text(150, 18, "hot: bends", { size: 8 }) + text(150, 68, "brass expands more", { size: 7, color: C.faint })),
};
