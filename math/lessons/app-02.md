---
id: app-02
title: The second derivative and concavity
---
::: rule
The **second derivative** $f''$ is the derivative of $f'$.
- $f'' > 0$: **concave up**, shaped like a cup ∪
- $f'' < 0$: **concave down**, shaped like a cap ∩
- An **inflection point** is where the concavity changes.

**Second derivative test:** if $f'(c) = 0$ and $f''(c) > 0$, it's a minimum; if $f''(c) < 0$, a maximum.
:::

::: example
$f(x) = x^3$: $f'' = 6x$. It's negative for $x < 0$ and positive for $x > 0$, so $(0, 0)$ is an inflection point.
:::

::: graph
x -2..2
y -3..3
plot x^3 blue
point 0,0 inflection
:::

::: problem id=p1 type=expression answer="12x^2"
$f(x) = x^4$. What is $f''(x)$?
solution: $f' = 4x^3$, $f'' = 12x^2$.
:::

::: problem id=p2 type=numeric answer="1"
$f(x) = x^3 - 3x^2$. Where is its inflection point? Type the x value.
hint: $f''(x) = 6x - 6$.
solution: $6x - 6 = 0$, $x = 1$.
:::

::: problem id=p3 type=expression answer="-sin(x)"
$f(x) = \sin x$. What is $f''(x)$?
solution: $f' = \cos x$, $f'' = -\sin x$.
:::

::: problem id=p4 type=text answers="minimum;min;local minimum;local min"
$f(x) = x^2 - 8x$ has $f'(4) = 0$ and $f''(4) = 2$. Is $x = 4$ a maximum or a minimum?
solution: $f'' > 0$, a cup: **minimum**.
:::

::: problem id=p5 type=numeric answer="9"
$f(x) = -x^2 + 6x$. What is its maximum value?
hint: Find where $f'(x) = 0$ first.
solution: $-2x + 6 = 0$ at $x = 3$; $f(3) = -9 + 18 = 9$.
:::

::: problem id=p6 type=choice
Where $f'' > 0$, the graph is shaped like:
- [x] a cup ∪
- [ ] a cap ∩
- [ ] a straight line
solution: Concave up: a cup.
:::

::: problem id=p7 type=point answer="1,0"
Here is $y = x^3 - 3x^2 + 2$. Click its inflection point.
graph:
x -2..4
y -4..4
plot x^3-3x^2+2 blue
hint: $f''(x) = 6x - 6$.
solution: $x = 1$, $y = 1 - 3 + 2 = 0$: $(1, 0)$.
:::

::: problem id=p8 type=numeric answer="2"
$f(x) = x^3 - 6x^2$. Where is its inflection point? Type the x value.
solution: $f'' = 6x - 12 = 0$, $x = 2$.
:::
