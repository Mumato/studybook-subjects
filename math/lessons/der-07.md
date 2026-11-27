---
id: der-07
title: Inverse trig derivatives and logarithmic differentiation
---
Implicit differentiation gives the derivatives of inverse functions. Taking ln first handles powers like $x^x$.

::: rule
- $\frac{d}{dx}\arcsin x = \frac{1}{\sqrt{1 - x^2}}$
- $\frac{d}{dx}\arccos x = -\frac{1}{\sqrt{1 - x^2}}$
- $\frac{d}{dx}\arctan x = \frac{1}{1 + x^2}$

**Inverse function:** if $f(a) = b$, then

$$(f^{-1})'(b) = \frac{1}{f'(a)}$$

**Logarithmic differentiation:** for $y = $ a messy product, quotient or $x^{x}$-type power, take ln of both sides, use log rules, differentiate ($\frac{y'}{y}$ on the left), then multiply by y.
:::

::: example
$\frac{d}{dx}\arctan(x^2) = \frac{1}{1 + x^4} \cdot 2x$ (chain rule).

$f(x) = x^3 + x$ has $f(1) = 2$ and $f'(x) = 3x^2 + 1$. So

$(f^{-1})'(2) = \frac{1}{f'(1)} = \frac{1}{4}$.
:::

::: example
$y = x^x$ ($x > 0$). Neither the power rule nor the $a^x$ rule fits.

$\ln y = x\ln x$.

$\frac{y'}{y} = \ln x + x \cdot \frac{1}{x} = \ln x + 1$.

$y' = x^x(\ln x + 1)$.
:::

Type inverse trig as asin(x), acos(x), atan(x).

::: problem id=p1 type=expression answer="1/sqrt(1-x^2)"
$\frac{d}{dx}\arcsin x = ?$
solution: $\frac{1}{\sqrt{1 - x^2}}$.
:::

::: problem id=p2 type=expression answer="3/(1+9x^2)"
$\frac{d}{dx}\arctan(3x) = ?$
hint: Chain rule: the inside is $3x$.
solution: $\frac{1}{1 + (3x)^2} \cdot 3 = \frac{3}{1 + 9x^2}$.
:::

::: problem id=p3 type=numeric answer="-1"
What is the slope of $y = \arccos x$ at $x = 0$?
solution: $-\frac{1}{\sqrt{1 - 0}} = -1$.
:::

::: problem id=p4 type=numeric answer="1/5"
$f(x) = x^3 + 2x$, so $f(1) = 3$. What is $(f^{-1})'(3)$?
hint: Use $\frac{1}{f'(1)}$, not $\frac{1}{f'(3)}$.
solution: $f'(x) = 3x^2 + 2$, $f'(1) = 5$. So $\frac{1}{5}$.
:::

::: problem id=p5 type=numeric answer="1"
$y = x^x$. What is $y'$ at $x = 1$?
solution: $y' = x^x(\ln x + 1)$. At 1: $1 \cdot (0 + 1) = 1$.
:::

::: problem id=p6 type=expression answer="2/x+3/(x+1)-1/(x-2)"
$y = \frac{x^2(x + 1)^3}{x - 2}$. Use logarithmic differentiation. What is $\frac{y'}{y}$?
hint: $\ln y = 2\ln x + 3\ln(x + 1) - \ln(x - 2)$.
solution: Differentiate each log:
$\frac{y'}{y} = \frac{2}{x} + \frac{3}{x + 1} - \frac{1}{x - 2}$.
:::

::: problem id=p7 type=expression answer="atan(x)+x/(1+x^2)"
$\frac{d}{dx}(x\arctan x) = ?$
solution: Product rule: $\arctan x + x \cdot \frac{1}{1 + x^2}$.
:::

::: problem id=p8 type=expression answer="1/sqrt(4-x^2)"
$\frac{d}{dx}\arcsin\frac{x}{2} = ?$
hint: Chain rule, then tidy: $\frac{1}{2}\sqrt{\ldots} = \sqrt{\frac{\ldots}{4}}$.
solution: $\frac{1}{\sqrt{1 - \frac{x^2}{4}}} \cdot \frac{1}{2} = \frac{1}{\sqrt{4 - x^2}}$.
:::

::: problem id=x1 type=expression answer="1/(1+x^2)" set=extra
$\frac{d}{dx}\arctan x = ?$
solution: $\frac{1}{1 + x^2}$.
:::

::: problem id=x2 type=expression answer="2/sqrt(1-4x^2)" set=extra
$\frac{d}{dx}\arcsin(2x) = ?$
solution: $\frac{1}{\sqrt{1 - 4x^2}} \cdot 2$.
:::

::: problem id=x3 type=expression answer="-2x/sqrt(1-x^4)" set=extra
$\frac{d}{dx}\arccos(x^2) = ?$
solution: $-\frac{1}{\sqrt{1 - x^4}} \cdot 2x$.
:::

::: problem id=x4 type=expression answer="e^x/(1+e^(2x))" set=extra
$\frac{d}{dx}\arctan(e^x) = ?$
solution: $\frac{1}{1 + (e^x)^2} \cdot e^x = \frac{e^x}{1 + e^{2x}}$.
:::

::: problem id=x5 type=numeric answer="1/2" set=extra
What is the slope of $y = \arctan x$ at $x = 1$?
solution: $\frac{1}{1 + 1} = \frac{1}{2}$.
:::

::: problem id=x6 type=numeric answer="2/sqrt(3)" set=extra
What is the slope of $y = \arcsin x$ at $x = \frac{1}{2}$?
solution: $\frac{1}{\sqrt{1 - \frac{1}{4}}} = \frac{1}{\sqrt{3}/2} = \frac{2}{\sqrt{3}}$.
:::

::: problem id=x7 type=numeric answer="0" set=extra
$\frac{d}{dx}(\arcsin x + \arccos x) = ?$
solution: $\frac{1}{\sqrt{1 - x^2}} - \frac{1}{\sqrt{1 - x^2}} = 0$. (The sum is always $\frac{\pi}{2}$.)
:::

::: problem id=x8 type=expression answer="x" set=extra
Write the tangent line to $y = \arctan x$ at $x = 0$ as $y = \ldots$
solution: Point $(0, 0)$, slope $\frac{1}{1 + 0} = 1$: $y = x$.
:::

::: problem id=x9 type=numeric answer="1/6" set=extra
$f(x) = x^5 + x$, so $f(1) = 2$. What is $(f^{-1})'(2)$?
solution: $f'(x) = 5x^4 + 1$, $f'(1) = 6$. So $\frac{1}{6}$.
:::

::: problem id=x10 type=numeric answer="1/2" set=extra
$f(x) = e^x + x$, so $f(0) = 1$. What is $(f^{-1})'(1)$?
solution: $f'(0) = e^0 + 1 = 2$. So $\frac{1}{2}$.
:::

::: problem id=x11 type=numeric answer="1/4" set=extra
g is the inverse of f. $f(2) = 5$ and $f'(2) = 4$. What is $g'(5)$?
solution: $g'(5) = \frac{1}{f'(2)} = \frac{1}{4}$.
:::

::: problem id=x12 type=choice set=extra
For $f(x) = x^3 + 2x$ (so $f(1) = 3$), a student writes $(f^{-1})'(3) = \frac{1}{f'(3)} = \frac{1}{29}$. What's wrong?
- [ ] Nothing
- [x] It must be $\frac{1}{f'(1)}$: use the x with $f(x) = 3$
- [ ] It should be $f'(3) = 29$
- [ ] It should be $-\frac{1}{29}$
solution: The rule is $\frac{1}{f'(a)}$ where $f(a) = 3$, so $a = 1$: $\frac{1}{5}$.
:::

::: problem id=x13 type=numeric answer="4(ln(2)+1)" set=extra
$y = x^x$. What is $y'$ at $x = 2$?
solution: $y' = x^x(\ln x + 1)$. At 2: $4(\ln 2 + 1)$.
:::

::: problem id=x14 type=numeric answer="1" set=extra
$y = x^{\sin x}$. What is $y'$ at $x = \frac{\pi}{2}$?
hint: $\ln y = \sin x \ln x$.
solution: $\frac{y'}{y} = \cos x\ln x + \frac{\sin x}{x}$.
At $\frac{\pi}{2}$: $y = \frac{\pi}{2}$ and $\frac{y'}{y} = 0 + \frac{2}{\pi}$. So $y' = 1$.
:::

::: problem id=x15 type=expression answer="3/x-2/(x+1)" set=extra
$y = \frac{x^3}{(x + 1)^2}$. What is $\frac{y'}{y}$?
solution: $\ln y = 3\ln x - 2\ln(x + 1)$.
So $\frac{y'}{y} = \frac{3}{x} - \frac{2}{x + 1}$.
:::

::: problem id=x16 type=expression answer="-1/(x^2+1)" set=extra
$\frac{d}{dx}\arctan\frac{1}{x} = ?$
hint: Chain rule, then multiply top and bottom by $x^2$.
solution: $\frac{1}{1 + \frac{1}{x^2}} \cdot \left(-\frac{1}{x^2}\right) = -\frac{1}{x^2 + 1}$.
:::

::: problem id=x17 type=numeric answer="2e^e" set=extra
$y = x^x$. What is the slope at $x = e$?
hint: $\ln e = 1$.
solution: $e^e(\ln e + 1) = 2e^e$.
:::

::: problem id=x18 type=numeric answer="2/sqrt(3)" set=extra
$y = \arcsin\sqrt{x}$. What is $y'$ at $x = \frac{1}{4}$?
hint: Chain rule: the inside $\sqrt{x}$ has derivative $\frac{1}{2\sqrt{x}}$.
solution: $y' = \frac{1}{\sqrt{1 - x}} \cdot \frac{1}{2\sqrt{x}}$.
At $\frac{1}{4}$: $\frac{1}{\sqrt{3}/2} \cdot \frac{1}{1} = \frac{2}{\sqrt{3}}$.
:::

::: problem id=x19 type=numeric answer="675/16" set=extra
$y = \frac{(x^2 + 1)^3(x - 1)^5}{x^4}$. What is $y'(2)$?
hint: Find $y(2)$ and $\frac{y'}{y}$ at 2, then multiply.
solution: $y(2) = \frac{125 \cdot 1}{16}$.
$\frac{y'}{y} = \frac{6x}{x^2 + 1} + \frac{5}{x - 1} - \frac{4}{x}$.
At 2: $\frac{12}{5} + 5 - 2 = \frac{27}{5}$. So $y' = \frac{125}{16} \cdot \frac{27}{5} = \frac{675}{16}$.
:::

::: problem id=x20 type=numeric answer="1/4" set=extra creative=true
Let $y = \arctan x$, so $\tan y = x$. Differentiate this implicitly and find $y'$ at $x = \sqrt{3}$.
hint: $\sec^2 y = 1 + \tan^2 y = 1 + x^2$.
solution: $\sec^2 y \cdot y' = 1$, so $y' = \frac{1}{1 + x^2}$.
At $\sqrt{3}$: $\frac{1}{4}$.
:::
