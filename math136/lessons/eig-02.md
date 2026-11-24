---
id: eig-02
title: The characteristic polynomial
---
To **find** the eigenvalues, look for the $\lambda$ that make $A - \lambda I$ non-invertible. (Nicholson ch. 3)

::: rule
- $\lambda$ is an eigenvalue of $A$ exactly when $\det(A - \lambda I) = 0$: the **characteristic equation**.
- For $2 \times 2$, with $t$ = the trace (sum of the diagonal) and $d = \det A$, the equation is
$$\lambda^2 - t\lambda + d = 0$$
- Eigenvectors for $\lambda$: the nonzero solutions of $(A - \lambda I)\vec{v} = \vec{0}$.
- For a **triangular** matrix, the eigenvalues are the diagonal entries.
- The eigenvalues add up to the trace and multiply to the determinant.
:::

::: example
$A = \begin{bmatrix} 5 & -2 \\ 1 & 2 \end{bmatrix}$: trace 7, determinant 12.
$\lambda^2 - 7\lambda + 12 = (\lambda - 3)(\lambda - 4) = 0$, so $\lambda = 3, 4$.
For $\lambda = 4$: $A - 4I$ has rows $(1, -2)$ and $(1, -2)$, so $v_1 = 2v_2$: eigenvector $(2, 1)$.
:::

::: problem id=p1 type=multi answers="5;2"
Find both eigenvalues of $\begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$.
hint: Trace 7, determinant 10.
solution: $\lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2)$: 5 and 2.
:::

::: problem id=p2 type=multi answers="3;-1"
Find both eigenvalues of $\begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix}$.
solution: $\lambda^2 - 2\lambda - 3 = (\lambda - 3)(\lambda + 1)$: 3 and $-1$.
:::

::: problem id=p3 type=multi answers="2;3;5"
Find the eigenvalues of the lower triangular matrix with rows $(2, 0, 0)$, $(1, 3, 0)$, $(4, -1, 5)$.
solution: Triangular: the diagonal entries 2, 3, 5.
:::

::: problem id=p4 type=numeric answer="-7"
The characteristic polynomial of $\begin{bmatrix} 5 & -2 \\ 1 & 2 \end{bmatrix}$ is $\lambda^2 + b\lambda + 12$. What is $b$?
solution: $b = -\text{tr}\,A = -7$.
:::

::: problem id=p5 type=numeric answer="1"
For $A = \begin{bmatrix} 5 & -2 \\ 1 & 2 \end{bmatrix}$ and $\lambda = 3$, an eigenvector is $(1, c)$. What is $c$?
solution: $A - 3I$ has rows $(2, -2)$ and $(1, -1)$: $v_1 = v_2$. So $(1, 1)$.
:::

::: problem id=p6 type=numeric answer="6"
A $3 \times 3$ matrix has eigenvalues 1, 2 and 3. What is its determinant?
solution: The product of the eigenvalues: $1 \times 2 \times 3 = 6$.
:::

::: problem id=p7 type=choice
The rotation by 90° has matrix with rows $(0, -1)$ and $(1, 0)$. Its characteristic equation is $\lambda^2 + 1 = 0$. So:
- [x] it has no real eigenvalues
- [ ] its eigenvalues are $\pm 1$
- [ ] every vector is an eigenvector
solution: No real $\lambda$ solves it: a quarter turn leaves no direction unchanged. (Its eigenvalues are the complex numbers $\pm i$.)
:::
