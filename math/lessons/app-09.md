---
id: app-09
title: Curve sketching
---
Now we put everything together: limits give the asymptotes, $f'$ gives the hills and valleys, $f''$ gives the bending. With these you can sketch a graph by hand and know it is right.

::: rule
To sketch $y = f(x)$, work through this checklist:
1. **Domain**: where is f defined?
2. **Intercepts**: y-intercept $f(0)$; x-intercepts where $f(x) = 0$.
3. **Symmetry**: even ($f(-x) = f(x)$, mirror in the y-axis) or odd ($f(-x) = -f(x)$, turn about the origin).
4. **Asymptotes**: vertical where the denominator is 0 (and the top isn't); horizontal $y = L$ if $f(x) \to L$ as $x \to \pm\infty$.
5. **$f'$**: increasing / decreasing, local max and min.
6. **$f''$**: concave up / down, inflection points.
7. Plot the key points and join them following the shapes.
:::

::: example
**$f(x) = x^3 - 3x^2$.**
1. Domain: all real x. No asymptotes.
2. $f(0) = 0$; $x^2(x - 3) = 0$ at $x = 0, 3$.
3. $f' = 3x(x - 2)$: up for $x < 0$, down on $(0, 2)$, up for $x > 2$. Max $(0, 0)$, min $(2, -4)$.
4. $f'' = 6x - 6$: cap for $x < 1$, cup for $x > 1$. Inflection $(1, -2)$.
:::

::: graph
x -2..4
y -5..3
plot x^3-3x^2 blue
point 0,0 max
point 2,-4 min
point 1,-2 infl. red
:::

::: example
**$f(x) = \frac{2x}{x - 1}$.**
1. Domain: $x \ne 1$, so a vertical asymptote $x = 1$.
2. As $x \to \pm\infty$, $f \to \frac{2}{1} = 2$: horizontal asymptote $y = 2$. Passes through $(0, 0)$.
3. $f' = \frac{2(x - 1) - 2x}{(x - 1)^2} = \frac{-2}{(x - 1)^2} < 0$: decreasing on each side, no max or min.
4. $f'' = \frac{4}{(x - 1)^3}$: cup for $x > 1$, cap for $x < 1$.
:::

::: problem id=p1 type=multi answers="0;2;-2"
Find all x-intercepts of $f(x) = x^3 - 4x$.
solution: $x(x - 2)(x + 2) = 0$: $x = 0, 2, -2$.
:::

::: problem id=p2 type=numeric answer="3"
$f(x) = \frac{x + 1}{x - 3}$ has a vertical asymptote $x = ?$
solution: The denominator is 0 at $x = 3$ (and the top is 4, not 0).
:::

::: problem id=p3 type=numeric answer="2"
$f(x) = \frac{4x^2 - 1}{2x^2 + x}$ has a horizontal asymptote $y = ?$
solution: Same degree on top and bottom: ratio of leading coefficients $\frac{4}{2} = 2$.
:::

::: problem id=p4 type=choice
Where is $f(x) = x^3 - 3x$ increasing?
- [ ] $-1 < x < 1$
- [x] $x < -1$ or $x > 1$
- [ ] $x > 0$
- [ ] everywhere
solution: $f' = 3(x - 1)(x + 1) > 0$ outside the roots.
:::

::: problem id=p5 type=point answer="1,4"
Here is $y = x^3 - 6x^2 + 9x$. Click its local maximum.
graph:
x -1..5
y -2..6
plot x^3-6x^2+9x blue
hint: $f' = 3(x - 1)(x - 3)$.
solution: $f'$ goes + to − at $x = 1$. $f(1) = 1 - 6 + 9 = 4$: $(1, 4)$.
:::

::: problem id=p6 type=numeric answer="2"
Where is the inflection point of $y = x^3 - 6x^2 + 9x$? Type the x value.
solution: $f'' = 6x - 12 = 0$ at $x = 2$.
:::

::: problem id=p7 type=choice
Which function has a vertical asymptote $x = 2$ and a horizontal asymptote $y = 0$?
- [x] $\frac{1}{x - 2}$
- [ ] $\frac{x}{x - 2}$
- [ ] $\frac{1}{x + 2}$
- [ ] $\frac{x - 2}{x}$
solution: $\frac{1}{x - 2}$ blows up at 2 and tends to 0. ($\frac{x}{x - 2}$ tends to 1; $\frac{1}{x + 2}$ has its asymptote at $-2$.)
:::

::: problem id=p8 type=choice
Which description fits $f(x) = xe^{-x}$?
- [x] max at $(1, \frac{1}{e})$, inflection at $x = 2$, $f \to 0$ as $x \to \infty$
- [ ] min at $(1, \frac{1}{e})$, inflection at $x = 2$, $f \to 0$ as $x \to \infty$
- [ ] max at $(1, \frac{1}{e})$, inflection at $x = 0$, $f \to \infty$ as $x \to \infty$
- [ ] max at $(0, 0)$, no inflection
hint: $f' = (1 - x)e^{-x}$ and $f'' = (x - 2)e^{-x}$.
solution: $f'$ goes + to − at 1: max $f(1) = \frac{1}{e}$. $f''$ changes sign at 2. And $\frac{x}{e^x} \to 0$.
:::

::: problem id=x1 type=numeric answer="-2" set=extra
What is the y-intercept of $f(x) = \frac{x - 4}{x + 2}$?
solution: $f(0) = \frac{-4}{2} = -2$.
:::

::: problem id=x2 type=multi answers="0;3;-2" set=extra
Find all x-intercepts of $f(x) = x^3 - x^2 - 6x$.
solution: $x(x^2 - x - 6) = x(x - 3)(x + 2)$: $x = 0, 3, -2$.
:::

::: problem id=x3 type=multi answers="3;-3" set=extra
Find both vertical asymptotes of $f(x) = \frac{1}{x^2 - 9}$. Type the x values.
solution: $x^2 - 9 = 0$ at $x = \pm 3$.
:::

::: problem id=x4 type=numeric answer="5" set=extra
$f(x) = \frac{5x + 2}{x - 1}$ has a horizontal asymptote $y = ?$
solution: Leading coefficients: $\frac{5}{1} = 5$.
:::

::: problem id=x5 type=numeric answer="0" set=extra
$f(x) = \frac{3x}{x^2 + 1}$ has a horizontal asymptote $y = ?$
solution: The bottom has the higher degree, so $f \to 0$.
:::

::: problem id=x6 type=choice set=extra
What is the domain of $f(x) = \sqrt{x - 2}$?
- [ ] all real x
- [x] $x \ge 2$
- [ ] $x > 2$
- [ ] $x \le 2$
solution: Need $x - 2 \ge 0$, so $x \ge 2$ (0 under the root is fine).
:::

::: problem id=x7 type=choice set=extra
$f(x) = x^4 - 3x^2$ is:
- [x] even (mirror image in the y-axis)
- [ ] odd (symmetric about the origin)
- [ ] neither
solution: $f(-x) = x^4 - 3x^2 = f(x)$: even.
:::

::: problem id=x8 type=choice set=extra
$f(x) = x^3 - x$ is:
- [ ] even
- [x] odd
- [ ] neither
solution: $f(-x) = -x^3 + x = -f(x)$: odd.
:::

::: problem id=x9 type=point answer="-1,-2" set=extra
Here is $y = -x^3 + 3x$. Click its local minimum.
graph:
x -3..3
y -4..4
plot -x^3+3x blue
solution: $f' = -3x^2 + 3 = 0$ at $\pm 1$. At $-1$, $f'$ goes − to +.
$f(-1) = 1 - 3 = -2$: $(-1, -2)$.
:::

::: problem id=x10 type=numeric answer="5" set=extra
What is the local maximum value of $f(x) = x^3 - 3x^2 - 9x$?
hint: $f' = 3(x - 3)(x + 1)$.
solution: $f'$ goes + to − at $x = -1$.
$f(-1) = -1 - 3 + 9 = 5$.
:::

::: problem id=x11 type=numeric answer="-1" set=extra
Where is the inflection point of $f(x) = x^3 + 3x^2 - 9x$? Type the x value.
solution: $f'' = 6x + 6 = 0$ at $x = -1$.
:::

::: problem id=x12 type=choice set=extra
What are the asymptotes of $f(x) = \frac{x^2}{x^2 - 1}$?
- [x] $x = 1$, $x = -1$ and $y = 1$
- [ ] $x = 1$ and $y = 0$
- [ ] $x = 1$, $x = -1$ and $y = 0$
- [ ] $y = 1$ only
solution: The bottom is 0 at $x = \pm 1$. Same degree, coefficients $\frac{1}{1}$: $y = 1$.
:::

::: problem id=x13 type=choice set=extra
$f'(x) = (x - 2)^2(x + 1)$. Which is true?
- [ ] local max at $-1$, local min at 2
- [x] local min at $-1$, no extremum at 2
- [ ] local min at $-1$ and at 2
- [ ] no extremes at all
solution: $(x - 2)^2 \ge 0$, so the sign of $f'$ is the sign of $x + 1$: − then + at $-1$ (min). No sign change at 2.
:::

::: problem id=x14 type=numeric answer="1/2" set=extra
What is the local maximum value of $f(x) = \frac{x}{x^2 + 1}$?
hint: Quotient rule: $f' = \frac{1 - x^2}{(x^2 + 1)^2}$.
solution: $f' = 0$ at $\pm 1$; + to − at $x = 1$.
$f(1) = \frac{1}{2}$.
:::

::: problem id=x15 type=choice set=extra
Where is $f(x) = xe^x$ decreasing?
- [x] $x < -1$
- [ ] $x > -1$
- [ ] $x < 0$
- [ ] $x < -2$
solution: $f' = (x + 1)e^x < 0$ when $x < -1$.
:::

::: problem id=x16 type=numeric answer="-27" set=extra
What is the local minimum value of $f(x) = x^4 - 4x^3$?
hint: $f' = 4x^2(x - 3)$. Does $f'$ change sign at 0?
solution: No sign change at 0 ($x^2 \ge 0$). − to + at 3:
$f(3) = 81 - 108 = -27$.
:::

::: problem id=x17 type=expression answer="2x+3" set=extra
$f(x) = \frac{2x^2 + 3x + 1}{x}$ has a slant asymptote. Write it as $y = \ldots$
hint: A slant asymptote is a sloped line $y = mx + c$ that the graph gets closer and closer to as $x \to \pm\infty$. Divide each term by x and see which part tends to 0.
solution: $f(x) = 2x + 3 + \frac{1}{x}$, and $\frac{1}{x} \to 0$. So $y = 2x + 3$.
:::

::: problem id=x18 type=choice set=extra
What happens at $x = 0$ on the graph of $f(x) = x^{2/3}$?
- [ ] a smooth local maximum
- [x] a sharp point (cusp) and a local minimum
- [ ] an inflection point
- [ ] a vertical asymptote
hint: $f'(x) = \frac{2}{3x^{1/3}}$.
solution: $f'$ is undefined at 0 (critical point), negative to the left, positive to the right, and blows up: a cusp at the minimum $(0, 0)$.
:::

::: problem id=x19 type=numeric answer="-5" set=extra
$f(x) = x^4 - 6x^2$ has two inflection points. What is their y-coordinate?
hint: $f'' = 12x^2 - 12$.
solution: $f'' = 0$ at $x = \pm 1$ (sign changes).
$f(\pm 1) = 1 - 6 = -5$.
:::

::: problem id=x20 type=numeric answer="3/2" set=extra creative=true
$f(x) = \frac{ax + b}{x - 2}$ has horizontal asymptote $y = 3$ and an x-intercept at $x = 1$. Find $f(0)$.
hint: The asymptote fixes a; the intercept fixes b.
solution: $y = \frac{a}{1} = 3$, so $a = 3$. $f(1) = 0$: $3 + b = 0$, $b = -3$.
$f(0) = \frac{-3}{-2} = \frac{3}{2}$.
:::
