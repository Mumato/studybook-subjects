const { C, svg, arrow, text, rect, circle, line, path } = require("./lib");

function ball(x, y, sign) {
	const fill = sign === "+" ? "#F2C4BE" : "#C4D6F2";
	return circle(x, y, 9, { fill }) + text(x, y + 3.5, sign === "+" ? "+" : "−", { size: 11, bold: true });
}
function bulb(x, y) {
	return circle(x, y, 8, { fill: "#FBEFB0" }) + path(`M${x - 4},${y + 2} L${x - 2},${y - 3} L${x},${y + 2} L${x + 2},${y - 3} L${x + 4},${y + 2}`, { sw: 0.8 });
}
function loopWithCell(x1, y1, x2, y2, by) {
	return path(`M${x1},${by - 3} L${x1},${y1} L${x2},${y1} L${x2},${y2} L${x1},${y2} L${x1},${by + 3}`, { sw: 1.4 }) + battery(x1, by);
}
function battery(x, y) { // vertical cell, + on top
	return line(x - 8, y - 3, x + 8, y - 3, { sw: 1.6 }) + line(x - 4, y + 3, x + 4, y + 3, { sw: 3 }) + text(x + 12, y - 4, "+", { size: 8, anchor: "start" });
}

module.exports = {
	// like charges repel, unlike attract
	"ele-charges": svg(200, 76,
		ball(30, 18, "+") + ball(80, 18, "+") + arrow(21, 18, 6, 18, C.red, 1.2) + arrow(89, 18, 104, 18, C.red, 1.2) + text(160, 22, "like: repel", { size: 8 }) +
		ball(30, 56, "−") + ball(80, 56, "−") + arrow(21, 56, 6, 56, C.red, 1.2) + arrow(89, 56, 104, 56, C.red, 1.2) +
		ball(130, 56, "+") + ball(170, 56, "−") + arrow(139, 56, 148, 56, C.green, 1.2) + arrow(161, 56, 152, 56, C.green, 1.2) + text(150, 40, "unlike: attract", { size: 8 })),

	// charging by induction / polarization: charged balloon and neutral wall
	"ele-balloon": svg(200, 90,
		rect(150, 6, 20, 80, { fill: C.sand }) +
		[18, 34, 50, 66].map(y => text(156, y + 3, "+", { size: 8, bold: true, color: C.red }) + text(165, y + 3, "−", { size: 8, bold: true, color: C.blue })).join("") +
		`<ellipse cx="110" cy="40" rx="22" ry="28" fill="#F2B8C6" stroke="${C.ink}" stroke-width="1.2"/>` + line(110, 68, 106, 86, { sw: 0.8 }) +
		[[122, 26], [128, 40], [122, 54], [104, 30], [104, 50]].map(([x, y]) => text(x, y + 3, "−", { size: 9, bold: true, color: C.blue })).join("") +
		text(70, 12, "charged balloon", { size: 8 })),

	// simple circuit
	"ele-circuit": svg(200, 90,
		loopWithCell(40, 20, 160, 70, 45) + bulb(160, 45) +
		arrow(80, 14, 120, 14, C.orange, 1) + text(100, 10, "current", { size: 8, color: C.orange }) +
		text(20, 48, "12 V", { size: 8, anchor: "end" }) + text(178, 48, "bulb", { size: 8, anchor: "start" })),

	// series vs parallel
	"ele-series": svg(200, 80,
		loopWithCell(30, 14, 170, 66, 40) + bulb(80, 14) + bulb(120, 14) +
		text(100, 78, "series: one path", { size: 8 })),
	"ele-parallel": svg(200, 90,
		loopWithCell(30, 14, 150, 72, 43) + line(100, 14, 100, 72, { sw: 1.4 }) + bulb(100, 43) + bulb(150, 43) +
		text(100, 86, "parallel: separate paths", { size: 8 })),

	// bar magnet field lines
	"mag-bar": (() => {
		let s = "";
		for (const k of [14, 26, 40]) {
			s += path(`M70,50 C70,${50 - k * 1.2} 130,${50 - k * 1.2} 130,50`, { stroke: C.blue, sw: 0.9 });
			s += path(`M70,50 C70,${50 + k * 1.2} 130,${50 + k * 1.2} 130,50`, { stroke: C.blue, sw: 0.9 });
			s += arrow(98, 50 - k * 0.9, 103, 50 - k * 0.9, C.blue, 1, 4) + arrow(98, 50 + k * 0.9, 103, 50 + k * 0.9, C.blue, 1, 4);
		}
		s += rect(70, 42, 30, 16, { fill: "#E8A09A" }) + rect(100, 42, 30, 16, { fill: "#A8BEE0" });
		s += text(85, 54, "N", { size: 9, bold: true }) + text(115, 54, "S", { size: 9, bold: true });
		return svg(200, 108, s + text(100, 106, "field lines run from N to S outside", { size: 8, color: C.faint }));
	})(),

	// magnet pushed into a coil makes current
	"mag-induce": svg(200, 90,
		[0, 1, 2, 3, 4, 5].map(i => `<ellipse cx="${100 + i * 8}" cy="40" rx="4" ry="18" fill="none" stroke="${C.orange}" stroke-width="1.6"/>`).join("") +
		path("M100,58 L100,76 L120,76", { sw: 1 }) + path("M140,58 L140,76 L134,76", { sw: 1 }) +
		circle(127, 76, 7, { fill: C.paper }) + line(127, 76, 130, 71, { sw: 0.8 }) + text(127, 88, "meter", { size: 7, color: C.faint }) +
		rect(22, 32, 24, 16, { fill: "#E8A09A" }) + rect(46, 32, 24, 16, { fill: "#A8BEE0" }) + text(34, 44, "S", { size: 8, bold: true }) + text(58, 44, "N", { size: 8, bold: true }) +
		arrow(72, 40, 88, 40, C.red) + text(40, 22, "move the magnet", { size: 8, color: C.red })),

	// transformer
	"mag-transformer": svg(200, 90,
		rect(50, 14, 100, 64, { fill: "#D9D4C7", sw: 1.2 }) + rect(68, 30, 64, 32, { fill: C.paper }) +
		[0, 1, 2, 3, 4].map(i => line(44, 22 + i * 11, 74, 26 + i * 11, { stroke: C.orange, sw: 2 })).join("") +
		[0, 1].map(i => line(126, 34 + i * 18, 156, 38 + i * 18, { stroke: C.orange, sw: 2 })).join("") +
		text(30, 50, "in", { size: 8, anchor: "end" }) + text(170, 50, "out", { size: 8, anchor: "start" }) +
		text(59, 88, "many turns", { size: 8 }) + text(141, 88, "few turns", { size: 8 })),
};
