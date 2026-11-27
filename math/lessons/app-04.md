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

::: problem id=x1 type=numeric answer="9" set=extra
$s(t) = t^3 - 3t^2$. What is the velocity at $t = 3$?
solution: $v = 3t^2 - 6t$, $v(3) = 27 - 18 = 9$.
:::

::: problem id=x2 type=numeric answer="12" set=extra
For the same $s(t) = t^3 - 3t^2$, what is the acceleration at $t = 3$?
solution: $a = 6t - 6$, $a(3) = 12$.
:::

::: problem id=x3 type=numeric answer="5" set=extra
$s(t) = 4t^2 - t^3$. What is the velocity at $t = 1$?
solution: $v = 8t - 3t^2$, $v(1) = 5$.
:::

::: problem id=x4 type=multi answers="1;2" set=extra
$s(t) = 2t^3 - 9t^2 + 12t$. At which times is the object at rest?
solution: $v = 6t^2 - 18t + 12$
$= 6(t - 1)(t - 2) = 0$: $t = 1$ and $t = 2$.
:::

::: problem id=x5 type=numeric answer="69" set=extra
A ball's height is $s(t) = -16t^2 + 64t + 5$ feet. What is its greatest height?
solution: $v = -32t + 64 = 0$ at $t = 2$.
$s(2) = -64 + 128 + 5 = 69$ ft.
:::

::: problem id=x6 type=numeric answer="-1" set=extra
$s(t) = \sin t$. What is the acceleration at $t = \frac{\pi}{2}$?
solution: $v = \cos t$, $a = -\sin t$. $a(\frac{\pi}{2}) = -1$.
:::

::: problem id=x7 type=choice set=extra
At some moment $v = -3$ and $a = -2$. The object is:
- [x] speeding up
- [ ] slowing down
- [ ] at rest
hint: The object speeds up when v and a have the **same sign**, and slows down when their signs are opposite.
solution: v and a have the **same sign**, so the speed grows: speeding up.
:::

::: problem id=x8 type=choice set=extra
At some moment $v = 4$ and $a = -1$. The object is:
- [ ] speeding up
- [x] slowing down
- [ ] moving left
hint: The object speeds up when v and a have the **same sign**, and slows down when their signs are opposite.
solution: Moving right ($v > 0$), but a points the other way: **slowing down**.
:::

::: problem id=x9 type=choice set=extra
$s(t) = t^2 - 6t$. Describe the motion at $t = 2$.
- [ ] moving right, speeding up
- [ ] moving right, slowing down
- [ ] moving left, speeding up
- [x] moving left, slowing down
hint: $v < 0$ means moving left. It speeds up when v and a have the same sign, and slows down when they differ.
solution: $v(2) = 2 \cdot 2 - 6 = -2$: moving left. $a = 2 > 0$: opposite signs, so slowing down.
:::

::: problem id=x10 type=numeric answer="5" set=extra
$s(t) = t^2 - 4t$. What is the displacement (change in position) from $t = 0$ to $t = 5$?
solution: $s(5) - s(0) = 5 - 0 = 5$.
:::

::: problem id=x11 type=numeric answer="13" set=extra
Same $s(t) = t^2 - 4t$. What **total distance** does it travel from $t = 0$ to $t = 5$?
hint: It turns around when $v = 0$. Add the distances of each leg.
solution: $v = 2t - 4 = 0$ at $t = 2$; $s(2) = -4$.
Legs: from 0 to $-4$ is 4, from $-4$ to 5 is 9. Total 13.
:::

::: problem id=x12 type=numeric answer="20" set=extra
A ball is thrown up: $h(t) = 20t - 5t^2$ m. With what speed does it hit the ground?
hint: Find when $h = 0$ again, then the velocity then.
solution: $h = 5t(4 - t) = 0$ at $t = 4$.
$v(4) = 20 - 40 = -20$: speed 20 m/s.
:::

::: problem id=x13 type=choice set=extra
$v(t) = 3t^2 - 12$ for $t \ge 0$. When is the object moving left?
- [x] $0 \le t < 2$
- [ ] $t > 2$
- [ ] $t > 4$
- [ ] never
solution: $v < 0$ when $t^2 < 4$, that is $0 \le t < 2$.
:::

::: problem id=x14 type=numeric answer="2" set=extra
$s(t) = t^3 - 6t^2 + 9t$. At what time is the acceleration 0?
solution: $v = 3t^2 - 12t + 9$, $a = 6t - 12 = 0$ at $t = 2$.
:::

::: problem id=x15 type=numeric answer="3" set=extra
Same $s(t) = t^3 - 6t^2 + 9t$. What is the **speed** at $t = 2$?
solution: $v(2) = 12 - 24 + 9 = -3$. Speed is $|v| = 3$.
:::

::: problem id=x16 type=choice set=extra
Same $s(t) = t^3 - 6t^2 + 9t$, $t > 0$. When is it speeding up?
- [ ] $t > 2$ only
- [ ] $1 < t < 3$
- [x] $1 < t < 2$ or $t > 3$
- [ ] $0 < t < 1$ or $2 < t < 3$
hint: $v = 3(t - 1)(t - 3)$ and $a = 6(t - 2)$. Find where they have the same sign.
solution: Both negative on $1 < t < 2$; both positive for $t > 3$.
:::

::: problem id=x17 type=numeric answer="75" set=extra
A braking car has position $s(t) = 30t - 3t^2$ m. How far does it go before it stops?
solution: $v = 30 - 6t = 0$ at $t = 5$.
$s(5) = 150 - 75 = 75$ m.
:::

::: problem id=x18 type=numeric answer="12" set=extra
$s(t) = t^3 - 9t^2 + 15t$. What is the acceleration the second time the object is at rest?
hint: Solve $v = 0$ first.
solution: $v = 3t^2 - 18t + 15 = 3(t - 1)(t - 5)$. Second rest: $t = 5$.
$a = 6t - 18$, $a(5) = 12$.
:::

::: problem id=x19 type=numeric answer="4" set=extra
$s(t) = t + \frac{4}{t}$ for $t > 0$. Where is the object when it is at rest?
hint: $v = 1 - \frac{4}{t^2}$.
solution: $v = 0$ at $t = 2$. $s(2) = 2 + 2 = 4$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
Two particles start together: $s_1(t) = t^2$ and $s_2(t) = 6t - 2t^2$. For $0 \le t \le 2$, what is the greatest distance between them?
hint: The gap is $D = s_2 - s_1$. Maximise it.
solution: $D = 6t - 3t^2$, $D' = 6 - 6t = 0$ at $t = 1$.
$D(1) = 3$. (They meet again at $t = 2$.)
:::
