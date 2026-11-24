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
$\sum_{n=1}^{\infty}\frac{1}{n(n + 1)} = \sum\left(\frac{1}{n} - \frac{1}{n + 1}\right) = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots$. Almost everything cancels (it **telescopes**), and $S_n = 1 - \frac{1}{n + 1} \to 1$.
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
