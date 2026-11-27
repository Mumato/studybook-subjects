---
id: graph-02
title: Slope
---
::: rule
The **slope** of a line says how steep it is: how much it rises for each step to the right.

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

- positive: goes up to the right
- negative: goes down to the right
- 0: flat (horizontal)
- vertical lines have **undefined** slope (you'd divide by 0)
:::

::: example
Through $(0, 1)$ and $(2, 5)$: rise $5 - 1 = 4$, run $2 - 0 = 2$, so $m = \frac{4}{2} = 2$.
:::

::: graph
x -1..4
y -1..6
plot 2x+1 blue
point 0,1
point 2,5
segment 0,1 2,1 run 2 red
segment 2,1 2,5 rise 4 red
:::

::: problem id=p1 type=numeric answer="2"
What is the slope of the line through $(1, 2)$ and $(3, 6)$?
solution: $\frac{6 - 2}{3 - 1} = \frac{4}{2} = 2$.
:::

::: problem id=p2 type=numeric answer="-2"
What is the slope of the line through $(-1, 4)$ and $(2, -2)$?
hint: Keep the order the same on top and bottom.
solution: $\frac{-2 - 4}{2 - (-1)} = \frac{-6}{3} = -2$.
:::

::: problem id=p3 type=numeric answer="0"
What is the slope of the line through $(0, 3)$ and $(4, 3)$?
solution: The rise is $3 - 3 = 0$, so the slope is **0** (a flat line).
:::

::: problem id=p4 type=choice
What is the slope of a vertical line?
- [ ] 0
- [ ] 1
- [x] undefined
solution: The run is 0, and you can't divide by 0: **undefined**.
:::

::: problem id=p5 type=numeric answer="1/4"
A ramp rises 3 m over a horizontal distance of 12 m. What is its slope?
solution: $\frac{3}{12} = \frac{1}{4}$.
:::

::: problem id=p6 type=point answer="2,4"
A line goes through $(0, 0)$ with slope 2. Click the point on the line where $x = 2$.
graph:
x -1..5
y -1..6
point 0,0
hint: Every 1 step right, the line goes up 2.
solution: 2 steps right means up $2 \times 2 = 4$: $(2, 4)$.
:::

::: problem id=p7 type=numeric answer="1/2"
What is the slope of the line through $(2, 5)$ and $(6, 7)$?
solution: $\frac{7 - 5}{6 - 2} = \frac{2}{4} = \frac{1}{2}$.
:::

::: problem id=p8 type=choice
A line goes down from left to right. Its slope is:
- [ ] positive
- [x] negative
- [ ] zero
solution: Going down to the right means **negative** slope.
:::

::: problem id=x1 type=numeric answer="2" set=extra
What is the slope of the line through $(1, 1)$ and $(4, 7)$?
solution: $\frac{7 - 1}{4 - 1} = \frac{6}{3} = 2$.
:::

::: problem id=x2 type=numeric answer="-2" set=extra
What is the slope of the line through $(-2, 3)$ and $(2, -5)$?
solution: $\frac{-5 - 3}{2 - (-2)} = \frac{-8}{4} = -2$.
:::

::: problem id=x3 type=numeric answer="1/2" set=extra
What is the slope of the line through $(3, -1)$ and $(7, 1)$?
solution: $\frac{1 - (-1)}{7 - 3} = \frac{2}{4} = \frac{1}{2}$.
:::

::: problem id=x4 type=numeric answer="-1/2" set=extra
What is the slope of the line through $(-4, -2)$ and $(2, -5)$?
solution: $\frac{-5 - (-2)}{2 - (-4)} = \frac{-3}{6} = -\frac{1}{2}$.
:::

::: problem id=x5 type=choice set=extra
What is the slope of the line through $(5, 2)$ and $(5, -3)$?
- [ ] 0
- [ ] $-5$
- [x] undefined
solution: The run is $5 - 5 = 0$. The line is vertical, so the slope is **undefined**.
:::

::: problem id=x6 type=numeric answer="0" set=extra
What is the slope of the line through $(-3, 4)$ and $(5, 4)$?
solution: The rise is $4 - 4 = 0$: slope **0**, a horizontal line.
:::

::: problem id=x7 type=point answer="2,4" set=extra
A line goes through $(1, 1)$ with slope 3. Click the point on it where $x = 2$.
graph:
x -1..5
y -1..6
point 1,1
solution: 1 step right means up 3: $(2, 4)$.
:::

::: problem id=x8 type=point answer="2,0" set=extra
A line goes through $(0, 4)$ with slope $-2$. Click the point on it where $x = 2$.
graph:
x -1..5
y -1..5
point 0,4
solution: Each step right goes down 2. Two steps: down 4, to $(2, 0)$.
:::

::: problem id=x9 type=numeric answer="1/20" set=extra
A road rises 15 m over a horizontal distance of 300 m. What is its slope, as a fraction?
solution: $\frac{15}{300} = \frac{1}{20}$.
:::

::: problem id=x10 type=numeric answer="3" set=extra
The line through $(2, k)$ and $(4, 9)$ has slope 3. What is k?
solution: $\frac{9 - k}{4 - 2} = 3$, so $9 - k = 6$ and $k = 3$.
:::

::: problem id=x11 type=numeric answer="-2" set=extra
Lee finds the slope through $(1, 5)$ and $(3, 1)$ as $\frac{1 - 5}{1 - 3} = 2$. He mixed up the order on the bottom. What is the correct slope?
solution: Keep the same order: $\frac{1 - 5}{3 - 1} = \frac{-4}{2} = -2$.
:::

::: problem id=x12 type=choice set=extra
Which line is the steepest?
- [ ] through $(0, 0)$ and $(1, 2)$
- [x] through $(0, 0)$ and $(1, -5)$
- [ ] through $(0, 0)$ and $(3, 1)$
solution: The slopes are 2, $-5$ and $\frac{1}{3}$. Steepness is the size of the slope, ignoring the sign: $|-5| = 5$ is biggest.
:::

::: problem id=x13 type=numeric answer="3" set=extra
A plant is 4 cm tall on day 2 and 13 cm tall on day 5. How many cm does it grow per day (the slope)?
solution: $\frac{13 - 4}{5 - 2} = \frac{9}{3} = 3$ cm per day.
:::

::: problem id=x14 type=numeric answer="-3/40" set=extra
A car has 50 L of fuel at 0 km and 20 L at 400 km. What is the slope of fuel against distance, in L per km?
solution: $\frac{20 - 50}{400 - 0} = \frac{-30}{400} = -\frac{3}{40}$. Negative: the fuel goes down.
:::

::: problem id=x15 type=point answer="1,1" set=extra
A line goes through $(-2, -1)$ with slope $\frac{2}{3}$. Click the point on it 3 steps to the right.
graph:
x -4..4
y -4..4
point -2,-1
solution: Run 3, rise 2: $(-2 + 3, -1 + 2) = (1, 1)$.
:::

::: problem id=x16 type=numeric answer="2" set=extra
The line through $(a, 2)$ and $(5, 8)$ has slope 2. What is a?
hint: Write the slope formula and solve for a.
solution: $\frac{8 - 2}{5 - a} = 2$, so $6 = 10 - 2a$ and $a = 2$.
:::

::: problem id=x17 type=text answers="yes" set=extra
Do $(0, 1)$, $(2, 5)$ and $(5, 11)$ lie on one straight line? Type yes or no.
hint: Compare the slope of the first pair with the slope of the second pair.
solution: $\frac{5 - 1}{2 - 0} = 2$ and $\frac{11 - 5}{5 - 2} = 2$. Same slope through a shared point: **yes**.
:::

::: problem id=x18 type=numeric answer="6" set=extra
A wheelchair ramp may have a slope of at most $\frac{1}{12}$. It must rise 0.5 m. What is the shortest horizontal length it can have, in m?
hint: $\frac{0.5}{\text{run}} \le \frac{1}{12}$.
solution: The run must be at least $0.5 \times 12 = 6$ m.
:::

::: problem id=x19 type=point answer="4,0" set=extra
A line goes through $(2, 3)$ with slope $-\frac{3}{2}$. Click where it crosses the x-axis.
graph:
x -2..6
y -3..5
point 2,3
hint: Slope $-\frac{3}{2}$: right 2, down 3.
solution: Right 2 and down 3 from $(2, 3)$ lands on $(4, 0)$, which is on the x-axis.
:::

::: problem id=x20 type=point answer="3,6" set=extra creative=true
Point P makes the slope from $(1, 2)$ to P equal to 2, and the slope from P to $(7, 2)$ equal to $-1$. Click P.
graph:
x -1..8
y -1..8
point 1,2
point 7,2
hint: From $(1, 2)$, step along slope 2 (right 1, up 2). From $(7, 2)$, step along slope $-1$ going left (left 1, up 1). Where do the two paths meet?
solution: Slope 2 from $(1, 2)$: $(2, 4)$, $(3, 6)$, $(4, 8)$. Slope $-1$ from $(7, 2)$, stepping left 1 and up 1: $(6, 3)$, $(5, 4)$, $(4, 5)$, $(3, 6)$. Both paths reach $(3, 6)$. Check: $\frac{6 - 2}{3 - 1} = 2$ and $\frac{2 - 6}{7 - 3} = -1$.
:::
