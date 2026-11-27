---
id: ser-03
title: Power series
---
::: rule
A **power series** is $\sum c_n(x - a)^n$, centred at a. It converges for $|x - a| < R$, the **radius of convergence** (find R with the ratio test).

The key example is geometric:

$$\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \cdots$$

for $|x| < 1$.

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

::: problem id=x1 type=numeric answer="4" set=extra
What is the radius of convergence of $\sum \frac{x^n}{4^n}$?
solution: Ratio $\frac{|x|}{4} < 1$: $R = 4$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
What is the radius of convergence of $\sum \frac{nx^n}{2^n}$?
solution: Ratio $\frac{n + 1}{n} \cdot \frac{|x|}{2} \to \frac{|x|}{2}$: $R = 2$.
:::

::: problem id=x3 type=numeric answer="1/2" set=extra
What is the radius of convergence of $\sum 2^nx^n$?
solution: Geometric with ratio $2x$: $|2x| < 1$, so $R = \frac{1}{2}$.
:::

::: problem id=x4 type=numeric answer="0" set=extra
What is the radius of convergence of $\sum n!\,x^n$?
solution: Ratio $(n + 1)|x| \to \infty$ unless $x = 0$: $R = 0$.
:::

::: problem id=x5 type=numeric answer="1" set=extra
What is the radius of convergence of $\sum \frac{x^n}{n}$?
solution: Ratio $\frac{n}{n + 1}|x| \to |x|$: $R = 1$.
:::

::: problem id=x6 type=multi answers="1;5" set=extra
$\sum \frac{(x - 3)^n}{2^n}$ converges for x strictly between two endpoints. Type both.
solution: $\left|\frac{x - 3}{2}\right| < 1$: $|x - 3| < 2$, so $1 < x < 5$. (At both ends the terms are $\pm 1$: no convergence.)
:::

::: problem id=x7 type=choice set=extra
Where exactly does $\sum_{n=1}^{\infty}\frac{x^n}{n}$ converge?
- [ ] $(-1, 1)$
- [x] $[-1, 1)$
- [ ] $(-1, 1]$
- [ ] $[-1, 1]$
hint: Check $x = 1$ and $x = -1$ separately.
solution: $x = 1$: harmonic series, diverges. $x = -1$: alternating harmonic, converges. So $[-1, 1)$.
:::

::: problem id=x8 type=numeric answer="8" set=extra
In the series for $\frac{1}{1 - 2x}$, what is the coefficient of $x^3$?
solution: Put $2x$ into the geometric series: $(2x)^3 = 8x^3$.
:::

::: problem id=x9 type=numeric answer="-1" set=extra
In the series for $\frac{1}{1 + x^2}$, what is the coefficient of $x^6$?
solution: Put $-x^2$ in: $1 - x^2 + x^4 - x^6 + \cdots$. Coefficient $-1$.
:::

::: problem id=x10 type=numeric answer="1/8" set=extra
$\frac{1}{2 - x} = \frac{1/2}{1 - x/2}$. In its series, what is the coefficient of $x^2$?
solution: $\frac{1}{2}\sum\left(\frac{x}{2}\right)^n$: the $x^2$ term is $\frac{1}{2} \cdot \frac{x^2}{4}$, coefficient $\frac{1}{8}$.
:::

::: problem id=x11 type=numeric answer="2" set=extra
What is the radius of convergence of the series for $\frac{1}{2 - x}$?
solution: It needs $\left|\frac{x}{2}\right| < 1$: $R = 2$.
:::

::: problem id=x12 type=numeric answer="1/3" set=extra
Integrate $\frac{1}{1 + x} = 1 - x + x^2 - \cdots$ term by term to get $\ln(1 + x)$. What is the coefficient of $x^3$?
solution: $\int x^2\,dx = \frac{x^3}{3}$: $\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$. Coefficient $\frac{1}{3}$.
:::

::: problem id=x13 type=numeric answer="1/5" set=extra
Integrate $\frac{1}{1 + x^2} = 1 - x^2 + x^4 - \cdots$ to get $\arctan x$. What is the coefficient of $x^5$?
solution: $\int x^4\,dx = \frac{x^5}{5}$: coefficient $\frac{1}{5}$.
:::

::: problem id=x14 type=numeric answer="4" set=extra
$\sum_{n=1}^{\infty} nx^{n-1} = \frac{1}{(1 - x)^2}$ for $|x| < 1$. What is its value at $x = \frac{1}{2}$?
solution: $\frac{1}{(1/2)^2} = 4$.
:::

::: problem id=x15 type=numeric answer="3/4" set=extra
Use $\sum_{n=1}^{\infty} nx^n = \frac{x}{(1 - x)^2}$ to find $\sum_{n=1}^{\infty}\frac{n}{3^n}$.
solution: $x = \frac{1}{3}$: $\frac{1/3}{(2/3)^2} = \frac{1/3}{4/9} = \frac{3}{4}$.
:::

::: problem id=x16 type=choice set=extra
$\sum x^n$ has $R = 1$. What happens at $x = 1$?
- [ ] it converges to $\frac{1}{2}$
- [x] it diverges
- [ ] it converges to 1
solution: $1 + 1 + 1 + \cdots$ diverges. The radius says nothing about the endpoints: check them by hand.
:::

::: problem id=x17 type=numeric answer="3" set=extra
What is the radius of convergence of $\sum \frac{x^{2n}}{9^n}$?
hint: It's geometric in $\frac{x^2}{9}$.
solution: $\frac{x^2}{9} < 1$: $|x| < 3$, so $R = 3$.
:::

::: problem id=x18 type=numeric answer="0.095" tolerance="0.0001" set=extra
Use the first two terms of $\ln(1 + x) = x - \frac{x^2}{2} + \cdots$ to estimate $\ln 1.1$.
solution: $0.1 - \frac{0.01}{2} = 0.095$. (True: 0.09531…)
:::

::: problem id=x19 type=numeric answer="11" set=extra
In $\frac{1}{(1 - x)^2} = 1 + 2x + 3x^2 + \cdots$, what is the coefficient of $x^{10}$?
hint: The coefficient of $x^n$ is $n + 1$.
solution: Differentiating $x^{11}$ gives $11x^{10}$: coefficient 11.
:::

::: problem id=x20 type=numeric answer="ln(2)" set=extra creative=true
Put $x = 1$ into $\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ (it still converges there). What is $1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$? (exact)
solution: $\ln(1 + 1) = \ln 2$. The alternating harmonic series sums to $\ln 2 \approx 0.693$.
:::
