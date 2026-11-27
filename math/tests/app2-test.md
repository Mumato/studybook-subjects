---
id: app2-test
title: More applications of derivatives test
pass: 0.8
---
::: problem id=t1 type=expression answer="3x-2"
Find the linearization of $f(x) = x^3$ at $a = 1$, as $L(x) = \ldots$
solution: $f(1) = 1$, $f'(1) = 3$. $L(x) = 1 + 3(x - 1) = 3x - 2$.
:::

::: problem id=t2 type=numeric answer="4.05"
Use a linearization of $\sqrt{x}$ at 16 to estimate $\sqrt{16.4}$.
solution: $f'(16) = \frac{1}{8}$. $4 + \frac{0.4}{8} = 4.05$.
:::

::: problem id=t3 type=numeric answer="1.4"
$y = x^2 + x$. Find dy when $x = 3$ and $dx = 0.2$.
solution: $dy = (2x + 1)\,dx = 7 \cdot 0.2 = 1.4$.
:::

::: problem id=t4 type=numeric answer="7.5"
A cube's edge is measured as 5 cm, with a possible error of 0.1 cm. Estimate the possible error in its volume, in cm³.
solution: $dV = 3s^2\,ds = 3 \cdot 25 \cdot 0.1 = 7.5$ cm³.
:::

::: problem id=t5 type=numeric answer="-0.02"
Use a linearization of $\ln x$ at 1 to estimate $\ln(0.98)$.
solution: $L(x) = x - 1$: $0.98 - 1 = -0.02$.
:::

::: problem id=t6 type=numeric answer="1"
Find the c that the Mean Value Theorem gives for $f(x) = x^2 - x$ on $[0, 2]$.
solution: Average slope $\frac{2 - 0}{2} = 1$. $2c - 1 = 1$, $c = 1$.
:::

::: problem id=t7 type=numeric answer="2/sqrt(3)"
Find c for $f(x) = x^3$ on $[0, 2]$. (exact)
solution: Average slope $\frac{8}{2} = 4$. $3c^2 = 4$, $c = \frac{2}{\sqrt{3}}$.
:::

::: problem id=t8 type=numeric answer="1"
$f(x) = x^2 - 2x - 3$ has $f(-1) = f(3) = 0$. Find the c that Rolle's theorem gives.
solution: $2c - 2 = 0$, $c = 1$.
:::

::: problem id=t9 type=choice
Why does the MVT not apply to $f(x) = \frac{1}{x - 1}$ on $[0, 2]$?
- [x] f is not continuous at $x = 1$
- [ ] f is not differentiable at $x = 0$
- [ ] $f(0) \ne f(2)$
- [ ] it does apply
solution: f is undefined at $x = 1$, inside the interval, so it isn't continuous there.
:::

::: problem id=t10 type=numeric answer="14"
$f(1) = 4$ and $f'(x) \le 2$ for all x. What is the largest possible value of $f(6)$?
solution: MVT: $f(6) = 4 + 5f'(c) \le 4 + 10 = 14$.
:::

::: problem id=t11 type=numeric answer="5/2"
$\lim_{x \to 0} \frac{\sin 5x}{2x} = ?$
solution: $\frac{0}{0}$. $\frac{5\cos 5x}{2} \to \frac{5}{2}$.
:::

::: problem id=t12 type=numeric answer="0"
$\lim_{x \to \infty} \frac{x^2}{e^x} = ?$
solution: Twice: $\frac{2x}{e^x}$, then $\frac{2}{e^x} \to 0$.
:::

::: problem id=t13 type=numeric answer="1/2"
$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = ?$
solution: $\frac{e^x - 1}{2x}$, still $\frac{0}{0}$; then $\frac{e^x}{2} \to \frac{1}{2}$.
:::

::: problem id=t14 type=numeric answer="e^2"
$\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^x = ?$ (exact)
solution: $\ln y = \frac{\ln(1 + 2/x)}{1/x}$. Derivatives: $\frac{2}{1 + 2/x} \to 2$.
So $y \to e^2$.
:::

::: problem id=t15 type=numeric answer="5"
$f(x) = \frac{x + 2}{x - 5}$ has a vertical asymptote $x = ?$
solution: The denominator is 0 at $x = 5$.
:::

::: problem id=t16 type=numeric answer="2"
$f(x) = \frac{6x^2 + 1}{3x^2 - x}$ has a horizontal asymptote $y = ?$
solution: Leading coefficients: $\frac{6}{3} = 2$.
:::

::: problem id=t17 type=point answer="3,-2"
Here is $y = x^3 - 6x^2 + 9x - 2$. Click its local minimum.
graph:
x -1..5
y -4..4
plot x^3-6x^2+9x-2 blue
solution: $f' = 3(x - 1)(x - 3)$: − to + at $x = 3$.
$f(3) = 27 - 54 + 27 - 2 = -2$: $(3, -2)$.
:::

::: problem id=t18 type=choice
Which description fits $f(x) = x^3 - 3x^2$?
- [ ] max $(2, -4)$, min $(0, 0)$, inflection at $x = 1$
- [x] max $(0, 0)$, min $(2, -4)$, inflection at $x = 1$
- [ ] max $(0, 0)$, min $(2, -4)$, inflection at $x = 0$
- [ ] min $(0, 0)$, no max, inflection at $x = 2$
solution: $f' = 3x(x - 2)$: + − + gives max at 0, min at 2 ($f(2) = -4$). $f'' = 6x - 6 = 0$ at $x = 1$.
:::
