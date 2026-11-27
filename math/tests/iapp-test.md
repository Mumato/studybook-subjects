---
id: iapp-test
title: Applications of integrals test
pass: 0.8
---
::: problem id=t1 type=numeric answer="1/4"
What is the area between $y = x$ and $y = x^3$ from 0 to 1?
solution: $\frac{1}{2} - \frac{1}{4} = \frac{1}{4}$.
:::

::: problem id=t2 type=numeric answer="36"
What is the area between $y = 9$ and $y = x^2$?
solution: $\int_{-3}^{3}(9 - x^2)\,dx = 54 - 18 = 36$.
:::

::: problem id=t3 type=numeric answer="2pi"
Spin $y = \sqrt{x}$, $0 \le x \le 2$, around the x-axis. What is the volume?
solution: $\pi\int_0^2 x\,dx = 2\pi$.
:::

::: problem id=t4 type=numeric answer="72pi"
Spin $y = x$, $0 \le x \le 6$. What is the volume?
solution: $\pi \cdot \frac{216}{3} = 72\pi$.
:::

::: problem id=t5 type=numeric answer="4"
What is the average value of $3x^2$ on $[0, 2]$?
solution: $\frac{1}{2} \cdot 8 = 4$.
:::

::: problem id=t6 type=numeric answer="18"
$v(t) = 4t$ m/s. What is the displacement from $t = 0$ to $t = 3$?
solution: $[2t^2]_0^3 = 18$ m.
:::

::: problem id=t7 type=expression answer="3e^(2x)"
Solve $\frac{dy}{dx} = 2y$ with $y(0) = 3$. Type $y = \ldots$
solution: $y = 3e^{2x}$.
:::

::: problem id=t8 type=numeric answer="9/2"
What is the area between $y = 3x$ and $y = x^2$?
solution: They cross at 0 and 3. $\int_0^3 (3x - x^2)\,dx = \frac{27}{2} - 9 = \frac{9}{2}$.
:::

::: problem id=t9 type=numeric answer="4/3"
What is the area between $x = y^2$ and $x = 2y$?
solution: They cross at $y = 0$ and 2, with $2y$ on the right. $\int_0^2 (2y - y^2)\,dy = 4 - \frac{8}{3} = \frac{4}{3}$.
:::

::: problem id=t10 type=numeric answer="pi/6"
The region between $y = \sqrt{x}$ (outside) and $y = x$ (inside), $0 \le x \le 1$, is spun around the x-axis. What is the volume?
solution: Washers: $\pi\int_0^1 (x - x^2)\,dx = \pi\left(\frac{1}{2} - \frac{1}{3}\right) = \frac{\pi}{6}$.
:::

::: problem id=t11 type=numeric answer="ln(4)/3"
What is the average value of $\frac{1}{x}$ on $[1, 4]$? (exact)
solution: $\frac{1}{3}\int_1^4 \frac{dx}{x} = \frac{\ln 4}{3}$.
:::

::: problem id=t12 type=numeric answer="13/2"
$v(t) = t - 3$ m/s. What is the total distance travelled from $t = 0$ to $t = 5$?
solution: Backwards on $[0, 3]$: $\frac{9}{2}$ m. Forwards on $[3, 5]$: 2 m. Total $\frac{13}{2}$ m.
:::

::: problem id=t13 type=expression answer="4e^(x^2)"
Solve $\frac{dy}{dx} = 2xy$ with $y(0) = 4$. Type $y = \ldots$
solution: $\frac{dy}{y} = 2x\,dx$: $\ln y = x^2 + C$. So $y = Ae^{x^2}$ with $A = 4$.
:::

::: problem id=t14 type=numeric answer="7.5"
60 g of a substance has a half-life of 8 days. How many grams are left after 24 days?
solution: Three half-lives: $60 \to 30 \to 15 \to 7.5$ g.
:::

::: problem id=t15 type=numeric answer="42"
What is the length of $y = \frac{2}{3}x^{3/2}$ from 0 to 15?
solution: $1 + f'^2 = 1 + x$. $L = \frac{2}{3}(1 + x)^{3/2}\Big|_0^{15} = \frac{2}{3}(64 - 1) = 42$.
:::

::: problem id=t16 type=numeric answer="3sqrt(10)pi"
Spin $y = 3x$, $0 \le x \le 1$, around the x-axis. What is the surface area?
solution: $2\pi\int_0^1 3x\sqrt{10}\,dx = 3\sqrt{10}\,\pi$.
:::

::: problem id=t17 type=numeric answer="24"
A force of 30 N stretches a spring 0.1 m. How much work stretches it 0.4 m from its natural length?
solution: $k = 300$. $W = \int_0^{0.4} 300x\,dx = 150(0.16) = 24$ J.
:::

::: problem id=t18 type=numeric answer="156800"
A rectangular plate 4 m wide and 2 m tall hangs upright in water, its top edge 1 m below the surface. What is the force on it? (water: 9800 N/m³)
solution: Depths 1 to 3, width 4: $9800 \cdot 4\int_1^3 d\,dd = 9800 \cdot 4 \cdot 4 = 156800$ N.
:::
