---
id: mat-03
title: The inverse of a matrix
---
For numbers, dividing by $a$ means multiplying by $a^{-1}$. A square matrix may have an **inverse** that undoes it. (Nicholson ch. 2)

::: rule
- $A^{-1}$ is the matrix with $AA^{-1} = A^{-1}A = I$. A matrix with an inverse is **invertible**.
- For $2 \times 2$: $\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$, when $ad - bc \ne 0$.
- Larger: row-reduce $[A \mid I]$. If the left side becomes $I$, the right side is $A^{-1}$; if not, $A$ has no inverse.
- If $A$ is invertible, $A\vec{x} = \vec{b}$ has exactly one solution: $\vec{x} = A^{-1}\vec{b}$.
:::

::: example
$$A = \begin{bmatrix} 2 & 5 \\ 1 & 3 \end{bmatrix}$$
has $ad - bc = 6 - 5 = 1$, so
$$A^{-1} = \begin{bmatrix} 3 & -5 \\ -1 & 2 \end{bmatrix}$$
To solve $2x + 5y = 1$, $x + 3y = 2$, multiply: $A^{-1}(1, 2) = (-7, 3)$, since $3 - 10 = -7$ and $-1 + 4 = 3$.
:::

::: problem id=p1 type=numeric answer="1.5"
Find $A^{-1}$ for $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$. What is its entry (2, 1)?
solution: $ad - bc = 4 - 6 = -2$. $A^{-1} = -\frac{1}{2}\begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$, so entry (2, 1) is $-\frac{1}{2}(-3) = 1.5$.
:::

::: problem id=p2 type=numeric answer="-2"
Same $A^{-1}$. What is its entry (1, 1)?
solution: $-\frac{1}{2}(4) = -2$.
:::

::: problem id=p3 type=numeric answer="-0.7"
Find the entry (1, 2) of the inverse of $\begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}$.
solution: $ad - bc = 24 - 14 = 10$. Entry (1, 2) is $-b/10 = -0.7$.
:::

::: problem id=p4 type=numeric answer="6"
For which $k$ does $\begin{bmatrix} 2 & 3 \\ 4 & k \end{bmatrix}$ have **no** inverse?
solution: $2k - 12 = 0$, so $k = 6$. (Row 2 is then twice row 1.)
:::

::: problem id=p5 type=numeric answer="3"
Solve $2x + 5y = 1$, $x + 3y = 2$ using $A^{-1}$ from the example. What is $y$?
solution: $\vec{x} = A^{-1}(1, 2) = (-7, 3)$, so $y = 3$.
:::

::: problem id=p6 type=numeric answer="18"
The inverse of the matrix with rows $(1, 2, 3)$, $(0, 1, 4)$, $(5, 6, 0)$ has first row $(-24, b, 5)$. Use $AA^{-1} = I$ (or row reduction) to find $b$.
hint: Row 1 of $A^{-1}$ times column 2 of $A$ must give entry (1, 2) of $I$, which is 0.
solution: $-24(2) + b(1) + 5(6) = 0$, so $b = 18$.
:::

::: problem id=p7 type=choice
Row-reducing $[A \mid I]$ produces a row of zeros on the left. This means:
- [x] $A$ has no inverse
- [ ] $A^{-1} = 0$
- [ ] $A = I$
solution: The left side can't become $I$, so $A$ isn't invertible.
:::
