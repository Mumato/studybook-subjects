---
id: mat-test
title: Matrices test
pass: 0.8
---
::: problem id=t1 type=numeric answer="5"
Write the augmented matrix of $3x - y = 4$ and $x + 5y = 2$. What is entry $(2, 2)$?
solution: Row 2 is $[1 \;\, 5 \mid 2]$: entry 5.
:::

::: problem id=t2 type=numeric answer="-5"
Apply $R_2 \to R_2 - 2R_1$. What is the new entry $(2, 2)$?
$$\left[\begin{array}{cc|c} 1 & 3 & 4 \\ 2 & 1 & 3 \end{array}\right]$$
solution: $1 - 2 \times 3 = -5$.
:::

::: problem id=t3 type=numeric answer="5"
What is x?
$$\left[\begin{array}{cc|c} 1 & -1 & 2 \\ 0 & 1 & 3 \end{array}\right]$$
solution: $y = 3$, then $x - 3 = 2$, $x = 5$.
:::

::: problem id=t4 type=choice
Row reduction gives this. How many solutions are there?
$$\left[\begin{array}{cc|c} 1 & 2 & 3 \\ 0 & 0 & 4 \end{array}\right]$$
- [x] none
- [ ] exactly one
- [ ] infinitely many
solution: Row 2 says $0 = 4$: impossible.
:::

::: problem id=t5 type=numeric answer="7"
Solve $x + y = 10$ and $x - y = 4$. What is x?
solution: Adding: $2x = 14$, $x = 7$.
:::

::: problem id=t6 type=numeric answer="1"
Solve $x + y + z = 4$, $y - z = 1$, $z = 1$. What is x?
solution: $y = 2$, then $x = 4 - 2 - 1 = 1$.
:::

::: problem id=t7 type=numeric answer="2"
Solve $x + y + z = 6$, $x - y + 2z = 5$, $2x + y - z = 1$. What is y?
solution: $R_2 - R_1$: $-2y + z = -1$. $R_3 - 2R_1$: $-y - 3z = -11$.
From the first, $z = 2y - 1$; then $-y - 6y + 3 = -11$, so $y = 2$ ($z = 3$, $x = 1$).
:::

::: problem id=t8 type=numeric answer="-2"
What is entry $(2, 1)$ of this sum?
$$\begin{bmatrix} 2 & 1 \\ -3 & 4 \end{bmatrix} + \begin{bmatrix} 0 & 5 \\ 1 & 1 \end{bmatrix}$$
solution: $-3 + 1 = -2$.
:::

::: problem id=t9 type=numeric answer="-8"
What is entry $(1, 2)$ of $4\begin{bmatrix} 1 & -2 \\ 0 & 3 \end{bmatrix}$?
solution: $4 \times (-2) = -8$.
:::

::: problem id=t10 type=numeric answer="7"
What is entry $(1, 2)$ of this product?
$$\begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 4 \\ 2 & -1 \end{bmatrix}$$
solution: $2 \cdot 4 + 1 \cdot (-1) = 7$.
:::

::: problem id=t11 type=choice
A is $3 \times 2$ and B is $2 \times 5$. What size is $AB$?
- [x] $3 \times 5$
- [ ] $2 \times 2$
- [ ] $5 \times 3$
- [ ] it is not defined
solution: Inner sizes 2 and 2 match; outer sizes give $3 \times 5$.
:::

::: problem id=t12 type=numeric answer="1"
$\det\begin{bmatrix} 7 & 3 \\ 2 & 1 \end{bmatrix} = ?$
solution: $7 - 6 = 1$.
:::

::: problem id=t13 type=numeric answer="13"
Find the determinant.
$$\begin{bmatrix} 1 & 0 & 2 \\ 3 & 1 & 0 \\ 0 & 2 & 1 \end{bmatrix}$$
solution: $1(1 - 0) - 0 + 2(6 - 0) = 13$.
:::

::: problem id=t14 type=numeric answer="5"
Find the inverse of $\begin{bmatrix} 5 & 2 \\ 2 & 1 \end{bmatrix}$. What is its entry $(2, 2)$?
solution: $\det = 1$. Inverse $\begin{bmatrix} 1 & -2 \\ -2 & 5 \end{bmatrix}$: entry 5.
:::

::: problem id=t15 type=numeric answer="4"
For which k does $\begin{bmatrix} 2 & k \\ 3 & 6 \end{bmatrix}$ have no inverse?
solution: $12 - 3k = 0$, so $k = 4$.
:::

::: problem id=t16 type=numeric answer="1"
Solve $4x + 3y = 10$, $x + y = 3$ with an inverse matrix. What is x?
solution: $\det = 1$, $A^{-1} = \begin{bmatrix} 1 & -3 \\ -1 & 4 \end{bmatrix}$.
$x = 10 - 9 = 1$ (and $y = 2$).
:::

::: problem id=t17 type=numeric answer="3"
3 coffees and 2 muffins cost 13 dollars. 1 coffee and 4 muffins cost 11 dollars. How much is a coffee?
solution: $3c + 2m = 13$, $c + 4m = 11$.
$c = 11 - 4m$: $33 - 10m = 13$, $m = 2$, $c = 3$.
:::

::: problem id=t18 type=numeric answer="30"
Find the determinant.
$$\begin{bmatrix} 2 & 9 & -4 \\ 0 & 3 & 7 \\ 0 & 0 & 5 \end{bmatrix}$$
solution: Triangular: multiply the diagonal, $2 \cdot 3 \cdot 5 = 30$.
:::
