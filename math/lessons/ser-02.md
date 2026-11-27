---
id: ser-02
title: Convergence tests
---
::: rule
- **p-series:** $\sum \frac{1}{n^p}$ converges exactly when $p > 1$.
- **Comparison:** smaller than a convergent series (with positive terms) → converges; bigger than a divergent one → diverges.
- **Ratio test:** $L = \lim\left|\frac{a_{n + 1}}{a_n}\right|$. $L < 1$: converges. $L > 1$: diverges. $L = 1$: the test says nothing.
- **Alternating series:** signs alternate and the sizes shrink to 0 → converges.
:::

::: example
$\sum \frac{1}{n!}$: $\frac{a_{n + 1}}{a_n} = \frac{n!}{(n + 1)!} = \frac{1}{n + 1} \to 0 < 1$, so it converges.
:::

::: problem id=p1 type=text answers="converges;converge;it converges"
Does $\sum \frac{1}{n^2}$ converge or diverge?
solution: A p-series with $p = 2 > 1$: **converges**.
:::

::: problem id=p2 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{1}{\sqrt{n}}$ converge or diverge?
hint: $\frac{1}{\sqrt{n}} = \frac{1}{n^{1/2}}$.
solution: $p = \frac{1}{2} \le 1$: **diverges**.
:::

::: problem id=p3 type=numeric answer="0"
Ratio test on $\sum \frac{3^n}{n!}$: what is L?
hint: $\frac{a_{n + 1}}{a_n} = \frac{3}{n + 1}$.
solution: $\frac{3}{n + 1} \to 0$: it converges.
:::

::: problem id=p4 type=numeric answer="1/2"
Ratio test on $\sum \frac{n}{2^n}$: what is L?
solution: $\frac{n + 1}{2^{n + 1}} \cdot \frac{2^n}{n} = \frac{n + 1}{2n} \to \frac{1}{2}$: it converges.
:::

::: problem id=p5 type=text answers="converges;converge;it converges"
Does $1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ converge or diverge?
solution: Alternating, with sizes shrinking to 0: **converges** (to $\ln 2$, in fact).
:::

::: problem id=p6 type=text answers="converges;converge;it converges"
Does $\sum \frac{1}{n^2 + 1}$ converge or diverge?
hint: Compare with $\frac{1}{n^2}$.
solution: Each term is smaller than $\frac{1}{n^2}$, which converges: **converges**.
:::

::: problem id=p7 type=choice
The ratio test gives $L = 1$. What does that tell you?
- [ ] it converges
- [ ] it diverges
- [x] nothing: try another test
solution: $L = 1$ is inconclusive.
:::

::: problem id=p8 type=numeric answer="5"
Ratio test on $\sum \frac{5^n}{n^3}$: what is L?
solution: $5 \cdot \frac{n^3}{(n + 1)^3} \to 5 > 1$: it diverges.
:::

::: problem id=c1 type=numeric answer="pi^2/24" creative=true
Euler proved $\sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}$. Use that to find $\sum_{n=1}^{\infty}\frac{1}{(2n)^2}$. (Type pi^2/...)
hint: $\frac{1}{(2n)^2} = \frac{1}{4} \cdot \frac{1}{n^2}$.
solution: $\frac{1}{4} \cdot \frac{\pi^2}{6} = \frac{\pi^2}{24}$.
:::

::: problem id=x1 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{1}{n^4}$ converge or diverge?
solution: p-series with $p = 4 > 1$: **converges**.
:::

::: problem id=x2 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum \frac{1}{n^{0.9}}$ converge or diverge?
solution: $p = 0.9 \le 1$: **diverges** (just barely).
:::

::: problem id=x3 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{1}{n\sqrt{n}}$ converge or diverge?
solution: $n\sqrt{n} = n^{3/2}$, and $p = \frac{3}{2} > 1$: **converges**.
:::

::: problem id=x4 type=numeric answer="1/3" set=extra
Ratio test on $\sum \frac{n}{3^n}$: what is L?
solution: $\frac{n + 1}{3^{n+1}} \cdot \frac{3^n}{n} = \frac{n + 1}{3n} \to \frac{1}{3}$: converges.
:::

::: problem id=x5 type=numeric answer="2" set=extra
Ratio test on $\sum \frac{2^n}{n^2}$: what is L?
solution: $2 \cdot \frac{n^2}{(n + 1)^2} \to 2 > 1$: diverges.
:::

::: problem id=x6 type=numeric answer="1/5" set=extra
Ratio test on $\sum \frac{n^2}{5^n}$: what is L?
solution: $\frac{(n + 1)^2}{5n^2} \to \frac{1}{5}$: converges.
:::

::: problem id=x7 type=numeric answer="1/e" set=extra
Ratio test on $\sum \frac{n!}{n^n}$: what is L? (exact)
hint: The ratio simplifies to $\left(\frac{n}{n + 1}\right)^n$.
solution: $\left(\frac{n}{n + 1}\right)^n = \frac{1}{(1 + 1/n)^n} \to \frac{1}{e} < 1$: converges.
:::

::: problem id=x8 type=choice set=extra
Ratio test on $\sum \frac{n!}{10^n}$ gives:
- [ ] $L = 0$: converges
- [ ] $L = \frac{1}{10}$: converges
- [x] $L = \infty$: diverges
- [ ] $L = 1$: no answer
solution: $\frac{n + 1}{10} \to \infty$. Factorials beat powers: **diverges**.
:::

::: problem id=x9 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{1}{n^2 + 5}$ converge or diverge?
solution: $\frac{1}{n^2 + 5} < \frac{1}{n^2}$, and $\sum\frac{1}{n^2}$ converges: **converges**.
:::

::: problem id=x10 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{1}{2^n + 1}$ converge or diverge?
solution: $\frac{1}{2^n + 1} < \left(\frac{1}{2}\right)^n$, a convergent geometric series: **converges**.
:::

::: problem id=x11 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum_{n=3}^{\infty}\frac{\ln n}{n}$ converge or diverge?
hint: For $n \ge 3$, $\ln n > 1$.
solution: $\frac{\ln n}{n} > \frac{1}{n}$, and the harmonic series diverges: **diverges**.
:::

::: problem id=x12 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{\sin^2 n}{n^2}$ converge or diverge?
solution: $0 \le \frac{\sin^2 n}{n^2} \le \frac{1}{n^2}$: **converges** by comparison.
:::

::: problem id=x13 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{(-1)^n}{\sqrt{n}}$ converge or diverge?
solution: Alternating, and $\frac{1}{\sqrt{n}}$ shrinks to 0: **converges**.
:::

::: problem id=x14 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum (-1)^n\frac{n}{n + 1}$ converge or diverge?
solution: The sizes $\frac{n}{n + 1}$ go to 1, not 0. The terms don't go to 0: **diverges**.
:::

::: problem id=x15 type=numeric answer="1" set=extra
Ratio test on $\sum \frac{1}{n^2}$: what is L? (Notice the test can't decide.)
solution: $\frac{n^2}{(n + 1)^2} \to 1$. Inconclusive, even though the series converges (p-series).
:::

::: problem id=x16 type=text answers="diverges;diverge;it diverges" set=extra
A student says: "$\frac{1}{n} \to 0$, so $\sum\frac{1}{n}$ converges." Does $\sum \frac{1}{n}$ converge or diverge?
solution: **Diverges**: it is the harmonic series. Terms going to 0 is needed, but not enough.
:::

::: problem id=x17 type=numeric answer="4/5" set=extra
Ratio test on $\sum \frac{(2n)!}{(n!)^2 5^n}$: what is L?
hint: $\frac{(2n + 2)!}{(2n)!} = (2n + 2)(2n + 1)$.
solution: The ratio is $\frac{(2n + 2)(2n + 1)}{5(n + 1)^2}$, which goes to $\frac{4}{5}$: converges.
:::

::: problem id=x18 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{3^n}{2^n + 4^n}$ converge or diverge?
hint: Make the bottom smaller.
solution: $\frac{3^n}{2^n + 4^n} < \frac{3^n}{4^n} = \left(\frac{3}{4}\right)^n$: **converges** by comparison.
:::

::: problem id=x19 type=choice set=extra
For which p does $\sum \frac{1}{n^{p - 2}}$ converge?
- [ ] $p > 1$
- [ ] $p > 2$
- [x] $p > 3$
- [ ] $p < 3$
solution: It is a p-series with power $p - 2$. That must be above 1: $p > 3$.
:::

::: problem id=x20 type=numeric answer="pi^2/8" set=extra creative=true
Using $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$ and $\sum \frac{1}{(2n)^2} = \frac{\pi^2}{24}$, find the sum over **odd** n only: $1 + \frac{1}{9} + \frac{1}{25} + \cdots$ (type pi^2/...)
solution: All terms minus the even ones: $\frac{\pi^2}{6} - \frac{\pi^2}{24} = \frac{3\pi^2}{24} = \frac{\pi^2}{8}$.
:::
