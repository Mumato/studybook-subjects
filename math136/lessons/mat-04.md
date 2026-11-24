---
id: mat-04
title: Matrix rules and elementary matrices
---
Matrix algebra mostly follows the rules of number algebra, with two big exceptions: order matters, and you can't always divide. (Nicholson ch. 2)

::: rule
- $(AB)^T = B^TA^T$ and $(AB)^{-1} = B^{-1}A^{-1}$: the order **reverses**.
- $(A^{-1})^{-1} = A$, $(A^T)^{-1} = (A^{-1})^T$, $(cA)^{-1} = \frac{1}{c}A^{-1}$.
- $AB = 0$ does **not** mean $A = 0$ or $B = 0$. $AB = AC$ gives $B = C$ only if $A$ is invertible.
- An **elementary matrix** $E$ is $I$ after one row operation. Multiplying $EA$ does that same row operation to $A$.
:::

::: example
$E = \begin{bmatrix} 1 & 0 \\ -3 & 1 \end{bmatrix}$ is $I$ after $R_2 - 3R_1$.
$$E\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & -2 \end{bmatrix}$$
That's exactly $R_2 - 3R_1$ applied to the matrix.
:::

::: problem id=p1 type=numeric answer="10"
$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 2 & 0 \\ 1 & -1 \end{bmatrix}$, with $AB = \begin{bmatrix} 4 & -2 \\ 10 & -4 \end{bmatrix}$. What is entry (1, 2) of $B^TA^T$?
solution: $B^TA^T = (AB)^T$, whose entry (1, 2) is entry (2, 1) of $AB$: 10.
:::

::: problem id=p2 type=choice
$A$ and $B$ are invertible. $(AB)^{-1}$ equals:
- [ ] $A^{-1}B^{-1}$
- [x] $B^{-1}A^{-1}$
- [ ] $AB$
solution: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1}$, which is $AA^{-1} = I$. Put on in order, take off in reverse.
:::

::: problem id=p3 type=numeric answer="0.25"
$A^{-1}$ has entry (1, 1) equal to 1. What is entry (1, 1) of $(4A)^{-1}$?
solution: $(4A)^{-1} = \frac{1}{4}A^{-1}$: $0.25$.
:::

::: problem id=p4 type=numeric answer="-2"
Apply $E = \begin{bmatrix} 1 & 0 \\ -3 & 1 \end{bmatrix}$ to $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$. What is entry (2, 2) of $EA$?
solution: $R_2 - 3R_1$: $4 - 3(2) = -2$.
:::

::: problem id=p5 type=choice
Which elementary matrix swaps rows 1 and 2 of a $2 \times 2$ matrix?
- [x] rows $(0, 1)$ and $(1, 0)$
- [ ] rows $(1, 0)$ and $(0, 1)$
- [ ] rows $(1, 1)$ and $(0, 1)$
- [ ] rows $(-1, 0)$ and $(0, 1)$
solution: Swap the rows of $I$.
:::

::: problem id=p6 type=choice
$A = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$. What is $AB$?
- [x] the zero matrix
- [ ] the identity
- [ ] $2A$
solution: Each entry is $1 - 1 = 0$. Neither factor is zero, but the product is: you can't "cancel" matrices.
:::

::: problem id=p7 type=numeric answer="1/3" tolerance=0.001 creative=true
The elementary matrix $E$ multiplies row 2 by 3. Its inverse $E^{-1}$ is also elementary: it multiplies row 2 by what number?
solution: To undo multiplying by 3, multiply by $\frac{1}{3} \approx 0.333$. Every row operation can be undone, so every elementary matrix is invertible.
:::
