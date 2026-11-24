---
id: iapp-03
title: Average value and net change
---
::: rule
- **Average value** of f on $[a, b]$: $\frac{1}{b - a}\int_a^b f(x)\,dx$
- **Net change:** integrating a rate gives the total change: $\int_a^b F'(x)\,dx = F(b) - F(a)$. Integrating velocity gives **displacement** (where you end up compared to where you started).
- Total **distance** counts backwards motion as positive: integrate $|v|$.
:::

::: example
The average of $x^2$ on $[0, 3]$ is $\frac{1}{3}\int_0^3 x^2\,dx = \frac{1}{3} \cdot 9 = 3$.
:::

::: problem id=p1 type=numeric answer="3"
What is the average value of $x^2$ on $[0, 3]$?
solution: 3.
:::

::: problem id=p2 type=numeric answer="4"
What is the average value of $2x$ on $[0, 4]$?
solution: $\frac{1}{4} \cdot 16 = 4$.
:::

::: problem id=p3 type=numeric answer="2/pi"
What is the average value of $\sin x$ on $[0, \pi]$? (exact)
solution: $\frac{1}{\pi} \cdot 2 = \frac{2}{\pi}$.
:::

::: problem id=p4 type=numeric answer="8"
A car's velocity is $v(t) = 3t^2$ m/s. How far does it go from $t = 0$ to $t = 2$?
solution: $\int_0^2 3t^2\,dt = 8$ m.
:::

::: problem id=p5 type=numeric answer="25"
$v(t) = 10 - 2t$ m/s. What is the displacement from $t = 0$ to $t = 5$?
hint: Integrate the velocity.
solution: $[10t - t^2]_0^5 = 50 - 25 = 25$ m.
:::

::: problem id=p6 type=numeric answer="18"
Water flows into a tank at $r(t) = 4t$ litres per minute. How much flows in from $t = 0$ to $t = 3$?
solution: $\int_0^3 4t\,dt = 18$ litres.
:::

::: problem id=p7 type=numeric answer="4"
$v(t) = t - 2$ on $[0, 4]$. What is the total **distance** travelled?
hint: It moves backwards for $t < 2$. Add both parts as positive.
solution: Backwards 2 m (from 0 to 2), then forwards 2 m: total distance 4 m. (The displacement is 0.)
:::

::: problem id=p8 type=numeric answer="1/(e-1)"
What is the average value of $\frac{1}{x}$ on $[1, e]$? (exact)
solution: $\frac{1}{e - 1}\int_1^e \frac{1}{x}\,dx = \frac{1}{e - 1}$.
:::
