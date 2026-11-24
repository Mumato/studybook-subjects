---
id: ort-02
title: Gram-Schmidt and projections
---
Any basis can be straightened into an orthogonal one by subtracting projections, one vector at a time. That's the **Gram-Schmidt process**. (Nicholson ch. 8)

::: rule
**Gram-Schmidt:** from a basis $\vec{v}_1, \vec{v}_2, \dots$:
- $\vec{u}_1 = \vec{v}_1$
- $\vec{u}_2 = \vec{v}_2 - \frac{\vec{v}_2 \cdot \vec{u}_1}{\|\vec{u}_1\|^2}\vec{u}_1$
- $\vec{u}_3 = \vec{v}_3$ minus its projections onto $\vec{u}_1$ and $\vec{u}_2$, and so on.

**Projection onto a subspace** $W$ with orthogonal basis $\vec{u}_1, \dots, \vec{u}_k$: add the projections onto each $\vec{u}_i$. It's the closest point of $W$ to $\vec{x}$.
:::

::: example
$\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (1, 0, 1)$. Keep $\vec{u}_1 = (1, 1, 0)$.
$\vec{v}_2 \cdot \vec{u}_1 = 1$ and $\|\vec{u}_1\|^2 = 2$, so $\vec{u}_2 = \vec{v}_2 - \frac{1}{2}\vec{u}_1$, which is $(0.5, -0.5, 1)$.
Check: $\vec{u}_1 \cdot \vec{u}_2 = 0.5 - 0.5 + 0 = 0$. ✓
:::

::: problem id=p1 type=numeric answer="-1"
Apply Gram-Schmidt to $\vec{v}_1 = (1, 1, 1)$, $\vec{v}_2 = (0, 1, 2)$. What is the first component of $\vec{u}_2$?
solution: $\frac{\vec{v}_2 \cdot \vec{u}_1}{\|\vec{u}_1\|^2} = \frac{3}{3} = 1$. $\vec{u}_2 = (0, 1, 2) - (1, 1, 1) = (-1, 0, 1)$.
:::

::: problem id=p2 type=numeric answer="0"
Same process. What is the second component of $\vec{u}_2$?
solution: $\vec{u}_2 = (-1, 0, 1)$.
:::

::: problem id=p3 type=numeric answer="3"
Project $\vec{x} = (2, 3, 4)$ onto the plane $W$ spanned by the orthogonal vectors $(1, 1, 0)$ and $(1, -1, 0)$. What is the second component of the projection?
solution: $\frac{5}{2}(1, 1, 0) + \frac{-1}{2}(1, -1, 0) = (2, 3, 0)$. Second component 3.
:::

::: problem id=p4 type=numeric answer="4"
Same $\vec{x}$ and $W$. How far is $\vec{x}$ from $W$?
solution: $\vec{x} - \text{proj} = (0, 0, 4)$, of length 4.
:::

::: problem id=p5 type=numeric answer="2"
Gram-Schmidt on $\vec{v}_1 = (2, 0)$, $\vec{v}_2 = (3, 2)$ gives $\vec{u}_2 = (0, b)$. What is $b$?
solution: $\vec{u}_2 = (3, 2) - \frac{6}{4}(2, 0)$. That's $(3, 2) - (3, 0) = (0, 2)$.
:::

::: problem id=p6 type=choice
Gram-Schmidt applied to dependent vectors will:
- [x] produce a zero vector at some step
- [ ] still produce a basis
- [ ] fail to start
solution: A vector already in the span of the earlier ones has nothing left after removing its projections.
:::

::: problem id=p7 type=choice creative=true
Why is the projection of $\vec{x}$ onto $W$ the **closest** point of $W$ to $\vec{x}$?
- [x] What's left over, $\vec{x} - \text{proj}$, is orthogonal to $W$, so moving within $W$ only adds distance (Pythagoras)
- [ ] Because projections are always shorter than $\vec{x}$
- [ ] It isn't always the closest
solution: Write $\vec{p}$ for the projection. For any $\vec{w}$ in $W$, $\vec{x} - \vec{p}$ is orthogonal to $\vec{p} - \vec{w}$, so by Pythagoras $\|\vec{x} - \vec{w}\|^2 = \|\vec{x} - \vec{p}\|^2 + \|\vec{p} - \vec{w}\|^2$.
:::
