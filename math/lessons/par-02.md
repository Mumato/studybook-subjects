---
id: par-02
title: Polar curves: area and length
---
A polar curve $r = f(\theta)$ sweeps out area like a fan: each thin slice is almost a sector of a circle, with area $\frac{1}{2}r^2\,d\theta$.

::: rule
For $r = f(\theta)$ (write $r' = \frac{dr}{d\theta}$):
- **Slope:** use $x = r\cos\theta$, $y = r\sin\theta$ as a parametric curve in θ:

$$\frac{dy}{dx} = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$$

- **Area** swept from $\theta = \alpha$ to $\beta$: $A = \frac{1}{2}\int_{\alpha}^{\beta} r^2\,d\theta$
- **Between two curves** (outer R, inner r): $A = \frac{1}{2}\int_{\alpha}^{\beta}(R^2 - r^2)\,d\theta$. Find the bounds where the curves meet.
- **Arc length:** $L = \int_{\alpha}^{\beta}\sqrt{r^2 + (r')^2}\,d\theta$

Pick the θ range that traces the region **once**.
:::

::: example
Area inside the cardioid $r = 1 + \cos\theta$:

$$A = \frac{1}{2}\int_0^{2\pi}(1 + 2\cos\theta + \cos^2\theta)\,d\theta$$

The middle term gives 0 and $\int_0^{2\pi}\cos^2\theta\,d\theta = \pi$. So $A = \frac{1}{2}(2\pi + \pi) = \frac{3\pi}{2}$.
:::

::: graph
x -1..3
y -2..2
polar r=1+cos(t) red
:::

::: example
Area inside $r = 3\sin\theta$ and outside $r = 1 + \sin\theta$. They meet where $3\sin\theta = 1 + \sin\theta$: $\sin\theta = \frac{1}{2}$, so $\theta = \frac{\pi}{6}$ and $\frac{5\pi}{6}$.

$$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6}(R^2 - r^2)\,d\theta$$

with $R = 3\sin\theta$ and $r = 1 + \sin\theta$, so $R^2 - r^2 = 8\sin^2\theta - 2\sin\theta - 1$.

With $8\sin^2\theta = 4 - 4\cos 2\theta$ the antiderivative is $3\theta - 2\sin 2\theta + 2\cos\theta$. Between the bounds that is $2\pi$, so $A = \pi$.
:::

::: graph
x -3..3
y -1..4
polar r=3sin(t) blue
polar r=1+sin(t) red
:::


Give answers in terms of pi where needed.

::: problem id=p1 type=numeric answer="3pi/2"
What is the area of the sector $r = 3$, $0 \le \theta \le \frac{\pi}{3}$?
solution: $\frac{1}{2}\int_0^{\pi/3} 9\,d\theta = \frac{9}{2} \cdot \frac{\pi}{3} = \frac{3\pi}{2}$.
:::

::: problem id=p2 type=numeric answer="pi"
What is the area inside $r = 2\cos\theta$?
hint: The circle is traced once for $-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}$.
solution: $\frac{1}{2}\int_{-\pi/2}^{\pi/2} 4\cos^2\theta\,d\theta = \frac{1}{2} \cdot 2\pi = \pi$. (A circle of radius 1.)
:::

::: problem id=p3 type=numeric answer="pi/8"
What is the area of one petal of the rose $r = \cos 2\theta$?
hint: One petal runs from $\theta = -\frac{\pi}{4}$ to $\frac{\pi}{4}$ (where $r = 0$).
solution: $\frac{1}{2}\int_{-\pi/4}^{\pi/4}\cos^2 2\theta\,d\theta = \frac{1}{2} \cdot \frac{\pi}{4} = \frac{\pi}{8}$.
:::

::: problem id=p4 type=numeric answer="9pi/2"
What is the area inside the limaçon $r = 2 + \cos\theta$?
solution: $\frac{1}{2}\int_0^{2\pi}(4 + 4\cos\theta + \cos^2\theta)\,d\theta$, which is $\frac{1}{2}(8\pi + \pi) = \frac{9\pi}{2}$.
:::

::: problem id=p5 type=numeric answer="-2/pi"
For the spiral $r = \theta$, what is $\frac{dy}{dx}$ at $\theta = \frac{\pi}{2}$?
solution: $r' = 1$. Top: $\sin\theta + \theta\cos\theta = 1$. Bottom: $\cos\theta - \theta\sin\theta = -\frac{\pi}{2}$. Slope $-\frac{2}{\pi}$.
:::

::: problem id=p6 type=numeric answer="2pi"
What is the length of $r = 2\sin\theta$, $0 \le \theta \le \pi$?
solution: $r^2 + (r')^2 = 4\sin^2\theta + 4\cos^2\theta = 4$. $L = \int_0^{\pi} 2\,d\theta = 2\pi$ (a circle of radius 1).
:::

::: problem id=p7 type=numeric answer="8"
What is the length of the cardioid $r = 1 + \cos\theta$?
hint: $r^2 + (r')^2 = 2 + 2\cos\theta = 4\cos^2\frac{\theta}{2}$.
solution: $L = \int_0^{2\pi} 2\left|\cos\frac{\theta}{2}\right|d\theta$. On $[0, \pi]$ it gives 4; by symmetry the total is 8.
:::

::: problem id=p8 type=numeric answer="2+pi/4"
What is the area inside $r = 1 + \cos\theta$ and outside $r = 1$?
hint: They meet where $\cos\theta = 0$.
solution: $\frac{1}{2}\int_{-\pi/2}^{\pi/2}(2\cos\theta + \cos^2\theta)\,d\theta$, which is $\frac{1}{2}\left(4 + \frac{\pi}{2}\right) = 2 + \frac{\pi}{4}$.
:::

::: problem id=x1 type=numeric answer="2pi" set=extra
What is the area of the sector $r = 4$, $0 \le \theta \le \frac{\pi}{4}$?
solution: $\frac{1}{2} \cdot 16 \cdot \frac{\pi}{4} = 2\pi$.
:::

::: problem id=x2 type=numeric answer="4pi" set=extra
What is the area inside $r = 4\sin\theta$?
solution: $\frac{1}{2}\int_0^{\pi} 16\sin^2\theta\,d\theta = 8 \cdot \frac{\pi}{2} = 4\pi$. (A circle of radius 2.)
:::

::: problem id=x3 type=numeric answer="3pi/2" set=extra
What is the area inside $r = 1 - \cos\theta$?
solution: $\frac{1}{2}\int_0^{2\pi}(1 - 2\cos\theta + \cos^2\theta)\,d\theta$, which is $\frac{1}{2}(2\pi + \pi) = \frac{3\pi}{2}$.
:::

::: problem id=x4 type=numeric answer="pi/12" set=extra
What is the area of one petal of $r = \sin 3\theta$?
hint: One petal: $0 \le \theta \le \frac{\pi}{3}$.
solution: $\frac{1}{2}\int_0^{\pi/3}\sin^2 3\theta\,d\theta = \frac{1}{2} \cdot \frac{\pi}{6} = \frac{\pi}{12}$.
:::

::: problem id=x5 type=numeric answer="pi/4" set=extra
What is the total area of the three-petal rose $r = \sin 3\theta$?
solution: $3 \cdot \frac{\pi}{12} = \frac{\pi}{4}$.
:::

::: problem id=x6 type=choice set=extra
Which integral is the area swept by $r = f(\theta)$ from α to β?
- [ ] $\int_{\alpha}^{\beta} r\,d\theta$
- [x] $\frac{1}{2}\int_{\alpha}^{\beta} r^2\,d\theta$
- [ ] $\pi\int_{\alpha}^{\beta} r^2\,d\theta$
- [ ] $\int_{\alpha}^{\beta}\sqrt{r^2 + (r')^2}\,d\theta$
solution: Each slice is a thin sector of area $\frac{1}{2}r^2\,d\theta$. (The last option is the length.)
:::

::: problem id=x7 type=numeric answer="4pi^3/3" set=extra
What area does the spiral $r = \theta$ sweep for $0 \le \theta \le 2\pi$? (type pi^3)
solution: $\frac{1}{2}\int_0^{2\pi}\theta^2\,d\theta = \frac{1}{2} \cdot \frac{8\pi^3}{3} = \frac{4\pi^3}{3}$.
:::

::: problem id=x8 type=numeric answer="(e^2-1)/4" set=extra
What area does $r = e^{\theta}$ sweep for $0 \le \theta \le 1$? (exact)
solution: $\frac{1}{2}\int_0^1 e^{2\theta}\,d\theta = \frac{1}{4}(e^2 - 1)$.
:::

::: problem id=x9 type=choice set=extra
A student finds the area of $r = \sin 3\theta$ as $\frac{1}{2}\int_0^{2\pi}\sin^2 3\theta\,d\theta = \frac{\pi}{2}$. What went wrong?
- [x] the rose is traced twice on $[0, 2\pi]$; use $[0, \pi]$
- [ ] the $\frac{1}{2}$ shouldn't be there
- [ ] $\sin^2 3\theta$ should be $\sin 3\theta$
- [ ] nothing: the area is $\frac{\pi}{2}$
solution: $r = \sin 3\theta$ finishes all three petals by $\theta = \pi$. The true area is $\frac{\pi}{4}$, half the student's.
:::

::: problem id=x10 type=numeric answer="0" set=extra
For $r = 2\cos\theta$, what is $\frac{dy}{dx}$ at $\theta = \frac{\pi}{4}$?
solution: $r' = -2\sin\theta$. Top: $-2\sin^2\theta + 2\cos^2\theta = 2\cos 2\theta = 0$ at $\frac{\pi}{4}$. Slope 0: the point $(1, 1)$ is the top of the circle.
:::

::: problem id=x11 type=numeric answer="1" set=extra
For $r = 1 + \sin\theta$, what is $\frac{dy}{dx}$ at $\theta = 0$?
solution: $r = 1$, $r' = \cos 0 = 1$. Top: $1 \cdot 0 + 1 \cdot 1 = 1$. Bottom: $1 \cdot 1 - 1 \cdot 0 = 1$. Slope 1.
:::

::: problem id=x12 type=numeric answer="sqrt(2)(e-1)" set=extra
What is the length of $r = e^{\theta}$, $0 \le \theta \le 1$? (exact)
solution: $r^2 + (r')^2 = 2e^{2\theta}$. $L = \int_0^1 \sqrt{2}e^{\theta}\,d\theta = \sqrt{2}(e - 1)$.
:::

::: problem id=x13 type=numeric answer="3pi" set=extra
What is the length of $r = 3\cos\theta$, $0 \le \theta \le \pi$?
solution: $r^2 + (r')^2 = 9$. $L = 3\pi$, the circumference of a circle of diameter 3.
:::

::: problem id=x14 type=numeric answer="19/3" set=extra
What is the length of $r = \theta^2$, $0 \le \theta \le \sqrt{5}$?
hint: $\sqrt{\theta^4 + 4\theta^2} = \theta\sqrt{\theta^2 + 4}$.
solution: $L = \frac{1}{3}(\theta^2 + 4)^{3/2}\Big|_0^{\sqrt{5}} = \frac{1}{3}(27 - 8) = \frac{19}{3}$.
:::

::: problem id=x15 type=numeric answer="pi/3+sqrt(3)/2" set=extra
What is the area inside $r = 2\cos\theta$ and outside $r = 1$?
hint: They meet where $\cos\theta = \frac{1}{2}$.
solution: $\theta = \pm\frac{\pi}{3}$. $\frac{1}{2}\int (4\cos^2\theta - 1)\,d\theta = \frac{1}{2}[\theta + \sin 2\theta]$. Between the bounds: $\frac{1}{2}\left(\frac{2\pi}{3} + \sqrt{3}\right)$.
:::

::: problem id=x16 type=multi answers="pi/3;-pi/3" set=extra
For $-\frac{\pi}{2} < \theta < \frac{\pi}{2}$, at which θ do $r = 1$ and $r = 2\cos\theta$ meet?
solution: $2\cos\theta = 1$: $\theta = \pm\frac{\pi}{3}$.
:::

::: problem id=x17 type=numeric answer="2pi/3-sqrt(3)/2" set=extra
What is the area inside **both** $r = 1$ and $r = 2\cos\theta$?
hint: The circle $r = 2\cos\theta$ has area π. Subtract the part found in x15.
solution: $\pi - \left(\frac{\pi}{3} + \frac{\sqrt{3}}{2}\right) = \frac{2\pi}{3} - \frac{\sqrt{3}}{2}$.
:::

::: problem id=x18 type=numeric answer="pi-3sqrt(3)/2" set=extra
The limaçon $r = 1 + 2\cos\theta$ has a small inner loop, traced for $\frac{2\pi}{3} \le \theta \le \frac{4\pi}{3}$. What is its area?
hint: $r^2 = 1 + 4\cos\theta + 4\cos^2\theta$, and the antiderivative is $3\theta + 4\sin\theta + \sin 2\theta$.
solution: Between the bounds the antiderivative changes by $2\pi - 4\sqrt{3} + \sqrt{3} = 2\pi - 3\sqrt{3}$. Half of it: $\pi - \frac{3\sqrt{3}}{2}$.
:::

::: problem id=x19 type=numeric answer="4" set=extra
What is the total area inside the lemniscate $r^2 = 4\cos 2\theta$ (both loops)?
hint: One loop: $-\frac{\pi}{4} \le \theta \le \frac{\pi}{4}$.
solution: One loop: $\frac{1}{2}\int_{-\pi/4}^{\pi/4} 4\cos 2\theta\,d\theta = \frac{1}{2} \cdot 4 = 2$. Two loops: 4.
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
For which $a > 0$ does the cardioid $r = a(1 + \cos\theta)$ enclose area $6\pi$?
hint: Scaling r by a scales the area by $a^2$.
solution: Area $\frac{3\pi}{2}a^2 = 6\pi$, so $a^2 = 4$ and $a = 2$.
:::
