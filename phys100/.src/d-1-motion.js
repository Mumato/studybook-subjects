const { C, svg, arrow, text, rect, circle, line, path, ground, person } = require("./lib");

// a car at equal time steps, speeding up: dots get further apart
function strobe(xs, label) {
	let s = "";
	xs.forEach((px, i) => { s += circle(px, 22, 4, { fill: C.blue, stroke: C.blue }); s += text(px, i % 2 ? 46 : 38, `${i} s`, { size: 8, color: C.faint }); });
	s += line(6, 28, 194, 28, { stroke: C.faint, sw: 0.8 });
	return svg(200, 54, s + text(100, 10, label, { size: 9 }));
}

module.exports = {
	"mot-steady": strobe([12, 42, 72, 102, 132, 162, 192], "Steady speed: same distance every second"),
	"mot-speedup": strobe([0, 1, 4, 9, 16, 25].map(k => 12 + k * 7.2), "Speeding up: farther every second"),

	// speed vs velocity: a car going round a track at constant speed, velocity arrows change direction
	"mot-velocity": svg(200, 110,
		circle(100, 55, 38, { stroke: C.faint, dash: "3 2" }) +
		arrow(100, 17, 140, 17, C.blue) + circle(100, 17, 3, { fill: C.ink }) +
		arrow(138, 55, 138, 95, C.blue) + circle(138, 55, 3, { fill: C.ink }) +
		arrow(100, 93, 60, 93, C.blue) + circle(100, 93, 3, { fill: C.ink }) +
		arrow(62, 55, 62, 15, C.blue) + circle(62, 55, 3, { fill: C.ink }) +
		text(100, 59, "same speed,", { size: 8 }) + text(100, 69, "new direction", { size: 8 }) +
		text(170, 108, "arrows = velocity", { size: 8, color: C.blue })),

	// free fall: ball positions each second, speed labels
	"mot-freefall": (() => {
		let s = "";
		const ys = [0, 5, 20, 45, 80];
		ys.forEach((d, t) => {
			const y = 12 + d * 1.15;
			s += circle(60, y, 4, { fill: C.red, stroke: C.red });
			const ty = y + 3 + (t === 0 ? -4 : t === 1 ? 4 : 0);
			s += line(68, y, 78, ty - 3, { stroke: C.faint, sw: 0.6 });
			s += text(82, ty, `t = ${t} s`, { anchor: "start", size: 8 });
			s += text(118, ty, `v = ${10 * t} m/s`, { anchor: "start", size: 8, color: C.blue });
			s += text(165, ty, `fallen ${d} m`, { anchor: "start", size: 8, color: C.faint });
		});
		return svg(200, 116, s +line(60, 16, 60, 104, { stroke: C.faint, sw: 0.5, dash: "2 2" }));
	})(),

	// velocity-time graph: 0 to 12 m/s in 4 s
	"mot-vt": (() => {
		const X = t => 30 + t * 31, Y = v => 92 - v * 6.5;
		let s = "";
		for (let v = 0; v <= 12; v += 3) { s += line(X(0), Y(v), X(5), Y(v), { stroke: C.sand, sw: 0.6 }); s += text(26, Y(v) + 3, v, { size: 8, anchor: "end" }); }
		for (let t = 0; t <= 5; t++) { s += line(X(t), Y(0), X(t), Y(13), { stroke: C.sand, sw: 0.6 }); s += text(X(t), 102, t, { size: 8 }); }
		s += arrow(X(0), Y(0), X(5.3), Y(0), C.ink, 1) + arrow(X(0), Y(0), X(0), Y(13.2), C.ink, 1);
		s += line(X(0), Y(0), X(4), Y(12), { stroke: C.blue, sw: 1.8 }) + line(X(4), Y(12), X(5), Y(12), { stroke: C.blue, sw: 1.8 });
		s += text(198, Y(0) - 4, "t (s)", { size: 8, anchor: "end" }) + text(X(0) + 4, 8, "v (m/s)", { size: 8, anchor: "start" });
		return svg(200, 108, s);
	})(),

	// thrown straight up: velocity arrows shrink, zero at top, grow downward
	"mot-up": (() => {
		let s = "";
		const pts = [[20, 104, -30], [50, 64, -20], [80, 37, -10], [110, 28, 0], [140, 37, 10], [170, 64, 20]];
		for (const [x, y, v] of pts) {
			s += circle(x, y, 4, { fill: C.red, stroke: C.red });
			if (v) s += arrow(x, y + (v < 0 ? -6 : 6), x, y + (v < 0 ? -6 : 6) + v * 0.9, C.blue);
			s += text(x + 9, y + 3, `${Math.abs(v)}`, { size: 8, color: C.blue, anchor: "start" });
		}
		s += text(110, 14, "top: v = 0, but a = 10 m/s² down", { size: 8 });
		return svg(200, 120, s + text(196, 116, "speeds in m/s, a dot each second", { size: 8, color: C.faint, anchor: "end" }));
	})(),
};
