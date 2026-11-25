const { C, svg, arrow, text, rect, circle, line, path, ground, person } = require("./lib");

// a box with force arrows: forces = [[dx, dy, label, color]], arrows start at the box edge
function box(forces, o = {}) {
	const w = o.w || 200, h = o.h || 90, bx = w / 2 - 18, by = (o.ground ?? 60) - 30;
	let s = (o.ground !== null ? ground(20, w - 20, by + 30) : "") + rect(bx, by, 36, 30, { fill: C.sand, sw: 1.2 });
	if (o.label) s += text(bx + 18, by + 19, o.label, { size: 9, bold: true });
	for (const [dx, dy, label, color] of forces) {
		const cx = bx + 18, cy = by + 15;
		const sx = dx > 0 ? bx + 36 : dx < 0 ? bx : cx, sy = dy > 0 ? by + 30 : dy < 0 ? by : cy;
		s += arrow(sx, sy, sx + dx, sy + dy, color || C.blue);
		const lx = sx + dx + (dx > 0 ? 3 : dx < 0 ? -3 : 4), ly = sy + dy + (dy > 0 ? 9 : dy < 0 ? -2 : 3);
		s += text(lx, ly, label, { size: 8, anchor: dx > 0 ? "start" : dx < 0 ? "end" : "start", color: color || C.blue });
	}
	return svg(w, h, s);
}

module.exports = {
	// puck on ice keeps sliding
	"nwt-puck": svg(200, 60,
		line(10, 40, 190, 40, { stroke: C.water, sw: 3 }) + text(100, 55, "smooth ice: almost no friction", { size: 8, color: C.faint }) +
		[30, 80, 130].map(x => `<ellipse cx="${x}" cy="35" rx="10" ry="4" fill="${C.ink}" opacity="${x === 130 ? 1 : 0.3}"/>`).join("") +
		arrow(144, 35, 180, 35, C.blue) + text(162, 27, "v stays", { size: 8, color: C.blue })),

	// book on a table: weight and support force balance
	"nwt-book": svg(200, 100,
		rect(40, 60, 120, 6, { fill: C.sand }) + line(55, 66, 55, 98) + line(145, 66, 145, 98) +
		rect(80, 46, 40, 14, { fill: C.blue, stroke: C.ink }) +
		arrow(100, 46, 100, 14, C.green) + text(104, 20, "support (normal) 5 N", { size: 8, anchor: "start", color: C.green }) +
		arrow(100, 54, 100, 92, C.red, 1.6) + text(96, 92, "weight 5 N", { size: 8, anchor: "end", color: C.red })),

	"nwt-net1": box([[50, 0, "30 N"], [-34, 0, "20 N", C.red]], { h: 70 }),
	"nwt-net2": box([[30, 0, "15 N"], [-60, 0, "40 N", C.red]], { h: 70 }),
	"nwt-net3": box([[30, 0, "12 N"], [-30, 0, "12 N", C.red]], { h: 70, label: "?" }),

	// lamp hanging on a cord
	"nwt-lamp": svg(200, 100,
		line(60, 4, 140, 4, { sw: 2 }) + line(100, 4, 100, 50) +
		path("M84,62 L100,50 L116,62 Z", { fill: C.orange }) + circle(100, 66, 4, { fill: "#F5D76E", stroke: C.ink, sw: 0.8 }) +
		arrow(104, 50, 104, 18, C.green) + text(108, 26, "tension", { size: 8, anchor: "start", color: C.green }) +
		arrow(100, 72, 100, 96, C.red) + text(104, 92, "weight", { size: 8, anchor: "start", color: C.red })),

	// skydiver: early in the fall vs at terminal speed
	"nwt-skydiver": svg(200, 110,
		person(55, 66, 30) + arrow(55, 72, 55, 104, C.red) + text(60, 102, "weight", { size: 8, anchor: "start", color: C.red }) +
		arrow(55, 34, 55, 26, C.blue) + text(60, 30, "air", { size: 8, anchor: "start", color: C.blue }) +
		text(55, 10, "just jumped", { size: 8 }) +
		person(145, 66, 30) + arrow(145, 72, 145, 104, C.red) + text(150, 102, "weight", { size: 8, anchor: "start", color: C.red }) +
		arrow(145, 34, 145, 2 + 6, C.blue) + text(150, 18, "air", { size: 8, anchor: "start", color: C.blue }) +
		text(178, 60, "terminal", { size: 8 }) + text(178, 70, "speed", { size: 8 })),

	// pushing a wall: action and reaction act on different objects
	"nwt-wall": svg(200, 100,
		rect(140, 10, 16, 80, { fill: C.sand }) + ground(10, 190, 90) +
		person(80, 90, 50) + line(80, 52, 140, 50, { sw: 1.2 }) +
		arrow(156, 42, 186, 42, C.red) + text(171, 34, "on the wall", { size: 8, color: C.red }) +
		arrow(110, 42, 80, 42, C.blue) + text(95, 34, "on you", { size: 8, color: C.blue })),

	// rocket: pushes gas down, gas pushes rocket up
	"nwt-rocket": svg(200, 110,
		path("M100,8 L112,28 L112,70 L88,70 L88,28 Z", { fill: C.paper }) +
		path("M88,58 L80,72 L88,70 Z M112,58 L120,72 L112,70 Z", { fill: C.sand }) +
		path("M92,72 Q100,100 108,72 Z", { fill: C.orange, stroke: C.orange }) +
		arrow(128, 50, 128, 14, C.blue) + text(132, 24, "gas pushes rocket", { size: 8, anchor: "start", color: C.blue }) +
		arrow(72, 76, 72, 106, C.red) + text(68, 100, "rocket pushes gas", { size: 8, anchor: "end", color: C.red })),
};
