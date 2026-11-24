---
id: sys-test
title: Systems and row reduction test
pass: 0.8
---
::: problem id=t1 type=numeric answer="1"
Solve $x + 2y = 5$ and $3x - y = 1$. What is $x$?
solution: $x = 5 - 2y$; $3(5 - 2y) - y = 1$ gives $y = 2$, so $x = 1$.
:::

::: problem id=t2 type=numeric answer="1"
Solve $2x + y = 7$ and $x - y = 2$. What is $y$?
solution: Adding: $3x = 9$, $x = 3$, so $y = 1$.
:::

::: problem id=t3 type=numeric answer="2"
Solve $x + y + z = 2$, $2x + 3y + z = 3$, $x - y - 2z = -6$. What is $z$?
solution: Elimination gives $-5z = -10$, so $z = 2$ (with $y = 1$, $x = -1$).
:::

::: problem id=t4 type=choice
The system $x + 2y = 3$ and $2x + 4y = 7$ has:
- [x] no solution
- [ ] exactly one solution
- [ ] infinitely many solutions
solution: $R_2 - 2R_1$ gives $0 = 1$: inconsistent.
:::

::: problem id=t5 type=numeric answer="2"
How many free variables does a consistent system with 5 unknowns and rank 3 have?
solution: $5 - 3 = 2$.
:::

::: problem id=t6 type=numeric answer="3"
The RREF of a system is shown. With $y = t$, the solutions are $x = 5 - 2t$, $y = t$, $z = 1$. What is $x$ when $y = 1$?
$$\left[\begin{array}{ccc|c} 1 & 2 & 0 & 5 \\ 0 & 0 & 1 & 1 \end{array}\right]$$
solution: $x = 5 - 2(1) = 3$.
:::

::: problem id=t7 type=choice
Solve $x + 2y - z = 3$, $2x + 5y + z = 13$, $-x - y + 4z = 6$. Row reduction gives a row $[0 \ \ 0 \ \ 0 \mid 1]$. So:
- [x] there is no solution
- [ ] $z = 1$
- [ ] there are infinitely many solutions
solution: The row means $0 = 1$: the system is inconsistent.
:::

::: problem id=t8 type=choice
Every homogeneous system:
- [x] has at least one solution
- [ ] has exactly one solution
- [ ] has infinitely many solutions
- [ ] can be inconsistent
solution: $\vec{0}$ always works. It may or may not have others.
:::
