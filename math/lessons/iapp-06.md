---
id: iapp-06
title: Work and other physics applications
---
Work is force times distance. When the force changes, or different parts move different distances, slice the job into thin pieces and integrate.

::: rule
- **Work** by a varying force: $W = \int_a^b F(x)\,dx$ (newtons times metres = joules, J).
- **Springs (Hooke's law):** stretching a spring x metres past its natural length takes force $F = kx$, so $W = \int kx\,dx$.
- **Pumping and lifting:** slice the liquid (or cable) into thin layers. Work for a layer = its weight × the distance it moves. Water weighs $\rho g = 9800$ N per m³; a cable of mass $\lambda$ kg/m weighs $9.8\lambda$ N per metre.
- **Hydrostatic force** on a vertical plate: pressure at depth d is $9800\,d$ (N/m²), so $F = \int 9800\,d \cdot w(d)\,dd$, where $w(d)$ is the plate's width at depth d.
:::

::: example
A force of 10 N stretches a spring 0.2 m. So $k = \frac{10}{0.2} = 50$. The work to stretch it 0.3 m from rest:

$$W = \int_0^{0.3} 50x\,dx = 25(0.3)^2$$

That is 2.25 J.
:::

::: example
A cylindrical tank (radius 2 m, height 5 m) is full of water. How much work pumps it all out over the top?

A layer at height y has volume $4\pi\,dy$, weight $9800 \cdot 4\pi\,dy$, and moves up $5 - y$:

$$W = 39200\pi\int_0^5 (5 - y)\,dy$$

$$= 39200\pi \cdot 12.5$$

So $W = 490000\pi$ J.
:::

Use $g = 9.8$ m/s² and 9800 N/m³ for water. Answers in joules (J) or newtons (N).

::: problem id=p1 type=numeric answer="8"
A force $F(x) = 3x^2$ N moves an object from $x = 0$ to $x = 2$ m. How much work is done?
solution: $\int_0^2 3x^2\,dx = 8$ J.
:::

::: problem id=p2 type=numeric answer="20"
A force of 6 N holds a spring 0.3 m past its natural length. What is k (in N/m)?
solution: $6 = k \cdot 0.3$, so $k = 20$.
:::

::: problem id=p3 type=numeric answer="5/2"
Same spring ($k = 20$): how much work stretches it 0.5 m from its natural length?
solution: $\int_0^{0.5} 20x\,dx = 10(0.25) = 2.5$ J.
:::

::: problem id=p4 type=numeric answer="3"
A spring has natural length 10 cm. A force of 40 N holds it at 15 cm. How much work stretches it from 15 cm to 20 cm?
hint: Work in metres: the stretch goes from 0.05 to 0.1.
solution: $k = \frac{40}{0.05} = 800$. $W = \int_{0.05}^{0.1} 800x\,dx$, which is $400(0.01 - 0.0025) = 3$ J.
:::

::: problem id=p5 type=numeric answer="3920"
A 20 m cable of mass 2 kg/m hangs from the top of a building. How much work pulls it all up to the top?
hint: The piece x metres below the top moves x metres.
solution: $\int_0^{20} 2(9.8)\,x\,dx = 19.6 \cdot 200 = 3920$ J.
:::

::: problem id=p6 type=numeric answer="78400pi"
A cylindrical tank of radius 1 m and height 4 m is full of water. How much work pumps it all out over the top?
solution: A layer at height y weighs $9800\pi\,dy$ and moves $4 - y$. $W = 9800\pi\int_0^4 (4 - y)\,dy$, which is $9800\pi \cdot 8 = 78400\pi$ J.
:::

::: problem id=p7 type=numeric answer="88200"
A rectangular gate 2 m wide and 3 m tall stands upright in water, its top edge at the surface. What is the force of the water on it?
solution: Width 2 at every depth: $\int_0^3 9800\,d \cdot 2\,dd = 9800 \cdot 9 = 88200$ N.
:::

::: problem id=p8 type=choice
Why can't you find the force on a dam wall as (pressure) × (area)?
- [x] the pressure grows with depth, so it isn't one number
- [ ] the wall isn't flat
- [ ] water has no weight
- [ ] force doesn't depend on area
solution: Pressure is $9800\,d$, different at each depth. So slice the wall into thin horizontal strips, each at about one depth, and integrate.
:::

::: problem id=x1 type=numeric answer="24" set=extra
A force $F(x) = 5 + 2x$ N acts from $x = 0$ to $x = 3$ m. How much work is done?
solution: $\int_0^3 (5 + 2x)\,dx = 15 + 9 = 24$ J.
:::

::: problem id=x2 type=numeric answer="3/4" set=extra
A force $F(x) = \frac{1}{x^2}$ N acts from $x = 1$ to $x = 4$ m. How much work is done?
solution: $\left[-\frac{1}{x}\right]_1^4 = -\frac{1}{4} + 1 = \frac{3}{4}$ J.
:::

::: problem id=x3 type=numeric answer="2" set=extra
A spring has $k = 100$ N/m. How much work stretches it 0.2 m from its natural length?
solution: $\int_0^{0.2} 100x\,dx = 50(0.04) = 2$ J.
:::

::: problem id=x4 type=numeric answer="150" set=extra
It takes 12 J to stretch a spring 0.4 m from its natural length. What is k?
solution: $W = \frac{1}{2}k(0.4)^2 = 0.08k = 12$, so $k = 150$ N/m.
:::

::: problem id=x5 type=numeric answer="8" set=extra
A spring has $k = 200$ N/m. How much work stretches it from 0.1 m to 0.3 m past natural length?
solution: $\int_{0.1}^{0.3} 200x\,dx = 100(0.09 - 0.01) = 8$ J.
:::

::: problem id=x6 type=choice set=extra
Hooke's law says the force to hold a spring stretched x past natural length is:
- [x] $F = kx$
- [ ] $F = kx^2$
- [ ] $F = \frac{1}{2}kx^2$
- [ ] $F = \frac{k}{x}$
solution: $F = kx$. The **work** to stretch it is $\frac{1}{2}kx^2$.
:::

::: problem id=x7 type=numeric answer="1470" set=extra
A 10 m rope of mass 3 kg/m hangs down a well. How much work pulls it all up?
solution: $\int_0^{10} 3(9.8)\,x\,dx = 29.4 \cdot 50 = 1470$ J.
:::

::: problem id=x8 type=numeric answer="980" set=extra
A 5 kg bucket hangs from a 10 m rope of mass 1 kg/m. How much work lifts the bucket 10 m to the top, winding up the rope?
hint: Add the rope's work and the bucket's work.
solution: Rope: $\int_0^{10} 9.8x\,dx = 490$ J. Bucket: $5 \cdot 9.8 \cdot 10 = 490$ J. Total 980 J.
:::

::: problem id=x9 type=numeric answer="2940" set=extra
A 20 m cable of mass 2 kg/m hangs from a roof. How much work pulls up only the top 10 m of it?
hint: The top 10 m piece moves x each; the bottom 10 m all rises 10 m.
solution: Top part: $\int_0^{10} 19.6x\,dx = 980$ J. Bottom part: $20 \text{ kg} \cdot 9.8 \cdot 10 = 1960$ J. Total 2940 J.
:::

::: problem id=x10 type=numeric answer="367500pi" set=extra
The tank from the second example (radius 2 m, height 5 m) holds water only 2.5 m deep. How much work pumps it out over the top?
solution: $39200\pi\int_0^{2.5}(5 - y)\,dy$ is $39200\pi(12.5 - 3.125)$, which is $367500\pi$ J.
:::

::: problem id=x11 type=numeric answer="117600pi" set=extra
The tank of p6 (radius 1 m, height 4 m, full) is emptied through a spout 1 m **above** the top. How much work is that?
solution: Each layer now moves $5 - y$: $9800\pi\int_0^4 (5 - y)\,dy$, which is $9800\pi \cdot 12 = 117600\pi$ J.
:::

::: problem id=x12 type=numeric answer="24500" set=extra
A square plate 1 m on each side hangs upright in water with its top edge 2 m below the surface. What is the force on one side?
solution: Width 1, depths 2 to 3: $\int_2^3 9800\,d\,dd = 9800 \cdot 2.5 = 24500$ N.
:::

::: problem id=x13 type=numeric answer="58800" set=extra
A triangular plate, point down, has its 4 m top edge at the water's surface and is 3 m deep. What is the force on it?
hint: The width at depth d is $\frac{4}{3}(3 - d)$.
solution: $9800 \cdot \frac{4}{3}\int_0^3 (3d - d^2)\,dd$, which is $9800 \cdot \frac{4}{3} \cdot \frac{9}{2} = 58800$ N.
:::

::: problem id=x14 type=numeric answer="2" set=extra
A student says stretching a spring with $k = 100$ by 0.2 m takes force × distance $= (100 \cdot 0.2)(0.2) = 4$ J. What is the right work?
solution: The force grows from 0 to 20 N, so it isn't constant: $\int_0^{0.2} 100x\,dx = 2$ J (half the student's answer).
:::

::: problem id=x15 type=choice set=extra
A joule is:
- [x] a newton times a metre
- [ ] a newton per metre
- [ ] a kilogram times a metre
- [ ] a newton per square metre
solution: Work = force × distance, so $1 \text{ J} = 1 \text{ N} \cdot \text{m}$. (N/m is the unit of k; N/m² is pressure.)
:::

::: problem id=x16 type=numeric answer="5" set=extra
A force $F(r) = \frac{10}{r^2}$ N pulls on an object. How much work moves it against this force from $r = 1$ to $r = 2$ m?
solution: $\int_1^2 \frac{10}{r^2}\,dr = 10\left(1 - \frac{1}{2}\right) = 5$ J.
:::

::: problem id=x17 type=numeric answer="66150pi" set=extra
A cone-shaped tank points down. It is 3 m tall with top radius 3 m, and full of water. How much work pumps it out over the top?
hint: At height y above the tip the radius is y. A layer weighs $9800\pi y^2\,dy$ and rises $3 - y$.
solution: $9800\pi\int_0^3 y^2(3 - y)\,dy = 9800\pi\left(27 - \frac{81}{4}\right)$, which is $9800\pi \cdot 6.75 = 66150\pi$ J.
:::

::: problem id=x18 type=numeric answer="1470" set=extra
A bucket holding 10 kg of water is lifted 20 m at steady speed, leaking steadily so that 5 kg is left at the top. Ignoring the bucket and rope, how much work is done on the water?
hint: After rising x metres the mass is $10 - \frac{x}{4}$.
solution: $\int_0^{20} 9.8\left(10 - \frac{x}{4}\right)dx$, which is $9.8(200 - 50) = 1470$ J.
:::

::: problem id=x19 type=numeric answer="156800/3" set=extra
A half-disk plate of radius 2 m hangs upright in water, its straight edge along the surface. What is the force on it?
hint: At depth d the width is $2\sqrt{4 - d^2}$. Use $u = 4 - d^2$.
solution: $9800\int_0^2 2d\sqrt{4 - d^2}\,dd = 9800 \cdot \frac{2}{3} \cdot 8$, which is $\frac{156800}{3} \approx 52267$ N.
:::

::: problem id=x20 type=numeric answer="1/4" set=extra creative=true
For the full tank in p6, pumping out just the top half of the water (the top 2 m) takes what fraction of the work of emptying it all?
hint: The top half has half the water, but it doesn't have as far to go.
solution: Top half: $9800\pi\int_2^4 (4 - y)\,dy = 19600\pi$. Total: $78400\pi$. Fraction $\frac{1}{4}$.
:::
