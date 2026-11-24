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
