---
id: tech-03
title: Trig integrals
---
::: rule
Useful facts:
- $\int \sec^2 x\,dx = \tan x + C$
- **Power-reducing:** $\sin^2 x = \frac{1 - \cos 2x}{2}$ and $\cos^2 x = \frac{1 + \cos 2x}{2}$
- With a $\cos x$ next to powers of $\sin x$, substitute $u = \sin x$ (and the other way round).
:::

::: example
$\int \sin^2 x\,dx = \int \frac{1 - \cos 2x}{2}\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + C$.
:::

Type $\sin^2 x$ as sin(x)^2 and $|x|$ as abs(x). Leave out the + C.

::: problem id=p1 type=expression answer="tan(x)" form=antiderivative
$\int \sec^2 x\,dx = ?$
solution: $\tan x + C$.
:::

::: problem id=p2 type=expression answer="x/2-sin(2x)/4" form=antiderivative
$\int \sin^2 x\,dx = ?$
solution: $\frac{x}{2} - \frac{\sin 2x}{4} + C$.
:::

::: problem id=p3 type=expression answer="x/2+sin(2x)/4" form=antiderivative
$\int \cos^2 x\,dx = ?$
hint: Use $\cos^2 x = \frac{1 + \cos 2x}{2}$.
solution: $\frac{x}{2} + \frac{\sin 2x}{4} + C$.
:::

::: problem id=p4 type=numeric answer="pi/2"
$\int_0^{\pi} \sin^2 x\,dx = ?$
solution: $\left[\frac{x}{2} - \frac{\sin 2x}{4}\right]_0^{\pi} = \frac{\pi}{2}$.
:::

::: problem id=p5 type=expression answer="sin(x)^4/4" form=antiderivative
$\int \sin^3 x\cos x\,dx = ?$
hint: $u = \sin x$.
solution: $\int u^3\,du = \frac{\sin^4 x}{4} + C$.
:::

::: problem id=p6 type=expression answer="-ln(abs(cos(x)))" form=antiderivative
$\int \tan x\,dx = ?$
hint: $\tan x = \frac{\sin x}{\cos x}$; let $u = \cos x$.
solution: $-\int \frac{du}{u} = -\ln|\cos x| + C$.
:::

::: problem id=p7 type=expression answer="ln(abs(sin(x)))" form=antiderivative
$\int \frac{\cos x}{\sin x}\,dx = ?$
solution: $u = \sin x$: $\ln|\sin x| + C$.
:::

::: problem id=p8 type=numeric answer="pi/4"
$\int_0^{\pi/2} \cos^2 x\,dx = ?$
hint: Use the answer to p3.
solution: $\left[\frac{x}{2} + \frac{\sin 2x}{4}\right]_0^{\pi/2} = \frac{\pi}{4}$.
:::
