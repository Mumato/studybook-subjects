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
$\int \sin^2 x\,dx = \int \frac{1 - \cos 2x}{2}\,dx$, which is $\frac{x}{2} - \frac{\sin 2x}{4} + C$.
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

::: problem id=x1 type=expression answer="-(cos(x)^4)/4" form=antiderivative set=extra
$\int \cos^3 x\sin x\,dx = ?$
hint: $u = \cos x$, $du = -\sin x\,dx$.
solution: $-\int u^3\,du = -\frac{\cos^4 x}{4} + C$.
:::

::: problem id=x2 type=expression answer="x/2-sin(6x)/12" form=antiderivative set=extra
$\int \sin^2 3x\,dx = ?$
solution: $\sin^2 3x = \frac{1 - \cos 6x}{2}$. Integrate: $\frac{x}{2} - \frac{\sin 6x}{12} + C$.
:::

::: problem id=x3 type=expression answer="tan(3x)/3" form=antiderivative set=extra
$\int \sec^2 3x\,dx = ?$
solution: $\frac{1}{3}\tan 3x + C$ (divide by the inside's derivative 3).
:::

::: problem id=x4 type=expression answer="x/2+sin(4x)/8" form=antiderivative set=extra
$\int \cos^2 2x\,dx = ?$
solution: $\cos^2 2x = \frac{1 + \cos 4x}{2}$. Integrate: $\frac{x}{2} + \frac{\sin 4x}{8} + C$.
:::

::: problem id=x5 type=expression answer="sin(x)^6/6" form=antiderivative set=extra
$\int \sin^5 x\cos x\,dx = ?$
solution: $u = \sin x$: $\int u^5\,du = \frac{\sin^6 x}{6} + C$.
:::

::: problem id=x6 type=expression answer="sec(x)" form=antiderivative set=extra
$\int \sec x\tan x\,dx = ?$
hint: Which function has derivative $\sec x\tan x$?
solution: $\frac{d}{dx}\sec x = \sec x\tan x$, so the answer is $\sec x + C$.
:::

::: problem id=x7 type=expression answer="-cos(x)+cos(x)^3/3" form=antiderivative set=extra
$\int \sin^3 x\,dx = ?$
hint: Write $\sin^3 x = (1 - \cos^2 x)\sin x$, then let $u = \cos x$.
solution: $-\int (1 - u^2)\,du = -u + \frac{u^3}{3}$. Answer: $-\cos x + \frac{\cos^3 x}{3} + C$.
:::

::: problem id=x8 type=expression answer="sin(x)-sin(x)^3/3" form=antiderivative set=extra
$\int \cos^3 x\,dx = ?$
solution: $\cos^3 x = (1 - \sin^2 x)\cos x$. With $u = \sin x$: $u - \frac{u^3}{3}$. Answer: $\sin x - \frac{\sin^3 x}{3} + C$.
:::

::: problem id=x9 type=numeric answer="1/2" set=extra
$\int_0^{\pi/2} \sin x\cos x\,dx = ?$
solution: $u = \sin x$ runs from 0 to 1: $\int_0^1 u\,du = \frac{1}{2}$.
:::

::: problem id=x10 type=numeric answer="1" set=extra
$\int_0^{\pi/4} \sec^2 x\,dx = ?$
solution: $[\tan x]_0^{\pi/4} = 1 - 0 = 1$.
:::

::: problem id=x11 type=numeric answer="pi" set=extra
$\int_0^{2\pi} \sin^2 x\,dx = ?$
solution: $\left[\frac{x}{2} - \frac{\sin 2x}{4}\right]_0^{2\pi} = \pi$.
:::

::: problem id=x12 type=choice set=extra
Which substitution turns $\int \sin^4 x\cos x\,dx$ into a power?
- [x] $u = \sin x$
- [ ] $u = \cos x$
- [ ] $u = \sin^4 x$
- [ ] $u = \tan x$
solution: With $u = \sin x$, $du = \cos x\,dx$ is right there: $\int u^4\,du$.
:::

::: problem id=x13 type=expression answer="tan(x)-x" form=antiderivative set=extra
$\int \tan^2 x\,dx = ?$
hint: $\tan^2 x = \sec^2 x - 1$.
solution: $\int (\sec^2 x - 1)\,dx = \tan x - x + C$.
:::

::: problem id=x14 type=choice set=extra
For $\int \sin x\cos x\,dx$, Ann gets $\frac{\sin^2 x}{2}$ and Ben gets $-\frac{\cos^2 x}{2}$. Who is right?
- [ ] only Ann
- [ ] only Ben
- [x] both
- [ ] neither
hint: Find the difference of the two answers.
solution: $\frac{\sin^2 x}{2} - \left(-\frac{\cos^2 x}{2}\right) = \frac{1}{2}$, a constant. Both differentiate to $\sin x\cos x$: **both** are right.
:::

::: problem id=x15 type=numeric answer="4/3" set=extra
What is the area under $y = \sin^3 x$ from 0 to π?
solution: Use $-\cos x + \frac{\cos^3 x}{3}$. At π: $1 - \frac{1}{3} = \frac{2}{3}$. At 0: $-\frac{2}{3}$. Area $\frac{4}{3}$.
:::

::: problem id=x16 type=expression answer="tan(x)^2/2" form=antiderivative set=extra
$\int \tan x\sec^2 x\,dx = ?$
solution: $u = \tan x$, $du = \sec^2 x\,dx$: $\int u\,du = \frac{\tan^2 x}{2} + C$.
:::

::: problem id=x17 type=expression answer="x/8-sin(4x)/32" form=antiderivative set=extra
$\int \sin^2 x\cos^2 x\,dx = ?$
hint: $\sin x\cos x = \frac{1}{2}\sin 2x$.
solution: $\sin^2 x\cos^2 x = \frac{\sin^2 2x}{4}$, which is $\frac{1 - \cos 4x}{8}$. Integrate: $\frac{x}{8} - \frac{\sin 4x}{32} + C$.
:::

::: problem id=x18 type=expression answer="sin(x)^3/3-sin(x)^5/5" form=antiderivative set=extra
$\int \sin^2 x\cos^3 x\,dx = ?$
hint: Save one $\cos x$ and write $\cos^2 x = 1 - \sin^2 x$.
solution: $u = \sin x$: $\int u^2(1 - u^2)\,du = \frac{u^3}{3} - \frac{u^5}{5}$. Answer: $\frac{\sin^3 x}{3} - \frac{\sin^5 x}{5} + C$.
:::

::: problem id=x19 type=expression answer="3x/8+sin(2x)/4+sin(4x)/32" form=antiderivative set=extra
$\int \cos^4 x\,dx = ?$
hint: $\cos^4 x = \left(\frac{1 + \cos 2x}{2}\right)^2$. Power-reduce again.
solution: $\frac{1}{4}(1 + 2\cos 2x + \cos^2 2x)$. With $\cos^2 2x = \frac{1 + \cos 4x}{2}$ this is $\frac{3}{8} + \frac{\cos 2x}{2} + \frac{\cos 4x}{8}$. Integrate: $\frac{3x}{8} + \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C$.
:::

::: problem id=x20 type=numeric answer="1/2" set=extra creative=true
$\int_0^{\pi/2} \sin 3x\cos x\,dx = ?$
hint: $\sin A\cos B$ equals $\frac{1}{2}\left[\sin(A + B) + \sin(A - B)\right]$.
solution: $\frac{1}{2}\int_0^{\pi/2}(\sin 4x + \sin 2x)\,dx$. Antiderivative $-\frac{\cos 4x}{4} - \frac{\cos 2x}{2}$: at $\frac{\pi}{2}$ it is $\frac{1}{4}$, at 0 it is $-\frac{3}{4}$. So $\frac{1}{2} \cdot 1 = \frac{1}{2}$.
:::
