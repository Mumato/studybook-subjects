---
id: seq-01
title: Arithmetic sequences
---
::: rule
An **arithmetic sequence** adds the same **common difference** d each time: $3, 7, 11, 15, \ldots$ has $d = 4$.

- n-th term: $a_n = a_1 + (n - 1)d$
- sum of the first n terms: $S_n = \frac{n}{2}(a_1 + a_n)$
:::

::: example
$3, 7, 11, \ldots$: the 10th term is $3 + 9 \times 4 = 39$, and the first 10 terms add to $\frac{10}{2}(3 + 39) = 210$.
:::

::: graph
x 0..7
y 0..28
point 1,3
point 2,7
point 3,11
point 4,15
point 5,19
point 6,23
:::

::: problem id=p1 type=numeric answer="4"
What is the common difference of $3, 7, 11, 15, \ldots$?
solution: $7 - 3 = 4$.
:::

::: problem id=p2 type=numeric answer="39"
What is the 10th term of $3, 7, 11, \ldots$?
solution: $3 + 9 \times 4 = 39$.
:::

::: problem id=p3 type=numeric answer="-3"
What is the common difference of $20, 17, 14, \ldots$?
solution: $17 - 20 = -3$.
:::

::: problem id=p4 type=numeric answer="5"
What is the 6th term of $20, 17, 14, \ldots$?
solution: $20 + 5 \times (-3) = 5$.
:::

::: problem id=p5 type=numeric answer="5050"
Add up $1 + 2 + 3 + \cdots + 100$.
hint: Pair the first and last terms.
solution: $\frac{100}{2}(1 + 100) = 5050$.
:::

::: problem id=p6 type=expression answer="4n-1" vars="n"
Write the n-th term of $3, 7, 11, \ldots$ as an expression in n.
solution: $3 + (n - 1)4 = 4n - 1$.
:::

::: problem id=p7 type=numeric answer="210"
Add up the first 10 terms of $3, 7, 11, \ldots$
solution: $\frac{10}{2}(3 + 39) = 210$.
:::

::: problem id=p8 type=point answer="4,15"
The dots show $3, 7, 11, \ldots$ with the term number across. Click the dot for the 4th term.
graph:
x 0..7
y 0..28
point 1,3
point 2,7
point 3,11
point 5,19
point 6,23
solution: The 4th term is 15: $(4, 15)$. The dots lie on a straight line, as arithmetic sequences always do.
:::
