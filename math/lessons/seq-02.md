---
id: seq-02
title: Geometric sequences
---
::: rule
A **geometric sequence** multiplies by the same **common ratio** r each time: $2, 6, 18, 54, \ldots$ has $r = 3$.

- n-th term: $a_n = a_1 r^{n - 1}$
- sum of the first n terms: $S_n = a_1\frac{1 - r^n}{1 - r}$ (for $r \ne 1$)
:::

::: example
$2, 6, 18, \ldots$: the 5th term is $2 \times 3^4 = 162$. The first 4 terms add to $2 \cdot \frac{1 - 81}{1 - 3} = 80$ (check: $2 + 6 + 18 + 54 = 80$).
:::

::: problem id=p1 type=numeric answer="3"
What is the common ratio of $2, 6, 18, \ldots$?
solution: $6 \div 2 = 3$.
:::

::: problem id=p2 type=numeric answer="162"
What is the 5th term of $2, 6, 18, \ldots$?
solution: $2 \times 3^4 = 162$.
:::

::: problem id=p3 type=numeric answer="1/2"
What is the common ratio of $64, 32, 16, \ldots$?
solution: $\frac{32}{64} = \frac{1}{2}$.
:::

::: problem id=p4 type=numeric answer="-2"
What is the common ratio of $1, -2, 4, -8, \ldots$?
solution: $-2 \div 1 = -2$.
:::

::: problem id=p5 type=numeric answer="80"
Add up the first 4 terms of $2, 6, 18, \ldots$
solution: $2 + 6 + 18 + 54 = 80$.
:::

::: problem id=p6 type=numeric answer="1023"
Add up $1 + 2 + 4 + \cdots + 512$ (10 terms).
hint: Use $S_n$ with $a_1 = 1$, $r = 2$, $n = 10$.
solution: $\frac{1 - 2^{10}}{1 - 2} = 1023$.
:::

::: problem id=p7 type=choice
Which sequence is geometric?
- [ ] $1, 4, 7, 10$
- [x] $5, 10, 20, 40$
- [ ] $1, 4, 9, 16$
solution: Each term is double the last.
:::

::: problem id=p8 type=numeric answer="5"
$3, 12, 48, \ldots$ Which term is 768?
solution: $3 \cdot 4^{n - 1} = 768$, so $4^{n - 1} = 256 = 4^4$. Then $n - 1 = 4$ and $n = 5$.
:::
