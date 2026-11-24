---
id: sub-test
title: Span, independence and bases test
pass: 0.8
---
::: problem id=t1 type=numeric answer="2"
Write $(3, 5) = a(1, 1) + b(1, 2)$. What is $b$?
solution: Subtracting the equations: $b = 2$ (and $a = 1$).
:::

::: problem id=t2 type=choice
Is $(1, 2, 3)$ in $\text{span}\{(1, 0, 1), (0, 1, 1)\}$?
- [x] Yes: $(1, 2, 3) = 1(1, 0, 1) + 2(0, 1, 1)$
- [ ] No
solution: The third component checks: $1 + 2 = 3$.
:::

::: problem id=t3 type=numeric answer="6"
For which $k$ are $(1, 2)$ and $(3, k)$ dependent?
solution: $k - 6 = 0$.
:::

::: problem id=t4 type=choice
$(1, 2, 3)$, $(4, 5, 6)$, $(7, 8, 9)$ are:
- [ ] independent
- [x] dependent
solution: $(1, 2, 3) - 2(4, 5, 6) + (7, 8, 9) = \vec{0}$.
:::

::: problem id=t5 type=numeric answer="2"
What is the dimension of the plane $x + y + z = 0$?
solution: Two free variables: dimension 2.
:::

::: problem id=t6 type=numeric answer="3"
How many vectors are in any basis of $\mathbb{R}^3$?
solution: $\dim \mathbb{R}^3 = 3$.
:::

::: problem id=t7 type=choice
Which set is a subspace of $\mathbb{R}^3$?
- [x] the line $\text{span}\{(1, 2, 3)\}$
- [ ] the plane $z = 4$
- [ ] the vectors with $x \ge 0$
- [ ] the unit sphere
solution: A span always is. The others miss $\vec{0}$ or aren't closed under scaling.
:::

::: problem id=t8 type=numeric answer="5"
For which $k$ are $(1, 2, 1)$, $(2, k, 3)$, $(0, 1, 1)$ dependent?
solution: The determinant is $k - 5$, so $k = 5$.
:::
