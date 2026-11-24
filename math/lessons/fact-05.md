---
id: fact-05
title: Solving equations by factoring
---
::: rule
**Zero product rule:** if $a \times b = 0$, then $a = 0$ or $b = 0$.

To solve a quadratic equation:
1. Move everything to one side so the other side is 0.
2. Factor.
3. Set each factor equal to 0 and solve.

The solutions are where the graph crosses the x-axis.
:::

::: example
$x^2 - 5x + 6 = 0$ becomes $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.
:::

::: graph
x -1..5
y -2..4
plot x^2-5x+6 blue
point 2,0
point 3,0
:::

::: problem id=p1 type=multi answers="3;-4"
Solve $(x - 3)(x + 4) = 0$. Type both, like 1, -2.
solution: $x - 3 = 0$ or $x + 4 = 0$: $x = 3$ or $x = -4$.
:::

::: problem id=p2 type=multi answers="-2;-3"
Solve $x^2 + 5x + 6 = 0$.
solution: $(x + 2)(x + 3) = 0$: $x = -2$ or $x = -3$.
:::

::: problem id=p3 type=multi answers="4;-4"
Solve $x^2 - 16 = 0$.
solution: $(x + 4)(x - 4) = 0$: $x = 4$ or $x = -4$.
:::

::: problem id=p4 type=multi answers="0;7"
Solve $x^2 = 7x$.
hint: Don't divide by x, you'd lose a solution. Move 7x over.
solution: $x^2 - 7x = 0$, $x(x - 7) = 0$: $x = 0$ or $x = 7$.
:::

::: problem id=p5 type=multi answers="0;4"
Solve $2x^2 - 8x = 0$.
solution: $2x(x - 4) = 0$: $x = 0$ or $x = 4$.
:::

::: problem id=p6 type=numeric answer="3"
Solve $x^2 - 6x + 9 = 0$.
solution: $(x - 3)^2 = 0$, so $x = 3$ (the only solution).
:::

::: problem id=p7 type=numeric answer="4"
A rectangle's area is 24 and its length is 2 more than its width. What is the width?
hint: $w(w + 2) = 24$.
solution: $w^2 + 2w - 24 = 0$, $(w + 6)(w - 4) = 0$. A width can't be negative, so $w = 4$.
:::

::: problem id=p8 type=point answer="3,0"
Here is $y = x^2 - 2x - 3$. Click where it crosses the x-axis on the right.
graph:
x -3..5
y -5..5
plot x^2-2x-3 blue
hint: Solve $x^2 - 2x - 3 = 0$.
solution: $(x - 3)(x + 1) = 0$: it crosses at $x = -1$ and $x = 3$. On the right: $(3, 0)$.
:::

::: problem id=c1 type=numeric answer="4" creative=true
A positive number is 12 less than its own square. What is it?
hint: $x^2 - 12 = x$.
solution: $x^2 - x - 12 = 0$, $(x - 4)(x + 3) = 0$. Positive: **4**. Check: $16 - 12 = 4$.
:::
