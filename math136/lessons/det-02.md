---
id: det-02
title: Properties of determinants
---
Cofactor expansion is slow for big matrices. Row operations change the determinant in simple, predictable ways, so you can reduce to triangular form instead. (Nicholson ch. 3)

::: rule
- **Swap** two rows: the determinant changes sign.
- **Multiply** a row by $k$: the determinant is multiplied by $k$.
- **Add** a multiple of one row to another: no change.
- $\det(AB) = \det A \cdot \det B$, $\det(A^T) = \det A$, $\det(A^{-1}) = \frac{1}{\det A}$.
- For an $n \times n$ matrix, $\det(kA) = k^n \det A$.
- Two equal rows, or a row of zeros, give determinant 0.
:::

::: example
$\det\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$: $R_2 - 4R_1$ and $R_3 - 7R_1$ give rows $(0, -3, -6)$ and $(0, -6, -12)$.
Then $R_3 - 2R_2$ gives a zero row, so the determinant is 0.
:::

::: problem id=p1 type=numeric answer="-22"
$\det A = 22$. Two rows of $A$ are swapped. What is the new determinant?
solution: A swap changes the sign: $-22$.
:::

::: problem id=p2 type=numeric answer="40"
$A$ is $3 \times 3$ with $\det A = 5$. What is $\det(2A)$?
solution: $2^3 \times 5 = 40$. All three rows are doubled.
:::

::: problem id=p3 type=numeric answer="0.2"
$\det A = 5$. What is $\det(A^{-1})$?
solution: $1/5 = 0.2$.
:::

::: problem id=p4 type=numeric answer="-15"
$\det A = 3$ and $\det B = -5$. What is $\det(AB)$?
solution: $3 \times (-5) = -15$.
:::

::: problem id=p5 type=numeric answer="25"
$\det A = 5$. What is $\det(A^TA)$?
solution: $\det(A^T)\det A = 5 \times 5 = 25$.
:::

::: problem id=p6 type=numeric answer="0"
For which $k$ is the determinant of the matrix with rows $(1, 2, 3)$, $(0, k, 1)$, $(2, 4, 7)$ equal to 0?
hint: $R_3 - 2R_1$ gives $(0, 0, 1)$.
solution: After $R_3 - 2R_1$ the rows are $(1, 2, 3)$, $(0, k, 1)$, $(0, 0, 1)$: triangular, determinant $k$. So $k = 0$.
:::

::: problem id=p7 type=choice
Adding 5 times row 1 to row 3 changes the determinant by:
- [x] nothing
- [ ] a factor of 5
- [ ] a factor of $-1$
solution: Row replacement never changes the determinant.
:::

::: problem id=p8 type=numeric answer="1" creative=true
$A$ is $4 \times 4$ with $\det A = 16$. What is $\det(\frac{1}{2}A)$?
solution: $(\frac{1}{2})^4 \times 16 = \frac{16}{16} = 1$.
:::
