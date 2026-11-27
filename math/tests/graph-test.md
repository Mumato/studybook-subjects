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

::: problem id=t9 type=choice
Which quadrant is $(4, -9)$ in?
- [ ] I
- [ ] II
- [ ] III
- [x] IV
solution: x positive, y negative: quadrant **IV**.
:::

::: problem id=t10 type=numeric answer="-2/3"
What is the slope through $(-1, 5)$ and $(2, 3)$?
solution: $\frac{3 - 5}{2 - (-1)} = \frac{-2}{3}$.
:::

::: problem id=t11 type=choice
What is the slope of a vertical line such as $x = 3$?
- [ ] 0
- [ ] 1
- [x] Undefined
- [ ] 3
solution: Run is 0, and you can't divide by 0: the slope is **undefined**. (A horizontal line has slope 0.)
:::

::: problem id=t12 type=point answer="0,-2"
Plot the y-intercept of $y = 3x - 2$.
graph:
x -5..5
y -5..5
solution: $b = -2$, so the line crosses the y-axis at $(0, -2)$.
:::

::: problem id=t13 type=expression answer="-3x+5"
Write the line through $(2, -1)$ with slope $-3$, as $y = \ldots$
solution: $y + 1 = -3(x - 2)$, so $y = -3x + 6 - 1 = -3x + 5$.
:::

::: problem id=t14 type=numeric answer="-2"
Rewrite $4x + 2y = 6$ in slope-intercept form. What is the slope?
solution: $2y = -4x + 6$, so $y = -2x + 3$. Slope $-2$.
:::

::: problem id=t15 type=expression answer="5x-11"
Write the line through $(3, 4)$ parallel to $y = 5x + 1$, as $y = \ldots$
solution: Parallel means the same slope, 5. $y - 4 = 5(x - 3)$, so $y = 5x - 11$.
:::

::: problem id=t16 type=expression answer="-x/2+4"
Write the line through $(4, 2)$ perpendicular to $y = 2x - 7$, as $y = \ldots$
solution: Perpendicular slope $-\frac{1}{2}$. $y - 2 = -\frac{1}{2}(x - 4)$, so $y = -\frac{1}{2}x + 4$.
:::

::: problem id=t17 type=choice
Are $y = 3x + 2$ and $6x - 2y = 8$ parallel, perpendicular or neither?
- [x] Parallel
- [ ] Perpendicular
- [ ] Neither
solution: The second is $y = 3x - 4$: both slopes are 3 with different intercepts, so they're **parallel**.
:::

::: problem id=t18 type=numeric answer="135"
A taxi charges a flat fee plus a fixed amount per km. A 4 km ride costs 90 and a 10 km ride costs 180. What does a 7 km ride cost?
hint: Treat (km, cost) as points on a line.
solution: Slope $\frac{180 - 90}{10 - 4} = 15$ per km, fee $90 - 4 \times 15 = 30$. Cost $= 15 \times 7 + 30 = 135$.
:::
