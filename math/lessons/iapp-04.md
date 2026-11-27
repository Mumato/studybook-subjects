---
id: iapp-04
title: Differential equations
---
::: rule
A **differential equation** connects a function with its derivative. Solving it means finding the function.
- $\frac{dy}{dx} = f(x)$: integrate, then use a starting value to find C.
- $\frac{dy}{dx} = ky$ (growth proportional to size): $y = y_0e^{kx}$.
- **Separable:** move all the y's to one side and the x's to the other, then integrate both sides.
:::

::: example
$\frac{dy}{dx} = 2x$ with $y(0) = 1$: $y = x^2 + C$, and $y(0) = 1$ gives $C = 1$. So $y = x^2 + 1$.
:::

::: problem id=p1 type=expression answer="x^3+2"
Solve $\frac{dy}{dx} = 3x^2$ with $y(0) = 2$. Type $y = \ldots$
solution: $y = x^3 + C$, $C = 2$.
:::

::: problem id=p2 type=expression answer="4e^(x/2)"
Solve $\frac{dy}{dx} = 0.5y$ with $y(0) = 4$. Type $y = \ldots$
solution: $y = 4e^{0.5x}$.
:::

::: problem id=p3 type=text answers="yes"
Is $y = e^{3x}$ a solution of $y' = 3y$? Type yes or no.
hint: Work out $y'$.
solution: $y' = 3e^{3x} = 3y$: **yes**.
:::

::: problem id=p4 type=numeric answer="100e"
A population grows by $P' = 0.1P$ with $P(0) = 100$. What is $P(10)$? (exact)
solution: $P = 100e^{0.1t}$, $P(10) = 100e$.
:::

::: problem id=p5 type=numeric answer="5e^2"
$y' = y$ and $y(0) = 5$. What is $y(2)$? (exact)
solution: $y = 5e^x$, $y(2) = 5e^2$.
:::

::: problem id=p6 type=expression answer="sqrt(x^2+9)"
Solve the separable equation $\frac{dy}{dx} = \frac{x}{y}$ with $y(0) = 3$. Type $y = \ldots$
hint: $y\,dy = x\,dx$, so $\frac{y^2}{2} = \frac{x^2}{2} + C$.
solution: $y^2 = x^2 + 9$, and $y > 0$: $y = \sqrt{x^2 + 9}$.
:::

::: problem id=p7 type=numeric answer="ln(2)/5"
A substance decays by $y' = -ky$ and has a half-life of 5 years. What is k? (exact)
hint: $e^{-5k} = \frac{1}{2}$.
solution: $5k = \ln 2$, $k = \frac{\ln 2}{5}$.
:::

::: problem id=p8 type=expression answer="sin(x)+1"
Solve $\frac{dy}{dx} = \cos x$ with $y(0) = 1$. Type $y = \ldots$
solution: $y = \sin x + C$, $C = 1$.
:::

::: problem id=c1 type=numeric answer="37.5" creative=true
A 90°C coffee cools in a 20°C room. Its temperature **above the room** halves every 10 minutes (that's Newton's law of cooling, $T' = -k(T - 20)$). What is its temperature after 20 minutes?
hint: It starts 70° above the room.
solution: $70 \to 35 \to 17.5$ above the room: $20 + 17.5 = 37.5$°C.
:::

::: problem id=x1 type=expression answer="x^4-1" set=extra
Solve $\frac{dy}{dx} = 4x^3$ with $y(0) = -1$. Type $y = \ldots$
solution: $y = x^4 + C$, and $y(0) = C = -1$: $y = x^4 - 1$.
:::

::: problem id=x2 type=expression answer="2e^(3x)" set=extra
Solve $\frac{dy}{dx} = 3y$ with $y(0) = 2$. Type $y = \ldots$
solution: Growth with $k = 3$: $y = 2e^{3x}$.
:::

::: problem id=x3 type=expression answer="e^x+4" set=extra
Solve $\frac{dy}{dx} = e^x$ with $y(0) = 5$. Type $y = \ldots$
solution: $y = e^x + C$; $y(0) = 1 + C = 5$, so $C = 4$.
:::

::: problem id=x4 type=expression answer="7e^(-2x)" set=extra
Solve $\frac{dy}{dx} = -2y$ with $y(0) = 7$. Type $y = \ldots$
solution: $k = -2$: $y = 7e^{-2x}$ (decay).
:::

::: problem id=x5 type=text answers="yes" set=extra
Is $y = x^2$ a solution of $xy' = 2y$? Type yes or no.
solution: $y' = 2x$, so $xy' = 2x^2 = 2y$: **yes**.
:::

::: problem id=x6 type=choice set=extra
Which equation is separable?
- [x] $\frac{dy}{dx} = xy^2$
- [ ] $\frac{dy}{dx} = x + y$
- [ ] $\frac{dy}{dx} = \sin(xy)$
- [ ] $\frac{dy}{dx} = x^2 + y^2$
solution: $xy^2$ is (function of x) times (function of y): $\frac{dy}{y^2} = x\,dx$. The others can't be split that way.
:::

::: problem id=x7 type=expression answer="ln(x)+2" set=extra
Solve $\frac{dy}{dx} = \frac{1}{x}$ ($x > 0$) with $y(1) = 2$. Type $y = \ldots$
solution: $y = \ln x + C$; $y(1) = 0 + C = 2$.
:::

::: problem id=x8 type=numeric answer="ln(2)/3" set=extra
A population follows $P' = kP$ and doubles every 3 years. What is k? (exact)
solution: $e^{3k} = 2$, so $k = \frac{\ln 2}{3}$.
:::

::: problem id=x9 type=numeric answer="8000" set=extra
A culture of 500 bacteria doubles every hour. How many are there after 4 hours?
solution: $500 \cdot 2^4 = 8000$.
:::

::: problem id=x10 type=numeric answer="10" set=extra
80 g of a substance has a half-life of 10 years. How much is left after 30 years?
solution: Three half-lives: $80 \to 40 \to 20 \to 10$ g.
:::

::: problem id=x11 type=expression answer="e^(x^2/2)" set=extra
Solve $\frac{dy}{dx} = xy$ with $y(0) = 1$. Type $y = \ldots$
solution: $\frac{dy}{y} = x\,dx$: $\ln y = \frac{x^2}{2} + C$, and $C = 0$. So $y = e^{x^2/2}$.
:::

::: problem id=x12 type=expression answer="1/(1-x)" set=extra
Solve $\frac{dy}{dx} = y^2$ with $y(0) = 1$. Type $y = \ldots$
solution: $\frac{dy}{y^2} = dx$: $-\frac{1}{y} = x + C$, and $C = -1$. So $y = \frac{1}{1 - x}$.
:::

::: problem id=x13 type=expression answer="3e^(sin(x))" set=extra
Solve $\frac{dy}{dx} = y\cos x$ with $y(0) = 3$. Type $y = \ldots$
solution: $\ln y = \sin x + C$, so $y = Ae^{\sin x}$; $y(0) = A = 3$.
:::

::: problem id=x14 type=numeric answer="20+80/e" set=extra
Tea cools by $T' = -0.1(T - 20)$ with $T(0) = 100$ (t in minutes). What is $T(10)$? (exact)
solution: $T - 20 = 80e^{-0.1t}$. At $t = 10$: $T = 20 + 80e^{-1} = 20 + \frac{80}{e}$.
:::

::: problem id=x15 type=numeric answer="5e^2" set=extra
A student solved $y' = 2y$, $y(0) = 5$ as $y = e^{2x} + 5$. Using the correct solution, what is $y(1)$? (exact)
hint: Check the student's answer: is $y' = 2y$?
solution: The student's $y' = 2e^{2x} \ne 2y$. The right solution is $y = 5e^{2x}$, so $y(1) = 5e^2$.
:::

::: problem id=x16 type=expression answer="tan(x)" set=extra
Solve $\frac{dy}{dx} = 1 + y^2$ with $y(0) = 0$. Type $y = \ldots$
hint: $\int \frac{dy}{1 + y^2} = \arctan y$.
solution: $\arctan y = x + C$, and $C = 0$. So $y = \tan x$.
:::

::: problem id=x17 type=expression answer="-sqrt(x^2+4)" set=extra
Solve $\frac{dy}{dx} = \frac{x}{y}$ with $y(0) = -2$. Type $y = \ldots$
hint: $y^2 = x^2 + C$. Which square root matches $y(0) = -2$?
solution: $y^2 = x^2 + 4$. Since y starts negative, take the negative root: $y = -\sqrt{x^2 + 4}$.
:::

::: problem id=x18 type=expression answer="ln(e^x+1)" set=extra
Solve $\frac{dy}{dx} = e^{x - y}$ with $y(0) = \ln 2$. Type $y = \ldots$
hint: $e^{x - y} = \frac{e^x}{e^y}$.
solution: $e^y\,dy = e^x\,dx$: $e^y = e^x + C$. At 0: $2 = 1 + C$, so $C = 1$ and $y = \ln(e^x + 1)$.
:::

::: problem id=x19 type=numeric answer="11460" set=extra
Carbon-14 has a half-life of 5730 years. A bone has 25% of its carbon-14 left. How old is it?
solution: 25% is two halvings: $2 \cdot 5730 = 11460$ years.
:::

::: problem id=x20 type=numeric answer="24" set=extra creative=true
$y' = ky$, $y(0) = 3$ and $y(2) = 12$. What is $y(3)$?
hint: Find $e^k$ rather than k.
solution: $3e^{2k} = 12$, so $e^{2k} = 4$ and $e^k = 2$. Then $y(3) = 3 \cdot 2^3 = 24$.
:::
