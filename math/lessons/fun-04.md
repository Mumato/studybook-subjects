---
id: fun-04
title: Inverse functions
---
::: rule
The **inverse** $f^{-1}$ undoes f: if $f(a) = b$ then $f^{-1}(b) = a$.

To find it: write $y = f(x)$, **swap** x and y, and solve for y.

The graph of $f^{-1}$ is the graph of f **reflected in the line** $y = x$: the point $(a, b)$ becomes $(b, a)$.
:::

::: example
$f(x) = 2x - 4$. Swap: $x = 2y - 4$. Solve: $y = \frac{x + 4}{2}$. So $f^{-1}(x) = \frac{x + 4}{2}$.
:::

::: graph
x -5..5
y -5..5
plot 2x-4 blue
plot (x+4)/2 red
plot x green
:::

::: problem id=p1 type=expression answer="x-5"
Find the inverse of $f(x) = x + 5$.
solution: $x = y + 5$, so $f^{-1}(x) = x - 5$.
:::

::: problem id=p2 type=expression answer="x/3"
Find the inverse of $f(x) = 3x$.
solution: $f^{-1}(x) = \frac{x}{3}$.
:::

::: problem id=p3 type=expression answer="(x+4)/2"
Find the inverse of $f(x) = 2x - 4$.
solution: $x = 2y - 4$, $y = \frac{x + 4}{2}$.
:::

::: problem id=p4 type=numeric answer="3"
$f(x) = 2x + 1$. What is $f^{-1}(7)$?
hint: Which input gives 7?
solution: $2x + 1 = 7$, $x = 3$.
:::

::: problem id=p5 type=expression answer="x^(1/3)"
Find the inverse of $f(x) = x^3$ (for $x \ge 0$). Type it as a power.
solution: $f^{-1}(x) = \sqrt[3]{x} = x^{\frac{1}{3}}$.
:::

::: problem id=p6 type=choice
The graph of $f^{-1}$ is the graph of f reflected in which line?
- [ ] the x-axis
- [ ] the y-axis
- [x] $y = x$
solution: Swapping x and y reflects in the line $y = x$.
:::

::: problem id=p7 type=numeric answer="7"
$f(x) = \frac{x - 1}{2}$. What is $f^{-1}(3)$?
solution: $\frac{x - 1}{2} = 3$, $x = 7$.
:::

::: problem id=p8 type=point answer="4,1"
The graph of f passes through $(1, 4)$. Click the point that the graph of $f^{-1}$ must pass through.
graph:
x -1..5
y -1..5
plot x green
point 1,4 A blue
solution: Swap the coordinates: $(4, 1)$.
:::
