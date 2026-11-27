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
solution: $-x\cos x + \int \cos x\,dx$, which is $-x\cos x + \sin x + C$.
:::

::: problem id=p5 type=numeric answer="1"
$\int_0^1 xe^x\,dx = ?$
hint: Use $xe^x - e^x$ from p1.
solution: $(e - e) - (0 - 1) = 1$.
:::

::: problem id=p6 type=expression answer="(x^2-2x+2)e^x" form=antiderivative
$\int x^2e^x\,dx = ?$
hint: Use parts twice.
solution: $x^2e^x - \int 2xe^x\,dx = x^2e^x - 2(xe^x - e^x)$, which is $(x^2 - 2x + 2)e^x + C$.
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

::: problem id=x1 type=expression answer="xe^(3x)/3-e^(3x)/9" form=antiderivative set=extra
$\int xe^{3x}\,dx = ?$
solution: $u = x$, $v = \frac{e^{3x}}{3}$. Then $\frac{xe^{3x}}{3} - \int \frac{e^{3x}}{3}\,dx$, which is $\frac{xe^{3x}}{3} - \frac{e^{3x}}{9} + C$.
:::

::: problem id=x2 type=expression answer="xsin(2x)/2+cos(2x)/4" form=antiderivative set=extra
$\int x\cos 2x\,dx = ?$
solution: $u = x$, $v = \frac{\sin 2x}{2}$. Then $\frac{x\sin 2x}{2} - \int \frac{\sin 2x}{2}\,dx$, which is $\frac{x\sin 2x}{2} + \frac{\cos 2x}{4} + C$.
:::

::: problem id=x3 type=expression answer="xe^x" form=antiderivative set=extra
$\int (x + 1)e^x\,dx = ?$
solution: $u = x + 1$, $v = e^x$: $(x + 1)e^x - \int e^x\,dx$, which is $(x + 1)e^x - e^x = xe^x + C$.
:::

::: problem id=x4 type=expression answer="x^3ln(x)/3-x^3/9" form=antiderivative set=extra
$\int x^2\ln x\,dx = ?$
solution: $u = \ln x$, $v = \frac{x^3}{3}$. Then $\frac{x^3\ln x}{3} - \int \frac{x^2}{3}\,dx$, which is $\frac{x^3\ln x}{3} - \frac{x^3}{9} + C$.
:::

::: problem id=x5 type=expression answer="-xe^(-x)-e^(-x)" form=antiderivative set=extra
$\int xe^{-x}\,dx = ?$
solution: $u = x$, $v = -e^{-x}$: $-xe^{-x} + \int e^{-x}\,dx$, which is $-xe^{-x} - e^{-x} + C$.
:::

::: problem id=x6 type=expression answer="xatan(x)-ln(1+x^2)/2" form=antiderivative set=extra
$\int \arctan x\,dx = ?$ (type arctan as atan)
hint: $u = \arctan x$, $dv = dx$.
solution: $x\arctan x - \int \frac{x}{1 + x^2}\,dx$. With $w = 1 + x^2$ the last integral is $\frac{1}{2}\ln(1 + x^2)$. Answer: $x\arctan x - \frac{1}{2}\ln(1 + x^2) + C$.
:::

::: problem id=x7 type=numeric answer="3" set=extra
How many times must you use parts to do $\int x^3e^x\,dx$ (with $u$ a power of x each time)?
solution: Each round lowers the power by 1: $x^3 \to x^2 \to x \to 1$. That's **3** times.
:::

::: problem id=x8 type=choice set=extra
For $\int x e^{5x}\,dx$, which choice works?
- [x] $u = x$, $dv = e^{5x}\,dx$
- [ ] $u = e^{5x}$, $dv = x\,dx$
- [ ] $u = xe^{5x}$, $dv = dx$
solution: Differentiating x makes it simpler (1), and $e^{5x}$ is easy to integrate. The other way the power of x goes **up**.
:::

::: problem id=x9 type=numeric answer="pi" set=extra
$\int_0^{\pi} x\sin x\,dx = ?$
solution: An antiderivative is $\sin x - x\cos x$. At π: $0 + \pi$. At 0: 0. So the answer is $\pi$.
:::

::: problem id=x10 type=numeric answer="1" set=extra
$\int_1^e \ln x\,dx = ?$
solution: $[x\ln x - x]_1^e$. At e: $e - e = 0$. At 1: $0 - 1 = -1$. So $0 - (-1) = 1$.
:::

::: problem id=x11 type=choice set=extra
A student wrote $\int x\cos x\,dx = x\sin x - \cos x + C$. What is right?
- [ ] it is right
- [x] $x\sin x + \cos x + C$
- [ ] $x\sin x - \sin x + C$
- [ ] $\frac{x^2}{2}\sin x + C$
hint: Differentiate the student's answer to check it.
solution: $x\sin x - \int \sin x\,dx = x\sin x + \cos x + C$. The student lost the minus sign of $\int \sin x\,dx = -\cos x$.
:::

::: problem id=x12 type=expression answer="2xe^x" set=extra
For $\int x^2e^x\,dx$ take $u = x^2$ and $dv = e^x\,dx$. The new integral is $\int v\,du = \int \square\,dx$. What goes in the box?
solution: $v = e^x$ and $du = 2x\,dx$, so $v\,du = 2xe^x\,dx$.
:::

::: problem id=x13 type=numeric answer="1-2/e" set=extra
$\int_0^1 xe^{-x}\,dx = ?$ (exact)
solution: $[-xe^{-x} - e^{-x}]_0^1$. At 1: $-\frac{2}{e}$. At 0: $-1$. So $1 - \frac{2}{e}$.
:::

::: problem id=x14 type=expression answer="-ln(x)/x-1/x" form=antiderivative set=extra
$\int \frac{\ln x}{x^2}\,dx = ?$
hint: $u = \ln x$, $dv = x^{-2}\,dx$.
solution: $v = -\frac{1}{x}$. Then $-\frac{\ln x}{x} + \int \frac{1}{x^2}\,dx$, which is $-\frac{\ln x}{x} - \frac{1}{x} + C$.
:::

::: problem id=x15 type=numeric answer="1-3/e^2" set=extra
A particle moves with velocity $v(t) = te^{-t}$ m/s. How far does it go from $t = 0$ to $t = 2$? (exact)
solution: $v \ge 0$, so integrate: $[-te^{-t} - e^{-t}]_0^2$. That's $-3e^{-2} - (-1) = 1 - \frac{3}{e^2}$ m.
:::

::: problem id=x16 type=numeric answer="e^2+1" set=extra
What is the area under $y = \ln x$ from $x = 1$ to $x = e^2$? (exact)
solution: $[x\ln x - x]_1^{e^2}$. At $e^2$: $2e^2 - e^2 = e^2$. At 1: $-1$. Area $e^2 + 1$.
:::

::: problem id=x17 type=expression answer="e^x(sin(x)-cos(x))/2" form=antiderivative set=extra
$\int e^x\sin x\,dx = ?$
hint: Use parts twice. The original integral comes back: move it to the left side.
solution: Call it I. Parts twice gives $I = e^x\sin x - e^x\cos x - I$. So $2I = e^x(\sin x - \cos x)$ and $I = \frac{e^x(\sin x - \cos x)}{2} + C$.
:::

::: problem id=x18 type=expression answer="-x^2cos(x)+2xsin(x)+2cos(x)" form=antiderivative set=extra
$\int x^2\sin x\,dx = ?$
hint: Parts twice. The second round is $\int x\cos x\,dx$.
solution: $-x^2\cos x + \int 2x\cos x\,dx$. And $\int 2x\cos x\,dx = 2x\sin x + 2\cos x$. Answer: $-x^2\cos x + 2x\sin x + 2\cos x + C$.
:::

::: problem id=x19 type=expression answer="x(ln(x))^2-2xln(x)+2x" form=antiderivative set=extra
$\int (\ln x)^2\,dx = ?$
hint: $u = (\ln x)^2$, $dv = dx$. Then you need $\int \ln x\,dx$.
solution: $x(\ln x)^2 - \int 2\ln x\,dx$. And $\int 2\ln x\,dx = 2x\ln x - 2x$. Answer: $x(\ln x)^2 - 2x\ln x + 2x + C$.
:::

::: problem id=x20 type=numeric answer="6-2e" set=extra creative=true
Let $I_n = \int_0^1 x^ne^x\,dx$. Parts gives $I_n = e - nI_{n-1}$, and $I_0 = e - 1$. What is $I_3$? (exact)
hint: Work up one step at a time: $I_1$, then $I_2$, then $I_3$.
solution: $I_1 = e - (e - 1) = 1$. $I_2 = e - 2$. $I_3 = e - 3(e - 2) = 6 - 2e$.
:::
