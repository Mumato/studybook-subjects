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
