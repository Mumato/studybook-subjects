---
id: mat-02
title: Matrix multiplication
---
Matrix multiplication isn't entry by entry. Each entry of $AB$ is a dot product: a row of $A$ with a column of $B$. (Nicholson ch. 2)

::: rule
- If $A$ is $m \times n$ and $B$ is $n \times p$, then $AB$ is $m \times p$. The inside sizes must match.
- Entry $(i, j)$ of $AB$ = (row $i$ of $A$) $\cdot$ (column $j$ of $B$).
- A system of equations is one matrix equation: $A\vec{x} = \vec{b}$.
- In general $AB \ne BA$. But $A(BC) = (AB)C$, $A(B + C) = AB + AC$ and $AI = IA = A$.
:::

::: example
$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \ B = \begin{bmatrix} 2 & 0 \\ 1 & -1 \end{bmatrix}$$
$$AB = \begin{bmatrix} 4 & -2 \\ 10 & -4 \end{bmatrix}$$
Entry (2, 1): row $(3, 4)$ times column $(2, 1)$: $6 + 4 = 10$.
In the other order, $BA$ has rows $(2, 4)$ and $(-2, -2)$: not the same.
:::

::: problem id=p1 type=numeric answer="-4"
Using the example, what is entry (2, 2) of $AB$? Check it from row 2 of $A$ and column 2 of $B$.
solution: $(3, 4) \cdot (0, -1) = 0 - 4 = -4$.
:::

::: problem id=p2 type=numeric answer="22"
For $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, what is entry (2, 2) of $A^2$?
solution: $(3, 4) \cdot (2, 4) = 6 + 16 = 22$.
:::

::: problem id=p3 type=numeric answer="5"
$C$ has rows $(1, 0, 2)$ and $(-1, 3, 1)$. $D$ has rows $(3, 1)$, $(2, 1)$, $(1, 0)$. What is entry (1, 1) of $CD$?
solution: $(1, 0, 2) \cdot (3, 2, 1) = 3 + 0 + 2 = 5$.
:::

::: problem id=p4 type=numeric answer="3"
Same $C$ ($2 \times 3$) and $D$ ($3 \times 2$). How many rows does $DC$ have?
solution: $D$ is $3 \times 2$ and $C$ is $2 \times 3$, so $DC$ is $3 \times 3$.
:::

::: problem id=p5 type=numeric answer="-4"
$A$ has rows $(2, 1, 0)$ and $(1, -1, 3)$, and $\vec{x} = (1, 2, -1)$. What is the second entry of $A\vec{x}$?
solution: $1 - 2 - 3 = -4$. (The first is $2 + 2 + 0 = 4$.)
:::

::: problem id=p6 type=choice
$A$ is $3 \times 4$ and $B$ is $3 \times 4$. Which product is defined?
- [ ] $AB$
- [x] $AB^T$
- [ ] neither
solution: $AB$ needs $4 = 3$. $B^T$ is $4 \times 3$, so $AB^T$ is $3 \times 3$.
:::

::: problem id=p7 type=choice
$(A + B)^2$ equals $A^2 + 2AB + B^2$:
- [ ] always
- [x] only when $AB = BA$
- [ ] never
solution: $(A + B)^2 = A^2 + AB + BA + B^2$. The two middle terms combine only if they're equal.
:::
