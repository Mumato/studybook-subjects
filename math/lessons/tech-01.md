---
id: tech-01
title: Integration by parts
---
::: rule
**Integration by parts** undoes the product rule:

$$\int u\,dv = uv - \int v\,du$$

Pick u to be the part that gets simpler when you differentiate it. A handy order for choosing u: **L**ogs, **I**nverse trig, **A**lgebra (powers of x), **T**rig, **E**xponentials (LIATE).
:::

::: example
$\int xe^x\,dx$: $u = x$, $dv = e^x\,dx$, so $du = dx$, $v = e^x$. Then $xe^x - \int e^x\,dx = xe^x - e^x + C$.
:::

Leave out the + C.

::: problem id=p1 type=expression answer="xe^x-e^x" form=antiderivative
$\int xe^x\,dx = ?$
solution: $xe^x - e^x + C$.
:::

::: problem id=p2 type=expression answer="xsin(x)+cos(x)" form=antiderivative
$\int x\cos x\,dx = ?$
hint: $u = x$, $dv = \cos x\,dx$.
solution: $x\sin x - \int \sin x\,dx = x\sin x + \cos x + C$.
:::

::: problem id=p3 type=expression answer="xln(x)-x" form=antiderivative
$\int \ln x\,dx = ?$
hint: $u = \ln x$, $dv = dx$.
solution: $x\ln x - \int x \cdot \frac{1}{x}\,dx = x\ln x - x + C$.
:::

::: problem id=p4 type=expression answer="sin(x)-xcos(x)" form=antiderivative
$\int x\sin x\,dx = ?$
solution: $-x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C$.
:::

::: problem id=p5 type=numeric answer="1"
$\int_0^1 xe^x\,dx = ?$
hint: Use $xe^x - e^x$ from p1.
solution: $(e - e) - (0 - 1) = 1$.
:::

::: problem id=p6 type=expression answer="(x^2-2x+2)e^x" form=antiderivative
$\int x^2e^x\,dx = ?$
hint: Use parts twice.
solution: $x^2e^x - \int 2xe^x\,dx = x^2e^x - 2(xe^x - e^x) = (x^2 - 2x + 2)e^x + C$.
:::

::: problem id=p7 type=choice
For $\int x\ln x\,dx$, which should be u?
- [x] $\ln x$
- [ ] $x$
solution: Logs come first in LIATE, and $\ln x$ has a simpler derivative ($\frac{1}{x}$) while it's hard to integrate.
:::

::: problem id=p8 type=expression answer="x^2ln(x)/2-x^2/4" form=antiderivative
$\int x\ln x\,dx = ?$
solution: $u = \ln x$, $v = \frac{x^2}{2}$: $\frac{x^2\ln x}{2} - \int \frac{x}{2}\,dx = \frac{x^2\ln x}{2} - \frac{x^2}{4} + C$.
:::
