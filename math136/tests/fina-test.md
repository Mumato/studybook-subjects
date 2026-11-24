---
id: fina-test
title: Final practice exam A
pass: 0.7
---
::: problem id=t1 type=numeric answer="2"
A $4 \times 6$ matrix has rank 4. What is its nullity?
solution: $6 - 4 = 2$.
:::

::: problem id=t2 type=multi answers="3;1"
Find both eigenvalues of $\begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$.
solution: Trace 4, determinant 3: $\lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$.
:::

::: problem id=t3 type=numeric answer="4"
Find the determinant of the matrix with rows $(2, 1, 0)$, $(1, 2, 1)$, $(0, 1, 2)$.
solution: Along row 1: $2(4 - 1) - 1(2 - 0) = 6 - 2 = 4$.
:::

::: problem id=t4 type=numeric answer="3"
Write $(4, 2)$ in the orthogonal basis $(1, 1)$, $(1, -1)$. What is the coefficient of $(1, 1)$?
solution: $\frac{(4, 2) \cdot (1, 1)}{2} = \frac{6}{2} = 3$.
:::

::: problem id=t5 type=numeric answer="3/7" tolerance=0.001
A transition matrix has columns $(0.7, 0.3)$ and $(0.4, 0.6)$. What is the second entry of its steady state? (A fraction, or 3 decimals.)
solution: $0.3a = 0.4b$ and $a + b = 1$: $b = \frac{3}{7} \approx 0.429$.
:::

::: problem id=t6 type=numeric answer="-5"
Rotate $(2, 5)$ by 90° counterclockwise. What is the $x$-coordinate of the image?
solution: $(x, y) \mapsto (-y, x)$: $(-5, 2)$.
:::

::: problem id=t7 type=numeric answer="2.5"
Fit $y = a + bx$ by least squares to $(-1, 0)$, $(0, 1)$, $(1, 5)$. What is $b$?
solution: $A^TA$ has rows $(3, 0)$, $(0, 2)$ and $A^T\vec{b} = (6, 5)$: $b = 5/2 = 2.5$.
:::

::: problem id=t8 type=choice
A $3 \times 3$ matrix has eigenvalues 2, 2 and 5. Is it diagonalizable?
- [ ] Always
- [ ] Never
- [x] Only if the eigenvalue 2 has two independent eigenvectors
solution: It needs 3 independent eigenvectors in total; $\lambda = 5$ gives one, so $\lambda = 2$ must give two.
:::
