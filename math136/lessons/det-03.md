---
id: det-03
title: Determinants, inverses and area
---
A square matrix is invertible exactly when its determinant isn't zero. The determinant also gives formulas for solving systems and for area and volume. (Nicholson ch. 3)

::: rule
- $A$ is invertible **if and only if** $\det A \ne 0$.
- **Cramer's rule:** if $\det A \ne 0$, the solution of $A\vec{x} = \vec{b}$ has $x_i = \frac{\det A_i}{\det A}$, where $A_i$ is $A$ with column $i$ replaced by $\vec{b}$.
- $A^{-1} = \frac{1}{\det A}\,\text{adj}(A)$, where $\text{adj}(A)$ is the transpose of the matrix of cofactors.
- $|\det[\vec{u} \ \vec{v}]|$ is the area of the parallelogram with sides $\vec{u}, \vec{v}$; in 3D, $|\det[\vec{u} \ \vec{v} \ \vec{w}]|$ is a volume.
:::

::: example
Solve $3x + 2y = 7$ and $x - y = -1$.
$\det A = -3 - 2 = -5$. Replace column 1 by $(7, -1)$: $\det = -7 + 2 = -5$, so $x = 1$.
Replace column 2: $\det = -3 - 7 = -10$, so $y = 2$.
:::

::: problem id=p1 type=choice
The matrix with rows $(2, 0, 1)$, $(1, 3, 2)$, $(1, 1, 1)$ has determinant 0. So:
- [x] it has no inverse
- [ ] its inverse has determinant 0
- [ ] it's the identity
solution: Zero determinant means not invertible.
:::

::: problem id=p2 type=numeric answer="2"
Use Cramer's rule on $2x + 3y = 13$ and $x + 4y = 14$. What is $x$?
solution: $\det A = 8 - 3 = 5$. Column 1 replaced: $\det\begin{bmatrix} 13 & 3 \\ 14 & 4 \end{bmatrix} = 52 - 42 = 10$. $x = 10/5 = 2$.
:::

::: problem id=p3 type=numeric answer="3"
Same system. What is $y$?
solution: $\det\begin{bmatrix} 2 & 13 \\ 1 & 14 \end{bmatrix} = 28 - 13 = 15$. $y = 15/5 = 3$.
:::

::: problem id=p4 type=numeric answer="9"
Find the area of the triangle with corners $(0, 0)$, $(4, 1)$ and $(2, 5)$.
solution: The parallelogram on $(4, 1)$ and $(2, 5)$ has area $|20 - 2| = 18$. The triangle is half: 9.
:::

::: problem id=p5 type=numeric answer="6"
Find the volume of the box (parallelepiped) on $(1, 0, 0)$, $(1, 2, 0)$ and $(0, 1, 3)$.
solution: With these as columns the matrix is upper triangular with diagonal $1, 2, 3$: volume 6.
:::

::: problem id=p6 type=numeric answer="5/22" tolerance=0.001
$A$ has rows $(1, 2, 3)$, $(0, 4, 5)$, $(1, 0, 6)$ and $\det A = 22$. Its cofactor $C_{12} = 5$. What is entry (2, 1) of $A^{-1}$? (A fraction, or 3 decimals.)
hint: $\text{adj}(A)$ is the **transpose** of the cofactor matrix, so its entry (2, 1) is $C_{12}$.
solution: $\frac{1}{22} \times 5 = \frac{5}{22} \approx 0.227$.
:::

::: problem id=p7 type=choice
$A$ is $3 \times 3$ and $A\vec{x} = \vec{0}$ has a nonzero solution. Then $\det A$:
- [x] is 0
- [ ] is 1
- [ ] can be anything
solution: If $A$ were invertible, $\vec{x} = A^{-1}\vec{0} = \vec{0}$ would be the only solution.
:::
