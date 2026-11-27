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

::: problem id=x1 type=numeric answer="4" set=extra
$f(x) = x^2 - 3x$. What is $f(-1)$?
solution: $(-1)^2 - 3(-1) = 1 + 3 = 4$.
:::

::: problem id=x2 type=expression answer="5t+2" vars="t" set=extra
$f(x) = 5x + 2$. Write $f(t)$.
solution: Replace x with t: $5t + 2$.
:::

::: problem id=x3 type=numeric answer="13" set=extra
$f(x) = x + 4$ and $g(x) = x^2$. What is $f(g(3))$?
solution: $g(3) = 9$, $f(9) = 13$.
:::

::: problem id=x4 type=numeric answer="49" set=extra
$f(x) = x + 4$ and $g(x) = x^2$. What is $g(f(3))$?
solution: $f(3) = 7$, $g(7) = 49$.
:::

::: problem id=x5 type=expression answer="3(x-2)" set=extra
$f(x) = 3x$ and $g(x) = x - 2$. Write $f(g(x))$.
solution: $f(x - 2) = 3(x - 2) = 3x - 6$.
:::

::: problem id=x6 type=expression answer="3x-2" set=extra
$f(x) = 3x$ and $g(x) = x - 2$. Write $g(f(x))$.
solution: $g(3x) = 3x - 2$.
:::

::: problem id=x7 type=expression answer="(x-1)^2+1" set=extra
$f(x) = x^2 + 1$. Write $f(x - 1)$.
solution: $(x - 1)^2 + 1 = x^2 - 2x + 2$.
:::

::: problem id=x8 type=numeric answer="9" set=extra
$f(x) = 2x - 1$. What is $f(f(3))$?
solution: $f(3) = 5$, $f(5) = 9$.
:::

::: problem id=x9 type=expression answer="2x^2+3" set=extra
$f(x) = x^2$ and $g(x) = 2x + 3$. Write $g(f(x))$.
solution: $g(x^2) = 2x^2 + 3$.
:::

::: problem id=x10 type=choice set=extra
$f(x) = x^2$ and $g(x) = x + 1$. Bo says $f(g(2)) = g(f(2)) = 5$. What is $f(g(2))$?
- [x] 9
- [ ] 5
- [ ] 4
- [ ] 6
solution: $g(2) = 3$, then $f(3) = 9$. ($g(f(2)) = 5$ is the other order.)
:::

::: problem id=x11 type=expression answer="1/(x+2)" set=extra
$f(x) = \frac{1}{x}$ and $g(x) = x + 2$. Write $f(g(x))$.
solution: $f(x + 2) = \frac{1}{x + 2}$.
:::

::: problem id=x12 type=numeric answer="5" set=extra
$f(x) = \sqrt{x}$ and $g(x) = x^2 + 9$. What is $f(g(4))$?
solution: $g(4) = 25$, $f(25) = 5$.
:::

::: problem id=x13 type=expression answer="8a-3" vars="a" set=extra
$f(x) = 4x - 3$. Write $f(2a)$.
solution: $4(2a) - 3 = 8a - 3$.
:::

::: problem id=x14 type=numeric answer="8" set=extra
$f(x) = x^2$. What is $f(x + 2) - f(x)$ at $x = 1$?
solution: $f(3) - f(1) = 9 - 1 = 8$.
:::

::: problem id=x15 type=numeric answer="20" set=extra
An oven's temperature is $F(t) = 32 + 9t$ (°F) after t minutes. Celsius is $C(F) = \frac{5}{9}(F - 32)$. What is $C(F(4))$?
solution: $F(4) = 68$. $C(68) = \frac{5}{9} \cdot 36 = 20$.
:::

::: problem id=x16 type=choice set=extra
Which pair gives $f(g(x)) = (x + 5)^3$?
- [x] $f(x) = x^3$, $g(x) = x + 5$
- [ ] $f(x) = x + 5$, $g(x) = x^3$
- [ ] $f(x) = x^3$, $g(x) = x^3 + 5$
- [ ] $f(x) = 3x$, $g(x) = x + 5$
solution: g acts first (add 5), then f cubes: $f(x + 5) = (x + 5)^3$.
:::

::: problem id=x17 type=numeric answer="3" set=extra
$f(x) = 2x + 1$ and $g(x) = x^2$. Find the positive x with $f(g(x)) = 19$.
solution: $f(g(x)) = 2x^2 + 1 = 19$, $x^2 = 9$, $x = 3$.
:::

::: problem id=x18 type=numeric answer="3" set=extra
$f(x) = x + 3$ and $g(x) = x^2 - 1$. What is $(g \circ f)(-5)$?
solution: $f(-5) = -2$, $g(-2) = 4 - 1 = 3$.
:::

::: problem id=x19 type=numeric answer="-1" set=extra
$f(x) = x^2 + 2x$ and $g(x) = x - 1$. Then $f(g(x)) = x^2 + c$. What is c?
hint: Expand $(x - 1)^2 + 2(x - 1)$.
solution: $x^2 - 2x + 1 + 2x - 2 = x^2 - 1$. So $c = -1$.
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
$f(x) = ax + b$ with $a > 0$, and $f(f(x)) = 9x + 8$. What is b?
hint: $f(f(x)) = a(ax + b) + b$.
solution: $a^2 x + ab + b = 9x + 8$. So $a^2 = 9$, $a = 3$, and $3b + b = 8$, $b = 2$.
:::
