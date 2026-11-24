---
id: seq-03
title: Sigma notation
---
::: rule
$\sum$ (capital sigma) means "add up". 

$$\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$$

Put $k = 1, 2, \ldots, n$ into the formula and add the results. Useful facts:
- $\sum_{k=1}^{n} c = cn$
- $\sum_{k=1}^{n} k = \frac{n(n + 1)}{2}$
:::

::: example
$\sum_{k=1}^{4} 2k = 2 + 4 + 6 + 8 = 20$.
:::

::: problem id=p1 type=numeric answer="20"
$\sum_{k=1}^{4} 2k = ?$
solution: $2 + 4 + 6 + 8 = 20$.
:::

::: problem id=p2 type=numeric answer="14"
$\sum_{k=1}^{3} k^2 = ?$
solution: $1 + 4 + 9 = 14$.
:::

::: problem id=p3 type=numeric answer="35"
$\sum_{k=1}^{5} 7 = ?$
solution: Five 7s: 35.
:::

::: problem id=p4 type=numeric answer="55"
$\sum_{k=1}^{10} k = ?$
solution: $\frac{10 \cdot 11}{2} = 55$.
:::

::: problem id=p5 type=numeric answer="15"
$\sum_{k=0}^{3} 2^k = ?$
hint: The first term is $k = 0$.
solution: $1 + 2 + 4 + 8 = 15$.
:::

::: problem id=p6 type=numeric answer="15"
$\sum_{k=2}^{4} (2k - 1) = ?$
solution: $k = 2, 3, 4$ give $3, 5, 7$, which add to **15**.
:::

::: problem id=p7 type=numeric answer="6"
How many terms are in $\sum_{k=5}^{10} k^2$?
solution: $k = 5, 6, 7, 8, 9, 10$: 6 terms.
:::

::: problem id=p8 type=numeric answer="13/12"
$\sum_{k=2}^{4} \frac{1}{k} = ?$ (as a fraction)
solution: $\frac{1}{2} + \frac{1}{3} + \frac{1}{4} = \frac{6 + 4 + 3}{12} = \frac{13}{12}$.
:::
