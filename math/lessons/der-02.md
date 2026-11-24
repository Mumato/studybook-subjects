---
id: der-02
title: The power rule
---
::: rule
$$\frac{d}{dx} x^n = n x^{n - 1}$$

It works for any power: negative ones and fractions too. Also:
- the derivative of a constant is 0
- constants multiply through: $(cf)' = cf'$
- sums go term by term: $(f + g)' = f' + g'$
:::

::: example
$\frac{d}{dx}(4x^3 - 2x + 7) = 12x^2 - 2$.
:::

::: example
$\frac{d}{dx}\sqrt{x} = \frac{d}{dx}x^{\frac{1}{2}} = \frac{1}{2}x^{-\frac{1}{2}} = \frac{1}{2\sqrt{x}}$.
:::

::: problem id=p1 type=expression answer="5x^4"
$\frac{d}{dx} x^5 = ?$
solution: $5x^4$.
:::

::: problem id=p2 type=expression answer="12x^2-2"
$\frac{d}{dx}(4x^3 - 2x + 7) = ?$
solution: $12x^2 - 2$.
:::

::: problem id=p3 type=expression answer="-1/x^2"
$\frac{d}{dx}\frac{1}{x} = ?$
hint: $\frac{1}{x} = x^{-1}$.
solution: $-x^{-2} = -\frac{1}{x^2}$.
:::

::: problem id=p4 type=expression answer="1/(2sqrt(x))"
$\frac{d}{dx}\sqrt{x} = ?$
hint: $\sqrt{x} = x^{\frac{1}{2}}$.
solution: $\frac{1}{2\sqrt{x}}$.
:::

::: problem id=p5 type=numeric answer="6"
$f(x) = x^3 - 6x$. What is $f'(2)$?
hint: Find $f'(x)$ first.
solution: $f'(x) = 3x^2 - 6$, $f'(2) = 12 - 6 = 6$.
:::

::: problem id=p6 type=expression answer="10x+3"
$\frac{d}{dx}(5x^2 + 3x) = ?$
solution: $10x + 3$.
:::

::: problem id=p7 type=expression answer="x^3"
$\frac{d}{dx}\frac{x^4}{4} = ?$
solution: $\frac{4x^3}{4} = x^3$.
:::

::: problem id=p8 type=numeric answer="3"
What is the slope of $y = x^3$ at $x = -1$?
solution: $3(-1)^2 = 3$.
:::

::: problem id=c1 type=multi answers="1;-1" creative=true
Where does $y = x^3 - 3x$ have a flat tangent? Type both x values.
hint: Set the derivative equal to 0.
solution: $3x^2 - 3 = 0$, $x^2 = 1$: $x = 1$ and $x = -1$.
:::
