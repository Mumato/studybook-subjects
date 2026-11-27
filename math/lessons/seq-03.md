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

::: problem id=x1 type=numeric answer="45" set=extra
$\sum_{k=1}^{5} 3k = ?$
solution: $3 + 6 + 9 + 12 + 15 = 45$.
:::

::: problem id=x2 type=numeric answer="18" set=extra
$\sum_{k=1}^{4} (k + 2) = ?$
solution: $3 + 4 + 5 + 6 = 18$.
:::

::: problem id=x3 type=numeric answer="24" set=extra
$\sum_{k=1}^{6} 4 = ?$
solution: Six 4s: 24.
:::

::: problem id=x4 type=numeric answer="210" set=extra
$\sum_{k=1}^{20} k = ?$
solution: $\frac{20 \cdot 21}{2} = 210$.
:::

::: problem id=x5 type=numeric answer="100" set=extra
$\sum_{k=1}^{4} k^3 = ?$
solution: $1 + 8 + 27 + 64 = 100$.
:::

::: problem id=x6 type=numeric answer="121" set=extra
$\sum_{k=0}^{4} 3^k = ?$
solution: $1 + 3 + 9 + 27 + 81 = 121$.
:::

::: problem id=x7 type=numeric answer="25" set=extra
$\sum_{k=3}^{7} k = ?$
solution: $3 + 4 + 5 + 6 + 7 = 25$.
:::

::: problem id=x8 type=numeric answer="13" set=extra
How many terms are in $\sum_{k=0}^{12} (k + 1)^2$?
solution: $k = 0, 1, \ldots, 12$: 13 terms.
:::

::: problem id=x9 type=choice set=extra
Which sum means $2 + 4 + 6 + \cdots + 20$?
- [x] $\sum_{k=1}^{10} 2k$
- [ ] $\sum_{k=2}^{20} k$
- [ ] $\sum_{k=1}^{20} 2k$
- [ ] $\sum_{k=1}^{10} k^2$
solution: $2k$ for $k = 1$ to 10 gives $2, 4, \ldots, 20$.
:::

::: problem id=x10 type=choice set=extra
Which sum means $1 + 4 + 9 + 16 + 25$?
- [x] $\sum_{k=1}^{5} k^2$
- [ ] $\sum_{k=1}^{25} k$
- [ ] $\sum_{k=1}^{5} 2k$
- [ ] $\sum_{k=1}^{5} 2^k$
solution: They are the squares $1^2$ to $5^2$.
:::

::: problem id=x11 type=numeric answer="10100" set=extra
$\sum_{k=1}^{100} 2k = ?$
solution: $2 \times \frac{100 \cdot 101}{2} = 10100$.
:::

::: problem id=x12 type=numeric answer="-3" set=extra
$\sum_{k=1}^{5} (-1)^k k = ?$
solution: $-1 + 2 - 3 + 4 - 5 = -3$.
:::

::: problem id=x13 type=numeric answer="3/4" set=extra
$\sum_{k=1}^{3} \frac{1}{k(k + 1)} = ?$
solution: $\frac{1}{2} + \frac{1}{6} + \frac{1}{12} = \frac{6 + 2 + 1}{12} = \frac{3}{4}$.
:::

::: problem id=x14 type=numeric answer="20" set=extra
$\sum_{k=1}^{n} 3 = 60$. What is n?
solution: $3n = 60$, so $n = 20$.
:::

::: problem id=x15 type=numeric answer="14" set=extra
Sam writes $\sum_{k=1}^{4} (k + 1) = 1 + 2 + 3 + 4 + 1 = 11$. What is it really?
solution: The $+1$ goes with every term: $2 + 3 + 4 + 5 = 14$.
:::

::: problem id=x16 type=numeric answer="120" set=extra
$\sum_{k=1}^{10} (2k + 1) = ?$
hint: Split it: $2\sum k + \sum 1$.
solution: $2 \times 55 + 10 = 120$.
:::

::: problem id=x17 type=numeric answer="155" set=extra
$\sum_{k=11}^{20} k = ?$
hint: Take the sum to 20 and subtract the sum to 10.
solution: $210 - 55 = 155$.
:::

::: problem id=x18 type=numeric answer="315" set=extra
$\sum_{k=1}^{6} 5 \cdot 2^{k - 1} = ?$
hint: It is a geometric series.
solution: $a_1 = 5$, $r = 2$, 6 terms: $5(2^6 - 1) = 315$.
:::

::: problem id=x19 type=numeric answer="4950" set=extra
$\sum_{k=1}^{50} (4k - 3) = ?$
hint: Split into $4\sum k - \sum 3$.
solution: $4 \times \frac{50 \cdot 51}{2} - 3 \times 50$
$= 5100 - 150 = 4950$.
:::

::: problem id=x20 type=numeric answer="20" set=extra creative=true
For which n is $\sum_{k=1}^{n} k = 210$?
hint: $\frac{n(n + 1)}{2} = 210$.
solution: $n(n + 1) = 420 = 20 \times 21$, so $n = 20$.
:::
