---
id: det-test
title: Determinants test
pass: 0.8
---
::: problem id=t1 type=numeric answer="5"
Find $\det\begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$.
solution: $8 - 3 = 5$.
:::

::: problem id=t2 type=numeric answer="22"
Find the determinant of the matrix with rows $(1, 2, 3)$, $(0, 4, 5)$, $(1, 0, 6)$.
solution: Down column 1: $1(24 - 0) + 1(10 - 12)$, which is $24 - 2 = 22$.
:::

::: problem id=t3 type=numeric answer="9"
Find the determinant of the matrix with rows $(1, 0, 2, 0)$, $(3, 1, 0, 0)$, $(0, 2, 1, 4)$, $(0, 0, 1, 1)$.
hint: Expand along column 4: only two nonzero entries.
solution: Column 4 has 4 at (3, 4) with sign $-$ and 1 at (4, 4) with sign $+$. Deleting row 3 and column 4 leaves a minor with determinant 1; deleting row 4 and column 4 leaves one with determinant 13. So the determinant is $-4(1) + 1(13) = 9$.
:::

::: problem id=t4 type=numeric answer="-40"
$A$ is $3 \times 3$ with $\det A = 5$. What is $\det(-2A)$?
solution: $(-2)^3 \times 5 = -40$.
:::

::: problem id=t5 type=numeric answer="0.5"
$\det A = 2$. What is $\det(A^{-1})$?
solution: $1/2 = 0.5$.
:::

::: problem id=t6 type=numeric answer="1"
Use Cramer's rule on $3x + 2y = 7$ and $x - y = -1$. What is $x$?
solution: $\det A = -5$; with column 1 replaced, $\det = -5$. $x = 1$.
:::

::: problem id=t7 type=numeric answer="0"
Find the determinant of the matrix with rows $(1, 2, 3)$, $(4, 5, 6)$, $(7, 8, 9)$.
solution: Row reduction gives a zero row: 0.
:::

::: problem id=t8 type=choice
Which statement is equivalent to "$A$ is invertible" for a square matrix $A$?
- [x] $\det A \ne 0$
- [ ] $\det A = 1$
- [ ] $A$ has no zero entries
- [ ] $A$ is symmetric
solution: The determinant test.
:::
