---
id: app-01
title: Increasing, decreasing and critical points
---
::: rule
- $f'(x) > 0$: f is **increasing** (going uphill)
- $f'(x) < 0$: f is **decreasing** (going downhill)
- **Critical points** are where $f'(x) = 0$ (or $f'$ doesn't exist).
- If $f'$ changes from + to − there, it's a **local maximum**; from − to +, a **local minimum**.
:::

::: example
$f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3 = 0$ at $x = \pm 1$. $f'$ goes + then − at $x = -1$ (local max, $f = 2$), and − then + at $x = 1$ (local min, $f = -2$).
:::

::: graph
x -3..3
y -4..4
plot x^3-3x blue
point -1,2 max
point 1,-2 min
:::

::: problem id=p1 type=numeric answer="3"
Where is the critical point of $f(x) = x^2 - 6x$? Type the x value.
solution: $2x - 6 = 0$, $x = 3$.
:::

::: problem id=p2 type=multi answers="2;-2"
Find both critical points of $f(x) = x^3 - 12x$.
hint: Set $3x^2 - 12 = 0$.
solution: $x^2 = 4$: $x = 2$ and $x = -2$.
:::

::: problem id=p3 type=choice
On an interval where $f'(x) > 0$, f is:
- [x] increasing
- [ ] decreasing
- [ ] constant
solution: Positive slope means going up.
:::

::: problem id=p4 type=point answer="-1,2"
Here is $y = x^3 - 3x$. Click its local maximum.
graph:
x -3..3
y -4..4
plot x^3-3x blue
solution: The top of the hill: $(-1, 2)$.
:::

::: problem id=p5 type=text answers="decreasing;decreases"
$f'(x) = (x - 1)(x - 4)$. At $x = 2$, is f increasing or decreasing?
hint: Work out the sign of $f'(2)$.
solution: $f'(2) = (1)(-2) = -2 < 0$: **decreasing**.
:::

::: problem id=p6 type=text answers="minimum;min;local minimum;local min"
At $x = 5$, $f'$ changes from negative to positive. Is that a local maximum or a local minimum?
solution: Downhill then uphill: the bottom of a valley, a **minimum**.
:::

::: problem id=p7 type=numeric answer="-2"
What is the local minimum **value** of $f(x) = x^3 - 3x$?
hint: The minimum is at $x = 1$.
solution: $f(1) = 1 - 3 = -2$.
:::

::: problem id=p8 type=choice
Where is $f(x) = x^2 - 4x + 1$ decreasing?
- [x] $x < 2$
- [ ] $x > 2$
- [ ] everywhere
solution: $f'(x) = 2x - 4 < 0$ when $x < 2$.
:::

::: problem id=x1 type=numeric answer="-5" set=extra
Where is the critical point of $f(x) = x^2 + 10x$? Type the x value.
solution: $f'(x) = 2x + 10 = 0$, so $x = -5$.
:::

::: problem id=x2 type=multi answers="0;2" set=extra
Find both critical points of $f(x) = x^3 - 3x^2$.
solution: $f'(x) = 3x^2 - 6x = 3x(x - 2) = 0$: $x = 0$ and $x = 2$.
:::

::: problem id=x3 type=multi answers="-2;1" set=extra
Find both critical points of $f(x) = 2x^3 + 3x^2 - 12x$.
solution: $f'(x) = 6x^2 + 6x - 12$
$= 6(x + 2)(x - 1)$: $x = -2$ and $x = 1$.
:::

::: problem id=x4 type=multi answers="0;3" set=extra
Find the critical points of $f(x) = x^4 - 4x^3$.
solution: $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$: $x = 0$ and $x = 3$.
:::

::: problem id=x5 type=choice set=extra
Where is $f(x) = x^3 - 12x$ decreasing?
- [ ] $x < -2$
- [x] $-2 < x < 2$
- [ ] $x > 2$
- [ ] $x < -2$ or $x > 2$
solution: $f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$. It is negative between the roots: $-2 < x < 2$.
:::

::: problem id=x6 type=numeric answer="1" set=extra
Find the critical point of $f(x) = x - \ln x$ (for $x > 0$).
solution: $f'(x) = 1 - \frac{1}{x} = 0$ at $x = 1$.
:::

::: problem id=x7 type=numeric answer="-1" set=extra
Find the critical point of $f(x) = xe^x$.
hint: Use the product rule.
solution: $f'(x) = e^x + xe^x = e^x(1 + x)$. Since $e^x > 0$, $x = -1$.
:::

::: problem id=x8 type=text answers="increasing;increases" set=extra
$f'(x) = x^2(x - 4)$. At $x = 5$, is f increasing or decreasing?
solution: $f'(5) = 25 \cdot 1 = 25 > 0$: **increasing**.
:::

::: problem id=x9 type=choice set=extra
$f'(x) = (x - 1)^2$. What happens at the critical point $x = 1$?
- [ ] a local maximum
- [ ] a local minimum
- [x] neither: f keeps increasing
solution: $(x - 1)^2 \ge 0$ on both sides, so $f'$ does not change sign. No max or min.
:::

::: problem id=x10 type=numeric answer="16" set=extra
What is the local maximum **value** of $f(x) = x^3 - 12x$?
solution: $f'$ goes + to − at $x = -2$.
$f(-2) = -8 + 24 = 16$.
:::

::: problem id=x11 type=point answer="2,-4" set=extra
Here is $y = x^3 - 3x^2$. Click its local minimum.
graph:
x -2..4
y -5..3
plot x^3-3x^2 blue
solution: $f' = 3x(x - 2)$ goes − to + at $x = 2$. $f(2) = 8 - 12 = -4$: $(2, -4)$.
:::

::: problem id=x12 type=choice set=extra
$f'(x)$ is negative for $x < 1$ and positive for $x > 1$. Which is true?
- [ ] f has a local maximum at $x = 1$
- [x] f has a local minimum at $x = 1$
- [ ] f is increasing for $x < 1$
- [ ] $f(1) = 0$
solution: Downhill then uphill: a **local minimum** at $x = 1$. (Nothing says the value $f(1)$ is 0.)
:::

::: problem id=x13 type=choice set=extra
A student says: "$f(x) = x^3$ has $f'(0) = 0$, so it has a local max or min at $x = 0$." Is that right?
- [ ] Yes, it's a local minimum
- [ ] Yes, it's a local maximum
- [x] No: $f'$ does not change sign at 0
solution: $f'(x) = 3x^2 \ge 0$ on both sides, so $x^3$ keeps rising. A critical point need not be a max or min.
:::

::: problem id=x14 type=numeric answer="-8" set=extra
$f(x) = x^2 + bx$ has its critical point at $x = 4$. Find b.
solution: $f'(x) = 2x + b$. $f'(4) = 8 + b = 0$, so $b = -8$.
:::

::: problem id=x15 type=multi answers="-2;0;2" set=extra
Find all critical points of $f(x) = x^4 - 8x^2$.
solution: $f'(x) = 4x^3 - 16x$
$= 4x(x - 2)(x + 2)$: $x = -2, 0, 2$.
:::

::: problem id=x16 type=numeric answer="-16" set=extra
What is the local minimum value of $f(x) = x^4 - 8x^2$?
hint: Check the sign of $f'$ around each critical point. The minimums are at $x = \pm 2$.
solution: $f'$ goes − to + at $x = \pm 2$.
$f(2) = 16 - 32 = -16$.
:::

::: problem id=x17 type=numeric answer="-4" set=extra
What is the local maximum value of $f(x) = x + \frac{4}{x}$?
hint: $f'(x) = 1 - \frac{4}{x^2}$. Which of the critical points gives + then −?
solution: $f' = 0$ at $x = \pm 2$. At $x = -2$, $f'$ goes + to −.
$f(-2) = -2 - 2 = -4$.
:::

::: problem id=x18 type=numeric answer="sqrt(2)" set=extra
For $0 < x < 2\pi$, find the local maximum value of $f(x) = \sin x + \cos x$.
hint: $f'(x) = \cos x - \sin x = 0$ when $\tan x = 1$.
solution: Critical points $\frac{\pi}{4}$ and $\frac{5\pi}{4}$. At $\frac{\pi}{4}$, $f'$ goes + to −.
$f(\frac{\pi}{4}) = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = \sqrt{2}$.
:::

::: problem id=x19 type=numeric answer="-9" set=extra
$f(x) = x^3 + ax^2 + bx$ has critical points at $x = -1$ and $x = 3$. Find b.
hint: $f'(x) = 3x^2 + 2ax + b$ must equal $3(x + 1)(x - 3)$.
solution: $3(x + 1)(x - 3) = 3x^2 - 6x - 9$.
So $2a = -6$ and $b = -9$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
What is the smallest k for which $f(x) = x^3 - 3x^2 + kx$ is increasing everywhere (never has $f' < 0$)?
hint: $f'(x) = 3x^2 - 6x + k$ is a parabola opening up. When does it never dip below 0?
solution: $f' \ge 0$ for all x when the discriminant is $\le 0$:
$36 - 12k \le 0$, so $k \ge 3$. Smallest: $k = 3$.
:::
