---
id: ort-01
title: Orthogonal bases and matrices
---
When basis vectors are all perpendicular to each other, finding coordinates no longer needs row reduction: each one is a single dot product. (Nicholson ch. 8)

::: rule
- A set is **orthogonal** if every pair of different vectors has dot product 0. Nonzero orthogonal vectors are always independent.
- **Orthonormal:** orthogonal, and every vector has length 1.
- If $\{\vec{u}_1, \dots, \vec{u}_k\}$ is an orthogonal basis of $W$ and $\vec{x}$ is in $W$, then
$$\vec{x} = c_1\vec{u}_1 + \dots + c_k\vec{u}_k$$
with
$$c_i = \frac{\vec{x} \cdot \vec{u}_i}{\|\vec{u}_i\|^2}$$
- A square matrix $Q$ with orthonormal columns is **orthogonal**: $Q^{-1} = Q^T$. It keeps lengths and angles.
:::

::: example
$\vec{u}_1 = (1, 1, 0)$, $\vec{u}_2 = (1, -1, 0)$, $\vec{u}_3 = (0, 0, 1)$ are orthogonal. For $\vec{x} = (3, 1, 2)$:
$c_1 = 4/2 = 2$, $c_2 = 2/2 = 1$, $c_3 = 2/1 = 2$.
Check: $2\vec{u}_1 + \vec{u}_2 + 2\vec{u}_3 = (3, 1, 2)$. ✓
:::

::: problem id=p1 type=choice
Is $\{(1, 2, 2), (2, 1, -2), (2, -2, 1)\}$ an orthogonal set?
- [x] Yes
- [ ] No
solution: $2 + 2 - 4 = 0$, $2 - 4 + 2 = 0$, $4 - 2 - 2 = 0$.
:::

::: problem id=p2 type=numeric answer="2"
Write $(5, -1, 4)$ in the orthogonal basis $(1, 1, 0)$, $(1, -1, 0)$, $(0, 0, 1)$. What is $c_1$?
solution: $c_1 = \frac{5 - 1}{2} = 2$.
:::

::: problem id=p3 type=numeric answer="3"
Same vector and basis. What is $c_2$?
solution: $c_2 = \frac{5 + 1}{2} = 3$.
:::

::: problem id=p4 type=numeric answer="1/3" tolerance=0.001
The vectors $(1, 2, 2)$, $(2, 1, -2)$, $(2, -2, 1)$ each have length 3. Dividing each by 3 makes them orthonormal. What is the first entry of $\frac{1}{3}(1, 2, 2)$? (A fraction, or 3 decimals.)
solution: $\frac{1}{3} \approx 0.333$.
:::

::: problem id=p5 type=numeric answer="-0.8"
$Q$ has columns $(0.6, 0.8)$ and $(-0.8, 0.6)$. It's orthogonal, so $Q^{-1} = Q^T$. What is entry (2, 1) of $Q^{-1}$?
solution: Entry (2, 1) of $Q^T$ is entry (1, 2) of $Q$: $-0.8$.
:::

::: problem id=p6 type=numeric answer="5"
$Q$ is orthogonal and $\|\vec{x}\| = 5$. What is $\|Q\vec{x}\|$?
solution: Orthogonal matrices keep lengths: 5.
:::

::: problem id=p7 type=choice
Which is true for any orthogonal matrix $Q$?
- [x] $Q^TQ = I$
- [ ] $Q = Q^T$
- [ ] $\det Q = 0$
solution: Orthonormal columns mean every column has dot product 1 with itself and 0 with the others.
:::
