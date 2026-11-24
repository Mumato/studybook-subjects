---
id: sub-01
title: Span
---
Take some vectors and form every possible linear combination of them. The set you get is their **span**: everywhere you can reach using only those directions. (Nicholson ch. 5)

::: rule
- $\text{span}\{\vec{v}_1, \dots, \vec{v}_k\}$ = all vectors $c_1\vec{v}_1 + \dots + c_k\vec{v}_k$.
- To test whether $\vec{b}$ is in the span, solve $c_1\vec{v}_1 + \dots + c_k\vec{v}_k = \vec{b}$: put the $\vec{v}_i$ as **columns** of an augmented matrix with $\vec{b}$ last. Consistent means yes.
- In $\mathbb{R}^3$: the span of one nonzero vector is a line through the origin; of two non-parallel vectors, a plane through the origin.
- The vectors **span** $\mathbb{R}^n$ if every vector in $\mathbb{R}^n$ is in their span.
:::

::: example
Is $(1, 2, 3)$ in $\text{span}\{(1, 0, 1), (0, 1, 1)\}$? Solve $a(1, 0, 1) + b(0, 1, 1) = (1, 2, 3)$:
$a = 1$, $b = 2$, and the third component $a + b = 3$ ✓. Yes.
For $(1, 2, 4)$ the third component would need $a + b = 4$, but $a + b = 3$: not in the span.
:::

::: problem id=p1 type=numeric answer="1"
Write $(3, 5) = a(1, 1) + b(1, 2)$. What is $a$?
solution: $a + b = 3$ and $a + 2b = 5$ give $b = 2$, $a = 1$.
:::

::: problem id=p2 type=numeric answer="1"
Write $(4, 1, 7) = a(1, 0, 2) + b(2, 1, 3)$. What is $b$?
hint: The second component gives $b$ at once.
solution: Second components: $0a + b = 1$, so $b = 1$. Then $a = 4 - 2 = 2$, and the third component checks: $4 + 3 = 7$ ✓.
:::

::: problem id=p3 type=choice
Is $(1, 2, 4)$ in $\text{span}\{(1, 0, 1), (0, 1, 1)\}$?
- [ ] Yes
- [x] No
solution: The first two components force $a = 1$, $b = 2$, but then the third is $3$, not $4$.
:::

::: problem id=p4 type=choice
The span of $(1, 2, 3)$ and $(2, 4, 6)$ in $\mathbb{R}^3$ is:
- [x] a line through the origin
- [ ] a plane through the origin
- [ ] all of $\mathbb{R}^3$
solution: $(2, 4, 6) = 2(1, 2, 3)$: both point along the same line.
:::

::: problem id=p5 type=choice
Do $(1, 0)$ and $(1, 1)$ span $\mathbb{R}^2$?
- [x] Yes
- [ ] No
solution: Any $(x, y) = (x - y)(1, 0) + y(1, 1)$.
:::

::: problem id=p6 type=numeric answer="5"
For which $h$ is $(3, h)$ in $\text{span}\{(3, 5)\}$?
solution: It must be a multiple of $(3, 5)$: $c = 1$, so $h = 5$.
:::

::: problem id=p7 type=choice
Can two vectors span $\mathbb{R}^3$?
- [ ] Yes, if they aren't parallel
- [x] No: at most they span a plane
solution: Two vectors give at most 2 independent directions. $\mathbb{R}^3$ needs 3.
:::
