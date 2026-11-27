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
$\int \frac{1}{x(x + 1)}\,dx = ?$ (type abs for $|\,|$, leave out + C)
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

::: problem id=t8 type=expression answer="-xcos(2x)/2+sin(2x)/4" form=antiderivative
$\int x\sin 2x\,dx = ?$ (leave out + C)
solution: $u = x$, $v = -\frac{\cos 2x}{2}$. Then $-\frac{x\cos 2x}{2} + \int \frac{\cos 2x}{2}\,dx$, which is $-\frac{x\cos 2x}{2} + \frac{\sin 2x}{4} + C$.
:::

::: problem id=t9 type=numeric answer="(e^2+1)/4"
$\int_1^e x\ln x\,dx = ?$ (exact)
solution: Antiderivative $\frac{x^2\ln x}{2} - \frac{x^2}{4}$. At e: $\frac{e^2}{4}$. At 1: $-\frac{1}{4}$. Answer $\frac{e^2 + 1}{4}$.
:::

::: problem id=t10 type=numeric answer="2"
$\frac{x + 7}{(x - 1)(x + 3)} = \frac{A}{x - 1} + \frac{B}{x + 3}$. What is A?
solution: Cover $(x - 1)$, put $x = 1$: $\frac{8}{4} = 2$.
:::

::: problem id=t11 type=numeric answer="ln(3/2)/2"
$\int_0^1 \frac{dx}{(x + 1)(x + 3)} = ?$ (exact)
solution: $A = \frac{1}{2}$, $B = -\frac{1}{2}$. $\frac{1}{2}[\ln(x + 1) - \ln(x + 3)]_0^1$ is $\frac{1}{2}\left(\ln\frac{2}{4} + \ln 3\right) = \frac{1}{2}\ln\frac{3}{2}$.
:::

::: problem id=t12 type=expression answer="-(cos(x)^3)/3+cos(x)^5/5" form=antiderivative
$\int \sin^3 x\cos^2 x\,dx = ?$ (leave out + C)
solution: $\sin^3 x = (1 - \cos^2 x)\sin x$; $u = \cos x$: $-\int (u^2 - u^4)\,du$. Answer: $-\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C$.
:::

::: problem id=t13 type=numeric answer="pi/4"
$\int_0^{\pi/2} \sin^2 x\,dx = ?$
solution: $\left[\frac{x}{2} - \frac{\sin 2x}{4}\right]_0^{\pi/2} = \frac{\pi}{4}$.
:::

::: problem id=t14 type=numeric answer="pi/2"
$\int_0^{\infty} \frac{dx}{1 + x^2} = ?$
solution: $\lim_{b \to \infty}\arctan b - 0 = \frac{\pi}{2}$.
:::

::: problem id=t15 type=choice
Which substitution fits $\int \frac{dx}{\sqrt{x^2 + 25}}$?
- [ ] $x = 5\sin\theta$
- [x] $x = 5\tan\theta$
- [ ] $x = 5\sec\theta$
- [ ] $u = x^2 + 25$
solution: $\sqrt{a^2 + x^2}$: $x = 5\tan\theta$ makes it $5\sec\theta$. (A plain u-substitution fails: there is no factor x.)
:::

::: problem id=t16 type=expression answer="x/(4sqrt(x^2+4))" form=antiderivative
$\int \frac{dx}{(x^2 + 4)^{3/2}} = ?$ (leave out + C)
solution: $x = 2\tan\theta$: $\frac{1}{4}\int \cos\theta\,d\theta = \frac{\sin\theta}{4}$. With $\sin\theta = \frac{x}{\sqrt{x^2 + 4}}$: $\frac{x}{4\sqrt{x^2 + 4}} + C$.
:::

::: problem id=t17 type=numeric answer="20/3"
Find Simpson's $S_2$ for $\int_0^2 x^4\,dx$.
solution: $\Delta x = 1$: $\frac{1}{3}(0 + 4 \cdot 1 + 16) = \frac{20}{3}$. (Exact: $\frac{32}{5}$; Simpson isn't exact for degree 4.)
:::

::: problem id=t18 type=numeric answer="90"
For $\int_0^2 x^3\,dx$, $|f''| = |6x| \le 12$. What is the smallest n that guarantees the trapezoid error is at most 0.001?
solution: $\frac{12 \cdot 2^3}{12n^2} = \frac{8}{n^2} \le 0.001$, so $n^2 \ge 8000$. $89^2 = 7921$ is too small: $n = 90$.
:::
