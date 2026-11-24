---
id: app-04
title: Motion and related rates
---
::: rule
- Position $s(t)$, **velocity** $v(t) = s'(t)$, **acceleration** $a(t) = v'(t) = s''(t)$. The object is at rest when $v = 0$.
- **Related rates:** when quantities change with time, differentiate the equation that links them with respect to t (using the chain rule), then substitute the numbers.
:::

::: example
A circle's radius grows at 2 cm/s. $A = \pi r^2$, so $\frac{dA}{dt} = 2\pi r\frac{dr}{dt}$. When $r = 5$: $2\pi \cdot 5 \cdot 2 = 20\pi$ cm²/s.
:::

::: problem id=p1 type=numeric answer="6"
$s(t) = t^3 - 6t$. What is the velocity at $t = 2$?
solution: $v = 3t^2 - 6$, $v(2) = 6$.
:::

::: problem id=p2 type=numeric answer="12"
For the same $s(t)$, what is the acceleration at $t = 2$?
solution: $a = 6t$, $a(2) = 12$.
:::

::: problem id=p3 type=numeric answer="30"
$s(t) = 5t^2$. What is the velocity at $t = 3$?
solution: $v = 10t = 30$.
:::

::: problem id=p4 type=numeric answer="4"
$s(t) = t^2 - 8t$. At what time is the object at rest?
hint: At rest means $v = 0$.
solution: $2t - 8 = 0$, $t = 4$.
:::

::: problem id=p5 type=numeric answer="20pi"
A circle's radius grows at 2 cm/s. How fast is the area growing when $r = 5$? (in terms of pi)
solution: $2\pi \cdot 5 \cdot 2 = 20\pi$.
:::

::: problem id=p6 type=numeric answer="24"
A square's side grows at 3 cm/s. How fast is its area growing when the side is 4 cm?
hint: $A = s^2$, so $\frac{dA}{dt} = 2s\frac{ds}{dt}$.
solution: $2 \cdot 4 \cdot 3 = 24$ cm²/s.
:::

::: problem id=p7 type=numeric answer="36pi"
A balloon's radius grows at 1 cm/s. How fast is its volume growing when $r = 3$? (in terms of pi)
hint: $V = \frac{4}{3}\pi r^3$.
solution: $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 4\pi \cdot 9 \cdot 1 = 36\pi$.
:::

::: problem id=p8 type=numeric answer="3/4"
A 10 m ladder leans on a wall. Its foot slides away at 1 m/s. How fast is the top sliding down when the foot is 6 m from the wall?
hint: $x^2 + y^2 = 100$, so $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$. When $x = 6$, $y = 8$.
solution: $6 \cdot 1 + 8\frac{dy}{dt} = 0$, $\frac{dy}{dt} = -\frac{3}{4}$: sliding down at $\frac{3}{4}$ m/s.
:::
