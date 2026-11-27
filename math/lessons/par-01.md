---
id: par-01
title: Calculus with parametric curves
---
A parametric curve gives both coordinates in terms of a third variable: $x = f(t)$, $y = g(t)$. You can find slopes and lengths without ever solving for y in terms of x.

::: rule
For $x = f(t)$, $y = g(t)$:
- **Slope:** $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ (when $\frac{dx}{dt} \ne 0$).
- **Horizontal tangent** where $\frac{dy}{dt} = 0$; **vertical tangent** where $\frac{dx}{dt} = 0$ (the other one not 0).
- **Second derivative:** differentiate the slope in t, then divide by $\frac{dx}{dt}$ again:

$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}$$

- **Arc length** for $\alpha \le t \le \beta$ (curve traced once):

$$L = \int_{\alpha}^{\beta}\sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$
:::

::: example
$x = t^2$, $y = t^3 - 3t$. Then $\frac{dy}{dx} = \frac{3t^2 - 3}{2t}$.

At $t = 2$: the point is $(4, 2)$ and the slope is $\frac{9}{4}$. Tangent line: $y - 2 = \frac{9}{4}(x - 4)$.

Horizontal tangents: $3t^2 - 3 = 0$, so $t = \pm 1$.

Second derivative: the slope is $\frac{3}{2}t - \frac{3}{2t}$. Its t-derivative is $\frac{3}{2} + \frac{3}{2t^2}$. Divide by $2t$:

$$\frac{d^2y}{dx^2} = \frac{3(t^2 + 1)}{4t^3}$$
:::

::: example
Length of $x = t^2$, $y = \frac{2}{3}t^3$, $0 \le t \le \sqrt{3}$. Here $\frac{dx}{dt} = 2t$, $\frac{dy}{dt} = 2t^2$:

$$\sqrt{4t^2 + 4t^4} = 2t\sqrt{1 + t^2}$$

$$L = \frac{2}{3}(1 + t^2)^{3/2}\Big|_0^{\sqrt{3}} = \frac{14}{3}$$
:::

::: graph
x -1..6
y -3..3
param x=t^2; y=t^3-3t; t=-2.4..2.4 blue
point 4,2 P red
:::

::: problem id=p1 type=numeric answer="4/3"
$x = 3t$, $y = t^2$. What is $\frac{dy}{dx}$ at $t = 2$?
solution: $\frac{dy}{dx} = \frac{2t}{3}$. At $t = 2$: $\frac{4}{3}$.
:::

::: problem id=p2 type=expression answer="-cos(t)/sin(t)" vars="t"
$x = \cos t$, $y = \sin t$. Write $\frac{dy}{dx}$ in terms of t.
solution: $\frac{\cos t}{-\sin t} = -\cot t$.
:::

::: problem id=p3 type=expression answer="2x-3"
$x = t + 1$, $y = t^2$. Write the tangent line at $t = 1$ as $y = \ldots$
hint: Find the point and the slope at $t = 1$.
solution: Point $(2, 1)$. Slope $\frac{2t}{1} = 2$. So $y - 1 = 2(x - 2)$, that is $y = 2x - 3$.
:::

::: problem id=p4 type=multi answers="1;-1"
$x = t^2$, $y = t^3 - 3t$. At which values of t is the tangent horizontal?
solution: $\frac{dy}{dt} = 3t^2 - 3 = 0$ at $t = \pm 1$, and $\frac{dx}{dt} = 2t \ne 0$ there.
:::

::: problem id=p5 type=point answer="-4,8"
$x = t^2 - 4t$, $y = t^3$. Click the point where the tangent is vertical.
graph:
x -6..4
y -2..10
hint: Set $\frac{dx}{dt} = 0$.
solution: $2t - 4 = 0$ at $t = 2$ (and $\frac{dy}{dt} = 12 \ne 0$). The point is $(4 - 8, 8) = (-4, 8)$.
:::

::: problem id=p6 type=numeric answer="3/4"
$x = t^2$, $y = t^3$. What is $\frac{d^2y}{dx^2}$ at $t = 1$?
solution: $\frac{dy}{dx} = \frac{3t}{2}$. Its t-derivative is $\frac{3}{2}$; divide by $2t$: $\frac{3}{4t}$. At $t = 1$: $\frac{3}{4}$.
:::

::: problem id=p7 type=numeric answer="2pi"
$x = 2\cos t$, $y = 2\sin t$, $0 \le t \le \pi$. What is the length of this curve?
solution: Speed $\sqrt{4\sin^2 t + 4\cos^2 t} = 2$. $L = \int_0^{\pi} 2\,dt = 2\pi$ (half of a circle of radius 2).
:::

::: problem id=p8 type=numeric answer="8" creative=true
A point on the rim of a rolling wheel of radius 1 traces the **cycloid** $x = t - \sin t$, $y = 1 - \cos t$. How long is one arch, $0 \le t \le 2\pi$?
hint: $(1 - \cos t)^2 + \sin^2 t = 2 - 2\cos t$, which is $4\sin^2\frac{t}{2}$.
solution: Speed $2\sin\frac{t}{2}$ (positive on $[0, 2\pi]$). $L = \int_0^{2\pi} 2\sin\frac{t}{2}\,dt = \left[-4\cos\frac{t}{2}\right]_0^{2\pi} = 8$: four times the wheel's diameter.
:::

::: problem id=x1 type=numeric answer="2/3" set=extra
$x = t^3$, $y = t^2$. What is $\frac{dy}{dx}$ at $t = 1$?
solution: $\frac{2t}{3t^2}$ at $t = 1$: $\frac{2}{3}$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
$x = e^t$, $y = e^{2t}$. What is $\frac{dy}{dx}$ at $t = 0$?
solution: $\frac{2e^{2t}}{e^t} = 2e^t$. At $t = 0$: 2.
:::

::: problem id=x3 type=numeric answer="2" set=extra
$x = 2t - 1$, $y = 4t + 3$. What is the slope of this curve?
solution: $\frac{4}{2} = 2$ for every t: the curve is a straight line.
:::

::: problem id=x4 type=expression answer="(4t^3+1)/(2t)" vars="t" set=extra
$x = t^2$, $y = t^4 + t$. Write $\frac{dy}{dx}$ in terms of t.
solution: $\frac{dy/dt}{dx/dt} = \frac{4t^3 + 1}{2t}$.
:::

::: problem id=x5 type=expression answer="3x/2-1/2" set=extra
$x = t^2$, $y = t^3$. Write the tangent line at $t = 1$ as $y = \ldots$
solution: Point $(1, 1)$, slope $\frac{3t^2}{2t} = \frac{3}{2}$. $y = 1 + \frac{3}{2}(x - 1) = \frac{3}{2}x - \frac{1}{2}$.
:::

::: problem id=x6 type=expression answer="-x+sqrt(2)" set=extra
$x = \cos t$, $y = \sin t$. Write the tangent line at $t = \frac{\pi}{4}$ as $y = \ldots$
solution: Point $\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$, slope $-\cot\frac{\pi}{4} = -1$. So $y = -x + \sqrt{2}$.
:::

::: problem id=x7 type=point answer="2,-4" set=extra
$x = t^3 - 3t$, $y = t^2 - 4t$. Click the point where the tangent is horizontal.
graph:
x -4..4
y -6..4
solution: $\frac{dy}{dt} = 2t - 4 = 0$ at $t = 2$ (and $\frac{dx}{dt} = 9 \ne 0$). Point: $(8 - 6, 4 - 8) = (2, -4)$.
:::

::: problem id=x8 type=multi answers="1;-1" set=extra
Same curve, $x = t^3 - 3t$, $y = t^2 - 4t$. At which t is the tangent vertical?
solution: $\frac{dx}{dt} = 3t^2 - 3 = 0$ at $t = \pm 1$; there $\frac{dy}{dt} = -2$ or $-6$, not 0.
:::

::: problem id=x9 type=choice set=extra
$x = \cos t$, $y = \sin t$. What is the slope at $t = \frac{\pi}{2}$?
- [x] 0
- [ ] undefined
- [ ] 1
- [ ] $-1$
solution: $\frac{dy}{dt} = \cos\frac{\pi}{2} = 0$ while $\frac{dx}{dt} = -1$: slope 0. That's the top of the circle.
:::

::: problem id=x10 type=numeric answer="3/2" set=extra
$x = t^2$, $y = t^3 - 3t$. What is $\frac{d^2y}{dx^2}$ at $t = 1$?
hint: The example found $\frac{3(t^2 + 1)}{4t^3}$.
solution: $\frac{3 \cdot 2}{4} = \frac{3}{2}$.
:::

::: problem id=x11 type=choice set=extra
$x = e^t$, $y = e^{-t}$. Where is the curve concave up?
- [x] for every t
- [ ] for no t
- [ ] only for $t > 0$
- [ ] only for $t < 0$
solution: $\frac{dy}{dx} = -e^{-2t}$. Its t-derivative $2e^{-2t}$, divided by $e^t$: $2e^{-3t} > 0$ always.
:::

::: problem id=x12 type=numeric answer="10" set=extra
$x = 3t$, $y = 4t$, $0 \le t \le 2$. What is the length?
solution: Speed $\sqrt{9 + 16} = 5$. $L = 5 \cdot 2 = 10$.
:::

::: problem id=x13 type=numeric answer="4sqrt(2)-2" set=extra
$x = 3t^2$, $y = 2t^3$, $0 \le t \le 1$. What is the length? (exact)
solution: Speed $\sqrt{36t^2 + 36t^4} = 6t\sqrt{1 + t^2}$. $L = 2(1 + t^2)^{3/2}\Big|_0^1$, which is $2(2\sqrt{2} - 1) = 4\sqrt{2} - 2$.
:::

::: problem id=x14 type=numeric answer="4pi" set=extra
$x = \cos 2t$, $y = \sin 2t$, $0 \le t \le 2\pi$. The formula gives what "length"?
hint: How many times is the circle traced?
solution: Speed 2, so the integral is $2 \cdot 2\pi = 4\pi$. But the unit circle (length $2\pi$) is traced **twice**: the formula counts the path, not the set of points.
:::

::: problem id=x15 type=numeric answer="sqrt(2)(e-1)" set=extra
$x = e^t\cos t$, $y = e^t\sin t$, $0 \le t \le 1$. What is the length? (exact)
hint: Add the squares of the two derivatives; the cross terms cancel.
solution: $(x')^2 + (y')^2 = 2e^{2t}$. Speed $\sqrt{2}e^t$. $L = \sqrt{2}(e - 1)$.
:::

::: problem id=x16 type=numeric answer="sqrt(13)" set=extra
A particle moves along $x = t^2$, $y = t^3$. What is its speed at $t = 1$?
solution: Speed $= \sqrt{(2t)^2 + (3t^2)^2}$. At $t = 1$: $\sqrt{4 + 9} = \sqrt{13}$.
:::

::: problem id=x17 type=expression answer="x-pi/2+2" set=extra
For the cycloid $x = t - \sin t$, $y = 1 - \cos t$, write the tangent line at $t = \frac{\pi}{2}$ as $y = \ldots$
hint: Point $\left(\frac{\pi}{2} - 1, 1\right)$.
solution: Slope $\frac{\sin t}{1 - \cos t} = \frac{1}{1} = 1$. So $y = 1 + \left(x - \frac{\pi}{2} + 1\right) = x - \frac{\pi}{2} + 2$.
:::

::: problem id=x18 type=numeric answer="-2sqrt(2)" set=extra
$x = \cos t$, $y = \sin t$. What is $\frac{d^2y}{dx^2}$ at $t = \frac{\pi}{4}$?
hint: $\frac{dy}{dx} = -\cot t$, whose t-derivative is $\csc^2 t$.
solution: $\frac{\csc^2 t}{-\sin t} = -\csc^3 t$. At $\frac{\pi}{4}$: $-(\sqrt{2})^3 = -2\sqrt{2}$. (Concave down: the top of the circle.)
:::

::: problem id=x19 type=numeric answer="7/3" set=extra
$x = \frac{t^3}{3}$, $y = \frac{t^2}{2}$, $0 \le t \le \sqrt{3}$. What is the length?
hint: The speed is $t\sqrt{t^2 + 1}$.
solution: $L = \frac{1}{3}(t^2 + 1)^{3/2}\Big|_0^{\sqrt{3}} = \frac{1}{3}(8 - 1) = \frac{7}{3}$.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
The **astroid** $x = \cos^3 t$, $y = \sin^3 t$, $0 \le t \le 2\pi$, is a four-pointed star. What is its total length?
hint: The speed is $3|\sin t\cos t|$. Do one quarter and multiply by 4.
solution: Quarter: $\int_0^{\pi/2} 3\sin t\cos t\,dt = \frac{3}{2}$. Total $4 \cdot \frac{3}{2} = 6$.
:::
