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
