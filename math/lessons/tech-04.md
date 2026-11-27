---
id: tech-04
title: Improper integrals
---
::: rule
An **improper integral** goes on forever, or across a point where f blows up. Handle it with a limit:

$$\int_1^{\infty} f(x)\,dx = \lim_{b \to \infty}\int_1^b f(x)\,dx$$

If the limit is a number, the integral **converges**; otherwise it **diverges**.

Key fact: $\int_1^{\infty} \frac{1}{x^p}\,dx$ converges exactly when $p > 1$, to $\frac{1}{p - 1}$.
:::

::: example
$\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty}\left[-\frac{1}{x}\right]_1^b$, which is $\lim_{b \to \infty}\left(1 - \frac{1}{b}\right) = 1$.
:::

::: graph
x 0..6
y -0.2..1.5
polygon 1,0 1,1 1.5,0.444 2,0.25 3,0.111 4,0.0625 6,0.028 6,0 fill
plot 1/x^2 blue
:::

::: problem id=p1 type=numeric answer="1"
$\int_1^{\infty} \frac{1}{x^2}\,dx = ?$
solution: 1.
:::

::: problem id=p2 type=numeric answer="1/2"
$\int_1^{\infty} \frac{1}{x^3}\,dx = ?$
solution: $p = 3$: $\frac{1}{3 - 1} = \frac{1}{2}$.
:::

::: problem id=p3 type=choice
What does $\int_1^{\infty} \frac{1}{x}\,dx$ do?
- [ ] it equals 1
- [x] it diverges
- [ ] it equals 0
hint: $\int_1^b \frac{1}{x}\,dx = \ln b$.
solution: $\ln b$ grows without limit, so it **diverges**.
:::

::: problem id=p4 type=numeric answer="1"
$\int_0^{\infty} e^{-x}\,dx = ?$
solution: $\lim_{b \to \infty}(1 - e^{-b}) = 1$.
:::

::: problem id=p5 type=numeric answer="2"
$\int_0^1 \frac{1}{\sqrt{x}}\,dx = ?$
hint: It blows up at 0, but an antiderivative is $2\sqrt{x}$.
solution: $[2\sqrt{x}]_0^1 = 2$.
:::

::: problem id=p6 type=choice
For which p does $\int_1^{\infty} \frac{1}{x^p}\,dx$ converge?
- [x] $p > 1$
- [ ] $p \ge 1$
- [ ] $p < 1$
solution: Only $p > 1$; $p = 1$ is the diverging $\frac{1}{x}$.
:::

::: problem id=p7 type=numeric answer="1/2"
$\int_0^{\infty} e^{-2x}\,dx = ?$
hint: An antiderivative is $-\frac{1}{2}e^{-2x}$.
solution: $0 - \left(-\frac{1}{2}\right) = \frac{1}{2}$.
:::

::: problem id=p8 type=numeric answer="1/2"
$\int_2^{\infty} \frac{1}{x^2}\,dx = ?$
solution: $\left[-\frac{1}{x}\right]_2^{\infty} = 0 + \frac{1}{2} = \frac{1}{2}$.
:::

::: problem id=c1 type=numeric answer="pi" creative=true
Spin the curve $y = \frac{1}{x}$ for $x \ge 1$ around the x-axis. The horn it makes has **infinite** surface area, but its volume is $\pi\int_1^{\infty} \frac{1}{x^2}\,dx$. What is the volume? (in terms of pi)
solution: $\pi \times 1 = \pi$. You could fill it with paint, but never paint its surface!
:::

::: problem id=x1 type=numeric answer="1/4" set=extra
$\int_1^{\infty} \frac{1}{x^5}\,dx = ?$
solution: $p = 5$: $\frac{1}{5 - 1} = \frac{1}{4}$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
$\int_0^{\infty} e^{-x/2}\,dx = ?$
solution: Antiderivative $-2e^{-x/2}$. $\lim_{b \to \infty}(-2e^{-b/2}) + 2 = 2$.
:::

::: problem id=x3 type=numeric answer="2" set=extra
$\int_1^{\infty} x^{-3/2}\,dx = ?$
solution: $p = \frac{3}{2}$: $\frac{1}{3/2 - 1} = 2$.
:::

::: problem id=x4 type=numeric answer="3/2" set=extra
$\int_0^1 x^{-1/3}\,dx = ?$
hint: It blows up at 0. An antiderivative is $\frac{3}{2}x^{2/3}$.
solution: $\left[\frac{3}{2}x^{2/3}\right]_0^1 = \frac{3}{2}$.
:::

::: problem id=x5 type=choice set=extra
What does $\int_1^{\infty} \frac{1}{\sqrt{x}}\,dx$ do?
- [ ] it equals 2
- [ ] it equals $\frac{1}{2}$
- [x] it diverges
solution: $p = \frac{1}{2} \le 1$. Indeed $[2\sqrt{x}]_1^b = 2\sqrt{b} - 2$ grows without limit: **diverges**.
:::

::: problem id=x6 type=numeric answer="1/9" set=extra
$\int_3^{\infty} \frac{2}{x^3}\,dx = ?$
solution: Antiderivative $-\frac{1}{x^2}$. $0 - \left(-\frac{1}{9}\right) = \frac{1}{9}$.
:::

::: problem id=x7 type=text answers="diverges;diverge;it diverges" set=extra
Does $\int_0^1 \frac{1}{x^2}\,dx$ converge or diverge?
solution: $\left[-\frac{1}{x}\right]_t^1 = -1 + \frac{1}{t}$, which blows up as $t \to 0^+$: **diverges**.
:::

::: problem id=x8 type=numeric answer="1" set=extra
$\int_0^{\infty} xe^{-x}\,dx = ?$
hint: Parts gives $-xe^{-x} - e^{-x}$.
solution: At b: $-be^{-b} - e^{-b} \to 0$ (L'Hôpital for $\frac{b}{e^b}$). At 0: $-1$. Answer $0 - (-1) = 1$.
:::

::: problem id=x9 type=numeric answer="1/2" set=extra
$\int_{-\infty}^0 e^{2x}\,dx = ?$
solution: $\left[\frac{e^{2x}}{2}\right]_a^0 = \frac{1}{2} - \frac{e^{2a}}{2} \to \frac{1}{2}$ as $a \to -\infty$.
:::

::: problem id=x10 type=numeric answer="pi" set=extra
$\int_{-\infty}^{\infty} \frac{1}{1 + x^2}\,dx = ?$
hint: Antiderivative $\arctan x$. Where does it go at $\pm\infty$?
solution: $\arctan x \to \frac{\pi}{2}$ and $-\frac{\pi}{2}$. Answer: $\frac{\pi}{2} - \left(-\frac{\pi}{2}\right) = \pi$.
:::

::: problem id=x11 type=numeric answer="6" set=extra
$\int_0^9 \frac{1}{\sqrt{x}}\,dx = ?$
solution: $[2\sqrt{x}]_0^9 = 6 - 0 = 6$.
:::

::: problem id=x12 type=choice set=extra
A student says $\int_{-1}^{1} \frac{1}{x^2}\,dx = \left[-\frac{1}{x}\right]_{-1}^{1} = -2$. What is wrong?
- [ ] nothing: the answer is $-2$
- [x] $\frac{1}{x^2}$ blows up at 0, and that integral diverges
- [ ] the answer should be $+2$
- [ ] the answer should be 0
hint: Can a positive function have a negative area?
solution: The integrand blows up at $x = 0$, inside the interval. Split there: $\int_0^1 \frac{1}{x^2}\,dx$ already diverges, so the whole integral **diverges**.
:::

::: problem id=x13 type=numeric answer="ln(2)" set=extra
$\int_2^{\infty} \frac{1}{x(x - 1)}\,dx = ?$ (exact)
hint: $\frac{1}{x(x - 1)} = \frac{1}{x - 1} - \frac{1}{x}$.
solution: Antiderivative $\ln\frac{x - 1}{x}$, which goes to $\ln 1 = 0$. At 2: $\ln\frac{1}{2}$. Answer $0 - \ln\frac{1}{2} = \ln 2$.
:::

::: problem id=x14 type=numeric answer="3/2" set=extra
For which p does $\int_1^{\infty} \frac{1}{x^p}\,dx = 2$?
solution: $\frac{1}{p - 1} = 2$, so $p - 1 = \frac{1}{2}$ and $p = \frac{3}{2}$.
:::

::: problem id=x15 type=numeric answer="10" set=extra
A drug enters the blood at $r(t) = 5e^{-0.5t}$ mg per hour, forever. How many mg enter in total?
solution: $\int_0^{\infty} 5e^{-0.5t}\,dt = \frac{5}{0.5} = 10$ mg.
:::

::: problem id=x16 type=numeric answer="1/2" set=extra
$\int_0^{\infty} e^{-x}\sin x\,dx = ?$
hint: Parts twice gives the antiderivative $-\frac{e^{-x}(\sin x + \cos x)}{2}$.
solution: At $\infty$ the antiderivative goes to 0 (because of $e^{-x}$). At 0: $-\frac{1}{2}$. Answer $\frac{1}{2}$.
:::

::: problem id=x17 type=numeric answer="1" set=extra
$\int_e^{\infty} \frac{1}{x(\ln x)^2}\,dx = ?$
hint: $u = \ln x$.
solution: $\int_1^{\infty} \frac{du}{u^2} = 1$.
:::

::: problem id=x18 type=numeric answer="6" set=extra
$\int_0^2 \frac{1}{(x - 1)^{2/3}}\,dx = ?$
hint: It blows up at $x = 1$: split there. An antiderivative is $3(x - 1)^{1/3}$.
solution: $\int_0^1 = 0 - 3(-1) = 3$ and $\int_1^2 = 3 - 0 = 3$. Both converge: total 6.
:::

::: problem id=x19 type=numeric answer="1/2" set=extra
$\int_0^{\infty} xe^{-x^2}\,dx = ?$
hint: $u = x^2$.
solution: Antiderivative $-\frac{1}{2}e^{-x^2}$. $0 - \left(-\frac{1}{2}\right) = \frac{1}{2}$.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
Let $I_n = \int_0^{\infty} x^ne^{-x}\,dx$. Parts shows $I_n = nI_{n-1}$, and $I_0 = 1$. What is $I_3$?
hint: Find $I_1$ and $I_2$ first.
solution: $I_1 = 1$, $I_2 = 2$, $I_3 = 3 \cdot 2 = 6$. In general $I_n = n!$.
:::
