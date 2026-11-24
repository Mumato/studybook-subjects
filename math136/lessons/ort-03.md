---
id: ort-03
title: Least squares
---
Real data rarely fits a line exactly, so $A\vec{x} = \vec{b}$ has no solution. **Least squares** finds the $\vec{x}$ that comes closest. (Nicholson ch. 5)

::: rule
- A **least-squares solution** of $A\vec{x} = \vec{b}$ minimizes $\|A\vec{x} - \vec{b}\|$.
- It solves the **normal equations**:
$$A^TA\,\vec{x} = A^T\vec{b}$$
- To fit $y = a + bx$ to points $(x_i, y_i)$: $A$ has rows $(1, x_i)$, $\vec{b}$ holds the $y_i$, and $\vec{x} = (a, b)$.
- $A\vec{x}$ is then the projection of $\vec{b}$ onto the column space of $A$.
:::

::: example
Fit a line to $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 4)$. $A$ has rows $(1, 0)$, $(1, 1)$, $(1, 2)$, $(1, 3)$.
$$A^TA = \begin{bmatrix} 4 & 6 \\ 6 & 14 \end{bmatrix}$$
$$A^T\vec{b} = \begin{bmatrix} 12 \\ 23 \end{bmatrix}$$
Solving gives $a = 1.5$, $b = 1$: the best line is $y = 1.5 + x$.
:::

::: problem id=p1 type=numeric answer="5.5"
Use the best line $y = 1.5 + x$ from the example to predict $y$ at $x = 4$.
solution: $1.5 + 4 = 5.5$.
:::

::: problem id=p2 type=numeric answer="6"
In the example, entry (1, 2) of $A^TA$ is the sum of the $x$-values. Check: what is that sum?
solution: $0 + 1 + 2 + 3 = 6$.
:::

::: problem id=p3 type=numeric answer="0.5"
In the example, the point $(1, 3)$ lies how far above the best line? (Its residual $y - \hat{y}$.)
solution: The line gives $1.5 + 1 = 2.5$ at $x = 1$; $3 - 2.5 = 0.5$.
:::

::: problem id=p4 type=numeric answer="1.5"
Fit $y = a + bx$ to $(1, 2)$, $(2, 3)$, $(3, 5)$. Here $A^TA$ has rows $(3, 6)$, $(6, 14)$ and $A^T\vec{b} = (10, 23)$. What is the slope $b$?
hint: Solve $3a + 6b = 10$ and $6a + 14b = 23$.
solution: Double the first: $6a + 12b = 20$. Subtract: $2b = 3$, so $b = 1.5$.
:::

::: problem id=p5 type=numeric answer="1/3" tolerance=0.001
Same fit. What is $a$? (A fraction, or 3 decimals.)
solution: $3a + 6(1.5) = 10$, so $3a = 1$ and $a = \frac{1}{3} \approx 0.333$.
:::

::: problem id=p6 type=numeric answer="2.5"
Fit $y = a + bx$ to $(-1, 0)$, $(0, 1)$, $(1, 5)$. $A^TA$ has rows $(3, 0)$, $(0, 2)$ and $A^T\vec{b} = (6, 5)$. What is $b$?
solution: The matrix is diagonal: $2b = 5$, so $b = 2.5$ (and $a = 2$).
:::

::: problem id=p7 type=choice
The normal equations $A^TA\vec{x} = A^T\vec{b}$ come from requiring that:
- [x] the error $\vec{b} - A\vec{x}$ is orthogonal to every column of $A$
- [ ] $A\vec{x} = \vec{b}$ exactly
- [ ] $\vec{x}$ is an eigenvector
solution: The closest point is the projection, and the error of a projection is orthogonal to the subspace: $A^T(\vec{b} - A\vec{x}) = \vec{0}$.
:::
