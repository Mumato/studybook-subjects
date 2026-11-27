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

::: problem id=x1 type=expression answer="-4sin(x)" set=extra
$\frac{d}{dx}(4\cos x) = ?$
solution: $4(-\sin x) = -4\sin x$.
:::

::: problem id=x2 type=expression answer="e^x+3x^2" set=extra
$\frac{d}{dx}(e^x + x^3) = ?$
solution: $e^x + 3x^2$.
:::

::: problem id=x3 type=expression answer="5/x" set=extra
$\frac{d}{dx}(5\ln x) = ?$
solution: $\frac{5}{x}$.
:::

::: problem id=x4 type=expression answer="sec(x)^2" set=extra
$\frac{d}{dx}\tan x = ?$
solution: $\sec^2 x$.
:::

::: problem id=x5 type=expression answer="3^x*ln(3)" set=extra
$\frac{d}{dx}3^x = ?$
solution: $3^x \ln 3$.
:::

::: problem id=x6 type=expression answer="cos(x)-sin(x)" set=extra
$\frac{d}{dx}(\sin x + \cos x) = ?$
solution: $\cos x - \sin x$.
:::

::: problem id=x7 type=numeric answer="1" set=extra
What is the slope of $y = e^x$ at $x = 0$?
solution: $e^0 = 1$.
:::

::: problem id=x8 type=numeric answer="1/4" set=extra
What is the slope of $y = \ln x$ at $x = 4$?
solution: $\frac{1}{4}$.
:::

::: problem id=x9 type=expression answer="x+1" set=extra
Write the tangent line to $y = e^x$ at $x = 0$ as $y = \ldots$
solution: Point $(0, 1)$, slope 1: $y = x + 1$.
:::

::: problem id=x10 type=expression answer="x-1" set=extra
Write the tangent line to $y = \ln x$ at $x = 1$ as $y = \ldots$
solution: Point $(1, 0)$, slope 1: $y = x - 1$.
:::

::: problem id=x11 type=numeric answer="-1" set=extra
What is the slope of $y = \cos x$ at $x = \frac{\pi}{2}$?
solution: $-\sin\frac{\pi}{2} = -1$.
:::

::: problem id=x12 type=choice set=extra
A student uses the power rule: $\frac{d}{dx}e^x = xe^{x - 1}$. What is right?
- [ ] $xe^{x - 1}$
- [x] $e^x$
- [ ] $e^{x - 1}$
- [ ] $x e^x$
solution: The power rule needs a fixed power. $e^x$ is its own derivative.
:::

::: problem id=x13 type=numeric answer="pi/2" set=extra
What is the first positive x where $y = \sin x$ has a flat tangent?
solution: $\cos x = 0$ first at $x = \frac{\pi}{2}$.
:::

::: problem id=x14 type=expression answer="2/x" set=extra
$\frac{d}{dx}\ln(x^2) = ?$ (for $x > 0$)
hint: Log rule first: $\ln(x^2) = 2\ln x$.
solution: $2 \cdot \frac{1}{x} = \frac{2}{x}$.
:::

::: problem id=x15 type=expression answer="e^(x+2)" set=extra
$\frac{d}{dx}e^{x + 2} = ?$
hint: $e^{x + 2} = e^2 \cdot e^x$, and $e^2$ is a constant.
solution: $e^2 e^x = e^{x + 2}$.
:::

::: problem id=x16 type=numeric answer="1" set=extra
A mass on a spring is at $s(t) = 2\sin t$. What is its velocity at $t = \frac{\pi}{3}$?
hint: Velocity is $s'(t)$.
solution: $2\cos\frac{\pi}{3} = 2 \cdot \frac{1}{2} = 1$.
:::

::: problem id=x17 type=numeric answer="ln(2)" set=extra
Where does $y = e^x - 2x$ have a flat tangent?
hint: Set the derivative to 0 and solve with ln.
solution: $e^x - 2 = 0$, $e^x = 2$, $x = \ln 2$.
:::

::: problem id=x18 type=expression answer="-x+pi" set=extra
Write the tangent line to $y = \sin x$ at $x = \pi$ as $y = \ldots$
hint: The point is $(\pi, 0)$.
solution: Slope $\cos\pi = -1$. $y = -(x - \pi) = -x + \pi$.
:::

::: problem id=x19 type=numeric answer="1/2" set=extra
At which x does $y = \ln x$ have slope 2?
hint: The slope is $\frac{1}{x}$.
solution: $\frac{1}{x} = 2$, so $x = \frac{1}{2}$.
:::

::: problem id=x20 type=expression answer="sin(x)" set=extra creative=true
Differentiate $\sin x$ four times in a row. What is the 100th derivative of $\sin x$?
hint: $\sin \to \cos \to -\sin \to -\cos \to \sin$.
solution: The derivatives repeat every 4. $100 = 4 \cdot 25$, so the 100th is $\sin x$.
:::
