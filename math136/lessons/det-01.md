---
id: det-01
title: Computing determinants
---
The **determinant** of a square matrix is one number that tells you whether the matrix is invertible, and how it scales area and volume. (Nicholson ch. 3)

::: rule
- $2 \times 2$: $\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$.
- **Cofactor** $C_{ij} = (-1)^{i + j}\det(M_{ij})$, where $M_{ij}$ is $A$ with row $i$ and column $j$ deleted. The signs follow a checkerboard starting with $+$ at the top left.
- **Cofactor expansion** along any row or column: $\det A = a_{i1}C_{i1} + a_{i2}C_{i2} + \dots$ Pick a row or column with many zeros.
- The determinant of a **triangular** matrix is the product of its diagonal entries.
:::

::: example
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{bmatrix}$$
Expand down column 1 (two useful entries):
$1 \cdot (4 \cdot 6 - 5 \cdot 0) + 1 \cdot (2 \cdot 5 - 3 \cdot 4)$, which is $24 - 2 = 22$.
The second term has sign $+$ because position (3, 1) is $+$ on the checkerboard.
:::

::: problem id=p1 type=numeric answer="2"
Find $\det\begin{bmatrix} 3 & 1 \\ 4 & 2 \end{bmatrix}$.
solution: $6 - 4 = 2$.
:::

::: problem id=p2 type=numeric answer="26"
Find $\det\begin{bmatrix} 5 & -2 \\ 3 & 4 \end{bmatrix}$.
solution: $20 - (-6) = 26$.
:::

::: problem id=p3 type=numeric answer="5"
For $A$ in the example, find the cofactor $C_{12}$.
hint: Delete row 1 and column 2, take the determinant, and use the sign $(-1)^{1+2} = -1$.
solution: $M_{12}$ has rows $(0, 5)$ and $(1, 6)$: $\det = -5$. $C_{12} = -(-5) = 5$.
:::

::: problem id=p4 type=numeric answer="-7"
Find the determinant of the matrix with rows $(1, 2, 0)$, $(3, 1, 2)$, $(0, 1, 1)$.
solution: Along row 1: $1(1 - 2) - 2(3 - 0) + 0$, which is $-1 - 6 = -7$.
:::

::: problem id=p5 type=numeric answer="120"
Find the determinant of the upper triangular matrix with diagonal $2, 3, 4, 5$ (and other entries above it).
$$\begin{bmatrix} 2 & 1 & 0 & 0 \\ 0 & 3 & 1 & 0 \\ 0 & 0 & 4 & 1 \\ 0 & 0 & 0 & 5 \end{bmatrix}$$
solution: Triangular: $2 \times 3 \times 4 \times 5 = 120$.
:::

::: problem id=p6 type=numeric answer="0"
Find the determinant of the matrix with rows $(2, 0, 1)$, $(1, 3, 2)$, $(1, 1, 1)$.
solution: Along row 1: $2(3 - 2) - 0 + 1(1 - 3)$, which is $2 - 2 = 0$.
:::

::: problem id=p7 type=choice
Which sign does the cofactor at position (2, 3) carry?
- [ ] $+$
- [x] $-$
solution: $(-1)^{2+3} = -1$.
:::
