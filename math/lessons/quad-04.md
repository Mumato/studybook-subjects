---
id: quad-04
title: The discriminant
---
::: rule
The **discriminant** $D = b^2 - 4ac$ (the part under the root in the quadratic formula) tells you how many real solutions $ax^2 + bx + c = 0$ has:
- $D > 0$: **two** (the parabola crosses the x-axis twice)
- $D = 0$: **one** (it just touches)
- $D < 0$: **none** (it misses)
:::

::: example
$x^2 + 2x + 5$: $D = 4 - 20 = -16 < 0$, so no real solutions.
:::

::: graph
x -4..2
y -1..8
plot x^2+2x+5 blue
:::

::: problem id=p1 type=numeric answer="-16"
What is the discriminant of $x^2 + 2x + 5$?
solution: $2^2 - 4(1)(5) = -16$.
:::

::: problem id=p2 type=choice
How many real solutions does $x^2 - 6x + 9 = 0$ have?
- [ ] two
- [x] one
- [ ] none
solution: $D = 36 - 36 = 0$: **one**.
:::

::: problem id=p3 type=numeric answer="2"
How many real solutions does $2x^2 + x - 3 = 0$ have?
solution: $D = 1 + 24 = 25 > 0$: **2**.
:::

::: problem id=p4 type=numeric answer="0"
How many real solutions does $x^2 + x + 1 = 0$ have?
solution: $D = 1 - 4 = -3 < 0$: **0**.
:::

::: problem id=p5 type=numeric answer="6"
For which positive k does $x^2 + kx + 9 = 0$ have exactly one solution?
hint: Set $D = 0$.
solution: $k^2 - 36 = 0$, so $k = 6$.
:::

::: problem id=p6 type=text answers="no"
Does $y = x^2 + 1$ cross the x-axis? Type yes or no.
solution: $D = 0 - 4 < 0$ (and $x^2 + 1$ is always at least 1): **no**.
:::

::: problem id=p7 type=numeric answer="2"
How many x-intercepts does $y = x^2 - 4$ have?
solution: $D = 0 + 16 > 0$: two, at $x = \pm 2$.
:::

::: problem id=p8 type=point answer="2,0"
$y = x^2 - 4x + 4$ touches the x-axis exactly once. Click that point.
graph:
x -1..5
y -1..5
plot x^2-4x+4 blue
solution: $(x - 2)^2 = 0$ at $x = 2$: the point $(2, 0)$.
:::

::: problem id=c1 type=numeric answer="4" creative=true
For which number c does $x^2 + 4x + c = 0$ have exactly one solution?
hint: $D = 0$.
solution: $16 - 4c = 0$, so $c = 4$. Then $x^2 + 4x + 4 = (x + 2)^2$.
:::
