---
id: sys-02
title: Gaussian elimination
---
Instead of substituting by hand, work on the augmented matrix with **row operations** until the system is easy to solve from the bottom up. (Nicholson ch. 1)

::: rule
The three **elementary row operations** never change the solutions:
- swap two rows;
- multiply a row by a **nonzero** number;
- add a multiple of one row to another.

**Gaussian elimination:** use them to reach **row-echelon form** (zeros below each leading entry, each leading entry to the right of the one above). Then solve the last equation and **back-substitute** upward.
:::

::: example
$x + y + z = 2$, $2x + 3y + z = 3$, $x - y - 2z = -6$.
$R_2 - 2R_1$ and $R_3 - R_1$, then $R_3 + 2R_2$:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & -1 & -1 \\ 0 & 0 & -5 & -10 \end{array}\right]$$
So $z = 2$, then $y - 2 = -1$ gives $y = 1$, then $x + 1 + 2 = 2$ gives $x = -1$.
:::

::: problem id=p1 type=numeric answer="-2"
Solve $x + y + z = 6$, $2y + 5z = -4$, $2x + 5y - z = 27$. What is $z$?
hint: $R_3 - 2R_1$ gives $3y - 3z = 15$, so $y - z = 5$. Combine it with $2y + 5z = -4$.
solution: From $y = z + 5$: $2(z + 5) + 5z = -4$, so $7z = -14$ and $z = -2$.
:::

::: problem id=p2 type=numeric answer="3"
Same system. What is $y$?
solution: $y = z + 5 = 3$.
:::

::: problem id=p3 type=numeric answer="5"
Same system. What is $x$?
solution: $x = 6 - y - z = 6 - 3 + 2 = 5$.
:::

::: problem id=p4 type=numeric answer="-7"
Apply $R_2 - 3R_1$ to the augmented matrix with rows $[1 \ \ 2 \mid 5]$ and $[3 \ \ {-1} \mid 1]$. What is the new second entry of row 2?
solution: $-1 - 3(2) = -7$. The new row is $[0 \ \ {-7} \mid -14]$, so $y = 2$.
:::

::: problem id=p5 type=choice
Which is **not** an elementary row operation?
- [ ] Swap rows 1 and 3
- [x] Multiply row 2 by 0
- [ ] Add 4 times row 1 to row 2
- [ ] Multiply row 3 by $-\frac{1}{2}$
solution: Multiplying by 0 wipes out an equation, which can change the solutions. Scaling must use a nonzero number.
:::

::: problem id=p6 type=numeric answer="8"
A system has the echelon form below. What is $x$?
$$\left[\begin{array}{ccc|c} 1 & 2 & -1 & 4 \\ 0 & 1 & 3 & 5 \\ 0 & 0 & 2 & 4 \end{array}\right]$$
solution: $2z = 4$, so $z = 2$. $y = 5 - 3(2) = -1$. $x = 4 - 2(-1) + 2 = 8$.
:::

::: problem id=p7 type=choice
Row reduction of a system ends with the row $[0 \ \ 0 \ \ 0 \mid 1]$. The system has:
- [x] no solution
- [ ] exactly one solution
- [ ] infinitely many solutions
solution: That row says $0 = 1$, which is impossible: the system is inconsistent.
:::
