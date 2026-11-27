---
id: calc1-exam
title: Part 8 exam: Calculus I
pass: 0.8
---
::: problem id=e1 type=numeric answer="8"
$\lim_{x \to 4} \frac{x^2 - 16}{x - 4} = ?$
solution: $\frac{(x - 4)(x + 4)}{x - 4} = x + 4 \to 8$.
:::

::: problem id=e2 type=numeric answer="1/6"
$\lim_{x \to 0} \frac{\sqrt{x + 9} - 3}{x} = ?$
solution: Multiply by the conjugate: $\frac{x}{x(\sqrt{x + 9} + 3)} = \frac{1}{\sqrt{x + 9} + 3} \to \frac{1}{6}$.
:::

::: problem id=e3 type=numeric answer="2/5"
$\lim_{x \to \infty} \frac{2x^3 - x}{5x^3 + 4} = ?$
solution: Same degree: leading coefficients $\frac{2}{5}$.
:::

::: problem id=e4 type=choice
$\lim_{x \to 2^-} \frac{1}{x - 2} = ?$
- [ ] $\infty$
- [x] $-\infty$
- [ ] 0
- [ ] $\frac{1}{2}$
solution: Just left of 2, $x - 2$ is a tiny negative number, so the fraction goes to $-\infty$.
:::

::: problem id=e5 type=numeric answer="3/2"
$f(x) = kx + 1$ for $x < 2$ and $f(x) = x^2$ for $x \ge 2$. Which k makes f continuous?
solution: The pieces must meet at $x = 2$: $2k + 1 = 4$, so $k = \frac{3}{2}$.
:::

::: problem id=e6 type=numeric answer="0"
$\lim_{x \to 0} x^2\sin\frac{1}{x} = ?$
solution: $-x^2 \le x^2\sin\frac{1}{x} \le x^2$, and both sides go to 0. By the squeeze theorem, the limit is 0.
:::

::: problem id=e7 type=numeric answer="0.01"
For $\lim_{x \to 2} (3x - 1) = 5$ and $\varepsilon = 0.03$, what is the largest $\delta$ that works?
solution: $|3x - 1 - 5| = 3|x - 2| < 0.03$ when $|x - 2| < 0.01$. So $\delta = \frac{\varepsilon}{3} = 0.01$.
:::

::: problem id=e8 type=expression answer="12x^3-2"
$\frac{d}{dx}(3x^4 - 2x + 7) = ?$
solution: $12x^3 - 2$.
:::

::: problem id=e9 type=expression answer="2xe^x+x^2e^x"
$\frac{d}{dx}(x^2e^x) = ?$
solution: Product rule: $2x \cdot e^x + x^2 \cdot e^x$.
:::

::: problem id=e10 type=expression answer="(xcos(x)-sin(x))/x^2"
$\frac{d}{dx}\frac{\sin x}{x} = ?$
solution: Quotient rule: $\frac{x\cos x - \sin x \cdot 1}{x^2}$.
:::

::: problem id=e11 type=expression answer="2x/(x^2+1)"
$\frac{d}{dx}\ln(x^2 + 1) = ?$
solution: Chain rule: $\frac{1}{x^2 + 1} \cdot 2x$.
:::

::: problem id=e12 type=expression answer="6sin(2x)^2cos(2x)"
$\frac{d}{dx}\sin^3(2x) = ?$
solution: $3\sin^2(2x) \cdot \cos(2x) \cdot 2$
$= 6\sin^2(2x)\cos(2x)$.
:::

::: problem id=e13 type=numeric answer="-3/4"
Find the slope of $x^2 + y^2 = 25$ at $(3, 4)$.
solution: $2x + 2yy' = 0$, $y' = -\frac{x}{y} = -\frac{3}{4}$.
:::

::: problem id=e14 type=numeric answer="-1/4"
Find $y'$ at $(1, 1)$ if $xy + y^3 = 2$.
solution: $y + xy' + 3y^2y' = 0$.
At $(1, 1)$: $1 + y' + 3y' = 0$, $y' = -\frac{1}{4}$.
:::

::: problem id=e15 type=expression answer="2/(1+4x^2)"
$\frac{d}{dx}\arctan(2x) = ?$
solution: $\frac{1}{1 + (2x)^2} \cdot 2 = \frac{2}{1 + 4x^2}$.
:::

::: problem id=e16 type=numeric answer="4+4ln(2)"
$y = x^x$. Find $y'$ at $x = 2$. (exact)
solution: $\ln y = x\ln x$, so $\frac{y'}{y} = \ln x + 1$.
$y' = x^x(\ln x + 1)$; at 2: $4(\ln 2 + 1)$.
:::

::: problem id=e17 type=expression answer="3x-2"
Write the tangent line to $y = x^3$ at $x = 1$ as $y = \ldots$
solution: Point $(1, 1)$, slope 3: $y = 1 + 3(x - 1) = 3x - 2$.
:::

::: problem id=e18 type=multi answers="1;3"
Find the critical points of $f(x) = x^3 - 6x^2 + 9x$.
solution: $f' = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$: $x = 1, 3$.
:::

::: problem id=e19 type=numeric answer="4"
What is the local maximum value of $f(x) = x^3 - 6x^2 + 9x$?
solution: $f'$ goes + to − at $x = 1$. $f(1) = 1 - 6 + 9 = 4$.
:::

::: problem id=e20 type=numeric answer="-1"
Where is the inflection point of $f(x) = x^3 + 3x^2 - 2$? Type the x value.
solution: $f'' = 6x + 6 = 0$ at $x = -1$.
:::

::: problem id=e21 type=numeric answer="2000"
Squares are cut from the corners of a 30 by 30 cm sheet, and the sides folded up into an open box. What is the largest possible volume, in cm³?
solution: $V = x(30 - 2x)^2$, $V' = (30 - 2x)(30 - 6x) = 0$: $x = 5$.
$V = 5 \cdot 20^2 = 2000$ cm³.
:::

::: problem id=e22 type=multi answers="2;4"
$s(t) = t^3 - 9t^2 + 24t$. At which times is the object at rest?
solution: $v = 3t^2 - 18t + 24 = 3(t - 2)(t - 4)$: $t = 2, 4$.
:::

::: problem id=e23 type=numeric answer="7/12"
A 25 m ladder leans on a wall. Its foot slides away at 2 m/s. How fast is the top sliding down when the foot is 7 m from the wall?
solution: $y = \sqrt{625 - 49} = 24$. $7 \cdot 2 + 24\frac{dy}{dt} = 0$.
$\frac{dy}{dt} = -\frac{14}{24} = -\frac{7}{12}$: down at $\frac{7}{12}$ m/s.
:::

::: problem id=e24 type=numeric answer="1"
A cone tank, point down, is 8 m tall with top radius 4 m. Water flows in at $9\pi$ m³/min. How fast does the level rise when the water is 6 m deep, in m/min?
solution: $r = \frac{h}{2}$, $V = \frac{\pi h^3}{12}$, $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$.
At $h = 6$: $9\pi = 9\pi\frac{dh}{dt}$, so 1 m/min.
:::

::: problem id=e25 type=numeric answer="6.05"
Use a linearization of $\sqrt{x}$ at 36 to estimate $\sqrt{36.6}$.
solution: $f'(36) = \frac{1}{12}$. $6 + \frac{0.6}{12} = 6.05$.
:::

::: problem id=e26 type=numeric answer="72pi/25"
A ball's radius is measured as 6 cm, with a possible error of 0.02 cm. Estimate the error in its volume with differentials. (in terms of pi)
solution: $dV = 4\pi r^2\,dr = 4\pi \cdot 36 \cdot 0.02$
$= 2.88\pi = \frac{72\pi}{25}$ cm³.
:::

::: problem id=e27 type=numeric answer="5/2"
Find the c that the Mean Value Theorem gives for $f(x) = x^2 + 3x$ on $[1, 4]$.
solution: Average slope $\frac{28 - 4}{3} = 8$. $2c + 3 = 8$, $c = \frac{5}{2}$.
:::

::: problem id=e28 type=numeric answer="3"
$\lim_{x \to 0} \frac{e^{3x} - 1}{\sin x} = ?$
solution: $\frac{0}{0}$. L'Hôpital: $\frac{3e^{3x}}{\cos x} \to 3$.
:::

::: problem id=e29 type=numeric answer="e^(-2)"
$\lim_{x \to \infty} \left(1 - \frac{2}{x}\right)^x = ?$ (exact)
solution: $\ln y = \frac{\ln(1 - 2/x)}{1/x}$, $\frac{0}{0}$.
Derivatives: $\frac{-2}{1 - 2/x} \to -2$. So $y \to e^{-2}$.
:::

::: problem id=e30 type=choice
What are the asymptotes of $f(x) = \frac{2x + 1}{x - 3}$?
- [x] $x = 3$ and $y = 2$
- [ ] $x = -3$ and $y = 2$
- [ ] $x = 3$ and $y = 0$
- [ ] $x = 3$ and $y = -\frac{1}{3}$
solution: The denominator is 0 at 3. Same degree: $y = \frac{2}{1} = 2$.
:::

::: problem id=e31 type=expression answer="x^3+4/x" form=antiderivative
$\int \left(3x^2 - \frac{4}{x^2}\right)dx = ?$ (leave out + C)
solution: $x^3 - 4 \cdot \frac{x^{-1}}{-1} = x^3 + \frac{4}{x} + C$.
:::

::: problem id=e32 type=numeric answer="12"
An object's velocity is $v(t) = 3t^2 + 2t$ m/s. How far does it travel from $t = 0$ to $t = 2$?
solution: v is positive, so distance $= \int_0^2 (3t^2 + 2t)\,dt = [t^3 + t^2]_0^2 = 12$ m.
:::

::: problem id=e33 type=numeric answer="15/4"
Estimate $\int_0^2 x^2\,dx$ with 4 rectangles, using right edges.
solution: $\Delta x = 0.5$. Heights $0.25, 1, 2.25, 4$: sum 7.5.
$7.5 \cdot 0.5 = 3.75$.
:::

::: problem id=e34 type=expression answer="(x^3+1)^5/15" form=antiderivative
$\int x^2(x^3 + 1)^4\,dx = ?$ (leave out + C)
solution: $u = x^3 + 1$, $x^2\,dx = \frac{du}{3}$: $\frac{1}{3} \cdot \frac{u^5}{5} = \frac{(x^3 + 1)^5}{15} + C$.
:::

::: problem id=e35 type=numeric answer="(e^4-1)/2"
$\int_0^2 xe^{x^2}\,dx = ?$ (exact)
solution: $u = x^2$ from 0 to 4: $\frac{1}{2}\int_0^4 e^u\,du = \frac{e^4 - 1}{2}$.
:::
