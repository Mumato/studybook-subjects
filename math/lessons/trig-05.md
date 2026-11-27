---
id: trig-05
title: The law of cosines
---
The law of sines needs an angle with its opposite side. When you know two sides and the angle between them (SAS), or all three sides (SSS), use the law of cosines.

::: rule
**Law of cosines:**
$$c^2 = a^2 + b^2 - 2ab\cos C$$
(and the same with the letters moved round).

- **SAS:** put in a, b and C to find c.
- **SSS:** find an angle with $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$. A negative cosine means C is obtuse.
- **Heron's formula** (area from three sides): $s = \frac{a + b + c}{2}$, then
$$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$$

**Which law?** SAS or SSS: cosines. AAS, ASA or SSA: sines. If $C = 90°$, the law of cosines is just Pythagoras.
:::

::: example
SAS: $a = 5$, $b = 8$, $C = 60°$.

$c^2 = 25 + 64 - 2 \cdot 5 \cdot 8 \cdot \frac{1}{2}$

$c^2 = 89 - 40 = 49$, so $c = 7$.
:::

::: example
SSS: sides 3, 5, 7. The largest angle faces 7:

$\cos C = \frac{9 + 25 - 49}{2 \cdot 3 \cdot 5} = \frac{-15}{30} = -\frac{1}{2}$, so $C = 120°$.

Heron: $s = 7.5$.

Area $= \sqrt{7.5 \cdot 4.5 \cdot 2.5 \cdot 0.5}$

$= \frac{15\sqrt{3}}{4} \approx 6.50$
:::

::: problem id=p1 type=numeric answer="7"
SAS: $a = 8$, $b = 3$, $C = 60°$. Find c.
solution: $c^2 = 64 + 9 - 2 \cdot 8 \cdot 3 \cdot \frac{1}{2} = 73 - 24 = 49$, $c = 7$.
:::

::: problem id=p2 type=numeric answer="2sqrt(19)" tolerance="0.01"
SAS: $a = 6$, $b = 10$, $C = 60°$. Find c. (exact or to hundredths)
solution: $c^2 = 36 + 100 - 60 = 76$, $c = \sqrt{76} = 2\sqrt{19} \approx 8.72$.
:::

::: problem id=p3 type=numeric answer="60"
A triangle has sides 5, 7 and 8. Find the angle opposite the side 7, in degrees.
hint: $\cos = \frac{5^2 + 8^2 - 7^2}{2 \cdot 5 \cdot 8}$.
solution: $\cos = \frac{25 + 64 - 49}{80} = \frac{40}{80} = \frac{1}{2}$, so the angle is $60°$.
:::

::: problem id=p4 type=numeric answer="12"
Use Heron's formula: what is the area of a triangle with sides 5, 5 and 6?
solution: $s = 8$. Area $= \sqrt{8 \cdot 3 \cdot 3 \cdot 2} = \sqrt{144} = 12$.
:::

::: problem id=p5 type=numeric answer="84"
Use Heron's formula: what is the area of a triangle with sides 13, 14 and 15?
solution: $s = 21$. Area $= \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84$.
:::

::: problem id=p6 type=choice
You know all three sides of a triangle and want an angle. Which law do you use?
- [ ] Law of sines
- [x] Law of cosines
- [ ] SOH CAH TOA
solution: SSS gives no angle-side pair, so the law of sines can't start. Use the **law of cosines**.
:::

::: problem id=p7 type=numeric answer="120"
A triangle has sides 7, 8 and 13. Find its largest angle in degrees.
solution: Opposite 13: $\cos = \frac{49 + 64 - 169}{112} = \frac{-56}{112} = -\frac{1}{2}$, so $120°$.
:::

::: problem id=p8 type=numeric answer="7.76" tolerance="0.01"
Use a calculator. SAS: $a = 10$, $b = 12$, $C = 40°$. Find c. (to hundredths)
solution: $c^2 = 100 + 144 - 240\cos 40° \approx 60.15$, $c \approx 7.76$.
:::

::: problem id=x1 type=numeric answer="7" set=extra
SAS: $a = 3$, $b = 5$, $C = 120°$. Find c.
solution: $\cos 120° = -\frac{1}{2}$. $c^2 = 9 + 25 + 15 = 49$, $c = 7$.
:::

::: problem id=x2 type=numeric answer="2sqrt(13)" tolerance="0.01" set=extra
SAS: $a = 4$, $b = 6$, $C = 90°$. Find c. (exact or to hundredths)
solution: $\cos 90° = 0$: $c^2 = 16 + 36 = 52$, $c = 2\sqrt{13} \approx 7.21$.
:::

::: problem id=x3 type=numeric answer="sqrt(7)" tolerance="0.01" set=extra
SAS: $a = 2$, $b = 3$, $C = 60°$. Find c. (exact or to hundredths)
solution: $c^2 = 4 + 9 - 6 = 7$, $c = \sqrt{7} \approx 2.65$.
:::

::: problem id=x4 type=numeric answer="44.42" tolerance="0.01" set=extra
A triangle has sides 5, 6 and 7. Find the angle opposite the side 5, in degrees. (to hundredths)
solution: $\cos = \frac{36 + 49 - 25}{84} = \frac{5}{7}$. Angle $\approx 44.42°$.
:::

::: problem id=x5 type=numeric answer="120" set=extra
A triangle has sides 1, 1 and $\sqrt{3}$. Find the angle opposite $\sqrt{3}$, in degrees.
solution: $\cos = \frac{1 + 1 - 3}{2} = -\frac{1}{2}$: $120°$.
:::

::: problem id=x6 type=numeric answer="24" set=extra
Use Heron's formula: area of a triangle with sides 6, 8 and 10?
solution: $s = 12$. $\sqrt{12 \cdot 6 \cdot 4 \cdot 2} = \sqrt{576} = 24$.
:::

::: problem id=x7 type=numeric answer="12sqrt(5)" tolerance="0.01" set=extra
Use Heron's formula: area of a triangle with sides 7, 8 and 9? (exact or to hundredths)
solution: $s = 12$. $\sqrt{12 \cdot 5 \cdot 4 \cdot 3} = \sqrt{720} = 12\sqrt{5} \approx 26.83$.
:::

::: problem id=x8 type=numeric answer="24" set=extra
Use Heron's formula: area of a triangle with sides 4, 13 and 15?
solution: $s = 16$. $\sqrt{16 \cdot 12 \cdot 3 \cdot 1} = \sqrt{576} = 24$.
:::

::: problem id=x9 type=choice set=extra
You know two angles and the side between them (ASA). Which law do you use?
- [x] Law of sines
- [ ] Law of cosines
- [ ] Heron's formula
solution: Find the third angle, then you have angle-side pairs: **law of sines**.
:::

::: problem id=x10 type=choice set=extra
A triangle has sides 4, 5 and 7. Its largest angle is:
- [ ] acute
- [ ] right
- [x] obtuse
solution: $\cos C = \frac{16 + 25 - 49}{40} = -\frac{1}{5} < 0$: **obtuse**. (Quick test: $4^2 + 5^2 < 7^2$.)
:::

::: problem id=x11 type=numeric answer="sqrt(13)" tolerance="0.01" set=extra
Ben works SAS with $a = 3$, $b = 4$, $C = 60°$ and writes $c^2 = 9 + 16 - 24 = 1$. He forgot the cosine. What is the right c? (exact or to hundredths)
solution: $c^2 = 9 + 16 - 24 \cdot \frac{1}{2} = 13$, $c = \sqrt{13} \approx 3.61$.
:::

::: problem id=x12 type=numeric answer="10sqrt(19)" tolerance="0.01" set=extra
Two ships leave a port. One sails 30 km, the other 50 km, on courses 60° apart. How far apart are they? (exact or to hundredths)
solution: $d^2 = 900 + 2500 - 2 \cdot 30 \cdot 50 \cdot \frac{1}{2} = 1900$, $d = 10\sqrt{19} \approx 43.59$ km.
:::

::: problem id=x13 type=numeric answer="sqrt(129)" tolerance="0.01" set=extra
A parallelogram has sides 5 and 8 and an angle of 60°. How long is its longer diagonal? (exact or to hundredths)
hint: The longer diagonal is opposite the 120° angle.
solution: $d^2 = 25 + 64 - 80\cos 120°$ $= 89 + 40 = 129$, $d = \sqrt{129} \approx 11.36$.
:::

::: problem id=x14 type=numeric answer="38.21" tolerance="0.01" set=extra
A triangle has sides 5, 7 and 8. Find its smallest angle in degrees. (to hundredths)
hint: The smallest angle faces the shortest side.
solution: $\cos = \frac{49 + 64 - 25}{2 \cdot 7 \cdot 8} = \frac{88}{112} = \frac{11}{14}$. Angle $\approx 38.21°$.
:::

::: problem id=x15 type=numeric answer="10sqrt(3)" tolerance="0.01" set=extra
Find the area of the triangle with sides 5, 7 and 8 using Heron's formula. (exact or to hundredths)
hint: $s = 10$.
solution: $\sqrt{10 \cdot 5 \cdot 3 \cdot 2} = \sqrt{300} = 10\sqrt{3} \approx 17.32$. Check: $\frac{1}{2} \cdot 5 \cdot 8 \sin 60°$ gives the same.
:::

::: problem id=x16 type=numeric answer="21.79" tolerance="0.01" set=extra
A triangle has $a = 3$, $b = 5$, $C = 120°$. Find angle A in degrees. (to hundredths)
hint: First find c with the law of cosines, then use the law of sines.
solution: $c = 7$ (as $9 + 25 + 15 = 49$). $\sin A = \frac{3 \sin 120°}{7} \approx 0.3712$, $A \approx 21.79°$.
:::

::: problem id=x17 type=numeric answer="63.72" tolerance="0.01" set=extra
A baseball diamond is a square with 90 ft sides. The pitcher stands 60.5 ft from home plate on the diagonal to second base. How far is the pitcher from first base? (to hundredths)
hint: At home plate, the angle between first base and the diagonal is 45°.
solution: $d^2 = 90^2 + 60.5^2$ $- 2 \cdot 90 \cdot 60.5 \cos 45°$ $\approx 4060.0$, $d \approx 63.72$ ft.
:::

::: problem id=x18 type=numeric answer="60" set=extra
A triangle has $a = 4$, $b = 3$ and $c = \sqrt{13}$. Find C in degrees.
solution: $\cos C = \frac{16 + 9 - 13}{24} = \frac{1}{2}$, $C = 60°$.
:::

::: problem id=x19 type=choice set=extra
What does $c^2 = a^2 + b^2 - 2ab\cos C$ become when $C = 90°$?
- [x] The Pythagorean theorem
- [ ] The law of sines
- [ ] $c = a + b$
- [ ] Heron's formula
solution: $\cos 90° = 0$, leaving $c^2 = a^2 + b^2$.
:::

::: problem id=x20 type=numeric answer="3/2" set=extra creative=true
A triangle has sides x, $x + 1$ and $x + 2$, and its largest angle is 120°. Find x.
hint: The 120° angle faces $x + 2$, and $-2ab\cos 120° = +ab$.
solution: $(x+2)^2 = x^2 + (x+1)^2 + x(x+1)$. So $x^2 + 4x + 4 = 3x^2 + 3x + 1$, i.e. $2x^2 - x - 3 = 0$, $(2x - 3)(x + 1) = 0$, $x = \frac{3}{2}$.
:::
