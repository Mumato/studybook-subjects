---
id: midb-test
title: Midterm practice exam B
pass: 0.7
---
::: problem id=t1 type=numeric answer="2"
A consistent system has 3 equations, 5 unknowns and rank 3. How many free variables?
solution: $5 - 3 = 2$.
:::

::: problem id=t2 type=numeric answer="90"
What is the angle, in degrees, between $(1, 1)$ and $(-1, 1)$?
solution: The dot product is $-1 + 1 = 0$: 90°.
:::

::: problem id=t3 type=numeric answer="2"
Find the first component of $\text{proj}_{\vec{u}}\vec{v}$ for $\vec{v} = (1, 2, 3)$ and $\vec{u} = (1, 1, 1)$.
solution: $\frac{6}{3}(1, 1, 1) = (2, 2, 2)$.
:::

::: problem id=t4 type=numeric answer="5"
Find the third component of $(2, 1, 0) \times (1, 3, 0)$.
solution: $2(3) - 1(1) = 5$.
:::

::: problem id=t5 type=numeric answer="36"
$A$ is $2 \times 2$ with $\det A = 4$. What is $\det(3A)$?
solution: $3^2 \times 4 = 36$.
:::

::: problem id=t6 type=numeric answer="3"
Use Cramer's rule on $x + 2y = 8$ and $3x - y = 3$. What is $y$?
solution: $\det A = -1 - 6 = -7$. Column 2 replaced: $\det\begin{bmatrix} 1 & 8 \\ 3 & 3 \end{bmatrix} = 3 - 24 = -21$. $y = 3$.
:::

::: problem id=t7 type=choice
$A$ and $B$ are invertible $n \times n$ matrices. Which is always true?
- [ ] $AB = BA$
- [x] $\det(AB) = \det(BA)$
- [ ] $(AB)^{-1} = A^{-1}B^{-1}$
- [ ] $\det(A + B) = \det A + \det B$
solution: Both equal $\det A \det B$. The others fail in general.
:::

::: problem id=t8 type=choice
The line $\vec{x} = (1, 0, 2) + t(1, 1, 1)$ and the plane $x + y - 2z = 5$:
- [x] are parallel: the line never meets the plane
- [ ] meet at one point
- [ ] the line lies in the plane
solution: $(1, 1, 1) \cdot (1, 1, -2) = 0$, so the line is parallel to the plane. Its point $(1, 0, 2)$ gives $1 + 0 - 4 = -3 \ne 5$, so it's not in the plane.
:::
