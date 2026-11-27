---
id: par-test
title: Parametric and polar calculus test
pass: 0.8
---
::: problem id=t1 type=numeric answer="3/2"
$x = 2t$, $y = t^3$. What is $\frac{dy}{dx}$ at $t = 1$?
solution: $\frac{3t^2}{2}$ at $t = 1$: $\frac{3}{2}$.
:::

::: problem id=t2 type=numeric answer="1/2"
$x = t^2 + 1$, $y = 3t$. What is $\frac{dy}{dx}$ at $t = 3$?
solution: $\frac{3}{2t}$ at $t = 3$: $\frac{1}{2}$.
:::

::: problem id=t3 type=expression answer="4x-3"
$x = t$, $y = t^2 + 1$. Write the tangent line at $t = 2$ as $y = \ldots$
solution: Point $(2, 5)$, slope $2t = 4$. $y = 5 + 4(x - 2) = 4x - 3$.
:::

::: problem id=t4 type=numeric answer="1"
$x = 2t$, $y = t^2 - 2t$. At which t is the tangent horizontal?
solution: $\frac{dy}{dt} = 2t - 2 = 0$ at $t = 1$, and $\frac{dx}{dt} = 2 \ne 0$.
:::

::: problem id=t5 type=multi answers="2;-2"
$x = t^3 - 12t$, $y = t^2$. At which t is the tangent vertical?
solution: $\frac{dx}{dt} = 3t^2 - 12 = 0$ at $t = \pm 2$, where $\frac{dy}{dt} = 2t \ne 0$.
:::

::: problem id=t6 type=numeric answer="2"
$x = t^2$, $y = t^4$ (with $t > 0$). What is $\frac{d^2y}{dx^2}$ at $t = 1$?
solution: $\frac{dy}{dx} = \frac{4t^3}{2t} = 2t^2$. Its t-derivative $4t$, divided by $2t$: 2. (Indeed $y = x^2$.)
:::

::: problem id=t7 type=numeric answer="10pi"
$x = 5\cos t$, $y = 5\sin t$, $0 \le t \le 2\pi$. What is the length?
solution: Speed 5, so $L = 5 \cdot 2\pi = 10\pi$.
:::

::: problem id=t8 type=numeric answer="(13sqrt(13)-8)/27"
$x = t^2$, $y = t^3$, $0 \le t \le 1$. What is the length? (exact)
solution: Speed $\sqrt{4t^2 + 9t^4} = t\sqrt{4 + 9t^2}$. $L = \frac{1}{27}(4 + 9t^2)^{3/2}\Big|_0^1$, which is $\frac{13\sqrt{13} - 8}{27}$.
:::

::: problem id=t9 type=numeric answer="4"
A particle moves on $x = 3\cos t$, $y = 4\sin t$. What is its speed at $t = 0$?
solution: $x' = -3\sin t = 0$, $y' = 4\cos t = 4$. Speed $\sqrt{0 + 16} = 4$.
:::

::: problem id=t10 type=choice
For $x = f(t)$, $y = g(t)$, the slope $\frac{dy}{dx}$ is:
- [x] $\frac{g'(t)}{f'(t)}$
- [ ] $\frac{f'(t)}{g'(t)}$
- [ ] $g'(t)f'(t)$
- [ ] $\frac{g(t)}{f(t)}$
solution: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}$.
:::

::: problem id=t11 type=numeric answer="9pi"
What is the area inside $r = 6\sin\theta$?
solution: $\frac{1}{2}\int_0^{\pi}36\sin^2\theta\,d\theta = 18 \cdot \frac{\pi}{2} = 9\pi$ (a circle of radius 3).
:::

::: problem id=t12 type=numeric answer="pi/3"
What is the area of one petal of $r = 2\cos 3\theta$?
solution: One petal: $-\frac{\pi}{6} \le \theta \le \frac{\pi}{6}$. $\frac{1}{2}\int 4\cos^2 3\theta\,d\theta = 2 \cdot \frac{\pi}{6} = \frac{\pi}{3}$.
:::

::: problem id=t13 type=numeric answer="6pi"
What is the area inside the cardioid $r = 2 + 2\cos\theta$?
solution: $\frac{1}{2}\int_0^{2\pi}(4 + 8\cos\theta + 4\cos^2\theta)\,d\theta$, which is $\frac{1}{2}(8\pi + 4\pi) = 6\pi$.
:::

::: problem id=t14 type=numeric answer="-sqrt(3)"
For the circle $r = 2$, what is $\frac{dy}{dx}$ at $\theta = \frac{\pi}{6}$?
solution: $r' = 0$, so $\frac{dy}{dx} = \frac{r\cos\theta}{-r\sin\theta} = -\cot\frac{\pi}{6} = -\sqrt{3}$.
:::

::: problem id=t15 type=numeric answer="2sqrt(2)"
What is the length of $r = 2e^{\theta}$, $0 \le \theta \le \ln 2$? (exact)
solution: $\sqrt{r^2 + (r')^2} = 2\sqrt{2}e^{\theta}$. $L = 2\sqrt{2}(e^{\ln 2} - 1) = 2\sqrt{2}$.
:::

::: problem id=t16 type=numeric answer="2-pi/4"
What is the area inside $r = 1$ and outside $r = 1 - \cos\theta$?
solution: They meet at $\theta = \pm\frac{\pi}{2}$. $\frac{1}{2}\int_{-\pi/2}^{\pi/2}(2\cos\theta - \cos^2\theta)\,d\theta$ is $\frac{1}{2}\left(4 - \frac{\pi}{2}\right) = 2 - \frac{\pi}{4}$.
:::

::: problem id=t17 type=numeric answer="3pi"
The area under one arch of the cycloid $x = t - \sin t$, $y = 1 - \cos t$ is $\int y\,dx = \int_0^{2\pi} y(t)\,x'(t)\,dt$. What is it?
solution: $\int_0^{2\pi}(1 - \cos t)^2\,dt$ is $\int_0^{2\pi}(1 - 2\cos t + \cos^2 t)\,dt$, which is $2\pi + \pi = 3\pi$: three times the wheel's area.
:::

::: problem id=t18 type=numeric answer="9"
What is the total area inside the lemniscate $r^2 = 9\cos 2\theta$?
solution: One loop: $\frac{1}{2}\int_{-\pi/4}^{\pi/4}9\cos 2\theta\,d\theta = \frac{9}{2}$. Two loops: 9.
:::
