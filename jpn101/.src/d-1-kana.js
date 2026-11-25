const { C, svg, text, rect, line } = require("./lib");

const JP = "M PLUS 1p";
const GOLD = "#B8860B";

// gojuon: [consonant label, a, i, u, e, o] with romaji
const ROWS = {
	"": [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]],
	k: [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]],
	s: [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]],
	t: [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]],
	n: [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]],
	h: [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]],
	m: [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]],
	y: [["や", "ya"], null, ["ゆ", "yu"], null, ["よ", "yo"]],
	r: [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]],
	w: [["わ", "wa"], null, null, null, ["を", "o"]],
	g: [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]],
	z: [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]],
	d: [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]],
	b: [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]],
	p: [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]],
};

function kanaText(x, y, s, size, color = C.ink) {
	return `<text x="${x}" y="${y}" font-family="${JP}" font-size="${size}" fill="${color}" text-anchor="middle">${s}</text>`;
}

// a chart of the given rows (each row = a column of 5 vowels), with an optional extra cell for ん
function chart(keys, o = {}) {
	const cw = Math.min(34, 182 / (keys.length + (o.n ? 1 : 0))), ch = 22, x0 = 14, y0 = 14;
	const width = Math.round(x0 + cw * (keys.length + (o.n ? 1 : 0)) + 4), height = y0 + ch * 5 + 4;
	let s = "";
	["a", "i", "u", "e", "o"].forEach((v, r) => { s += text(7, y0 + r * ch + 14, v, { size: 7, color: C.faint }); });
	keys.forEach((k, c) => {
		const x = x0 + c * cw;
		s += text(x + cw / 2, 9, k || "–", { size: 7, color: C.faint });
		ROWS[k].forEach((cell, r) => {
			const y = y0 + r * ch;
			s += rect(x + 1, y + 1, cw - 2, ch - 2, { fill: cell ? (o.fill || "#FBF3DC") : "none", stroke: cell ? "#D8C9A8" : "none", sw: 0.6, r: 2 });
			if (cell) s += kanaText(x + cw / 2, y + 13, cell[0], 11) + text(x + cw / 2, y + 19.5, cell[1], { size: 5.5, color: GOLD });
		});
	});
	if (o.n) {
		const x = x0 + keys.length * cw;
		s += text(x + cw / 2, 9, "n", { size: 7, color: C.faint });
		s += rect(x + 1, y0 + 1, cw - 2, ch - 2, { fill: o.fill || "#FBF3DC", stroke: "#D8C9A8", sw: 0.6, r: 2 }) + kanaText(x + cw / 2, y0 + 13, "ん", 11) + text(x + cw / 2, y0 + 19.5, "n", { size: 5.5, color: GOLD });
	}
	return svg(width, height, s);
}

// look-alike pairs
function pairs(list) {
	let s = "";
	list.forEach(([a, b, ra, rb], i) => {
		const x = 10 + i * 46;
		s += kanaText(x + 10, 30, a, 20) + kanaText(x + 30, 30, b, 20);
		s += text(x + 10, 44, ra, { size: 7, color: GOLD }) + text(x + 30, 44, rb, { size: 7, color: GOLD });
		if (i) s += line(x - 4, 10, x - 4, 46, { stroke: "#D8C9A8", sw: 0.6 });
	});
	return svg(Math.min(200, 10 + list.length * 46), 52, s);
}

module.exports = {
	"hir-ak": chart(["", "k"]),
	"hir-st": chart(["s", "t"]),
	"hir-nh": chart(["n", "h"]),
	"hir-mw": chart(["m", "y", "r", "w"], { n: true }),
	"hir-dakuten": chart(["g", "z", "d", "b", "p"], { fill: "#EEF3FA" }),
	"hir-full": chart(["", "k", "s", "t", "n", "h", "m", "y", "r", "w"], { n: true }),
	"hir-lookalike": pairs([["あ", "お", "a", "o"], ["さ", "ち", "sa", "chi"], ["ぬ", "め", "nu", "me"], ["ね", "れ", "ne", "re"]]),
};
