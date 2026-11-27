---
id: calc2-exam
title: Part 9 exam: Calculus II
pass: 0.8
---
::: problem id=e1 type=expression answer="xe^(4x)/4-e^(4x)/16" form=antiderivative
$\int xe^{4x}\,dx = ?$ (leave out + C)
solution: $u = x$, $v = \frac{e^{4x}}{4}$: $\frac{xe^{4x}}{4} - \int\frac{e^{4x}}{4}\,dx$, which is $\frac{xe^{4x}}{4} - \frac{e^{4x}}{16} + C$.
:::

::: problem id=e2 type=numeric answer="pi/2-1"
$\int_0^{\pi/2} x\cos x\,dx = ?$ (exact)
solution: Antiderivative $x\sin x + \cos x$. At $\frac{\pi}{2}$: $\frac{\pi}{2}$. At 0: 1. Answer $\frac{\pi}{2} - 1$.
:::

::: problem id=e3 type=expression answer="ln(abs(x-1))-ln(abs(x+3))" form=antiderivative
$\int \frac{4}{(x - 1)(x + 3)}\,dx = ?$ (type abs for $|\,|$, leave out + C)
solution: $A = \frac{4}{4} = 1$, $B = \frac{4}{-4} = -1$. So $\ln|x - 1| - \ln|x + 3| + C$.
:::

::: problem id=e4 type=expression answer="x/2+sin(6x)/12" form=antiderivative
$\int \cos^2 3x\,dx = ?$ (leave out + C)
solution: $\cos^2 3x = \frac{1 + \cos 6x}{2}$. Integrate: $\frac{x}{2} + \frac{\sin 6x}{12} + C$.
:::

::: problem id=e5 type=numeric answer="2/3"
$\int_0^{\pi/2}\sin^3 x\,dx = ?$
solution: $\sin^3 x = (1 - \cos^2 x)\sin x$; antiderivative $-\cos x + \frac{\cos^3 x}{3}$. At $\frac{\pi}{2}$: 0. At 0: $-\frac{2}{3}$. Answer $\frac{2}{3}$.
:::

::: problem id=e6 type=numeric answer="1"
$\int_1^{\infty}\frac{3}{x^4}\,dx = ?$
solution: $\left[-\frac{1}{x^3}\right]_1^{\infty} = 0 + 1 = 1$.
:::

::: problem id=e7 type=choice
What does $\int_0^1 \frac{dx}{x}$ do?
- [ ] it equals 1
- [ ] it equals 0
- [x] it diverges
solution: $\int_t^1\frac{dx}{x} = -\ln t \to \infty$ as $t \to 0^+$: **diverges**.
:::

::: problem id=e8 type=expression answer="-sqrt(25-x^2)/(25x)" form=antiderivative
$\int \frac{dx}{x^2\sqrt{25 - x^2}} = ?$ (leave out + C)
solution: $x = 5\sin\theta$: $\frac{1}{25}\int\csc^2\theta\,d\theta = -\frac{\cot\theta}{25}$. With $\cot\theta = \frac{\sqrt{25 - x^2}}{x}$: $-\frac{\sqrt{25 - x^2}}{25x} + C$.
:::

::: problem id=e9 type=numeric answer="(1+4e+e^2)/3"
Estimate $\int_0^2 e^x\,dx$ with Simpson's rule, $n = 2$. (exact form)
solution: $\Delta x = 1$: $\frac{1}{3}(e^0 + 4e^1 + e^2) = \frac{1 + 4e + e^2}{3} \approx 6.421$. (True: $e^2 - 1 \approx 6.389$.)
:::

::: problem id=e10 type=numeric answer="32/3"
What is the area between $y = 4x$ and $y = x^2$?
solution: They cross at 0 and 4. $\int_0^4 (4x - x^2)\,dx = 32 - \frac{64}{3} = \frac{32}{3}$.
:::

::: problem id=e11 type=numeric answer="e+1/e-2"
What is the area between $y = e^x$ and $y = e^{-x}$ from $x = 0$ to $x = 1$? (exact)
solution: $\int_0^1 (e^x - e^{-x})\,dx = [e^x + e^{-x}]_0^1$, which is $e + \frac{1}{e} - 2$.
:::

::: problem id=e12 type=numeric answer="4pi"
Spin $y = x^{3/2}$, $0 \le x \le 2$, around the x-axis. What is the volume?
solution: $\pi\int_0^2 x^3\,dx = \pi \cdot 4 = 4\pi$.
:::

::: problem id=e13 type=numeric answer="32sqrt(2)pi/5"
The region between $y = 2$ and $y = x^2$ is spun around the x-axis. What is the volume? (exact)
solution: They meet at $\pm\sqrt{2}$. Washers: $\pi\int (4 - x^4)\,dx$ over $[-\sqrt{2}, \sqrt{2}]$. That's $\pi\left(8\sqrt{2} - \frac{8\sqrt{2}}{5}\right) = \frac{32\sqrt{2}\,\pi}{5}$.
:::

::: problem id=e14 type=numeric answer="pi/4"
What is the average value of $\frac{1}{1 + x^2}$ on $[-1, 1]$?
solution: $\frac{1}{2}[\arctan x]_{-1}^{1} = \frac{1}{2} \cdot \frac{\pi}{2} = \frac{\pi}{4}$.
:::

::: problem id=e15 type=expression answer="3x"
Solve $\frac{dy}{dx} = \frac{y}{x}$ ($x > 0$) with $y(1) = 3$. Type $y = \ldots$
solution: $\frac{dy}{y} = \frac{dx}{x}$: $\ln y = \ln x + C$, so $y = Ax$. $y(1) = 3$ gives $y = 3x$.
:::

::: problem id=e16 type=numeric answer="27.5"
Soup at 80°C sits in a 20°C room. Its temperature above the room halves every 15 minutes. What is its temperature after 45 minutes?
solution: $60 \to 30 \to 15 \to 7.5$ above the room: $20 + 7.5 = 27.5$°C.
:::

::: problem id=e17 type=numeric answer="56/3"
What is the length of $y = \frac{1}{3}x^{3/2}$ from 0 to 12?
solution: $f' = \frac{\sqrt{x}}{2}$, so $1 + f'^2 = 1 + \frac{x}{4}$. $L = \frac{8}{3}\left(1 + \frac{x}{4}\right)^{3/2}\Big|_0^{12}$, which is $\frac{8}{3}(8 - 1) = \frac{56}{3}$.
:::

::: problem id=e18 type=numeric answer="8pi"
Spin $y = \sqrt{4 - x^2}$, $-1 \le x \le 1$, around the x-axis. What is the surface area of this band?
solution: $f\sqrt{1 + f'^2} = 2$, so $S = 2\pi\int_{-1}^{1}2\,dx = 8\pi$.
:::

::: problem id=e19 type=numeric answer="24"
It takes 8 J to stretch a spring 0.2 m past its natural length. How much more work stretches it from 0.2 m to 0.4 m?
solution: $\frac{1}{2}k(0.2)^2 = 8$ gives $k = 400$. Then $\int_{0.2}^{0.4}400x\,dx = 200(0.16 - 0.04) = 24$ J.
:::

::: problem id=e20 type=numeric answer="470400"
A box-shaped tank has a 2 m by 3 m base and is 4 m deep, full of water. How much work pumps all the water out over the top? (9800 N/m³)
solution: A layer at height y weighs $9800 \cdot 6\,dy$ and rises $4 - y$. $W = 58800\int_0^4 (4 - y)\,dy$, which is $58800 \cdot 8 = 470400$ J.
:::

::: problem id=e21 type=numeric answer="58800"
A rectangular plate 3 m wide and 2 m tall stands upright in water, its top edge at the surface. What is the force of the water on it? (9800 N/m³)
solution: $\int_0^2 9800\,d \cdot 3\,dd = 9800 \cdot 3 \cdot 2 = 58800$ N.
:::

::: problem id=e22 type=numeric answer="1"
$x = t^3 - t$, $y = t^2$. What is $\frac{dy}{dx}$ at $t = 1$?
solution: $\frac{2t}{3t^2 - 1}$ at $t = 1$: $\frac{2}{2} = 1$.
:::

::: problem id=e23 type=expression answer="-3x/2+3sqrt(2)"
The ellipse $x = 2\cos t$, $y = 3\sin t$. Write the tangent line at $t = \frac{\pi}{4}$ as $y = \ldots$
solution: Point $\left(\sqrt{2}, \frac{3\sqrt{2}}{2}\right)$. Slope $\frac{3\cos t}{-2\sin t} = -\frac{3}{2}$. So $y = \frac{3\sqrt{2}}{2} - \frac{3}{2}(x - \sqrt{2})$, which is $-\frac{3}{2}x + 3\sqrt{2}$.
:::

::: problem id=e24 type=numeric answer="-1/2"
$x = t^2$, $y = \ln t$ ($t > 0$). What is $\frac{d^2y}{dx^2}$ at $t = 1$?
solution: $\frac{dy}{dx} = \frac{1/t}{2t} = \frac{1}{2t^2}$. Its t-derivative $-\frac{1}{t^3}$, divided by $2t$: $-\frac{1}{2t^4}$. At $t = 1$: $-\frac{1}{2}$.
:::

::: problem id=e25 type=numeric answer="e-1/e"
$x = e^t + e^{-t}$, $y = 2t$, $0 \le t \le 1$. What is the length? (exact)
hint: $(x')^2 + (y')^2$ is a perfect square.
solution: $(e^t - e^{-t})^2 + 4 = (e^t + e^{-t})^2$. $L = \int_0^1 (e^t + e^{-t})\,dt = e - \frac{1}{e}$.
:::

::: problem id=e26 type=numeric answer="4pi"
What is the area inside $r = 4\cos\theta$?
solution: $\frac{1}{2}\int_{-\pi/2}^{\pi/2}16\cos^2\theta\,d\theta = 8 \cdot \frac{\pi}{2} = 4\pi$ (a circle of radius 2).
:::

::: problem id=e27 type=numeric answer="9pi/8"
What is the area of one petal of $r = 3\sin 2\theta$?
solution: One petal: $0 \le \theta \le \frac{\pi}{2}$. $\frac{1}{2}\int_0^{\pi/2}9\sin^2 2\theta\,d\theta = \frac{9}{2} \cdot \frac{\pi}{4} = \frac{9\pi}{8}$.
:::

::: problem id=e28 type=numeric answer="8"
What is the length of the cardioid $r = 1 - \cos\theta$?
solution: $r^2 + (r')^2 = 2 - 2\cos\theta = 4\sin^2\frac{\theta}{2}$. $L = \int_0^{2\pi}2\sin\frac{\theta}{2}\,d\theta = 8$.
:::

::: problem id=e29 type=numeric answer="2"
$\sum_{n=0}^{\infty}3\left(-\frac{1}{2}\right)^n = ?$
solution: $\frac{3}{1 + 1/2} = 2$.
:::

::: problem id=e30 type=text answers="diverges;diverge;it diverges"
Does $\sum \frac{n + 1}{2n - 1}$ converge or diverge?
solution: The terms go to $\frac{1}{2} \ne 0$: **diverges** (n-th term test).
:::

::: problem id=e31 type=numeric answer="11/18"
$\sum_{n=1}^{\infty}\frac{1}{n^2 + 3n} = ?$
hint: $\frac{1}{n(n + 3)} = \frac{1}{3}\left(\frac{1}{n} - \frac{1}{n + 3}\right)$.
solution: It telescopes; the terms $1, \frac{1}{2}, \frac{1}{3}$ survive: $\frac{1}{3} \cdot \frac{11}{6} = \frac{11}{18}$.
:::

::: problem id=e32 type=numeric answer="5"
What is the radius of convergence of $\sum \frac{n^2x^n}{5^n}$?
solution: Ratio $\frac{(n + 1)^2}{n^2} \cdot \frac{|x|}{5} \to \frac{|x|}{5}$: $R = 5$.
:::

::: problem id=e33 type=numeric answer="-1/6"
In the Maclaurin series of $x^2\sin x$, what is the coefficient of $x^5$?
solution: $x^2\left(x - \frac{x^3}{6} + \cdots\right) = x^3 - \frac{x^5}{6} + \cdots$: $-\frac{1}{6}$.
:::

::: problem id=e34 type=text answers="absolutely;absolute;converges absolutely"
Does $\sum \frac{(-1)^nn}{n^3 + 1}$ converge absolutely, conditionally, or diverge?
solution: $\frac{n}{n^3 + 1}$ behaves like $\frac{1}{n^2}$ (limit comparison, $c = 1$), so $\sum|a_n|$ converges: **absolutely**.
:::

::: problem id=e35 type=numeric answer="0.9461" tolerance="0.0005"
Estimate $\int_0^1 \frac{\sin x}{x}\,dx$ with the first three terms of its series. (to 4 decimals)
hint: $\frac{\sin x}{x} = 1 - \frac{x^2}{6} + \frac{x^4}{120} - \cdots$. Integrate term by term.
solution: $1 - \frac{1}{18} + \frac{1}{600} \approx 0.9461$. The series alternates, so the error is below the next term $\frac{1}{7 \cdot 5040} \approx 0.00003$.
:::
