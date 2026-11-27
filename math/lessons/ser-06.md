---
id: ser-06
title: Alternating series and absolute convergence
---
When the signs alternate, terms cancel each other, and a series can converge even though its sizes add up to infinity. That leads to two kinds of convergence.

::: rule
**Alternating series test.** If $b_n > 0$ decreases to 0, then $\sum (-1)^{n-1}b_n$ converges.

**Estimation:** the error after n terms is at most the first term left out:

$$|S - S_n| \le b_{n+1}$$

**Absolute vs conditional:**
- $\sum a_n$ converges **absolutely** if $\sum |a_n|$ converges. Then $\sum a_n$ converges too.
- It converges **conditionally** if $\sum a_n$ converges but $\sum |a_n|$ diverges.

**Root test:** $L = \lim |a_n|^{1/n}$. $L < 1$: converges absolutely. $L > 1$: diverges. $L = 1$: no answer. (Handy when $a_n$ is something to the n-th power.)
:::

::: example
$1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ converges by the alternating series test. But $\sum\frac{1}{n}$ diverges, so it converges **conditionally**.

$S_4 = \frac{7}{12} \approx 0.583$, and the error is at most $b_5 = \frac{1}{5}$. (The sum is $\ln 2 \approx 0.693$.)
:::

::: example
$\sum\left(\frac{n}{2n + 1}\right)^n$. Root test:

$$|a_n|^{1/n} = \frac{n}{2n + 1} \to \frac{1}{2} < 1$$

So it converges absolutely.
:::

Type absolutely, conditionally or diverges.

::: problem id=p1 type=text answers="absolutely;absolute;converges absolutely"
Does $\sum \frac{(-1)^n}{n^2}$ converge absolutely, conditionally, or diverge?
solution: $\sum\frac{1}{n^2}$ converges: **absolutely**.
:::

::: problem id=p2 type=text answers="conditionally;conditional;converges conditionally"
Does $\sum \frac{(-1)^n}{\sqrt{n}}$ converge absolutely, conditionally, or diverge?
solution: It converges (alternating, $\frac{1}{\sqrt{n}} \downarrow 0$), but $\sum\frac{1}{\sqrt{n}}$ diverges ($p = \frac{1}{2}$): **conditionally**.
:::

::: problem id=p3 type=numeric answer="1/16"
You add 3 terms of $\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^2}$. What is the error bound?
solution: The first term left out: $b_4 = \frac{1}{16}$.
:::

::: problem id=p4 type=numeric answer="2/3"
What is $S_3$ for $\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n!}$?
solution: $1 - \frac{1}{2} + \frac{1}{6} = \frac{2}{3}$.
:::

::: problem id=p5 type=numeric answer="2/3"
Root test on $\sum\left(\frac{2n}{3n + 1}\right)^n$: what is L?
solution: $\frac{2n}{3n + 1} \to \frac{2}{3} < 1$: converges absolutely.
:::

::: problem id=p6 type=numeric answer="99"
How many terms of $1 - \frac{1}{2} + \frac{1}{3} - \cdots$ guarantee an error of at most 0.01?
solution: Need $b_{n+1} = \frac{1}{n + 1} \le 0.01$: $n + 1 \ge 100$, so $n = 99$.
:::

::: problem id=p7 type=choice
How does $\sum \frac{\cos n}{n^2}$ behave? (The signs are not a simple alternation.)
- [x] converges absolutely
- [ ] converges conditionally
- [ ] diverges
solution: $\left|\frac{\cos n}{n^2}\right| \le \frac{1}{n^2}$, so $\sum|a_n|$ converges by comparison: **absolutely**.
:::

::: problem id=p8 type=choice
How does $\sum (-1)^n\frac{n}{n + 1}$ behave?
- [ ] converges absolutely
- [ ] converges conditionally
- [x] diverges
solution: The sizes go to 1, not 0, so the terms don't go to 0: **diverges**.
:::

::: problem id=x1 type=text answers="absolutely;absolute;converges absolutely" set=extra
Does $\sum \frac{(-1)^n}{n^3}$ converge absolutely, conditionally, or diverge?
solution: $\sum\frac{1}{n^3}$ converges: **absolutely**.
:::

::: problem id=x2 type=text answers="conditionally;conditional;converges conditionally" set=extra
Does $\sum \frac{(-1)^n}{2n + 1}$ converge absolutely, conditionally, or diverge?
solution: Alternating with sizes $\downarrow 0$: converges. But $\sum\frac{1}{2n + 1}$ diverges (like $\frac{1}{n}$): **conditionally**.
:::

::: problem id=x3 type=text answers="conditionally;conditional;converges conditionally" set=extra
Does $\sum \frac{(-1)^nn}{n^2 + 1}$ converge absolutely, conditionally, or diverge?
solution: $\frac{n}{n^2 + 1}$ decreases to 0: converges. Its sizes behave like $\frac{1}{n}$ and diverge: **conditionally**.
:::

::: problem id=x4 type=text answers="absolutely;absolute;converges absolutely" set=extra
Does $\sum (-1)^n\left(\frac{1}{2}\right)^n$ converge absolutely, conditionally, or diverge?
solution: $\sum\left(\frac{1}{2}\right)^n$ converges (geometric): **absolutely**.
:::

::: problem id=x5 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum \frac{(-1)^n2^n}{n}$ converge absolutely, conditionally, or diverge?
solution: $\frac{2^n}{n} \to \infty$: the terms don't go to 0, so it **diverges**.
:::

::: problem id=x6 type=numeric answer="1/10" set=extra
You add 9 terms of $1 - \frac{1}{2} + \frac{1}{3} - \cdots$. What is the error bound?
solution: $b_{10} = \frac{1}{10}$.
:::

::: problem id=x7 type=numeric answer="7/12" set=extra
What is $S_4$ for $\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}$?
solution: $1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} = \frac{12 - 6 + 4 - 3}{12} = \frac{7}{12}$.
:::

::: problem id=x8 type=numeric answer="3/8" set=extra
$\frac{1}{e} = \sum_{n=0}^{\infty}\frac{(-1)^n}{n!}$. Add the terms $n = 0$ to 4.
solution: $1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} = \frac{9}{24} = \frac{3}{8}$. The error is at most $\frac{1}{5!} = \frac{1}{120}$.
:::

::: problem id=x9 type=numeric answer="0" set=extra
Root test on $\sum_{n=2}^{\infty}\left(\frac{1}{\ln n}\right)^n$: what is L?
solution: $|a_n|^{1/n} = \frac{1}{\ln n} \to 0$: converges absolutely.
:::

::: problem id=x10 type=numeric answer="1/e" set=extra
Root test on $\sum\left(\frac{n}{n + 1}\right)^{n^2}$: what is L? (exact)
hint: $|a_n|^{1/n} = \left(\frac{n}{n + 1}\right)^n$.
solution: $\left(\frac{n}{n + 1}\right)^n = \frac{1}{(1 + 1/n)^n} \to \frac{1}{e} < 1$: converges.
:::

::: problem id=x11 type=numeric answer="2" set=extra
Root test on $\sum \frac{2^n}{n^2}$: what is L?
hint: $n^{1/n} \to 1$.
solution: $\frac{2}{(n^{1/n})^2} \to 2 > 1$: diverges.
:::

::: problem id=x12 type=numeric answer="3" set=extra
Root test on $\sum\left(\frac{3n + 1}{n + 5}\right)^n$: what is L?
solution: $\frac{3n + 1}{n + 5} \to 3 > 1$: diverges.
:::

::: problem id=x13 type=choice set=extra
Which statement is true?
- [x] absolute convergence implies convergence
- [ ] convergence implies absolute convergence
- [ ] every alternating series converges
- [ ] the root test always gives an answer
solution: If $\sum|a_n|$ converges, so does $\sum a_n$. The reverse fails: the alternating harmonic series.
:::

::: problem id=x14 type=text answers="diverges;diverge;it diverges" set=extra
A student says: "$\sum\frac{(-1)^n}{n}$ converges, so $\sum\frac{1}{n}$ converges too." Does $\sum\frac{1}{n}$ converge or diverge?
solution: **Diverges**. Convergence doesn't carry over to the absolute values; that's exactly what "conditional" means.
:::

::: problem id=x15 type=numeric answer="31" set=extra
How many terms of $\sum \frac{(-1)^{n-1}}{n^2}$ guarantee an error of at most 0.001?
hint: You need $(n + 1)^2 \ge 1000$.
solution: $31^2 = 961$ is too small, $32^2 = 1024$ works: $n + 1 = 32$, so $n = 31$.
:::

::: problem id=x16 type=numeric answer="1/720" set=extra
$\cos 1 \approx 1 - \frac{1}{2} + \frac{1}{24}$. The series alternates. What is the error bound?
solution: The next term: $\frac{1}{6!} = \frac{1}{720}$.
:::

::: problem id=x17 type=numeric answer="1/3840" set=extra
$\sin 0.5 \approx 0.5 - \frac{0.5^3}{6}$. What is the alternating-series error bound?
hint: The next term is $\frac{x^5}{5!}$.
solution: $\frac{0.5^5}{120} = \frac{1/32}{120} = \frac{1}{3840}$.
:::

::: problem id=x18 type=text answers="absolutely;absolute;converges absolutely" set=extra
Does $\sum \frac{(-1)^nn}{2^n}$ converge absolutely, conditionally, or diverge?
hint: Use the ratio test on $\frac{n}{2^n}$.
solution: $\frac{n + 1}{2n} \to \frac{1}{2} < 1$, so $\sum\frac{n}{2^n}$ converges: **absolutely**.
:::

::: problem id=x19 type=choice set=extra
For which p does $\sum\frac{(-1)^n}{n^p}$ converge **conditionally**?
- [ ] $p > 1$
- [x] $0 < p \le 1$
- [ ] $p \le 0$
- [ ] all p
solution: For $p > 0$ the alternating test gives convergence; $\sum\frac{1}{n^p}$ diverges for $p \le 1$. For $p \le 0$ the terms don't go to 0.
:::

::: problem id=x20 type=numeric answer="ln(2)/2" set=extra creative=true
Rearrange $1 - \frac{1}{2} + \frac{1}{3} - \cdots = \ln 2$ as $1 - \frac{1}{2} - \frac{1}{4} + \frac{1}{3} - \frac{1}{6} - \frac{1}{8} + \cdots$ (one odd, two evens). What does it sum to? (exact)
hint: Group $\left(1 - \frac{1}{2}\right) - \frac{1}{4} + \left(\frac{1}{3} - \frac{1}{6}\right) - \frac{1}{8} + \cdots$.
solution: The groups give $\frac{1}{2} - \frac{1}{4} + \frac{1}{6} - \frac{1}{8} + \cdots$, which is half the original: $\frac{\ln 2}{2}$. Rearranging a conditionally convergent series can change its sum!
:::
