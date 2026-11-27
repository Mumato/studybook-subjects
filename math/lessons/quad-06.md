---
id: quad-06
title: Nonlinear systems
---
In a **nonlinear system** at least one equation is not a line: a parabola, or a circle. The circle with centre $(0, 0)$ and radius r is $x^2 + y^2 = r^2$.

::: rule
**Substitution** (best when one equation is a line):
1. Solve the line for y (or x).
2. Put it into the other equation and solve the quadratic.
3. Find the other coordinate for **each** answer.

**Elimination** (when both have $x^2$ or both have $y^2$): add or subtract the equations to cancel a square.

A line meets a parabola or a circle in 0, 1 or 2 points. The discriminant of the quadratic in step 2 tells you which.
:::

::: example
$y = x^2$ and $y = x + 2$.

Set them equal: $x^2 = x + 2$.
$x^2 - x - 2 = 0$, $(x - 2)(x + 1) = 0$.

$x = 2$: $y = 4$. $x = -1$: $y = 1$.
Solutions $(2, 4)$ and $(-1, 1)$.
:::

::: graph
x -3..4
y -1..6
plot x^2 blue
plot x+2 red
point 2,4
point -1,1
:::

::: example
$x^2 + y^2 = 25$ and $y = x + 1$.

Substitute: $x^2 + (x + 1)^2 = 25$.
$2x^2 + 2x - 24 = 0$, so $x^2 + x - 12 = 0$.
$(x + 4)(x - 3) = 0$.

$x = 3$: $y = 4$. $x = -4$: $y = -3$.
:::

::: problem id=p1 type=point answer="2,4"
$y = x^2$ and $y = x + 2$ cross twice. Click the crossing with positive x.
graph:
x -3..4
y -1..6
plot x^2 blue
plot x+2 red
hint: Solve $x^2 = x + 2$.
solution: $x^2 - x - 2 = 0$ gives $x = 2$ or $-1$. With $x = 2$: $y = 4$, the point $(2, 4)$.
:::

::: problem id=p2 type=multi answers="2;-1"
Solve $y = x^2 - 1$ and $y = x + 1$. Type the two x-values.
solution: $x^2 - 1 = x + 1$, $x^2 - x - 2 = 0$, $(x - 2)(x + 1) = 0$: 2 and $-1$.
:::

::: problem id=p3 type=multi answers="3;-4"
Solve $x^2 + y^2 = 25$ and $y = x + 1$. Type the two x-values.
solution: $x^2 + (x + 1)^2 = 25$ gives $x^2 + x - 12 = 0$: $x = 3$ or $x = -4$.
:::

::: problem id=p4 type=numeric answer="1"
How many points do $y = x^2 + 1$ and $y = 2x$ share?
hint: Look at the discriminant of the equation you get.
solution: $x^2 - 2x + 1 = 0$: $D = 4 - 4 = 0$, so **1** point, $(1, 2)$. The line just touches.
:::

::: problem id=p5 type=choice
How many points do the circle $x^2 + y^2 = 9$ and the line $y = 3$ share?
- [ ] 0
- [x] 1
- [ ] 2
solution: $x^2 + 9 = 9$ gives $x = 0$ only. The line touches the top of the circle at $(0, 3)$.
:::

::: problem id=p6 type=multi answers="2;-3"
Solve $x^2 + y^2 = 13$ and $x^2 - y = 7$ by elimination. Type the y-values.
hint: Subtract the second equation from the first.
solution: $y^2 + y = 6$, $(y + 3)(y - 2) = 0$: $y = 2$ or $y = -3$. (Then $x = \pm 3$ or $x = \pm 2$.)
:::

::: problem id=p7 type=multi answers="3;7"
Two numbers add to 10 and multiply to 21. Find them.
solution: $x + y = 10$, $xy = 21$. So $x(10 - x) = 21$, $x^2 - 10x + 21 = 0$: 3 and 7.
:::

::: problem id=p8 type=numeric answer="8"
A rectangle has area 24 and perimeter 22. How long is its longer side?
hint: $l + w = 11$ and $lw = 24$.
solution: $w(11 - w) = 24$, $w^2 - 11w + 24 = 0$, $(w - 3)(w - 8) = 0$. Sides 3 and 8: **8**.
:::

::: problem id=x1 type=multi answers="2;-2" set=extra
Solve $y = x^2$ and $y = 4$. Type the x-values.
solution: $x^2 = 4$: $x = \pm 2$.
:::

::: problem id=x2 type=multi answers="0;3" set=extra
Solve $y = x^2$ and $y = 3x$. Type the x-values.
solution: $x^2 - 3x = 0$, $x(x - 3) = 0$: 0 and 3.
:::

::: problem id=x3 type=multi answers="2;-1" set=extra
Solve $y = x^2 + 2$ and $y = x + 4$. Type the x-values.
solution: $x^2 - x - 2 = 0$, $(x - 2)(x + 1) = 0$: 2 and $-1$.
:::

::: problem id=x4 type=multi answers="1;-1" set=extra
Solve $x^2 + y^2 = 10$ and $y = 3x$. Type the x-values.
solution: $x^2 + 9x^2 = 10$, $x^2 = 1$: $x = \pm 1$. (Points $(1, 3)$ and $(-1, -3)$.)
:::

::: problem id=x5 type=multi answers="1;4" set=extra
Solve $y = x^2 - 4x + 5$ and $y = x + 1$. Type the x-values.
solution: $x^2 - 5x + 4 = 0$, $(x - 1)(x - 4) = 0$: 1 and 4.
:::

::: problem id=x6 type=numeric answer="4" set=extra
$y = -x^2 + 6$ and $y = 2$ meet in two points. How far apart are they?
solution: $-x^2 + 6 = 2$, $x^2 = 4$, $x = \pm 2$. Points $(-2, 2)$ and $(2, 2)$: distance 4.
:::

::: problem id=x7 type=point answer="1,-1" set=extra
Click the crossing of $y = x^2 - 2$ and $y = -x$ with positive x.
graph:
x -4..3
y -3..5
plot x^2-2 blue
plot -x red
solution: $x^2 + x - 2 = 0$, $(x + 2)(x - 1) = 0$. $x = 1$ gives $y = -1$: $(1, -1)$.
:::

::: problem id=x8 type=numeric answer="0" set=extra
How many points do $y = x^2$ and $y = x - 1$ share?
solution: $x^2 - x + 1 = 0$: $D = 1 - 4 = -3 < 0$. **0** points.
:::

::: problem id=x9 type=choice set=extra
How many points can a line and a parabola share?
- [x] 0, 1 or 2
- [ ] always 2
- [ ] 0 to 4
- [ ] exactly 1
solution: Substituting gives a quadratic, which has 0, 1 or 2 real solutions.
:::

::: problem id=x10 type=numeric answer="1" set=extra
For which k does $y = x^2 + k$ touch $y = 2x$ in exactly one point?
hint: Set the discriminant to 0.
solution: $x^2 - 2x + k = 0$: $D = 4 - 4k = 0$, so $k = 1$.
:::

::: problem id=x11 type=choice set=extra
Ana solves $y = x^2$, $y = x + 6$. She gets $x = 3$ and says the only solution is $(3, 9)$. What did she miss?
- [x] $x = -2$ gives a second point $(-2, 4)$
- [ ] y should be 3, not 9
- [ ] There is no solution
- [ ] Nothing, she is right
solution: $x^2 - x - 6 = (x - 3)(x + 2)$, so $x = -2$ works too, with $y = 4$.
:::

::: problem id=x12 type=multi answers="4;-4" set=extra
Solve $x^2 + y^2 = 20$ and $x^2 - y^2 = 12$. Type the x-values.
hint: Add the equations.
solution: $2x^2 = 32$, $x^2 = 16$: $x = \pm 4$.
:::

::: problem id=x13 type=numeric answer="4" set=extra
How many points do $x^2 + y^2 = 20$ and $x^2 - y^2 = 12$ share?
solution: $x^2 = 16$ and $y^2 = 4$: $x = \pm 4$, $y = \pm 2$. **4** points.
:::

::: problem id=x14 type=multi answers="3;4" set=extra
Solve $x^2 + y^2 = 25$ and $x + y = 7$. Type the x-values.
solution: $y = 7 - x$: $x^2 + (7 - x)^2 = 25$. $2x^2 - 14x + 24 = 0$, $x^2 - 7x + 12 = 0$: 3 and 4.
:::

::: problem id=x15 type=numeric answer="8" set=extra
Two positive numbers differ by 3 and multiply to 40. What is the larger one?
solution: $x(x + 3) = 40$, $x^2 + 3x - 40 = 0$, $(x + 8)(x - 5) = 0$. $x = 5$, so the larger is **8**.
:::

::: problem id=x16 type=numeric answer="5" set=extra
A right triangle has legs adding to 17 and hypotenuse 13. How long is the shorter leg?
hint: $a + b = 17$ and $a^2 + b^2 = 169$.
solution: $a^2 + (17 - a)^2 = 169$. $2a^2 - 34a + 120 = 0$, $a^2 - 17a + 60 = 0$: $a = 5$ or 12. Shorter: **5**.
:::

::: problem id=x17 type=numeric answer="4" set=extra
A ball flies along $y = -x^2 + 6x$. A ramp is the line $y = x + 4$. The path meets the ramp twice. What is the larger x?
hint: Set them equal.
solution: $-x^2 + 6x = x + 4$, $x^2 - 5x + 4 = 0$, $(x - 1)(x - 4) = 0$. Larger: **4**.
:::

::: problem id=x18 type=multi answers="2;-3" set=extra
Solve $y = x^2 - 3$ and $x^2 + y^2 = 9$. Type the y-values.
hint: Replace $x^2$ by $y + 3$.
solution: $y + 3 + y^2 = 9$, $y^2 + y - 6 = 0$: $y = 2$ or $-3$. Both give $x^2 \ge 0$ ($5$ and $0$), so both work.
:::

::: problem id=x19 type=numeric answer="3" set=extra
How many points do $y = x^2 - 3$ and $x^2 + y^2 = 9$ share?
hint: Find the y-values first, then the x-values for each.
solution: $y = 2$ gives $x = \pm\sqrt{5}$ (2 points). $y = -3$ gives $x = 0$ (1 point). **3** in all.
:::

::: problem id=x20 type=numeric answer="4" set=extra creative=true
The line $y = x + b$ (with $b > 0$) touches the circle $x^2 + y^2 = 8$ in exactly one point. What is b?
hint: Substitute and set the discriminant to 0.
solution: $x^2 + (x + b)^2 = 8$ gives $2x^2 + 2bx + b^2 - 8 = 0$. $D = 4b^2 - 8(b^2 - 8) = 64 - 4b^2 = 0$, so $b = 4$.
:::
