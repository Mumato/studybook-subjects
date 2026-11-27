---
id: unit-05
title: Inverse trig functions
---
Many angles have the same sine, so to undo sine we must pick **one** answer. Each inverse function gives its answer from a fixed range.

::: rule
- $\arcsin x$: input $-1 \le x \le 1$, output in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$
- $\arccos x$: input $-1 \le x \le 1$, output in $[0, \pi]$
- $\arctan x$: any input, output in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$

$\arcsin x$ (also written $\sin^{-1} x$) is the angle in that range whose sine is x.

- $\sin(\arcsin x) = x$ always (for $-1 \le x \le 1$).
- $\arcsin(\sin\theta) = \theta$ **only** if θ is already in the range. Otherwise find the angle in the range with the same sine.
- For $\cos(\arcsin x)$ and similar: draw a right triangle, then check the sign.
:::

::: example
$\arcsin\left(-\frac{1}{2}\right)$: the angle in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ with sine $-\frac{1}{2}$ is $-\frac{\pi}{6}$ (not $\frac{7\pi}{6}$).

$\arccos\left(-\frac{1}{2}\right)$: the angle in $[0, \pi]$ with cosine $-\frac{1}{2}$ is $\frac{2\pi}{3}$.
:::

::: example
$\cos\left(\arcsin\frac{3}{5}\right)$: let $\theta = \arcsin\frac{3}{5}$. Opposite 3, hypotenuse 5, so adjacent 4. θ is in quadrant I, so $\cos\theta = \frac{4}{5}$.

$\arcsin\left(\sin\frac{5\pi}{6}\right)$: $\sin\frac{5\pi}{6} = \frac{1}{2}$, and $\arcsin\frac{1}{2} = \frac{\pi}{6}$.
:::

Give angles in radians, like pi/6 or -pi/3.

::: problem id=p1 type=numeric answer="pi/6"
$\arcsin\frac{1}{2} = ?$
solution: $\sin\frac{\pi}{6} = \frac{1}{2}$ and $\frac{\pi}{6}$ is in the range: $\frac{\pi}{6}$.
:::

::: problem id=p2 type=numeric answer="pi/2"
$\arccos 0 = ?$
solution: In $[0, \pi]$, cosine is 0 at $\frac{\pi}{2}$.
:::

::: problem id=p3 type=numeric answer="pi/4"
$\arctan 1 = ?$
solution: $\tan\frac{\pi}{4} = 1$: $\frac{\pi}{4}$.
:::

::: problem id=p4 type=numeric answer="-pi/3"
$\arcsin\left(-\frac{\sqrt{3}}{2}\right) = ?$
hint: The answer must be between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$.
solution: $\sin\left(-\frac{\pi}{3}\right) = -\frac{\sqrt{3}}{2}$: $-\frac{\pi}{3}$.
:::

::: problem id=p5 type=numeric answer="3pi/4"
$\arccos\left(-\frac{\sqrt{2}}{2}\right) = ?$
solution: In $[0, \pi]$, cosine is $-\frac{\sqrt{2}}{2}$ in quadrant II: $\frac{3\pi}{4}$.
:::

::: problem id=p6 type=numeric answer="-pi/3"
$\arctan\left(-\sqrt{3}\right) = ?$
solution: $\tan\left(-\frac{\pi}{3}\right) = -\sqrt{3}$, inside $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.
:::

::: problem id=p7 type=numeric answer="12/13"
$\cos\left(\arcsin\frac{5}{13}\right) = ?$
hint: Draw a right triangle with opposite 5 and hypotenuse 13.
solution: Adjacent $\sqrt{169 - 25} = 12$. Quadrant I: $\frac{12}{13}$.
:::

::: problem id=p8 type=numeric answer="pi/3"
$\arcsin\left(\sin\frac{2\pi}{3}\right) = ?$
hint: $\frac{2\pi}{3}$ is not in the range of arcsin.
solution: $\sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2}$, and $\arcsin\frac{\sqrt{3}}{2} = \frac{\pi}{3}$.
:::

::: problem id=x1 type=numeric answer="pi/3" set=extra
$\arccos\frac{1}{2} = ?$
solution: $\cos\frac{\pi}{3} = \frac{1}{2}$: $\frac{\pi}{3}$.
:::

::: problem id=x2 type=numeric answer="-pi/2" set=extra
$\arcsin(-1) = ?$
solution: $\sin\left(-\frac{\pi}{2}\right) = -1$: $-\frac{\pi}{2}$.
:::

::: problem id=x3 type=numeric answer="pi/6" set=extra
$\arctan\frac{\sqrt{3}}{3} = ?$
solution: $\tan\frac{\pi}{6} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$.
:::

::: problem id=x4 type=numeric answer="pi" set=extra
$\arccos(-1) = ?$
solution: In $[0, \pi]$, cosine is $-1$ at π.
:::

::: problem id=x5 type=numeric answer="pi/4" set=extra
$\arcsin\frac{\sqrt{2}}{2} = ?$
solution: $\frac{\pi}{4}$.
:::

::: problem id=x6 type=numeric answer="-pi/4" set=extra
$\arctan(-1) = ?$
solution: $\tan\left(-\frac{\pi}{4}\right) = -1$, inside the range.
:::

::: problem id=x7 type=choice set=extra
What is the range (set of outputs) of $\arccos x$?
- [ ] $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$
- [x] $[0, \pi]$
- [ ] $[0, 2\pi)$
- [ ] $[-1, 1]$
solution: Arccos gives angles from 0 to π. ($[-1, 1]$ is its input.)
:::

::: problem id=x8 type=choice set=extra
What is $\arcsin 2$?
- [ ] $\frac{\pi}{2}$
- [ ] $2\pi$
- [x] Not defined
- [ ] $\frac{\pi}{6}$
solution: No angle has sine 2: inputs must be between $-1$ and 1.
:::

::: problem id=x9 type=numeric answer="4/5" set=extra
$\sin\left(\arccos\frac{3}{5}\right) = ?$
solution: Adjacent 3, hypotenuse 5, opposite 4. The angle is in $[0, \pi]$, where sine is positive: $\frac{4}{5}$.
:::

::: problem id=x10 type=numeric answer="3/4" set=extra
$\tan\left(\arcsin\frac{3}{5}\right) = ?$
solution: Opposite 3, hypotenuse 5, adjacent 4: $\frac{3}{4}$.
:::

::: problem id=x11 type=numeric answer="3/5" set=extra
$\cos\left(\arctan\frac{4}{3}\right) = ?$
solution: Opposite 4, adjacent 3, hypotenuse 5: $\frac{3}{5}$.
:::

::: problem id=x12 type=choice set=extra
Tom says $\arcsin\left(-\frac{1}{2}\right) = \frac{7\pi}{6}$. What is right?
- [ ] Tom is right
- [ ] $\frac{11\pi}{6}$
- [x] $-\frac{\pi}{6}$
- [ ] $\frac{5\pi}{6}$
solution: $\sin\frac{7\pi}{6} = -\frac{1}{2}$, but arcsin must answer in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$: $-\frac{\pi}{6}$.
:::

::: problem id=x13 type=numeric answer="pi/3" set=extra
$\arccos\left(\cos\frac{5\pi}{3}\right) = ?$
hint: $\frac{5\pi}{3}$ is not in $[0, \pi]$.
solution: $\cos\frac{5\pi}{3} = \frac{1}{2}$, and $\arccos\frac{1}{2} = \frac{\pi}{3}$.
:::

::: problem id=x14 type=numeric answer="-pi/4" set=extra
$\arctan\left(\tan\frac{3\pi}{4}\right) = ?$
hint: First work out $\tan\frac{3\pi}{4}$.
solution: $\tan\frac{3\pi}{4} = -1$, and $\arctan(-1) = -\frac{\pi}{4}$.
:::

::: problem id=x15 type=numeric answer="4/5" set=extra
$\cos\left(\arcsin\left(-\frac{3}{5}\right)\right) = ?$
hint: Which quadrant is $\arcsin\left(-\frac{3}{5}\right)$ in?
solution: The angle is between $-\frac{\pi}{2}$ and 0 (quadrant IV), where cosine is positive: $\sqrt{1 - \frac{9}{25}} = \frac{4}{5}$.
:::

::: problem id=x16 type=numeric answer="66.42" tolerance="0.01" set=extra
Use a calculator in degree mode. A 5 m ladder has its foot 2 m from a wall. The angle with the ground is $\arccos\frac{2}{5}$. What is it in degrees? (to hundredths)
solution: $\arccos 0.4 \approx 66.42°$.
:::

::: problem id=x17 type=choice set=extra
For $0 \le x \le 1$, $\cos(\arcsin x)$ equals:
- [ ] $\frac{1}{x}$
- [x] $\sqrt{1 - x^2}$
- [ ] $1 - x$
- [ ] $\frac{x}{\sqrt{1 - x^2}}$
solution: Opposite x, hypotenuse 1, adjacent $\sqrt{1 - x^2}$. So the cosine is $\sqrt{1 - x^2}$.
:::

::: problem id=x18 type=numeric answer="-sqrt(3)" set=extra
$\tan\left(\arccos\left(-\frac{1}{2}\right)\right) = ?$
hint: Find the angle first.
solution: $\arccos\left(-\frac{1}{2}\right) = \frac{2\pi}{3}$. $\tan\frac{2\pi}{3} = \frac{\sqrt{3}/2}{-1/2} = -\sqrt{3}$.
:::

::: problem id=x19 type=numeric answer="pi/2" set=extra
$\arcsin\frac{1}{2} + \arccos\frac{1}{2} = ?$
solution: $\frac{\pi}{6} + \frac{\pi}{3} = \frac{\pi}{2}$.
:::

::: problem id=x20 type=numeric answer="sqrt(2)/2" set=extra creative=true
Solve $\arcsin x = \arccos x$.
hint: Both give the same angle θ, so $\sin\theta = \cos\theta = x$.
solution: Both ranges share $[0, \frac{\pi}{2}]$. $\sin\theta = \cos\theta$ there only at $\theta = \frac{\pi}{4}$, so $x = \frac{\sqrt{2}}{2}$.
:::
