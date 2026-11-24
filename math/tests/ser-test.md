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
