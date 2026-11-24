---
id: sub-02
title: Linear independence
---
Vectors are **independent** when none of them is redundant: no vector can be built from the others. (Nicholson ch. 5)

::: rule
- $\{\vec{v}_1, \dots, \vec{v}_k\}$ is **linearly independent** if $c_1\vec{v}_1 + \dots + c_k\vec{v}_k = \vec{0}$ only when every $c_i = 0$. Otherwise it's **dependent**.
- Test: put the vectors as columns and row-reduce. Independent exactly when every column has a leading 1 (rank = number of vectors).
- $n$ vectors in $\mathbb{R}^n$: independent exactly when $\det \ne 0$.
- More than $n$ vectors in $\mathbb{R}^n$ are always dependent. A set containing $\vec{0}$ is dependent.
:::

::: example
$\vec{v}_1 = (1, 2, 3)$, $\vec{v}_2 = (4, 5, 6)$, $\vec{v}_3 = (7, 8, 9)$: the matrix with these columns has determinant 0, so they're dependent.
Row reduction gives $c_1 = c_3$ and $c_2 = -2c_3$, so
$$\vec{v}_1 - 2\vec{v}_2 + \vec{v}_3 = \vec{0}$$
:::

::: problem id=p1 type=choice
Are $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 0)$ independent?
- [x] Yes: the determinant is $-2$
- [ ] No: the determinant is 0
solution: With these as columns, $\det = -2 \ne 0$.
:::

::: problem id=p2 type=numeric answer="6"
For which $k$ are $(1, 2)$ and $(3, k)$ dependent?
solution: $\det = k - 6 = 0$, so $k = 6$: then $(3, 6) = 3(1, 2)$.
:::

::: problem id=p3 type=numeric answer="5"
For which $k$ are $(1, 2, 1)$, $(2, k, 3)$, $(0, 1, 1)$ dependent?
solution: The determinant of the matrix with these columns works out to $k - 5$. It's 0 when $k = 5$.
:::

::: problem id=p4 type=choice
Four vectors in $\mathbb{R}^3$ are:
- [ ] always independent
- [x] always dependent
- [ ] independent if none is zero
solution: There are only 3 rows, so at most 3 leading 1s for 4 columns.
:::

::: problem id=p5 type=numeric answer="-2"
In the example, $(1, 2, 3) + c(4, 5, 6) + (7, 8, 9) = \vec{0}$. What is $c$?
solution: First components: $1 + 4c + 7 = 0$, so $c = -2$.
:::

::: problem id=p6 type=choice
$\{(1, 2), (0, 0)\}$ is:
- [ ] independent
- [x] dependent
solution: $0(1, 2) + 5(0, 0) = \vec{0}$ with a nonzero coefficient. Any set with $\vec{0}$ is dependent.
:::

::: problem id=p7 type=numeric answer="2"
The vectors $(1, 0, 1)$, $(2, 1, 3)$, $(0, 1, 1)$, $(1, 2, 3)$ have rank 2. What is the largest number of them that are independent?
solution: The rank counts independent columns: 2.
:::
