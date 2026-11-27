---
id: unit-04
title: Trig identities and equations
---
::: rule
Identities that are always true:
- $\sin^2\theta + \cos^2\theta = 1$ (from the Pythagorean theorem on the unit circle)
- $\tan\theta = \frac{\sin\theta}{\cos\theta}$
- $\sin(-\theta) = -\sin\theta$ and $\cos(-\theta) = \cos\theta$

To solve $\sin x = k$, find one angle you know, then use the unit circle for the others.
:::

::: example
If $\sin\theta = \frac{3}{5}$ in quadrant I: $\cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$, so $\cos\theta = \frac{4}{5}$ and $\tan\theta = \frac{3}{4}$.
:::

::: problem id=p1 type=numeric answer="1"
$\sin^2\theta + \cos^2\theta = ?$
solution: Always **1**.
:::

::: problem id=p2 type=numeric answer="4/5"
$\sin\theta = \frac{3}{5}$ and θ is in quadrant I. What is $\cos\theta$?
solution: $\sqrt{1 - \frac{9}{25}} = \frac{4}{5}$.
:::

::: problem id=p3 type=numeric answer="3/4"
For the same θ, what is $\tan\theta$?
solution: $\frac{3/5}{4/5} = \frac{3}{4}$.
:::

::: problem id=p4 type=choice
$1 - \cos^2\theta$ equals:
- [x] $\sin^2\theta$
- [ ] $\tan^2\theta$
- [ ] $1$
solution: Rearrange $\sin^2\theta + \cos^2\theta = 1$.
:::

::: problem id=p5 type=numeric answer="pi/6"
What is the smallest positive x with $\sin x = \frac{1}{2}$? (radians)
solution: $\frac{\pi}{6}$ (30°).
:::

::: problem id=p6 type=numeric answer="pi/2"
What is the smallest positive x with $\cos x = 0$? (radians)
solution: $\frac{\pi}{2}$.
:::

::: problem id=p7 type=choice
$\sin(-x) = ?$
- [x] $-\sin x$
- [ ] $\sin x$
- [ ] $\cos x$
solution: Turning the other way flips the y-coordinate: $-\sin x$.
:::

::: problem id=p8 type=numeric answer="2"
$1 + \tan^2\frac{\pi}{4} = ?$
solution: $\tan\frac{\pi}{4} = 1$, so $1 + 1 = 2$.
:::

::: problem id=c1 type=numeric answer="4/5" creative=true
$\cos\theta = -\frac{3}{5}$ and θ is in quadrant II. What is $\sin\theta$?
hint: Use $\sin^2 + \cos^2 = 1$, then pick the sign for quadrant II.
solution: $\sin^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$. In quadrant II sine is positive: $\frac{4}{5}$.
:::

::: problem id=x1 type=numeric answer="12/13" set=extra
$\cos\theta = \frac{5}{13}$ and θ is in quadrant I. What is $\sin\theta$?
solution: $\sin^2\theta = 1 - \frac{25}{169} = \frac{144}{169}$, so $\sin\theta = \frac{12}{13}$.
:::

::: problem id=x2 type=numeric answer="12/5" set=extra
For the same θ, what is $\tan\theta$?
solution: $\frac{12/13}{5/13} = \frac{12}{5}$.
:::

::: problem id=x3 type=numeric answer="3/5" set=extra
$\sin\theta = -\frac{4}{5}$ and θ is in quadrant IV. What is $\cos\theta$?
solution: $\cos^2\theta = 1 - \frac{16}{25} = \frac{9}{25}$. Cosine is positive in IV: $\frac{3}{5}$.
:::

::: problem id=x4 type=numeric answer="2sqrt(2)/3" set=extra
$\sin\theta = \frac{1}{3}$ and θ is in quadrant I. What is $\cos\theta$? (exact)
solution: $\cos^2\theta = 1 - \frac{1}{9} = \frac{8}{9}$, $\cos\theta = \frac{2\sqrt{2}}{3}$.
:::

::: problem id=x5 type=choice set=extra
$1 - \sin^2\theta$ equals:
- [ ] $\tan^2\theta$
- [x] $\cos^2\theta$
- [ ] $-\cos^2\theta$
- [ ] 0
solution: Rearrange $\sin^2\theta + \cos^2\theta = 1$.
:::

::: problem id=x6 type=numeric answer="1/2" set=extra
$\cos\left(-\frac{\pi}{3}\right) = ?$
solution: $\cos(-\theta) = \cos\theta$: $\cos\frac{\pi}{3} = \frac{1}{2}$.
:::

::: problem id=x7 type=numeric answer="-1/2" set=extra
$\sin\left(-\frac{\pi}{6}\right) = ?$
solution: $\sin(-\theta) = -\sin\theta$: $-\frac{1}{2}$.
:::

::: problem id=x8 type=multi answers="pi/6;5pi/6" set=extra
Solve $\sin x = \frac{1}{2}$ for $0 \le x < 2\pi$.
solution: Sine is positive in I and II: $\frac{\pi}{6}$ and $\pi - \frac{\pi}{6} = \frac{5\pi}{6}$.
:::

::: problem id=x9 type=multi answers="2pi/3;4pi/3" set=extra
Solve $\cos x = -\frac{1}{2}$ for $0 \le x < 2\pi$.
solution: Reference angle $\frac{\pi}{3}$. Cosine is negative in II and III: $\frac{2\pi}{3}$, $\frac{4\pi}{3}$.
:::

::: problem id=x10 type=multi answers="5pi/4;7pi/4" set=extra
Solve $\sin x = -\frac{\sqrt{2}}{2}$ for $0 \le x < 2\pi$.
solution: Reference angle $\frac{\pi}{4}$. Sine is negative in III and IV: $\frac{5\pi}{4}$, $\frac{7\pi}{4}$.
:::

::: problem id=x11 type=multi answers="pi/4;5pi/4" set=extra
Solve $\tan x = 1$ for $0 \le x < 2\pi$.
solution: $\sin x = \cos x$ with the same sign: I and III. $\frac{\pi}{4}$ and $\frac{5\pi}{4}$.
:::

::: problem id=x12 type=choice set=extra
$\tan\theta \cos\theta$ equals:
- [x] $\sin\theta$
- [ ] $\cos^2\theta$
- [ ] 1
- [ ] $\tan^2\theta$
solution: $\frac{\sin\theta}{\cos\theta} \cdot \cos\theta = \sin\theta$.
:::

::: problem id=x13 type=multi answers="5pi/6;7pi/6" set=extra
Solve $2\cos x + \sqrt{3} = 0$ for $0 \le x < 2\pi$.
solution: $\cos x = -\frac{\sqrt{3}}{2}$. Reference $\frac{\pi}{6}$, quadrants II and III: $\frac{5\pi}{6}$, $\frac{7\pi}{6}$.
:::

::: problem id=x14 type=multi answers="pi/6;5pi/6;7pi/6;11pi/6" set=extra
Solve $\sin^2 x = \frac{1}{4}$ for $0 \le x < 2\pi$.
hint: $\sin x = \frac{1}{2}$ or $\sin x = -\frac{1}{2}$.
solution: $\frac{1}{2}$: $\frac{\pi}{6}, \frac{5\pi}{6}$. $-\frac{1}{2}$: $\frac{7\pi}{6}, \frac{11\pi}{6}$.
:::

::: problem id=x15 type=numeric answer="-4/5" set=extra
Lena says: "$\sin\theta = \frac{3}{5}$ with θ in quadrant II, so $\cos\theta = \frac{4}{5}$." Correct her: what is $\cos\theta$?
solution: Size $\frac{4}{5}$ is right, but cosine is negative in II: $-\frac{4}{5}$.
:::

::: problem id=x16 type=multi answers="pi/2;7pi/6;11pi/6" set=extra
Solve $2\sin^2 x - \sin x - 1 = 0$ for $0 \le x < 2\pi$.
hint: Factor it like $2u^2 - u - 1$ with $u = \sin x$.
solution: $(2\sin x + 1)(\sin x - 1) = 0$. $\sin x = 1$: $\frac{\pi}{2}$. $\sin x = -\frac{1}{2}$: $\frac{7\pi}{6}, \frac{11\pi}{6}$.
:::

::: problem id=x17 type=numeric answer="-4/5" set=extra
$\tan\theta = -\frac{3}{4}$ and θ is in quadrant II. What is $\cos\theta$?
hint: Think of a 3-4-5 triangle, then choose the signs for quadrant II.
solution: Sizes: $\sin = \frac{3}{5}$, $\cos = \frac{4}{5}$. In II cosine is negative: $-\frac{4}{5}$. (Check: $\frac{3/5}{-4/5} = -\frac{3}{4}$.)
:::

::: problem id=x18 type=multi answers="pi/6;pi/2;5pi/6" set=extra
Solve $2\cos^2 x + 3\sin x - 3 = 0$ for $0 \le x < 2\pi$.
hint: Replace $\cos^2 x$ by $1 - \sin^2 x$.
solution: $2 - 2\sin^2 x + 3\sin x - 3 = 0$, so $2\sin^2 x - 3\sin x + 1 = 0$, $(2\sin x - 1)(\sin x - 1) = 0$. $\sin x = \frac{1}{2}$ or 1: $\frac{\pi}{6}, \frac{5\pi}{6}, \frac{\pi}{2}$.
:::

::: problem id=x19 type=numeric answer="1" set=extra
$\sin^2\frac{\pi}{8} + \cos^2\frac{\pi}{8} = ?$
solution: True for every angle: **1**.
:::

::: problem id=x20 type=numeric answer="12/25" set=extra creative=true
$\sin\theta + \cos\theta = \frac{7}{5}$. What is $\sin\theta\cos\theta$?
hint: Square both sides.
solution: $\sin^2\theta + 2\sin\theta\cos\theta + \cos^2\theta = \frac{49}{25}$. So $1 + 2\sin\theta\cos\theta = \frac{49}{25}$ and $\sin\theta\cos\theta = \frac{12}{25}$.
:::
