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

::: problem id=x1 type=numeric answer="2" set=extra
What is the average value of $x^3$ on $[0, 2]$?
solution: $\frac{1}{2}\int_0^2 x^3\,dx = \frac{1}{2} \cdot 4 = 2$.
:::

::: problem id=x2 type=numeric answer="3" set=extra
What is the average value of $6 - 2x$ on $[0, 3]$?
solution: $\frac{1}{3}[6x - x^2]_0^3 = \frac{1}{3} \cdot 9 = 3$.
:::

::: problem id=x3 type=numeric answer="2/pi" set=extra
What is the average value of $\cos x$ on $\left[0, \frac{\pi}{2}\right]$? (exact)
solution: $\frac{2}{\pi}[\sin x]_0^{\pi/2} = \frac{2}{\pi}$.
:::

::: problem id=x4 type=numeric answer="e-1" set=extra
What is the average value of $e^x$ on $[0, 1]$? (exact)
solution: $\frac{1}{1}\int_0^1 e^x\,dx = e - 1$.
:::

::: problem id=x5 type=numeric answer="4/3" set=extra
What is the average value of $\sqrt{x}$ on $[0, 4]$?
solution: $\frac{1}{4} \cdot \frac{2}{3}x^{3/2}\Big|_0^4 = \frac{1}{4} \cdot \frac{16}{3} = \frac{4}{3}$.
:::

::: problem id=x6 type=numeric answer="-3" set=extra
$v(t) = t^2 - 4$ m/s. What is the displacement from $t = 0$ to $t = 3$?
solution: $\left[\frac{t^3}{3} - 4t\right]_0^3 = 9 - 12 = -3$ m.
:::

::: problem id=x7 type=numeric answer="23/3" set=extra
Same $v(t) = t^2 - 4$: what is the total **distance** from $t = 0$ to $t = 3$?
hint: v changes sign at $t = 2$.
solution: $\int_0^2 (4 - t^2)\,dt = \frac{16}{3}$ and $\int_2^3 (t^2 - 4)\,dt = \frac{7}{3}$. Total $\frac{23}{3}$ m.
:::

::: problem id=x8 type=numeric answer="2000(e-1)" set=extra
A population grows at $200e^{0.1t}$ animals per year. By how much does it grow from $t = 0$ to $t = 10$? (exact)
solution: $\int_0^{10} 200e^{0.1t}\,dt = 2000[e^{0.1t}]_0^{10}$, which is $2000(e - 1)$.
:::

::: problem id=x9 type=numeric answer="28" set=extra
The average value of f on $[1, 5]$ is 7. What is $\int_1^5 f(x)\,dx$?
solution: Average $= \frac{1}{4}\int$, so the integral is $4 \cdot 7 = 28$.
:::

::: problem id=x10 type=numeric answer="sqrt(3)" set=extra
On $[0, 3]$, $x^2$ has average 3. At which c in $[0, 3]$ does $c^2$ equal that average?
solution: $c^2 = 3$, so $c = \sqrt{3}$. (The Mean Value Theorem for integrals says such a c exists.)
:::

::: problem id=x11 type=numeric answer="20+12/pi" set=extra
The temperature is $T(t) = 20 + 6\sin\frac{\pi t}{12}$ °C. What is the average temperature from $t = 0$ to $t = 12$? (exact)
solution: $\int_0^{12}\sin\frac{\pi t}{12}\,dt = \frac{24}{\pi}$. Average: $20 + \frac{6}{12} \cdot \frac{24}{\pi} = 20 + \frac{12}{\pi}$.
:::

::: problem id=x12 type=numeric answer="9" set=extra
A particle is at $s = 5$ when $t = 0$ and moves with $v(t) = 3t^2 - 2t$. Where is it at $t = 2$?
solution: $s(2) = 5 + \int_0^2 (3t^2 - 2t)\,dt$, which is $5 + (8 - 4) = 9$.
:::

::: problem id=x13 type=choice set=extra
When is the total distance equal to the displacement?
- [x] when v never goes negative on the interval
- [ ] always
- [ ] when v starts at 0
- [ ] never
solution: Distance integrates $|v|$. It equals $\int v$ exactly when $v \ge 0$ the whole time.
:::

::: problem id=x14 type=numeric answer="50" set=extra
A tank holds 100 L. Water leaks out at $r(t) = 10 - t$ L/min for $0 \le t \le 10$. How much is left at $t = 10$?
solution: Leaked: $\int_0^{10}(10 - t)\,dt = 100 - 50 = 50$ L. Left: $100 - 50 = 50$ L.
:::

::: problem id=x15 type=numeric answer="pi/4" set=extra
What is the average value of $\frac{1}{1 + x^2}$ on $[0, 1]$? (exact)
solution: $\frac{1}{1}[\arctan x]_0^1 = \frac{\pi}{4}$.
:::

::: problem id=x16 type=numeric answer="4/3" set=extra
A student says the average of $x^2$ on $[0, 2]$ is $\frac{0 + 4}{2} = 2$. What is the true average?
solution: Averaging the end values only works for straight lines. $\frac{1}{2}\int_0^2 x^2\,dx = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}$.
:::

::: problem id=x17 type=numeric answer="4" set=extra
$v(t) = \sin t$. What is the total distance from $t = 0$ to $t = 2\pi$?
hint: $\sin t < 0$ on $(\pi, 2\pi)$.
solution: Each half gives 2: $\int_0^{\pi}\sin t\,dt = 2$ and $\int_{\pi}^{2\pi}(-\sin t)\,dt = 2$. Total 4 (displacement 0).
:::

::: problem id=x18 type=numeric answer="1/2" set=extra
What is the average value of $\sin^2 x$ on $[0, \pi]$?
hint: $\sin^2 x = \frac{1 - \cos 2x}{2}$.
solution: $\int_0^{\pi}\sin^2 x\,dx = \frac{\pi}{2}$. Average: $\frac{1}{\pi} \cdot \frac{\pi}{2} = \frac{1}{2}$.
:::

::: problem id=x19 type=numeric answer="13" set=extra
$v(t) = 2t - 6$ m/s. What is the total distance from $t = 0$ to $t = 5$?
hint: Split where $v = 0$.
solution: $v = 0$ at $t = 3$. $\int_0^3 (6 - 2t)\,dt = 9$ and $\int_3^5 (2t - 6)\,dt = 4$. Total 13 m.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
For which $b > 0$ is the average value of $x^2$ on $[0, b]$ equal to 12?
solution: $\frac{1}{b} \cdot \frac{b^3}{3} = \frac{b^2}{3} = 12$, so $b^2 = 36$ and $b = 6$.
:::
