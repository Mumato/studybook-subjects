---
id: der-04
title: Product and quotient rules
---
::: rule
- **Product rule:** $(fg)' = f'g + fg'$
- **Quotient rule:** $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$

The derivative of a product is **not** the product of the derivatives.
:::

::: example
$\frac{d}{dx}(x^2\sin x) = 2x\sin x + x^2\cos x$.
:::

::: example
$\frac{d}{dx}\frac{x}{x + 1} = \frac{1 \cdot (x + 1) - x \cdot 1}{(x + 1)^2} = \frac{1}{(x + 1)^2}$.
:::

::: problem id=p1 type=expression answer="e^x+xe^x"
$\frac{d}{dx}(xe^x) = ?$
hint: $f = x$, $g = e^x$.
solution: $1 \cdot e^x + x e^x = e^x + xe^x$.
:::

::: problem id=p2 type=expression answer="2xsin(x)+x^2cos(x)"
$\frac{d}{dx}(x^2\sin x) = ?$
solution: $2x\sin x + x^2\cos x$.
:::

::: problem id=p3 type=expression answer="1/(x+1)^2"
$\frac{d}{dx}\frac{x}{x + 1} = ?$
hint: Use the quotient rule with $f = x$, $g = x + 1$.
solution: $\frac{(x + 1) - x}{(x + 1)^2} = \frac{1}{(x + 1)^2}$.
:::

::: problem id=p4 type=expression answer="ln(x)+1"
$\frac{d}{dx}(x\ln x) = ?$
solution: $1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$.
:::

::: problem id=p5 type=numeric answer="0"
$f(x) = x^2e^x$. What is $f'(0)$?
hint: $f'(x) = 2xe^x + x^2e^x$.
solution: At 0 both terms are 0: **0**.
:::

::: problem id=p6 type=expression answer="(xcos(x)-sin(x))/x^2"
$\frac{d}{dx}\frac{\sin x}{x} = ?$
solution: $\frac{\cos x \cdot x - \sin x \cdot 1}{x^2}$.
:::

::: problem id=p7 type=expression answer="3x^2-6x+1"
$\frac{d}{dx}\left[(x^2 + 1)(x - 3)\right] = ?$
hint: Product rule, then tidy up.
solution: $2x(x - 3) + (x^2 + 1) = 3x^2 - 6x + 1$.
:::

::: problem id=p8 type=choice
Which is the product rule?
- [ ] $(fg)' = f'g'$
- [x] $(fg)' = f'g + fg'$
- [ ] $(fg)' = f'g - fg'$
solution: $(fg)' = f'g + fg'$.
:::

::: problem id=x1 type=expression answer="3x^2e^x+x^3e^x" set=extra
$\frac{d}{dx}(x^3e^x) = ?$
solution: $3x^2 e^x + x^3 e^x$.
:::

::: problem id=x2 type=expression answer="cos(x)-xsin(x)" set=extra
$\frac{d}{dx}(x\cos x) = ?$
solution: $1 \cdot \cos x + x(-\sin x) = \cos x - x\sin x$.
:::

::: problem id=x3 type=expression answer="e^xsin(x)+e^xcos(x)" set=extra
$\frac{d}{dx}(e^x\sin x) = ?$
solution: $e^x\sin x + e^x\cos x$.
:::

::: problem id=x4 type=expression answer="-2/(x-2)^2" set=extra
$\frac{d}{dx}\frac{x}{x - 2} = ?$
solution: $\frac{1 \cdot (x - 2) - x \cdot 1}{(x - 2)^2} = \frac{-2}{(x - 2)^2}$.
:::

::: problem id=x5 type=expression answer="(x^2+2x)/(x+1)^2" set=extra
$\frac{d}{dx}\frac{x^2}{x + 1} = ?$
solution: $\frac{2x(x + 1) - x^2}{(x + 1)^2} = \frac{x^2 + 2x}{(x + 1)^2}$.
:::

::: problem id=x6 type=expression answer="(1-ln(x))/x^2" set=extra
$\frac{d}{dx}\frac{\ln x}{x} = ?$
solution: $\frac{\frac{1}{x} \cdot x - \ln x \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$.
:::

::: problem id=x7 type=expression answer="(xe^x-e^x)/x^2" set=extra
$\frac{d}{dx}\frac{e^x}{x} = ?$
solution: $\frac{e^x \cdot x - e^x \cdot 1}{x^2}$.
:::

::: problem id=x8 type=expression answer="sec(x)^2" set=extra
Use the quotient rule on $\tan x = \frac{\sin x}{\cos x}$. What is $\frac{d}{dx}\tan x$?
solution: $\frac{\cos x\cos x - \sin x(-\sin x)}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$.
:::

::: problem id=x9 type=numeric answer="3" set=extra
$f(x) = (x + 1)(x^2 - 2)$. What is $f'(1)$?
solution: $f' = (x^2 - 2) + (x + 1)(2x)$.
At 1: $-1 + 4 = 3$.
:::

::: problem id=x10 type=numeric answer="-7" set=extra
$f(x) = \frac{2x + 1}{x - 3}$. What is $f'(4)$?
solution: $f' = \frac{2(x - 3) - (2x + 1)}{(x - 3)^2} = \frac{-7}{(x - 3)^2}$.
At 4: $-7$.
:::

::: problem id=x11 type=numeric answer="11" set=extra
$f(2) = 3$, $f'(2) = -1$, $g(2) = 4$, $g'(2) = 5$. What is $(fg)'(2)$?
solution: $f'g + fg' = (-1)(4) + (3)(5) = 11$.
:::

::: problem id=x12 type=numeric answer="-19/16" set=extra
Same numbers. What is $\left(\frac{f}{g}\right)'(2)$?
solution: $\frac{f'g - fg'}{g^2} = \frac{-4 - 15}{16} = -\frac{19}{16}$.
:::

::: problem id=x13 type=choice set=extra
A student writes $\frac{d}{dx}(x^2\sin x) = 2x\cos x$. What went wrong?
- [ ] Nothing
- [x] They multiplied the two derivatives; the product rule gives $2x\sin x + x^2\cos x$
- [ ] The answer should be $2x\sin x$
- [ ] The answer should be $x^2\cos x$
solution: $(fg)' \ne f'g'$. Use $f'g + fg'$.
:::

::: problem id=x14 type=expression answer="x" set=extra
Write the tangent line to $y = xe^x$ at $x = 0$ as $y = \ldots$
solution: Point $(0, 0)$. Slope $e^0 + 0 = 1$. So $y = x$.
:::

::: problem id=x15 type=expression answer="cos(x)^2-sin(x)^2" set=extra
$\frac{d}{dx}(\sin x\cos x) = ?$
solution: $\cos x\cos x + \sin x(-\sin x)$
$= \cos^2 x - \sin^2 x$.
:::

::: problem id=x16 type=expression answer="2xe^xsin(x)+x^2e^xsin(x)+x^2e^xcos(x)" set=extra
$\frac{d}{dx}(x^2e^x\sin x) = ?$
hint: Treat it as $(x^2e^x) \cdot \sin x$ and use the product rule twice.
solution: $(x^2e^x)' = 2xe^x + x^2e^x$.
So: $(2xe^x + x^2e^x)\sin x + x^2e^x\cos x$.
:::

::: problem id=x17 type=multi answers="1;-1" set=extra
Where does $y = \frac{x}{x^2 + 1}$ have a flat tangent? Type both x values.
hint: Set the top of the quotient-rule answer to 0.
solution: $y' = \frac{(x^2 + 1) - 2x^2}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2}$.
Zero when $x = \pm 1$.
:::

::: problem id=x18 type=expression answer="-2x/(x^2+1)^2" set=extra
$\frac{d}{dx}\frac{1}{x^2 + 1} = ?$
hint: Quotient rule with $f = 1$, so $f' = 0$.
solution: $\frac{0 \cdot (x^2 + 1) - 1 \cdot 2x}{(x^2 + 1)^2} = \frac{-2x}{(x^2 + 1)^2}$.
:::

::: problem id=x19 type=expression answer="x/2-1/2" set=extra
Write the tangent line to $y = \frac{x - 1}{x + 1}$ at $x = 1$ as $y = \ldots$
hint: $y' = \frac{2}{(x + 1)^2}$.
solution: Point $(1, 0)$, slope $\frac{2}{4} = \frac{1}{2}$.
$y = \frac{1}{2}(x - 1) = \frac{x}{2} - \frac{1}{2}$.
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
$h = fg$ with $h(1) = 6$, $h'(1) = 13$, $f(1) = 2$, $f'(1) = 3$. What is $g'(1)$?
hint: First find $g(1)$ from $h(1) = f(1)g(1)$.
solution: $g(1) = 3$. Then $13 = 3 \cdot 3 + 2g'(1)$, so $g'(1) = 2$.
:::
