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

::: problem id=x1 type=point answer="-3,-1" set=extra
Click the vertex of $y = (x + 3)^2 - 1$.
graph:
x -6..2
y -2..5
plot (x+3)^2-1 blue
solution: $x + 3 = x - (-3)$: $h = -3$, $k = -1$. Vertex $(-3, -1)$.
:::

::: problem id=x2 type=point answer="-1,-4" set=extra
Click the vertex of $y = x^2 + 2x - 3$.
graph:
x -4..3
y -5..4
plot x^2+2x-3 blue
solution: $x = -\frac{2}{2} = -1$, $y = 1 - 2 - 3 = -4$. Vertex $(-1, -4)$.
:::

::: problem id=x3 type=numeric answer="3" set=extra
What is the axis of symmetry of $y = 2x^2 - 12x + 5$? Type the x value.
solution: $x = -\frac{-12}{2 \cdot 2} = 3$.
:::

::: problem id=x4 type=numeric answer="7" set=extra
What is the y-intercept of $y = 3x^2 - x + 7$? Type the y value.
solution: At $x = 0$: $y = 7$.
:::

::: problem id=x5 type=choice set=extra
Which parabola opens upward?
- [ ] $y = 5 - x^2$
- [ ] $y = -3x^2 + x$
- [x] $y = 0.5x^2 - 4$
- [ ] $y = -(x - 1)^2$
solution: Only $0.5x^2 - 4$ has a positive $x^2$ coefficient.
:::

::: problem id=x6 type=numeric answer="1" set=extra
What is the smallest value of $y = x^2 - 6x + 10$?
solution: Vertex at $x = 3$: $y = 9 - 18 + 10 = 1$.
:::

::: problem id=x7 type=point answer="2,3" set=extra
Click the vertex of $y = -x^2 + 4x - 1$.
graph:
x -1..5
y -3..5
plot -x^2+4x-1 blue
solution: $x = -\frac{4}{2(-1)} = 2$, $y = -4 + 8 - 1 = 3$. Vertex $(2, 3)$.
:::

::: problem id=x8 type=choice set=extra
What is the vertex of $y = -2(x - 5)^2 + 7$?
- [x] $(5, 7)$
- [ ] $(-5, 7)$
- [ ] $(5, -7)$
- [ ] $(7, 5)$
solution: Vertex form with $h = 5$, $k = 7$. The $-2$ only flips and stretches it.
:::

::: problem id=x9 type=numeric answer="21" set=extra
A ball's height is $h = -5t^2 + 20t + 1$ metres. What is its greatest height?
solution: Top at $t = -\frac{20}{2(-5)} = 2$: $h = -20 + 40 + 1 = 21$.
:::

::: problem id=x10 type=expression answer="(x-2)^2-3" set=extra
Write the parabola $y = (x - h)^2 + k$ with vertex $(2, -3)$, as $y = \ldots$
solution: $h = 2$, $k = -3$: $y = (x - 2)^2 - 3$.
:::

::: problem id=x11 type=numeric answer="2" set=extra
A parabola $y = a(x - 1)^2 + 4$ passes through $(0, 6)$. What is a?
hint: Put $x = 0$, $y = 6$ in.
solution: $6 = a(0 - 1)^2 + 4 = a + 4$, so $a = 2$.
:::

::: problem id=x12 type=point answer="4,0" set=extra
Click the x-intercept of $y = x^2 - 2x - 8$ on the right.
graph:
x -3..5
y -9..3
plot x^2-2x-8 blue
solution: $(x - 4)(x + 2) = 0$: $x = 4$ or $-2$. The right one is $(4, 0)$.
:::

::: problem id=x13 type=choice set=extra
Kim says the vertex of $y = (x + 4)^2 + 1$ is $(4, 1)$. What is it really?
- [x] $(-4, 1)$
- [ ] $(4, -1)$
- [ ] $(-4, -1)$
- [ ] $(1, 4)$
solution: $x + 4 = x - (-4)$, so $h = -4$. Vertex $(-4, 1)$.
:::

::: problem id=x14 type=numeric answer="4" set=extra
A parabola passes through $(1, 5)$ and $(7, 5)$. What is its axis of symmetry? Type the x value.
solution: Points at the same height sit symmetrically: halfway is $\frac{1 + 7}{2} = 4$.
:::

::: problem id=x15 type=numeric answer="100" set=extra
40 m of fence makes a rectangle with sides x and $20 - x$. What is the largest area, in m²?
solution: $A = x(20 - x) = -x^2 + 20x$. Vertex at $x = 10$: $A = 10 \times 10 = 100$.
:::

::: problem id=x16 type=numeric answer="-4" set=extra
$y = x^2 + bx + 3$ has axis of symmetry $x = 2$. What is b?
solution: $-\frac{b}{2} = 2$, so $b = -4$.
:::

::: problem id=x17 type=numeric answer="3" set=extra
A ball's height is $h = -5t^2 + 30t$. After how many seconds is it highest?
solution: $t = -\frac{30}{2(-5)} = 3$.
:::

::: problem id=x18 type=numeric answer="-4" set=extra
Write $y = x^2 + 6x + 5$ as $y = (x + 3)^2 + k$. What is k?
hint: Complete the square.
solution: $x^2 + 6x + 9 = (x + 3)^2$, so $y = (x + 3)^2 - 9 + 5 = (x + 3)^2 - 4$.
:::

::: problem id=x19 type=numeric answer="25" set=extra
A shop sells $100 - 2p$ items at price p. Revenue is $R = p(100 - 2p)$. Which price p gives the most revenue?
hint: $R = -2p^2 + 100p$ is a parabola opening down.
solution: Vertex at $p = -\frac{100}{2(-2)} = 25$.
:::

::: problem id=x20 type=numeric answer="-9" set=extra creative=true
A parabola has x-intercepts $-1$ and 5 and passes through $(0, -5)$. What is its lowest y value?
hint: Write it as $y = a(x + 1)(x - 5)$.
solution: At $x = 0$: $-5a = -5$, so $a = 1$. The vertex is halfway, at $x = 2$: $y = (3)(-3) = -9$.
:::
