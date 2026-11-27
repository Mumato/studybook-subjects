---
id: app-05
title: Related rates
---
In a related rates problem, two or more quantities change with time and are linked by an equation. Knowing how fast one changes tells you how fast the others change.

::: rule
1. Draw a picture. Name every quantity that changes (x, y, r, h, ...).
2. Write down the given rate and the wanted rate as derivatives, like $\frac{dx}{dt} = 2$.
3. Write an equation linking the quantities (Pythagoras, area, volume, similar triangles).
4. Differentiate **both sides** with respect to t, using the chain rule.
5. Only now substitute the numbers for the moment asked about, and solve.

Never put in the numbers before you differentiate: a quantity that is changing must stay a letter.
:::

::: example
**Ladder.** A 13 m ladder leans on a wall. Its foot slides away at 2 m/s. How fast does the top slide down when the foot is 5 m from the wall?

Foot x, top y: $x^2 + y^2 = 169$.

Differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$.

When $x = 5$: $y = \sqrt{169 - 25} = 12$.

$5 \cdot 2 + 12\frac{dy}{dt} = 0$, so $\frac{dy}{dt} = -\frac{5}{6}$.

The top slides down at $\frac{5}{6}$ m/s.
:::

::: example
**Cone filling.** A cone-shaped tank, point down, is 4 m tall with top radius 2 m. Water flows in at 2 m³/min. How fast does the level rise when the water is 2 m deep?

Similar triangles: $\frac{r}{h} = \frac{2}{4}$, so $r = \frac{h}{2}$.

$V = \frac{1}{3}\pi r^2 h = \frac{\pi h^3}{12}$.

Differentiate: $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$.

At $h = 2$: $2 = \pi\frac{dh}{dt}$, so $\frac{dh}{dt} = \frac{2}{\pi} \approx 0.64$ m/min.
:::

::: problem id=p1 type=numeric answer="5/6"
A 13 m ladder leans on a wall. Its foot slides away at 2 m/s. How fast is the top sliding down when the foot is 5 m from the wall?
hint: $x^2 + y^2 = 169$. When $x = 5$, $y = 12$.
solution: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$.
$5 \cdot 2 + 12\frac{dy}{dt} = 0$, $\frac{dy}{dt} = -\frac{5}{6}$: down at $\frac{5}{6}$ m/s.
:::

::: problem id=p2 type=numeric answer="60pi"
A stone dropped in a pond makes a circular ripple whose radius grows at 3 cm/s. How fast is the area growing when $r = 10$ cm? (in terms of pi)
solution: $A = \pi r^2$, $\frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.
$2\pi \cdot 10 \cdot 3 = 60\pi$ cm²/s.
:::

::: problem id=p3 type=numeric answer="1/pi"
Air is pumped into a spherical balloon at 100 cm³/s. How fast is the radius growing when $r = 5$ cm? (in terms of pi)
hint: $V = \frac{4}{3}\pi r^3$, so $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$.
solution: $100 = 4\pi \cdot 25\frac{dr}{dt}$.
$\frac{dr}{dt} = \frac{100}{100\pi} = \frac{1}{\pi}$ cm/s.
:::

::: problem id=p4 type=numeric answer="2/pi"
A cone tank, point down, is 4 m tall with top radius 2 m. Water flows in at 2 m³/min. How fast is the level rising when the water is 2 m deep? (in terms of pi)
hint: $r = \frac{h}{2}$, so $V = \frac{\pi h^3}{12}$.
solution: $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$.
At $h = 2$: $2 = \pi\frac{dh}{dt}$, so $\frac{dh}{dt} = \frac{2}{\pi}$ m/min.
:::

::: problem id=p5 type=numeric answer="3/4"
A 2 m tall man walks away from a 6 m street lamp at 1.5 m/s. How fast is his shadow getting longer?
hint: Let x be his distance from the lamp and s his shadow. Similar triangles: $\frac{6}{x + s} = \frac{2}{s}$.
solution: $6s = 2x + 2s$, so $s = \frac{x}{2}$.
$\frac{ds}{dt} = \frac{1}{2} \cdot 1.5 = \frac{3}{4}$ m/s.
:::

::: problem id=p6 type=numeric answer="100"
Two cars leave a crossroads: one drives north at 60 km/h, the other east at 80 km/h. How fast is the distance between them growing when the first is 3 km north and the second 4 km east?
hint: $z^2 = x^2 + y^2$, so $z\frac{dz}{dt} = x\frac{dx}{dt} + y\frac{dy}{dt}$.
solution: $z = 5$. $5\frac{dz}{dt} = 3 \cdot 60 + 4 \cdot 80 = 500$.
$\frac{dz}{dt} = 100$ km/h.
:::

::: problem id=p7 type=choice
In a related rates problem, when do you put in the numbers for the moment asked about?
- [ ] Before writing the equation
- [ ] Before differentiating
- [x] After differentiating
- [ ] Never
solution: Quantities that change must stay letters until **after** you differentiate. Otherwise their rates disappear.
:::

::: problem id=p8 type=numeric answer="24"
The edge of a cube grows at 0.5 cm/s. How fast is the volume growing when the edge is 4 cm?
solution: $V = s^3$, $\frac{dV}{dt} = 3s^2\frac{ds}{dt}$.
$3 \cdot 16 \cdot 0.5 = 24$ cm³/s.
:::

::: problem id=x1 type=numeric answer="24pi" set=extra
A circle's radius grows at 4 cm/s. How fast is the area growing when $r = 3$ cm? (in terms of pi)
solution: $\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi \cdot 3 \cdot 4 = 24\pi$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
A circle's area grows at $20\pi$ cm²/s. How fast is the radius growing when $r = 5$ cm?
solution: $20\pi = 2\pi \cdot 5\frac{dr}{dt}$, so $\frac{dr}{dt} = 2$ cm/s.
:::

::: problem id=x3 type=numeric answer="6pi" set=extra
A circle's radius grows at 3 cm/s. How fast is its circumference growing? (in terms of pi)
solution: $C = 2\pi r$, $\frac{dC}{dt} = 2\pi \cdot 3 = 6\pi$ cm/s, at every moment.
:::

::: problem id=x4 type=numeric answer="128pi" set=extra
A sphere's radius grows at 2 cm/s. How fast is its volume growing when $r = 4$ cm? (in terms of pi)
solution: $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 4\pi \cdot 16 \cdot 2 = 128\pi$.
:::

::: problem id=x5 type=numeric answer="1" set=extra
A cube's volume grows at 12 cm³/s. How fast is the edge growing when the edge is 2 cm?
solution: $12 = 3s^2\frac{ds}{dt} = 12\frac{ds}{dt}$, so $\frac{ds}{dt} = 1$ cm/s.
:::

::: problem id=x6 type=numeric answer="3/4" set=extra
A 10 m ladder's top slides down a wall at 1 m/s. How fast is its foot moving away when the top is 6 m up?
solution: $x^2 + y^2 = 100$; at $y = 6$, $x = 8$.
$8\frac{dx}{dt} + 6(-1) = 0$, $\frac{dx}{dt} = \frac{3}{4}$ m/s.
:::

::: problem id=x7 type=numeric answer="-3/8" set=extra
A 5 m ladder's foot is pulled away from a wall at 0.5 m/s. What is $\frac{dy}{dt}$ (the rate of change of the top's height) when the foot is 3 m out?
solution: $y = 4$. $3 \cdot 0.5 + 4\frac{dy}{dt} = 0$.
$\frac{dy}{dt} = -\frac{3}{8}$ m/s (falling).
:::

::: problem id=x8 type=numeric answer="2" set=extra
A spherical balloon loses air at $32\pi$ cm³/s. How fast is its radius shrinking when $r = 2$ cm?
solution: $-32\pi = 4\pi \cdot 4\frac{dr}{dt}$, $\frac{dr}{dt} = -2$.
Shrinking at 2 cm/s.
:::

::: problem id=x9 type=numeric answer="40pi" set=extra
A sphere's radius grows at 1 cm/s. How fast is its surface area $S = 4\pi r^2$ growing when $r = 5$? (in terms of pi)
solution: $\frac{dS}{dt} = 8\pi r\frac{dr}{dt} = 8\pi \cdot 5 \cdot 1 = 40\pi$.
:::

::: problem id=x10 type=numeric answer="2" set=extra
A rectangle's length grows at 2 cm/s while its width shrinks at 1 cm/s. How fast is the area changing when the length is 10 and the width 6?
hint: $A = LW$: use the product rule.
solution: $\frac{dA}{dt} = \frac{dL}{dt}W + L\frac{dW}{dt}$
$= 2 \cdot 6 + 10(-1) = 2$ cm²/s.
:::

::: problem id=x11 type=numeric answer="3" set=extra
A 1.5 m tall woman walks away from a 4.5 m lamp post at 2 m/s. How fast is the **tip** of her shadow moving?
hint: The tip is at distance $x + s$ from the lamp. First find s in terms of x.
solution: $\frac{4.5}{x + s} = \frac{1.5}{s}$ gives $3s = 1.5x$, $s = \frac{x}{2}$.
Tip: $\frac{d}{dt}(x + s) = 2 + 1 = 3$ m/s.
:::

::: problem id=x12 type=numeric answer="2" set=extra
A cone tank, point down, is 9 m tall with top radius 3 m. Water flows in at $2\pi$ m³/min. How fast does the level rise when the water is 3 m deep?
solution: $r = \frac{h}{3}$, $V = \frac{\pi h^3}{27}$, $\frac{dV}{dt} = \frac{\pi h^2}{9}\frac{dh}{dt}$.
At $h = 3$: $2\pi = \pi\frac{dh}{dt}$, so 2 m/min.
:::

::: problem id=x13 type=numeric answer="9/5" set=extra
A kite flies 40 m high and drifts horizontally away at 3 m/s. How fast is the string being let out when 50 m of string is out?
solution: $z^2 = x^2 + 40^2$; at $z = 50$, $x = 30$.
$z\frac{dz}{dt} = x\frac{dx}{dt}$: $50\frac{dz}{dt} = 90$, $\frac{dz}{dt} = \frac{9}{5}$ m/s.
:::

::: problem id=x14 type=numeric answer="400" set=extra
A plane flies level at 6 km height and 500 km/h. It passes straight over a radar station. How fast is its distance from the station growing when that distance is 10 km?
solution: $z^2 = x^2 + 36$; at $z = 10$, $x = 8$.
$10\frac{dz}{dt} = 8 \cdot 500$, $\frac{dz}{dt} = 400$ km/h.
:::

::: problem id=x15 type=numeric answer="18" set=extra
Car A is 0.6 km east of a crossroads, driving toward it at 50 km/h. Car B is 0.8 km north of it, driving away at 60 km/h. How fast is the distance between them changing?
hint: Car A's distance is shrinking, so $\frac{dx}{dt} = -50$.
solution: $z = 1$. $z\frac{dz}{dt} = x\frac{dx}{dt} + y\frac{dy}{dt}$
$= 0.6(-50) + 0.8(60) = 18$. Growing at 18 km/h.
:::

::: problem id=x16 type=choice set=extra
For a circle with $r = 5$ and $\frac{dr}{dt} = 2$, a student writes $A = \pi \cdot 5^2 = 25\pi$, then $\frac{dA}{dt} = 0$. What went wrong?
- [ ] Nothing: the area is constant
- [x] r was replaced by 5 before differentiating
- [ ] The area formula is wrong
- [ ] The chain rule doesn't apply
solution: r is changing, so it must stay a letter: $\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 20\pi$.
:::

::: problem id=x17 type=numeric answer="1" set=extra
Sand pours onto a conical pile at $9\pi$ m³/min. The pile's height always equals its radius. How fast is the height growing when it is 3 m?
hint: With $r = h$, $V = \frac{1}{3}\pi h^3$.
solution: $\frac{dV}{dt} = \pi h^2\frac{dh}{dt}$.
$9\pi = 9\pi\frac{dh}{dt}$, so 1 m/min.
:::

::: problem id=x18 type=numeric answer="1/8" set=extra
A 10 m ladder's foot slides away at 1 m/s. How fast (in rad/s) is the angle between the ladder and the ground shrinking when the foot is 6 m out?
hint: $x = 10\cos\theta$. Differentiate with respect to t.
solution: $\frac{dx}{dt} = -10\sin\theta\frac{d\theta}{dt}$. Here $\sin\theta = \frac{8}{10}$.
$1 = -8\frac{d\theta}{dt}$, $\frac{d\theta}{dt} = -\frac{1}{8}$ rad/s.
:::

::: problem id=x19 type=numeric answer="27/sqrt(5)" set=extra
A point moves along $y = x^2$ with x growing at 3 units/s. How fast is its distance D from the origin growing at $(2, 4)$?
hint: $D^2 = x^2 + y^2 = x^2 + x^4$.
solution: $2D\frac{dD}{dt} = (2x + 4x^3)\frac{dx}{dt}$. $D = \sqrt{20} = 2\sqrt{5}$.
$4\sqrt{5}\frac{dD}{dt} = 36 \cdot 3$, $\frac{dD}{dt} = \frac{27}{\sqrt{5}}$.
:::

::: problem id=x20 type=numeric answer="pi+1" set=extra creative=true
A cone tank, point down, is 4 m tall with top radius 2 m. It leaks at 1 m³/min while water is pumped in at k m³/min. When the water is 2 m deep, the level rises at 1 m/min. Find k.
hint: The net rate is $\frac{dV}{dt} = k - 1$.
solution: $V = \frac{\pi h^3}{12}$, $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt} = \pi \cdot 1 = \pi$.
$k - 1 = \pi$, so $k = \pi + 1$.
:::
