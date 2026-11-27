---
id: vec-test
title: Vectors, parametric equations and polar coordinates test
pass: 0.8
---
::: problem id=t1 type=numeric answer="10"
What is the magnitude of $\langle -8, 6 \rangle$?
solution: $\sqrt{64 + 36} = 10$.
:::

::: problem id=t2 type=point answer="-3,4"
Find the vector from $P(2, -1)$ to $Q(-1, 3)$. Drawn from the origin, where is its tip?
graph:
x -5..5
y -5..5
solution: $\langle -1 - 2, 3 - (-1) \rangle = \langle -3, 4 \rangle$.
:::

::: problem id=t3 type=numeric answer="8"
What is the y-component of $2\langle 1, 3 \rangle - \langle 4, -2 \rangle$?
solution: $6 - (-2) = 8$.
:::

::: problem id=t4 type=numeric answer="-1"
$\langle 5, -2 \rangle \cdot \langle 1, 3 \rangle = ?$
solution: $5 - 6 = -1$.
:::

::: problem id=t5 type=numeric answer="120"
What is the angle between $\langle 1, 0 \rangle$ and $\langle -1, \sqrt{3} \rangle$, in degrees?
solution: $\cos\theta = \frac{-1}{1 \cdot 2} = -\frac{1}{2}$, so $\theta = 120°$.
:::

::: problem id=t6 type=numeric answer="4/5"
What is the x-component of the unit vector in the direction of $\langle 8, -6 \rangle$?
solution: $|v| = 10$: $\frac{8}{10} = \frac{4}{5}$.
:::

::: problem id=t7 type=numeric answer="4"
For which k is $\langle k, 2 \rangle$ perpendicular to $\langle 3, -6 \rangle$?
solution: $3k - 12 = 0$, $k = 4$.
:::

::: problem id=t8 type=numeric answer="3"
A vector of magnitude 6 has direction angle 60°. What is its x-component?
solution: $6\cos 60° = 3$.
:::

::: problem id=t9 type=point answer="-1,4"
$x = 1 - t$, $y = t^2$. Click the point at $t = 2$.
graph:
x -5..5
y -5..5
solution: $x = -1$, $y = 4$.
:::

::: problem id=t10 type=expression answer="4x+12"
Eliminate the parameter: $x = t - 3$, $y = 4t$. Write $y = \ldots$
solution: $t = x + 3$: $y = 4x + 12$.
:::

::: problem id=t11 type=choice
What does $x = 4\cos t$, $y = 4\sin t$ trace?
- [x] a circle of radius 4
- [ ] an ellipse with axes 4 and 8
- [ ] a line
- [ ] a parabola
solution: $x^2 + y^2 = 16$.
:::

::: problem id=t12 type=point answer="1,-2"
Click the centre of $x = 1 + 3\cos t$, $y = -2 + 3\sin t$.
graph:
x -5..5
y -5..5
solution: $(x - 1)^2 + (y + 2)^2 = 9$: centre $(1, -2)$.
:::

::: problem id=t13 type=numeric answer="40"
A ball moves by $x = 10t$, $y = 20t - 5t^2$. How far does it travel horizontally before it lands?
solution: $5t(4 - t) = 0$ at $t = 4$: $x = 40$.
:::

::: problem id=t14 type=point answer="-4,0"
Click the point with polar coordinates $(4, \pi)$.
graph:
x -5..5
y -5..5
solution: $(4\cos\pi, 4\sin\pi) = (-4, 0)$.
:::

::: problem id=t15 type=numeric answer="sqrt(3)"
Convert $(2, \frac{\pi}{3})$ to rectangular. What is y?
solution: $2\sin\frac{\pi}{3} = \sqrt{3}$.
:::

::: problem id=t16 type=numeric answer="5pi/6"
Convert $(-\sqrt{3}, 1)$ to polar with $0 \le \theta < 2\pi$. What is θ?
solution: $r = 2$; $\tan\theta = -\frac{1}{\sqrt{3}}$ in quadrant II: $\theta = \frac{5\pi}{6}$.
:::

::: problem id=t17 type=choice
What is the graph of $r = 6\cos\theta$?
- [x] a circle with centre $(3, 0)$, radius 3
- [ ] a circle with centre $(0, 3)$, radius 3
- [ ] a circle with centre $(0, 0)$, radius 6
- [ ] a cardioid
solution: $x^2 + y^2 = 6x$, so $(x - 3)^2 + y^2 = 9$.
:::

::: problem id=t18 type=numeric answer="8"
How many petals does $r = 3\sin(4\theta)$ have?
solution: $n = 4$ is even: 8 petals.
:::
