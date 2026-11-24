---
id: sys-01
title: Linear systems and augmented matrices
---
A **linear system** is a set of equations where each unknown appears only to the first power, with no products of unknowns. Linear algebra starts with solving them. (Nicholson ch. 1)

::: rule
- A **solution** is a set of values that makes **every** equation true.
- Every linear system has **no solution**, **exactly one**, or **infinitely many**. (Two lines meet once, are parallel, or are the same line.)
- A system with at least one solution is **consistent**; one with none is **inconsistent**.
- The **augmented matrix** writes only the numbers: one row per equation, one column per unknown, then the constants after a bar.
:::

::: example
The system
$$\begin{aligned} x + 2y &= 5 \\ 3x - y &= 1 \end{aligned}$$
has the augmented matrix
$$\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 3 & -1 & 1 \end{array}\right]$$
From the first equation $x = 5 - 2y$. Then $3(5 - 2y) - y = 1$, so $y = 2$ and $x = 1$. Check: $1 + 4 = 5$ and $3 - 2 = 1$.
:::

::: problem id=p1 type=choice
Is $(x, y) = (3, 1)$ a solution of $2x + y = 7$ and $x - y = 2$?
- [x] Yes
- [ ] No: it only satisfies the first equation
- [ ] No: it only satisfies the second equation
solution: $2(3) + 1 = 7$ and $3 - 1 = 2$. Both hold.
:::

::: problem id=p2 type=numeric answer="3"
Solve $x + y = 7$ and $x - y = -1$. What is $x$?
hint: Add the two equations.
solution: Adding: $2x = 6$, so $x = 3$ (and $y = 4$).
:::

::: problem id=p3 type=numeric answer="4"
Same system. What is $y$?
solution: $y = 7 - 3 = 4$.
:::

::: problem id=p4 type=choice
Which equation is **linear**?
- [ ] $x^2 + y = 4$
- [ ] $xy = 6$
- [x] $3x - \sqrt{2}\,y + z = 0$
- [ ] $\sin x + y = 1$
solution: Each unknown appears to the first power and nothing multiplies two unknowns. A root of 2 as a **coefficient** is fine.
:::

::: problem id=p5 type=numeric answer="0"
Write the augmented matrix of $4x - y + 2z = 3$ and $x + 5z = -2$. What is entry (2, 2)?
solution: Row 2 is $[1 \ \ 0 \ \ 5 \mid -2]$: the second equation has no $y$, so the entry is 0.
:::

::: problem id=p6 type=choice
The equations $y = 2x + 1$ and $y = 2x - 3$ have:
- [x] no solution
- [ ] exactly one solution
- [ ] infinitely many solutions
solution: Same slope, different intercepts: parallel lines never meet. The system is inconsistent.
:::

::: problem id=p7 type=choice
Can a linear system have **exactly two** solutions?
- [ ] Yes, if it has two equations
- [x] No: it has 0, 1 or infinitely many
- [ ] Yes, if it has two unknowns
solution: If two different points are solutions, every point on the line through them is too.
:::
