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
$\frac{d}{dx}(3x + 1)^5 = 5(3x + 1)^4 \cdot 3 = 15(3x + 1)^4$.
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
