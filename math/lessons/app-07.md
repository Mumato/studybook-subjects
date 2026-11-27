---
id: app-07
title: The Mean Value Theorem
---
If you drive 100 km in one hour, your average speed is 100 km/h. The Mean Value Theorem says that at some moment the speedometer showed exactly 100.

::: rule
Suppose f is **continuous** on $[a, b]$ and **differentiable** on $(a, b)$.

**Rolle's theorem:** if $f(a) = f(b)$, there is a c in $(a, b)$ with $f'(c) = 0$.

**Mean Value Theorem (MVT):** there is a c in $(a, b)$ with

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

The tangent at c is parallel to the secant line from a to b.

Consequence: if $f'(x) = 0$ on a whole interval, f is constant there.
:::

::: example
**Find c for $f(x) = x^2$ on $[1, 3]$.**

Average slope: $\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4$.

$f'(c) = 2c = 4$, so $c = 2$, which is inside $(1, 3)$.
:::

::: example
**Find c for $f(x) = x^3 - x$ on $[0, 2]$.**

Average slope: $\frac{6 - 0}{2} = 3$.

$3c^2 - 1 = 3$, $c^2 = \frac{4}{3}$, $c = \pm\frac{2}{\sqrt{3}}$.

Only $c = \frac{2}{\sqrt{3}} \approx 1.15$ lies in $(0, 2)$.
:::

::: graph
x -1..4
y -1..10
plot x^2 blue
segment 1,1 3,9
plot 4x-4 red
point 2,4 c
:::

::: problem id=p1 type=numeric answer="2"
Find the c that the MVT gives for $f(x) = x^2$ on $[0, 4]$.
solution: Average slope $\frac{16 - 0}{4} = 4$. $2c = 4$, $c = 2$.
:::

::: problem id=p2 type=numeric answer="sqrt(3)"
Find c for $f(x) = x^3$ on $[0, 3]$. (exact)
solution: Average slope $\frac{27}{3} = 9$. $3c^2 = 9$, $c = \sqrt{3}$ (the positive root is in the interval).
:::

::: problem id=p3 type=numeric answer="2"
$f(x) = x^2 - 4x$ has $f(0) = f(4) = 0$. Find the c that Rolle's theorem gives.
solution: $f'(c) = 2c - 4 = 0$, $c = 2$.
:::

::: problem id=p4 type=numeric answer="1"
Find c for $f(x) = \sqrt{x}$ on $[0, 4]$.
hint: $f'(x) = \frac{1}{2\sqrt{x}}$.
solution: Average slope $\frac{2 - 0}{4} = \frac{1}{2}$.
$\frac{1}{2\sqrt{c}} = \frac{1}{2}$, so $c = 1$.
:::

::: problem id=p5 type=choice
$f(x) = |x|$ has $f(-1) = f(1)$, yet no c in $(-1, 1)$ has $f'(c) = 0$. Why doesn't Rolle's theorem apply?
- [ ] f is not continuous on $[-1, 1]$
- [x] f is not differentiable at $x = 0$
- [ ] $f(-1) \ne f(1)$
solution: $|x|$ is continuous but has a corner at 0, so it is not differentiable there.
:::

::: problem id=p6 type=choice
Why does the MVT not apply to $f(x) = \frac{1}{x}$ on $[-1, 1]$?
- [x] f is not continuous on $[-1, 1]$
- [ ] f is not differentiable at $x = 1$
- [ ] the average slope is 0
solution: $\frac{1}{x}$ is undefined at $x = 0$, so it is not continuous on the interval.
:::

::: problem id=p7 type=numeric answer="1"
$f(x) = x^3 - 3x$ has $f(0) = f(\sqrt{3}) = 0$. Find the c in $(0, \sqrt{3})$ that Rolle's theorem gives.
solution: $f'(c) = 3c^2 - 3 = 0$, $c = \pm 1$. Only $c = 1$ is in the interval.
:::

::: problem id=c1 type=numeric answer="100" creative=true
A car covers 150 km in 1.5 hours. The MVT says that at some moment the speedometer showed exactly what speed, in km/h? Why?
hint: Position $s(t)$ is differentiable, and $s'(t)$ is the speed.
solution: Average speed $\frac{150}{1.5} = 100$. By the MVT, $s'(c) = \frac{s(1.5) - s(0)}{1.5} = 100$ for some moment c.
:::

::: problem id=x1 type=numeric answer="2" set=extra
Find c for $f(x) = x^2 + 2x$ on $[1, 3]$.
solution: Average slope $\frac{15 - 3}{2} = 6$. $2c + 2 = 6$, $c = 2$.
:::

::: problem id=x2 type=numeric answer="1" set=extra
Find c for $f(x) = x^3$ on $[-1, 2]$.
solution: Average slope $\frac{8 - (-1)}{3} = 3$. $3c^2 = 3$, $c = \pm 1$.
$c = -1$ is an endpoint, not inside, so $c = 1$.
:::

::: problem id=x3 type=numeric answer="3" set=extra
$f(x) = x^2 - 6x + 5$ has $f(1) = f(5) = 0$. Find the c from Rolle's theorem.
solution: $2c - 6 = 0$, $c = 3$.
:::

::: problem id=x4 type=numeric answer="sqrt(13/3)" set=extra
Find c for $f(x) = x^3$ on $[1, 3]$. (exact)
solution: Average slope $\frac{27 - 1}{2} = 13$.
$3c^2 = 13$, $c = \sqrt{\frac{13}{3}} \approx 2.08$.
:::

::: problem id=x5 type=numeric answer="2" set=extra
Find c for $f(x) = \frac{1}{x}$ on $[1, 4]$.
solution: Average slope $\frac{\frac{1}{4} - 1}{3} = -\frac{1}{4}$.
$-\frac{1}{c^2} = -\frac{1}{4}$, $c = 2$.
:::

::: problem id=x6 type=numeric answer="ln(e-1)" set=extra
Find c for $f(x) = e^x$ on $[0, 1]$. (exact)
solution: Average slope $\frac{e - 1}{1}$. $e^c = e - 1$, so $c = \ln(e - 1) \approx 0.54$.
:::

::: problem id=x7 type=numeric answer="pi/2" set=extra
$\sin 0 = \sin\pi = 0$. Find the c in $(0, \pi)$ from Rolle's theorem.
solution: $\cos c = 0$, $c = \frac{\pi}{2}$.
:::

::: problem id=x8 type=choice set=extra
What does the MVT say about the graph of f?
- [x] Some tangent line is parallel to the secant line from a to b
- [ ] The graph is a straight line
- [ ] f has a maximum between a and b
- [ ] $f(a) = f(b)$
solution: $f'(c)$ (tangent slope) equals the secant slope, so they are parallel.
:::

::: problem id=x9 type=choice set=extra
$f(x) = x^{2/3}$ has $f(-1) = f(1) = 1$, but $f'(x) = \frac{2}{3}x^{-1/3}$ is never 0. Which hypothesis of Rolle's theorem fails?
- [ ] continuity on $[-1, 1]$
- [x] differentiability at $x = 0$
- [ ] $f(-1) = f(1)$
solution: $f'(0)$ doesn't exist (a sharp point, a cusp), so Rolle's theorem does not apply.
:::

::: problem id=x10 type=numeric answer="12" set=extra
A runner covers 10 km in 50 minutes. At some moment her speed was exactly how many km/h?
solution: 50 min $= \frac{5}{6}$ h. Average $10 \div \frac{5}{6} = 12$ km/h; by the MVT she hit it.
:::

::: problem id=x11 type=numeric answer="2" set=extra
f is differentiable everywhere, $f(1) = 3$ and $f(5) = 11$. The MVT guarantees some c with $f'(c) = ?$
solution: $\frac{11 - 3}{5 - 1} = 2$.
:::

::: problem id=x12 type=numeric answer="14" set=extra
$f(0) = 2$ and $f'(x) \le 3$ for all x. What is the largest possible value of $f(4)$?
hint: By the MVT, $f(4) - f(0) = 4f'(c)$.
solution: $f(4) = 2 + 4f'(c) \le 2 + 12 = 14$.
:::

::: problem id=x13 type=numeric answer="9" set=extra
$f(2) = 5$ and $1 \le f'(x) \le 4$ for all x. What is the smallest possible value of $f(6)$?
hint: $f(6) - f(2) = 4f'(c)$ for some c.
solution: $f(6) = 5 + 4f'(c) \ge 5 + 4 = 9$.
:::

::: problem id=x14 type=choice set=extra
$f'(x) = 0$ for every x in an interval. Then on that interval f is:
- [ ] zero
- [x] constant
- [ ] increasing
- [ ] linear with slope 1
solution: By the MVT, $f(b) - f(a) = f'(c)(b - a) = 0$ for any a, b: f is constant (not necessarily 0).
:::

::: problem id=x15 type=choice set=extra
$f'(x) = g'(x)$ for all x. What can you say?
- [ ] $f = g$
- [x] $f - g$ is a constant
- [ ] $f + g$ is a constant
- [ ] nothing
solution: $(f - g)' = 0$, so $f - g$ is constant. (This is why antiderivatives differ by + C.)
:::

::: problem id=x16 type=numeric answer="(1+sqrt(7))/3" set=extra
Find c for $f(x) = x^3 - x^2$ on $[0, 2]$. (exact)
hint: Solve $3c^2 - 2c = 2$ with the quadratic formula.
solution: Average slope $\frac{4 - 0}{2} = 2$. $3c^2 - 2c - 2 = 0$.
$c = \frac{2 \pm \sqrt{28}}{6} = \frac{1 \pm \sqrt{7}}{3}$. Only $\frac{1 + \sqrt{7}}{3} \approx 1.22$ is in $(0, 2)$.
:::

::: problem id=x17 type=numeric answer="1" set=extra
How many real solutions does $x^3 + 3x + 1 = 0$ have?
hint: If there were two, Rolle's theorem would give a point with $f'(c) = 0$.
solution: $f(-1) < 0 < f(0)$, so there is at least one. $f'(x) = 3x^2 + 3 > 0$ is never 0, so there can't be two. Exactly **1**.
:::

::: problem id=x18 type=numeric answer="120" set=extra
A car passes a speed camera at 9:00 and a second one 30 km down the road at 9:15. The MVT proves that at some moment its speed was exactly how many km/h?
hint: 15 minutes is $\frac{1}{4}$ hour.
solution: Average speed $30 \div \frac{1}{4} = 120$ km/h, so $s'(c) = 120$ at some moment.
:::

::: problem id=x19 type=multi answers="2/sqrt(3);-2/sqrt(3)" set=extra
Find every c that the MVT allows for $f(x) = x^3 - 3x$ on $[-2, 2]$.
hint: Both roots may lie inside the interval.
solution: Average slope $\frac{2 - (-2)}{4} = 1$. $3c^2 - 3 = 1$, $c^2 = \frac{4}{3}$.
$c = \pm\frac{2}{\sqrt{3}} \approx \pm 1.15$: both inside.
:::

::: problem id=x20 type=choice set=extra creative=true
Two runners start together and finish a race in a tie. Which statement must be true?
- [ ] They ran at the same speed the whole time
- [x] At some moment they had exactly the same speed
- [ ] At some moment one of them stopped
- [ ] Nothing can be said
hint: Apply Rolle's theorem to the difference $d(t) = s_1(t) - s_2(t)$.
solution: $d(0) = 0$ and $d(T) = 0$ at the finish. By Rolle, $d'(c) = 0$ for some c: $s_1'(c) = s_2'(c)$, equal speeds at that moment.
:::
