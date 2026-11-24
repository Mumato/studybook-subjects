---
id: der-03
title: Derivatives of sin, cos, e^x and ln x
---
::: rule
- $\sin x \to \cos x$
- $\cos x \to -\sin x$
- $\tan x \to \sec^2 x$
- $e^x \to e^x$ (it is its own derivative!)
- $\ln x \to \frac{1}{x}$
- $a^x \to a^x \ln a$

x is in radians.
:::

::: example
$\frac{d}{dx}(3\sin x - e^x) = 3\cos x - e^x$.
:::

Type them like cos(x), e^x, 1/x. A power of a trig function goes after the bracket: sec(x)^2.

::: problem id=p1 type=expression answer="cos(x)"
$\frac{d}{dx}\sin x = ?$
solution: $\cos x$.
:::

::: problem id=p2 type=expression answer="-sin(x)"
$\frac{d}{dx}\cos x = ?$
solution: $-\sin x$.
:::

::: problem id=p3 type=expression answer="e^x"
$\frac{d}{dx}e^x = ?$
solution: $e^x$.
:::

::: problem id=p4 type=expression answer="1/x"
$\frac{d}{dx}\ln x = ?$
solution: $\frac{1}{x}$.
:::

::: problem id=p5 type=expression answer="3cos(x)-e^x"
$\frac{d}{dx}(3\sin x - e^x) = ?$
hint: Go term by term.
solution: $3\cos x - e^x$.
:::

::: problem id=p6 type=expression answer="2/x+2x"
$\frac{d}{dx}(2\ln x + x^2) = ?$
hint: The 2 multiplies through.
solution: $\frac{2}{x} + 2x$.
:::

::: problem id=p7 type=numeric answer="1"
What is the slope of $y = \sin x$ at $x = 0$?
hint: Put 0 into the derivative.
solution: $\cos 0 = 1$.
:::

::: problem id=p8 type=choice
$\frac{d}{dx}2^x = ?$
- [ ] $x \cdot 2^{x - 1}$
- [x] $2^x \ln 2$
- [ ] $2^x$
hint: The power rule is for $x^n$, not $a^x$.
solution: $a^x \to a^x \ln a$.
:::
