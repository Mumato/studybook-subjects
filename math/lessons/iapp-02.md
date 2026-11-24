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
