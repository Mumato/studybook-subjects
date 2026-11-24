---
id: vec-01
title: Vectors and linear combinations
---
A **vector** in $\mathbb{R}^n$ is an ordered list of $n$ numbers. Think of it as an arrow (a direction and a length) or as a point. (Nicholson ch. 4)

::: rule
- Write $\vec{v} = (v_1, v_2, \dots, v_n)$, or as a column. Two vectors are equal when every component matches.
- **Add** component by component; **multiply by a scalar** $c$ by multiplying every component: $c\vec{v} = (cv_1, \dots, cv_n)$.
- A **linear combination** of $\vec{v}_1, \dots, \vec{v}_k$ is $c_1\vec{v}_1 + \dots + c_k\vec{v}_k$.
- Adding arrows: place them tip to tail. $-\vec{v}$ points the opposite way.
:::

::: example
$\vec{u} = (2, -1, 3)$ and $\vec{v} = (1, 4, -2)$.
$\vec{u} + \vec{v} = (3, 3, 1)$. For $2\vec{u} - 3\vec{v}$: $2\vec{u} = (4, -2, 6)$ and $3\vec{v} = (3, 12, -6)$, so
$$2\vec{u} - 3\vec{v} = (1, -14, 12)$$
:::

::: graph
x -1..5
y -1..4
point 3,1 u blue
point 1,2 v red
point 4,3 u+v green
segment 0,0 3,1
segment 0,0 1,2
segment 0,0 4,3
segment 3,1 4,3
segment 1,2 4,3
:::

::: problem id=p1 type=numeric answer="-14"
With $\vec{u} = (2, -1, 3)$ and $\vec{v} = (1, 4, -2)$, what is the second component of $2\vec{u} - 3\vec{v}$?
solution: $2(-1) - 3(4) = -2 - 12 = -14$.
:::

::: problem id=p2 type=numeric answer="7"
What is the first component of $3(1, 0, 2) + 2(2, -1, 5)$?
solution: $3(1) + 2(2) = 7$. (The whole vector is $(7, -2, 16)$.)
:::

::: problem id=p3 type=numeric answer="16"
Same combination: $3(1, 0, 2) + 2(2, -1, 5)$. What is its third component?
solution: $3(2) + 2(5) = 16$.
:::

::: problem id=p4 type=numeric answer="4"
Find $c$ so that $c(1, 3) + (2, -5) = (6, 7)$.
solution: First components: $c + 2 = 6$, so $c = 4$. Check: $4(3) - 5 = 7$. ✓
:::

::: problem id=p5 type=numeric answer="2"
Write $(4, 7)$ as $a(1, 2) + b(2, 3)$. What is $a$?
hint: Solve $a + 2b = 4$ and $2a + 3b = 7$.
solution: From the first, $a = 4 - 2b$. Then $2(4 - 2b) + 3b = 7$, so $b = 1$ and $a = 2$.
:::

::: problem id=p6 type=point answer="3,-2"
Plot $\vec{a} - \vec{b}$ for $\vec{a} = (1, 2)$ and $\vec{b} = (-2, 4)$.
graph:
x -5..5
y -5..5
solution: $(1 - (-2), \ 2 - 4) = (3, -2)$.
:::

::: problem id=p7 type=choice
$\vec{v}$ and $-2\vec{v}$ (for $\vec{v} \ne \vec{0}$):
- [x] point in opposite directions, and $-2\vec{v}$ is twice as long
- [ ] point the same way
- [ ] are perpendicular
solution: A negative scalar reverses the direction; its size, 2, doubles the length.
:::
