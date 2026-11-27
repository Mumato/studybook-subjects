---
id: ser-05
title: The integral test and limit comparison
---
A series with positive, shrinking terms behaves like the area under a matching curve. And a messy series behaves like a simple one when their terms are roughly proportional.

::: rule
**Integral test.** Let $a_n = f(n)$ where f is **positive, continuous and decreasing** for $x \ge N$. Then

$$\sum_{n=N}^{\infty} a_n \text{ and } \int_N^{\infty} f(x)\,dx$$

both converge or both diverge. (The integral is **not** the sum.)

**Remainder estimate:** after n terms the error $R_n = S - S_n$ satisfies

$$\int_{n+1}^{\infty} f(x)\,dx \le R_n \le \int_n^{\infty} f(x)\,dx$$

**Limit comparison test.** If $a_n, b_n > 0$ and $\lim\frac{a_n}{b_n} = c$ with $0 < c < \infty$, then $\sum a_n$ and $\sum b_n$ both converge or both diverge. Choose $b_n$ from the leading powers.
:::

::: example
$\sum_{n=2}^{\infty}\frac{1}{n\ln n}$. Let $f(x) = \frac{1}{x\ln x}$: positive and decreasing. With $u = \ln x$:

$$\int_2^b \frac{dx}{x\ln x} = \ln(\ln b) - \ln(\ln 2)$$

That grows without limit, so the series **diverges**.
:::

::: example
$\sum \frac{2n + 1}{n^3 + 4}$. For large n the terms look like $\frac{2n}{n^3} = \frac{2}{n^2}$. Take $b_n = \frac{1}{n^2}$:

$$\frac{a_n}{b_n} = \frac{2n^3 + n^2}{n^3 + 4} \to 2$$

Since $0 < 2 < \infty$ and $\sum\frac{1}{n^2}$ converges, the series **converges**.
:::

::: problem id=p1 type=numeric answer="pi/4"
For $\sum \frac{1}{n^2 + 1}$, the integral test uses $\int_1^{\infty}\frac{dx}{1 + x^2}$. What is that integral? (So the series converges.)
solution: $[\arctan x]_1^{\infty} = \frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4}$.
:::

::: problem id=p2 type=text answers="diverges;diverge;it diverges"
Does $\sum_{n=2}^{\infty}\frac{1}{n\ln n}$ converge or diverge?
solution: The integral $\ln(\ln b) \to \infty$: **diverges**.
:::

::: problem id=p3 type=numeric answer="1/(2e)"
For $\sum ne^{-n^2}$, find $\int_1^{\infty} xe^{-x^2}\,dx$. (exact)
hint: $u = x^2$.
solution: $\left[-\frac{1}{2}e^{-x^2}\right]_1^{\infty} = \frac{1}{2e}$. Finite, so the series converges.
:::

::: problem id=p4 type=numeric answer="1"
Compare $\sum \frac{n + 1}{n^3 + 2}$ with $b_n = \frac{1}{n^2}$. What is $\lim\frac{a_n}{b_n}$?
solution: $\frac{n^3 + n^2}{n^3 + 2} \to 1$. So the series converges, like $\sum\frac{1}{n^2}$.
:::

::: problem id=p5 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{1}{2n + 3}$ converge or diverge?
hint: Compare with $\frac{1}{n}$.
solution: $\frac{1/(2n + 3)}{1/n} = \frac{n}{2n + 3} \to \frac{1}{2}$. The harmonic series diverges, so this **diverges**.
:::

::: problem id=p6 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{1}{\sqrt{n^2 + 1}}$ converge or diverge?
solution: For large n, $\sqrt{n^2 + 1} \approx n$. With $b_n = \frac{1}{n}$ the limit is 1: **diverges**.
:::

::: problem id=p7 type=numeric answer="1/10"
You add the first 10 terms of $\sum \frac{1}{n^2}$. What upper bound does the integral give for the error $R_{10}$?
solution: $R_{10} \le \int_{10}^{\infty}\frac{dx}{x^2} = \frac{1}{10}$.
:::

::: problem id=p8 type=choice
Which test settles $\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^2}$ most easily?
- [x] the integral test
- [ ] the ratio test
- [ ] the n-th term test
- [ ] geometric series
solution: $\int_2^{\infty}\frac{dx}{x(\ln x)^2} = \frac{1}{\ln 2}$ (with $u = \ln x$): converges. The ratio test gives $L = 1$, and the terms do go to 0.
:::

::: problem id=x1 type=numeric answer="1/2" set=extra
For $\sum \frac{1}{n^3}$, what is $\int_1^{\infty}\frac{dx}{x^3}$?
solution: $\left[-\frac{1}{2x^2}\right]_1^{\infty} = \frac{1}{2}$: converges.
:::

::: problem id=x2 type=numeric answer="1/e" set=extra
For $\sum e^{-n}$, what is $\int_1^{\infty} e^{-x}\,dx$? (exact)
solution: $[-e^{-x}]_1^{\infty} = \frac{1}{e}$: converges.
:::

::: problem id=x3 type=text answers="diverges;diverge;it diverges" set=extra
Use the integral test: does $\sum \frac{\ln n}{n}$ converge or diverge?
solution: $\int \frac{\ln x}{x}\,dx = \frac{(\ln x)^2}{2} \to \infty$: **diverges**.
:::

::: problem id=x4 type=numeric answer="1/ln(2)" set=extra
What is $\int_2^{\infty}\frac{dx}{x(\ln x)^2}$? (exact)
solution: $u = \ln x$: $\int_{\ln 2}^{\infty}\frac{du}{u^2} = \frac{1}{\ln 2}$.
:::

::: problem id=x5 type=numeric answer="3" set=extra
Compare $\sum \frac{3n^2 + 1}{n^4 + n}$ with $b_n = \frac{1}{n^2}$. What is the limit c?
solution: $\frac{3n^4 + n^2}{n^4 + n} \to 3$. Converges, like $\sum\frac{1}{n^2}$.
:::

::: problem id=x6 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum \frac{n^2 + 1}{n^3 + 5}$ converge or diverge?
solution: Like $\frac{n^2}{n^3} = \frac{1}{n}$; the limit with $b_n = \frac{1}{n}$ is 1: **diverges**.
:::

::: problem id=x7 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{1}{n^2 - n + 1}$ converge or diverge?
solution: With $b_n = \frac{1}{n^2}$: $\frac{n^2}{n^2 - n + 1} \to 1$: **converges**. (Plain comparison fails here, since the terms are **bigger** than $\frac{1}{n^2}$.)
:::

::: problem id=x8 type=text answers="converges;converge;it converges" set=extra
Does $\sum \frac{\sqrt{n}}{n^2 + 1}$ converge or diverge?
solution: Like $\frac{n^{1/2}}{n^2} = \frac{1}{n^{3/2}}$, and $p = \frac{3}{2} > 1$: **converges**.
:::

::: problem id=x9 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum \sin\frac{1}{n}$ converge or diverge?
hint: $\frac{\sin u}{u} \to 1$ as $u \to 0$.
solution: With $b_n = \frac{1}{n}$ the limit is 1. The harmonic series diverges, so this **diverges**.
:::

::: problem id=x10 type=choice set=extra
Which $b_n$ is best for a limit comparison with $\sum \frac{1}{3^n - 1}$?
- [x] $\left(\frac{1}{3}\right)^n$
- [ ] $\frac{1}{n}$
- [ ] $\frac{1}{n^3}$
- [ ] $3^n$
solution: $\frac{3^n}{3^n - 1} \to 1$, and $\sum\left(\frac{1}{3}\right)^n$ converges: so does the series.
:::

::: problem id=x11 type=choice set=extra
What must $f$ be (for large x) to use the integral test?
- [x] positive, continuous and decreasing
- [ ] increasing
- [ ] a polynomial
- [ ] positive only
solution: All three: positive, continuous, decreasing. Then the rectangles $a_n$ sit just above and below the curve.
:::

::: problem id=x12 type=choice set=extra
$\int_1^{\infty}\frac{dx}{x^2} = 1$. What does this tell you about $\sum_{n=1}^{\infty}\frac{1}{n^2}$?
- [ ] it equals 1
- [x] it converges, to some number that need not be 1
- [ ] it diverges
- [ ] nothing
solution: The integral test only gives convergence. The sum is actually $\frac{\pi^2}{6} \approx 1.645$.
:::

::: problem id=x13 type=numeric answer="1/50" set=extra
You add the first 5 terms of $\sum \frac{1}{n^3}$. What upper bound does the integral give for the error?
solution: $R_5 \le \int_5^{\infty}\frac{dx}{x^3} = \frac{1}{2 \cdot 25} = \frac{1}{50}$.
:::

::: problem id=x14 type=numeric answer="1000" set=extra
How many terms of $\sum \frac{1}{n^2}$ guarantee (by the integral bound) an error of at most 0.001?
solution: $R_n \le \frac{1}{n} \le 0.001$ when $n \ge 1000$.
:::

::: problem id=x15 type=numeric answer="1/11" set=extra
For $\sum \frac{1}{n^2}$, what **lower** bound does the integral give for $R_{10}$?
solution: $R_{10} \ge \int_{11}^{\infty}\frac{dx}{x^2} = \frac{1}{11}$.
:::

::: problem id=x16 type=choice set=extra
For which p does $\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^p}$ converge?
- [ ] all p
- [ ] $p \ge 1$
- [x] $p > 1$
- [ ] $p < 1$
hint: With $u = \ln x$ the integral becomes $\int \frac{du}{u^p}$.
solution: That is a p-integral in u: it converges exactly when $p > 1$.
:::

::: problem id=x17 type=numeric answer="2/e" set=extra
For $\sum \frac{n}{e^n}$, what is $\int_1^{\infty} xe^{-x}\,dx$? (exact)
hint: Parts: the antiderivative is $-xe^{-x} - e^{-x}$.
solution: At $\infty$: 0. At 1: $-\frac{2}{e}$. The integral is $\frac{2}{e}$: converges.
:::

::: problem id=x18 type=numeric answer="1/2" set=extra
Compare $\sum\left(1 - \cos\frac{1}{n}\right)$ with $b_n = \frac{1}{n^2}$. What is the limit c?
hint: $1 - \cos u \approx \frac{u^2}{2}$ for small u.
solution: $\frac{1 - \cos(1/n)}{1/n^2} \to \frac{1}{2}$. So the series converges.
:::

::: problem id=x19 type=text answers="diverges;diverge;it diverges" set=extra
Does $\sum \frac{1}{n^{1 + 1/n}}$ converge or diverge?
hint: Compare with $\frac{1}{n}$. What does $n^{1/n}$ approach?
solution: With $b_n = \frac{1}{n}$: $\frac{a_n}{b_n} = \frac{1}{n^{1/n}} \to 1$. Like the harmonic series: **diverges**.
:::

::: problem id=x20 type=numeric answer="1.6452" tolerance="0.001" set=extra creative=true
$S_{10} = \sum_{n=1}^{10}\frac{1}{n^2} \approx 1.54977$. The true sum lies between $S_{10} + \frac{1}{11}$ and $S_{10} + \frac{1}{10}$. Estimate it by the middle of that range. (to 3 decimals)
solution: $1.54977 + \frac{1}{2}\left(\frac{1}{11} + \frac{1}{10}\right) \approx 1.6452$. The true value $\frac{\pi^2}{6} \approx 1.6449$ is very close.
:::
