---
id: pre-01
title: Polynomial graphs
---
::: rule
For a polynomial of degree n with leading coefficient a:
- **end behaviour:** odd degree goes opposite ways at the two ends (a > 0: down on the left, up on the right); even degree goes the same way at both ends (a > 0: both up)
- **zeros** are where the graph meets the x-axis; in factored form $(x - r)$ gives a zero at r
- a zero from a squared factor makes the graph **touch and bounce**; a single factor makes it **cross**
- at most $n - 1$ turning points
:::

::: example
$y = (x - 1)(x + 2)(x - 3)$: degree 3, zeros at 1, $-2$ and 3, y-intercept $(-1)(2)(-3) = 6$.
:::

::: graph
x -3..4
y -8..10
plot (x-1)(x+2)(x-3) blue
point 1,0
point -2,0
point 3,0
point 0,6
:::

::: problem id=p1 type=numeric answer="3"
What is the degree of $x^3 - 2x + 1$?
solution: The highest power is 3.
:::

::: problem id=p2 type=choice
What does $y = x^3$ do at its two ends?
- [x] down on the left, up on the right
- [ ] up at both ends
- [ ] up on the left, down on the right
solution: Odd degree, positive leading coefficient.
:::

::: problem id=p3 type=multi answers="1;-2;3"
What are the zeros of $(x - 1)(x + 2)(x - 3)$? Type all three.
solution: 1, $-2$ and 3.
:::

::: problem id=p4 type=point answer="3,0"
Here is $y = (x - 1)(x + 2)(x - 3)$. Click its largest zero.
graph:
x -3..4
y -8..10
plot (x-1)(x+2)(x-3) blue
solution: $(3, 0)$.
:::

::: problem id=p5 type=numeric answer="3"
What is the most turning points a degree 4 polynomial can have?
solution: $4 - 1 = 3$.
:::

::: problem id=p6 type=choice
What does $y = 2x^4 - x$ do at its two ends?
- [x] up at both ends
- [ ] down at both ends
- [ ] down on the left, up on the right
solution: Even degree, positive leading coefficient: up at both ends.
:::

::: problem id=p7 type=numeric answer="6"
What is the y-intercept of $y = (x - 1)(x + 2)(x - 3)$?
solution: $x = 0$: $(-1)(2)(-3) = 6$.
:::

::: problem id=p8 type=text answers="yes"
Does $y = x^2(x - 3)$ bounce off the x-axis at $x = 0$? Type yes or no.
solution: The factor $x^2$ is squared, so it touches and bounces: **yes**.
:::

::: problem id=x1 type=numeric answer="6" set=extra
What is the degree of $5x^4 - x^6 + 2$?
solution: The highest power is 6 (it doesn't have to come first).
:::

::: problem id=x2 type=numeric answer="-3" set=extra
What is the leading coefficient of $-3x^5 + 2x^2 + 7$?
solution: The term with the highest power is $-3x^5$: coefficient $-3$.
:::

::: problem id=x3 type=choice set=extra
What does $y = -2x^4 + x$ do at its two ends?
- [x] down at both ends
- [ ] up at both ends
- [ ] up on the left, down on the right
- [ ] down on the left, up on the right
solution: Even degree, negative leading coefficient: down at both ends.
:::

::: problem id=x4 type=multi answers="0;-3;5" set=extra
What are the zeros of $x(x + 3)(x - 5)$? Type all three.
solution: 0, $-3$ and 5.
:::

::: problem id=x5 type=multi answers="1/2;-4" set=extra
What are the zeros of $(2x - 1)(x + 4)$?
solution: $2x - 1 = 0$ gives $\frac{1}{2}$; $x + 4 = 0$ gives $-4$.
:::

::: problem id=x6 type=numeric answer="-6" set=extra
What is the y-intercept of $y = (x + 1)(x - 2)(x + 3)$?
solution: $x = 0$: $(1)(-2)(3) = -6$.
:::

::: problem id=x7 type=numeric answer="4" set=extra
What is the most turning points a degree 5 polynomial can have?
solution: $5 - 1 = 4$.
:::

::: problem id=x8 type=numeric answer="5" set=extra
What is the degree of $(x - 1)^2(x + 2)^3$?
solution: Add the powers: $2 + 3 = 5$.
:::

::: problem id=x9 type=choice set=extra
What does $y = (x - 2)^2(x + 1)$ do at $x = 2$?
- [x] touches the x-axis and bounces
- [ ] crosses the x-axis
- [ ] has a vertical asymptote
- [ ] nothing, 2 is not a zero
solution: $(x - 2)$ is squared, so the graph touches and bounces.
:::

::: problem id=x10 type=point answer="-1,0" set=extra
Here is $y = (x + 1)^2(x - 3)$. Click the zero where it bounces.
graph:
x -3..5
y -12..6
plot (x+1)^2*(x-3) blue
solution: The squared factor $(x + 1)^2$ gives the bounce at $(-1, 0)$. At 3 it crosses.
:::

::: problem id=x11 type=multi answers="0;3;-3" set=extra
What are the zeros of $x^3 - 9x$?
solution: $x(x^2 - 9) = x(x - 3)(x + 3)$: 0, 3, $-3$.
:::

::: problem id=x12 type=choice set=extra
A polynomial goes up on the left and down on the right. Which could it be?
- [x] $y = -x^3 + 4x$
- [ ] $y = x^3 - 4x$
- [ ] $y = x^4 - 1$
- [ ] $y = -x^2$
solution: Opposite ends need odd degree; falling to the right needs a negative leading coefficient.
:::

::: problem id=x13 type=expression answer="(x-1)(x+2)(x-3)" set=extra
Write the cubic with leading coefficient 1 and zeros 1, $-2$ and 3, as $y = \ldots$
solution: One factor $(x - r)$ per zero: $y = (x - 1)(x + 2)(x - 3)$.
:::

::: problem id=x14 type=text answers="cross;crosses;it crosses" set=extra
Does $y = (x + 2)^3$ cross or bounce at $x = -2$? Type cross or bounce.
solution: An odd power changes sign, so the graph **crosses** (flattening out as it goes through).
:::

::: problem id=x15 type=numeric answer="72" set=extra
An open box is made from a 10 by 10 sheet by cutting squares of side x from the corners: $V = x(10 - 2x)^2$. What is V when $x = 2$?
solution: $2(10 - 4)^2 = 2 \times 36 = 72$.
:::

::: problem id=x16 type=numeric answer="1" set=extra
At least how many real zeros must every cubic have?
hint: Think about where the two ends go.
solution: The ends go opposite ways (one up, one down), so the graph must cross the x-axis at least once: **1**.
:::

::: problem id=x17 type=multi answers="1;-1;2;-2" set=extra
Find all zeros of $x^4 - 5x^2 + 4$.
hint: Treat it as a quadratic in $x^2$.
solution: $(x^2 - 1)(x^2 - 4) = 0$.
$x = \pm 1$ and $x = \pm 2$.
:::

::: problem id=x18 type=numeric answer="2" set=extra
$y = a(x - 1)(x - 2)(x + 3)$ passes through $(0, 12)$. What is a?
hint: Put $x = 0$ in.
solution: $a(-1)(-2)(3) = 6a = 12$, so $a = 2$.
:::

::: problem id=x19 type=choice set=extra
Sam says $y = x^2(x - 4)$ has 3 different zeros. What is right?
- [ ] 3 zeros: 0, 2, 4
- [x] 2 zeros: 0 (a bounce) and 4
- [ ] 1 zero: 4
- [ ] 3 zeros: 0, 0, $-4$
solution: $x^2$ gives the zero 0 twice (a bounce), and $(x - 4)$ gives 4: two different zeros.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
$y = x^3 + bx^2 + cx$ has zeros 0, 2 and 5. What is $b + c$?
hint: Write it in factored form and expand.
solution: $x(x - 2)(x - 5) = x^3 - 7x^2 + 10x$.
$b + c = -7 + 10 = 3$.
:::
