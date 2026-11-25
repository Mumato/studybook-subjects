// Small SVG helpers for PHYS100 diagrams. Units are GUI pixels (rendered at 3x into assets/<name>@3x.png).
// Keep diagrams <= 200 wide so they show at full size on a 1080p page; text >= 8 px.
const C = { ink: "#3A2A1A", blue: "#2B5FA8", red: "#B03A2E", green: "#2F7D32", faint: "#8A7A62",
	sand: "#D8C9A8", sky: "#BFD4EE", water: "#7FA7D9", orange: "#C9761E", purple: "#6A3FA0", paper: "#FFFDF5" };
const FONT = "Segoe UI, Arial, sans-serif";

function svg(w, h, body) {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
}

/** Arrow from (x1,y1) to (x2,y2) with a filled head. */
function arrow(x1, y1, x2, y2, color = C.blue, width = 1.6, head = 5) {
	const a = Math.atan2(y2 - y1, x2 - x1), len = Math.hypot(x2 - x1, y2 - y1);
	const h = Math.min(head, len * 0.6);
	const bx = x2 - h * Math.cos(a), by = y2 - h * Math.sin(a);
	const px = Math.sin(a) * h * 0.5, py = -Math.cos(a) * h * 0.5;
	return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>` +
		`<polygon points="${x2},${y2} ${bx + px},${by + py} ${bx - px},${by - py}" fill="${color}"/>`;
}

function text(x, y, s, o = {}) {
	const size = o.size || 9, anchor = o.anchor || "middle", color = o.color || C.ink, weight = o.bold ? "bold" : "normal";
	const style = o.italic ? ` font-style="italic"` : "";
	return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}"${style}>${s}</text>`;
}

function rect(x, y, w, h, o = {}) {
	return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 0}" fill="${o.fill || "none"}" stroke="${o.stroke || C.ink}" stroke-width="${o.sw ?? 1.2}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
}

function circle(cx, cy, r, o = {}) {
	return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${o.fill || "none"}" stroke="${o.stroke || C.ink}" stroke-width="${o.sw ?? 1.2}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
}

function line(x1, y1, x2, y2, o = {}) {
	return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.stroke || C.ink}" stroke-width="${o.sw ?? 1.2}" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
}

function path(d, o = {}) {
	return `<path d="${d}" fill="${o.fill || "none"}" stroke="${o.stroke || C.ink}" stroke-width="${o.sw ?? 1.2}" stroke-linecap="round" stroke-linejoin="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
}

/** Hatched ground line from x1 to x2 at height y. */
function ground(x1, x2, y) {
	let s = line(x1, y, x2, y, { sw: 1.4 });
	for (let x = x1 + 4; x <= x2; x += 7) s += line(x, y, x - 5, y + 5, { sw: 0.8, stroke: C.faint });
	return s;
}

/** A sine wave from x0 over length len, amplitude amp, wavelength lam, centred at y. */
function wave(x0, y, len, amp, lam, o = {}) {
	let d = "";
	for (let i = 0; i <= len; i += 1) d += (i ? "L" : "M") + (x0 + i).toFixed(1) + "," + (y - amp * Math.sin(2 * Math.PI * i / lam)).toFixed(2);
	return path(d, o);
}

/** Simple stick figure standing with feet at (x, y), height ~h. */
function person(x, y, h = 30, color = C.ink) {
	const head = h * 0.13, neck = y - h + head * 2, hip = y - h * 0.45;
	return circle(x, y - h + head, head, { stroke: color }) +
		line(x, neck, x, hip, { stroke: color }) +
		line(x, hip, x - h * 0.15, y, { stroke: color }) + line(x, hip, x + h * 0.15, y, { stroke: color }) +
		line(x, neck + h * 0.08, x - h * 0.18, neck + h * 0.3, { stroke: color }) + line(x, neck + h * 0.08, x + h * 0.18, neck + h * 0.3, { stroke: color });
}

module.exports = { C, FONT, svg, arrow, text, rect, circle, line, path, ground, wave, person };
