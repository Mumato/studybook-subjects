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
