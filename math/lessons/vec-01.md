---
id: vec-01
title: Vectors
---
A **vector** has a size and a direction, like a velocity or a force. In the plane it is written with two components.

::: rule
- The vector from $P(x_1, y_1)$ to $Q(x_2, y_2)$ is $\langle x_2 - x_1,\, y_2 - y_1 \rangle$.
- **Magnitude:** $|\langle a, b \rangle| = \sqrt{a^2 + b^2}$.
- **Direction angle** θ (from the positive x-axis): $\tan\theta = \frac{b}{a}$, choosing the quadrant of $(a, b)$. Back to components: $\langle |v|\cos\theta,\, |v|\sin\theta \rangle$.
- **Add** and **scale** component by component: $\langle a, b \rangle + \langle c, d \rangle = \langle a + c, b + d \rangle$, $k\langle a, b \rangle = \langle ka, kb \rangle$.
- **Unit vector** (length 1) in the direction of v: $\frac{v}{|v|}$.
- **Dot product:** $u \cdot v = u_1v_1 + u_2v_2 = |u||v|\cos\theta$, where θ is the angle between them. $u \cdot v = 0$ means **perpendicular**.
:::

::: example
$u = \langle 3, 4 \rangle$, $v = \langle 1, -2 \rangle$.

$|u| = \sqrt{9 + 16} = 5$, unit vector $\langle \frac{3}{5}, \frac{4}{5} \rangle$.

$u + v = \langle 4, 2 \rangle$ and $2u - v = \langle 5, 10 \rangle$.
:::

::: example
Angle between $u = \langle 3, 4 \rangle$ and $v = \langle 1, -2 \rangle$:

$u \cdot v = 3 - 8 = -5$, $|v| = \sqrt{5}$.

$\cos\theta = \frac{-5}{5\sqrt{5}} = -\frac{1}{\sqrt{5}}$, so $\theta \approx 116.6°$.
:::

Type degree answers as plain numbers, like 45.

::: problem id=p1 type=numeric answer="10"
What is the magnitude of $\langle 6, 8 \rangle$?
solution: $\sqrt{36 + 64} = 10$.
:::

::: problem id=p2 type=point answer="3,-3"
Find the vector from $P(1, 2)$ to $Q(4, -1)$. Drawn from the origin, where is its tip?
graph:
x -5..5
y -5..5
solution: $\langle 4 - 1, -1 - 2 \rangle = \langle 3, -3 \rangle$: tip at $(3, -3)$.
:::

::: problem id=p3 type=numeric answer="2"
$u = \langle 2, -1 \rangle$ and $v = \langle -3, 5 \rangle$. What is the y-component of $3u + v$?
solution: $3(-1) + 5 = 2$. (The vector is $\langle 3, 2 \rangle$.)
:::

::: problem id=p4 type=numeric answer="5"
$\langle 2, 3 \rangle \cdot \langle 4, -1 \rangle = ?$
solution: $8 - 3 = 5$.
:::

::: problem id=p5 type=text answers="yes"
Are $\langle 2, 6 \rangle$ and $\langle 3, -1 \rangle$ perpendicular? Type yes or no.
solution: $6 - 6 = 0$: **yes**.
:::

::: problem id=p6 type=numeric answer="45"
What is the angle between $\langle 1, 0 \rangle$ and $\langle 1, 1 \rangle$, in degrees?
solution: $\cos\theta = \frac{1}{1 \cdot \sqrt{2}}$, so $\theta = 45°$.
:::

::: problem id=p7 type=numeric answer="5/13"
What is the x-component of the unit vector in the direction of $\langle 5, -12 \rangle$?
solution: $|v| = 13$: unit vector $\langle \frac{5}{13}, -\frac{12}{13} \rangle$.
:::

::: problem id=p8 type=numeric answer="5sqrt(3)"
A vector has magnitude 10 and direction angle 30°. What is its x-component?
solution: $10\cos 30° = 10 \cdot \frac{\sqrt{3}}{2} = 5\sqrt{3}$.
:::

::: problem id=c1 type=numeric answer="5" creative=true
Two forces $\langle 4, 1 \rangle$ and $\langle -1, 3 \rangle$ act on an object. A third force makes the total zero. How big is the third force?
hint: The third force is minus the sum of the other two.
solution: Sum $\langle 3, 4 \rangle$, so the third force is $\langle -3, -4 \rangle$.
Its magnitude is $\sqrt{9 + 16} = 5$.
:::

::: problem id=x1 type=numeric answer="13" set=extra
What is the magnitude of $\langle -5, 12 \rangle$?
solution: $\sqrt{25 + 144} = 13$.
:::

::: problem id=x2 type=numeric answer="2sqrt(2)" set=extra
What is the magnitude of $\langle 2, -2 \rangle$?
solution: $\sqrt{8} = 2\sqrt{2}$.
:::

::: problem id=x3 type=point answer="3,2" set=extra
Find the vector from $P(-2, 3)$ to $Q(1, 5)$. Drawn from the origin, where is its tip?
graph:
x -5..5
y -5..5
solution: $\langle 1 - (-2), 5 - 3 \rangle = \langle 3, 2 \rangle$.
:::

::: problem id=x4 type=numeric answer="6" set=extra
$u = \langle 1, 4 \rangle$ and $v = \langle 3, -2 \rangle$. What is the y-component of $u - v$?
solution: $4 - (-2) = 6$.
:::

::: problem id=x5 type=numeric answer="-6" set=extra
What is the x-component of $-2\langle 3, -5 \rangle$?
solution: $-2 \times 3 = -6$.
:::

::: problem id=x6 type=numeric answer="6" set=extra
$\langle -1, 5 \rangle \cdot \langle 4, 2 \rangle = ?$
solution: $-4 + 10 = 6$.
:::

::: problem id=x7 type=choice set=extra
Which pair is perpendicular?
- [x] $\langle 3, -2 \rangle$ and $\langle 2, 3 \rangle$
- [ ] $\langle 1, 2 \rangle$ and $\langle 2, 1 \rangle$
- [ ] $\langle 1, 1 \rangle$ and $\langle 1, -2 \rangle$
- [ ] $\langle 4, 1 \rangle$ and $\langle 1, 4 \rangle$
solution: $6 - 6 = 0$. The others give 4, $-1$ and 8.
:::

::: problem id=x8 type=numeric answer="60" set=extra
What is the direction angle of $\langle 1, \sqrt{3} \rangle$, in degrees?
solution: $\tan\theta = \sqrt{3}$ in quadrant I: $60°$.
:::

::: problem id=x9 type=numeric answer="135" set=extra
What is the direction angle of $\langle -2, 2 \rangle$, in degrees?
hint: The vector points into quadrant II.
solution: $\tan\theta = -1$, and quadrant II gives $180° - 45° = 135°$.
:::

::: problem id=x10 type=numeric answer="-4/5" set=extra
What is the y-component of the unit vector in the direction of $\langle 3, -4 \rangle$?
solution: $|v| = 5$: $\langle \frac{3}{5}, -\frac{4}{5} \rangle$.
:::

::: problem id=x11 type=numeric answer="135" set=extra
What is the angle between $\langle 3, 0 \rangle$ and $\langle -2, 2 \rangle$, in degrees?
solution: $\cos\theta = \frac{-6}{3 \cdot 2\sqrt{2}} = -\frac{1}{\sqrt{2}}$, so $\theta = 135°$.
:::

::: problem id=x12 type=numeric answer="10sqrt(3)" set=extra
A rope pulls with 20 N at 60° above the horizontal. What is the vertical component of the force, in N?
solution: $20\sin 60° = 20 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3} \approx 17.3$ N.
:::

::: problem id=x13 type=numeric answer="6" set=extra
For which k is $\langle k, 3 \rangle$ perpendicular to $\langle 2, -4 \rangle$?
solution: $2k - 12 = 0$, so $k = 6$.
:::

::: problem id=x14 type=numeric answer="5" set=extra
Sam says $|\langle 3, 4 \rangle| = 3 + 4 = 7$. What is it really?
solution: Use Pythagoras, not a sum: $\sqrt{9 + 16} = 5$.
:::

::: problem id=x15 type=numeric answer="15" set=extra
Work is $W = F \cdot d$. A force $F = \langle 3, 4 \rangle$ moves an object along $d = \langle 5, 0 \rangle$. How much work is done?
solution: $3 \cdot 5 + 4 \cdot 0 = 15$.
:::

::: problem id=x16 type=numeric answer="5" set=extra
$u = \langle 1, 2 \rangle$ and $v = \langle 3, 1 \rangle$. What is $|u + v|$?
solution: $u + v = \langle 4, 3 \rangle$, magnitude 5.
:::

::: problem id=x17 type=numeric answer="13" set=extra
$u = \langle 2, -3 \rangle$. What is $u \cdot u$?
hint: Compare it with $|u|$.
solution: $4 + 9 = 13$. It is always $|u|^2$.
:::

::: problem id=x18 type=numeric answer="acos(0.8)*180/pi" tolerance="0.1" set=extra
What is the angle between $\langle 1, 1 \rangle$ and $\langle 1, 7 \rangle$, in degrees? (to one decimal place)
hint: Find the dot product and both magnitudes.
solution: $u \cdot v = 8$, $|u||v| = \sqrt{2}\sqrt{50} = 10$.
$\cos\theta = 0.8$, $\theta \approx 36.9°$.
:::

::: problem id=x19 type=numeric answer="50sqrt(17)" tolerance="0.01" set=extra
A plane flies east at 200 km/h. A wind blows north at 50 km/h. What is its speed over the ground? (exact or to hundredths)
hint: Add the vectors $\langle 200, 0 \rangle$ and $\langle 0, 50 \rangle$.
solution: $\sqrt{200^2 + 50^2} = \sqrt{42500}$
$= 50\sqrt{17} \approx 206.16$ km/h.
:::

::: problem id=x20 type=numeric answer="-3" set=extra creative=true
A vector of magnitude 6 has direction angle 120°. What is its x-component?
hint: $\cos 120° = -\frac{1}{2}$.
solution: $6\cos 120° = 6 \cdot \left(-\frac{1}{2}\right) = -3$.
:::
