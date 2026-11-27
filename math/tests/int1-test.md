---
id: int1-test
title: Integrals test
pass: 0.8
---
::: problem id=t1 type=expression answer="x^5/5+x^2" form=antiderivative
$\int (x^4 + 2x)\,dx = ?$ (leave out + C)
solution: $\frac{x^5}{5} + x^2 + C$.
:::

::: problem id=t2 type=expression answer="-cos(x)" form=antiderivative
$\int \sin x\,dx = ?$ (leave out + C)
solution: $-\cos x + C$.
:::

::: problem id=t3 type=numeric answer="12"
$\int_0^4 \frac{3}{2}x\,dx = ?$
solution: $\left[\frac{3}{4}x^2\right]_0^4 = 12$.
:::

::: problem id=t4 type=numeric answer="26/3"
$\int_1^3 x^2\,dx = ?$
solution: $\frac{27}{3} - \frac{1}{3} = \frac{26}{3}$.
:::

::: problem id=t5 type=numeric answer="1"
$\int_0^{\pi/2} \cos x\,dx = ?$
solution: $\sin\frac{\pi}{2} - \sin 0 = 1$.
:::

::: problem id=t6 type=expression answer="(3x-2)^4/12" form=antiderivative
$\int (3x - 2)^3\,dx = ?$ (leave out + C)
solution: $\frac{1}{3} \cdot \frac{(3x - 2)^4}{4} = \frac{(3x - 2)^4}{12} + C$.
:::

::: problem id=t7 type=numeric answer="6"
Estimate $\int_0^3 x\,dx$ with 3 rectangles of width 1, using the right edges.
solution: $1 + 2 + 3 = 6$.
:::

::: problem id=t8 type=expression answer="2x^3-2x^2+x" form=antiderivative
$\int (6x^2 - 4x + 1)\,dx = ?$ (leave out + C)
solution: $2x^3 - 2x^2 + x + C$.
:::

::: problem id=t9 type=expression answer="sin(x)+2"
$F'(x) = \cos x$ and $F(0) = 2$. What is $F(x)$?
solution: $F = \sin x + C$, and $F(0) = C = 2$: $F(x) = \sin x + 2$.
:::

::: problem id=t10 type=numeric answer="8"
$\int_0^4 (4 - x)\,dx = ?$
solution: A triangle, base 4, height 4: $\frac{1}{2} \cdot 4 \cdot 4 = 8$.
:::

::: problem id=t11 type=numeric answer="3"
Estimate $\int_0^2 (x^2 + 1)\,dx$ with 2 rectangles of width 1, using left edges.
solution: $f(0) + f(1) = 1 + 2 = 3$.
:::

::: problem id=t12 type=numeric answer="12"
$\int_1^4 (2x - 1)\,dx = ?$
solution: $[x^2 - x]_1^4 = 12 - 0 = 12$.
:::

::: problem id=t13 type=numeric answer="3"
$\int_1^{e^3} \frac{1}{x}\,dx = ?$
solution: $\ln e^3 - \ln 1 = 3$.
:::

::: problem id=t14 type=expression answer="sqrt(x^2+1)"
$\frac{d}{dx}\int_2^x \sqrt{t^2 + 1}\,dt = ?$
hint: Differentiating an integral up to x gives back the integrand: $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$.
solution: The derivative of the integral up to x is the integrand at x: $\sqrt{x^2 + 1}$.
:::

::: problem id=t15 type=expression answer="(x^2-3)^4/2" form=antiderivative
$\int 4x(x^2 - 3)^3\,dx = ?$ (leave out + C)
solution: $u = x^2 - 3$, $du = 2x\,dx$: $2\int u^3\,du = \frac{u^4}{2} = \frac{(x^2 - 3)^4}{2} + C$.
:::

::: problem id=t16 type=expression answer="e^(x^2)/2" form=antiderivative
$\int xe^{x^2}\,dx = ?$ (leave out + C)
solution: $u = x^2$, $x\,dx = \frac{du}{2}$: $\frac{1}{2}e^{x^2} + C$.
:::

::: problem id=t17 type=numeric answer="15/8"
$\int_0^1 x(x^2 + 1)^3\,dx = ?$
solution: $u = x^2 + 1$ from 1 to 2: $\frac{1}{2}\int_1^2 u^3\,du = \frac{1}{2} \cdot \frac{16 - 1}{4} = \frac{15}{8}$.
:::

::: problem id=t18 type=numeric answer="4"
An object's velocity is $v(t) = 6t - 3t^2$. What is its displacement from $t = 0$ to $t = 2$?
solution: $\int_0^2 (6t - 3t^2)\,dt = [3t^2 - t^3]_0^2$
$= 12 - 8 = 4$.
:::
