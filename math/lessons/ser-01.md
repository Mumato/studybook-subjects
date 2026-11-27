---
id: ser-01
title: Series that converge
---
::: rule
An infinite series $\sum a_n$ **converges** if its partial sums $S_n = a_1 + \cdots + a_n$ approach a number; otherwise it **diverges**.
- **n-th term test:** if $a_n$ does **not** go to 0, the series diverges.
- But terms going to 0 is not enough: the **harmonic series** $1 + \frac{1}{2} + \frac{1}{3} + \cdots$ diverges.
- **Geometric:** $\sum ar^n$ converges exactly when $|r| < 1$.
:::

::: example
$\sum_{n=1}^{\infty}\frac{1}{n(n + 1)} = \sum\left(\frac{1}{n} - \frac{1}{n + 1}\right)$, which is $\left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots$. Almost everything cancels (it **telescopes**), and $S_n = 1 - \frac{1}{n + 1} \to 1$.
:::

::: problem id=p1 type=numeric answer="1"
$\sum_{n=1}^{\infty}\left(\frac{1}{2}\right)^n = ?$
solution: $\frac{1/2}{1 - 1/2} = 1$.
:::

::: problem id=p2 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{n}{n + 1}$ converge or diverge?
hint: What do the terms approach?
solution: The terms go to 1, not 0: it **diverges**.
:::

::: problem id=p3 type=choice
The harmonic series $\sum \frac{1}{n}$:
- [ ] converges to 2
- [x] diverges
- [ ] converges to 1
solution: It grows without limit, slowly (like $\ln n$).
:::

::: problem id=p4 type=numeric answer="1"
$\sum_{n=1}^{\infty}\frac{1}{n(n + 1)} = ?$
solution: It telescopes to 1.
:::

::: problem id=p5 type=numeric answer="3/4"
What is the partial sum $S_3$ of $\sum \frac{1}{n(n + 1)}$?
hint: $S_n = 1 - \frac{1}{n + 1}$.
solution: $1 - \frac{1}{4} = \frac{3}{4}$.
:::

::: problem id=p6 type=numeric answer="9"
$\sum_{n=0}^{\infty} 3\left(\frac{2}{3}\right)^n = ?$
solution: $\frac{3}{1 - 2/3} = 9$.
:::

::: problem id=p7 type=numeric answer="2/5"
What do the terms of $\sum \frac{2n}{5n + 1}$ approach? (So does the series converge?)
solution: $\frac{2}{5}$, which isn't 0, so the series diverges.
:::

::: problem id=p8 type=text answers="no"
If the terms go to 0, must the series converge? Type yes or no.
hint: Think of the harmonic series.
solution: **No**: $\frac{1}{n} \to 0$, but $\sum\frac{1}{n}$ diverges.
:::

::: problem id=x1 type=numeric answer="4/3" set=extra
$\sum_{n=0}^{\infty}\left(\frac{1}{4}\right)^n = ?$
solution: $\frac{1}{1 - 1/4} = \frac{4}{3}$.
:::

::: problem id=x2 type=numeric answer="1/2" set=extra
$\sum_{n=1}^{\infty} 2\left(\frac{1}{5}\right)^n = ?$
solution: First term $\frac{2}{5}$, ratio $\frac{1}{5}$: $\frac{2/5}{4/5} = \frac{1}{2}$.
:::

::: problem id=x3 type=numeric answer="2/3" set=extra
$\sum_{n=0}^{\infty}\left(-\frac{1}{2}\right)^n = ?$
solution: $|r| = \frac{1}{2} < 1$: $\frac{1}{1 + 1/2} = \frac{2}{3}$.
:::

::: problem id=x4 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum \left(\frac{3}{2}\right)^n$ converge or diverge?
solution: Geometric with $|r| = \frac{3}{2} \ge 1$: **diverges**.
:::

::: problem id=x5 type=numeric answer="5/9" set=extra
$\sum_{n=1}^{\infty}\frac{5}{10^n} = ?$
solution: $\frac{5/10}{1 - 1/10} = \frac{5}{9}$. (That's $0.555\ldots$)
:::

::: problem id=x6 type=numeric answer="7/9" set=extra
Write $0.777\ldots$ as a fraction.
hint: $0.7 + 0.07 + 0.007 + \cdots$
solution: First term $\frac{7}{10}$, ratio $\frac{1}{10}$: $\frac{7/10}{9/10} = \frac{7}{9}$.
:::

::: problem id=x7 type=numeric answer="3" set=extra
What do the terms of $\sum \frac{3n^2}{n^2 + 1}$ approach? (So the series diverges.)
solution: Divide top and bottom by $n^2$: $\frac{3}{1 + 1/n^2} \to 3 \ne 0$.
:::

::: problem id=x8 type=numeric answer="3/2" set=extra
$\sum_{n=1}^{\infty}\left(\frac{1}{n} - \frac{1}{n + 2}\right) = ?$
hint: Write out the first few terms. Which ones survive?
solution: Everything cancels except $1 + \frac{1}{2}$: $S_n = \frac{3}{2} - \frac{1}{n + 1} - \frac{1}{n + 2} \to \frac{3}{2}$.
:::

::: problem id=x9 type=numeric answer="4/5" set=extra
What is $S_4$ for $\sum \frac{1}{n(n + 1)}$?
solution: $S_n = 1 - \frac{1}{n + 1}$: $1 - \frac{1}{5} = \frac{4}{5}$.
:::

::: problem id=x10 type=choice set=extra
What does the n-th term test say about $\sum \cos\frac{1}{n}$?
- [x] it diverges, since the terms go to 1
- [ ] it converges, since $\frac{1}{n} \to 0$
- [ ] nothing
solution: $\cos\frac{1}{n} \to \cos 0 = 1 \ne 0$: **diverges**.
:::

::: problem id=x11 type=numeric answer="3/4" set=extra
$\sum_{n=2}^{\infty}\frac{1}{n^2 - 1} = ?$
hint: $\frac{1}{n^2 - 1} = \frac{1}{2}\left(\frac{1}{n - 1} - \frac{1}{n + 1}\right)$.
solution: It telescopes: $\frac{1}{2}\left(1 + \frac{1}{2}\right) = \frac{3}{4}$.
:::

::: problem id=x12 type=numeric answer="40" set=extra
A ball is dropped from 10 m. Each bounce it rises $\frac{3}{5}$ of its last height. What total distance does it travel?
hint: Every rise is matched by an equal fall.
solution: Rises: $6 + 3.6 + \cdots = \frac{6}{1 - 3/5} = 15$. Total $10 + 2 \cdot 15 = 40$ m.
:::

::: problem id=x13 type=numeric answer="3/2" set=extra
$\sum_{n=1}^{\infty}\frac{2^n + 3^n}{6^n} = ?$
solution: Split: $\sum\left(\frac{1}{3}\right)^n + \sum\left(\frac{1}{2}\right)^n = \frac{1}{2} + 1 = \frac{3}{2}$.
:::

::: problem id=x14 type=numeric answer="4/5" set=extra
$\sum_{n=0}^{\infty} r^n = 5$. What is r?
solution: $\frac{1}{1 - r} = 5$, so $1 - r = \frac{1}{5}$ and $r = \frac{4}{5}$.
:::

::: problem id=x15 type=numeric answer="2" set=extra
A student says $\sum_{n=0}^{\infty}\left(\frac{1}{2}\right)^n = 1$. What is the right sum?
solution: The sum starts at $n = 0$, so the first term is 1: $\frac{1}{1 - 1/2} = 2$. (From $n = 1$ it would be 1.)
:::

::: problem id=x16 type=expression answer="1-1/(n+1)" vars="n" set=extra
Write the partial sum $S_n = \sum_{k=1}^{n}\left(\frac{1}{k} - \frac{1}{k + 1}\right)$ in terms of n.
solution: All middle terms cancel: $S_n = 1 - \frac{1}{n + 1}$.
:::

::: problem id=x17 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum_{n=1}^{\infty}\ln\frac{n}{n + 1}$ converge or diverge?
hint: $\ln\frac{n}{n + 1} = \ln n - \ln(n + 1)$. Find $S_n$.
solution: It telescopes to $S_n = -\ln(n + 1) \to -\infty$: **diverges**, even though the terms go to 0.
:::

::: problem id=x18 type=numeric answer="9" set=extra
$\sum_{n=1}^{\infty}\frac{3^{n+1}}{4^n} = ?$
hint: $\frac{3^{n+1}}{4^n} = 3\left(\frac{3}{4}\right)^n$.
solution: $3 \cdot \frac{3/4}{1 - 3/4} = 3 \cdot 3 = 9$.
:::

::: problem id=x19 type=numeric answer="1/4" set=extra
$\sum_{n=1}^{\infty}\frac{1}{n(n + 1)(n + 2)} = ?$
hint: The term is $\frac{1}{2}\left(\frac{1}{n(n + 1)} - \frac{1}{(n + 1)(n + 2)}\right)$.
solution: It telescopes to $\frac{1}{2} \cdot \frac{1}{1 \cdot 2} = \frac{1}{4}$.
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
Find $S = \sum_{n=1}^{\infty}\frac{n}{2^n} = \frac{1}{2} + \frac{2}{4} + \frac{3}{8} + \cdots$ (it converges).
hint: Work out $S - \frac{1}{2}S$ term by term.
solution: $S - \frac{S}{2} = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = 1$. So $\frac{S}{2} = 1$ and $S = 2$.
:::
