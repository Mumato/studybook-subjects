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
