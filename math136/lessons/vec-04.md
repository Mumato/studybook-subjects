---
id: vec-04
title: The cross product
---
Only in $\mathbb{R}^3$: the **cross product** of two vectors is a third vector perpendicular to both. Its length is the area of the parallelogram they span. (Nicholson ch. 4)

::: rule
$$\vec{u} \times \vec{v} = \begin{bmatrix} u_2v_3 - u_3v_2 \\ u_3v_1 - u_1v_3 \\ u_1v_2 - u_2v_1 \end{bmatrix}$$
- $\vec{u} \times \vec{v}$ is orthogonal to both $\vec{u}$ and $\vec{v}$.
- $\|\vec{u} \times \vec{v}\|$ = area of the parallelogram with sides $\vec{u}, \vec{v}$. A triangle is half of that.
- $\vec{v} \times \vec{u} = -(\vec{u} \times \vec{v})$, and $\vec{u} \times \vec{u} = \vec{0}$.
:::

::: example
$(1, 2, 3) \times (4, 5, 6)$:
first $2 \cdot 6 - 3 \cdot 5 = -3$, second $3 \cdot 4 - 1 \cdot 6 = 6$, third $1 \cdot 5 - 2 \cdot 4 = -3$.
So the result is $(-3, 6, -3)$. Check its dot product with $(1, 2, 3)$: $-3 + 12 - 9 = 0$.
:::

::: problem id=p1 type=numeric answer="-10"
Find the first component of $(2, -1, 3) \times (1, 4, -2)$.
solution: $(-1)(-2) - 3(4) = 2 - 12 = -10$.
:::

::: problem id=p2 type=numeric answer="7"
Same cross product: $(2, -1, 3) \times (1, 4, -2)$. What is the second component?
solution: $3(1) - 2(-2) = 3 + 4 = 7$.
:::

::: problem id=p3 type=numeric answer="9"
Same cross product. What is the third component?
solution: $2(4) - (-1)(1) = 8 + 1 = 9$. The result is $(-10, 7, 9)$.
:::

::: problem id=p4 type=numeric answer="sqrt(46)" tolerance=0.01
Find the area of the parallelogram with sides $(1, 0, 2)$ and $(0, 3, 1)$. (A root, or 2 decimals.)
solution: The cross product is $(0 - 6, \ 0 - 1, \ 3 - 0) = (-6, -1, 3)$. Area $= \sqrt{36 + 1 + 9} = \sqrt{46} \approx 6.78$.
:::

::: problem id=p5 type=numeric answer="2.5"
Find the area of the triangle with corners $(0, 0, 0)$, $(1, 2, 0)$ and $(3, 1, 0)$.
solution: Use the sides $(1, 2, 0)$ and $(3, 1, 0)$. Their cross product is $(0, 0, 1 - 6) = (0, 0, -5)$. Area $= \frac{1}{2}(5) = 2.5$.
:::

::: problem id=p6 type=numeric answer="-6"
$(1, 2, 3) \times (4, 5, 6) = (-3, 6, -3)$. What is the second component of $(4, 5, 6) \times (1, 2, 3)$?
solution: Swapping the order flips every sign: $(3, -6, 3)$. The second component is $-6$.
:::

::: problem id=p7 type=choice creative=true
$\vec{u} \times \vec{v} = \vec{0}$ for two nonzero vectors in $\mathbb{R}^3$. What does that tell you?
- [x] They are parallel: the parallelogram they span has zero area
- [ ] They are orthogonal
- [ ] One of them must be $\vec{0}$
solution: $\|\vec{u} \times \vec{v}\| = \|\vec{u}\|\,\|\vec{v}\|\sin\theta = 0$ means $\sin\theta = 0$: $\theta$ is 0° or 180°.
:::
