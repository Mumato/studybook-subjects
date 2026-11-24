---
id: vec-02
title: Length and the dot product
---
The **dot product** multiplies two vectors into a single number. It gives lengths, distances and, in the next lesson, angles. (Nicholson ch. 4)

::: rule
- **Dot product:** $\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + \dots + u_nv_n$.
- **Length (norm):** $\|\vec{v}\| = \sqrt{\vec{v} \cdot \vec{v}} = \sqrt{v_1^2 + \dots + v_n^2}$.
- **Distance** between points $P$ and $Q$: $\|\vec{PQ}\|$, where $\vec{PQ} = Q - P$.
- A **unit vector** has length 1: $\frac{1}{\|\vec{v}\|}\vec{v}$ points the same way as $\vec{v}$.
- Rules: $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$, and $(c\vec{u}) \cdot \vec{v} = c(\vec{u} \cdot \vec{v})$.
:::

::: example
$\vec{u} = (2, -1, 3)$, $\vec{v} = (1, 4, -2)$.
$\vec{u} \cdot \vec{v} = 2 - 4 - 6 = -8$. $\|\vec{u}\| = \sqrt{4 + 1 + 9} = \sqrt{14} \approx 3.742$.
The unit vector in the direction of $(3, 4)$ is $\frac{1}{5}(3, 4) = (0.6, 0.8)$.
:::

::: problem id=p1 type=numeric answer="12"
Find $(1, 2, 3) \cdot (4, -5, 6)$.
solution: $4 - 10 + 18 = 12$.
:::

::: problem id=p2 type=numeric answer="3"
Find $\|(1, 2, 2)\|$.
solution: $\sqrt{1 + 4 + 4} = \sqrt{9} = 3$.
:::

::: problem id=p3 type=numeric answer="sqrt(21)" tolerance=0.01
Find $\|(1, 4, -2)\|$. (A root, or 2 decimals.)
solution: $\sqrt{1 + 16 + 4} = \sqrt{21} \approx 4.58$.
:::

::: problem id=p4 type=numeric answer="5"
What is the distance between the points $(1, 2, 3)$ and $(4, 6, 3)$?
solution: $Q - P = (3, 4, 0)$, length $\sqrt{9 + 16} = 5$.
:::

::: problem id=p5 type=numeric answer="2/3" tolerance=0.001
What is the second component of the unit vector in the direction of $(1, 2, 2)$?
solution: $\|(1, 2, 2)\| = 3$, so the unit vector is $(\frac{1}{3}, \frac{2}{3}, \frac{2}{3})$: second component $\frac{2}{3} \approx 0.667$.
:::

::: problem id=p6 type=numeric answer="30"
$\vec{u} \cdot \vec{v} = 5$. What is $(2\vec{u}) \cdot (3\vec{v})$?
solution: Scalars come out: $2 \times 3 \times 5 = 30$.
:::

::: problem id=p7 type=numeric answer="12"
$\|\vec{v}\| = 4$. What is $\|-3\vec{v}\|$?
solution: $|-3| \times 4 = 12$. Length can't be negative.
:::
