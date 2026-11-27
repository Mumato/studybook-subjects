---
id: geo-03
title: Circles
---
::: rule
For a circle with **radius** r (centre to edge):
- **diameter** (edge to edge through the centre): $d = 2r$
- **circumference** (distance around): $C = 2\pi r = \pi d$
- **area**: $A = \pi r^2$

$\pi \approx 3.14159$. You can leave answers "in terms of π", like $6\pi$, or round them.
:::

::: graph
x -4..4
y -4..4
axes off
grid off
circle 0,0 3
point 0,0
segment 0,0 3,0 r blue
segment 0,-3 0,3 red
label 0.45,1.6 d
:::

::: example
Radius 3 cm. $C = 2\pi \times 3 = 6\pi \approx 18.85$ cm. $A = \pi \times 3^2 = 9\pi \approx 28.27$ cm².
:::

You can type π as pi, like 6pi.

::: problem id=p1 type=numeric answer="14"
A circle has a radius of 7 cm. What is its diameter?
solution: $d = 2 \times 7 = 14$ cm.
:::

::: problem id=p2 type=numeric answer="10pi"
What is the circumference of a circle with radius 5? Give it in terms of π.
solution: $C = 2\pi \times 5 = 10\pi$.
:::

::: problem id=p3 type=numeric answer="16pi"
What is the area of a circle with radius 4? Give it in terms of π.
hint: Square the radius first.
solution: $A = \pi \times 4^2 = 16\pi$.
:::

::: problem id=p4 type=numeric answer="10pi" tolerance="0.06"
A circle has a diameter of 10 cm. What is its circumference, to the nearest tenth of a cm?
solution: $C = \pi \times 10 \approx 31.4$ cm.
:::

::: problem id=p5 type=numeric answer="100pi" tolerance="0.6"
What is the area of a circle with radius 10 m, to the nearest whole m²?
solution: $A = \pi \times 10^2 = 100\pi \approx 314$ m².
:::

::: problem id=p6 type=numeric answer="4.5"
A circle has a diameter of 9 cm. What is its radius?
solution: $r = 9 \div 2 = 4.5$ cm.
:::

::: problem id=p7 type=numeric answer="9pi"
What is the area of a circle with diameter 6? Give it in terms of π.
hint: Find the radius first.
solution: $r = 3$, so $A = \pi \times 3^2 = 9\pi$.
:::

::: problem id=p8 type=numeric answer="pi" tolerance="0.06"
A bike wheel has a radius of 0.5 m. How far does it roll in one full turn, to the nearest tenth of a metre?
solution: One turn is the circumference: $2\pi \times 0.5 = \pi \approx 3.1$ m.
:::

::: problem id=x1 type=numeric answer="24" set=extra
A circle has a radius of 12 cm. What is its diameter?
solution: $d = 2 \times 12 = 24$ cm.
:::

::: problem id=x2 type=numeric answer="7.5" set=extra
A circle has a diameter of 15 cm. What is its radius?
solution: $r = 15 \div 2 = 7.5$ cm.
:::

::: problem id=x3 type=numeric answer="16pi" set=extra
What is the circumference of a circle with radius 8? Give it in terms of π.
solution: $C = 2\pi \times 8 = 16\pi$.
:::

::: problem id=x4 type=numeric answer="49pi" set=extra
What is the area of a circle with radius 7? Give it in terms of π.
solution: $A = \pi \times 7^2 = 49\pi$.
:::

::: problem id=x5 type=numeric answer="13pi" set=extra
What is the circumference of a circle with diameter 13? Give it in terms of π.
solution: $C = \pi d = 13\pi$.
:::

::: problem id=x6 type=numeric answer="25pi" set=extra
What is the area of a circle with diameter 10? Give it in terms of π.
solution: $r = 5$, so $A = \pi \times 5^2 = 25\pi$.
:::

::: problem id=x7 type=numeric answer="6pi" tolerance="0.06" set=extra
What is the circumference of a circle with radius 3 cm, to the nearest tenth?
solution: $C = 2\pi \times 3 = 6\pi \approx 18.8$ cm.
:::

::: problem id=x8 type=numeric answer="4pi" tolerance="0.06" set=extra
What is the area of a circle with radius 2 m, to the nearest tenth?
solution: $A = \pi \times 2^2 = 4\pi \approx 12.6$ m².
:::

::: problem id=x9 type=numeric answer="10" set=extra
A circle has a circumference of $20\pi$. What is its radius?
solution: $2\pi r = 20\pi$, so $2r = 20$ and $r = 10$.
:::

::: problem id=x10 type=numeric answer="9" set=extra
A circle has an area of $81\pi$. What is its radius?
solution: $\pi r^2 = 81\pi$, so $r^2 = 81$ and $r = 9$.
:::

::: problem id=x11 type=numeric answer="16pi" set=extra
Sam says a circle with diameter 8 has area $64\pi$. What is the correct area, in terms of π?
solution: He used the diameter. The radius is 4: $A = \pi \times 4^2 = 16\pi$.
:::

::: problem id=x12 type=choice set=extra
The radius of a circle is doubled. What happens to its circumference?
- [x] It doubles.
- [ ] It becomes 4 times as big.
- [ ] It stays the same.
- [ ] It halves.
solution: $C = 2\pi r$, so twice the radius gives twice the circumference.
:::

::: problem id=x13 type=numeric answer="9" set=extra
The radius of a circle is tripled. The area becomes how many times as big?
solution: $\pi(3r)^2 = 9\pi r^2$: **9** times as big.
:::

::: problem id=x14 type=numeric answer="225pi" tolerance="0.6" set=extra
A pizza has a diameter of 30 cm. What is its area, to the nearest whole cm²?
solution: $r = 15$. $A = \pi \times 15^2 = 225\pi \approx 707$ cm².
:::

::: problem id=x15 type=numeric answer="400pi" tolerance="0.6" set=extra
A circular track has a radius of 50 m. How far do you run in 4 laps, to the nearest metre?
solution: One lap: $2\pi \times 50 = 100\pi$. Four laps: $400\pi \approx 1257$ m.
:::

::: problem id=x16 type=numeric answer="8pi" set=extra
What is the area of a half circle (semicircle) with radius 4? Give it in terms of π.
hint: Half of the full circle's area.
solution: Full circle $16\pi$, half of it $8\pi$.
:::

::: problem id=x17 type=numeric answer="70pi" tolerance="0.6" set=extra
A wheel has a diameter of 0.7 m. How far does it roll in 100 turns, to the nearest metre?
hint: One turn rolls one circumference.
solution: One turn: $0.7\pi$. 100 turns: $70\pi \approx 220$ m.
:::

::: problem id=x18 type=numeric answer="16pi" set=extra
A ring is the space between a circle of radius 5 and a circle of radius 3 with the same centre. What is its area, in terms of π?
hint: Big circle minus small circle.
solution: $25\pi - 9\pi = 16\pi$.
:::

::: problem id=x19 type=numeric answer="100-25pi" set=extra
The largest possible circle is cut from a 10 cm by 10 cm square. What area of the square is left? Give it in terms of π, like 50-5pi.
hint: The circle's diameter is 10.
solution: Circle: $r = 5$, area $25\pi$. Left over: $100 - 25\pi$ cm² (about 21.5).
:::

::: problem id=x20 type=numeric answer="25/pi" set=extra creative=true
A circle has a circumference of 10 m. What is its area? Type an exact answer using pi.
hint: Find r from $2\pi r = 10$, then use $A = \pi r^2$.
solution: $r = \frac{5}{\pi}$. $A = \pi \times \frac{25}{\pi^2} = \frac{25}{\pi} \approx 7.96$ m².
:::
