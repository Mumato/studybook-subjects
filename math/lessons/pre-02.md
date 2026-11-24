---
id: pre-02
title: Dividing polynomials
---
::: rule
Divide polynomials like long division with numbers: divide the leading terms, multiply back, subtract, bring down, repeat.

**Remainder theorem:** dividing $p(x)$ by $(x - a)$ leaves remainder $p(a)$.

**Factor theorem:** $(x - a)$ is a factor exactly when $p(a) = 0$.
:::

::: example
$(x^2 + 5x + 6) \div (x + 2) = x + 3$, remainder 0, since $(x + 2)(x + 3) = x^2 + 5x + 6$.
:::

::: example
Remainder of $(x^3 - 2x + 4) \div (x - 2)$: $p(2) = 8 - 4 + 4 = 8$.
:::

::: problem id=p1 type=expression answer="x+3"
$(x^2 + 5x + 6) \div (x + 2) = ?$
solution: $x + 3$.
:::

::: problem id=p2 type=numeric answer="2"
What is the remainder of $(x^2 + 1) \div (x - 1)$?
solution: $p(1) = 1 + 1 = 2$.
:::

::: problem id=p3 type=numeric answer="8"
What is the remainder of $(x^3 - 2x + 4) \div (x - 2)$?
solution: $p(2) = 8$.
:::

::: problem id=p4 type=text answers="yes"
Is $(x - 1)$ a factor of $x^3 - 1$? Type yes or no.
solution: $1^3 - 1 = 0$: **yes**.
:::

::: problem id=p5 type=expression answer="x^2+2x+4"
$(x^3 - 8) \div (x - 2) = ?$
solution: $x^2 + 2x + 4$, because $(x - 2)(x^2 + 2x + 4) = x^3 - 8$.
:::

::: problem id=p6 type=numeric answer="-1"
For which k is $(x - 3)$ a factor of $x^2 + kx - 6$?
hint: Set $p(3) = 0$.
solution: $9 + 3k - 6 = 0$, $k = -1$.
:::

::: problem id=p7 type=expression answer="2x+1"
$(2x^2 + 7x + 3) \div (x + 3) = ?$
solution: $2x + 1$.
:::

::: problem id=p8 type=numeric answer="-2"
$p(x) = x^4 + x^3 - 2$. What is $p(-1)$?
solution: $1 - 1 - 2 = -2$.
:::
