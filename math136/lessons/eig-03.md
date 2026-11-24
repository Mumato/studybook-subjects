---
id: eig-03
title: Diagonalization
---
If a matrix has enough independent eigenvectors, then in the right coordinates it's just a diagonal matrix, and powers become easy. (Nicholson ch. 3)

::: rule
- $A$ ($n \times n$) is **diagonalizable** if $A = PDP^{-1}$, where $D$ is diagonal. The columns of $P$ are $n$ independent eigenvectors, and $D$ holds their eigenvalues in the same order.
- That works exactly when $A$ has $n$ independent eigenvectors. **$n$ different eigenvalues** guarantee it.
- **Powers:** $A^k = PD^kP^{-1}$, and $D^k$ just raises each diagonal entry to the $k$-th power.
:::

::: example
$A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$ has eigenvectors $(1, 1)$ for 5 and $(1, -2)$ for 2:
$$P = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}, \ D = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$$
Then $A^3 = PD^3P^{-1}$, where $D^3$ has diagonal $125, 8$. Multiplying out gives rows $(86, 39)$ and $(78, 47)$.
:::

::: problem id=p1 type=numeric answer="32"
$D$ is diagonal with entries 2 and 3. What is entry (1, 1) of $D^5$?
solution: $2^5 = 32$.
:::

::: problem id=p2 type=numeric answer="2"
$A = PDP^{-1}$ with $D$ having diagonal $5, 2$ and $P$ having columns $(1, 1)$, $(1, -2)$. Which eigenvalue belongs to the eigenvector $(1, -2)$?
solution: Column 2 of $P$ pairs with entry 2 of $D$: $\lambda = 2$.
:::

::: problem id=p3 type=choice
A $3 \times 3$ matrix has eigenvalues 1, 4 and $-2$. Is it diagonalizable?
- [x] Yes: 3 different eigenvalues give 3 independent eigenvectors
- [ ] Not necessarily
- [ ] No
solution: Distinct eigenvalues always have independent eigenvectors.
:::

::: problem id=p4 type=choice
$\begin{bmatrix} 3 & 1 \\ 0 & 3 \end{bmatrix}$ has the eigenvalue 3 twice, and every eigenvector is a multiple of $(1, 0)$. Is it diagonalizable?
- [ ] Yes
- [x] No: there's only one independent eigenvector
solution: A $2 \times 2$ matrix needs 2 independent eigenvectors.
:::

::: problem id=p5 type=numeric answer="39"
Check the example: what is entry (1, 2) of $A^3$ for $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$?
hint: $A^2$ has rows $(18, 7)$ and $(14, 11)$.
solution: $A^3 = A^2A$; entry (1, 2) is $(18, 7) \cdot (1, 3) = 18 + 21 = 39$.
:::

::: problem id=p6 type=numeric answer="0"
$D$ is diagonal with entries $1$ and $0.5$. As $k$ grows, what does entry (2, 2) of $D^k$ approach?
solution: $0.5^k \to 0$, while $1^k = 1$ stays. So $A^k = PD^kP^{-1}$ settles down to a fixed matrix.
:::

::: problem id=p7 type=numeric answer="1024" creative=true
$A = PDP^{-1}$ where $D$ has diagonal $2$ and $-1$, and $P = I$. What is entry (1, 1) of $A^{10}$?
solution: With $P = I$, $A = D$, so $A^{10} = D^{10}$: $2^{10} = 1024$ (and $(-1)^{10} = 1$).
:::
