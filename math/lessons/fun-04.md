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

::: problem id=x1 type=expression answer="x+7" set=extra
Find the inverse of $f(x) = x - 7$.
solution: $x = y - 7$, so $f^{-1}(x) = x + 7$.
:::

::: problem id=x2 type=expression answer="x/5" set=extra
Find the inverse of $f(x) = 5x$.
solution: $x = 5y$, so $f^{-1}(x) = \frac{x}{5}$.
:::

::: problem id=x3 type=expression answer="(x-6)/3" set=extra
Find the inverse of $f(x) = 3x + 6$.
solution: $x = 3y + 6$, $y = \frac{x - 6}{3}$.
:::

::: problem id=x4 type=numeric answer="3" set=extra
$f(x) = 4x - 3$. What is $f^{-1}(9)$?
solution: $4x - 3 = 9$, $x = 3$.
:::

::: problem id=x5 type=expression answer="2(x-1)" set=extra
Find the inverse of $f(x) = \frac{x}{2} + 1$.
solution: $x = \frac{y}{2} + 1$, $y = 2(x - 1)$.
:::

::: problem id=x6 type=expression answer="5x-2" set=extra
Find the inverse of $f(x) = \frac{x + 2}{5}$.
solution: $x = \frac{y + 2}{5}$, $5x = y + 2$, $y = 5x - 2$.
:::

::: problem id=x7 type=numeric answer="17" set=extra
f has an inverse. What is $f^{-1}(f(17))$?
solution: $f^{-1}$ undoes f, so you get back **17**.
:::

::: problem id=x8 type=point answer="3,-2" set=extra
The graph of f passes through $(-2, 3)$. Click the point the graph of $f^{-1}$ must pass through.
graph:
x -4..4
y -4..4
plot x green
point -2,3 A blue
solution: Swap the coordinates: $(3, -2)$.
:::

::: problem id=x9 type=choice set=extra
What is the inverse of $f(x) = x^3 + 1$?
- [x] $\sqrt[3]{x - 1}$
- [ ] $\sqrt[3]{x} - 1$
- [ ] $\sqrt[3]{x + 1}$
- [ ] $\frac{1}{x^3 + 1}$
solution: $x = y^3 + 1$, $y^3 = x - 1$, $y = \sqrt[3]{x - 1}$.
:::

::: problem id=x10 type=choice set=extra
Which function has **no** inverse on all real numbers?
- [x] $f(x) = x^2$
- [ ] $f(x) = 2x + 1$
- [ ] $f(x) = x^3$
- [ ] $f(x) = x - 4$
solution: $f(2) = f(-2) = 4$, so "undo 4" would need two answers. The others never repeat an output.
:::

::: problem id=x11 type=choice set=extra
Dev says the inverse of $f(x) = 2x + 3$ is $\frac{x}{2} - 3$. What is right?
- [x] $\frac{x - 3}{2}$
- [ ] $\frac{x}{2} - 3$
- [ ] $2x - 3$
- [ ] $\frac{1}{2x + 3}$
solution: Undo in reverse order: subtract 3 first, then divide by 2. Check: $f(1) = 5$ and $\frac{5 - 3}{2} = 1$.
:::

::: problem id=x12 type=numeric answer="7" set=extra
$f(x) = x^2$ for $x \ge 0$. What is $f^{-1}(49)$?
solution: The x with $x^2 = 49$ and $x \ge 0$: **7**.
:::

::: problem id=x13 type=expression answer="1/x" set=extra
Find the inverse of $f(x) = \frac{1}{x}$.
solution: $x = \frac{1}{y}$, $y = \frac{1}{x}$. It is its own inverse.
:::

::: problem id=x14 type=expression answer="6-x" set=extra
Find the inverse of $f(x) = 6 - x$.
solution: $x = 6 - y$, $y = 6 - x$. Also its own inverse.
:::

::: problem id=x15 type=numeric answer="100" set=extra
$F = \frac{9}{5}C + 32$ turns °C into °F. Use the inverse: what is C when $F = 212$?
solution: $C = \frac{5}{9}(F - 32) = \frac{5}{9} \cdot 180 = 100$.
:::

::: problem id=x16 type=numeric answer="3" set=extra
$f(x) = 3x - 2$. What is $f^{-1}(1) + f^{-1}(4)$?
solution: $f^{-1}(x) = \frac{x + 2}{3}$: $1 + 2 = 3$.
:::

::: problem id=x17 type=expression answer="(3x+1)/(x-2)" set=extra
Find the inverse of $f(x) = \frac{2x + 1}{x - 3}$.
hint: After swapping, multiply out and collect the y terms on one side.
solution: $x(y - 3) = 2y + 1$, $xy - 2y = 3x + 1$, $y(x - 2) = 3x + 1$, $y = \frac{3x + 1}{x - 2}$.
:::

::: problem id=x18 type=expression answer="x^2+1" set=extra
Find the inverse of $f(x) = \sqrt{x - 1}$ (for $x \ge 1$; the inverse is for $x \ge 0$).
hint: Square both sides after swapping.
solution: $x = \sqrt{y - 1}$, $x^2 = y - 1$, $y = x^2 + 1$.
:::

::: problem id=x19 type=numeric answer="3" set=extra
$f(x) = ax + 5$ and $f^{-1}(11) = 2$. What is a?
hint: $f^{-1}(11) = 2$ means $f(2) = 11$.
solution: $2a + 5 = 11$, $a = 3$.
:::

::: problem id=x20 type=numeric answer="-1" set=extra creative=true
For which a is $f(x) = \frac{x + 4}{2x + a}$ its own inverse?
hint: Find $f^{-1}$ by swapping and solving, then compare.
solution: $x(2y + a) = y + 4$ gives $f^{-1}(x) = \frac{4 - ax}{2x - 1}$. With $a = -1$ this is $\frac{x + 4}{2x - 1} = f(x)$. So $a = -1$.
:::
