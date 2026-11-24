---
id: graph-04
title: Point-slope and standard form
---
::: rule
- **Point-slope form:** a line with slope m through $(x_1, y_1)$ is $y - y_1 = m(x - x_1)$. Expand it to get $y = mx + b$.
- **Standard form:** $Ax + By = C$. To find the **x-intercept**, set $y = 0$; for the **y-intercept**, set $x = 0$.
:::

::: example
Slope 3 through $(2, 1)$: $y - 1 = 3(x - 2)$, so $y = 3x - 6 + 1 = 3x - 5$.
:::

::: example
$2x + 3y = 12$. If $y = 0$: $x = 6$. If $x = 0$: $y = 4$. The line passes through $(6, 0)$ and $(0, 4)$.
:::

::: graph
x -1..7
y -1..5
plot (12-2x)/3 blue
point 6,0
point 0,4
:::

::: problem id=p1 type=expression answer="2x+1"
Write the line with slope 2 through $(1, 3)$ as $y = \ldots$
solution: $y - 3 = 2(x - 1)$, so $y = 2x + 1$.
:::

::: problem id=p2 type=expression answer="3x-5"
Write the line through $(2, 1)$ and $(4, 7)$ as $y = \ldots$
hint: Find the slope first.
solution: Slope $\frac{7 - 1}{4 - 2} = 3$. $y - 1 = 3(x - 2)$, so $y = 3x - 5$.
:::

::: problem id=p3 type=numeric answer="6"
What is the x-intercept of $2x + 3y = 12$?
solution: Set $y = 0$: $2x = 12$, $x = 6$.
:::

::: problem id=p4 type=numeric answer="4"
What is the y-intercept of $2x + 3y = 12$?
solution: Set $x = 0$: $3y = 12$, $y = 4$.
:::

::: problem id=p5 type=point answer="2,0"
Click the x-intercept of $3x - y = 6$.
graph:
x -5..5
y -7..3
plot 3x-6 blue
solution: $y = 0$: $3x = 6$, $x = 2$. The point $(2, 0)$.
:::

::: problem id=p6 type=expression answer="-2x+4"
Write $4x + 2y = 8$ as $y = \ldots$
solution: $2y = -4x + 8$, so $y = -2x + 4$.
:::

::: problem id=p7 type=numeric answer="-3/4"
What is the slope of $3x + 4y = 12$?
hint: Solve for y.
solution: $4y = -3x + 12$, $y = -\frac{3}{4}x + 3$. Slope $-\frac{3}{4}$.
:::

::: problem id=p8 type=expression answer="-2x+2"
Write the line with slope $-2$ through $(-1, 4)$ as $y = \ldots$
solution: $y - 4 = -2(x + 1)$, so $y = -2x + 2$.
:::
