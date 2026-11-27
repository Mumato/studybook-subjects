---
id: unit-06
title: Sum, difference and double-angle formulas
---
$\sin(A + B)$ is **not** $\sin A + \sin B$. These formulas give the right answer, and exact values for angles like 15° and 75°.

::: rule
**Sum and difference:**
- $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$
- $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$
- $\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$

**Double angle** (put $B = A$):
- $\sin 2A = 2\sin A\cos A$
- $\cos 2A = \cos^2 A - \sin^2 A$
  $= 2\cos^2 A - 1 = 1 - 2\sin^2 A$
- $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$
:::

::: example
$\sin 75° = \sin(45° + 30°)$

$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$

$= \frac{\sqrt{6} + \sqrt{2}}{4} \approx 0.966$
:::

::: example
$\sin\theta = \frac{3}{5}$, θ in quadrant I, so $\cos\theta = \frac{4}{5}$.

$\sin 2\theta = 2 \cdot \frac{3}{5} \cdot \frac{4}{5} = \frac{24}{25}$

$\cos 2\theta = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}$
:::

::: problem id=p1 type=numeric answer="(sqrt(6)-sqrt(2))/4"
$\cos 75° = ?$ (exact)
hint: $75° = 45° + 30°$.
solution: $\cos 45°\cos 30° - \sin 45°\sin 30°$ $= \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4} = \frac{\sqrt{6} - \sqrt{2}}{4}$.
:::

::: problem id=p2 type=numeric answer="(sqrt(6)+sqrt(2))/4"
$\cos 15° = ?$ (exact)
hint: $15° = 45° - 30°$.
solution: $\cos 45°\cos 30° + \sin 45°\sin 30°$ $= \frac{\sqrt{6} + \sqrt{2}}{4}$.
:::

::: problem id=p3 type=numeric answer="(sqrt(6)-sqrt(2))/4"
$\sin 15° = ?$ (exact)
solution: $\sin 45°\cos 30° - \cos 45°\sin 30°$ $= \frac{\sqrt{6} - \sqrt{2}}{4}$.
:::

::: problem id=p4 type=numeric answer="2+sqrt(3)"
$\tan 75° = ?$ (exact)
hint: Use $\tan(45° + 30°)$ with $\tan 30° = \frac{1}{\sqrt{3}}$.
solution: $\frac{1 + \frac{1}{\sqrt{3}}}{1 - \frac{1}{\sqrt{3}}} = \frac{\sqrt{3} + 1}{\sqrt{3} - 1}$. Multiply top and bottom by $\sqrt{3} + 1$: $\frac{4 + 2\sqrt{3}}{2} = 2 + \sqrt{3}$.
:::

::: problem id=p5 type=numeric answer="24/25"
$\sin\theta = \frac{4}{5}$ and θ is in quadrant I. What is $\sin 2\theta$?
solution: $\cos\theta = \frac{3}{5}$. $\sin 2\theta = 2 \cdot \frac{4}{5} \cdot \frac{3}{5} = \frac{24}{25}$.
:::

::: problem id=p6 type=numeric answer="-7/25"
For the same θ, what is $\cos 2\theta$?
solution: $\cos^2\theta - \sin^2\theta = \frac{9}{25} - \frac{16}{25} = -\frac{7}{25}$.
:::

::: problem id=p7 type=numeric answer="sqrt(3)/2"
$\sin 40°\cos 20° + \cos 40°\sin 20° = ?$ (exact)
solution: This is $\sin(40° + 20°) = \sin 60° = \frac{\sqrt{3}}{2}$.
:::

::: problem id=p8 type=multi answers="0;pi/3;pi;5pi/3"
Solve $\sin 2x = \sin x$ for $0 \le x < 2\pi$.
hint: Write $\sin 2x = 2\sin x\cos x$, move everything to one side and factor. Don't divide by $\sin x$.
solution: $\sin x(2\cos x - 1) = 0$. $\sin x = 0$: $0, \pi$. $\cos x = \frac{1}{2}$: $\frac{\pi}{3}, \frac{5\pi}{3}$.
:::

::: problem id=x1 type=numeric answer="(sqrt(2)-sqrt(6))/4" set=extra
$\cos 105° = ?$ (exact)
hint: $105° = 60° + 45°$.
solution: $\cos 60°\cos 45° - \sin 60°\sin 45°$ $= \frac{\sqrt{2}}{4} - \frac{\sqrt{6}}{4} = \frac{\sqrt{2} - \sqrt{6}}{4}$.
:::

::: problem id=x2 type=numeric answer="(sqrt(6)+sqrt(2))/4" set=extra
$\sin 105° = ?$ (exact)
solution: $\sin 60°\cos 45° + \cos 60°\sin 45°$ $= \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4}$.
:::

::: problem id=x3 type=numeric answer="2-sqrt(3)" set=extra
$\tan 15° = ?$ (exact)
hint: $\tan(45° - 30°)$.
solution: $\frac{1 - \frac{1}{\sqrt{3}}}{1 + \frac{1}{\sqrt{3}}} = \frac{\sqrt{3} - 1}{\sqrt{3} + 1} = \frac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3}$.
:::

::: problem id=x4 type=numeric answer="1/2" set=extra
$\cos 80°\cos 20° + \sin 80°\sin 20° = ?$
solution: $\cos(80° - 20°) = \cos 60° = \frac{1}{2}$.
:::

::: problem id=x5 type=numeric answer="1/2" set=extra
$\sin 50°\cos 20° - \cos 50°\sin 20° = ?$
solution: $\sin(50° - 20°) = \sin 30° = \frac{1}{2}$.
:::

::: problem id=x6 type=numeric answer="sqrt(2)/2" set=extra
$2\sin 22.5°\cos 22.5° = ?$ (exact)
solution: $\sin(2 \cdot 22.5°) = \sin 45° = \frac{\sqrt{2}}{2}$.
:::

::: problem id=x7 type=numeric answer="sqrt(3)/2" set=extra
$\cos^2 15° - \sin^2 15° = ?$ (exact)
solution: $\cos(2 \cdot 15°) = \cos 30° = \frac{\sqrt{3}}{2}$.
:::

::: problem id=x8 type=numeric answer="-sqrt(2)/2" set=extra
$2\cos^2\frac{3\pi}{8} - 1 = ?$ (exact)
solution: $\cos\left(2 \cdot \frac{3\pi}{8}\right) = \cos\frac{3\pi}{4} = -\frac{\sqrt{2}}{2}$.
:::

::: problem id=x9 type=numeric answer="120/169" set=extra
$\cos\theta = \frac{5}{13}$ and θ is in quadrant I. What is $\sin 2\theta$?
solution: $\sin\theta = \frac{12}{13}$. $2 \cdot \frac{12}{13} \cdot \frac{5}{13} = \frac{120}{169}$.
:::

::: problem id=x10 type=numeric answer="-119/169" set=extra
For the same θ, what is $\cos 2\theta$?
solution: $\frac{25}{169} - \frac{144}{169} = -\frac{119}{169}$.
:::

::: problem id=x11 type=numeric answer="-4/3" set=extra
$\tan\theta = 2$. What is $\tan 2\theta$?
solution: $\frac{2 \cdot 2}{1 - 4} = -\frac{4}{3}$.
:::

::: problem id=x12 type=choice set=extra
Which is equal to $\cos 2x$ for every x?
- [ ] $2\cos x$
- [x] $1 - 2\sin^2 x$
- [ ] $1 - \sin^2 x$
- [ ] $2\sin x\cos x$
solution: $\cos 2x = 1 - 2\sin^2 x$. ($1 - \sin^2 x = \cos^2 x$, and $2\sin x\cos x = \sin 2x$.)
:::

::: problem id=x13 type=choice set=extra
Max writes $\sin 75° = \sin 45° + \sin 30°$ $= \frac{\sqrt{2}}{2} + \frac{1}{2} \approx 1.21$. How can you tell at once it is wrong?
- [x] A sine can never be more than 1
- [ ] $\sin 75°$ is negative
- [ ] $\sin 30°$ is not $\frac{1}{2}$
- [ ] It is right
solution: Sine values lie between $-1$ and 1. The right value is $\frac{\sqrt{6} + \sqrt{2}}{4} \approx 0.97$.
:::

::: problem id=x14 type=numeric answer="63/65" set=extra
$\sin A = \frac{3}{5}$ and $\cos B = \frac{5}{13}$, both angles in quadrant I. What is $\sin(A + B)$?
solution: $\cos A = \frac{4}{5}$, $\sin B = \frac{12}{13}$. $\frac{3}{5} \cdot \frac{5}{13} + \frac{4}{5} \cdot \frac{12}{13} = \frac{15 + 48}{65} = \frac{63}{65}$.
:::

::: problem id=x15 type=numeric answer="56/65" set=extra
For the same A and B, what is $\cos(A - B)$?
solution: $\frac{4}{5} \cdot \frac{5}{13} + \frac{3}{5} \cdot \frac{12}{13} = \frac{20 + 36}{65} = \frac{56}{65}$.
:::

::: problem id=x16 type=multi answers="0;2pi/3;4pi/3" set=extra
Solve $\cos 2x = \cos x$ for $0 \le x < 2\pi$.
hint: Use $\cos 2x = 2\cos^2 x - 1$ and factor.
solution: $2\cos^2 x - \cos x - 1 = 0$, $(2\cos x + 1)(\cos x - 1) = 0$. $\cos x = 1$: 0. $\cos x = -\frac{1}{2}$: $\frac{2\pi}{3}, \frac{4\pi}{3}$.
:::

::: problem id=x17 type=multi answers="pi/2;7pi/6;11pi/6" set=extra
Solve $\cos 2x + \sin x = 0$ for $0 \le x < 2\pi$.
hint: Use $\cos 2x = 1 - 2\sin^2 x$.
solution: $1 - 2\sin^2 x + \sin x = 0$, so $2\sin^2 x - \sin x - 1 = 0$, $(2\sin x + 1)(\sin x - 1) = 0$. $\sin x = 1$: $\frac{\pi}{2}$. $\sin x = -\frac{1}{2}$: $\frac{7\pi}{6}, \frac{11\pi}{6}$.
:::

::: problem id=x18 type=numeric answer="24/25" set=extra
$\sin\theta = -\frac{3}{5}$ and θ is in quadrant III. What is $\sin 2\theta$?
hint: Find $\cos\theta$ with the right sign first.
solution: In III, $\cos\theta = -\frac{4}{5}$. $\sin 2\theta = 2\left(-\frac{3}{5}\right)\left(-\frac{4}{5}\right) = \frac{24}{25}$.
:::

::: problem id=x19 type=choice set=extra
Use the sum formula: $\sin\left(x + \frac{\pi}{2}\right)$ equals
- [x] $\cos x$
- [ ] $-\cos x$
- [ ] $\sin x + 1$
- [ ] $-\sin x$
hint: $\cos\frac{\pi}{2} = 0$ and $\sin\frac{\pi}{2} = 1$.
solution: $\sin x \cdot 0 + \cos x \cdot 1 = \cos x$.
:::

::: problem id=x20 type=expression answer="4c^3-3c" vars="c" set=extra creative=true
Write $\cos 3\theta$ in terms of $c = \cos\theta$.
hint: $\cos 3\theta = \cos(2\theta + \theta)$. Then use $\sin^2\theta = 1 - c^2$.
solution: $\cos 2\theta\cos\theta - \sin 2\theta\sin\theta$ $= (2c^2 - 1)c - 2\sin^2\theta \cdot c$ $= 2c^3 - c - 2c(1 - c^2) = 4c^3 - 3c$.
:::
