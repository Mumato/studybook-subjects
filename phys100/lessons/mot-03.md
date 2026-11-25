---
id: mot-03
title: Free fall
---
Drop a stone and it speeds up as it falls. Galileo found the surprise: if air doesn't get in the way, **everything falls with the same acceleration**, heavy or light. (OpenStax College Physics 2e ch. 2)

::: rule
Without air resistance, a falling object accelerates downward at $g \approx 10$ m/s² (more exactly 9.8). Dropped from rest:
$$v = g t \qquad d = \frac{1}{2} g t^{2}$$
- Thrown **up**, it loses 10 m/s every second until it stops at the top, then falls back, gaining 10 m/s each second.
- At the top the velocity is zero, but the acceleration is **still 10 m/s² downward**.
- Heavy and light objects fall together. A feather falls slowly only because of the air.
:::

![](assets/mot-freefall@3x.png)

::: example
A stone is dropped down a well and hits the water after 2 s.
$$v = 10 \times 2 = 20 \text{ m/s}$$
$$d = \tfrac{1}{2} \times 10 \times 2^{2} = 20 \text{ m}$$
The distance grows with the *square* of the time: in 4 s it would fall 80 m, not 40.
:::

::: example
A ball is thrown straight up at 30 m/s. Each second it loses 10 m/s: 30, 20, 10, 0. It reaches the top after 3 s, then takes another 3 s to fall back, arriving at 30 m/s.

![Spread out sideways so the dots don't overlap](assets/mot-up@3x.png)
:::

::: problem id=p1 type=numeric answer="30"
A rock is dropped from rest. How fast is it falling after 3 s, in m/s? (Use $g = 10$ m/s² and ignore air.)
solution: $v = 10 \times 3 = 30$ m/s.
:::

::: problem id=p2 type=numeric answer="45"
How far has that rock fallen after 3 s, in metres?
solution: $d = \tfrac{1}{2} \times 10 \times 3^{2} = 45$ m.
:::

::: problem id=p3 type=numeric answer="2"
A ball is thrown straight up at 20 m/s. How many seconds does it take to reach the top?
hint: It loses 10 m/s every second.
solution: $20 / 10 = 2$ s.
:::

::: problem id=p4 type=choice
A ball thrown straight up is at its highest point. Which is true there?
- [ ] Its velocity and acceleration are both zero.
- [x] Its velocity is zero, but its acceleration is 10 m/s² downward.
- [ ] Its velocity is 10 m/s, its acceleration is zero.
- [ ] Its acceleration is upward.
solution: Gravity never switches off. If the acceleration were zero at the top, the ball would just hang there.
:::

::: problem id=p5 type=choice
On the Moon (no air), an astronaut drops a hammer and a feather from the same height at the same time. What happens?
- [ ] The hammer lands first.
- [ ] The feather lands first.
- [x] They land together.
solution: Without air, every object falls with the same acceleration. This was actually done on the Apollo 15 mission.
:::

::: problem id=p6 type=numeric answer="80"
A stone dropped from a cliff hits the ground after 4 s. How high is the cliff, in metres?
solution: $d = \tfrac{1}{2} \times 10 \times 4^{2} = 80$ m.
:::

::: problem id=p7 type=numeric answer="6"
A ball is thrown straight up at 30 m/s and caught at the same height. How many seconds is it in the air?
solution: 3 s up (30 ÷ 10) and 3 s down: $6$ s.
:::

::: problem id=p8 type=numeric answer="sqrt(8)" tolerance=0.02 creative=true
A ball dropped from a balcony takes 2 s to land. A friend says that from twice as high it would take 4 s. How long would it really take, in seconds?
hint: First find the height. Then use $d = \tfrac{1}{2} g t^{2}$ with twice that height.
solution: The balcony is $\tfrac{1}{2} \times 10 \times 2^{2} = 20$ m high. From 40 m: $40 = 5t^{2}$, so $t^{2} = 8$ and $t = \sqrt{8} \approx 2.83$ s. Doubling the height multiplies the time by only $\sqrt{2}$, because the ball keeps speeding up.
:::
