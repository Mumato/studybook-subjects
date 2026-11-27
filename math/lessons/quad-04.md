---
id: quad-04
title: The discriminant
---
::: rule
The **discriminant** $D = b^2 - 4ac$ (the part under the root in the quadratic formula) tells you how many real solutions $ax^2 + bx + c = 0$ has:
- $D > 0$: **two** (the parabola crosses the x-axis twice)
- $D = 0$: **one** (it just touches)
- $D < 0$: **none** (it misses)
:::

::: example
$x^2 + 2x + 5$: $D = 4 - 20 = -16 < 0$, so no real solutions.
:::

::: graph
x -4..2
y -1..8
plot x^2+2x+5 blue
:::

::: problem id=p1 type=numeric answer="-16"
What is the discriminant of $x^2 + 2x + 5$?
solution: $2^2 - 4(1)(5) = -16$.
:::

::: problem id=p2 type=choice
How many real solutions does $x^2 - 6x + 9 = 0$ have?
- [ ] two
- [x] one
- [ ] none
solution: $D = 36 - 36 = 0$: **one**.
:::

::: problem id=p3 type=numeric answer="2"
How many real solutions does $2x^2 + x - 3 = 0$ have?
solution: $D = 1 + 24 = 25 > 0$: **2**.
:::

::: problem id=p4 type=numeric answer="0"
How many real solutions does $x^2 + x + 1 = 0$ have?
solution: $D = 1 - 4 = -3 < 0$: **0**.
:::

::: problem id=p5 type=numeric answer="6"
For which positive k does $x^2 + kx + 9 = 0$ have exactly one solution?
hint: Set $D = 0$.
solution: $k^2 - 36 = 0$, so $k = 6$.
:::

::: problem id=p6 type=text answers="no"
Does $y = x^2 + 1$ cross the x-axis? Type yes or no.
solution: $D = 0 - 4 < 0$ (and $x^2 + 1$ is always at least 1): **no**.
:::

::: problem id=p7 type=numeric answer="2"
How many x-intercepts does $y = x^2 - 4$ have?
solution: $D = 0 + 16 > 0$: two, at $x = \pm 2$.
:::

::: problem id=p8 type=point answer="2,0"
$y = x^2 - 4x + 4$ touches the x-axis exactly once. Click that point.
graph:
x -1..5
y -1..5
plot x^2-4x+4 blue
solution: $(x - 2)^2 = 0$ at $x = 2$: the point $(2, 0)$.
:::

::: problem id=c1 type=numeric answer="4" creative=true
For which number c does $x^2 + 4x + c = 0$ have exactly one solution?
hint: $D = 0$.
solution: $16 - 4c = 0$, so $c = 4$. Then $x^2 + 4x + 4 = (x + 2)^2$.
:::

::: problem id=x1 type=numeric answer="1" set=extra
What is the discriminant of $x^2 - 5x + 6$?
solution: $(-5)^2 - 4(1)(6) = 25 - 24 = 1$.
:::

::: problem id=x2 type=numeric answer="-23" set=extra
What is the discriminant of $2x^2 + 3x + 4$?
solution: $9 - 4(2)(4) = 9 - 32 = -23$.
:::

::: problem id=x3 type=numeric answer="1" set=extra
How many real solutions does $3x^2 - 6x + 3 = 0$ have?
solution: $D = 36 - 36 = 0$: **1**.
:::

::: problem id=x4 type=numeric answer="2" set=extra
How many real solutions does $x^2 - 2x - 7 = 0$ have?
solution: $D = 4 + 28 = 32 > 0$: **2**.
:::

::: problem id=x5 type=numeric answer="0" set=extra
How many real solutions does $5x^2 + 2x + 1 = 0$ have?
solution: $D = 4 - 20 = -16 < 0$: **0**.
:::

::: problem id=x6 type=choice set=extra
A quadratic equation has discriminant $-9$. What does that tell you?
- [x] It has no real solutions
- [ ] It has two solutions, $\pm 3$
- [ ] It has one solution
- [ ] It has two real solutions
solution: $D < 0$: the square root of a negative isn't real, so **no real solutions**.
:::

::: problem id=x7 type=numeric answer="0" set=extra
What is the discriminant of $4x^2 - 12x + 9$?
solution: $144 - 4(4)(9) = 144 - 144 = 0$. (It is $(2x - 3)^2$.)
:::

::: problem id=x8 type=numeric answer="8" set=extra
For which positive k does $x^2 - kx + 16 = 0$ have exactly one solution?
solution: $D = k^2 - 64 = 0$, so $k = 8$.
:::

::: problem id=x9 type=numeric answer="9" set=extra
For which c does $x^2 - 6x + c = 0$ have exactly one solution?
solution: $36 - 4c = 0$, so $c = 9$.
:::

::: problem id=x10 type=choice set=extra
A parabola crosses the x-axis twice. What is the sign of its discriminant?
- [x] positive
- [ ] zero
- [ ] negative
solution: Two x-intercepts means two real solutions: $D > 0$.
:::

::: problem id=x11 type=text answers="no" set=extra
Does $y = x^2 - 3x + 5$ cross the x-axis? Type yes or no.
solution: $D = 9 - 20 = -11 < 0$: **no**.
:::

::: problem id=x12 type=numeric answer="1" set=extra
How many x-intercepts does $y = -x^2 + 4x - 4$ have?
solution: $D = 16 - 4(-1)(-4) = 16 - 16 = 0$: **1**.
:::

::: problem id=x13 type=choice set=extra
Raj says $x^2 + 4 = 0$ has $D = 16$, so two solutions. What is right?
- [x] $D = -16$, so no real solutions
- [ ] $D = 16$, two solutions $\pm 2$
- [ ] $D = 4$, two solutions
- [ ] $D = 0$, one solution
solution: $a = 1$, $b = 0$, $c = 4$: $D = 0 - 16 = -16 < 0$.
:::

::: problem id=x14 type=choice set=extra
For which c does $x^2 + 2x + c = 0$ have two real solutions?
- [x] $c < 1$
- [ ] $c > 1$
- [ ] $c = 1$
- [ ] $c < 4$
solution: $D = 4 - 4c > 0$ means $c < 1$.
:::

::: problem id=x15 type=numeric answer="1" set=extra
A ball's height is $h = -5t^2 + 10t$. How many times is it exactly 5 m high?
solution: $-5t^2 + 10t - 5 = 0$: $D = 100 - 100 = 0$. **Once**, at the very top.
:::

::: problem id=x16 type=numeric answer="8" set=extra
What is the largest integer k for which $x^2 + 6x + k = 0$ has two real solutions?
solution: $36 - 4k > 0$, so $k < 9$. Largest integer: **8**.
:::

::: problem id=x17 type=numeric answer="4" set=extra
For which k does $kx^2 + 4x + 1 = 0$ have exactly one solution? ($k \ne 0$)
hint: Here $a = k$.
solution: $D = 16 - 4k = 0$, so $k = 4$.
:::

::: problem id=x18 type=numeric answer="3" set=extra
$x^2 + bx + 9 = 0$ has discriminant 0, and $b < 0$. Solve the equation.
hint: First find b.
solution: $b^2 - 36 = 0$, $b = -6$. Then $x^2 - 6x + 9 = (x - 3)^2 = 0$: $x = 3$.
:::

::: problem id=x19 type=choice set=extra
Which equation has two real solutions?
- [ ] $x^2 + x + 1 = 0$
- [ ] $x^2 - 4x + 4 = 0$
- [x] $2x^2 - x - 1 = 0$
- [ ] $x^2 + 9 = 0$
solution: The discriminants are $-3$, 0, $1 + 8 = 9$ and $-36$. Only $9 > 0$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
For how many integers c does $x^2 + 4x + c = 0$ have two real solutions that are **both negative**?
hint: The solutions are $-2 \pm \sqrt{4 - c}$.
solution: Two real: $4 - c > 0$, so $c < 4$. Both negative: $\sqrt{4 - c} < 2$, so $c > 0$. $c = 1, 2, 3$: **3**.
:::
