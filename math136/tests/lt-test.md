---
id: lt-test
title: Linear transformations test
pass: 0.8
---
::: problem id=t1 type=numeric answer="7"
$T(x, y) = (2x + y, \ x - 3y)$. What is the first component of $T(3, 1)$?
solution: $6 + 1 = 7$.
:::

::: problem id=t2 type=numeric answer="-3"
Same $T$. What is entry (2, 2) of its standard matrix?
solution: $T(\vec{e}_2) = (1, -3)$ is column 2: entry (2, 2) is $-3$.
:::

::: problem id=t3 type=numeric answer="-1"
$T(\vec{e}_1) = (1, 2)$ and $T(\vec{e}_2) = (3, -1)$. What is the second component of $T(2, 5)$?
solution: $2(2) + 5(-1) = -1$.
:::

::: problem id=t4 type=point answer="-2,1"
Plot the image of $(1, 2)$ under rotation by 90° counterclockwise.
graph:
x -3..3
y -3..3
point 1,2 P blue
solution: $(x, y) \mapsto (-y, x)$: $(-2, 1)$.
:::

::: problem id=t5 type=numeric answer="15"
A shape of area 3 is transformed by the matrix with rows $(3, 1)$ and $(1, 2)$. What is the new area?
solution: $|\det| = 5$; $5 \times 3 = 15$.
:::

::: problem id=t6 type=choice
"First $T$ (matrix $A$), then $S$ (matrix $B$)" has matrix:
- [ ] $AB$
- [x] $BA$
- [ ] $A + B$
solution: $S(T(\vec{x})) = B(A\vec{x}) = (BA)\vec{x}$.
:::

::: problem id=t7 type=numeric answer="2"
$T: \mathbb{R}^4 \to \mathbb{R}^3$ has a range of dimension 2. What is the dimension of its kernel?
solution: $4 - 2 = 2$.
:::

::: problem id=t8 type=choice
Which map is **not** linear?
- [ ] $T(x, y) = (y, x)$
- [ ] $T(x, y) = (0, 0)$
- [x] $T(x, y) = (x, y + 2)$
- [ ] $T(x, y) = (5x, -y)$
solution: $T(0, 0) = (0, 2) \ne \vec{0}$.
:::
