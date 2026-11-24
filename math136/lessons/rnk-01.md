---
id: rnk-01
title: Column space and null space
---
Every matrix comes with two important subspaces: the outputs it can reach, and the inputs it sends to zero. (Nicholson ch. 5)

::: rule
For an $m \times n$ matrix $A$:
- The **column space** $\text{col}(A)$ is the span of the columns: all $\vec{b}$ for which $A\vec{x} = \vec{b}$ is consistent. Basis: the columns of $A$ (the original ones) that get leading 1s in the RREF.
- The **null space** $\text{null}(A)$ is all solutions of $A\vec{x} = \vec{0}$. Basis: solve with free variables; each free variable gives one basis vector.
- The **row space** is the span of the rows; the nonzero rows of the RREF are a basis.
- The column space and the row space both have dimension $\text{rank}(A)$.
:::

::: example
$A$ has rows $(1, 2, 0, 3)$, $(2, 4, 1, 7)$, $(3, 6, 1, 10)$, and its RREF has rows $(1, 2, 0, 3)$, $(0, 0, 1, 1)$, $(0, 0, 0, 0)$.
Leading 1s in columns 1 and 3: $\text{col}(A)$ has basis $(1, 2, 3), (0, 1, 1)$.
Free variables $x_2 = s$, $x_4 = t$: $\vec{x} = s(-2, 1, 0, 0) + t(-3, 0, -1, 1)$, so $\text{null}(A)$ has dimension 2.
:::

::: problem id=p1 type=numeric answer="2"
What is the rank of $A$ in the example?
solution: Two leading 1s: rank 2.
:::

::: problem id=p2 type=numeric answer="-3"
In the example, the null space vector with $x_2 = 0$, $x_4 = 1$ has first component what?
solution: From the RREF, $x_1 = -2x_2 - 3x_4 = -3$.
:::

::: problem id=p3 type=numeric answer="2"
$B$ has rows $(1, -1, 2)$, $(2, -1, 5)$, $(1, 0, 3)$, and its RREF has rows $(1, 0, 3)$, $(0, 1, 1)$, $(0, 0, 0)$. What is $\dim \text{col}(B)$?
solution: Two leading 1s: rank 2.
:::

::: problem id=p4 type=numeric answer="-3"
Same $B$. Its null space is spanned by one vector $(a, -1, 1)$. What is $a$?
solution: $x_3 = t$ is free; $x_1 = -3t$, $x_2 = -t$. With $t = 1$: $(-3, -1, 1)$.
:::

::: problem id=p5 type=choice
For the matrix $D$ with columns $(1, 2, 3)$, $(3, 6, 9)$, $(2, 5, 7)$, the RREF has leading 1s in columns 1 and 3. A basis of $\text{col}(D)$ is:
- [x] $(1, 2, 3)$ and $(2, 5, 7)$
- [ ] $(1, 0, 0)$ and $(0, 1, 0)$
- [ ] all three columns
solution: Take the **original** columns in the pivot positions. Column 2 is $3 \times$ column 1, so it adds nothing.
:::

::: problem id=p6 type=choice
$A\vec{x} = \vec{b}$ is consistent exactly when:
- [x] $\vec{b}$ is in the column space of $A$
- [ ] $\vec{b}$ is in the null space of $A$
- [ ] $\vec{b} = \vec{0}$
solution: $A\vec{x}$ is a combination of the columns with weights $x_i$.
:::

::: problem id=p7 type=numeric answer="4"
$A$ is $3 \times 4$. The null space of $A$ is a subspace of $\mathbb{R}^k$ for which $k$?
solution: $\vec{x}$ has as many components as $A$ has columns: $\mathbb{R}^4$.
:::
