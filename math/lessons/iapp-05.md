---
id: iapp-05
title: Arc length and surface area
---
Zoom in on a curve and a tiny piece of it is almost straight: its length is $\sqrt{dx^2 + dy^2}$. Adding up these pieces gives the length of the whole curve.

::: rule
**Arc length** of $y = f(x)$ from $x = a$ to $x = b$:

$$L = \int_a^b \sqrt{1 + f'(x)^2}\,dx$$

**Surface area** when the curve is spun around the x-axis (with $f \ge 0$):

$$S = 2\pi\int_a^b f(x)\sqrt{1 + f'(x)^2}\,dx$$

Spun around the y-axis, the radius is x instead: $S = 2\pi\int_a^b x\sqrt{1 + f'(x)^2}\,dx$.

Only a few curves give nice integrals: look for $1 + f'^2$ to be a perfect square.
:::

::: example
Length of $y = \frac{2}{3}x^{3/2}$ from 0 to 3. Here $f' = \sqrt{x}$, so $1 + f'^2 = 1 + x$:

$$L = \int_0^3 \sqrt{1 + x}\,dx$$

$$= \frac{2}{3}(1 + x)^{3/2}\Big|_0^3$$

That is $\frac{2}{3}(8 - 1) = \frac{14}{3}$.
:::

::: example
Spin $y = \sqrt{x}$, $0 \le x \le 2$, around the x-axis. $f' = \frac{1}{2\sqrt{x}}$, so

$$f\sqrt{1 + f'^2} = \sqrt{x}\sqrt{1 + \frac{1}{4x}}$$

$$= \sqrt{x + \frac{1}{4}}$$

$$S = 2\pi\int_0^2 \sqrt{x + \tfrac{1}{4}}\,dx$$

$$= \frac{4\pi}{3}\left(\frac{27}{8} - \frac{1}{8}\right)$$

So $S = \frac{13\pi}{3}$.
:::

Give exact answers unless a problem asks for decimals.

::: problem id=p1 type=numeric answer="3sqrt(5)"
What is the length of $y = 2x + 1$ from $x = 0$ to $x = 3$?
solution: $f' = 2$: $\int_0^3 \sqrt{5}\,dx = 3\sqrt{5}$. (Distance formula check: from $(0, 1)$ to $(3, 7)$ is $\sqrt{9 + 36} = 3\sqrt{5}$.)
:::

::: problem id=p2 type=numeric answer="8(10sqrt(10)-1)/27"
What is the length of $y = x^{3/2}$ from $x = 0$ to $x = 4$?
hint: $1 + f'^2 = 1 + \frac{9x}{4}$.
solution: $\int_0^4 \left(1 + \frac{9x}{4}\right)^{1/2}dx = \frac{8}{27}\left(1 + \frac{9x}{4}\right)^{3/2}\Big|_0^4$, which is $\frac{8}{27}(10\sqrt{10} - 1)$.
:::

::: problem id=p3 type=choice
Which integral gives the length of $y = x^2$ from 0 to 1?
- [ ] $\int_0^1 \sqrt{1 + x^2}\,dx$
- [x] $\int_0^1 \sqrt{1 + 4x^2}\,dx$
- [ ] $\int_0^1 (1 + 2x)\,dx$
- [ ] $\int_0^1 \sqrt{1 + x^4}\,dx$
solution: $f' = 2x$, so $1 + f'^2 = 1 + 4x^2$.
:::

::: problem id=p4 type=numeric answer="e^2/2-1/4"
What is the length of $y = \frac{x^2}{2} - \frac{\ln x}{4}$ from 1 to e?
hint: $f' = x - \frac{1}{4x}$, and $1 + f'^2 = \left(x + \frac{1}{4x}\right)^2$.
solution: $L = \int_1^e \left(x + \frac{1}{4x}\right)dx = \left[\frac{x^2}{2} + \frac{\ln x}{4}\right]_1^e$, which is $\frac{e^2}{2} + \frac{1}{4} - \frac{1}{2} = \frac{e^2}{2} - \frac{1}{4}$.
:::

::: problem id=p5 type=numeric answer="3pi"
Use the formula to find the length of the half circle $y = \sqrt{9 - x^2}$, $-3 \le x \le 3$.
hint: $1 + f'^2 = \frac{9}{9 - x^2}$.
solution: $\int_{-3}^{3}\frac{3}{\sqrt{9 - x^2}}\,dx = 3\left[\arcsin\frac{x}{3}\right]_{-3}^{3} = 3\pi$, half of $2\pi \cdot 3$.
:::

::: problem id=p6 type=numeric answer="sqrt(2)pi"
Spin $y = x$, $0 \le x \le 1$, around the x-axis. What is the surface area?
solution: $2\pi\int_0^1 x\sqrt{2}\,dx = \sqrt{2}\,\pi$. That's a cone: $\pi r\ell = \pi \cdot 1 \cdot \sqrt{2}$.
:::

::: problem id=p7 type=numeric answer="16pi"
Spin $y = \sqrt{4 - x^2}$, $-2 \le x \le 2$, around the x-axis. What is the surface area of this sphere?
hint: $f\sqrt{1 + f'^2}$ simplifies to 2.
solution: $2\pi\int_{-2}^{2} 2\,dx = 16\pi$, which is $4\pi r^2$ with $r = 2$.
:::

::: problem id=p8 type=numeric answer="pi(10sqrt(10)-1)/27"
Spin $y = x^3$, $0 \le x \le 1$, around the x-axis. What is the surface area?
hint: $u = 1 + 9x^4$, $du = 36x^3\,dx$.
solution: $2\pi\int_0^1 x^3\sqrt{1 + 9x^4}\,dx = \frac{2\pi}{36} \cdot \frac{2}{3}u^{3/2}\Big|_1^{10}$, which is $\frac{\pi}{27}(10\sqrt{10} - 1)$.
:::

::: problem id=x1 type=numeric answer="4sqrt(10)" set=extra
What is the length of $y = 3x - 2$ from $x = 1$ to $x = 5$?
solution: $f' = 3$: $\int_1^5 \sqrt{10}\,dx = 4\sqrt{10}$.
:::

::: problem id=x2 type=choice set=extra
Which integral gives the length of $y = \sin x$ from 0 to π?
- [x] $\int_0^{\pi}\sqrt{1 + \cos^2 x}\,dx$
- [ ] $\int_0^{\pi}\sqrt{1 + \sin^2 x}\,dx$
- [ ] $\int_0^{\pi}(1 + \cos x)\,dx$
- [ ] $\int_0^{\pi}\sqrt{1 - \cos^2 x}\,dx$
solution: $f' = \cos x$, so the integrand is $\sqrt{1 + \cos^2 x}$.
:::

::: problem id=x3 type=numeric answer="12" set=extra
What is the length of $y = \frac{1}{3}(x^2 + 2)^{3/2}$ from 0 to 3?
hint: $f' = x\sqrt{x^2 + 2}$. Expand $1 + f'^2$.
solution: $1 + x^4 + 2x^2 = (x^2 + 1)^2$. $L = \int_0^3 (x^2 + 1)\,dx = 9 + 3 = 12$.
:::

::: problem id=x4 type=numeric answer="56/27" set=extra
What is the length of $y = x^{3/2}$ from 0 to $\frac{4}{3}$?
solution: As in p2: $\frac{8}{27}\left(1 + \frac{9x}{4}\right)^{3/2}\Big|_0^{4/3}$, which is $\frac{8}{27}(8 - 1) = \frac{56}{27}$.
:::

::: problem id=x5 type=numeric answer="ln(sqrt(2)+1)" set=extra
What is the length of $y = \ln(\cos x)$ from 0 to $\frac{\pi}{4}$?
hint: $\sqrt{1 + \tan^2 x} = \sec x$, and $\int \sec x\,dx = \ln|\sec x + \tan x|$.
solution: $f' = -\tan x$. $L = \int_0^{\pi/4}\sec x\,dx$, which is $\ln(\sqrt{2} + 1) - \ln 1 = \ln(\sqrt{2} + 1)$.
:::

::: problem id=x6 type=numeric answer="(e-1/e)/2" set=extra
A hanging chain has the shape $y = \frac{e^x + e^{-x}}{2}$. What is its length from 0 to 1?
hint: $1 + f'^2 = f^2$ for this curve.
solution: $f' = \frac{e^x - e^{-x}}{2}$. $L = \int_0^1 \frac{e^x + e^{-x}}{2}\,dx = \frac{e - e^{-1}}{2}$.
:::

::: problem id=x7 type=numeric answer="33/16" set=extra
What is the length of $y = \frac{x^4}{8} + \frac{1}{4x^2}$ from 1 to 2?
hint: $1 + f'^2 = \left(\frac{x^3}{2} + \frac{1}{2x^3}\right)^2$.
solution: $L = \left[\frac{x^4}{8} - \frac{1}{4x^2}\right]_1^2 = \frac{31}{16} + \frac{1}{8} = \frac{33}{16}$.
:::

::: problem id=x8 type=numeric answer="sqrt(2)" set=extra
A student finds the length of $y = x$ from 0 to 1 as $\int_0^1 (1 + f'(x))\,dx = 2$. What is the right length?
solution: The square root was lost: $\int_0^1 \sqrt{1 + 1}\,dx = \sqrt{2}$, the diagonal of a unit square.
:::

::: problem id=x9 type=numeric answer="8sqrt(5)pi" set=extra
Spin $y = 2x$, $0 \le x \le 2$, around the x-axis. What is the surface area?
solution: $2\pi\int_0^2 2x\sqrt{5}\,dx = 2\pi\sqrt{5} \cdot 4 = 8\sqrt{5}\,\pi$.
:::

::: problem id=x10 type=numeric answer="30pi" set=extra
Spin $y = 3$, $0 \le x \le 5$, around the x-axis. What is the surface area (no ends)?
solution: $2\pi\int_0^5 3\,dx = 30\pi$, the side of a cylinder.
:::

::: problem id=x11 type=numeric answer="62pi/3" set=extra
Spin $y = \sqrt{x}$, $0 \le x \le 6$, around the x-axis. What is the surface area?
solution: As in the example: $\frac{4\pi}{3}\left(x + \frac{1}{4}\right)^{3/2}\Big|_0^6$, which is $\frac{4\pi}{3}\left(\frac{125}{8} - \frac{1}{8}\right) = \frac{62\pi}{3}$.
:::

::: problem id=x12 type=numeric answer="6pi" set=extra
Spin $y = \sqrt{9 - x^2}$, $0 \le x \le 1$, around the x-axis. What is the surface area of this band?
solution: $f\sqrt{1 + f'^2} = 3$, so $S = 2\pi\int_0^1 3\,dx = 6\pi$.
:::

::: problem id=x13 type=numeric answer="pi(5sqrt(5)-1)/6" set=extra
Spin $y = x^2$, $0 \le x \le 1$, around the **y-axis**. What is the surface area?
solution: $2\pi\int_0^1 x\sqrt{1 + 4x^2}\,dx$ is $2\pi \cdot \frac{1}{12}(1 + 4x^2)^{3/2}\Big|_0^1$, which is $\frac{\pi}{6}(5\sqrt{5} - 1)$.
:::

::: problem id=x14 type=numeric answer="52/3" set=extra
A wire follows $y = \frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 8$. How long is it?
solution: As in the example: $\frac{2}{3}(1 + x)^{3/2}\Big|_0^8 = \frac{2}{3}(27 - 1) = \frac{52}{3}$.
:::

::: problem id=x15 type=choice set=extra
Which integral is the surface area of $y = f(x)$ spun around the x-axis?
- [ ] $\pi\int_a^b f(x)^2\,dx$
- [x] $2\pi\int_a^b f(x)\sqrt{1 + f'(x)^2}\,dx$
- [ ] $2\pi\int_a^b f(x)\,dx$
- [ ] $\int_a^b \sqrt{1 + f'(x)^2}\,dx$
solution: Each piece of length $ds$ sweeps a band of circumference $2\pi f(x)$. (The first option is the volume.)
:::

::: problem id=x16 type=numeric answer="1.1478" tolerance="0.001" set=extra
Find the length of $y = \frac{x^2}{2}$ from 0 to 1. (to 3 decimals)
hint: You need $\int \sqrt{1 + x^2}\,dx$, which is $\frac{1}{2}x\sqrt{1 + x^2} + \frac{1}{2}\ln(x + \sqrt{1 + x^2})$ (trig substitution).
solution: $L = \frac{1}{2}\left(\sqrt{2} + \ln(1 + \sqrt{2})\right) \approx 1.1478$.
:::

::: problem id=x17 type=numeric answer="17/12" set=extra
What is the length of $y = \frac{x^3}{6} + \frac{1}{2x}$ from 1 to 2?
hint: $f' = \frac{x^2}{2} - \frac{1}{2x^2}$. Then $1 + f'^2$ is a perfect square.
solution: $1 + f'^2 = \left(\frac{x^2}{2} + \frac{1}{2x^2}\right)^2$. $L = \left[\frac{x^3}{6} - \frac{1}{2x}\right]_1^2$, which is $\frac{13}{12} + \frac{1}{3} = \frac{17}{12}$.
:::

::: problem id=x18 type=numeric answer="pi(e^2-e^(-2))/4+pi" set=extra
Spin the chain $y = \frac{e^x + e^{-x}}{2}$, $0 \le x \le 1$, around the x-axis. What is the surface area?
hint: $f\sqrt{1 + f'^2} = f^2 = \frac{e^{2x} + 2 + e^{-2x}}{4}$.
solution: $2\pi \cdot \frac{1}{4}\left[\frac{e^{2x} - e^{-2x}}{2} + 2x\right]_0^1$, which is $\frac{\pi(e^2 - e^{-2})}{4} + \pi$.
:::

::: problem id=x19 type=numeric answer="3.5754" tolerance="0.001" set=extra
Estimate the length of $y = \sin x$ from 0 to π with Simpson's rule, $n = 2$. (to 3 decimals)
hint: The integrand $\sqrt{1 + \cos^2 x}$ is $\sqrt{2}$, 1, $\sqrt{2}$ at $0, \frac{\pi}{2}, \pi$.
solution: $\frac{\pi/2}{3}(\sqrt{2} + 4 + \sqrt{2})$, which is $\frac{\pi}{6}(4 + 2\sqrt{2}) \approx 3.5754$. (The true length is about 3.820: n = 2 is crude.)
:::

::: problem id=x20 type=numeric answer="sqrt(3)" set=extra creative=true
For which $a > 0$ does $y = ax$ have length exactly 2 between $x = 0$ and $x = 1$?
solution: $L = \sqrt{1 + a^2} = 2$, so $a^2 = 3$ and $a = \sqrt{3}$.
:::
