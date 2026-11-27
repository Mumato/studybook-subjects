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

::: problem id=x1 type=numeric answer="4/3" set=extra
What is the area between $y = 2x$ and $y = x^2$?
solution: They cross at 0 and 2, with $2x$ on top. $\int_0^2 (2x - x^2)\,dx = 4 - \frac{8}{3} = \frac{4}{3}$.
:::

::: problem id=x2 type=numeric answer="1/3" set=extra
What is the area between $y = \sqrt{x}$ and $y = x^2$?
solution: They cross at 0 and 1, with $\sqrt{x}$ on top. $\int_0^1 (\sqrt{x} - x^2)\,dx = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$.
:::

::: problem id=x3 type=numeric answer="e-2" set=extra
What is the area between $y = e^x$ and $y = 1$ from $x = 0$ to $x = 1$? (exact)
solution: $\int_0^1 (e^x - 1)\,dx = (e - 1) - 1 = e - 2$.
:::

::: problem id=x4 type=multi answers="3;-1" set=extra
Where do $y = x^2$ and $y = 2x + 3$ cross? Type both x values.
solution: $x^2 - 2x - 3 = (x - 3)(x + 1) = 0$: $x = 3$ or $x = -1$.
:::

::: problem id=x5 type=numeric answer="32/3" set=extra
What is the area between $y = 2x + 3$ and $y = x^2$?
solution: $\int_{-1}^{3} (2x + 3 - x^2)\,dx = \left[x^2 + 3x - \frac{x^3}{3}\right]_{-1}^{3}$, which is $9 - \left(-\frac{5}{3}\right) = \frac{32}{3}$.
:::

::: problem id=x6 type=numeric answer="sqrt(2)-1" set=extra
What is the area between $y = \cos x$ and $y = \sin x$ from 0 to $\frac{\pi}{4}$? (exact)
solution: $\cos x$ is on top there. $[\sin x + \cos x]_0^{\pi/4} = \sqrt{2} - 1$.
:::

::: problem id=x7 type=point answer="2,4" set=extra
Click where $y = x^2$ and $y = 2x$ cross, other than the origin.
graph:
x -1..4
y -1..6
plot x^2 red
plot 2x blue
solution: $x^2 = 2x$ gives $x = 0$ or 2; at 2, $y = 4$.
:::

::: problem id=x8 type=choice set=extra
Which integral is the area between $y = x + 6$ and $y = x^2$?
- [x] $\int_{-2}^{3} (x + 6 - x^2)\,dx$
- [ ] $\int_{-2}^{3} (x^2 - x - 6)\,dx$
- [ ] $\int_{-3}^{2} (x + 6 - x^2)\,dx$
- [ ] $\int_0^3 (x + 6 - x^2)\,dx$
solution: $x^2 - x - 6 = (x - 3)(x + 2)$: they cross at $-2$ and 3, and the line is on top (try $x = 0$: $6 > 0$).
:::

::: problem id=x9 type=numeric answer="9/2" set=extra
Find the area between $x = y^2$ and $x = y + 2$ by integrating in y.
hint: Right curve minus left curve. They cross where $y^2 = y + 2$.
solution: $y = -1$ and 2. $\int_{-1}^{2} (y + 2 - y^2)\,dy = \frac{10}{3} + \frac{7}{6} = \frac{9}{2}$.
:::

::: problem id=x10 type=numeric answer="4/3" set=extra
A student finds the area between $y = x^2 - 2x$ and the x-axis as $\int_0^2 (x^2 - 2x)\,dx = -\frac{4}{3}$. What is the actual area?
solution: The curve is **below** the axis on $(0, 2)$, so use top minus bottom: $\int_0^2 (0 - (x^2 - 2x))\,dx = \frac{4}{3}$. An area is never negative.
:::

::: problem id=x11 type=numeric answer="4-ln(3)" set=extra
What is the area between $y = x$ and $y = \frac{1}{x}$ from $x = 1$ to $x = 3$? (exact)
solution: $\int_1^3 \left(x - \frac{1}{x}\right)dx = \left[\frac{x^2}{2} - \ln x\right]_1^3$, which is $4 - \ln 3$.
:::

::: problem id=x12 type=numeric answer="1/2" set=extra
Find the total area enclosed between $y = x^3$ and $y = x$.
hint: They cross at $-1$, 0 and 1. The top curve switches at 0.
solution: On $[0, 1]$: $\int (x - x^3)\,dx = \frac{1}{4}$. By symmetry the left loop is also $\frac{1}{4}$. Total $\frac{1}{2}$.
:::

::: problem id=x13 type=numeric answer="2sqrt(2)" set=extra
What is the area between $y = \sin x$ and $y = \cos x$ from $\frac{\pi}{4}$ to $\frac{5\pi}{4}$? (exact)
solution: $\sin x$ is on top. $[-\cos x - \sin x]$: at $\frac{5\pi}{4}$ it is $\sqrt{2}$, at $\frac{\pi}{4}$ it is $-\sqrt{2}$. Area $2\sqrt{2}$.
:::

::: problem id=x14 type=numeric answer="8" set=extra
Pipe A delivers $3\sqrt{t}$ litres per minute and pipe B delivers $t$ litres per minute. How many more litres does A deliver from $t = 0$ to $t = 4$?
solution: $\int_0^4 (3\sqrt{t} - t)\,dt = \left[2t^{3/2} - \frac{t^2}{2}\right]_0^4$, which is $16 - 8 = 8$.
:::

::: problem id=x15 type=numeric answer="2" set=extra
What is the area between $y = x^2$ and $y = 1$ from $x = 0$ to $x = 2$?
hint: The curves cross at $x = 1$, and the top curve changes there.
solution: $\int_0^1 (1 - x^2)\,dx + \int_1^2 (x^2 - 1)\,dx$, which is $\frac{2}{3} + \frac{4}{3} = 2$.
:::

::: problem id=x16 type=numeric answer="2-2/e" set=extra
What is the area between $y = \ln x$ and the x-axis from $x = \frac{1}{e}$ to $x = e$? (exact)
hint: $\ln x < 0$ for $x < 1$. Use $x\ln x - x$.
solution: $\int_{1/e}^{1} \ln x\,dx = -1 + \frac{2}{e}$, so that part has area $1 - \frac{2}{e}$. $\int_1^e \ln x\,dx = 1$. Total $2 - \frac{2}{e}$.
:::

::: problem id=x17 type=numeric answer="8/3" set=extra
What is the area between $y = 2 - x^2$ and $y = x^2$?
hint: They cross where $2 - x^2 = x^2$.
solution: $x = \pm 1$. $\int_{-1}^{1} (2 - 2x^2)\,dx = 4 - \frac{4}{3} = \frac{8}{3}$.
:::

::: problem id=x18 type=numeric answer="10/3" set=extra
Find the area bounded by $y = \sqrt{x}$, $y = x - 2$ and the x-axis.
hint: In y: x runs from $y^2$ (left) to $y + 2$ (right), for $0 \le y \le 2$.
solution: $\int_0^2 (y + 2 - y^2)\,dy = 2 + 4 - \frac{8}{3} = \frac{10}{3}$.
:::

::: problem id=x19 type=numeric answer="pi/2-1/3" set=extra
What is the area between $y = \frac{1}{1 + x^2}$ and $y = \frac{x^2}{2}$? (exact)
hint: They cross where $2 = x^2(1 + x^2)$: $x = \pm 1$.
solution: $\int_{-1}^{1} \left(\frac{1}{1 + x^2} - \frac{x^2}{2}\right)dx$ is $[\arctan x]_{-1}^{1} - \frac{1}{3} = \frac{\pi}{2} - \frac{1}{3}$.
:::

::: problem id=x20 type=numeric answer="9" set=extra creative=true
For which $b > 0$ is the area between $y = x^2$ and $y = b$ equal to 36?
hint: Find the area as a formula in b first.
solution: $\int_{-\sqrt{b}}^{\sqrt{b}} (b - x^2)\,dx = \frac{4}{3}b^{3/2}$. Set it to 36: $b^{3/2} = 27$, so $b = 9$.
:::
