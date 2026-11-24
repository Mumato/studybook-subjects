---
id: finb-test
title: Final practice exam B
pass: 0.7
---
::: problem id=t1 type=numeric answer="5"
Solve $x + 2y + z = 4$, $y - z = 1$, $2x + y + 3z = 7$. What is $x$?
solution: Row reduction gives $x = 5$, $y = 0$, $z = -1$. Check: $5 + 0 - 1 = 4$ ✓, $0 + 1 = 1$ ✓, $10 + 0 - 3 = 7$ ✓.
:::

::: problem id=t2 type=numeric answer="-1"
Find the second component of $(1, 0, 2) \times (0, 3, 1)$.
solution: $2(0) - 1(1) = -1$.
:::

::: problem id=t3 type=numeric answer="0.4"
Find the entry (2, 2) of the inverse of $\begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}$.
solution: $ad - bc = 10$. Entry (2, 2) is $a/10 = 0.4$.
:::

::: problem id=t4 type=numeric answer="3"
For which $k$ are $(1, k)$ and $(2, 6)$ dependent?
solution: $6 - 2k = 0$, so $k = 3$.
:::

::: problem id=t5 type=numeric answer="9"
$A\vec{v} = 3\vec{v}$. What is the eigenvalue of $A^2$ for the same $\vec{v}$?
solution: $A^2\vec{v} = A(3\vec{v}) = 3A\vec{v} = 9\vec{v}$.
:::

::: problem id=t6 type=numeric answer="3"
A $3 \times 5$ matrix has rank 2. What is the dimension of its null space?
solution: $5 - 2 = 3$.
:::

::: problem id=t7 type=numeric answer="2"
What is the distance from the origin to the plane $x + 2y + 2z = 6$?
solution: $\frac{|0 - 6|}{\sqrt{1 + 4 + 4}} = \frac{6}{3} = 2$.
:::

::: problem id=t8 type=choice
For a square matrix $A$, which is **not** equivalent to $\det A = 0$?
- [ ] $A$ is not invertible
- [ ] $A\vec{x} = \vec{0}$ has a nonzero solution
- [ ] 0 is an eigenvalue of $A$
- [x] $A$ has a zero entry
solution: A zero entry says nothing about invertibility. The other three are all equivalent to $\det A = 0$.
:::
