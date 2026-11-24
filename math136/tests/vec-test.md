---
id: vec-test
title: Vectors test
pass: 0.8
---
::: problem id=t1 type=numeric answer="12"
With $\vec{u} = (2, -1, 3)$ and $\vec{v} = (1, 4, -2)$, what is the third component of $2\vec{u} - 3\vec{v}$?
solution: $2(3) - 3(-2) = 6 + 6 = 12$.
:::

::: problem id=t2 type=numeric answer="-8"
Find $(2, -1, 3) \cdot (1, 4, -2)$.
solution: $2 - 4 - 6 = -8$.
:::

::: problem id=t3 type=numeric answer="sqrt(14)" tolerance=0.01
Find $\|(2, -1, 3)\|$. (A root, or 2 decimals.)
solution: $\sqrt{4 + 1 + 9} = \sqrt{14} \approx 3.74$.
:::

::: problem id=t4 type=numeric answer="90"
What is the angle, in degrees, between $(1, 2, 2)$ and $(2, 1, -2)$?
solution: The dot product is $2 + 2 - 4 = 0$: they're orthogonal, 90°.
:::

::: problem id=t5 type=numeric answer="4.2"
Find the first component of $\text{proj}_{\vec{u}}\vec{v}$ for $\vec{v} = (4, 2)$ and $\vec{u} = (3, 1)$.
solution: $\frac{14}{10}(3, 1) = (4.2, 1.4)$.
:::

::: problem id=t6 type=numeric answer="6"
Find the second component of $(1, 2, 3) \times (4, 5, 6)$.
solution: $3(4) - 1(6) = 6$.
:::

::: problem id=t7 type=numeric answer="sqrt(230)" tolerance=0.01
Find the area of the parallelogram with sides $(2, -1, 3)$ and $(1, 4, -2)$. (A root, or 2 decimals.)
solution: The cross product is $(-10, 7, 9)$, of length $\sqrt{100 + 49 + 81} = \sqrt{230} \approx 15.17$.
:::

::: problem id=t8 type=numeric answer="5"
What is the distance between the points $(0, 1, 2)$ and $(3, 5, 2)$?
solution: $\|(3, 4, 0)\| = 5$.
:::
