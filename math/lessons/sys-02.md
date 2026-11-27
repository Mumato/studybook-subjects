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

::: problem id=x1 type=numeric answer="2" set=extra
$y = 3x$ and $x + y = 8$. What is x?
solution: $x + 3x = 8$, $4x = 8$, $x = 2$.
:::

::: problem id=x2 type=numeric answer="6" set=extra
For the same system ($y = 3x$, $x + y = 8$), what is y?
solution: $x = 2$, so $y = 3(2) = 6$.
:::

::: problem id=x3 type=numeric answer="2" set=extra
$x = y + 2$ and $3x + y = 14$. What is y?
solution: $3(y + 2) + y = 14$, $4y + 6 = 14$, $y = 2$.
:::

::: problem id=x4 type=numeric answer="3" set=extra
$y = 2x - 3$ and $4x - y = 9$. What is x?
hint: Keep brackets: $4x - (2x - 3)$.
solution: $4x - 2x + 3 = 9$, $2x = 6$, $x = 3$.
:::

::: problem id=x5 type=numeric answer="5" set=extra
$y = -2x + 1$ and $3x + 2y = 4$. What is y?
solution: $3x + 2(-2x + 1) = 4$, so $-x + 2 = 4$ and $x = -2$. Then $y = 4 + 1 = 5$.
:::

::: problem id=x6 type=numeric answer="-1" set=extra
$x = 4 - 2y$ and $2x + 3y = 9$. What is y?
solution: $2(4 - 2y) + 3y = 9$, so $8 - y = 9$ and $y = -1$.
:::

::: problem id=x7 type=point answer="2,1" set=extra
Solve $y = x - 1$ and $2x + y = 5$, then click the solution.
graph:
x -1..5
y -2..5
solution: $2x + x - 1 = 5$, $3x = 6$, $x = 2$, $y = 1$.
:::

::: problem id=x8 type=choice set=extra
After substituting, you get $3 = 7$. How many solutions are there?
- [x] none
- [ ] one
- [ ] infinitely many
solution: A false statement means the lines never meet (they're parallel): **none**.
:::

::: problem id=x9 type=choice set=extra
For $3x + y = 7$ and $2x - 5y = 1$, what is the easiest first step?
- [x] Solve the first equation for y
- [ ] Solve the second equation for x
- [ ] Solve the first equation for x
solution: y has no number in front in the first equation: $y = 7 - 3x$, with no fractions.
:::

::: problem id=x10 type=numeric answer="3" set=extra
Tom puts $y = x + 2$ into $3x - y = 4$ and writes $3x - x + 2 = 4$. Find the correct x.
solution: The minus applies to all of $x + 2$: $3x - x - 2 = 4$. So $2x = 6$, $x = 3$.
:::

::: problem id=x11 type=numeric answer="6" set=extra
$y = 2x$ and $y = 5x - 9$. What is y?
solution: $2x = 5x - 9$, so $x = 3$ and $y = 6$.
:::

::: problem id=x12 type=numeric answer="3" set=extra
$x + 2y = 7$ and $x - y = 1$. What is x?
hint: Solve the second for x.
solution: $x = y + 1$. Then $y + 1 + 2y = 7$, $y = 2$, and $x = 3$.
:::

::: problem id=x13 type=numeric answer="36" set=extra
One number is 3 times another, and they add up to 48. What is the larger number?
solution: $a = 3b$ and $a + b = 48$. $4b = 48$, $b = 12$, $a = 36$.
:::

::: problem id=x14 type=numeric answer="10" set=extra
An adult ticket costs 4 dollars more than a child ticket. 2 adult and 3 child tickets cost 38 dollars. What does an adult ticket cost?
solution: $a = c + 4$. $2(c + 4) + 3c = 38$, $5c = 30$, $c = 6$. So $a = 10$ dollars.
:::

::: problem id=x15 type=choice set=extra
How many solutions does $y = 2x + 1$, $4x - 2y = -2$ have?
- [ ] none
- [ ] one
- [x] infinitely many
solution: $4x - 2(2x + 1) = -2$ gives $-2 = -2$, always true: **infinitely many**.
:::

::: problem id=x16 type=numeric answer="2" set=extra
$2x + 3y = 13$ and $x - 2y = -4$. What is x?
hint: Solve the second for x.
solution: $x = 2y - 4$. $2(2y - 4) + 3y = 13$, $7y = 21$, $y = 3$. Then $x = 2$.
:::

::: problem id=x17 type=numeric answer="4" set=extra
$y = \frac{x}{2} + 1$ and $3x - 4y = 2$. What is y?
hint: $4 \times (\frac{x}{2} + 1) = 2x + 4$.
solution: $3x - (2x + 4) = 2$, so $x = 6$. Then $y = 3 + 1 = 4$.
:::

::: problem id=x18 type=numeric answer="4" set=extra
$0.5x + y = 4$ and $y = x - 2$. What is x?
hint: Substitute, then combine $0.5x + x$.
solution: $0.5x + x - 2 = 4$, $1.5x = 6$, $x = 4$.
:::

::: problem id=x19 type=numeric answer="54" set=extra
A rectangle has perimeter 30. Its length is 3 less than twice its width. What is its area?
hint: $l = 2w - 3$ and $2l + 2w = 30$.
solution: $2(2w - 3) + 2w = 30$, $6w = 36$, $w = 6$, $l = 9$. Area $6 \times 9 = 54$.
:::

::: problem id=x20 type=numeric answer="-16" set=extra creative=true
For which c do $y = 2x + c$ and $y = -x + 8$ cross on the x-axis?
hint: On the x-axis, $y = 0$.
solution: $y = -x + 8$ meets the x-axis at $x = 8$. The other line must pass $(8, 0)$: $0 = 16 + c$, $c = -16$.
:::
