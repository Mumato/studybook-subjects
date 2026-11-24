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
