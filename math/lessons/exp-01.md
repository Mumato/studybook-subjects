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

::: problem id=x1 type=numeric answer="81" set=extra
$f(x) = 3^x$. What is $f(4)$?
solution: $3^4 = 81$.
:::

::: problem id=x2 type=numeric answer="40" set=extra
$f(x) = 5 \cdot 2^x$. What is $f(3)$?
solution: $5 \cdot 8 = 40$.
:::

::: problem id=x3 type=numeric answer="1/2" set=extra
$g(x) = 4\left(\frac{1}{2}\right)^x$. What is $g(3)$?
solution: $4 \cdot \frac{1}{8} = \frac{1}{2}$.
:::

::: problem id=x4 type=numeric answer="1/8" set=extra
$2^{-3} = ?$
solution: $\frac{1}{2^3} = \frac{1}{8}$.
:::

::: problem id=x5 type=numeric answer="10/3" set=extra
$f(x) = 10 \cdot 3^x$. What is $f(-1)$?
solution: $10 \cdot \frac{1}{3} = \frac{10}{3}$.
:::

::: problem id=x6 type=numeric answer="16" set=extra
$f(x) = \left(\frac{1}{4}\right)^x$. What is $f(-2)$?
solution: Flip and square: $4^2 = 16$.
:::

::: problem id=x7 type=choice set=extra
Which function shows growth?
- [x] $y = 0.8 \cdot 3^x$
- [ ] $y = 5(0.9)^x$
- [ ] $y = 2\left(\frac{1}{3}\right)^x$
- [ ] $y = 7(0.5)^x$
solution: Only $0.8 \cdot 3^x$ has a base bigger than 1. The 0.8 in front is the starting value, not the base.
:::

::: problem id=x8 type=numeric answer="7" set=extra
What is the y-intercept of $y = 7(0.4)^x$?
solution: $x = 0$: $7 \cdot 1 = 7$.
:::

::: problem id=x9 type=point answer="0,3" set=extra
Click the y-intercept of $y = 3 \cdot 2^x$.
graph:
x -3..3
y -1..10
plot 3*2^x blue
solution: $3 \cdot 2^0 = 3$: the point $(0, 3)$.
:::

::: problem id=x10 type=numeric answer="4" set=extra
$f(x) = a \cdot b^x$ passes through $(0, 3)$ and $(1, 12)$. What is b?
solution: $f(0) = a = 3$. Then $3b = 12$, so $b = 4$.
:::

::: problem id=x11 type=expression answer="2*3^x" set=extra
Write the exponential function $y = a \cdot b^x$ through $(0, 2)$ and $(1, 6)$, as $y = \ldots$
solution: $a = 2$ and $2b = 6$, so $b = 3$: $y = 2 \cdot 3^x$.
:::

::: problem id=x12 type=choice set=extra
What is the horizontal asymptote of $y = 2^x + 3$?
- [ ] $y = 0$
- [x] $y = 3$
- [ ] $y = 4$
- [ ] $x = 3$
solution: The $+3$ shifts $y = 2^x$ up 3, so the asymptote $y = 0$ moves to $y = 3$.
:::

::: problem id=x13 type=numeric answer="12" set=extra
Sam says $3 \cdot 2^2 = 6^2 = 36$. What is the correct value?
solution: The power goes first: $3 \cdot 4 = 12$. Don't multiply 3 by 2 before the exponent.
:::

::: problem id=x14 type=numeric answer="4050" set=extra
A population of 50 frogs triples every week. How many after 4 weeks?
solution: $50 \cdot 3^4 = 50 \cdot 81 = 4050$.
:::

::: problem id=x15 type=choice set=extra
Which table could come from an exponential function? (x = 0, 1, 2, 3)
- [x] $2, 6, 18, 54$
- [ ] $2, 5, 8, 11$
- [ ] $1, 4, 9, 16$
- [ ] $3, 6, 12, 15$
solution: In $2, 6, 18, 54$ each value is 3 times the last: a constant ratio means exponential.
:::

::: problem id=x16 type=numeric answer="24" set=extra
Exponentials outgrow powers. Work out $2^{10} - 10^3$.
solution: $1024 - 1000 = 24$. From $x = 10$ on, $2^x$ stays ahead of $x^3$.
:::

::: problem id=x17 type=numeric answer="2" set=extra
$y = a \cdot b^x$ passes through $(1, 6)$ and $(2, 18)$. What is a?
hint: Divide the two y values to find b first.
solution: $b = \frac{18}{6} = 3$. Then $3a = 6$, so $a = 2$.
:::

::: problem id=x18 type=numeric answer="80" set=extra
$y = a \cdot b^x$ with $b > 0$ passes through $(2, 20)$ and $(4, 5)$. What is a?
hint: Going from $x = 2$ to $x = 4$ multiplies by $b^2$.
solution: $b^2 = \frac{5}{20} = \frac{1}{4}$, so $b = \frac{1}{2}$.
Then $a \cdot \frac{1}{4} = 20$, so $a = 80$.
:::

::: problem id=x19 type=numeric answer="112.5" set=extra
A patient takes 200 mg of a drug. Each hour, $\frac{3}{4}$ of the drug in the body remains. How many mg are left after 2 hours?
hint: Multiply by $\frac{3}{4}$ once per hour.
solution: $200 \cdot \left(\frac{3}{4}\right)^2 = 200 \cdot \frac{9}{16} = 112.5$ mg.
:::

::: problem id=x20 type=numeric answer="486" set=extra creative=true
$f(x) = a \cdot b^x$ with $f(1) = 6$ and $f(3) = 54$. What is $f(5)$?
hint: Two steps of x multiply by $b^2$.
solution: $b^2 = \frac{54}{6} = 9$. From $x = 3$ to $x = 5$ is another $b^2$: $54 \cdot 9 = 486$.
:::
