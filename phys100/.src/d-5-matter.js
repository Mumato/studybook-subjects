const { C, svg, arrow, text, rect, circle, line, path, ground } = require("./lib");

function tank(x, y, w, h, level) {
	return rect(x, y + h * (1 - level), w, h * level, { fill: C.water, stroke: "none" }) + path(`M${x},${y} L${x},${y + h} L${x + w},${y + h} L${x + w},${y}`, { sw: 1.4 });
}

module.exports = {
	// same size, different mass
	"mat-density": svg(200, 80,
		rect(30, 24, 40, 40, { fill: "#C8A46A" }) + text(50, 48, "wood", { size: 8 }) + text(50, 76, "1 L: 0.6 kg", { size: 8 }) +
		rect(80, 24, 40, 40, { fill: C.water }) + text(100, 48, "water", { size: 8 }) + text(100, 76, "1 L: 1 kg", { size: 8 }) +
		rect(130, 24, 40, 40, { fill: "#8C8C94" }) + text(150, 48, "iron", { size: 8, color: C.paper }) + text(150, 76, "1 L: 7.9 kg", { size: 8 }) +
		text(100, 12, "same volume, different mass", { size: 8, color: C.faint })),

	// water spurts farther from lower holes
	"mat-holes": svg(200, 110,
		tank(40, 10, 50, 90, 0.9) + ground(20, 190, 100) +
		[[30, 0.25], [55, 0.55], [80, 0.8]].map(([y, k]) =>
			circle(90, y + 8, 1.5, { fill: C.ink }) + path(`M91,${y + 8} Q${91 + 60 * k},${y + 8} ${91 + 95 * k},100`, { stroke: C.blue, sw: 1.4 })).join("") +
		text(140, 24, "deeper:", { size: 8, anchor: "start" }) + text(140, 34, "more pressure,", { size: 8, anchor: "start" }) + text(140, 44, "faster jet", { size: 8, anchor: "start" })),

	// buoyant force on a submerged block
	"mat-buoy": svg(200, 100,
		tank(40, 8, 120, 86, 0.85) +
		rect(84, 40, 32, 26, { fill: C.sand }) +
		arrow(100, 40, 100, 16, C.green) + text(104, 22, "buoyant force", { size: 8, anchor: "start", color: C.green }) +
		arrow(100, 66, 100, 90, C.red) + text(104, 88, "weight", { size: 8, anchor: "start", color: C.red })),

	// floating: how deep things sink
	"mat-float": svg(200, 90,
		rect(10, 40, 180, 46, { fill: C.water, stroke: "none" }) + line(10, 40, 190, 40, { stroke: C.blue }) +
		rect(24, 28, 34, 20, { fill: "#C8A46A" }) + text(41, 22, "wood", { size: 8 }) +
		path("M88,36 L120,36 L116,72 L92,72 Z", { fill: "#EAF3FA" }) + text(104, 30, "ice", { size: 8 }) +
		rect(150, 70, 22, 14, { fill: "#8C8C94" }) + text(161, 64, "rock", { size: 8 }) +
		line(10, 86, 190, 86, { sw: 1.4 })),

	// wing: faster air above, lower pressure
	"mat-wing": svg(200, 100, '<g transform="translate(0,8)">' +
		[16, 26].map(y => path(`M6,${y} C60,${y} 70,${y - 14 + (y - 16)} 110,${y - 12 + (y - 16) / 2} S170,${y} 194,${y}`, { stroke: C.blue, sw: 0.9 })).join("") +
		[66, 76].map(y => path(`M6,${y} C60,${y} 90,${y + 2} 194,${y}`, { stroke: C.blue, sw: 0.9 })).join("") +
		path("M40,50 C60,30 120,30 170,50 C120,54 60,56 40,50 Z", { fill: C.sand }) +
		arrow(100, 52, 100, 36, C.green) + text(104, 46, "lift", { size: 8, color: C.green, anchor: "start" }) + "</g>" +
		text(110, 8, "fast air, low pressure", { size: 8, color: C.blue }) + text(110, 97, "slower air, higher pressure", { size: 8, color: C.blue })),

	// atmosphere: column of air pressing down
	"mat-air": svg(200, 90,
		rect(80, 6, 40, 70, { fill: C.sky, stroke: C.faint, dash: "3 2" }) + ground(20, 180, 76) +
		[20, 36, 52].map(y => arrow(100, y, 100, y + 10, C.blue, 1.2)).join("") +
		text(128, 30, "column of air", { size: 8, anchor: "start" }) + text(128, 40, "~10 tonnes", { size: 8, anchor: "start" }) +
		text(128, 50, "on each m²", { size: 8, anchor: "start" }) + text(100, 88, "1 m²", { size: 8 })),
};
