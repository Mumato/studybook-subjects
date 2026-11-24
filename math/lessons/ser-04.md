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
