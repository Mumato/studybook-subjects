---
id: ser-test
title: Series test
pass: 0.8
---
::: problem id=t1 type=numeric answer="1/2"
$\sum_{n=1}^{\infty}\left(\frac{1}{3}\right)^n = ?$
solution: $\frac{1/3}{2/3} = \frac{1}{2}$.
:::

::: problem id=t2 type=text answers="converges;converge;it converges"
Does $\sum \frac{1}{n^3}$ converge or diverge?
solution: $p = 3 > 1$: **converges**.
:::

::: problem id=t3 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{n^2}{n^2 + 1}$ converge or diverge?
solution: The terms go to 1: **diverges**.
:::

::: problem id=t4 type=numeric answer="0"
Ratio test on $\sum \frac{2^n}{n!}$: what is L?
solution: $\frac{2}{n + 1} \to 0$.
:::

::: problem id=t5 type=numeric answer="5"
What is the radius of convergence of $\sum \frac{x^n}{5^n}$?
solution: $R = 5$.
:::

::: problem id=t6 type=numeric answer="1/2"
In the Maclaurin series of $e^x$, what is the coefficient of $x^2$?
solution: $\frac{1}{2!} = \frac{1}{2}$.
:::

::: problem id=t7 type=expression answer="x-x^3/6"
Write the degree 3 Maclaurin polynomial of $\sin x$.
solution: $x - \frac{x^3}{6}$.
:::

::: problem id=t8 type=numeric answer="3/4"
$\sum_{n=1}^{\infty}\frac{1}{n(n + 2)} = ?$
solution: $\frac{1}{n(n + 2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n + 2}\right)$. It telescopes: $\frac{1}{2}\left(1 + \frac{1}{2}\right) = \frac{3}{4}$.
:::

::: problem id=t9 type=numeric answer="2"
$\sum_{n=1}^{\infty}\frac{4}{3^n} = ?$
solution: $\frac{4/3}{1 - 1/3} = 2$.
:::

::: problem id=t10 type=numeric answer="1/4"
Ratio test on $\sum \frac{n^3}{4^n}$: what is L?
solution: $\frac{(n + 1)^3}{4n^3} \to \frac{1}{4}$: converges.
:::

::: problem id=t11 type=numeric answer="3"
What is the radius of convergence of $\sum \frac{(x - 2)^n}{n3^n}$?
solution: Ratio $\frac{n}{n + 1} \cdot \frac{|x - 2|}{3} \to \frac{|x - 2|}{3}$: $R = 3$.
:::

::: problem id=t12 type=numeric answer="2/3"
In the Maclaurin series of $e^{2x}$, what is the coefficient of $x^4$?
solution: $\frac{(2x)^4}{4!} = \frac{16x^4}{24}$: $\frac{2}{3}$.
:::

::: problem id=t13 type=numeric answer="1/(2ln(2)^2)"
For $\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^3}$, find $\int_2^{\infty}\frac{dx}{x(\ln x)^3}$. (exact)
solution: $u = \ln x$: $\int_{\ln 2}^{\infty}u^{-3}\,du = \frac{1}{2(\ln 2)^2}$. Finite: the series converges.
:::

::: problem id=t14 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{n + 3}{n^2 + 1}$ converge or diverge?
solution: Limit comparison with $\frac{1}{n}$: $\frac{n^2 + 3n}{n^2 + 1} \to 1$. The harmonic series diverges: **diverges**.
:::

::: problem id=t15 type=text answers="conditionally;conditional;converges conditionally"
Does $\sum \frac{(-1)^n}{n^{1/3}}$ converge absolutely, conditionally, or diverge?
solution: Alternating with sizes decreasing to 0: converges. $\sum\frac{1}{n^{1/3}}$ diverges ($p \le 1$): **conditionally**.
:::

::: problem id=t16 type=numeric answer="1/125"
You add 4 terms of $\sum \frac{(-1)^{n-1}}{n^3}$. What is the error bound?
solution: The next term: $b_5 = \frac{1}{125}$.
:::

::: problem id=t17 type=numeric answer="1/4"
Root test on $\sum\left(\frac{n + 1}{4n}\right)^n$: what is L?
solution: $\frac{n + 1}{4n} \to \frac{1}{4} < 1$: converges absolutely.
:::

::: problem id=t18 type=numeric answer="1/2"
Use series to find $\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}$.
solution: $e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \cdots$. Divide by $x^2$: $\to \frac{1}{2}$.
:::
