---
id: tech-test
title: Integration techniques test
pass: 0.8
---
::: problem id=t1 type=expression answer="xe^(2x)/2-e^(2x)/4" form=antiderivative
$\int xe^{2x}\,dx = ?$ (leave out + C)
solution: $u = x$, $v = \frac{e^{2x}}{2}$: $\frac{xe^{2x}}{2} - \frac{e^{2x}}{4} + C$.
:::

::: problem id=t2 type=expression answer="xln(x)-x" form=antiderivative
$\int \ln x\,dx = ?$ (leave out + C)
solution: $x\ln x - x + C$.
:::

::: problem id=t3 type=expression answer="ln(abs(x))-ln(abs(x+1))" form=antiderivative
$\int \frac{1}{x(x + 1)}\,dx = ?$ (leave out + C)
solution: $\frac{1}{x} - \frac{1}{x + 1}$ integrates to $\ln|x| - \ln|x + 1| + C$.
:::

::: problem id=t4 type=numeric answer="pi/2"
$\int_0^{\pi} \cos^2 x\,dx = ?$
solution: $\left[\frac{x}{2} + \frac{\sin 2x}{4}\right]_0^{\pi} = \frac{\pi}{2}$.
:::

::: problem id=t5 type=numeric answer="1/3"
$\int_1^{\infty} \frac{1}{x^4}\,dx = ?$
solution: $\frac{1}{4 - 1} = \frac{1}{3}$.
:::

::: problem id=t6 type=numeric answer="1/3"
$\int_0^{\infty} e^{-3x}\,dx = ?$
solution: $\frac{1}{3}$.
:::

::: problem id=t7 type=expression answer="tan(2x)/2" form=antiderivative
$\int \sec^2(2x)\,dx = ?$ (leave out + C)
solution: $\frac{1}{2}\tan(2x) + C$.
:::
