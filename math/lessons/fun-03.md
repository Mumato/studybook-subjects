---
id: fun-03
title: Function notation and composition
---
::: rule
$f(\text{something})$ means: put **something** in place of every x.

**Composition** $f(g(x))$, also written $(f \circ g)(x)$, means: do g first, then put the result into f. Order matters: $f(g(x))$ is usually different from $g(f(x))$.
:::

::: example
$f(x) = 2x$ and $g(x) = x + 3$. $f(g(1)) = f(4) = 8$, but $g(f(1)) = g(2) = 5$.
:::

::: example
$f(x) = x^2$ and $g(x) = x + 1$: $f(g(x)) = (x + 1)^2$.
:::

::: problem id=p1 type=numeric answer="5"
$f(x) = x^2 + 1$. What is $f(-2)$?
solution: $(-2)^2 + 1 = 5$.
:::

::: problem id=p2 type=expression answer="3a-1" vars="a"
$f(x) = 3x - 1$. Write $f(a)$.
solution: Replace x with a: $3a - 1$.
:::

::: problem id=p3 type=numeric answer="8"
$f(x) = 2x$ and $g(x) = x + 3$. What is $f(g(1))$?
solution: $g(1) = 4$, $f(4) = 8$.
:::

::: problem id=p4 type=numeric answer="5"
Same functions: what is $g(f(1))$?
solution: $f(1) = 2$, $g(2) = 5$.
:::

::: problem id=p5 type=expression answer="(x+1)^2"
$f(x) = x^2$ and $g(x) = x + 1$. Write $f(g(x))$.
solution: $(x + 1)^2$.
:::

::: problem id=p6 type=expression answer="2x+9"
$f(x) = 2x + 5$. Write $f(x + 2)$.
solution: $2(x + 2) + 5 = 2x + 9$.
:::

::: problem id=p7 type=numeric answer="2"
$f(x) = 5 - x$. What is $f(f(2))$?
solution: $f(2) = 3$, $f(3) = 2$.
:::

::: problem id=p8 type=numeric answer="25"
$f(x) = x^2$ and $g(x) = 2x - 1$. What is $(f \circ g)(3)$?
solution: $g(3) = 5$, $f(5) = 25$.
:::

::: problem id=c1 type=numeric answer="5/2" creative=true
$f(x) = 2x + 3$. Solve $f(f(x)) = 19$.
hint: Write $f(f(x))$ as one expression first.
solution: $f(f(x)) = 2(2x + 3) + 3 = 4x + 9$. $4x + 9 = 19$ gives $x = \frac{5}{2}$.
:::
