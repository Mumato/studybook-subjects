---
id: sys-01
title: Solving systems by graphing
---
::: rule
A **system** is two equations that must both be true. Its solution is the point $(x, y)$ on **both** lines: where they cross.

- lines cross once: one solution
- parallel lines: no solution
- the same line twice: infinitely many solutions
:::

::: example
$y = x + 1$ and $y = -2x + 4$ cross at $(1, 2)$. Check: $2 = 1 + 1$ and $2 = -2 + 4$.
:::

::: graph
x -3..4
y -3..6
plot x+1 blue
plot -2x+4 red
point 1,2
:::

::: problem id=p1 type=point answer="2,3"
Click the solution of $y = 2x - 1$ and $y = -x + 5$.
graph:
x -2..5
y -2..6
plot 2x-1 blue
plot -x+5 red
solution: They cross at $(2, 3)$. Check: $3 = 4 - 1$ and $3 = -2 + 5$.
:::

::: problem id=p2 type=point answer="2,2"
Click the solution of $y = x$ and $y = -x + 4$.
graph:
x -1..5
y -1..5
plot x blue
plot -x+4 red
solution: $(2, 2)$.
:::

::: problem id=p3 type=point answer="-1,-2"
Click the solution of $y = -2$ and $y = x - 1$.
graph:
x -4..4
y -4..4
plot -2 blue
plot x-1 red
hint: $y = -2$ is a flat line.
solution: $x - 1 = -2$ gives $x = -1$: the point $(-1, -2)$.
:::

::: problem id=p4 type=choice
How many solutions does $y = 2x + 1$, $y = 2x - 3$ have?
- [ ] one
- [x] none
- [ ] infinitely many
solution: Same slope, different intercepts: parallel lines, **no** solution.
:::

::: problem id=p5 type=choice
How many solutions does $y = x + 3$, $2y = 2x + 6$ have?
- [ ] one
- [ ] none
- [x] infinitely many
hint: Divide the second equation by 2.
solution: The second is the same line, $y = x + 3$, so **infinitely many**.
:::

::: problem id=p6 type=point answer="2,1"
Click the solution of $y = 0.5x$ and $y = -x + 3$.
graph:
x -1..5
y -2..4
plot 0.5x blue
plot -x+3 red
solution: $0.5x = -x + 3$, $1.5x = 3$, $x = 2$, $y = 1$.
:::

::: problem id=p7 type=text answers="yes"
Is $(1, 3)$ a solution of $y = 2x + 1$ and $y = x + 2$? Type yes or no.
hint: Check it in both equations.
solution: $2(1) + 1 = 3$ and $1 + 2 = 3$: both true, so **yes**.
:::

::: problem id=p8 type=numeric answer="1"
How many solutions does $y = x + 2$, $y = -x + 2$ have?
solution: Different slopes, so the lines cross exactly once: **1**.
:::

::: problem id=x1 type=point answer="2,0" set=extra
Click the solution of $y = x - 2$ and $y = -2x + 4$.
graph:
x -2..5
y -3..5
plot x-2 blue
plot -2x+4 red
solution: They cross at $(2, 0)$. Check: $0 = 2 - 2$ and $0 = -4 + 4$.
:::

::: problem id=x2 type=point answer="2,3" set=extra
Click the solution of $y = 3x - 3$ and $y = x + 1$.
graph:
x -2..5
y -4..6
plot 3x-3 blue
plot x+1 red
solution: $(2, 3)$. Check: $3 = 6 - 3$ and $3 = 2 + 1$.
:::

::: problem id=x3 type=point answer="-2,1" set=extra
Click the solution of $y = -x - 1$ and $y = x + 3$.
graph:
x -5..3
y -3..5
plot -x-1 blue
plot x+3 red
solution: $(-2, 1)$. Check: $1 = 2 - 1$ and $1 = -2 + 3$.
:::

::: problem id=x4 type=point answer="3,-2" set=extra
Click the solution of $x = 3$ and $y = -x + 1$.
graph:
x -2..5
y -4..4
segment 3,-4 3,4 blue
plot -x+1 red
hint: $x = 3$ is the vertical line.
solution: Put $x = 3$ in the second: $y = -3 + 1 = -2$. The point $(3, -2)$.
:::

::: problem id=x5 type=choice set=extra
How many solutions does $y = -2x + 5$, $4x + 2y = 10$ have?
- [ ] one
- [ ] none
- [x] infinitely many
hint: Solve the second for y.
solution: $2y = -4x + 10$, so $y = -2x + 5$: the same line. **Infinitely many**.
:::

::: problem id=x6 type=choice set=extra
How many solutions does $y = \frac{x}{2} + 1$, $y = \frac{x}{2} - 2$ have?
- [ ] one
- [x] none
- [ ] infinitely many
solution: Same slope, different intercepts: parallel, **none**.
:::

::: problem id=x7 type=numeric answer="1" set=extra
How many solutions does $y = 3x$, $y = -x$ have?
solution: Different slopes: the lines cross once (at the origin). **1**.
:::

::: problem id=x8 type=text answers="yes" set=extra
Is $(2, -1)$ a solution of $y = x - 3$ and $y = -2x + 3$? Type yes or no.
solution: $2 - 3 = -1$ and $-4 + 3 = -1$: both true, **yes**.
:::

::: problem id=x9 type=text answers="no" set=extra
Is $(1, 4)$ a solution of $y = 2x + 2$ and $y = 3x$? Type yes or no.
solution: $2 + 2 = 4$ is true, but $3(1) = 3 \ne 4$. It must fit **both**: **no**.
:::

::: problem id=x10 type=choice set=extra
Two lines have different slopes. How many solutions does the system have?
- [x] exactly one
- [ ] none
- [ ] infinitely many
solution: Lines with different slopes always cross, and only once.
:::

::: problem id=x11 type=point answer="-4,2" set=extra
Click the solution of $y = 2$ and $y = -\frac{x}{2}$.
graph:
x -6..2
y -2..4
plot 2 blue
plot -x/2 red
solution: $2 = -\frac{x}{2}$ gives $x = -4$: the point $(-4, 2)$.
:::

::: problem id=x12 type=point answer="2,3" set=extra
Kai says $(1, 2)$ solves $y = x + 1$ and $y = 2x - 1$. Check him, then click the real solution.
graph:
x -2..5
y -3..6
plot x+1 blue
plot 2x-1 red
solution: $(1, 2)$ fails the second: $2(1) - 1 = 1$. The lines cross at $(2, 3)$: $3 = 2 + 1$ and $3 = 4 - 1$.
:::

::: problem id=x13 type=numeric answer="5" set=extra
Plan A costs $y = 10 + 2x$ dollars for x GB, plan B costs $y = 4x$. For how many GB do they cost the same?
solution: The lines cross where $10 + 2x = 4x$: $10 = 2x$, $x = 5$ GB (both cost 20).
:::

::: problem id=x14 type=choice set=extra
Which system has **no** solution?
- [x] $y = 2x + 1$ and $y = 2x + 4$
- [ ] $y = 2x + 1$ and $y = -2x + 1$
- [ ] $y = 2x + 1$ and $2y = 4x + 2$
solution: The first pair is parallel (same slope, different intercepts). The second crosses once; the third is one line twice.
:::

::: problem id=x15 type=numeric answer="-2" set=extra
For which b does $y = 3x + b$, $y = 3x - 2$ have infinitely many solutions?
solution: They must be the same line, so $b = -2$.
:::

::: problem id=x16 type=point answer="3,1" set=extra
Click the solution of $x + y = 4$ and $x - y = 2$.
graph:
x -1..5
y -3..5
plot -x+4 blue
plot x-2 red
hint: Rewrite both as $y = \ldots$ to see which line is which.
solution: $y = -x + 4$ and $y = x - 2$ cross at $(3, 1)$. Check: $3 + 1 = 4$, $3 - 1 = 2$.
:::

::: problem id=x17 type=point answer="-1,3" set=extra
Click the solution of $2x + y = 1$ and $y = x + 4$.
graph:
x -4..3
y -2..6
plot 1-2x blue
plot x+4 red
hint: $2x + y = 1$ is $y = -2x + 1$.
solution: $-2x + 1 = x + 4$ gives $x = -1$, $y = 3$. Check: $-2 + 3 = 1$.
:::

::: problem id=x18 type=numeric answer="-2" set=extra
The lines $y = 2x + 1$ and $y = mx + 5$ cross where $x = 1$. What is m?
hint: Find the crossing point from the first line.
solution: At $x = 1$ the first line has $y = 3$. So $3 = m + 5$, $m = -2$.
:::

::: problem id=x19 type=choice set=extra
How many solutions does $y = kx + 2$, $y = 3x + 2$ have when $k = 3$?
- [ ] one
- [ ] none
- [x] infinitely many
hint: Put $k = 3$ in and compare the two equations.
solution: Both become $y = 3x + 2$: the same line, **infinitely many**. (Any other k gives one solution, at $(0, 2)$.)
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
The lines $y = x + 1$, $y = -x + 5$ and $y = mx - 1$ all pass through one point. What is m?
hint: Find where the first two cross.
solution: $x + 1 = -x + 5$ gives $(2, 3)$. Then $3 = 2m - 1$, so $m = 2$.
:::
