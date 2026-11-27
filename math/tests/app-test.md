---
id: app-test
title: Applications of derivatives test
pass: 0.8
---
::: problem id=t1 type=numeric answer="-2"
Where is the critical point of $f(x) = x^2 + 4x$? Type the x value.
solution: $2x + 4 = 0$, $x = -2$.
:::

::: problem id=t2 type=multi answers="3;-3"
Find both critical points of $f(x) = x^3 - 27x$.
solution: $3x^2 = 27$, $x = \pm 3$.
:::

::: problem id=t3 type=expression answer="20x^3"
$f(x) = x^5$. What is $f''(x)$?
solution: $f' = 5x^4$, $f'' = 20x^3$.
:::

::: problem id=t4 type=numeric answer="5"
What is the maximum value of $f(x) = -x^2 + 4x + 1$?
solution: $x = 2$: $-4 + 8 + 1 = 5$.
:::

::: problem id=t5 type=numeric answer="100"
Two numbers add up to 20. What is the biggest their product can be?
solution: $10 \times 10 = 100$.
:::

::: problem id=t6 type=numeric answer="11"
$s(t) = t^2 + 3t$. What is the velocity at $t = 4$?
solution: $v = 2t + 3 = 11$.
:::

::: problem id=t7 type=numeric answer="20"
A square's side grows at 2 cm/s. How fast is its area growing when the side is 5 cm?
solution: $2 \cdot 5 \cdot 2 = 20$ cm²/s.
:::

::: problem id=t8 type=choice
$f'(x) = (x + 1)(x - 2)$. What happens at $x = -1$?
- [x] a local maximum
- [ ] a local minimum
- [ ] neither
solution: For $x < -1$, $f' > 0$; for $-1 < x < 2$, $f' < 0$. + to −: local **maximum**.
:::

::: problem id=t9 type=numeric answer="3"
$f(x) = x^3 - 9x^2$. Where is its inflection point? Type the x value.
solution: $f'' = 6x - 18 = 0$, $x = 3$.
:::

::: problem id=t10 type=text answers="minimum;min;local minimum;local min"
$f(x) = x^3 - 3x$ has $f'(1) = 0$. Use the second derivative: is $x = 1$ a maximum or a minimum?
solution: $f'' = 6x$, $f''(1) = 6 > 0$: **minimum**.
:::

::: problem id=t11 type=numeric answer="800"
A farmer has 80 m of fence for a rectangle along a river (no fence on the river side). What is the biggest area, in m²?
solution: $A = x(80 - 2x)$, $A' = 80 - 4x = 0$, $x = 20$.
$20 \times 40 = 800$ m².
:::

::: problem id=t12 type=numeric answer="10"
For $x > 0$, what is the smallest value of $x + \frac{25}{x}$?
solution: $1 - \frac{25}{x^2} = 0$ at $x = 5$: $5 + 5 = 10$.
:::

::: problem id=t13 type=numeric answer="6"
$s(t) = t^3 - 6t^2$. What is the acceleration at $t = 3$?
solution: $v = 3t^2 - 12t$, $a = 6t - 12$, $a(3) = 6$.
:::

::: problem id=t14 type=multi answers="1;3"
$s(t) = t^3 - 6t^2 + 9t$. At which times is the object at rest?
solution: $v = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$: $t = 1, 3$.
:::

::: problem id=t15 type=numeric answer="8/5"
A 17 m ladder leans on a wall. Its foot slides away at 3 m/s. How fast is the top sliding down when the foot is 8 m from the wall?
solution: $y = \sqrt{289 - 64} = 15$. $8 \cdot 3 + 15\frac{dy}{dt} = 0$.
$\frac{dy}{dt} = -\frac{24}{15} = -\frac{8}{5}$: down at $\frac{8}{5}$ m/s.
:::

::: problem id=t16 type=numeric answer="1"
A sphere's volume grows at $36\pi$ cm³/s. How fast is its radius growing when $r = 3$ cm?
solution: $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$: $36\pi = 36\pi\frac{dr}{dt}$, so 1 cm/s.
:::

::: problem id=t17 type=numeric answer="1"
A cone tank, point down, is 10 m tall with top radius 5 m. Water flows in at $4\pi$ m³/min. How fast does the level rise when the water is 4 m deep?
solution: $r = \frac{h}{2}$, $V = \frac{\pi h^3}{12}$, $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$.
At $h = 4$: $4\pi = 4\pi\frac{dh}{dt}$, so 1 m/min.
:::

::: problem id=t18 type=numeric answer="3/5"
A 1.8 m tall person walks away from a 5.4 m lamp post at 1.2 m/s. How fast is the shadow getting longer?
solution: $\frac{5.4}{x + s} = \frac{1.8}{s}$ gives $3.6s = 1.8x$, $s = \frac{x}{2}$.
$\frac{ds}{dt} = 0.6 = \frac{3}{5}$ m/s.
:::
