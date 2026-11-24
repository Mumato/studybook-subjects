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
$\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty}\left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty}\left(1 - \frac{1}{b}\right) = 1$.
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
