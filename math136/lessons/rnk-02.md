---
id: rnk-02
title: The rank-nullity theorem
---
Every column of a matrix is either a pivot column or a free one. Counting both kinds gives one of the most useful equations in the course. (Nicholson ch. 5)

::: rule
**Rank-nullity theorem:** for an $m \times n$ matrix $A$,
$$\text{rank}(A) + \text{nullity}(A) = n$$
where $\text{nullity}(A) = \dim \text{null}(A)$ and $n$ is the number of **columns**.

**Invertible matrix theorem** (for $n \times n$ $A$): these are all equivalent:
$A$ is invertible; $\det A \ne 0$; $\text{rank}(A) = n$; $\text{null}(A) = \{\vec{0}\}$; the columns are independent; the columns span $\mathbb{R}^n$; $A\vec{x} = \vec{b}$ has a unique solution for every $\vec{b}$.
:::

::: example
A $5 \times 7$ matrix has rank 3. Its nullity is $7 - 3 = 4$: the solutions of $A\vec{x} = \vec{0}$ form a 4-dimensional subspace of $\mathbb{R}^7$.
Its column space has dimension 3 inside $\mathbb{R}^5$, so $A\vec{x} = \vec{b}$ is not consistent for every $\vec{b}$.
:::

::: problem id=p1 type=numeric answer="4"
A $5 \times 7$ matrix has rank 3. What is its nullity?
solution: $7 - 3 = 4$.
:::

::: problem id=p2 type=numeric answer="2"
A $4 \times 6$ matrix has nullity 4. What is its rank?
solution: $6 - 4 = 2$.
:::

::: problem id=p3 type=numeric answer="0"
A $3 \times 3$ matrix is invertible. What is its nullity?
solution: Rank 3, so nullity $3 - 3 = 0$: only $\vec{0}$ solves $A\vec{x} = \vec{0}$.
:::

::: problem id=p4 type=numeric answer="2"
A $3 \times 5$ matrix has rank 3, the most possible. What is its nullity?
solution: $5 - 3 = 2$. A wide matrix always has a nonzero null space.
:::

::: problem id=p5 type=choice
A $4 \times 4$ matrix has a nonzero vector in its null space. Then:
- [x] $\det A = 0$
- [ ] $A$ is invertible
- [ ] its columns span $\mathbb{R}^4$
solution: Nonzero null space breaks the invertible matrix theorem, so all its conditions fail.
:::

::: problem id=p6 type=choice
A $6 \times 4$ matrix has rank 4. Which is true?
- [x] $A\vec{x} = \vec{0}$ has only the trivial solution
- [ ] its columns span $\mathbb{R}^6$
- [ ] its nullity is 2
solution: Nullity $= 4 - 4 = 0$. But four vectors can't span $\mathbb{R}^6$.
:::

::: problem id=p7 type=numeric answer="3" creative=true
The solutions of $A\vec{x} = \vec{0}$ form a plane in $\mathbb{R}^5$ (dimension 2). What is the rank of $A$?
solution: $A$ has 5 columns: rank $= 5 - 2 = 3$.
:::
