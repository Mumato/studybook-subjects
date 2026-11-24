---
id: sys-02
title: Substitution
---
::: rule
1. Solve one equation for one variable (often it's already done, like $y = 2x$).
2. **Substitute** that into the other equation, which now has only one variable.
3. Solve it, then put the value back to find the other variable.
:::

::: example
$y = 2x$ and $x + y = 9$.

Substitute: $x + 2x = 9$, so $3x = 9$ and $x = 3$. Then $y = 2(3) = 6$. Solution: $(3, 6)$.
:::

::: problem id=p1 type=numeric answer="3"
$y = x + 3$ and $2x + y = 12$. What is x?
solution: $2x + (x + 3) = 12$, $3x = 9$, $x = 3$.
:::

::: problem id=p2 type=numeric answer="6"
For the same system ($y = x + 3$, $2x + y = 12$), what is y?
solution: $x = 3$, so $y = 3 + 3 = 6$.
:::

::: problem id=p3 type=numeric answer="5"
$x = 2y$ and $x + y = 15$. What is y?
solution: $2y + y = 15$, $3y = 15$, $y = 5$.
:::

::: problem id=p4 type=numeric answer="2"
$y = 3x - 1$ and $x + y = 7$. What is x?
solution: $x + 3x - 1 = 7$, $4x = 8$, $x = 2$.
:::

::: problem id=p5 type=numeric answer="6"
$y = -x + 10$ and $y = x + 2$. What is y?
hint: Set the two right sides equal to find x first.
solution: $-x + 10 = x + 2$, so $x = 4$ and $y = 6$.
:::

::: problem id=p6 type=numeric answer="4"
$x - y = 1$ and $y = 2x - 5$. What is x?
solution: $x - (2x - 5) = 1$, $-x + 5 = 1$, $x = 4$.
:::

::: problem id=p7 type=point answer="2,4"
Solve $y = 2x$ and $x + y = 6$, then click the solution.
graph:
x -1..5
y -1..7
solution: $x + 2x = 6$, so $x = 2$ and $y = 4$.
:::

::: problem id=p8 type=choice
After substituting, you get $5 = 5$. How many solutions are there?
- [ ] none
- [ ] one
- [x] infinitely many
solution: Always true means the equations are the same line: **infinitely many**.
:::
