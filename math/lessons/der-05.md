---
id: der-05
title: The chain rule
---
::: rule
For a function inside a function:

$$\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$$

Derivative of the **outside** (leave the inside alone), **times** the derivative of the **inside**.
:::

::: example
$\frac{d}{dx}(3x + 1)^5 = 5(3x + 1)^4 \cdot 3$

$= 15(3x + 1)^4$.
:::

::: example
$\frac{d}{dx}\sin(x^2) = \cos(x^2) \cdot 2x$.
:::

::: problem id=p1 type=expression answer="6(2x+1)^2"
$\frac{d}{dx}(2x + 1)^3 = ?$
hint: Outside: $3(\ldots)^2$. Inside: $2x + 1$, whose derivative is 2.
solution: $3(2x + 1)^2 \cdot 2 = 6(2x + 1)^2$.
:::

::: problem id=p2 type=expression answer="3cos(3x)"
$\frac{d}{dx}\sin(3x) = ?$
solution: $\cos(3x) \cdot 3$.
:::

::: problem id=p3 type=expression answer="5e^(5x)"
$\frac{d}{dx}e^{5x} = ?$
solution: $e^{5x} \cdot 5$.
:::

::: problem id=p4 type=expression answer="x/sqrt(x^2+1)"
$\frac{d}{dx}\sqrt{x^2 + 1} = ?$
hint: $\sqrt{u}$ has derivative $\frac{1}{2\sqrt{u}}$.
solution: $\frac{1}{2\sqrt{x^2 + 1}} \cdot 2x = \frac{x}{\sqrt{x^2 + 1}}$.
:::

::: problem id=p5 type=expression answer="2x/(x^2+1)"
$\frac{d}{dx}\ln(x^2 + 1) = ?$
hint: $\ln u$ has derivative $\frac{1}{u}$.
solution: $\frac{1}{x^2 + 1} \cdot 2x$.
:::

::: problem id=p6 type=expression answer="-2xsin(x^2)"
$\frac{d}{dx}\cos(x^2) = ?$
solution: $-\sin(x^2) \cdot 2x$.
:::

::: problem id=p7 type=numeric answer="10240"
$f(x) = (x^2 + 1)^{10}$. What is $f'(1)$?
hint: $f'(x) = 10(x^2 + 1)^9 \cdot 2x$.
solution: $10 \cdot 2^9 \cdot 2 = 10 \cdot 512 \cdot 2 = 10240$.
:::

::: problem id=p8 type=expression answer="cos(x)e^(sin(x))"
$\frac{d}{dx}e^{\sin x} = ?$
solution: $e^{\sin x} \cdot \cos x$.
:::

::: problem id=c1 type=numeric answer="0" creative=true
Use the chain rule to differentiate $\sin^2 x + \cos^2 x$. What do you get, and why does it make sense?
hint: $\frac{d}{dx}\sin^2 x = 2\sin x\cos x$.
solution: $2\sin x\cos x - 2\cos x\sin x = 0$. It makes sense: $\sin^2 x + \cos^2 x = 1$, a constant.
:::

::: problem id=x1 type=expression answer="20(5x-2)^3" set=extra
$\frac{d}{dx}(5x - 2)^4 = ?$
solution: $4(5x - 2)^3 \cdot 5 = 20(5x - 2)^3$.
:::

::: problem id=x2 type=expression answer="-4sin(4x)" set=extra
$\frac{d}{dx}\cos(4x) = ?$
solution: $-\sin(4x) \cdot 4$.
:::

::: problem id=x3 type=expression answer="-2e^(-2x)" set=extra
$\frac{d}{dx}e^{-2x} = ?$
solution: $e^{-2x} \cdot (-2)$.
:::

::: problem id=x4 type=expression answer="3/(3x+1)" set=extra
$\frac{d}{dx}\ln(3x + 1) = ?$
solution: $\frac{1}{3x + 1} \cdot 3$.
:::

::: problem id=x5 type=expression answer="2/sqrt(4x+1)" set=extra
$\frac{d}{dx}\sqrt{4x + 1} = ?$
solution: $\frac{1}{2\sqrt{4x + 1}} \cdot 4 = \frac{2}{\sqrt{4x + 1}}$.
:::

::: problem id=x6 type=expression answer="3sin(x)^2cos(x)" set=extra
$\frac{d}{dx}\sin^3 x = ?$
hint: $\sin^3 x = (\sin x)^3$.
solution: $3(\sin x)^2 \cdot \cos x$.
:::

::: problem id=x7 type=expression answer="5(x^2-3x)^4(2x-3)" set=extra
$\frac{d}{dx}(x^2 - 3x)^5 = ?$
solution: $5(x^2 - 3x)^4 \cdot (2x - 3)$.
:::

::: problem id=x8 type=expression answer="2sec(2x)^2" set=extra
$\frac{d}{dx}\tan(2x) = ?$
solution: $\sec^2(2x) \cdot 2$.
:::

::: problem id=x9 type=expression answer="-6x/(x^2+1)^4" set=extra
$\frac{d}{dx}\frac{1}{(x^2 + 1)^3} = ?$
hint: Write it as $(x^2 + 1)^{-3}$.
solution: $-3(x^2 + 1)^{-4} \cdot 2x = \frac{-6x}{(x^2 + 1)^4}$.
:::

::: problem id=x10 type=numeric answer="3e" set=extra
$f(x) = e^{x^3}$. What is $f'(1)$?
solution: $f' = e^{x^3} \cdot 3x^2$. At 1: $3e$.
:::

::: problem id=x11 type=numeric answer="15" set=extra
$g(1) = 2$, $g'(1) = 3$ and $f'(2) = 5$. What is the derivative of $f(g(x))$ at $x = 1$?
solution: $f'(g(1)) \cdot g'(1) = f'(2) \cdot 3 = 15$.
:::

::: problem id=x12 type=choice set=extra
A student writes $\frac{d}{dx}\sin(x^2) = \cos(2x)$. What is right?
- [ ] $\cos(2x)$
- [ ] $\cos(x^2)$
- [x] $2x\cos(x^2)$
- [ ] $2x\cos(2x)$
solution: Keep the inside as it is, then multiply by its derivative: $\cos(x^2) \cdot 2x$.
:::

::: problem id=x13 type=expression answer="4x/5+9/5" set=extra
Write the tangent line to $y = \sqrt{x^2 + 9}$ at $x = 4$ as $y = \ldots$
hint: $y' = \frac{x}{\sqrt{x^2 + 9}}$.
solution: Point $(4, 5)$, slope $\frac{4}{5}$.
$y = \frac{4}{5}(x - 4) + 5 = \frac{4x}{5} + \frac{9}{5}$.
:::

::: problem id=x14 type=numeric answer="12pi" set=extra
A circle's radius grows as $r = 2t + 1$ cm. Its area is $A = \pi r^2$. How fast is the area growing at $t = 1$ (in cm² per unit time)?
hint: $A(t) = \pi(2t + 1)^2$.
solution: $A' = 2\pi(2t + 1) \cdot 2$. At 1: $2\pi \cdot 3 \cdot 2 = 12\pi$.
:::

::: problem id=x15 type=expression answer="-tan(x)" set=extra
$\frac{d}{dx}\ln(\cos x) = ?$
solution: $\frac{1}{\cos x} \cdot (-\sin x) = -\tan x$.
:::

::: problem id=x16 type=expression answer="e^(2x)+2xe^(2x)" set=extra
$\frac{d}{dx}(xe^{2x}) = ?$
hint: Product rule, and the chain rule for $e^{2x}$.
solution: $1 \cdot e^{2x} + x \cdot 2e^{2x}$.
:::

::: problem id=x17 type=expression answer="-6sin(3x)cos(3x)" set=extra
$\frac{d}{dx}\cos^2(3x) = ?$
hint: Three layers: square, cosine, $3x$.
solution: $2\cos(3x) \cdot (-\sin(3x)) \cdot 3$
$= -6\sin(3x)\cos(3x)$.
:::

::: problem id=x18 type=expression answer="1/(x^2+1)^(3/2)" set=extra
$\frac{d}{dx}\frac{x}{\sqrt{x^2 + 1}} = ?$
hint: Quotient rule; the bottom's derivative is $\frac{x}{\sqrt{x^2 + 1}}$.
solution: $\frac{\sqrt{x^2 + 1} - \frac{x^2}{\sqrt{x^2 + 1}}}{x^2 + 1}$.
Top over one root: $\frac{1}{\sqrt{x^2 + 1}}$. So $\frac{1}{(x^2 + 1)^{3/2}}$.
:::

::: problem id=x19 type=expression answer="2cos(2x)e^(sin(2x))" set=extra
$\frac{d}{dx}e^{\sin 2x} = ?$
hint: Outside $e^u$, middle $\sin v$, inside $2x$.
solution: $e^{\sin 2x} \cdot \cos 2x \cdot 2$.
:::

::: problem id=x20 type=expression answer="ln(5)*5^x" set=extra creative=true
Write $5^x = e^{x\ln 5}$ and use the chain rule. What is $\frac{d}{dx}5^x$?
hint: $\ln 5$ is just a constant.
solution: $e^{x\ln 5} \cdot \ln 5 = 5^x \ln 5$. This is why $a^x \to a^x\ln a$.
:::
