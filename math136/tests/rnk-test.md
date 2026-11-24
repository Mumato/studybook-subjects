---
id: rnk-test
title: Rank and nullity test
pass: 0.8
---
::: problem id=t1 type=numeric answer="2"
$A$ has rows $(1, 2, 1, 0)$, $(2, 4, 3, 1)$, $(1, 2, 2, 1)$; its RREF has rows $(1, 2, 0, -1)$, $(0, 0, 1, 1)$, $(0, 0, 0, 0)$. What is the rank?
solution: Two leading 1s: rank 2.
:::

::: problem id=t2 type=numeric answer="2"
Same $A$ (4 columns). What is its nullity?
solution: $4 - 2 = 2$.
:::

::: problem id=t3 type=numeric answer="1"
Same $A$. The null space vector with $x_2 = 0$ and $x_4 = 1$ has first component what?
solution: From the RREF, $x_1 = -2x_2 + x_4 = 1$ (and $x_3 = -x_4 = -1$).
:::

::: problem id=t4 type=choice
Same $A$. A basis of its column space is:
- [x] $(1, 2, 1)$ and $(1, 3, 2)$
- [ ] $(1, 2, 1)$ and $(2, 4, 2)$
- [ ] $(1, 0, 0)$ and $(0, 1, 0)$
solution: Leading 1s in columns 1 and 3: take those original columns.
:::

::: problem id=t5 type=numeric answer="5"
A $7 \times 8$ matrix has nullity 3. What is its rank?
solution: $8 - 3 = 5$.
:::

::: problem id=t6 type=numeric answer="4"
A $4 \times 4$ matrix has $\det A = 7$. What is its rank?
solution: Nonzero determinant: invertible, rank 4.
:::

::: problem id=t7 type=choice
The columns of a $3 \times 3$ matrix are dependent. Which is false?
- [ ] $\det A = 0$
- [x] $A\vec{x} = \vec{b}$ has a unique solution for every $\vec{b}$
- [ ] $\text{rank}(A) < 3$
solution: Dependent columns mean $A$ isn't invertible, so solutions are never unique.
:::

::: problem id=t8 type=choice
$\vec{b}$ is not in the column space of $A$. Then $A\vec{x} = \vec{b}$:
- [x] has no solution
- [ ] has one solution
- [ ] has infinitely many
solution: Consistent exactly when $\vec{b}$ is a combination of the columns.
:::
