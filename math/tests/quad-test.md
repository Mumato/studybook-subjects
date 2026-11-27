---
id: quad-test
title: Quadratics test
pass: 0.8
---
::: problem id=t1 type=multi answers="5;-5"
Solve $x^2 = 25$.
solution: $\pm 5$.
:::

::: problem id=t2 type=multi answers="3;-5"
Solve $(x + 1)^2 = 16$.
solution: $x + 1 = \pm 4$: 3 and $-5$.
:::

::: problem id=t3 type=multi answers="3;-2"
Solve $x^2 - x - 6 = 0$.
solution: $\frac{1 \pm 5}{2}$: 3 and $-2$.
:::

::: problem id=t4 type=multi answers="-1+sqrt(3);-1-sqrt(3)"
Solve $x^2 + 2x - 2 = 0$.
solution: $\frac{-2 \pm \sqrt{12}}{2} = -1 \pm \sqrt{3}$.
:::

::: problem id=t5 type=point answer="-2,-3"
Click the vertex of $y = (x + 2)^2 - 3$.
graph:
x -5..2
y -4..4
plot (x+2)^2-3 blue
solution: $(-2, -3)$.
:::

::: problem id=t6 type=numeric answer="2"
What is the axis of symmetry of $y = 2x^2 - 8x + 1$? Type the x value.
solution: $x = \frac{8}{4} = 2$.
:::

::: problem id=t7 type=numeric answer="-7"
What is the discriminant of $x^2 - 3x + 4$?
solution: $9 - 16 = -7$.
:::

::: problem id=t8 type=numeric answer="1"
How many real solutions does $x^2 + 6x + 9 = 0$ have?
solution: $D = 0$: one.
:::

::: problem id=t9 type=numeric answer="49"
$x^2 - 14x + \square$ is a perfect square. What goes in the box?
solution: $\left(\frac{-14}{2}\right)^2 = 49$.
:::

::: problem id=t10 type=multi answers="4+sqrt(3);4-sqrt(3)"
Solve $x^2 - 8x + 13 = 0$. Type square roots as sqrt(...).
solution: $x^2 - 8x + 16 = 3$, $(x - 4)^2 = 3$: $x = 4 \pm \sqrt{3}$.
:::

::: problem id=t11 type=multi answers="3/2;-2"
Solve $2x^2 + x - 6 = 0$.
solution: $\frac{-1 \pm \sqrt{1 + 48}}{4} = \frac{-1 \pm 7}{4}$: $\frac{3}{2}$ and $-2$.
:::

::: problem id=t12 type=numeric answer="5"
What is the largest value of $y = -2x^2 + 8x - 3$?
solution: Vertex at $x = -\frac{8}{2(-2)} = 2$: $y = -8 + 16 - 3 = 5$.
:::

::: problem id=t13 type=numeric answer="10"
For which positive k does $x^2 + kx + 25 = 0$ have exactly one solution?
solution: $k^2 - 100 = 0$, $k = 10$.
:::

::: problem id=t14 type=choice
Solve $x^2 - 5x + 4 \le 0$.
- [x] $[1, 4]$
- [ ] $(1, 4)$
- [ ] $(-\infty, 1] \cup [4, \infty)$
- [ ] $[-4, -1]$
solution: $(x - 1)(x - 4) \le 0$ between the zeros, ends included: $[1, 4]$.
:::

::: problem id=t15 type=choice
Solve $(x + 1)(x - 2)(x - 5) > 0$.
- [x] $(-1, 2) \cup (5, \infty)$
- [ ] $(-\infty, -1) \cup (2, 5)$
- [ ] $(2, 5)$
- [ ] $(5, \infty)$
solution: Signs from the left: $-$, $+$, $-$, $+$. Keep the $+$ pieces: $(-1, 2) \cup (5, \infty)$.
:::

::: problem id=t16 type=multi answers="4;-1"
Solve $y = x^2 - 2x$ and $y = x + 4$. Type the x-values.
solution: $x^2 - 3x - 4 = 0$, $(x - 4)(x + 1) = 0$: 4 and $-1$.
:::

::: problem id=t17 type=numeric answer="0"
How many points do the circle $x^2 + y^2 = 4$ and the line $y = x + 3$ share?
solution: $x^2 + (x + 3)^2 = 4$ gives $2x^2 + 6x + 5 = 0$. $D = 36 - 40 < 0$: **0**.
:::

::: problem id=t18 type=numeric answer="3"
A ball's height is $h = -5t^2 + 25t$ metres. For how many seconds is it higher than 20 m?
solution: $-5t^2 + 25t > 20$ gives $t^2 - 5t + 4 < 0$, $(t - 1)(t - 4) < 0$: $1 < t < 4$. **3** seconds.
:::
