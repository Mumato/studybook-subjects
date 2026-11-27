---
id: fact-05
title: Solving equations by factoring
---
::: rule
**Zero product rule:** if $a \times b = 0$, then $a = 0$ or $b = 0$.

To solve a quadratic equation:
1. Move everything to one side so the other side is 0.
2. Factor.
3. Set each factor equal to 0 and solve.

The solutions are where the graph crosses the x-axis.
:::

::: example
$x^2 - 5x + 6 = 0$ becomes $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.
:::

::: graph
x -1..5
y -2..4
plot x^2-5x+6 blue
point 2,0
point 3,0
:::

::: problem id=p1 type=multi answers="3;-4"
Solve $(x - 3)(x + 4) = 0$. Type both, like 1, -2.
solution: $x - 3 = 0$ or $x + 4 = 0$: $x = 3$ or $x = -4$.
:::

::: problem id=p2 type=multi answers="-2;-3"
Solve $x^2 + 5x + 6 = 0$.
solution: $(x + 2)(x + 3) = 0$: $x = -2$ or $x = -3$.
:::

::: problem id=p3 type=multi answers="4;-4"
Solve $x^2 - 16 = 0$.
solution: $(x + 4)(x - 4) = 0$: $x = 4$ or $x = -4$.
:::

::: problem id=p4 type=multi answers="0;7"
Solve $x^2 = 7x$.
hint: Don't divide by x, you'd lose a solution. Move 7x over.
solution: $x^2 - 7x = 0$, $x(x - 7) = 0$: $x = 0$ or $x = 7$.
:::

::: problem id=p5 type=multi answers="0;4"
Solve $2x^2 - 8x = 0$.
solution: $2x(x - 4) = 0$: $x = 0$ or $x = 4$.
:::

::: problem id=p6 type=numeric answer="3"
Solve $x^2 - 6x + 9 = 0$.
solution: $(x - 3)^2 = 0$, so $x = 3$ (the only solution).
:::

::: problem id=p7 type=numeric answer="4"
A rectangle's area is 24 and its length is 2 more than its width. What is the width?
hint: $w(w + 2) = 24$.
solution: $w^2 + 2w - 24 = 0$, $(w + 6)(w - 4) = 0$. A width can't be negative, so $w = 4$.
:::

::: problem id=p8 type=point answer="3,0"
Here is $y = x^2 - 2x - 3$. Click where it crosses the x-axis on the right.
graph:
x -3..5
y -5..5
plot x^2-2x-3 blue
hint: Solve $x^2 - 2x - 3 = 0$.
solution: $(x - 3)(x + 1) = 0$: it crosses at $x = -1$ and $x = 3$. On the right: $(3, 0)$.
:::

::: problem id=c1 type=numeric answer="4" creative=true
A positive number is 12 less than its own square. What is it?
hint: $x^2 - 12 = x$.
solution: $x^2 - x - 12 = 0$, $(x - 4)(x + 3) = 0$. Positive: **4**. Check: $16 - 12 = 4$.
:::

::: problem id=x1 type=multi answers="-5;2" set=extra
Solve $(x + 5)(x - 2) = 0$.
solution: $x + 5 = 0$ or $x - 2 = 0$: $x = -5$ or $x = 2$.
:::

::: problem id=x2 type=multi answers="0;9" set=extra
Solve $x(x - 9) = 0$.
solution: $x = 0$ or $x - 9 = 0$: $x = 0$ or $x = 9$.
:::

::: problem id=x3 type=multi answers="-2;-5" set=extra
Solve $x^2 + 7x + 10 = 0$.
solution: $(x + 2)(x + 5) = 0$: $x = -2$ or $x = -5$.
:::

::: problem id=x4 type=multi answers="3;-2" set=extra
Solve $x^2 - x - 6 = 0$.
solution: $(x - 3)(x + 2) = 0$: $x = 3$ or $x = -2$.
:::

::: problem id=x5 type=multi answers="5;-5" set=extra
Solve $x^2 - 25 = 0$.
solution: $(x + 5)(x - 5) = 0$: $x = 5$ or $x = -5$.
:::

::: problem id=x6 type=multi answers="-2/3;4" set=extra
Solve $(3x + 2)(x - 4) = 0$.
solution: $3x + 2 = 0$ gives $x = -\frac{2}{3}$. $x - 4 = 0$ gives $x = 4$.
:::

::: problem id=x7 type=multi answers="0;-6" set=extra
Solve $x^2 = -6x$.
solution: $x^2 + 6x = 0$, $x(x + 6) = 0$: $x = 0$ or $x = -6$.
:::

::: problem id=x8 type=numeric answer="-5" set=extra
Solve $x^2 + 10x + 25 = 0$.
solution: $(x + 5)^2 = 0$, so $x = -5$ (the only solution).
:::

::: problem id=x9 type=multi answers="-5;3" set=extra
Solve $x^2 + 2x = 15$.
hint: Get 0 on one side first.
solution: $x^2 + 2x - 15 = 0$, $(x + 5)(x - 3) = 0$: $x = -5$ or $x = 3$.
:::

::: problem id=x10 type=numeric answer="0" set=extra
Sam solves $x^2 = 4x$ by dividing both sides by x and gets $x = 4$. Which solution did he lose?
solution: $x^2 - 4x = 0$, $x(x - 4) = 0$: $x = 0$ or $x = 4$. Dividing by x threw away **0**.
:::

::: problem id=x11 type=multi answers="4;-2" set=extra
Solve $(x - 3)(x + 1) = 5$.
hint: The zero product rule needs 0 on one side. Expand and move the 5.
solution: $x^2 - 2x - 3 = 5$, so $x^2 - 2x - 8 = 0$ and $(x - 4)(x + 2) = 0$: $x = 4$ or $x = -2$.
:::

::: problem id=x12 type=multi answers="1/2;-3" set=extra
Solve $2x^2 + 5x - 3 = 0$.
solution: $ac = -6$: 6 and $-1$. $2x(x + 3) - 1(x + 3)$ $= (2x - 1)(x + 3) = 0$: $x = \frac{1}{2}$ or $x = -3$.
:::

::: problem id=x13 type=point answer="1,0" set=extra
Here is $y = x^2 - 4x + 3$. Click where it crosses the x-axis on the left.
graph:
x -2..6
y -3..5
plot x^2-4x+3 blue
solution: $(x - 1)(x - 3) = 0$: it crosses at $x = 1$ and $x = 3$. On the left: $(1, 0)$.
:::

::: problem id=x14 type=numeric answer="8" set=extra
Two consecutive positive integers multiply to 72. What is the smaller one?
solution: $n(n + 1) = 72$, $n^2 + n - 72 = 0$, $(n + 9)(n - 8) = 0$. Positive: $n = 8$.
:::

::: problem id=x15 type=numeric answer="5" set=extra
A positive number squared is 10 more than 3 times the number. What is it?
solution: $x^2 = 3x + 10$, $x^2 - 3x - 10 = 0$, $(x - 5)(x + 2) = 0$. Positive: **5**.
:::

::: problem id=x16 type=multi answers="3/2;-3/2" set=extra
Solve $4x^2 - 9 = 0$.
hint: Difference of squares.
solution: $(2x + 3)(2x - 3) = 0$: $x = -\frac{3}{2}$ or $x = \frac{3}{2}$.
:::

::: problem id=x17 type=multi answers="0;2;-2" set=extra
Solve $x^3 - 4x = 0$. Type all three solutions.
hint: Take out x, then factor what's left.
solution: $x(x^2 - 4) = x(x + 2)(x - 2) = 0$: $x = 0$, $2$ or $-2$.
:::

::: problem id=x18 type=numeric answer="4" set=extra
A ball's height is $h = 20t - 5t^2$ metres after t seconds. After how many seconds does it land?
hint: Landing means $h = 0$, with $t > 0$.
solution: $5t(4 - t) = 0$: $t = 0$ (the throw) or $t = 4$. It lands after **4** s.
:::

::: problem id=x19 type=numeric answer="5" set=extra
A rectangle's length is 3 more than its width, and its area is 40. What is the width?
hint: $w(w + 3) = 40$.
solution: $w^2 + 3w - 40 = 0$, $(w + 8)(w - 5) = 0$. A width is positive: $w = 5$.
:::

::: problem id=x20 type=expression answer="x^2+2x-15" set=extra creative=true
Write an equation $x^2 + bx + c = 0$ whose solutions are 3 and $-5$. Type the left side.
hint: Work backwards from the factors.
solution: The factors are $(x - 3)(x + 5)$ $= x^2 + 2x - 15$.
:::
