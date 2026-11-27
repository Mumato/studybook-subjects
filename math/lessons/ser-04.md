---
id: ser-04
title: Taylor series
---
::: rule
The **Taylor series** of f around a:

$$f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x - a)^n$$

Around $a = 0$ it's called a **Maclaurin series**. Three to know:
- $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$
- $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$
- $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$

Stopping early gives a **Taylor polynomial**: a good approximation near a.
:::

::: example
$e^{0.1} \approx 1 + 0.1 + \frac{0.01}{2} = 1.105$. The true value is 1.10517…
:::

::: graph
x -3..3
y -1.5..4
plot e^x blue
plot 1+x+x^2/2 red
:::

::: problem id=p1 type=numeric answer="1/6"
In the Maclaurin series of $e^x$, what is the coefficient of $x^3$?
solution: $\frac{1}{3!} = \frac{1}{6}$.
:::

::: problem id=p2 type=numeric answer="-1/6"
In the Maclaurin series of $\sin x$, what is the coefficient of $x^3$?
solution: $-\frac{1}{3!} = -\frac{1}{6}$.
:::

::: problem id=p3 type=numeric answer="1/24"
In the Maclaurin series of $\cos x$, what is the coefficient of $x^4$?
solution: $\frac{1}{4!} = \frac{1}{24}$.
:::

::: problem id=p4 type=expression answer="1+x+x^2/2"
Write the degree 2 Taylor polynomial of $e^x$ around 0.
solution: $1 + x + \frac{x^2}{2}$.
:::

::: problem id=p5 type=numeric answer="1.105"
Use $1 + x + \frac{x^2}{2}$ to estimate $e^{0.1}$.
solution: $1 + 0.1 + 0.005 = 1.105$.
:::

::: problem id=p6 type=numeric answer="2"
In the Maclaurin series of $e^{2x}$, what is the coefficient of $x^2$?
hint: Put $2x$ into the series for $e^x$.
solution: $\frac{(2x)^2}{2} = 2x^2$: **2**.
:::

::: problem id=p7 type=expression answer="x-1"
Write the degree 1 Taylor polynomial of $\ln x$ around $a = 1$.
hint: $f(1) = 0$ and $f'(1) = 1$.
solution: $0 + 1 \cdot (x - 1) = x - 1$.
:::

::: problem id=p8 type=numeric answer="599/6000" tolerance="0.0001"
Use $\sin x \approx x - \frac{x^3}{6}$ to estimate $\sin 0.1$. (to 4 decimal places)
hint: $0.1^3 = 0.001$.
solution: $0.1 - \frac{0.001}{6} \approx 0.09983$.
:::

::: problem id=c1 type=numeric answer="65/24" tolerance="0.001" creative=true
$e = e^1 = \sum \frac{1}{n!}$. Add up the first five terms ($n = 0$ to 4). How close is it to $e \approx 2.71828$?
solution: $1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} = \frac{65}{24} \approx 2.7083$: already within 0.01.
:::

::: problem id=x1 type=numeric answer="1/120" set=extra
In the Maclaurin series of $\sin x$, what is the coefficient of $x^5$?
solution: $\frac{1}{5!} = \frac{1}{120}$.
:::

::: problem id=x2 type=numeric answer="-1/720" set=extra
In the Maclaurin series of $\cos x$, what is the coefficient of $x^6$?
solution: The signs alternate $+, -, +, -$: $-\frac{1}{6!} = -\frac{1}{720}$.
:::

::: problem id=x3 type=numeric answer="-1/6" set=extra
In the Maclaurin series of $e^{-x}$, what is the coefficient of $x^3$?
solution: $\frac{(-x)^3}{3!} = -\frac{x^3}{6}$.
:::

::: problem id=x4 type=numeric answer="-4/3" set=extra
In the Maclaurin series of $\sin 2x$, what is the coefficient of $x^3$?
solution: $-\frac{(2x)^3}{6} = -\frac{8x^3}{6}$: $-\frac{4}{3}$.
:::

::: problem id=x5 type=numeric answer="-1/2" set=extra
In the Maclaurin series of $\cos(x^2)$, what is the coefficient of $x^4$?
solution: $1 - \frac{(x^2)^2}{2} + \cdots$: $-\frac{1}{2}$.
:::

::: problem id=x6 type=numeric answer="1/6" set=extra
In the Maclaurin series of $xe^x$, what is the coefficient of $x^4$?
solution: $x \cdot \frac{x^3}{3!}$: $\frac{1}{6}$.
:::

::: problem id=x7 type=expression answer="1-x^2/2" set=extra
Write the degree 2 Taylor polynomial of $\cos x$ around 0.
solution: $1 - \frac{x^2}{2}$.
:::

::: problem id=x8 type=numeric answer="1.2213" tolerance="0.0001" set=extra
Use the degree 3 Taylor polynomial of $e^x$ to estimate $e^{0.2}$. (to 4 decimals)
solution: $1 + 0.2 + 0.02 + \frac{0.008}{6} \approx 1.2213$. (True: 1.22140…)
:::

::: problem id=x9 type=expression answer="ex" set=extra
Write the degree 1 Taylor polynomial of $e^x$ around $a = 1$, simplified.
solution: $f(1) = e$, $f'(1) = e$: $e + e(x - 1) = ex$.
:::

::: problem id=x10 type=expression answer="2+(x-4)/4" set=extra
Write the degree 1 Taylor polynomial of $\sqrt{x}$ around $a = 4$.
solution: $f(4) = 2$, $f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}$: $2 + \frac{x - 4}{4}$.
:::

::: problem id=x11 type=expression answer="2+3x+2x^2" set=extra
$f(0) = 2$, $f'(0) = 3$, $f''(0) = 4$. Write the degree 2 Maclaurin polynomial.
solution: $2 + 3x + \frac{4}{2!}x^2 = 2 + 3x + 2x^2$.
:::

::: problem id=x12 type=numeric answer="30" set=extra
The Maclaurin series of f has coefficient 5 for $x^3$. What is $f'''(0)$?
solution: Coefficient $= \frac{f'''(0)}{3!}$, so $f'''(0) = 5 \cdot 6 = 30$.
:::

::: problem id=x13 type=numeric answer="-1/6" set=extra
Use series to find $\lim_{x \to 0}\frac{\sin x - x}{x^3}$.
solution: $\sin x - x = -\frac{x^3}{6} + \frac{x^5}{120} - \cdots$. Divide by $x^3$ and let $x \to 0$: $-\frac{1}{6}$.
:::

::: problem id=x14 type=numeric answer="1/2" set=extra
Use series to find $\lim_{x \to 0}\frac{1 - \cos x}{x^2}$.
solution: $1 - \cos x = \frac{x^2}{2} - \frac{x^4}{24} + \cdots$. Divided by $x^2$: $\to \frac{1}{2}$.
:::

::: problem id=x15 type=choice set=extra
A student writes $e^x \approx 1 + x + x^2$. What is the correct degree 2 polynomial?
- [ ] $1 + x + 2x^2$
- [x] $1 + x + \frac{x^2}{2}$
- [ ] $x + \frac{x^2}{2}$
- [ ] $1 + x^2$
solution: The $x^2$ coefficient is $\frac{f''(0)}{2!} = \frac{1}{2}$: the student forgot the factorial.
:::

::: problem id=x16 type=choice set=extra
Which function is $\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}$?
- [ ] $e^x$
- [ ] $\sin x$
- [x] $\cos x$
- [ ] $e^{-x}$
solution: Even powers, factorials, alternating signs: $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots = \cos x$.
:::

::: problem id=x17 type=numeric answer="e^2" set=extra
$\sum_{n=0}^{\infty}\frac{2^n}{n!} = ?$ (exact)
hint: Compare with the series of $e^x$.
solution: It is $\sum\frac{x^n}{n!}$ at $x = 2$: $e^2$.
:::

::: problem id=x18 type=numeric answer="23/30" set=extra
Estimate $\int_0^1 e^{-x^2}\,dx$ using $e^{-x^2} \approx 1 - x^2 + \frac{x^4}{2}$.
hint: Put $-x^2$ into the series for $e^x$, then integrate term by term.
solution: $\int_0^1\left(1 - x^2 + \frac{x^4}{2}\right)dx$ is $1 - \frac{1}{3} + \frac{1}{10} = \frac{23}{30} \approx 0.767$. (True: 0.7468.)
:::

::: problem id=x19 type=expression answer="(x-1)-(x-1)^2/2" set=extra
Write the degree 2 Taylor polynomial of $\ln x$ around $a = 1$.
hint: $f''(x) = -\frac{1}{x^2}$.
solution: $f(1) = 0$, $f'(1) = 1$, $f''(1) = -1$: $(x - 1) - \frac{(x - 1)^2}{2}$.
:::

::: problem id=x20 type=numeric answer="30" set=extra creative=true
$f(x) = x^2e^x$. What is $f^{(6)}(0)$, the sixth derivative at 0?
hint: Don't differentiate six times. Find the coefficient of $x^6$ in the series.
solution: $x^2e^x = \sum\frac{x^{n+2}}{n!}$; the $x^6$ term has $n = 4$: $\frac{1}{24}$. So $f^{(6)}(0) = 6! \cdot \frac{1}{24} = 30$.
:::
