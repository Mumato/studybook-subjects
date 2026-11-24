---
id: mat-test
title: Matrix algebra test
pass: 0.8
---
::: problem id=t1 type=numeric answer="-1"
$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 2 & 0 \\ 1 & -1 \end{bmatrix}$. What is entry (1, 1) of $3A - 2B$?
solution: $3(1) - 2(2) = -1$.
:::

::: problem id=t2 type=numeric answer="10"
Same $A$. What is entry (1, 2) of $A^2$?
solution: $(1, 2) \cdot (2, 4) = 2 + 8 = 10$.
:::

::: problem id=t3 type=numeric answer="4"
Same $A$ and $B$. What is entry (1, 2) of $BA$?
solution: Row 1 of $B$ is $(2, 0)$; column 2 of $A$ is $(2, 4)$: $4 + 0 = 4$.
:::

::: problem id=t4 type=numeric answer="2"
$C$ is $2 \times 3$ and $D$ is $3 \times 2$. How many columns does $CD$ have?
solution: $CD$ is $2 \times 2$.
:::

::: problem id=t5 type=numeric answer="-1"
Find the entry (2, 1) of the inverse of $\begin{bmatrix} 2 & 5 \\ 1 & 3 \end{bmatrix}$.
solution: $ad - bc = 1$; the inverse has rows $(3, -5)$ and $(-1, 2)$.
:::

::: problem id=t6 type=numeric answer="-7"
Solve $2x + 5y = 1$ and $x + 3y = 2$. What is $x$?
solution: The inverse has rows $(3, -5)$ and $(-1, 2)$. $A^{-1}(1, 2) = (-7, 3)$, so $x = 3 - 10 = -7$.
:::

::: problem id=t7 type=numeric answer="4.5"
For which $k$ does $\begin{bmatrix} 2 & k \\ 2 & 4.5 \end{bmatrix}$ have no inverse?
solution: $2(4.5) - 2k = 0$, so $k = 4.5$.
:::

::: problem id=t8 type=choice
$(AB)^T$ equals:
- [ ] $A^TB^T$
- [x] $B^TA^T$
- [ ] $AB$
solution: Transposing reverses the order.
:::
