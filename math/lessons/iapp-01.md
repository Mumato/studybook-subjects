---
id: iapp-01
title: Area between curves
---
::: rule
The area between a **top** curve $f$ and a **bottom** curve $g$, from $x = a$ to $x = b$:

$$\int_a^b \left(f(x) - g(x)\right)dx$$

If the bounds aren't given, they're usually where the curves **cross**: solve $f(x) = g(x)$.
:::

::: example
$y = x$ and $y = x^2$ cross at 0 and 1, with $x$ on top between them. Area: $\int_0^1 (x - x^2)\,dx = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$.
:::

::: graph
x -0.5..1.5
y -0.5..1.5
plot x blue
plot x^2 red
point 0,0
point 1,1
:::

::: problem id=p1 type=numeric answer="1/6"
What is the area between $y = x$ and $y = x^2$?
solution: $\frac{1}{6}$.
:::

::: problem id=p2 type=multi answers="2;-2"
Where do $y = x^2$ and $y = 4$ cross? Type both x values.
solution: $x^2 = 4$: $\pm 2$.
:::

::: problem id=p3 type=numeric answer="32/3"
What is the area between $y = 4$ and $y = x^2$?
hint: $\int_{-2}^{2}(4 - x^2)\,dx$.
solution: $\left[4x - \frac{x^3}{3}\right]_{-2}^{2} = \frac{16}{3} + \frac{16}{3} = \frac{32}{3}$.
:::

::: problem id=p4 type=numeric answer="9/2"
What is the area between $y = x + 2$ and $y = x^2$?
hint: They cross where $x^2 - x - 2 = 0$: at $-1$ and 2.
solution: $\int_{-1}^{2}(x + 2 - x^2)\,dx = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{9}{2}$.
:::

::: problem id=p5 type=point answer="2,4"
Click the point where $y = x + 2$ and $y = x^2$ cross on the right.
graph:
x -2..3
y -1..6
plot x+2 blue
plot x^2 red
solution: $x = 2$, $y = 4$.
:::

::: problem id=p6 type=numeric answer="2"
What is the area between $y = \sin x$ and the x-axis from 0 to π?
solution: $[-\cos x]_0^{\pi} = 2$.
:::

::: problem id=p7 type=choice
Between $x = 0$ and $x = 1$, which curve is on top?
- [x] $y = x$
- [ ] $y = x^2$
hint: Try $x = \frac{1}{2}$.
solution: At $x = \frac{1}{2}$: $\frac{1}{2} > \frac{1}{4}$.
:::

::: problem id=p8 type=numeric answer="9/2"
What is the area between $y = 2x$ and $y = x$ from 0 to 3?
solution: $\int_0^3 x\,dx = \frac{9}{2}$.
:::
