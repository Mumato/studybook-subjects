---
id: iapp-02
title: Volumes of revolution
---
::: rule
Spin the region under $y = f(x)$ around the x-axis. Each thin slice is a disk of radius $f(x)$, so

$$V = \pi\int_a^b f(x)^2\,dx$$

With a hole in the middle (outer radius R, inner radius r): $V = \pi\int_a^b \left(R^2 - r^2\right)dx$ (the **washer** method).
:::

::: example
Spin $y = x$ from 0 to 2: $V = \pi\int_0^2 x^2\,dx = \frac{8\pi}{3}$. That's a cone of radius 2 and height 2, and the cone formula $\frac{1}{3}\pi r^2h$ agrees.
:::

::: graph
x -0.5..2.5
y -2.5..2.5
polygon 0,0 2,2 2,-2 fill
plot x blue
plot -x blue
:::

Give answers in terms of pi.

::: problem id=p1 type=numeric answer="8pi"
Spin $y = \sqrt{x}$, $0 \le x \le 4$, around the x-axis. What is the volume?
solution: $\pi\int_0^4 x\,dx = 8\pi$.
:::

::: problem id=p2 type=numeric answer="9pi"
Spin $y = x$, $0 \le x \le 3$. What is the volume?
solution: $\pi\int_0^3 x^2\,dx = 9\pi$.
:::

::: problem id=p3 type=numeric answer="20pi"
Spin $y = 2$, $0 \le x \le 5$. What is the volume?
hint: It's a cylinder.
solution: $\pi \cdot 4 \cdot 5 = 20\pi$.
:::

::: problem id=p4 type=numeric answer="pi/5"
Spin $y = x^2$, $0 \le x \le 1$. What is the volume?
solution: $\pi\int_0^1 x^4\,dx = \frac{\pi}{5}$.
:::

::: problem id=p5 type=numeric answer="4pi/3"
Spin $y = \sqrt{1 - x^2}$, $-1 \le x \le 1$ (a half circle). What is the volume?
hint: You'll get a ball of radius 1.
solution: $\pi\int_{-1}^{1}(1 - x^2)\,dx = \pi\left(2 - \frac{2}{3}\right) = \frac{4\pi}{3}$.
:::

::: problem id=p6 type=numeric answer="2pi/15"
Spin the region between $y = x$ (outside) and $y = x^2$ (inside), $0 \le x \le 1$. What is the volume?
hint: Washers: $R = x$, $r = x^2$.
solution: $\pi\int_0^1 (x^2 - x^4)\,dx = \pi\left(\frac{1}{3} - \frac{1}{5}\right) = \frac{2\pi}{15}$.
:::

::: problem id=p7 type=choice
Which gives the volume of $y = f(x)$ spun around the x-axis?
- [ ] $\int_a^b \pi f(x)\,dx$
- [x] $\pi\int_a^b f(x)^2\,dx$
- [ ] $2\pi\int_a^b f(x)\,dx$
solution: Each slice is a disk of area $\pi f(x)^2$.
:::

::: problem id=p8 type=numeric answer="pi(e^2-1)/2"
Spin $y = e^x$, $0 \le x \le 1$. What is the volume? (exact)
solution: $\pi\int_0^1 e^{2x}\,dx = \frac{\pi(e^2 - 1)}{2}$.
:::

::: problem id=x1 type=numeric answer="32pi/5" set=extra
Spin $y = x^2$, $0 \le x \le 2$, around the x-axis. What is the volume?
solution: $\pi\int_0^2 x^4\,dx = \pi \cdot \frac{32}{5} = \frac{32\pi}{5}$.
:::

::: problem id=x2 type=numeric answer="81pi/2" set=extra
Spin $y = \sqrt{x}$, $0 \le x \le 9$. What is the volume?
solution: $\pi\int_0^9 x\,dx = \pi \cdot \frac{81}{2}$.
:::

::: problem id=x3 type=numeric answer="36pi" set=extra
Spin $y = 3$, $0 \le x \le 4$. What is the volume?
solution: A cylinder: $\pi \cdot 3^2 \cdot 4 = 36\pi$.
:::

::: problem id=x4 type=numeric answer="pi/7" set=extra
Spin $y = x^3$, $0 \le x \le 1$. What is the volume?
solution: $\pi\int_0^1 x^6\,dx = \frac{\pi}{7}$.
:::

::: problem id=x5 type=numeric answer="pi/2" set=extra
Spin $y = e^{-x}$, $x \ge 0$, around the x-axis. What is the (finite) volume?
solution: $\pi\int_0^{\infty} e^{-2x}\,dx = \pi \cdot \frac{1}{2} = \frac{\pi}{2}$.
:::

::: problem id=x6 type=numeric answer="2pi/3" set=extra
Spin $y = \frac{1}{x}$, $1 \le x \le 3$. What is the volume?
solution: $\pi\int_1^3 \frac{dx}{x^2} = \pi\left(1 - \frac{1}{3}\right) = \frac{2\pi}{3}$.
:::

::: problem id=x7 type=numeric answer="pi^2/2" set=extra
Spin $y = \sin x$, $0 \le x \le \pi$. What is the volume? (type pi^2/...)
hint: $\int_0^{\pi}\sin^2 x\,dx = \frac{\pi}{2}$.
solution: $\pi \cdot \frac{\pi}{2} = \frac{\pi^2}{2}$.
:::

::: problem id=x8 type=numeric answer="8pi/5" set=extra
Spin the region between $y = 1$ (outside) and $y = x^2$ (inside), $-1 \le x \le 1$, around the x-axis. What is the volume?
solution: Washers, $R = 1$, $r = x^2$: $\pi\int_{-1}^{1}(1 - x^4)\,dx = \pi\left(2 - \frac{2}{5}\right) = \frac{8\pi}{5}$.
:::

::: problem id=x9 type=choice set=extra
Which is the washer formula, with outer radius R and inner radius r?
- [x] $\pi\int_a^b (R^2 - r^2)\,dx$
- [ ] $\pi\int_a^b (R - r)^2\,dx$
- [ ] $\pi\int_a^b (R - r)\,dx$
- [ ] $2\pi\int_a^b (R^2 - r^2)\,dx$
solution: A washer is a big disk minus a small one: $\pi R^2 - \pi r^2$. Squaring the difference is a common mistake.
:::

::: problem id=x10 type=numeric answer="18pi" set=extra
Spin $y = \frac{x}{2}$, $0 \le x \le 6$, to make a cone. What is its volume?
solution: $\pi\int_0^6 \frac{x^2}{4}\,dx = \pi \cdot \frac{216}{12} = 18\pi$. Check: $\frac{1}{3}\pi \cdot 3^2 \cdot 6 = 18\pi$.
:::

::: problem id=x11 type=numeric answer="8pi" set=extra
The region between $y = x^2$, the y-axis and $y = 4$ ($x \ge 0$) is spun around the **y-axis**. What is the volume?
hint: Slice across y: the radius is $x = \sqrt{y}$.
solution: $\pi\int_0^4 (\sqrt{y})^2\,dy = \pi\int_0^4 y\,dy = 8\pi$.
:::

::: problem id=x12 type=numeric answer="16pi/15" set=extra
The region between $y = x^2$ and $y = 1$ is spun around the line $y = 1$. What is the volume?
hint: The radius is the distance from the curve to the line: $1 - x^2$.
solution: $\pi\int_{-1}^{1}(1 - x^2)^2\,dx = \pi\left(2 - \frac{4}{3} + \frac{2}{5}\right) = \frac{16\pi}{15}$.
:::

::: problem id=x13 type=numeric answer="64pi/15" set=extra
The region between $y = 2x$ and $y = x^2$ ($0 \le x \le 2$) is spun around the x-axis. A student wrote $\pi\int_0^2 (2x - x^2)^2\,dx$. Find the correct volume.
solution: Washers: $\pi\int_0^2 (4x^2 - x^4)\,dx = \pi\left(\frac{32}{3} - \frac{32}{5}\right) = \frac{64\pi}{15}$.
:::

::: problem id=x14 type=numeric answer="36pi" set=extra
Spin $y = \sqrt{9 - x^2}$, $-3 \le x \le 3$. What is the volume of the ball?
solution: $\pi\int_{-3}^{3}(9 - x^2)\,dx = \pi(54 - 18) = 36\pi$. Check: $\frac{4}{3}\pi \cdot 27 = 36\pi$.
:::

::: problem id=x15 type=numeric answer="pi" set=extra
Spin $y = \sec x$, $0 \le x \le \frac{\pi}{4}$. What is the volume?
solution: $\pi\int_0^{\pi/4}\sec^2 x\,dx = \pi[\tan x]_0^{\pi/4} = \pi$.
:::

::: problem id=x16 type=numeric answer="pi" set=extra
Spin $y = \sqrt{\ln x}$, $1 \le x \le e$. What is the volume?
hint: $\int \ln x\,dx = x\ln x - x$.
solution: $\pi\int_1^e \ln x\,dx = \pi \cdot 1 = \pi$.
:::

::: problem id=x17 type=numeric answer="176sqrt(2)pi/15" set=extra
The region between $y = 3$ and $y = 1 + x^2$ is spun around the x-axis. What is the volume? (exact)
hint: They cross at $x = \pm\sqrt{2}$. Expand $9 - (1 + x^2)^2$.
solution: $\pi\int (8 - 2x^2 - x^4)\,dx$ over $[-\sqrt{2}, \sqrt{2}]$. That's $2\pi\sqrt{2}\left(8 - \frac{4}{3} - \frac{4}{5}\right) = \frac{176\sqrt{2}\,\pi}{15}$.
:::

::: problem id=x18 type=numeric answer="8pi" set=extra
The region under $y = 4 - x^2$ with $x \ge 0$, $y \ge 0$ is spun around the y-axis. What is the volume?
hint: Solve for x: $x^2 = 4 - y$.
solution: $\pi\int_0^4 (4 - y)\,dy = \pi(16 - 8) = 8\pi$.
:::

::: problem id=x19 type=numeric answer="pi^2/2" set=extra
Spin $y = \frac{1}{1 + x^2}$ (all x) around the x-axis. What is the volume?
hint: With $x = \tan\theta$, $\int_{-\infty}^{\infty}\frac{dx}{(1 + x^2)^2} = \int_{-\pi/2}^{\pi/2}\cos^2\theta\,d\theta$.
solution: That integral is $\frac{\pi}{2}$, so $V = \pi \cdot \frac{\pi}{2} = \frac{\pi^2}{2}$.
:::

::: problem id=x20 type=numeric answer="256pi/3" set=extra creative=true
A hole of radius 3 is drilled straight through the centre of a ball of radius 5. What volume is left?
hint: Spin the region between $y = \sqrt{25 - x^2}$ and $y = 3$ around the x-axis.
solution: They meet at $x = \pm 4$. $\pi\int_{-4}^{4}(25 - x^2 - 9)\,dx$, which is $\pi\left(128 - \frac{128}{3}\right) = \frac{256\pi}{3}$.
:::
