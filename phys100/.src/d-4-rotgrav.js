const { C, svg, arrow, text, rect, circle, line, path, ground, person } = require("./lib");

function seesaw(lw, lx, rw, rx, o = {}) {
	// plank from 10 to 190, pivot at 100; lx/rx are distances in metres, 30 px per metre
	const X = m => 100 + m * 27;
	let s = line(10, 50, 190, 50, { sw: 3 }) + path("M100,52 L90,72 L110,72 Z", { fill: C.sand }) + ground(60, 140, 72);
	const block = (x, label, color) => rect(x - 12, 32, 24, 16, { fill: color }) + text(x, 44, label, { size: 8, bold: true });
	s += block(X(-lx), lw, C.sky) + block(X(rx), rw, C.sand);
	s += line(X(-lx), 58, 100, 58, { stroke: C.faint, sw: 0.6 }) + text((X(-lx) + 100) / 2, 66, o.ll || `${lx} m`, { size: 8, color: C.faint });
	s += line(100, 58, X(rx), 58, { stroke: C.faint, sw: 0.6 }) + text((X(rx) + 100) / 2, 66, o.rl || `${rx} m`, { size: 8, color: C.faint });
	return svg(200, 80, s);
}

// dashed plumb line from the centre of gravity of a 30x50 box tilted by deg about its bottom-left corner (px, py)
function cgLine(px, py, deg) {
	const a = deg * Math.PI / 180, dx = 15, dy = -25;
	const x = px + dx * Math.cos(a) - dy * Math.sin(a), y = py + dx * Math.sin(a) + dy * Math.cos(a);
	return line(x, y, x, py, { stroke: C.red, dash: "2 2", sw: 0.8 });
}

module.exports = {
	// whirling ball: string cut -> tangent line
	"rot-cut": svg(200, 110,
		circle(80, 58, 40, { stroke: C.faint, dash: "3 2" }) + circle(80, 58, 2, { fill: C.ink }) +
		line(80, 58, 80, 18, { stroke: C.faint, sw: 0.8, dash: "1 2" }) +
		circle(80, 18, 5, { fill: C.red, stroke: C.red }) +
		line(86, 18, 190, 18, { stroke: C.red, sw: 1, dash: "4 3" }) + arrow(150, 18, 175, 18, C.red) +
		arrow(80, 26, 80, 46, C.green) + text(84, 40, "pull toward centre", { size: 8, anchor: "start", color: C.green }) +
		text(140, 12, "string cut: straight on", { size: 8, color: C.red }) + text(80, 108, "seen from above", { size: 8, color: C.faint })),

	// merry-go-round: inner and outer horses
	"rot-merry": svg(200, 100,
		circle(100, 50, 44, { fill: "#F4E9D0" }) + circle(100, 50, 3, { fill: C.ink }) +
		circle(100, 30, 4, { fill: C.blue, stroke: C.blue }) + text(108, 33, "A", { size: 9, anchor: "start", bold: true }) +
		circle(100, 10, 4, { fill: C.red, stroke: C.red }) + text(108, 13, "B", { size: 9, anchor: "start", bold: true }) +
		path("M150,30 A56,56 0 0 1 150,70", { stroke: C.faint }) + arrow(150, 66, 148, 72, C.faint, 1) + text(176, 54, "turns", { size: 8, color: C.faint })),

	"rot-seesaw1": seesaw("600 N", 1, "300 N", 2),
	"rot-seesaw2": seesaw("400 N", 1.5, "200 N", 3, { rl: "? m" }),

	// box tipping: centre of gravity inside / outside the base
	"rot-tip": svg(200, 100,
		ground(10, 190, 86) +
		`<g transform="rotate(-20 40 86)">` + rect(40, 36, 30, 50, { fill: C.sand }) + circle(55, 61, 2.5, { fill: C.red, stroke: C.red }) + `</g>` +
		cgLine(40, 86, -20) + line(40, 82, 40, 90, { stroke: C.ink, sw: 0.6 }) +
		text(55, 98, "tips back: stable", { size: 8 }) +
		`<g transform="rotate(-45 130 86)">` + rect(130, 36, 30, 50, { fill: C.sand }) + circle(145, 61, 2.5, { fill: C.red, stroke: C.red }) + `</g>` +
		cgLine(130, 86, -45) +
		text(150, 98, "falls over", { size: 8 })),

	// skater arms out / in
	"rot-skater": svg(200, 90,
		circle(55, 20, 5) + line(55, 25, 55, 55) + line(55, 55, 50, 80) + line(55, 55, 60, 80) + line(55, 32, 25, 32) + line(55, 32, 85, 32) +
		circle(25, 32, 3, { fill: C.ink }) + circle(85, 32, 3, { fill: C.ink }) +
		text(55, 89, "arms out: slow spin", { size: 8 }) +
		circle(145, 20, 5) + line(145, 25, 145, 55) + line(145, 55, 140, 80) + line(145, 55, 150, 80) + line(145, 32, 139, 38) + line(145, 32, 151, 38) +
		path("M128,46 A18,6 0 1 0 162,46", { stroke: C.blue }) + arrow(160, 47, 163, 44, C.blue, 1) +
		text(145, 89, "arms in: fast spin", { size: 8 })),

	// inverse square: light/gravity spreads over 4x the area at 2x distance
	"grv-inverse": svg(200, 90,
		circle(14, 45, 4, { fill: C.orange, stroke: C.orange }) +
		line(14, 45, 186, 5, { stroke: C.faint, sw: 0.6 }) + line(14, 45, 186, 85, { stroke: C.faint, sw: 0.6 }) +
		rect(68, 32, 4, 26, { fill: C.sky }) + rect(122, 20, 4, 50, { fill: C.sky }) +
		line(124, 45, 124, 45) + line(122, 45, 126, 45, { sw: 0.6 }) +
		text(70, 72, "d", { size: 9, italic: true }) + text(124, 82, "2d", { size: 9, italic: true }) +
		text(150, 20, "4× the area,", { size: 8, anchor: "start" }) + text(150, 30, "¼ as strong", { size: 8, anchor: "start" })),

	// tides: two bulges
	"grv-tides": svg(200, 80,
		`<ellipse cx="60" cy="40" rx="36" ry="27" fill="${C.water}" opacity="0.6"/>` + circle(60, 40, 24, { fill: C.green, stroke: C.ink }) +
		text(60, 43, "Earth", { size: 8, color: C.paper }) + circle(170, 40, 8, { fill: "#D9D4C7" }) + text(170, 60, "Moon", { size: 8 }) +
		text(18, 76, "high tide", { size: 8, color: C.blue }) + text(108, 76, "high tide", { size: 8, color: C.blue }) +
		text(60, 9, "low tide", { size: 8, color: C.faint }) + text(140, 18, "not to scale", { size: 7, color: C.faint })),

	// thrown horizontally vs dropped: same height at each moment
	"grv-proj": (() => {
		let s = line(10, 14, 30, 14, { sw: 2 }) + ground(10, 190, 100);
		for (let t = 0; t <= 4; t++) {
			const y = 14 + 5 * t * t * 1.07;
			s += circle(24, y, 3.5, { fill: C.red, stroke: C.red });
			s += circle(24 + t * 40, y, 3.5, { fill: C.blue, stroke: C.blue });
			if (t) s += line(24, y, 24 + t * 40, y, { stroke: C.faint, sw: 0.5, dash: "2 2" });
		}
		return svg(200, 106, s + text(110, 10, "dropped (red) vs thrown sideways (blue)", { size: 8 }));
	})(),

	// Newton's cannon
	"grv-cannon": svg(200, 120,
		`<path d="M100,118 m-80,0 a80,80 0 1 1 160,0" fill="${C.green}" opacity="0.25"/>` +
		path("M20,118 A80,80 0 0 1 180,118", { stroke: C.green, sw: 1.4 }) +
		path("M100,38 L96,26 L104,26 Z", { fill: C.sand }) + rect(98, 20, 14, 5, { fill: C.ink }) +
		path("M112,22 Q128,24 130,44", { stroke: C.red, dash: "3 2" }) + text(134, 50, "A", { size: 8, color: C.red, anchor: "start" }) +
		path("M112,22 Q160,24 168,72", { stroke: C.red, dash: "3 2" }) + text(172, 76, "B", { size: 8, color: C.red, anchor: "start" }) +
		path("M112,22 A96,96 0 0 1 196,104", { stroke: C.blue, dash: "3 2" }) + text(196, 34, "C: orbit", { size: 8, color: C.blue, anchor: "end" }) +
		text(10, 12, "faster and faster shots", { size: 8, anchor: "start" })),
};
