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

::: problem id=x1 type=expression answer="3x-1" set=extra
Write the line with slope 3 through $(1, 2)$ as $y = \ldots$
solution: $y - 2 = 3(x - 1)$, so $y = 3x - 3 + 2 = 3x - 1$.
:::

::: problem id=x2 type=expression answer="-x+7" set=extra
Write the line with slope $-1$ through $(2, 5)$ as $y = \ldots$
solution: $y - 5 = -(x - 2)$, so $y = -x + 7$.
:::

::: problem id=x3 type=expression answer="x/2-1" set=extra
Write the line with slope $\frac{1}{2}$ through $(4, 1)$ as $y = \ldots$
solution: $y - 1 = \frac{1}{2}(x - 4)$, so $y = \frac{1}{2}x - 2 + 1 = \frac{1}{2}x - 1$.
:::

::: problem id=x4 type=expression answer="2x+2" set=extra
Write the line through $(1, 4)$ and $(3, 8)$ as $y = \ldots$
solution: Slope $\frac{8 - 4}{3 - 1} = 2$. $y - 4 = 2(x - 1)$, so $y = 2x + 2$.
:::

::: problem id=x5 type=expression answer="-2x+1" set=extra
Write the line through $(-1, 3)$ and $(2, -3)$ as $y = \ldots$
solution: Slope $\frac{-3 - 3}{2 - (-1)} = -2$. $y - 3 = -2(x + 1)$, so $y = -2x + 1$.
:::

::: problem id=x6 type=numeric answer="5" set=extra
What is the x-intercept of $4x + 5y = 20$?
solution: Set $y = 0$: $4x = 20$, $x = 5$.
:::

::: problem id=x7 type=numeric answer="4" set=extra
What is the y-intercept of $4x + 5y = 20$?
solution: Set $x = 0$: $5y = 20$, $y = 4$.
:::

::: problem id=x8 type=point answer="0,-2" set=extra
Click the y-intercept of $2x - 3y = 6$.
graph:
x -5..5
y -5..5
plot (2x-6)/3 blue
solution: Set $x = 0$: $-3y = 6$, $y = -2$. The point $(0, -2)$.
:::

::: problem id=x9 type=expression answer="-3x+7" set=extra
Write $3x + y = 7$ as $y = \ldots$
solution: Subtract $3x$: $y = -3x + 7$.
:::

::: problem id=x10 type=numeric answer="5/2" set=extra
What is the slope of $5x - 2y = 10$?
hint: Solve for y.
solution: $-2y = -5x + 10$, so $y = \frac{5}{2}x - 5$. Slope $\frac{5}{2}$.
:::

::: problem id=x11 type=choice set=extra
Which is the line with slope 4 through $(-2, 1)$?
- [x] $y - 1 = 4(x + 2)$
- [ ] $y + 1 = 4(x - 2)$
- [ ] $y - 1 = 4(x - 2)$
solution: $y - y_1 = m(x - x_1)$ with $x_1 = -2$: $x - (-2) = x + 2$. So $y - 1 = 4(x + 2)$.
:::

::: problem id=x12 type=expression answer="-3x+5" set=extra
Zoe writes the line with slope $-3$ through $(2, -1)$ as $y - 1 = -3(x - 2)$. That's wrong. Write the correct line as $y = \ldots$
solution: $y - (-1) = y + 1$. So $y + 1 = -3(x - 2)$, $y = -3x + 6 - 1 = -3x + 5$.
:::

::: problem id=x13 type=numeric answer="-12" set=extra
Write $y = \frac{2}{3}x + 4$ in standard form as $2x - 3y = C$. What is C?
hint: Multiply by 3 first.
solution: $3y = 2x + 12$. Move the terms: $2x - 3y = -12$.
:::

::: problem id=x14 type=expression answer="30x+40" set=extra
A gym's total cost is a straight line in the number of months. After 3 months you have paid 130 dollars; after 7 months, 250. Write the total after x months, $y = \ldots$
solution: Slope $\frac{250 - 130}{7 - 3} = 30$. $y - 130 = 30(x - 3)$, so $y = 30x + 40$.
:::

::: problem id=x15 type=numeric answer="4" set=extra
Pens cost 2 dollars and notebooks 5 dollars. You spend exactly 40 dollars: $2x + 5y = 40$. How many notebooks do you buy with 10 pens?
solution: $2(10) + 5y = 40$, $5y = 20$, $y = 4$.
:::

::: problem id=x16 type=expression answer="x/2" set=extra
Write the line through $(-2, -1)$ and $(4, 2)$ as $y = \ldots$
hint: Careful with the negative signs in the slope.
solution: Slope $\frac{2 - (-1)}{4 - (-2)} = \frac{3}{6} = \frac{1}{2}$. $y - 2 = \frac{1}{2}(x - 4)$, so $y = \frac{1}{2}x$.
:::

::: problem id=x17 type=numeric answer="24" set=extra
The line $3x + 4y = 24$ and the two axes form a triangle. What is its area?
hint: Find both intercepts: they are the legs of a right triangle.
solution: x-intercept 8, y-intercept 6. Area $\frac{1}{2} \times 8 \times 6 = 24$.
:::

::: problem id=x18 type=point answer="2,0" set=extra
The line through $(1, -2)$ has slope 2. Click its x-intercept.
graph:
x -3..5
y -5..3
point 1,-2
hint: Write the line, then set $y = 0$.
solution: $y = 2(x - 1) - 2 = 2x - 4$. $0 = 2x - 4$ gives $x = 2$: $(2, 0)$.
:::

::: problem id=x19 type=numeric answer="3" set=extra
The line through $(1, 7)$ with slope $-2$ also goes through $(3, k)$. What is k?
hint: $k - 7 = -2(3 - 1)$.
solution: $k - 7 = -4$, so $k = 3$.
:::

::: problem id=x20 type=expression answer="-x+7" set=extra creative=true
A line goes through $(2, 5)$, and its x-intercept equals its y-intercept (not 0). Write it as $y = \ldots$
hint: Equal intercepts c mean the line is $x + y = c$.
solution: Intercepts $(c, 0)$ and $(0, c)$ give $x + y = c$. Put in $(2, 5)$: $c = 7$. So $y = -x + 7$.
:::
