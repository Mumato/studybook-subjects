---
id: vec-02
title: Parametric equations
---
Sometimes it is easier to say **where a point is at each time t** than to give y as a function of x.

::: rule
**Parametric equations** $x = f(t)$, $y = g(t)$ give a point $(x, y)$ for each value of the **parameter** t. As t increases, the point traces a curve in a definite **direction**.
- **Plot** by making a table: pick values of t, work out x and y.
- **Eliminate the parameter** to get an x-y equation: solve one equation for t and substitute into the other. For $\cos t$ and $\sin t$, use $\cos^2 t + \sin^2 t = 1$.
- The **line** through $(x_0, y_0)$ in direction $\langle a, b \rangle$: $x = x_0 + at$, $y = y_0 + bt$.
- The **circle** with centre $(h, k)$ and radius r: $x = h + r\cos t$, $y = k + r\sin t$, traced counter-clockwise.
:::

::: example
$x = 2t + 1$, $y = t - 3$.

t = 0 gives $(1, -3)$; t = 1 gives $(3, -2)$.

From the second, $t = y + 3$. Substitute: $x = 2y + 7$, so $y = \frac{x - 7}{2}$: a line.
:::

::: example
$x = 3\cos t$, $y = 3\sin t$ for $0 \le t \le 2\pi$:

$x^2 + y^2 = 9(\cos^2 t + \sin^2 t) = 9$.

A circle of radius 3, starting at $(3, 0)$ and going counter-clockwise.
:::

::: graph
x -4..4
y -4..4
circle 0,0 3
point 3,0 t=0 red
point 0,3 t=π/2 blue
:::

::: problem id=p1 type=point answer="3,4"
$x = t + 1$, $y = 2t$. Click the point at $t = 2$.
graph:
x -5..5
y -5..5
solution: $x = 3$, $y = 4$.
:::

::: problem id=p2 type=point answer="4,-3"
$x = t^2$, $y = t - 1$. Click the point at $t = -2$.
graph:
x -5..5
y -5..5
solution: $x = 4$, $y = -3$.
:::

::: problem id=p3 type=expression answer="3x-7"
Eliminate the parameter: $x = t + 2$, $y = 3t - 1$. Write $y = \ldots$
solution: $t = x - 2$, so $y = 3(x - 2) - 1 = 3x - 7$.
:::

::: problem id=p4 type=numeric answer="4"
$x = 4\cos t$, $y = 4\sin t$ traces a circle. What is its radius?
solution: $x^2 + y^2 = 16$: radius 4.
:::

::: problem id=p5 type=expression answer="x^2/4"
Eliminate the parameter: $x = 2t$, $y = t^2$. Write $y = \ldots$
solution: $t = \frac{x}{2}$, so $y = \frac{x^2}{4}$.
:::

::: problem id=p6 type=choice
How does $x = \cos t$, $y = \sin t$ move as t increases from 0?
- [x] counter-clockwise, starting at $(1, 0)$
- [ ] clockwise, starting at $(1, 0)$
- [ ] counter-clockwise, starting at $(0, 1)$
- [ ] along a straight line
solution: At $t = 0$ it is at $(1, 0)$; at $t = \frac{\pi}{2}$ at $(0, 1)$: counter-clockwise.
:::

::: problem id=p7 type=choice
Which is the line through $(1, 2)$ in direction $\langle 3, -1 \rangle$?
- [x] $x = 1 + 3t$, $y = 2 - t$
- [ ] $x = 3 + t$, $y = -1 + 2t$
- [ ] $x = 1 - t$, $y = 2 + 3t$
- [ ] $x = 1 + 3t$, $y = 2 + t$
solution: Start point plus t times the direction.
:::

::: problem id=p8 type=point answer="3,-1"
$x = 3 + 2\cos t$, $y = -1 + 2\sin t$ is a circle. Click its centre.
graph:
x -2..6
y -4..3
solution: $(x - 3)^2 + (y + 1)^2 = 4$: centre $(3, -1)$, radius 2.
:::

::: problem id=x1 type=point answer="1,4" set=extra
$x = 2t - 1$, $y = t + 3$. Click the point at $t = 1$.
graph:
x -5..5
y -5..5
solution: $(1, 4)$.
:::

::: problem id=x2 type=point answer="4,1" set=extra
$x = 3 - t$, $y = t^2$. Click the point at $t = -1$.
graph:
x -5..5
y -5..5
solution: $x = 3 + 1 = 4$, $y = 1$.
:::

::: problem id=x3 type=point answer="0,2" set=extra
$x = 2\cos t$, $y = 2\sin t$. Click the point at $t = \frac{\pi}{2}$.
graph:
x -3..3
y -3..3
solution: $(2 \cdot 0, 2 \cdot 1) = (0, 2)$.
:::

::: problem id=x4 type=expression answer="2x+13" set=extra
Eliminate the parameter: $x = t - 4$, $y = 2t + 5$. Write $y = \ldots$
solution: $t = x + 4$: $y = 2x + 8 + 5 = 2x + 13$.
:::

::: problem id=x5 type=expression answer="2x+1" set=extra
Eliminate the parameter: $x = 3t$, $y = 6t + 1$. Write $y = \ldots$
solution: $t = \frac{x}{3}$: $y = 2x + 1$.
:::

::: problem id=x6 type=expression answer="(x-1)^2" set=extra
Eliminate the parameter: $x = t + 1$, $y = t^2$. Write $y = \ldots$
solution: $t = x - 1$: $y = (x - 1)^2$.
:::

::: problem id=x7 type=numeric answer="25" set=extra
$x = 5\cos t$, $y = 5\sin t$. What is $x^2 + y^2$ for every t?
solution: $25(\cos^2 t + \sin^2 t) = 25$.
:::

::: problem id=x8 type=numeric answer="-3" set=extra
What is the slope of the line $x = 1 + 2t$, $y = 3 - 6t$?
solution: Direction $\langle 2, -6 \rangle$: slope $\frac{-6}{2} = -3$.
:::

::: problem id=x9 type=choice set=extra
What does $x = 2\cos t$, $y = 3\sin t$ trace?
- [x] an ellipse
- [ ] a circle
- [ ] a parabola
- [ ] a line
solution: $\frac{x^2}{4} + \frac{y^2}{9} = \cos^2 t + \sin^2 t = 1$.
:::

::: problem id=x10 type=numeric answer="7" set=extra
Where does $x = 2t + 1$, $y = t - 3$ cross the x-axis? Type the x value.
solution: $y = 0$ at $t = 3$, so $x = 7$.
:::

::: problem id=x11 type=point answer="-2,1" set=extra
Click the centre of $x = -2 + \cos t$, $y = 1 + \sin t$.
graph:
x -5..5
y -5..5
solution: $(x + 2)^2 + (y - 1)^2 = 1$: centre $(-2, 1)$.
:::

::: problem id=x12 type=choice set=extra
Which is a parametric form of the line through $(0, 0)$ and $(4, 2)$?
- [x] $x = 4t$, $y = 2t$
- [ ] $x = 2t$, $y = 4t$
- [ ] $x = 4 + t$, $y = 2 + t$
- [ ] $x = t$, $y = 2t$
solution: Start at $(0, 0)$ with direction $\langle 4, 2 \rangle$; $t = 1$ gives $(4, 2)$.
:::

::: problem id=x13 type=expression answer="2x-2" set=extra
Sam eliminates t from $x = t + 1$, $y = 2t$ and gets $y = 2x$. Write the correct $y = \ldots$
solution: $t = x - 1$, so $y = 2(x - 1) = 2x - 2$.
:::

::: problem id=x14 type=numeric answer="8" set=extra
$x = t^2 - 1$, $y = t^3$ with $t > 0$. What is y when $x = 3$?
solution: $t^2 = 4$, $t = 2$, $y = 8$.
:::

::: problem id=x15 type=choice set=extra
What does $x = 3\cos t$, $y = 3\sin t$ trace for $0 \le t \le \pi$?
- [x] the upper half of a circle
- [ ] a whole circle
- [ ] the lower half of a circle
- [ ] a quarter circle
solution: From $(3, 0)$ through $(0, 3)$ to $(-3, 0)$: $\sin t \ge 0$, so the upper half.
:::

::: problem id=x16 type=numeric answer="60" set=extra
A ball moves by $x = 20t$, $y = 15t - 5t^2$ (metres, seconds). How far does it travel horizontally before landing?
hint: It lands when $y = 0$ with $t > 0$.
solution: $5t(3 - t) = 0$, so $t = 3$. Then $x = 60$ m.
:::

::: problem id=x17 type=numeric answer="11.25" set=extra
A ball moves by $x = 20t$, $y = 15t - 5t^2$. What is its greatest height?
hint: The top of the parabola in t is halfway between the landing times.
solution: Top at $t = 1.5$: $y = 22.5 - 11.25 = 11.25$ m.
:::

::: problem id=x18 type=expression answer="-1+4t" vars="t" set=extra
A point moves in a straight line from $(2, -1)$ at $t = 0$ to $(5, 3)$ at $t = 1$. Write $y(t)$.
hint: Direction = end minus start.
solution: Direction $\langle 3, 4 \rangle$: $x = 2 + 3t$ and $y = -1 + 4t$.
:::

::: problem id=x19 type=numeric answer="3" set=extra
Particle A moves by $x = t$, $y = 2t$; particle B by $x = 6 - t$, $y = t + 3$. At what time t are they at the same place?
hint: Both coordinates must match at the same t.
solution: $t = 6 - t$ gives $t = 3$. Check y: $6$ and $3 + 3 = 6$. They meet at $(3, 6)$.
:::

::: problem id=x20 type=numeric answer="1" set=extra creative=true
$x = \cos^2 t$, $y = \sin^2 t$. What is $x + y$ for every t?
solution: $\cos^2 t + \sin^2 t = 1$, so $x + y = 1$.
Since x and y are between 0 and 1, it is just the segment from $(1, 0)$ to $(0, 1)$, traced back and forth.
:::
