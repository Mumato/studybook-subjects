---
id: eig-01
title: Eigenvalues and eigenvectors
---
Most vectors change direction when you multiply them by a matrix. A few special ones only get stretched. Those are **eigenvectors**, and the stretch factor is the **eigenvalue**. (Nicholson ch. 3)

::: rule
- $\vec{v} \ne \vec{0}$ is an **eigenvector** of the square matrix $A$ with **eigenvalue** $\lambda$ if
$$A\vec{v} = \lambda\vec{v}$$
- To check a given vector: compute $A\vec{v}$ and see whether it's a multiple of $\vec{v}$.
- Any nonzero multiple of an eigenvector is an eigenvector for the same $\lambda$.
- $\lambda = 0$ is an eigenvalue exactly when $A$ is **not** invertible.
:::

::: example
$A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$. $A(1, 1) = (5, 5) = 5(1, 1)$: eigenvector with $\lambda = 5$.
$A(1, -2) = (2, -4) = 2(1, -2)$: eigenvector with $\lambda = 2$.
$A(1, 0) = (4, 2)$ isn't a multiple of $(1, 0)$: not an eigenvector.
:::

::: problem id=p1 type=numeric answer="5"
$A = \begin{bmatrix} 6 & -2 \\ -2 & 9 \end{bmatrix}$ and $\vec{v} = (2, 1)$. $A\vec{v} = \lambda\vec{v}$ for which $\lambda$?
solution: $A\vec{v} = (12 - 2, \ -4 + 9) = (10, 5)$, which is $5(2, 1)$.
:::

::: problem id=p2 type=numeric answer="2"
$A = \begin{bmatrix} 0 & 1 \\ -2 & 3 \end{bmatrix}$ and $\vec{v} = (1, 2)$. What is the eigenvalue?
solution: $A\vec{v} = (2, -2 + 6) = (2, 4) = 2(1, 2)$.
:::

::: problem id=p3 type=choice
Is $(1, 0)$ an eigenvector of $\begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$?
- [ ] Yes
- [x] No
solution: The product is $(4, 2)$, not a multiple of $(1, 0)$.
:::

::: problem id=p4 type=numeric answer="3"
$A = \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix}$ and $\vec{v} = (1, 1)$. What is the eigenvalue?
solution: $A\vec{v} = (3, 3) = 3(1, 1)$.
:::

::: problem id=p5 type=numeric answer="-1"
Same $A$, with $\vec{v} = (1, -1)$. What is the eigenvalue?
solution: $A\vec{v} = (1 - 2, \ 2 - 1) = (-1, 1)$, which is $-1(1, -1)$.
:::

::: problem id=p6 type=numeric answer="15"
$\vec{v}$ is an eigenvector of $A$ with $\lambda = 3$, and $\vec{v} = (1, 5)$. What is the second component of $A\vec{v}$?
solution: $A\vec{v} = 3\vec{v} = (3, 15)$.
:::

::: problem id=p7 type=choice
A matrix has 0 as an eigenvalue. Then:
- [x] it isn't invertible
- [ ] it's the zero matrix
- [ ] it has no eigenvectors
solution: $A\vec{v} = \vec{0}$ for some $\vec{v} \ne \vec{0}$, so $\det A = 0$.
:::
