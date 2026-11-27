---
id: vec-03
title: Polar coordinates
---
**Polar coordinates** describe a point by how far it is from the origin and in which direction, instead of by x and y.

::: rule
A point $(r, \theta)$ is r from the origin at angle θ from the positive x-axis.
- polar to rectangular: $x = r\cos\theta$, $y = r\sin\theta$
- rectangular to polar: $r^2 = x^2 + y^2$, $\tan\theta = \frac{y}{x}$ (pick θ in the quadrant of the point)
- a negative r points the opposite way: $(-r, \theta)$ is the same point as $(r, \theta + \pi)$
- **equations:** swap with $x = r\cos\theta$, $y = r\sin\theta$, $x^2 + y^2 = r^2$

Basic polar graphs:
- $r = a$: circle of radius a, centre the origin; $\theta = \alpha$: line through the origin
- $r = 2a\cos\theta$: circle centre $(a, 0)$, radius a; $r = 2a\sin\theta$: circle centre $(0, a)$, radius a
- $r = a(1 + \cos\theta)$: **cardioid** (heart shape)
- $r = a\cos(n\theta)$ or $a\sin(n\theta)$: **rose**, n petals if n is odd, 2n if n is even
:::

::: example
$(4, \frac{\pi}{3})$: $x = 4 \cdot \frac{1}{2} = 2$, $y = 4 \cdot \frac{\sqrt{3}}{2} = 2\sqrt{3}$.

$(-1, 1)$: $r = \sqrt{2}$; $\tan\theta = -1$ in quadrant II, so $\theta = \frac{3\pi}{4}$.
:::

::: example
$r = 6\sin\theta$. Multiply by r: $r^2 = 6r\sin\theta$, so $x^2 + y^2 = 6y$.

Complete the square: $x^2 + (y - 3)^2 = 9$. A circle with centre $(0, 3)$ and radius 3.
:::

::: graph
x -5..5
y -1..7
circle 0,3 3
point 0,3
:::

Type π as pi, like 3pi/4.

::: problem id=p1 type=point answer="0,2"
Click the point with polar coordinates $(2, \frac{\pi}{2})$.
graph:
x -3..3
y -3..3
solution: $x = 2\cos\frac{\pi}{2} = 0$, $y = 2\sin\frac{\pi}{2} = 2$.
:::

::: problem id=p2 type=point answer="-3,0"
Click the point with polar coordinates $(3, \pi)$.
graph:
x -4..4
y -4..4
solution: $x = 3\cos\pi = -3$, $y = 0$.
:::

::: problem id=p3 type=numeric answer="2sqrt(3)"
Convert $(4, \frac{\pi}{6})$ to rectangular. What is x?
solution: $4\cos\frac{\pi}{6} = 4 \cdot \frac{\sqrt{3}}{2} = 2\sqrt{3}$ (and $y = 2$).
:::

::: problem id=p4 type=numeric answer="3sqrt(2)"
Convert $(-3, 3)$ to polar. What is r?
solution: $\sqrt{9 + 9} = 3\sqrt{2}$.
:::

::: problem id=p5 type=numeric answer="3pi/4"
Convert $(-3, 3)$ to polar with $0 \le \theta < 2\pi$. What is θ?
solution: $\tan\theta = -1$ and the point is in quadrant II: $\theta = \frac{3\pi}{4}$.
:::

::: problem id=p6 type=choice
What is the graph of $r = 5$?
- [x] a circle of radius 5 around the origin
- [ ] the vertical line $x = 5$
- [ ] a line through the origin
- [ ] a rose with 5 petals
solution: Every point is 5 from the origin, in every direction.
:::

::: problem id=p7 type=choice
Which is $x^2 + y^2 = 4x$ in polar form?
- [x] $r = 4\cos\theta$
- [ ] $r = 4\sin\theta$
- [ ] $r = 4$
- [ ] $r = 2\cos\theta$
solution: $r^2 = 4r\cos\theta$, so $r = 4\cos\theta$.
:::

::: problem id=p8 type=numeric answer="3"
How many petals does the rose $r = \cos(3\theta)$ have?
solution: $n = 3$ is odd: 3 petals.
:::

::: problem id=x1 type=point answer="0,-1" set=extra
Click the point with polar coordinates $(1, \frac{3\pi}{2})$.
graph:
x -3..3
y -3..3
solution: $(\cos\frac{3\pi}{2}, \sin\frac{3\pi}{2}) = (0, -1)$.
:::

::: problem id=x2 type=point answer="2,2" set=extra
Click the point with polar coordinates $(2\sqrt{2}, \frac{\pi}{4})$.
graph:
x -3..3
y -3..3
solution: $2\sqrt{2} \cdot \frac{\sqrt{2}}{2} = 2$ for both: $(2, 2)$.
:::

::: problem id=x3 type=numeric answer="-3" set=extra
Convert $(6, \frac{2\pi}{3})$ to rectangular. What is x?
solution: $6\cos\frac{2\pi}{3} = 6 \cdot \left(-\frac{1}{2}\right) = -3$.
:::

::: problem id=x4 type=numeric answer="3sqrt(3)" set=extra
Convert $(6, \frac{2\pi}{3})$ to rectangular. What is y?
solution: $6\sin\frac{2\pi}{3} = 6 \cdot \frac{\sqrt{3}}{2} = 3\sqrt{3}$.
:::

::: problem id=x5 type=numeric answer="13" set=extra
Convert $(5, -12)$ to polar. What is r?
solution: $\sqrt{25 + 144} = 13$.
:::

::: problem id=x6 type=numeric answer="3pi/2" set=extra
Convert $(0, -4)$ to polar with $0 \le \theta < 2\pi$. What is θ?
solution: Straight down: $\theta = \frac{3\pi}{2}$ (and $r = 4$).
:::

::: problem id=x7 type=numeric answer="7pi/4" set=extra
Convert $(1, -1)$ to polar with $0 \le \theta < 2\pi$. What is θ?
solution: $\tan\theta = -1$ in quadrant IV: $\theta = \frac{7\pi}{4}$.
:::

::: problem id=x8 type=choice set=extra
What is the graph of $\theta = \frac{\pi}{4}$?
- [x] a line through the origin
- [ ] a circle
- [ ] a horizontal line
- [ ] a single point
solution: All points at angle $\frac{\pi}{4}$ (with any r, also negative): the line $y = x$.
:::

::: problem id=x9 type=choice set=extra
What is the graph of $r = 4\sin\theta$?
- [x] a circle with centre $(0, 2)$, radius 2
- [ ] a circle with centre $(2, 0)$, radius 2
- [ ] a circle with centre $(0, 0)$, radius 4
- [ ] a cardioid
solution: $r = 2a\sin\theta$ with $a = 2$.
:::

::: problem id=x10 type=choice set=extra
What is $r\cos\theta = 3$ in rectangular form?
- [x] $x = 3$
- [ ] $y = 3$
- [ ] $x^2 + y^2 = 9$
- [ ] $y = 3x$
solution: $r\cos\theta$ is x.
:::

::: problem id=x11 type=choice set=extra
What is the graph of $r = 2 + 2\cos\theta$?
- [x] a cardioid
- [ ] a circle
- [ ] a rose
- [ ] a line
solution: It is $a(1 + \cos\theta)$ with $a = 2$.
:::

::: problem id=x12 type=numeric answer="4" set=extra
How many petals does $r = \sin(2\theta)$ have?
solution: $n = 2$ is even: $2n = 4$ petals.
:::

::: problem id=x13 type=numeric answer="5" set=extra
How many petals does $r = 4\cos(5\theta)$ have?
solution: $n = 5$ is odd: 5 petals (each 4 long).
:::

::: problem id=x14 type=numeric answer="4pi/3" set=extra
Sam converts $(-1, -\sqrt{3})$ and says $\theta = \arctan\sqrt{3} = \frac{\pi}{3}$. What is θ really, with $0 \le \theta < 2\pi$?
solution: The point is in quadrant III, so add π: $\frac{\pi}{3} + \pi = \frac{4\pi}{3}$.
:::

::: problem id=x15 type=numeric answer="4" set=extra
Write $r = 2$ in rectangular form: $x^2 + y^2 = ?$
solution: $r^2 = 4$.
:::

::: problem id=x16 type=numeric answer="4" set=extra
$r = 8\cos\theta$ is a circle. What is its radius?
hint: Multiply by r and complete the square.
solution: $x^2 + y^2 = 8x$, so $(x - 4)^2 + y^2 = 16$: radius 4.
:::

::: problem id=x17 type=point answer="-3,0" set=extra
$r = -6\cos\theta$ is a circle. Click its centre.
graph:
x -7..3
y -4..4
hint: Multiply both sides by r.
solution: $x^2 + y^2 = -6x$, so $(x + 3)^2 + y^2 = 9$: centre $(-3, 0)$.
:::

::: problem id=x18 type=numeric answer="5" set=extra
How far apart are the polar points $(3, 0)$ and $(4, \frac{\pi}{2})$?
hint: Convert both to rectangular.
solution: They are $(3, 0)$ and $(0, 4)$: distance $\sqrt{9 + 16} = 5$.
:::

::: problem id=x19 type=numeric answer="-1" set=extra
Convert $(-2, \frac{\pi}{3})$ to rectangular. What is x?
hint: A negative r points the opposite way; the formulas still work.
solution: $x = -2\cos\frac{\pi}{3} = -1$ (and $y = -\sqrt{3}$).
:::

::: problem id=x20 type=numeric answer="pi/3" set=extra creative=true
The circles $r = 2\cos\theta$ and $r = 1$ meet in the first quadrant. At what angle θ?
hint: Set the two r values equal.
solution: $2\cos\theta = 1$, so $\cos\theta = \frac{1}{2}$ and $\theta = \frac{\pi}{3}$.
:::
