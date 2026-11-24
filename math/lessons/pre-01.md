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
