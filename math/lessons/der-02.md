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

::: problem id=x1 type=expression answer="7x^6" set=extra
$\frac{d}{dx} x^7 = ?$
solution: $7x^6$.
:::

::: problem id=x2 type=expression answer="12x^3-10x+2" set=extra
$\frac{d}{dx}(3x^4 - 5x^2 + 2x - 9) = ?$
solution: $12x^3 - 10x + 2$.
:::

::: problem id=x3 type=expression answer="-3/x^4" set=extra
$\frac{d}{dx} x^{-3} = ?$
solution: $-3x^{-4} = -\frac{3}{x^4}$.
:::

::: problem id=x4 type=expression answer="3sqrt(x)/2" set=extra
$\frac{d}{dx} x^{3/2} = ?$
solution: $\frac{3}{2}x^{1/2} = \frac{3}{2}\sqrt{x}$.
:::

::: problem id=x5 type=expression answer="-12/x^3" set=extra
$\frac{d}{dx}\frac{6}{x^2} = ?$
hint: $\frac{6}{x^2} = 6x^{-2}$.
solution: $-12x^{-3} = -\frac{12}{x^3}$.
:::

::: problem id=x6 type=expression answer="1/(3x^(2/3))" set=extra
$\frac{d}{dx}\sqrt[3]{x} = ?$
solution: $\frac{1}{3}x^{-2/3} = \frac{1}{3x^{2/3}}$.
:::

::: problem id=x7 type=numeric answer="8" set=extra
$f(x) = 2x^3 - x^2$. What is $f'(-1)$?
solution: $f'(x) = 6x^2 - 2x$. $f'(-1) = 6 + 2 = 8$.
:::

::: problem id=x8 type=expression answer="12x-16" set=extra
Write the tangent line to $y = x^3$ at $x = 2$ as $y = \ldots$
solution: Point $(2, 8)$, slope $3 \cdot 4 = 12$.
$y = 12(x - 2) + 8 = 12x - 16$.
:::

::: problem id=x9 type=expression answer="4x^3+4x" set=extra
$\frac{d}{dx}(x^2 + 1)^2 = ?$
hint: Expand first.
solution: $x^4 + 2x^2 + 1$, so $4x^3 + 4x$.
:::

::: problem id=x10 type=expression answer="2x" set=extra
$\frac{d}{dx}\frac{x^3 + 2x}{x} = ?$
hint: Divide first.
solution: $x^2 + 2$, so $2x$.
:::

::: problem id=x11 type=choice set=extra
A student says $\frac{d}{dx}\frac{1}{x^3} = \frac{1}{3x^2}$. What is right?
- [ ] $\frac{1}{3x^2}$
- [ ] $-\frac{1}{3x^4}$
- [x] $-\frac{3}{x^4}$
- [ ] $\frac{3}{x^2}$
solution: $x^{-3} \to -3x^{-4} = -\frac{3}{x^4}$. You can't differentiate the bottom alone.
:::

::: problem id=x12 type=numeric answer="15" set=extra
A particle's position is $s(t) = t^3 - 6t^2$. What is its velocity at $t = 5$?
solution: $v = 3t^2 - 12t$. At 5: $75 - 60 = 15$.
:::

::: problem id=x13 type=numeric answer="4" set=extra
Same particle, $s(t) = t^3 - 6t^2$. At what time $t > 0$ is it momentarily at rest?
solution: $3t^2 - 12t = 3t(t - 4) = 0$, so $t = 4$.
:::

::: problem id=x14 type=numeric answer="3" set=extra
Where does $y = x^2 - 6x + 1$ have a flat tangent? Type the x value.
solution: $2x - 6 = 0$, so $x = 3$.
:::

::: problem id=x15 type=expression answer="3sqrt(x)/2+1/(2sqrt(x))" set=extra
$\frac{d}{dx}\left[\sqrt{x}(x + 1)\right] = ?$
hint: Multiply out: $x^{3/2} + x^{1/2}$.
solution: $\frac{3}{2}x^{1/2} + \frac{1}{2}x^{-1/2} = \frac{3\sqrt{x}}{2} + \frac{1}{2\sqrt{x}}$.
:::

::: problem id=x16 type=multi answers="2;-2" set=extra
Where does $y = x^3$ have slope 12? Type both x values.
hint: Set $3x^2 = 12$.
solution: $x^2 = 4$, so $x = 2$ and $x = -2$.
:::

::: problem id=x17 type=expression answer="-x/4+1" set=extra
Write the tangent line to $y = \frac{1}{x}$ at $x = 2$ as $y = \ldots$
hint: The slope is $-\frac{1}{x^2}$.
solution: Point $(2, \frac{1}{2})$, slope $-\frac{1}{4}$.
$y = -\frac{1}{4}(x - 2) + \frac{1}{2} = -\frac{x}{4} + 1$.
:::

::: problem id=x18 type=numeric answer="10" set=extra
On $y = x^2 + 3x$ the tangent is parallel to $y = 7x + 1$ at one point. What is that point's y-coordinate?
hint: Parallel means slope 7.
solution: $2x + 3 = 7$, $x = 2$. Then $y = 4 + 6 = 10$.
:::

::: problem id=x19 type=numeric answer="3/4" set=extra
Where does the tangent to $y = x^4$ at $x = 1$ cross the x-axis?
hint: Find the tangent line, then set $y = 0$.
solution: Point $(1, 1)$, slope 4: $y = 4x - 3$. Zero at $x = \frac{3}{4}$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
$y = ax^2 + bx$ passes through $(1, 5)$ and has slope 8 there. What is a?
hint: One equation from the point, one from the slope.
solution: $a + b = 5$ and $2a + b = 8$. Subtract: $a = 3$ (and $b = 2$).
:::
