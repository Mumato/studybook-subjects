---
id: app-06
title: Linear approximation and differentials
---
Close to a point, a smooth curve looks almost like its tangent line. So the tangent line gives quick, good estimates of values that are hard to work out.

::: rule
The **linearization** of f at $x = a$ is its tangent line:

$$L(x) = f(a) + f'(a)(x - a)$$

For x near a, $f(x) \approx L(x)$.

**Differentials:** if $y = f(x)$, then $dy = f'(x)\,dx$. A small change dx in x causes a change in y of about dy: $\Delta y \approx dy$.

If f is concave up, the tangent lies below the curve, so L **underestimates**; concave down, it overestimates.
:::

::: example
**Estimate $\sqrt{4.1}$.** Take $f(x) = \sqrt{x}$ at $a = 4$, a nearby easy point.

$f(4) = 2$, $f'(x) = \frac{1}{2\sqrt{x}}$, so $f'(4) = \frac{1}{4}$.

$L(x) = 2 + \frac{1}{4}(x - 4)$.

$\sqrt{4.1} \approx 2 + \frac{1}{4}(0.1) = 2.025$. (True value: 2.02485...)
:::

::: example
**Measurement error.** A ball's radius is measured as 10 cm, with a possible error of 0.1 cm. About how big is the error in its volume?

$V = \frac{4}{3}\pi r^3$, so $dV = 4\pi r^2\,dr$.

$dV = 4\pi \cdot 100 \cdot 0.1 = 40\pi \approx 126$ cm³.
:::

::: problem id=p1 type=expression answer="6x-9"
Find the linearization of $f(x) = x^2$ at $a = 3$, as $L(x) = \ldots$
solution: $f(3) = 9$, $f'(3) = 6$.
$L(x) = 9 + 6(x - 3) = 6x - 9$.
:::

::: problem id=p2 type=numeric answer="91/30" tolerance=0.00005
Use the linearization of $\sqrt{x}$ at 9 to estimate $\sqrt{9.2}$. Type the tangent line's value as an exact fraction or a decimal to 4 places.
hint: $f'(9) = \frac{1}{2 \cdot 3} = \frac{1}{6}$.
solution: $\sqrt{9.2} \approx 3 + \frac{1}{6}(0.2) = 3 + \frac{1}{30}$
$= \frac{91}{30} \approx 3.0333$. (The true value is 3.03315...)
:::

::: problem id=p3 type=numeric answer="8.12"
Use a linearization at 2 to estimate $(2.01)^3$.
solution: $f(x) = x^3$: $f(2) = 8$, $f'(2) = 12$.
$8 + 12(0.01) = 8.12$.
:::

::: problem id=p4 type=expression answer="3x^2+2"
$y = x^3 + 2x$. Then $dy = (\square)\,dx$. What goes in the box?
solution: $dy = f'(x)\,dx = (3x^2 + 2)\,dx$.
:::

::: problem id=p5 type=numeric answer="1"
$y = x^2$. Find dy when $x = 5$ and $dx = 0.1$.
solution: $dy = 2x\,dx = 2 \cdot 5 \cdot 0.1 = 1$.
:::

::: problem id=p6 type=numeric answer="1.01"
Same $y = x^2$: find the **exact** change $\Delta y$ when x goes from 5 to 5.1.
solution: $5.1^2 - 5^2 = 26.01 - 25 = 1.01$. Very close to $dy = 1$.
:::

::: problem id=p7 type=numeric answer="60"
A cube's edge is measured as 10 cm, with a possible error of 0.2 cm. Estimate the possible error in its volume, in cm³.
solution: $V = s^3$, $dV = 3s^2\,ds$.
$3 \cdot 100 \cdot 0.2 = 60$ cm³.
:::

::: problem id=p8 type=numeric answer="1.02"
Use the linearization of $e^x$ at 0 to estimate $e^{0.02}$.
solution: $L(x) = 1 + x$ (since $e^0 = 1$ and the slope is 1).
$e^{0.02} \approx 1.02$.
:::

::: problem id=x1 type=expression answer="4+(x-16)/8" set=extra
Find the linearization of $\sqrt{x}$ at $a = 16$, as $L(x) = \ldots$
solution: $f(16) = 4$, $f'(16) = \frac{1}{8}$.
$L(x) = 4 + \frac{1}{8}(x - 16)$.
:::

::: problem id=x2 type=expression answer="1/2-(x-2)/4" set=extra
Find the linearization of $\frac{1}{x}$ at $a = 2$.
solution: $f(2) = \frac{1}{2}$, $f'(x) = -\frac{1}{x^2}$, $f'(2) = -\frac{1}{4}$.
$L(x) = \frac{1}{2} - \frac{1}{4}(x - 2)$.
:::

::: problem id=x3 type=expression answer="x-1" set=extra
Find the linearization of $\ln x$ at $a = 1$.
solution: $\ln 1 = 0$, slope $\frac{1}{1} = 1$: $L(x) = x - 1$.
:::

::: problem id=x4 type=expression answer="x" set=extra
Find the linearization of $\sin x$ at $a = 0$.
solution: $\sin 0 = 0$, slope $\cos 0 = 1$: $L(x) = x$. So $\sin x \approx x$ for small x.
:::

::: problem id=x5 type=numeric answer="5.05" set=extra
Estimate $\sqrt{25.5}$ with a linearization at 25.
solution: $f'(25) = \frac{1}{10}$. $5 + \frac{1}{10}(0.5) = 5.05$.
:::

::: problem id=x6 type=numeric answer="2.01" set=extra
Estimate $\sqrt[3]{8.12}$ with a linearization at 8.
solution: $f'(x) = \frac{1}{3}x^{-2/3}$, $f'(8) = \frac{1}{12}$.
$2 + \frac{0.12}{12} = 2.01$.
:::

::: problem id=x7 type=numeric answer="0.505" set=extra
Estimate $\frac{1}{1.98}$ with a linearization at 2.
solution: $L(x) = \frac{1}{2} - \frac{1}{4}(x - 2)$.
$\frac{1}{2} - \frac{1}{4}(-0.02) = 0.505$.
:::

::: problem id=x8 type=numeric answer="0.05" set=extra
Estimate $\ln(1.05)$ with a linearization at 1.
solution: $L(x) = x - 1$, so $\ln 1.05 \approx 0.05$.
:::

::: problem id=x9 type=expression answer="2cos(2x)" set=extra
$y = \sin(2x)$. Then $dy = (\square)\,dx$. What goes in the box?
solution: $dy = 2\cos(2x)\,dx$ (chain rule).
:::

::: problem id=x10 type=numeric answer="1.261" set=extra
$y = x^3$. Find the exact $\Delta y$ when x goes from 2 to 2.1.
solution: $2.1^3 - 8 = 9.261 - 8 = 1.261$. (The estimate $dy = 12 \cdot 0.1 = 1.2$ is close.)
:::

::: problem id=x11 type=numeric answer="2pi" set=extra
A circle's radius grows from 10 cm to 10.1 cm. Estimate the increase in area with differentials. (in terms of pi)
solution: $dA = 2\pi r\,dr = 2\pi \cdot 10 \cdot 0.1 = 2\pi$ cm².
:::

::: problem id=x12 type=numeric answer="5pi" set=extra
A sphere's radius is measured as 5 cm, with a possible error of 0.05 cm. Estimate the error in its volume. (in terms of pi)
solution: $dV = 4\pi r^2\,dr = 4\pi \cdot 25 \cdot 0.05 = 5\pi$ cm³.
:::

::: problem id=x13 type=numeric answer="3" set=extra
In the sphere above, the radius has a relative error of $\frac{0.05}{5} = 1\%$. What is the relative error in the volume, in percent?
hint: Divide $dV = 4\pi r^2\,dr$ by $V = \frac{4}{3}\pi r^3$.
solution: $\frac{dV}{V} = 3\frac{dr}{r} = 3 \cdot 1\% = 3\%$.
:::

::: problem id=x14 type=choice set=extra
You estimate $(3.1)^2$ with the tangent line to $y = x^2$ at 3. Is the estimate too big or too small?
- [ ] too big
- [x] too small
- [ ] exactly right
solution: $x^2$ is concave up, so the tangent lies **below** the curve: $L = 9 + 6(0.1) = 9.6 < 9.61$.
:::

::: problem id=x15 type=numeric answer="5" set=extra
The linearization of f at $a = 1$ is $L(x) = 3x - 1$. Find $f(1) + f'(1)$.
solution: $f(1) = L(1) = 2$ and $f'(1)$ is the slope, 3. Sum: 5.
:::

::: problem id=x16 type=choice set=extra
A student estimates $\sqrt{4.4}$ with $L(x) = 2 + 4(x - 4)$ and gets 3.6. What is the correct estimate?
- [ ] 3.6
- [x] 2.1
- [ ] 2.4
- [ ] 2.01
solution: The slope is $f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}$, not 4.
$2 + \frac{1}{4}(0.4) = 2.1$.
:::

::: problem id=x17 type=numeric answer="1.1" set=extra
Estimate $(1.01)^{10}$ with a linearization at 1.
solution: $f(x) = x^{10}$, $f'(1) = 10$.
$1 + 10(0.01) = 1.1$.
:::

::: problem id=x18 type=numeric answer="1.02" set=extra
Estimate $\tan\left(\frac{\pi}{4} + 0.01\right)$ with a linearization at $\frac{\pi}{4}$.
hint: $\frac{d}{dx}\tan x = \sec^2 x$, and $\sec^2\frac{\pi}{4} = 2$.
solution: $1 + 2(0.01) = 1.02$.
:::

::: problem id=x19 type=numeric answer="0.1" set=extra
A square tile should have side 20 cm. How large can the error in the side be (in cm) if the area must be off by at most 4 cm²? Use differentials.
hint: $dA = 2s\,ds$.
solution: $dA = 40\,ds \le 4$, so $ds \le 0.1$ cm.
:::

::: problem id=x20 type=numeric answer="1/2-sqrt(3)*pi/360" tolerance=0.00003 set=extra creative=true
Estimate $\cos 61^\circ$ with a linearization of $\cos x$ at $60^\circ$. Type the tangent line's value exactly, or as a decimal to 4 places.
hint: Calculus needs radians: $1^\circ = \frac{\pi}{180}$.
solution: $L = \cos 60^\circ - \sin 60^\circ \cdot \frac{\pi}{180}$
$= \frac{1}{2} - \frac{\sqrt{3}}{2} \cdot \frac{\pi}{180}$
$= \frac{1}{2} - \frac{\sqrt{3}\pi}{360} \approx 0.4849$. (The true value is 0.48481...)
:::
