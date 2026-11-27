---
id: fun-test
title: Functions test
pass: 0.8
---
::: problem id=t1 type=numeric answer="11"
$f(x) = 4x - 1$. What is $f(3)$?
solution: $12 - 1 = 11$.
:::

::: problem id=t2 type=numeric answer="-2"
Which x is not in the domain of $\frac{1}{x + 2}$?
solution: $x = -2$.
:::

::: problem id=t3 type=choice
What is the range of $\sqrt{x}$?
- [x] $y \ge 0$
- [ ] all real numbers
- [ ] $y \le 0$
solution: Square roots are never negative.
:::

::: problem id=t4 type=numeric answer="8"
$f(x) = x + 2$ and $g(x) = 3x$. What is $f(g(2))$?
solution: $g(2) = 6$, $f(6) = 8$.
:::

::: problem id=t5 type=expression answer="(x-1)/4"
Find the inverse of $f(x) = 4x + 1$.
solution: $x = 4y + 1$, $y = \frac{x - 1}{4}$.
:::

::: problem id=t6 type=numeric answer="5"
$f(x) = 2x$. What is $f^{-1}(10)$?
solution: $2x = 10$, $x = 5$.
:::

::: problem id=t7 type=point answer="3,2"
Click the vertex of $y = (x - 3)^2 + 2$.
graph:
x -1..6
y -1..6
plot (x-3)^2+2 blue
solution: $(3, 2)$.
:::

::: problem id=t8 type=expression answer="x^2-5"
Write $y = x^2$ shifted down 5, as $y = \ldots$
solution: $y = x^2 - 5$.
:::

::: problem id=t9 type=choice
Which set of pairs (input, output) is a function?
- [x] $(1, 3), (2, 3), (3, 4)$
- [ ] $(1, 3), (1, 4), (2, 5)$
- [ ] $(0, 0), (0, 1)$
- [ ] $(2, 1), (3, 1), (2, 2)$
solution: Only the first has each input once.
:::

::: problem id=t10 type=choice
What is the domain of $\sqrt{x - 7}$?
- [x] $x \ge 7$
- [ ] $x \le 7$
- [ ] $x \ge -7$
- [ ] all real numbers
solution: $x - 7 \ge 0$, so $x \ge 7$.
:::

::: problem id=t11 type=numeric answer="-6"
What is the smallest output of $f(x) = (x + 1)^2 - 6$?
solution: The square is 0 at $x = -1$: smallest output $-6$.
:::

::: problem id=t12 type=expression answer="(x+2)^2-1"
$f(x) = x^2 - 1$ and $g(x) = x + 2$. Write $f(g(x))$.
solution: $f(x + 2) = (x + 2)^2 - 1$.
:::

::: problem id=t13 type=numeric answer="5"
$f(x) = 3x - 1$. What is $f(f(1))$?
solution: $f(1) = 2$, $f(2) = 5$.
:::

::: problem id=t14 type=expression answer="2x+5"
Find the inverse of $f(x) = \frac{x - 5}{2}$.
solution: $x = \frac{y - 5}{2}$, $2x = y - 5$, $y = 2x + 5$.
:::

::: problem id=t15 type=point answer="-1,2"
The graph of f passes through $(2, -1)$. Click the point the graph of $f^{-1}$ must pass through.
graph:
x -3..3
y -3..3
plot x green
point 2,-1 A blue
solution: Swap the coordinates: $(-1, 2)$.
:::

::: problem id=t16 type=expression answer="abs(x+3)-2"
Write $y = |x|$ moved left 3 and down 2, as $y = \ldots$ (type $|x|$ as abs(x)).
solution: $y = |x + 3| - 2$.
:::

::: problem id=t17 type=numeric answer="10"
$f(x) = x^2$ if $x < 1$, and $f(x) = 4 - x$ if $x \ge 1$. What is $f(-3) + f(3)$?
solution: $f(-3) = 9$ (first piece), $f(3) = 1$ (second piece). Sum 10.
:::

::: problem id=t18 type=multi answers="3;-5"
Where does $y = |x + 1| - 4$ cross the x-axis? Type both x-values.
solution: $|x + 1| = 4$: $x + 1 = 4$ or $-4$. So $x = 3$ or $x = -5$.
:::
