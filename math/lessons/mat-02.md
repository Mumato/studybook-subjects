---
id: mat-02
title: Matrix operations, determinants and inverses
---
Matrices can be added and multiplied like numbers, with a few new rules. The **inverse** matrix then solves a whole system in one step.

::: rule
- **Add/subtract:** same size only, entry by entry. **Scalar:** $kA$ multiplies every entry by k.
- **Multiply:** an $m \times n$ times an $n \times p$ gives $m \times p$. Entry $(i, j)$ of $AB$ is row i of A times column j of B, multiplied pair by pair and added. Usually $AB \ne BA$.
- **Identity** $I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$: $AI = IA = A$.
- **Determinant:** $\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$. For $3 \times 3$, expand along row 1:
$$a(ei - fh) - b(di - fg)$$
$$+\; c(dh - eg)$$
for rows $(a, b, c)$, $(d, e, f)$, $(g, h, i)$.
- **Inverse** (only if $\det \ne 0$):
$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$
- **Solving:** write the system as $AX = B$; then $X = A^{-1}B$.
:::

::: example
$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$
Entry $(1, 1)$: $1 \cdot 5 + 2 \cdot 7 = 19$.
Entry $(2, 1)$: $3 \cdot 5 + 4 \cdot 7 = 43$.
:::

::: example
Solve $2x + y = 4$, $5x + 3y = 11$.

$A = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}$, $\det A = 6 - 5 = 1$.

$A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}$.

$x = 3 \cdot 4 - 1 \cdot 11 = 1$
$y = -5 \cdot 4 + 2 \cdot 11 = 2$
:::

::: problem id=p1 type=numeric answer="2"
$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, $B = \begin{bmatrix} 5 & 0 \\ -1 & 2 \end{bmatrix}$. What is entry $(2, 1)$ of $A + B$?
solution: $3 + (-1) = 2$.
:::

::: problem id=p2 type=numeric answer="6"
$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$. What is entry $(1, 2)$ of $3A$?
solution: $3 \times 2 = 6$.
:::

::: problem id=p3 type=numeric answer="12"
What is entry $(2, 2)$ of this product?
$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} 2 & 0 \\ 1 & 3 \end{bmatrix}$$
hint: Row 2 of the first times column 2 of the second.
solution: $3 \cdot 0 + 4 \cdot 3 = 12$.
:::

::: problem id=p4 type=numeric answer="14"
$\det\begin{bmatrix} 5 & 2 \\ 3 & 4 \end{bmatrix} = ?$
solution: $5 \cdot 4 - 2 \cdot 3 = 14$.
:::

::: problem id=p5 type=numeric answer="22"
Find the determinant.
$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{bmatrix}$$
solution: $1(24 - 0) - 2(0 - 5) + 3(0 - 4)$
$= 24 + 10 - 12 = 22$.
:::

::: problem id=p6 type=numeric answer="-7/2"
Find the inverse of $\begin{bmatrix} 4 & 7 \\ 2 & 4 \end{bmatrix}$. What is its entry $(1, 2)$?
solution: $\det = 16 - 14 = 2$.
Inverse $= \frac{1}{2}\begin{bmatrix} 4 & -7 \\ -2 & 4 \end{bmatrix}$: entry $(1, 2)$ is $-\frac{7}{2}$.
:::

::: problem id=p7 type=choice
Which matrix has no inverse?
- [x] $\begin{bmatrix} 2 & 4 \\ 1 & 2 \end{bmatrix}$
- [ ] $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$
- [ ] $\begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$
- [ ] $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
solution: $2 \cdot 2 - 4 \cdot 1 = 0$: determinant 0, no inverse.
:::

::: problem id=p8 type=numeric answer="2"
Solve $3x + 2y = 7$, $x + y = 3$ with an inverse matrix. What is y?
solution: $A = \begin{bmatrix} 3 & 2 \\ 1 & 1 \end{bmatrix}$, $\det = 1$, $A^{-1} = \begin{bmatrix} 1 & -2 \\ -1 & 3 \end{bmatrix}$.
$y = -7 + 9 = 2$ (and $x = 7 - 6 = 1$).
:::

::: problem id=x1 type=numeric answer="7" set=extra
What is entry $(2, 2)$ of this difference?
$$\begin{bmatrix} 2 & -1 \\ 0 & 5 \end{bmatrix} - \begin{bmatrix} 1 & 3 \\ 4 & -2 \end{bmatrix}$$
solution: $5 - (-2) = 7$.
:::

::: problem id=x2 type=numeric answer="8" set=extra
What is entry $(1, 2)$ of $-2\begin{bmatrix} 3 & -4 \\ 1 & 0 \end{bmatrix}$?
solution: $-2 \times (-4) = 8$.
:::

::: problem id=x3 type=numeric answer="14" set=extra
$\det\begin{bmatrix} 2 & -3 \\ 4 & 1 \end{bmatrix} = ?$
solution: $2 \cdot 1 - (-3) \cdot 4 = 2 + 12 = 14$.
:::

::: problem id=x4 type=numeric answer="0" set=extra
$\det\begin{bmatrix} 6 & 3 \\ 4 & 2 \end{bmatrix} = ?$
solution: $12 - 12 = 0$.
:::

::: problem id=x5 type=numeric answer="11" set=extra
What is entry $(2, 1)$ of this product?
$$\begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}\begin{bmatrix} 3 & 4 \\ 5 & 6 \end{bmatrix}$$
solution: $2 \cdot 3 + 1 \cdot 5 = 11$.
:::

::: problem id=x6 type=choice set=extra
A is $2 \times 3$ and B is $3 \times 4$. What size is $AB$?
- [x] $2 \times 4$
- [ ] $3 \times 3$
- [ ] $4 \times 2$
- [ ] it is not defined
solution: The inner sizes match (3 and 3); the outer ones give $2 \times 4$.
:::

::: problem id=x7 type=choice set=extra
A is $2 \times 3$ and B is $2 \times 2$. Which product is defined?
- [x] $BA$ only
- [ ] $AB$ only
- [ ] both
- [ ] neither
solution: $BA$ is $(2 \times 2)(2 \times 3)$: inner sizes match. $AB$ is $(2 \times 3)(2 \times 2)$: 3 and 2 don't.
:::

::: problem id=x8 type=numeric answer="25" set=extra
Find the determinant.
$$\begin{bmatrix} 2 & 0 & 1 \\ 1 & 3 & 0 \\ 0 & 1 & 4 \end{bmatrix}$$
solution: $2(12 - 0) - 0 + 1(1 - 0) = 25$.
:::

::: problem id=x9 type=numeric answer="-5" set=extra
Find the inverse of $\begin{bmatrix} 3 & 1 \\ 5 & 2 \end{bmatrix}$. What is its entry $(2, 1)$?
solution: $\det = 6 - 5 = 1$. Inverse $\begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix}$: entry $-5$.
:::

::: problem id=x10 type=numeric answer="4/5" set=extra
Find the inverse of $\begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$. What is its entry $(1, 1)$?
solution: $\det = 8 - 3 = 5$.
Inverse $\frac{1}{5}\begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix}$: entry $\frac{4}{5}$.
:::

::: problem id=x11 type=numeric answer="4" set=extra
For which k does $\begin{bmatrix} k & 6 \\ 2 & 3 \end{bmatrix}$ have no inverse?
solution: $3k - 12 = 0$, so $k = 4$.
:::

::: problem id=x12 type=numeric answer="-2" set=extra
What is entry $(1, 2)$ of $I\begin{bmatrix} 7 & -2 \\ 3 & 5 \end{bmatrix}$, where I is the identity?
solution: $IA = A$, so the entry is unchanged: $-2$.
:::

::: problem id=x13 type=text answers="no" set=extra
$A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$, $B = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$. Is $AB = BA$? Type yes or no.
solution: $AB = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ but $BA = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$: **no**.
:::

::: problem id=x14 type=numeric answer="14" set=extra
Sam writes $\det\begin{bmatrix} 4 & 2 \\ 3 & 5 \end{bmatrix} = 4 \cdot 5 + 2 \cdot 3 = 26$. What is it really?
solution: Subtract the second product: $20 - 6 = 14$.
:::

::: problem id=x15 type=numeric answer="24" set=extra
Find the determinant.
$$\begin{bmatrix} 3 & 5 & 7 \\ 0 & 2 & 1 \\ 0 & 0 & 4 \end{bmatrix}$$
hint: Expand along the first column: it has two zeros.
solution: $3(2 \cdot 4 - 1 \cdot 0) = 24$: for a triangular matrix, multiply the diagonal.
:::

::: problem id=x16 type=numeric answer="4" set=extra
$A = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$. What is entry $(1, 2)$ of $A^2$?
solution: Row 1 times column 2: $1 \cdot 2 + 2 \cdot 1 = 4$.
:::

::: problem id=x17 type=numeric answer="-2" set=extra
Solve $2x + 5y = 1$, $x + 3y = 1$ with an inverse matrix. What is x?
hint: $\det = 6 - 5 = 1$.
solution: $A^{-1} = \begin{bmatrix} 3 & -5 \\ -1 & 2 \end{bmatrix}$.
$x = 3 - 5 = -2$, $y = -1 + 2 = 1$.
:::

::: problem id=x18 type=numeric answer="12" set=extra
A is $2 \times 2$ with $\det A = 3$. What is $\det(2A)$?
hint: Try $A = \begin{bmatrix} 3 & 0 \\ 0 & 1 \end{bmatrix}$.
solution: Each of $a, b, c, d$ doubles, so $ad - bc$ is multiplied by 4: $4 \times 3 = 12$.
:::

::: problem id=x19 type=numeric answer="24" set=extra
Store 1 sells apples at 3 dollars and pears at 2; store 2 at 4 and 1. You buy 5 apples and 4 pears. The costs are
$$\begin{bmatrix} 3 & 2 \\ 4 & 1 \end{bmatrix}\begin{bmatrix} 5 \\ 4 \end{bmatrix}$$
What does it cost at store 2?
hint: Row 2 of the price matrix times the column.
solution: $4 \cdot 5 + 1 \cdot 4 = 24$ dollars (store 1: 23).
:::

::: problem id=x20 type=multi answers="4;-4" set=extra creative=true
For which x is $\det\begin{bmatrix} x & 2 \\ 3 & x \end{bmatrix} = 10$? Type both values.
solution: $x^2 - 6 = 10$, so $x^2 = 16$ and $x = \pm 4$.
:::
