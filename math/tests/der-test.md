---
id: der-test
title: Derivatives test
pass: 0.8
---
::: problem id=t1 type=expression answer="4x^3-6x"
$\frac{d}{dx}(x^4 - 3x^2 + 2) = ?$
solution: $4x^3 - 6x$.
:::

::: problem id=t2 type=numeric answer="12"
$f(x) = x^3$. What is $f'(2)$?
solution: $3 \cdot 4 = 12$.
:::

::: problem id=t3 type=expression answer="-5sin(x)"
$\frac{d}{dx}(5\cos x) = ?$
solution: $-5\sin x$.
:::

::: problem id=t4 type=expression answer="sin(x)+xcos(x)"
$\frac{d}{dx}(x\sin x) = ?$
solution: $\sin x + x\cos x$.
:::

::: problem id=t5 type=expression answer="12(4x-1)^2"
$\frac{d}{dx}(4x - 1)^3 = ?$
solution: $3(4x - 1)^2 \cdot 4$.
:::

::: problem id=t6 type=expression answer="2xe^(x^2)"
$\frac{d}{dx}e^{x^2} = ?$
solution: $e^{x^2} \cdot 2x$.
:::

::: problem id=t7 type=expression answer="6x-9"
Write the tangent line to $y = x^2$ at $x = 3$ as $y = \ldots$
solution: Point $(3, 9)$, slope 6: $y = 6x - 9$.
:::

::: problem id=t8 type=expression answer="1/x"
$\frac{d}{dx}\ln(3x) = ?$
solution: $\frac{1}{3x} \cdot 3 = \frac{1}{x}$.
:::

::: problem id=t9 type=numeric answer="1/4"
$f(x) = x^3 + x + 1$, so $f(1) = 3$. What is $(f^{-1})'(3)$?
solution: $f'(x) = 3x^2 + 1$, $f'(1) = 4$. So $\frac{1}{4}$.
:::

::: problem id=t10 type=expression answer="-6/x^4+1/(2sqrt(x))"
$\frac{d}{dx}\left(\frac{2}{x^3} + \sqrt{x}\right) = ?$
solution: $2x^{-3} \to -6x^{-4}$ and $x^{1/2} \to \frac{1}{2}x^{-1/2}$.
:::

::: problem id=t11 type=expression answer="(x^2-2x)/(x-1)^2"
$\frac{d}{dx}\frac{x^2}{x - 1} = ?$
solution: $\frac{2x(x - 1) - x^2}{(x - 1)^2} = \frac{x^2 - 2x}{(x - 1)^2}$.
:::

::: problem id=t12 type=expression answer="e^xcos(x)-e^xsin(x)"
$\frac{d}{dx}(e^x\cos x) = ?$
solution: $e^x\cos x + e^x(-\sin x)$.
:::

::: problem id=t13 type=expression answer="cos(x)/sin(x)"
$\frac{d}{dx}\ln(\sin x) = ?$
solution: $\frac{1}{\sin x} \cdot \cos x$.
:::

::: problem id=t14 type=numeric answer="-5/12"
What is the slope of $x^2 + y^2 = 169$ at $(5, 12)$?
solution: $2x + 2yy' = 0$, $y' = -\frac{x}{y} = -\frac{5}{12}$.
:::

::: problem id=t15 type=expression answer="-x+3"
Write the tangent line to $x^2 + 2y^2 = 6$ at $(2, 1)$ as $y = \ldots$
solution: $2x + 4yy' = 0$, $y' = -\frac{x}{2y} = -1$.
$y - 1 = -(x - 2)$, so $y = -x + 3$.
:::

::: problem id=t16 type=expression answer="2/(1+4x^2)"
$\frac{d}{dx}\arctan(2x) = ?$
solution: $\frac{1}{1 + 4x^2} \cdot 2$.
:::

::: problem id=t17 type=numeric answer="5/4"
What is the slope of $y = \arcsin x$ at $x = 0.6$?
solution: $\frac{1}{\sqrt{1 - 0.36}} = \frac{1}{0.8} = \frac{5}{4}$.
:::

::: problem id=t18 type=numeric answer="2"
$y = x^{2x}$. What is $y'$ at $x = 1$?
solution: $\ln y = 2x\ln x$, so $\frac{y'}{y} = 2\ln x + 2$.
At 1: $y = 1$, so $y' = 1 \cdot (0 + 2) = 2$.
:::
