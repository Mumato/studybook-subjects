---
id: eig-test
title: Eigenvalues and diagonalization test
pass: 0.8
---
::: problem id=t1 type=numeric answer="5"
$A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$ and $\vec{v} = (1, 1)$. What is the eigenvalue?
solution: $A\vec{v} = (5, 5)$.
:::

::: problem id=t2 type=multi answers="4;3"
Find both eigenvalues of $\begin{bmatrix} 5 & -2 \\ 1 & 2 \end{bmatrix}$.
solution: $\lambda^2 - 7\lambda + 12 = (\lambda - 3)(\lambda - 4)$.
:::

::: problem id=t3 type=multi answers="10;5"
Find both eigenvalues of $\begin{bmatrix} 6 & -2 \\ -2 & 9 \end{bmatrix}$.
solution: Trace 15, determinant $54 - 4 = 50$: $\lambda^2 - 15\lambda + 50 = (\lambda - 10)(\lambda - 5)$.
:::

::: problem id=t4 type=numeric answer="2"
For $A = \begin{bmatrix} 5 & -2 \\ 1 & 2 \end{bmatrix}$ and $\lambda = 4$, an eigenvector is $(a, 1)$. What is $a$?
solution: $A - 4I$ has rows $(1, -2)$, $(1, -2)$: $v_1 = 2v_2$, so $(2, 1)$.
:::

::: problem id=t5 type=numeric answer="-6"
A $3 \times 3$ triangular matrix has diagonal $2, -1, 3$. What is the product of its eigenvalues?
solution: $2 \times (-1) \times 3 = -6$.
:::

::: problem id=t6 type=numeric answer="86"
For $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$, what is entry (1, 1) of $A^3$?
solution: $A^2$ has rows $(18, 7)$, $(14, 11)$. Entry (1, 1) of $A^3$: $(18, 7) \cdot (4, 2) = 72 + 14 = 86$.
:::

::: problem id=t7 type=choice
Which matrix is **not** diagonalizable?
- [ ] $\begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}$
- [x] $\begin{bmatrix} 3 & 1 \\ 0 & 3 \end{bmatrix}$
- [ ] $\begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix}$
solution: The second has the repeated eigenvalue 3 with only one independent eigenvector.
:::

::: problem id=t8 type=choice
$\det(A - \lambda I) = 0$ is used to find:
- [x] the eigenvalues
- [ ] the inverse
- [ ] the rank
solution: The characteristic equation.
:::
