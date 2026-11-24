---
id: sub-03
title: Subspaces, bases and dimension
---
Lines and planes through the origin are "smaller copies" of space inside $\mathbb{R}^n$. A **basis** is the smallest set of directions that builds one. (Nicholson ch. 5)

::: rule
- A **subspace** of $\mathbb{R}^n$ is a set that contains $\vec{0}$ and is closed under addition and scalar multiplication. Every span is a subspace.
- A **basis** of a subspace is an independent set that spans it.
- Every basis of a subspace has the same number of vectors: the **dimension**. $\dim \mathbb{R}^n = n$.
- In a subspace of dimension $k$: $k$ independent vectors automatically form a basis, and so do $k$ vectors that span.
:::

::: example
The plane $x + y + z = 0$ in $\mathbb{R}^3$ is a subspace (it contains $\vec{0}$). Solving, $x = -y - z$, so its vectors are $y(-1, 1, 0) + z(-1, 0, 1)$.
Basis: $\{(-1, 1, 0), (-1, 0, 1)\}$. Dimension 2.
:::

::: problem id=p1 type=numeric answer="2"
What is the dimension of the plane $x - 2y + 3z = 0$ in $\mathbb{R}^3$?
solution: One equation, two free variables ($y$ and $z$): dimension 2.
:::

::: problem id=p2 type=choice
Is the plane $x + y + z = 1$ a subspace of $\mathbb{R}^3$?
- [ ] Yes
- [x] No: it doesn't contain $\vec{0}$
solution: $0 + 0 + 0 \ne 1$. A subspace must pass through the origin.
:::

::: problem id=p3 type=numeric answer="1"
What is the dimension of the line $\text{span}\{(2, -1, 5)\}$?
solution: One nonzero vector is a basis: dimension 1.
:::

::: problem id=p4 type=numeric answer="2"
$(1, 1, 0)$, $(0, 1, 1)$, $(1, 2, 1)$, $(2, 3, 1)$ span a subspace $W$. Their rank is 2. What is $\dim W$?
solution: The dimension is the number of independent vectors among them: 2.
:::

::: problem id=p5 type=choice
Which set is a basis of $\mathbb{R}^2$?
- [ ] $\{(1, 2)\}$
- [x] $\{(1, 2), (3, 1)\}$
- [ ] $\{(1, 2), (2, 4)\}$
- [ ] $\{(1, 0), (0, 1), (1, 1)\}$
solution: Two independent vectors in a 2-dimensional space. ($\det = 1 - 6 = -5 \ne 0$.) The others are too few, dependent, or too many.
:::

::: problem id=p6 type=choice
Is $\{(x, y) : y = x^2\}$ a subspace of $\mathbb{R}^2$?
- [ ] Yes, it contains $(0, 0)$
- [x] No: it isn't closed under addition
solution: $(1, 1)$ and $(-1, 1)$ are in it, but their sum $(0, 2)$ isn't: $2 \ne 0^2$.
:::

::: problem id=p7 type=numeric answer="3"
What is the dimension of the subspace of $\mathbb{R}^5$ given by $x_1 = 0$ and $x_2 = 0$?
solution: Two independent conditions in 5 unknowns leave $x_3, x_4, x_5$ free: dimension 3.
:::

::: problem id=p8 type=choice creative=true
Three vectors in $\mathbb{R}^3$ are independent. Do they have to span $\mathbb{R}^3$?
- [x] Yes: 3 independent vectors in a 3-dimensional space form a basis
- [ ] No: they might lie in a plane
solution: If they lay in a plane (dimension 2), at most 2 could be independent. So they fill all of $\mathbb{R}^3$.
:::
