---
id: unit-02
title: The unit circle
---
::: rule
On the **unit circle** (radius 1, centre at the origin), turn an angle θ counter-clockwise from the positive x-axis. The point you land on is

$$(\cos\theta, \sin\theta)$$

This defines sine and cosine for **any** angle. Signs by quadrant: in I both are +, in II only sin is +, in III both are −, in IV only cos is +.
:::

::: example
$\theta = \frac{\pi}{2}$ lands at the top, $(0, 1)$: so $\cos\frac{\pi}{2} = 0$ and $\sin\frac{\pi}{2} = 1$.
:::

::: graph
x -1.5..1.5
y -1.5..1.5
circle 0,0 1
point 1,0 0
point 0,1 π/2 blue
point -1,0 π blue
point 0,-1 3π/2 blue
point 0.866,0.5 π/6 red
:::

::: problem id=p1 type=numeric answer="1"
$\cos 0 = ?$
solution: Angle 0 is at $(1, 0)$: $\cos 0 = 1$.
:::

::: problem id=p2 type=numeric answer="1"
$\sin \frac{\pi}{2} = ?$
solution: The top point $(0, 1)$: **1**.
:::

::: problem id=p3 type=numeric answer="-1"
$\cos \pi = ?$
solution: Angle π is at $(-1, 0)$: **−1**.
:::

::: problem id=p4 type=point answer="-1,0"
Click where the angle π lands on the unit circle.
graph:
x -2..2
y -2..2
circle 0,0 1
solution: Half a turn: $(-1, 0)$.
:::

::: problem id=p5 type=point answer="0,-1"
Click where the angle $\frac{3\pi}{2}$ lands on the unit circle.
graph:
x -2..2
y -2..2
circle 0,0 1
solution: Three quarters of a turn: $(0, -1)$.
:::

::: problem id=p6 type=numeric answer="1/2"
$\sin \frac{\pi}{6} = ?$
hint: $\frac{\pi}{6} = 30°$.
solution: $\sin 30° = \frac{1}{2}$.
:::

::: problem id=p7 type=numeric answer="-1/2"
$\cos \frac{2\pi}{3} = ?$
hint: $\frac{2\pi}{3} = 120°$ is in quadrant II, 60° from the negative x-axis.
solution: Same size as $\cos 60° = \frac{1}{2}$, but negative in quadrant II: $-\frac{1}{2}$.
:::

::: problem id=p8 type=choice
In quadrant III, $\sin\theta$ is:
- [ ] positive
- [x] negative
solution: Points in quadrant III have negative y: **negative**.
:::

::: problem id=x1 type=numeric answer="0" set=extra
$\sin \pi = ?$
solution: Angle π is at $(-1, 0)$: y is **0**.
:::

::: problem id=x2 type=numeric answer="0" set=extra
$\cos \frac{3\pi}{2} = ?$
solution: $\frac{3\pi}{2}$ is at $(0, -1)$: x is **0**.
:::

::: problem id=x3 type=numeric answer="sqrt(2)/2" set=extra
$\sin \frac{\pi}{4} = ?$ (exact)
solution: $\frac{\pi}{4} = 45°$: $\frac{\sqrt{2}}{2}$.
:::

::: problem id=x4 type=numeric answer="1/2" set=extra
$\cos \frac{\pi}{3} = ?$
solution: $\cos 60° = \frac{1}{2}$.
:::

::: problem id=x5 type=numeric answer="1/2" set=extra
$\sin \frac{5\pi}{6} = ?$
hint: $\frac{5\pi}{6} = 150°$, in quadrant II, 30° from the negative x-axis.
solution: Same size as $\sin 30°$, and sine is positive in II: $\frac{1}{2}$.
:::

::: problem id=x6 type=numeric answer="-sqrt(2)/2" set=extra
$\cos \frac{5\pi}{4} = ?$ (exact)
solution: $225°$ is in quadrant III, 45° past π. Cosine is negative there: $-\frac{\sqrt{2}}{2}$.
:::

::: problem id=x7 type=numeric answer="-1/2" set=extra
$\sin \frac{7\pi}{6} = ?$
solution: $210°$: quadrant III, 30° past π. Sine negative: $-\frac{1}{2}$.
:::

::: problem id=x8 type=numeric answer="sqrt(3)/2" set=extra
$\cos \frac{11\pi}{6} = ?$ (exact)
solution: $330°$: quadrant IV, 30° short of a full turn. Cosine positive: $\frac{\sqrt{3}}{2}$.
:::

::: problem id=x9 type=point answer="1,0" set=extra
Click where the angle $2\pi$ lands on the unit circle.
graph:
x -2..2
y -2..2
circle 0,0 1
solution: A full turn brings you back to $(1, 0)$.
:::

::: problem id=x10 type=choice set=extra
In quadrant IV:
- [ ] sin and cos are both positive
- [x] cos is positive, sin is negative
- [ ] sin is positive, cos is negative
- [ ] both are negative
solution: Quadrant IV points have $x > 0$, $y < 0$.
:::

::: problem id=x11 type=choice set=extra
Which quadrant does the angle 2 (radians) end in?
- [ ] I
- [x] II
- [ ] III
- [ ] IV
solution: $\frac{\pi}{2} \approx 1.57 < 2 < \pi \approx 3.14$: quadrant **II**.
:::

::: problem id=x12 type=numeric answer="3pi/2" set=extra
Which angle θ with $0 \le \theta < 2\pi$ lands at $(0, -1)$?
solution: Three quarters of a turn: $\frac{3\pi}{2}$.
:::

::: problem id=x13 type=multi answers="pi/2;3pi/2" set=extra
Find all θ with $0 \le \theta < 2\pi$ and $\cos\theta = 0$.
solution: x is 0 at the top and bottom of the circle: $\frac{\pi}{2}$ and $\frac{3\pi}{2}$.
:::

::: problem id=x14 type=numeric answer="-1" set=extra
$\sin\left(-\frac{\pi}{2}\right) = ?$
solution: A negative angle turns clockwise: a quarter turn lands at $(0, -1)$. So $-1$.
:::

::: problem id=x15 type=numeric answer="5pi/6" set=extra
Which angle θ with $0 \le \theta < 2\pi$ lands at $\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$?
solution: Quadrant II with $\sin\theta = \frac{1}{2}$: 30° short of π, so $\frac{5\pi}{6}$.
:::

::: problem id=x16 type=numeric answer="1" set=extra
$\cos 4\pi = ?$
solution: Two full turns: back at $(1, 0)$. **1**.
:::

::: problem id=x17 type=numeric answer="-sqrt(2)/2" set=extra
What is the x-coordinate of the point where $\frac{3\pi}{4}$ lands on the unit circle? (exact)
hint: $\frac{3\pi}{4} = 135°$, in quadrant II.
solution: 45° from the negative x-axis: $x = -\frac{\sqrt{2}}{2}$.
:::

::: problem id=x18 type=numeric answer="1/2" set=extra
$\sin \frac{13\pi}{6} = ?$
hint: $\frac{13\pi}{6} = 2\pi + \frac{\pi}{6}$.
solution: One full turn plus $\frac{\pi}{6}$ lands at the same point as $\frac{\pi}{6}$: $\frac{1}{2}$.
:::

::: problem id=x19 type=numeric answer="4/5" set=extra
A point P on the unit circle is in quadrant II with x-coordinate $-\frac{3}{5}$. What is its y-coordinate?
hint: Points on the unit circle satisfy $x^2 + y^2 = 1$.
solution: $y^2 = 1 - \frac{9}{25} = \frac{16}{25}$. In quadrant II, y is positive: $\frac{4}{5}$.
:::

::: problem id=x20 type=numeric answer="0" set=extra creative=true
Work out $\sin\frac{\pi}{6} + \sin\frac{5\pi}{6} + \sin\frac{7\pi}{6} + \sin\frac{11\pi}{6}$.
hint: Picture the four points: they are mirror images.
solution: $\frac{1}{2} + \frac{1}{2} - \frac{1}{2} - \frac{1}{2} = 0$. The points pair up above and below the x-axis.
:::
