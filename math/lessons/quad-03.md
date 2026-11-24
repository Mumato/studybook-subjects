---
id: quad-03
title: Graphs of parabolas
---
::: rule
The graph of a quadratic is a **parabola**.

- **Vertex form** $y = a(x - h)^2 + k$ has its **vertex** (turning point) at $(h, k)$.
- For $y = ax^2 + bx + c$, the vertex is at $x = -\frac{b}{2a}$ (the **axis of symmetry**); put that x in to find y.
- $a > 0$: opens up (vertex is a minimum). $a < 0$: opens down (a maximum).
- The y-intercept is $(0, c)$.
:::

::: example
$y = x^2 - 4x + 3$: vertex at $x = \frac{4}{2} = 2$, and $y = 4 - 8 + 3 = -1$. Vertex $(2, -1)$, opening up.
:::

::: graph
x -1..5
y -2..4
plot x^2-4x+3 blue
point 2,-1 vertex
:::

::: problem id=p1 type=point answer="2,1"
Click the vertex of $y = (x - 2)^2 + 1$.
graph:
x -3..5
y -2..6
plot (x-2)^2+1 blue
solution: Vertex form with $h = 2$, $k = 1$: $(2, 1)$.
:::

::: problem id=p2 type=point answer="2,-1"
Click the vertex of $y = x^2 - 4x + 3$.
graph:
x -2..5
y -3..5
plot x^2-4x+3 blue
hint: $x = -\frac{b}{2a}$.
solution: $x = 2$, $y = -1$.
:::

::: problem id=p3 type=choice
Which parabola opens downward?
- [ ] $y = 2x^2 - 3$
- [x] $y = -2x^2 + 3$
- [ ] $y = x^2 + 2x$
solution: The one with a negative $x^2$ coefficient.
:::

::: problem id=p4 type=numeric answer="-3"
What is the axis of symmetry of $y = x^2 + 6x$? Type the x value.
solution: $x = -\frac{6}{2} = -3$.
:::

::: problem id=p5 type=point answer="-1,4"
Click the vertex of $y = -(x + 1)^2 + 4$.
graph:
x -5..3
y -3..5
plot -(x+1)^2+4 blue
hint: $x + 1 = x - (-1)$.
solution: $h = -1$, $k = 4$: $(-1, 4)$.
:::

::: problem id=p6 type=point answer="0,-3"
Click the y-intercept of $y = x^2 - 2x - 3$.
graph:
x -3..5
y -5..5
plot x^2-2x-3 blue
solution: $x = 0$ gives $y = -3$: $(0, -3)$.
:::

::: problem id=p7 type=numeric answer="4"
What is the highest point (largest y) of $y = -x^2 + 4x$?
solution: Vertex at $x = 2$: $y = -4 + 8 = 4$.
:::

::: problem id=p8 type=point answer="3,-2"
Click the lowest point of $y = (x - 3)^2 - 2$.
graph:
x -1..6
y -3..5
plot (x-3)^2-2 blue
solution: The vertex $(3, -2)$.
:::
