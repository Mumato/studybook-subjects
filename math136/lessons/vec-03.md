---
id: vec-03
title: Angles and projections
---
The dot product measures how much two vectors point the same way. That gives the angle between them, and the **projection** of one onto the other. (Nicholson ch. 4)

::: rule
- $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\| \cos\theta$, where $\theta$ is the angle between them (0° to 180°).
- $\vec{u} \cdot \vec{v} > 0$: acute angle. $= 0$: **orthogonal** (perpendicular). $< 0$: obtuse.
- **Projection** of $\vec{v}$ onto $\vec{u}$ (the shadow of $\vec{v}$ along $\vec{u}$):
$$\text{proj}_{\vec{u}}\vec{v} = \frac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2}\,\vec{u}$$
- $\vec{v} - \text{proj}_{\vec{u}}\vec{v}$ is orthogonal to $\vec{u}$.
:::

::: example
$\vec{v} = (4, 2)$, $\vec{u} = (3, 1)$. $\vec{v} \cdot \vec{u} = 14$, $\|\vec{u}\|^2 = 10$.
$\text{proj}_{\vec{u}}\vec{v} = 1.4(3, 1) = (4.2, 1.4)$. The rest, $(4, 2) - (4.2, 1.4) = (-0.2, 0.6)$, is orthogonal to $\vec{u}$: $-0.6 + 0.6 = 0$.
:::

::: problem id=p1 type=numeric answer="45"
What is the angle, in degrees, between $(1, 0)$ and $(1, 1)$?
solution: $\cos\theta = \frac{1}{1 \cdot \sqrt{2}} = \frac{1}{\sqrt{2}}$, so $\theta = 45°$.
:::

::: problem id=p2 type=numeric answer="60"
What is the angle, in degrees, between $(1, 1, 0)$ and $(0, 1, 1)$?
solution: $\cos\theta = \frac{1}{\sqrt{2}\sqrt{2}} = \frac{1}{2}$, so $\theta = 60°$.
:::

::: problem id=p3 type=numeric answer="0.96"
What is $\cos\theta$ for $(3, 4)$ and $(4, 3)$?
solution: $\frac{12 + 12}{5 \times 5} = \frac{24}{25} = 0.96$.
:::

::: problem id=p4 type=choice
Are $(1, 2, 2)$ and $(2, 1, -2)$ orthogonal?
- [x] Yes
- [ ] No
solution: $2 + 2 - 4 = 0$.
:::

::: problem id=p5 type=numeric answer="0.8"
Find $k$ so that $(k, 2, -1)$ and $(3, k, 4)$ are orthogonal.
solution: $3k + 2k - 4 = 0$, so $k = 0.8$.
:::

::: problem id=p6 type=numeric answer="10/9" tolerance=0.001
Find the first component of $\text{proj}_{\vec{u}}\vec{v}$ for $\vec{v} = (2, 0, 4)$ and $\vec{u} = (1, 2, 2)$. (A fraction, or 3 decimals.)
solution: $\vec{v} \cdot \vec{u} = 2 + 0 + 8 = 10$, $\|\vec{u}\|^2 = 9$. The projection is $\frac{10}{9}(1, 2, 2)$; first component $\frac{10}{9} \approx 1.111$.
:::

::: problem id=p7 type=choice
$\vec{u} \cdot \vec{v} = -6$ for two nonzero vectors. The angle between them is:
- [ ] acute
- [ ] a right angle
- [x] obtuse
solution: A negative dot product means $\cos\theta < 0$: between 90° and 180°.
:::
