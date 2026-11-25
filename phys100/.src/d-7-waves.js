const { C, svg, arrow, text, rect, circle, line, path, wave } = require("./lib");

// double-headed measure arrow
function span(x1, y1, x2, y2, color = C.ink) {
	return arrow((x1 + x2) / 2, (y1 + y2) / 2, x1, y1, color, 0.9, 4) + arrow((x1 + x2) / 2, (y1 + y2) / 2, x2, y2, color, 0.9, 4);
}

module.exports = {
	// parts of a wave
	"wav-parts": svg(200, 100,
		line(6, 50, 194, 50, { stroke: C.faint, sw: 0.6, dash: "2 2" }) +
		wave(10, 50, 180, 26, 80, { stroke: C.blue, sw: 1.8 }) +
		span(30, 16, 110, 16) + text(70, 12, "wavelength", { size: 8 }) +
		span(150, 50, 150, 76, C.red) + text(150, 90, "amplitude", { size: 8, color: C.red }) +
		text(190, 16, "crest", { size: 8, color: C.faint, anchor: "end" }) + text(70, 90, "trough", { size: 8, color: C.faint })),

	// transverse vs longitudinal
	"wav-types": (() => {
		let s = text(100, 10, "transverse: the rope moves up and down", { size: 8 }) + wave(10, 32, 180, 12, 60, { stroke: C.blue, sw: 1.6 }) +
			arrow(160, 32, 160, 18, C.red, 1) + arrow(160, 32, 160, 46, C.red, 1) + arrow(150, 56, 186, 56, C.ink, 1) + text(140, 59, "wave", { size: 8, anchor: "end" });
		s += text(100, 72, "longitudinal: coils move back and forth", { size: 8 });
		let x = 10;
		for (let i = 0; x < 190; i++) {
			s += line(x, 80, x, 96, { stroke: C.blue, sw: 1 });
			x += 3 + 2.6 * (1 + Math.sin(i * 2 * Math.PI / 10));
		}
		s += text(40, 108, "compression", { size: 7, color: C.faint }) + text(130, 108, "rarefaction", { size: 7, color: C.faint });
		return svg(200, 112, s);
	})(),

	// high vs low pitch, loud vs soft
	"wav-pitch": svg(200, 100,
		text(50, 10, "low pitch", { size: 8 }) + wave(6, 30, 88, 12, 44, { stroke: C.blue, sw: 1.4 }) +
		text(150, 10, "high pitch", { size: 8 }) + wave(106, 30, 88, 12, 15, { stroke: C.blue, sw: 1.4 }) +
		text(50, 58, "soft", { size: 8 }) + wave(6, 78, 88, 5, 30, { stroke: C.red, sw: 1.4 }) +
		text(150, 58, "loud", { size: 8 }) + wave(106, 78, 88, 17, 30, { stroke: C.red, sw: 1.4 })),

	// interference: constructive and destructive
	"wav-interf": svg(200, 110,
		text(50, 10, "in step: add up", { size: 8 }) +
		wave(10, 28, 80, 8, 40, { stroke: C.blue, sw: 1 }) + wave(10, 50, 80, 8, 40, { stroke: C.red, sw: 1 }) +
		text(50, 70, "=", { size: 9 }) + wave(10, 92, 80, 16, 40, { stroke: C.purple, sw: 1.6 }) +
		text(150, 10, "out of step: cancel", { size: 8 }) +
		wave(110, 28, 80, 8, 40, { stroke: C.blue, sw: 1 }) + wave(110, 50, 80, -8, 40, { stroke: C.red, sw: 1 }) +
		text(150, 70, "=", { size: 9 }) + line(110, 92, 190, 92, { stroke: C.purple, sw: 1.6 })),

	// standing wave on a string, 3 loops
	"wav-standing": (() => {
		let s = circle(10, 40, 2, { fill: C.ink }) + circle(190, 40, 2, { fill: C.ink });
		s += wave(10, 40, 180, 22, 120, { stroke: C.blue, sw: 1.6 }) + wave(10, 40, 180, -22, 120, { stroke: C.blue, sw: 1, dash: "3 2" });
		for (const x of [10, 70, 130, 190]) s += circle(x, 40, 2.5, { fill: C.red, stroke: C.red });
		s += text(70, 76, "node", { size: 8, color: C.red }) + line(70, 44, 70, 68, { stroke: C.red, sw: 0.5 });
		s += text(100, 12, "antinode", { size: 8, color: C.blue });
		return svg(200, 84, s);
	})(),

	// Doppler: source moving right
	"wav-doppler": (() => {
		let s = "";
		// source moves at half the wave speed: each step it moves 5 while waves spread 10
		for (let i = 0; i < 5; i++) {
			const cx = 60 + i * 5, r = 50 - i * 10;
			s += circle(cx, 55, r, { stroke: C.blue, sw: 1 });
		}
		s += circle(85, 55, 4, { fill: C.red, stroke: C.red }) + arrow(91, 55, 112, 55, C.red, 1.2);
		s += text(186, 22, "ahead:", { size: 8, anchor: "end" }) + text(186, 32, "higher pitch", { size: 8, anchor: "end" });
		s += text(4, 116, "behind: lower pitch", { size: 8, anchor: "start" });
		return svg(200, 120, s);
	})(),
};
