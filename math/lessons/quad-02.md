---
id: quad-02
title: The quadratic formula
---
::: rule
Every equation $ax^2 + bx + c = 0$ can be solved with

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

First write the equation with 0 on one side, then read off a, b and c (with their signs).
:::

::: example
$2x^2 - 5x + 2 = 0$: $a = 2$, $b = -5$, $c = 2$.

$b^2 - 4ac = 25 - 16 = 9$. So $x = \frac{5 \pm 3}{4}$: $x = 2$ or $x = \frac{1}{2}$.
:::

::: problem id=p1 type=multi answers="1;-4"
Solve $x^2 + 3x - 4 = 0$.
solution: $\frac{-3 \pm \sqrt{9 + 16}}{2} = \frac{-3 \pm 5}{2}$: 1 and $-4$.
:::

::: problem id=p2 type=multi answers="2;1/2"
Solve $2x^2 - 5x + 2 = 0$.
solution: $\frac{5 \pm 3}{4}$: 2 and $\frac{1}{2}$.
:::

::: problem id=p3 type=multi answers="1+sqrt(2);1-sqrt(2)"
Solve $x^2 - 2x - 1 = 0$.
hint: $b^2 - 4ac = 4 + 4 = 8$, and $\sqrt{8} = 2\sqrt{2}$.
solution: $\frac{2 \pm 2\sqrt{2}}{2} = 1 \pm \sqrt{2}$.
:::

::: problem id=p4 type=numeric answer="73"
For $3x^2 + 7x - 2 = 0$, what is $b^2 - 4ac$?
solution: $49 - 4(3)(-2) = 49 + 24 = 73$.
:::

::: problem id=p5 type=multi answers="-2+sqrt(3);-2-sqrt(3)"
Solve $x^2 + 4x + 1 = 0$.
solution: $\frac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt{3}$.
:::

::: problem id=p6 type=multi answers="1;-1/3"
Solve $3x^2 = 2x + 1$.
hint: First move everything to one side.
solution: $3x^2 - 2x - 1 = 0$: $\frac{2 \pm \sqrt{4 + 12}}{6} = \frac{2 \pm 4}{6}$: 1 and $-\frac{1}{3}$.
:::

::: problem id=p7 type=numeric answer="4"
A ball's height is $h = -5t^2 + 20t$ metres after t seconds. After how many seconds does it land ($h = 0$, $t > 0$)?
solution: $-5t(t - 4) = 0$: $t = 0$ (thrown) or $t = 4$ (lands).
:::

::: problem id=p8 type=choice
Which is the quadratic formula?
- [x] $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- [ ] $x = \frac{b \pm \sqrt{b^2 - 4ac}}{2a}$
- [ ] $x = -b \pm \frac{\sqrt{b^2 - 4ac}}{2a}$
solution: The whole top, $-b \pm \sqrt{b^2 - 4ac}$, is divided by $2a$.
:::
