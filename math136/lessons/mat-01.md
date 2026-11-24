---
id: mat-01
title: Matrices, sums and transposes
---
A **matrix** is a rectangle of numbers. An $m \times n$ matrix has $m$ rows and $n$ columns; $a_{ij}$ is the entry in row $i$, column $j$. (Nicholson ch. 2)

::: rule
- Matrices of the **same size** add entry by entry. A scalar multiplies every entry.
- The **transpose** $A^T$ turns rows into columns: the entry $(i, j)$ of $A^T$ is $a_{ji}$. An $m \times n$ matrix has an $n \times m$ transpose.
- $A$ is **square** if $m = n$, and **symmetric** if $A^T = A$.
- The **zero matrix** $0$ has all entries 0; the **identity** $I$ has 1s on the main diagonal and 0s elsewhere.
:::

::: example
$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \ B = \begin{bmatrix} 2 & 0 \\ 1 & -1 \end{bmatrix}$$
$$3A - 2B = \begin{bmatrix} -1 & 6 \\ 7 & 14 \end{bmatrix}$$
$$A^T = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$$
:::

::: problem id=p1 type=numeric answer="4"
With $A$ and $B$ from the example, what is entry (2, 1) of $A + B$?
solution: $3 + 1 = 4$.
:::

::: problem id=p2 type=numeric answer="14"
What is entry (2, 2) of $3A - 2B$? Check it yourself.
solution: $3(4) - 2(-1) = 12 + 2 = 14$.
:::

::: problem id=p3 type=numeric answer="3"
$C$ is $2 \times 3$ with rows $(1, 0, 2)$ and $(-1, 3, 1)$. How many rows does $C^T$ have?
solution: The transpose of a $2 \times 3$ matrix is $3 \times 2$: 3 rows.
:::

::: problem id=p4 type=numeric answer="2"
Same $C$. What is entry (3, 1) of $C^T$?
solution: Entry $(3, 1)$ of $C^T$ is entry $(1, 3)$ of $C$: 2.
:::

::: problem id=p5 type=numeric answer="5"
For the matrix below to be symmetric, what must $x$ be?
$$\begin{bmatrix} 2 & 5 & 0 \\ x & 1 & 7 \\ 0 & 7 & 3 \end{bmatrix}$$
solution: Symmetric means $a_{21} = a_{12}$: $x = 5$.
:::

::: problem id=p6 type=choice
Can a $2 \times 3$ matrix be added to a $3 \times 2$ matrix?
- [ ] Yes
- [x] No: sums need the same size
solution: There's no matching entry for each position.
:::

::: problem id=p7 type=numeric answer="5"
The **trace** of a square matrix is the sum of its diagonal entries. What is the trace of $A$ in the example?
solution: $1 + 4 = 5$.
:::
