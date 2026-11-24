---
id: graph-test
title: Graphing lines test
pass: 0.8
---
::: problem id=t1 type=point answer="-3,2"
Plot the point $(-3, 2)$.
graph:
x -5..5
y -5..5
solution: Left 3, up 2.
:::

::: problem id=t2 type=numeric answer="4"
What is the slope through $(2, 3)$ and $(4, 11)$?
solution: $\frac{11 - 3}{4 - 2} = 4$.
:::

::: problem id=t3 type=numeric answer="-7"
What is the y-intercept of $y = 5x - 7$?
solution: $b = -7$.
:::

::: problem id=t4 type=expression answer="-x+4"
Write the line with slope $-1$ and y-intercept 4, as $y = \ldots$
solution: $y = -x + 4$.
:::

::: problem id=t5 type=expression answer="2x-1"
Write the line through $(1, 1)$ and $(3, 5)$, as $y = \ldots$
solution: Slope 2. $y - 1 = 2(x - 1)$, so $y = 2x - 1$.
:::

::: problem id=t6 type=numeric answer="4"
What is the x-intercept of $3x + 2y = 12$?
solution: $y = 0$: $3x = 12$, $x = 4$.
:::

::: problem id=t7 type=numeric answer="-3/2"
What is the slope of a line perpendicular to $y = \frac{2}{3}x$?
solution: Negative reciprocal of $\frac{2}{3}$: $-\frac{3}{2}$.
:::

::: problem id=t8 type=point answer="2,4"
Click where $y = 2x$ and $y = -x + 6$ cross.
graph:
x -1..6
y -1..7
plot 2x blue
plot -x+6 red
solution: $2x = -x + 6$, $x = 2$, $y = 4$.
:::
