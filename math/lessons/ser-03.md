---
id: ser-03
title: Power series
---
::: rule
A **power series** is $\sum c_n(x - a)^n$, centred at a. It converges for $|x - a| < R$, the **radius of convergence** (find R with the ratio test).

The key example is geometric:

$$\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \cdots \quad (|x| < 1)$$

Inside the radius you can differentiate and integrate term by term.
:::

::: example
$\sum \frac{x^n}{2^n}$: the ratio is $\frac{|x|}{2}$. That's below 1 when $|x| < 2$, so $R = 2$.
:::

::: problem id=p1 type=numeric answer="1"
What is the radius of convergence of $\sum x^n$?
solution: Geometric with ratio x: $|x| < 1$, so $R = 1$.
:::

::: problem id=p2 type=numeric answer="3"
What is the radius of convergence of $\sum \frac{x^n}{3^n}$?
solution: $\frac{|x|}{3} < 1$: $R = 3$.
:::

::: problem id=p3 type=numeric answer="1"
What is the radius of convergence of $\sum nx^n$?
hint: $\frac{(n + 1)|x|^{n + 1}}{n|x|^n} \to |x|$.
solution: $|x| < 1$: $R = 1$.
:::

::: problem id=p4 type=choice
Where does $\sum \frac{x^n}{n!}$ converge?
- [ ] only for $|x| < 1$
- [x] for every x
- [ ] only at $x = 0$
hint: The ratio is $\frac{|x|}{n + 1}$.
solution: The ratio goes to 0 for every x: $R = \infty$.
:::

::: problem id=p5 type=numeric answer="3/2"
$\sum_{n=0}^{\infty} x^n$ at $x = \frac{1}{3}$ equals?
solution: $\frac{1}{1 - 1/3} = \frac{3}{2}$.
:::

::: problem id=p6 type=numeric answer="2"
Where is $\sum (x - 2)^n$ centred?
solution: At $x = 2$.
:::

::: problem id=p7 type=numeric answer="-1"
$\frac{1}{1 + x} = 1 - x + x^2 - \cdots$. What is the coefficient of $x^3$?
hint: Put $-x$ into the geometric series.
solution: $(-x)^3 = -x^3$: $-1$.
:::

::: problem id=p8 type=numeric answer="3"
Differentiate $\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \cdots$ term by term. In the series for $\frac{1}{(1 - x)^2}$, what is the coefficient of $x^2$?
solution: $1 + 2x + 3x^2 + \cdots$: **3**.
:::
