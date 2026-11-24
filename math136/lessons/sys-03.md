---
id: sys-03
title: Reduced row-echelon form and rank
---
Keep going past echelon form and you can read the solution straight off the matrix, including when there are infinitely many. (Nicholson ch. 1)

::: rule
- **Reduced row-echelon form (RREF):** echelon form where every leading entry is 1 and is the **only** nonzero entry in its column.
- The **rank** of a matrix is the number of leading 1s in its RREF.
- Unknowns in columns with a leading 1 are **leading variables**; the rest are **free** (parameters). Number of free variables = number of unknowns − rank.
- A consistent system has a unique solution if there are no free variables, and infinitely many otherwise.
- A **homogeneous** system ($\text{all constants} = 0$) always has the **trivial** solution $\vec{0}$.
:::

::: example
$x + 2y - z = 4$ and $2x + 4y + z = 11$ reduce to
$$\left[\begin{array}{ccc|c} 1 & 2 & 0 & 5 \\ 0 & 0 & 1 & 1 \end{array}\right]$$
Leading variables $x, z$; $y$ is free. Let $y = t$: the solutions are $x = 5 - 2t$, $y = t$, $z = 1$.
:::

::: problem id=p1 type=numeric answer="2"
In the example, what is the rank of the coefficient matrix?
solution: Two leading 1s: rank 2.
:::

::: problem id=p2 type=numeric answer="1"
In the example, how many free variables are there?
solution: 3 unknowns − rank 2 = 1.
:::

::: problem id=p3 type=numeric answer="0"
The system $x - y + 2z = 1$, $2x - y + 5z = 4$, $x + 3z = 3$ has the solutions $x = 3 - 3t$, $y = 2 - t$, $z = t$. What is $x$ when $z = 1$?
solution: $t = 1$: $x = 3 - 3 = 0$ (and $y = 1$). Check in the first equation: $0 - 1 + 2 = 1$.
:::

::: problem id=p4 type=numeric answer="-3"
Solve the homogeneous system $x + 2y - z = 0$, $2x + 5y + z = 0$. Its RREF gives $x = 7z$ and $y = -3z$. If $z = 1$, what is $y$?
solution: $y = -3(1) = -3$ (and $x = 7$).
:::

::: problem id=p5 type=choice
Which matrix is in **reduced** row-echelon form?
- [x] rows $[1 \ \ 0 \ \ 4]$ and $[0 \ \ 1 \ \ 2]$
- [ ] rows $[1 \ \ 3 \ \ 4]$ and $[0 \ \ 1 \ \ 2]$
- [ ] rows $[0 \ \ 1 \ \ 2]$ and $[1 \ \ 0 \ \ 4]$
- [ ] rows $[2 \ \ 0 \ \ 4]$ and $[0 \ \ 1 \ \ 2]$
solution: The second has a 3 above a leading 1, the third has the leading entries in the wrong order, the fourth has a leading 2.
:::

::: problem id=p6 type=numeric answer="2"
What is the rank of the matrix with rows $[1 \ \ 2 \ \ 0 \ \ 3]$, $[2 \ \ 4 \ \ 1 \ \ 7]$, $[3 \ \ 6 \ \ 1 \ \ 10]$?
hint: Row 3 = row 1 + row 2.
solution: Row reduction leaves two nonzero rows, $[1 \ \ 2 \ \ 0 \ \ 3]$ and $[0 \ \ 0 \ \ 1 \ \ 1]$: rank 2.
:::

::: problem id=p7 type=choice
A homogeneous system has 3 equations and 5 unknowns. It has:
- [ ] only the trivial solution
- [x] infinitely many solutions
- [ ] no solution
solution: It's consistent (it has $\vec{0}$), and rank $\le 3 < 5$, so there are at least 2 free variables.
:::

::: problem id=p8 type=choice creative=true
A consistent system has 4 equations in 4 unknowns and rank 4. How many solutions does it have?
- [x] exactly one
- [ ] infinitely many
- [ ] none
solution: Free variables = 4 − 4 = 0, so the solution is unique.
:::
