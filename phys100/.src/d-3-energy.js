const { C, svg, arrow, text, rect, circle, line, path, ground } = require("./lib");

function cart(x, y, w, label, color = C.sand) {
	return rect(x, y - 16, w, 14, { fill: color, r: 2 }) + circle(x + 6, y - 1, 3, { fill: C.ink }) + circle(x + w - 6, y - 1, 3, { fill: C.ink }) +
		text(x + w / 2, y - 6, label, { size: 8, bold: true });
}

module.exports = {
	// collision where carts stick together
	"mom-stick": svg(200, 100,
		text(8, 12, "before", { size: 8, anchor: "start", color: C.faint }) +
		cart(20, 40, 40, "2 kg") + arrow(62, 30, 92, 30, C.blue) + text(77, 24, "3 m/s", { size: 8, color: C.blue }) +
		cart(120, 40, 26, "1 kg", C.sky) + text(133, 22, "at rest", { size: 8, color: C.faint }) + ground(8, 192, 40) +
		text(8, 62, "after", { size: 8, anchor: "start", color: C.faint }) +
		cart(60, 90, 40, "2 kg") + cart(100, 90, 26, "1 kg", C.sky) + arrow(128, 80, 158, 80, C.blue) + text(143, 74, "? m/s", { size: 8, color: C.blue }) +
		ground(8, 192, 90)),

	// same impulse: short big force vs long small force
	"mom-impulse": (() => {
		const X = t => 22 + t * 34, Y = f => 88 - f * 6.5;
		let s = arrow(X(0), Y(0), X(5.1), Y(0), C.ink, 1) + arrow(X(0), Y(0), X(0), Y(12), C.ink, 1);
		s += path(`M${X(0.3)},${Y(0)} Q${X(0.55)},${Y(21)} ${X(0.8)},${Y(0)}`, { stroke: C.red, sw: 1.6, fill: "rgba(176,58,46,0.15)" });
		s += path(`M${X(1.6)},${Y(0)} Q${X(3.1)},${Y(3.5)} ${X(4.6)},${Y(0)}`, { stroke: C.blue, sw: 1.6, fill: "rgba(43,95,168,0.15)" });
		s += text(X(0.9), Y(9), "hard floor:", { size: 8, color: C.red, anchor: "start" }) + text(X(0.9), Y(7.6), "short, big force", { size: 8, color: C.red, anchor: "start" });
		s += text(X(3.1), Y(4.6), "cushion: long,", { size: 8, color: C.blue }) + text(X(3.1), Y(3.2), "small force", { size: 8, color: C.blue });
		s += text(X(0) + 4, 9, "force", { size: 8, anchor: "start" }) + text(X(5.1), Y(0) + 10, "time", { size: 8, anchor: "end" });
		s += text(110, 104, "same area under each = same impulse", { size: 8, color: C.faint });
		return svg(200, 108, s);
	})(),

	// recoil: skater throws a ball
	"mom-recoil": svg(200, 70,
		ground(10, 190, 60) + circle(100, 22, 5) + line(100, 27, 100, 45) + line(100, 45, 94, 60) + line(100, 45, 106, 60) +
		line(100, 32, 120, 30) + circle(126, 30, 4, { fill: C.orange, stroke: C.orange }) +
		arrow(134, 30, 174, 30, C.blue) + text(154, 24, "ball", { size: 8, color: C.blue }) +
		arrow(92, 38, 72, 38, C.red) + text(70, 32, "skater recoils", { size: 8, color: C.red, anchor: "end" })),

	// work: force along the motion
	"enr-work": svg(200, 80,
		ground(10, 190, 50) + rect(30, 30, 26, 20, { fill: C.sand, dash: "2 2", stroke: C.faint }) + rect(130, 30, 26, 20, { fill: C.sand }) +
		arrow(156, 40, 186, 40, C.blue) + text(171, 34, "F", { size: 9, color: C.blue, italic: true }) +
		arrow(43, 64, 143, 64, C.ink, 1) + text(93, 76, "distance d", { size: 8 })),

	// roller coaster heights
	"enr-coaster": svg(200, 100,
		path("M8,20 C40,20 50,92 80,92 C110,92 115,50 135,50 C155,50 165,92 192,92", { sw: 2 }) +
		circle(14, 15, 5, { fill: C.red, stroke: C.red }) + text(22, 12, "A: at rest", { size: 8, anchor: "start" }) +
		line(4, 20, 4, 92, { stroke: C.faint, sw: 0.6 }) + text(6, 60, "45 m", { size: 8, anchor: "start", color: C.faint }) +
		circle(80, 86, 4, { fill: C.ink }) + text(80, 80, "B", { size: 8 }) +
		circle(135, 44, 4, { fill: C.ink }) + text(135, 36, "C: 25 m high", { size: 8 }) +
		line(4, 92, 196, 92, { stroke: C.faint, sw: 0.6, dash: "2 2" })),

	// energy bars at top, middle, bottom of a drop
	"enr-bars": (() => {
		let s = "";
		const rows = [["top", 100, 0], ["halfway", 50, 50], ["bottom", 0, 100]];
		rows.forEach(([name, pe, ke], i) => {
			const x = 14 + i * 64;
			s += text(x + 22, 12, name, { size: 8 });
			s += rect(x + 4, 80 - pe * 0.6, 16, pe * 0.6, { fill: C.green, stroke: C.green }) + rect(x + 24, 80 - ke * 0.6, 16, ke * 0.6, { fill: C.blue, stroke: C.blue });
			s += text(x + 12, 90, "PE", { size: 8, color: C.green }) + text(x + 32, 90, "KE", { size: 8, color: C.blue });
			s += line(x, 80, x + 44, 80, { stroke: C.faint, sw: 0.8 });
		});
		return svg(200, 96, s);
	})(),

	// lever
	"enr-lever": svg(200, 80,
		line(14, 46, 186, 30, { sw: 3 }) + path("M148,33 L140,60 L156,60 Z", { fill: C.sand }) + ground(118, 178, 60) +
		rect(169, 12, 22, 18, { fill: C.sand }) + text(180, 25, "400 N", { size: 7, bold: true }) +
		arrow(20, 22, 20, 42, C.blue) + text(24, 20, "push 100 N", { size: 8, anchor: "start", color: C.blue }) +
		text(76, 54, "long arm", { size: 8, color: C.faint }) + text(166, 46, "short", { size: 8, color: C.faint })),
};
