---
id: graph-03
title: Slope-intercept form
---
::: rule
$$y = mx + b$$

**m** is the slope and **b** is the **y-intercept**, where the line crosses the y-axis at $(0, b)$.

To draw it: plot $(0, b)$, then use the slope (rise over run) to find more points.
:::

::: example
$y = 2x - 1$: start at $(0, -1)$, then up 2 and right 1 to $(1, 1)$, again to $(2, 3)$.
:::

::: graph
x -3..4
y -4..5
plot 2x-1 blue
point 0,-1
point 1,1
point 2,3
:::

When the answer is an equation, type just the right side, like 2x-1.

::: problem id=p1 type=numeric answer="3"
What is the slope of $y = 3x - 4$?
solution: $m = 3$.
:::

::: problem id=p2 type=numeric answer="5"
What is the y-intercept of $y = -2x + 5$?
solution: $b = 5$: the line crosses at $(0, 5)$.
:::

::: problem id=p3 type=point answer="0,2"
Here is $y = x + 2$. Click its y-intercept.
graph:
x -5..5
y -5..5
plot x+2 blue
solution: $b = 2$, so the point $(0, 2)$.
:::

::: problem id=p4 type=expression answer="4x-1"
Write the equation of the line with slope 4 and y-intercept $-1$. Type the right side of $y = \ldots$
solution: $y = 4x - 1$.
:::

::: problem id=p5 type=point answer="3,0"
Here is $y = -x + 3$. Click where it crosses the x-axis.
graph:
x -5..5
y -5..5
plot -x+3 blue
hint: On the x-axis, y is 0. Solve $0 = -x + 3$.
solution: $0 = -x + 3$ gives $x = 3$: the point $(3, 0)$.
:::

::: problem id=p6 type=expression answer="3x+2"
A line goes through $(0, 2)$ and $(1, 5)$. Write its equation, $y = \ldots$
hint: The y-intercept is 2. Find the slope.
solution: Slope $\frac{5 - 2}{1 - 0} = 3$, intercept 2: $y = 3x + 2$.
:::

::: problem id=p7 type=numeric answer="9"
For $y = 2x + 1$, what is y when $x = 4$?
solution: $2(4) + 1 = 9$.
:::

::: problem id=p8 type=choice
Which line is steeper?
- [x] $y = 3x$
- [ ] $y = 0.5x$
solution: The bigger slope (ignoring sign) is steeper: 3.
:::

::: problem id=x1 type=numeric answer="-5" set=extra
What is the slope of $y = -5x + 2$?
solution: $m = -5$.
:::

::: problem id=x2 type=numeric answer="-3" set=extra
What is the y-intercept of $y = \frac{x}{2} - 3$?
solution: $b = -3$: the line crosses at $(0, -3)$.
:::

::: problem id=x3 type=expression answer="-3x+7" set=extra
Write the line with slope $-3$ and y-intercept 7, as $y = \ldots$
solution: $y = -3x + 7$.
:::

::: problem id=x4 type=expression answer="x/2-4" set=extra
Write the line with slope $\frac{1}{2}$ and y-intercept $-4$, as $y = \ldots$
solution: $y = \frac{1}{2}x - 4$, typed x/2-4.
:::

::: problem id=x5 type=point answer="0,-3" set=extra
Here is $y = 2x - 3$. Click its y-intercept.
graph:
x -5..5
y -5..5
plot 2x-3 blue
solution: $b = -3$: the point $(0, -3)$.
:::

::: problem id=x6 type=point answer="3,3" set=extra
Here is $y = 2x - 3$. Click the point on it where $x = 3$.
graph:
x -5..5
y -5..5
plot 2x-3 blue
solution: $y = 2(3) - 3 = 3$: the point $(3, 3)$.
:::

::: problem id=x7 type=numeric answer="10" set=extra
For $y = -3x + 4$, what is y when $x = -2$?
solution: $-3(-2) + 4 = 6 + 4 = 10$.
:::

::: problem id=x8 type=numeric answer="4" set=extra
For $y = 4x - 6$, which x gives $y = 10$?
solution: $10 = 4x - 6$, $4x = 16$, $x = 4$.
:::

::: problem id=x9 type=expression answer="3x-2" set=extra
A line goes through $(0, -2)$ and $(2, 4)$. Write its equation, $y = \ldots$
solution: Slope $\frac{4 - (-2)}{2 - 0} = 3$, intercept $-2$: $y = 3x - 2$.
:::

::: problem id=x10 type=numeric answer="5" set=extra
The horizontal line through $(0, 5)$ is $y = \square$. What number goes in the box?
solution: Slope 0 and intercept 5: $y = 0x + 5 = 5$.
:::

::: problem id=x11 type=point answer="2,0" set=extra
Here is $y = 2x - 4$. Click where it crosses the x-axis.
graph:
x -5..5
y -5..5
plot 2x-4 blue
solution: $0 = 2x - 4$ gives $x = 2$: the point $(2, 0)$.
:::

::: problem id=x12 type=choice set=extra
Which line goes down to the right and crosses the y-axis above the origin?
- [x] $y = -2x + 3$
- [ ] $y = 2x + 3$
- [ ] $y = -2x - 3$
solution: Down to the right needs a negative slope; above the origin needs a positive b. Only $y = -2x + 3$ has both.
:::

::: problem id=x13 type=numeric answer="23" set=extra
A phone plan costs $y = 0.1x + 15$ dollars a month for x texts. What does a month with 80 texts cost?
solution: $0.1(80) + 15 = 8 + 15 = 23$ dollars.
:::

::: problem id=x14 type=expression answer="30-2x" set=extra
A candle is 30 cm tall and burns 2 cm every hour. Write its height after x hours, $h = \ldots$
solution: Start (intercept) 30, change $-2$ per hour (slope): $h = 30 - 2x$.
:::

::: problem id=x15 type=numeric answer="-2" set=extra
Sam says $y = 3 - 2x$ has slope 3. What is the slope really?
solution: Reorder: $y = -2x + 3$. The slope is the number with x: $-2$. (3 is the y-intercept.)
:::

::: problem id=x16 type=expression answer="2x-3" set=extra
A line goes through $(2, 1)$ and $(4, 5)$. Write its equation, $y = \ldots$
hint: Find m, then put one point into $y = mx + b$ to find b.
solution: $m = \frac{5 - 1}{4 - 2} = 2$. Then $1 = 2(2) + b$, so $b = -3$: $y = 2x - 3$.
:::

::: problem id=x17 type=numeric answer="3" set=extra
The line $y = mx + 3$ goes through $(2, 9)$. What is m?
hint: Put $x = 2$ and $y = 9$ into the equation.
solution: $9 = 2m + 3$, so $2m = 6$ and $m = 3$.
:::

::: problem id=x18 type=point answer="3,7" set=extra
Click where $y = 2x + 1$ meets the horizontal line $y = 7$.
graph:
x -1..6
y -1..9
plot 2x+1 blue
plot 7 red
hint: Solve $2x + 1 = 7$.
solution: $2x = 6$, $x = 3$: the point $(3, 7)$.
:::

::: problem id=x19 type=numeric answer="25" set=extra
A tank holds 200 L and drains at 8 L per minute, so $v = 200 - 8t$. After how many minutes is it empty?
hint: Empty means $v = 0$.
solution: $0 = 200 - 8t$, $8t = 200$, $t = 25$ minutes.
:::

::: problem id=x20 type=numeric answer="10/3" set=extra creative=true
The line $y = mx + b$ goes through $(1, 5)$, and its y-intercept is twice its slope. What is b?
hint: Write two facts: $5 = m + b$ and $b = 2m$.
solution: $5 = m + 2m = 3m$, so $m = \frac{5}{3}$ and $b = \frac{10}{3}$.
:::
