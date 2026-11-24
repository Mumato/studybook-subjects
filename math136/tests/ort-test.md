---
id: ort-test
title: Orthogonality and least squares test
pass: 0.8
---
::: problem id=t1 type=numeric answer="2"
Write $(3, 1, 2)$ in the orthogonal basis $(1, 1, 0)$, $(1, -1, 0)$, $(0, 0, 1)$. What is $c_3$?
solution: $c_3 = \frac{2}{1} = 2$.
:::

::: problem id=t2 type=numeric answer="1"
Same vector and basis. What is $c_2$?
solution: $c_2 = \frac{3 - 1}{2} = 1$.
:::

::: problem id=t3 type=numeric answer="1"
Gram-Schmidt on $\vec{v}_1 = (1, 1, 1)$, $\vec{v}_2 = (0, 1, 2)$ gives $\vec{u}_2 = (-1, 0, c)$. What is $c$?
solution: The coefficient is $3/3 = 1$, so subtract $(1, 1, 1)$: $\vec{u}_2 = (-1, 0, 1)$.
:::

::: problem id=t4 type=numeric answer="-0.5"
Gram-Schmidt on $\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (1, 0, 1)$. What is the second component of $\vec{u}_2$?
solution: The coefficient is $1/2$, so subtract $(0.5, 0.5, 0)$: $\vec{u}_2 = (0.5, -0.5, 1)$.
:::

::: problem id=t5 type=numeric answer="0.6"
$Q$ has columns $(0.6, 0.8)$ and $(-0.8, 0.6)$. What is entry (1, 1) of $Q^{-1}$?
solution: $Q^{-1} = Q^T$, and entry (1, 1) is 0.6.
:::

::: problem id=t6 type=numeric answer="1"
The least-squares line through $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 4)$ is $y = a + bx$ with $a = 1.5$. What is $b$?
solution: The normal equations $4a + 6b = 12$ and $6a + 14b = 23$ give $b = 1$.
:::

::: problem id=t7 type=numeric answer="4"
How far is $(2, 3, 4)$ from the plane spanned by $(1, 1, 0)$ and $(1, -1, 0)$?
solution: The projection is $(2, 3, 0)$; the leftover $(0, 0, 4)$ has length 4.
:::

::: problem id=t8 type=choice
A least-squares solution solves:
- [ ] $A\vec{x} = \vec{b}$
- [x] $A^TA\vec{x} = A^T\vec{b}$
- [ ] $AA^T\vec{x} = \vec{b}$
solution: The normal equations.
:::
