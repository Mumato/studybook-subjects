---
id: lp-test
title: Lines and planes test
pass: 0.8
---
::: problem id=t1 type=numeric answer="11"
For the line $\vec{x} = (1, 2, 3) + t(2, -1, 4)$, what is $z$ when $t = 2$?
solution: $3 + 4(2) = 11$.
:::

::: problem id=t2 type=numeric answer="-3"
A line passes through $(1, 0, 2)$ and $(3, 4, -1)$. Using $\vec{d} = B - A$, what is the third component of $\vec{d}$?
solution: $-1 - 2 = -3$.
:::

::: problem id=t3 type=choice
Is $(7, -1, 15)$ on the line $\vec{x} = (1, 2, 3) + t(2, -1, 4)$?
- [x] Yes, at $t = 3$
- [ ] No
solution: $t = 3$ gives $(7, -1, 15)$ in all three components.
:::

::: problem id=t4 type=numeric answer="12"
The plane with normal $(2, -1, 4)$ through $(1, 2, 3)$ is $2x - y + 4z = d$. What is $d$?
solution: $2 - 2 + 12 = 12$.
:::

::: problem id=t5 type=numeric answer="2"
Find the distance from $(1, 1, 1)$ to the plane $2x - y + 2z = 9$.
solution: $|2 - 1 + 2 - 9| / 3 = 6/3 = 2$.
:::

::: problem id=t6 type=numeric answer="0.8"
The line $\vec{x} = (1, 2, 3) + t(2, -1, 4)$ meets the plane $x + y + z = 10$ at which $t$?
solution: $6 + 5t = 10$, so $t = 0.8$.
:::

::: problem id=t7 type=numeric answer="3"
The plane through $(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$ is $6x + 3y + 2z = 6$. What is the coefficient of $y$ in a normal vector of the form $(6, b, 2)$?
solution: The coefficients of the equation form the normal: $b = 3$.
:::

::: problem id=t8 type=choice
A normal vector of the plane $3x - 2y + z = 7$ is:
- [x] $(3, -2, 1)$
- [ ] $(7, 0, 0)$
- [ ] $(3, -2, 7)$
- [ ] $(1, 1, 1)$
solution: Read off the coefficients of $x$, $y$ and $z$.
:::
