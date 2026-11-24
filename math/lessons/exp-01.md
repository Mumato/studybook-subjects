---
id: exp-01
title: Exponential functions
---
::: rule
An **exponential function** is $f(x) = a \cdot b^x$ with $b > 0$, $b \ne 1$.
- $f(0) = a$ (the starting value / y-intercept)
- $b > 1$: **growth**; $0 < b < 1$: **decay**
- the graph gets closer and closer to $y = 0$ on one side but never touches it (a **horizontal asymptote**)
:::

::: example
A colony of 100 bacteria doubles every hour: $N = 100 \cdot 2^t$. After 3 hours: $100 \cdot 8 = 800$.
:::

::: graph
x -3..3
y -1..8
plot 2^x blue
plot (1/2)^x red
point 0,1
:::

::: problem id=p1 type=numeric answer="8"
$f(x) = 2^x$. What is $f(3)$?
solution: $2^3 = 8$.
:::

::: problem id=p2 type=numeric answer="3"
$f(x) = 3 \cdot 2^x$. What is $f(0)$?
solution: $3 \cdot 1 = 3$.
:::

::: problem id=p3 type=choice
Which function shows decay?
- [ ] $y = 2^x$
- [x] $y = \left(\frac{1}{2}\right)^x$
- [ ] $y = 3^x$
solution: The base is between 0 and 1.
:::

::: problem id=p4 type=point answer="0,1"
Click the y-intercept of $y = 2^x$.
graph:
x -3..3
y -1..8
plot 2^x blue
solution: $2^0 = 1$: the point $(0, 1)$.
:::

::: problem id=p5 type=numeric answer="45"
$5 \cdot 3^2 = ?$
solution: $5 \cdot 9 = 45$.
:::

::: problem id=p6 type=numeric answer="1600"
100 bacteria double every hour. How many after 4 hours?
solution: $100 \cdot 2^4 = 1600$.
:::

::: problem id=p7 type=choice
What is the horizontal asymptote of $y = 2^x$?
- [x] $y = 0$
- [ ] $y = 1$
- [ ] $x = 0$
solution: As x goes far left, $2^x$ gets closer to 0.
:::

::: problem id=p8 type=numeric answer="9"
$\left(\frac{1}{3}\right)^{-2} = ?$
solution: Flip and square: $3^2 = 9$.
:::
