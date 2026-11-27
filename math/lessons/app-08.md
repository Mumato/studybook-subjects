---
id: app-08
title: L'Hôpital's rule
---
Some limits come out as $\frac{0}{0}$ or $\frac{\infty}{\infty}$ when you plug in. These are **indeterminate forms**: the answer could be anything. L'Hôpital's rule settles them with derivatives.

::: rule
If $\lim \frac{f(x)}{g(x)}$ has the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then

$$\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$$

(if the right side exists). Differentiate top and bottom **separately**, not with the quotient rule. Repeat if it is still indeterminate.

Other forms: rewrite first.
- $0 \cdot \infty$: write $fg = \frac{f}{1/g}$.
- $\infty - \infty$: combine into one fraction.
- $1^\infty$, $0^0$, $\infty^0$: let $y = f^g$, find $\lim \ln y = \lim g\ln f$, then $\lim y = e^{\lim \ln y}$.
:::

::: example
**$\frac{\infty}{\infty}$ twice.** $\lim_{x \to \infty} \frac{x^2}{e^x}$:

$= \lim \frac{2x}{e^x}$ (still $\frac{\infty}{\infty}$)

$= \lim \frac{2}{e^x} = 0$.

**$0 \cdot \infty$.** $\lim_{x \to 0^+} x\ln x = \lim \frac{\ln x}{1/x}$ (now $\frac{-\infty}{\infty}$)

$= \lim \frac{1/x}{-1/x^2} = \lim(-x) = 0$.
:::

::: example
**$1^\infty$.** $\lim_{x \to \infty}\left(1 + \frac{1}{x}\right)^x$. Let y be the expression.

$\ln y = x\ln\left(1 + \frac{1}{x}\right) = \frac{\ln(1 + 1/x)}{1/x}$, a $\frac{0}{0}$ form.

Derivatives: $\frac{\frac{1}{1 + 1/x} \cdot (-1/x^2)}{-1/x^2} = \frac{1}{1 + 1/x} \to 1$.

So $\ln y \to 1$ and $y \to e^1 = e$.
:::

::: problem id=p1 type=numeric answer="3"
$\lim_{x \to 0} \frac{\sin 3x}{x} = ?$
solution: $\frac{0}{0}$. Derivatives: $\frac{3\cos 3x}{1} \to 3$.
:::

::: problem id=p2 type=numeric answer="4"
$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = ?$
solution: $\frac{0}{0}$. $\frac{2x}{1} \to 4$. (Factoring gives the same.)
:::

::: problem id=p3 type=numeric answer="0"
$\lim_{x \to \infty} \frac{\ln x}{x} = ?$
solution: $\frac{\infty}{\infty}$. $\frac{1/x}{1} \to 0$.
:::

::: problem id=p4 type=numeric answer="1/2"
$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = ?$
hint: You need the rule twice.
solution: $\frac{\sin x}{2x}$, still $\frac{0}{0}$.
Again: $\frac{\cos x}{2} \to \frac{1}{2}$.
:::

::: problem id=p5 type=numeric answer="1"
$\lim_{x \to \infty} x\sin\frac{1}{x} = ?$
hint: $0 \cdot \infty$: write it as $\frac{\sin(1/x)}{1/x}$.
solution: $\frac{0}{0}$. Derivatives: $\frac{\cos(1/x) \cdot (-1/x^2)}{-1/x^2} = \cos\frac{1}{x} \to 1$.
:::

::: problem id=p6 type=numeric answer="1/2"
$\lim_{x \to 0} \left(\frac{1}{x} - \frac{1}{e^x - 1}\right) = ?$
hint: $\infty - \infty$: combine to $\frac{e^x - 1 - x}{x(e^x - 1)}$.
solution: $\frac{0}{0}$: $\frac{e^x - 1}{e^x - 1 + xe^x}$, still $\frac{0}{0}$.
Again: $\frac{e^x}{2e^x + xe^x} \to \frac{1}{2}$.
:::

::: problem id=p7 type=numeric answer="1"
$\lim_{x \to 0^+} x^x = ?$
hint: $0^0$. Take $\ln y = x\ln x$.
solution: $\ln y = x\ln x \to 0$ (from the example).
So $y \to e^0 = 1$.
:::

::: problem id=p8 type=choice
What is $\lim_{x \to 1} \frac{x^2 + 1}{x + 1}$?
- [x] 1
- [ ] 2
- [ ] 0
- [ ] it doesn't exist
solution: Plug in: $\frac{2}{2} = 1$. It is **not** indeterminate, so L'Hôpital does not apply (using it wrongly gives $\frac{2x}{1} \to 2$).
:::

::: problem id=x1 type=numeric answer="1" set=extra
$\lim_{x \to 0} \frac{\tan x}{x} = ?$
solution: $\frac{0}{0}$. $\frac{\sec^2 x}{1} \to 1$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
$\lim_{x \to 0} \frac{e^{2x} - 1}{x} = ?$
solution: $\frac{0}{0}$. $\frac{2e^{2x}}{1} \to 2$.
:::

::: problem id=x3 type=numeric answer="27" set=extra
$\lim_{x \to 3} \frac{x^3 - 27}{x - 3} = ?$
solution: $\frac{0}{0}$. $\frac{3x^2}{1} \to 27$.
:::

::: problem id=x4 type=numeric answer="3/5" set=extra
$\lim_{x \to \infty} \frac{3x^2 + 1}{5x^2 - x} = ?$
solution: $\frac{\infty}{\infty}$: $\frac{6x}{10x - 1}$, again: $\frac{6}{10} = \frac{3}{5}$.
:::

::: problem id=x5 type=numeric answer="0" set=extra
$\lim_{x \to \infty} \frac{x^3}{e^x} = ?$
solution: Three times: $\frac{3x^2}{e^x}$, $\frac{6x}{e^x}$, $\frac{6}{e^x} \to 0$. Exponentials beat powers.
:::

::: problem id=x6 type=numeric answer="1" set=extra
$\lim_{x \to 1} \frac{\ln x}{x - 1} = ?$
solution: $\frac{0}{0}$. $\frac{1/x}{1} \to 1$.
:::

::: problem id=x7 type=numeric answer="1/6" set=extra
$\lim_{x \to 0} \frac{x - \sin x}{x^3} = ?$
hint: Use the rule three times.
solution: $\frac{1 - \cos x}{3x^2}$, then $\frac{\sin x}{6x}$, then $\frac{\cos x}{6} \to \frac{1}{6}$.
:::

::: problem id=x8 type=numeric answer="0" set=extra
$\lim_{x \to 0^+} \sqrt{x}\ln x = ?$
solution: $0 \cdot \infty$: $\frac{\ln x}{x^{-1/2}}$.
$\frac{1/x}{-\frac{1}{2}x^{-3/2}} = -2\sqrt{x} \to 0$.
:::

::: problem id=x9 type=numeric answer="1" set=extra
$\lim_{x \to \infty} x\left(e^{1/x} - 1\right) = ?$
solution: Write $\frac{e^{1/x} - 1}{1/x}$, a $\frac{0}{0}$ form.
$\frac{e^{1/x}(-1/x^2)}{-1/x^2} = e^{1/x} \to 1$.
:::

::: problem id=x10 type=numeric answer="e^3" set=extra
$\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^x = ?$ (exact)
solution: $\ln y = \frac{\ln(1 + 3/x)}{1/x}$.
Derivatives: $\frac{3}{1 + 3/x} \to 3$. So $y \to e^3$.
:::

::: problem id=x11 type=numeric answer="e" set=extra
$\lim_{x \to 0^+} (1 + x)^{1/x} = ?$
solution: $\ln y = \frac{\ln(1 + x)}{x}$, $\frac{0}{0}$: $\frac{1/(1 + x)}{1} \to 1$. So $y \to e$.
:::

::: problem id=x12 type=choice set=extra
What form is $\lim_{x \to 0^+} x\ln x$ when you plug in?
- [ ] $\frac{0}{0}$
- [x] $0 \cdot (-\infty)$
- [ ] $\infty - \infty$
- [ ] $1^\infty$
solution: $x \to 0$ and $\ln x \to -\infty$: a product of the type $0 \cdot \infty$.
:::

::: problem id=x13 type=choice set=extra
What form is $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$?
- [ ] $\frac{\infty}{\infty}$
- [ ] $0 \cdot \infty$
- [x] $1^\infty$
- [ ] $\infty^0$
solution: The base tends to 1 and the power to $\infty$. (It is **not** simply 1: the limit is e.)
:::

::: problem id=x14 type=choice set=extra
For $\lim_{x \to 0} \frac{\sin x}{x}$, a student differentiates $\frac{\sin x}{x}$ with the quotient rule. What is wrong?
- [ ] Nothing, that's the rule
- [x] L'Hôpital differentiates top and bottom separately
- [ ] The limit is not indeterminate
- [ ] Only the bottom should be differentiated
solution: The rule uses $\frac{f'}{g'} = \frac{\cos x}{1} \to 1$, not $\left(\frac{f}{g}\right)'$.
:::

::: problem id=x15 type=numeric answer="1/2" set=extra
$\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right) = ?$
hint: $\infty - \infty$. Multiply by $\frac{\sqrt{x^2 + x} + x}{\sqrt{x^2 + x} + x}$.
solution: $= \frac{x}{\sqrt{x^2 + x} + x}$. Divide top and bottom by x:
$\frac{1}{\sqrt{1 + 1/x} + 1} \to \frac{1}{2}$.
:::

::: problem id=x16 type=numeric answer="1/24" set=extra
$\lim_{x \to 0} \frac{\cos x - 1 + \frac{x^2}{2}}{x^4} = ?$
hint: Four rounds of the rule.
solution: $\frac{-\sin x + x}{4x^3}$, $\frac{-\cos x + 1}{12x^2}$,
$\frac{\sin x}{24x}$, $\frac{\cos x}{24} \to \frac{1}{24}$.
:::

::: problem id=x17 type=numeric answer="0" set=extra
$\lim_{x \to \pi/2^-} (\sec x - \tan x) = ?$
hint: Write both with $\cos x$ underneath.
solution: $= \frac{1 - \sin x}{\cos x}$, a $\frac{0}{0}$ form.
$\frac{-\cos x}{-\sin x} \to \frac{0}{1} = 0$.
:::

::: problem id=x18 type=numeric answer="1" set=extra
$\lim_{x \to \infty} x^{1/x} = ?$
hint: $\infty^0$: take $\ln y = \frac{\ln x}{x}$.
solution: $\ln y = \frac{\ln x}{x} \to 0$, so $y \to e^0 = 1$.
:::

::: problem id=x19 type=numeric answer="e^(-1/2)" set=extra
$\lim_{x \to 0} (\cos x)^{1/x^2} = ?$ (exact)
hint: $\ln y = \frac{\ln\cos x}{x^2}$.
solution: $\frac{0}{0}$: $\frac{-\tan x}{2x}$, then $\frac{-\sec^2 x}{2} \to -\frac{1}{2}$.
So $y \to e^{-1/2}$.
:::

::: problem id=x20 type=numeric answer="1" set=extra creative=true
$\lim_{x \to \infty} \frac{x + \sin x}{x} = ?$ L'Hôpital gives $\frac{1 + \cos x}{1}$, which has no limit. Does that mean the limit doesn't exist?
hint: Split the fraction instead.
solution: $\frac{x + \sin x}{x} = 1 + \frac{\sin x}{x} \to 1 + 0 = 1$. The rule only says: **if** $\lim\frac{f'}{g'}$ exists, it equals the answer. Here it doesn't, so use another method.
:::
