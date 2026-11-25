---
id: rel-01
title: Time dilation
---
In 1905 Einstein took two simple ideas seriously and found that time itself depends on how you move. It sounds impossible, yet it's measured every day: GPS satellites have to correct for it. (OpenStax College Physics 2e ch. 28)

::: rule
**Einstein's two postulates:**
- The laws of physics are the same for everyone moving at constant velocity.
- The **speed of light is the same for every observer**, however fast they or the source move.

**Time dilation:** a moving clock runs slow, by the factor
$$\gamma = \frac{1}{\sqrt{1 - v^{2}/c^{2}}}$$
At everyday speeds $\gamma$ is almost exactly 1. At $0.6c$ it's 1.25; at $0.8c$ it's $5/3$.
:::

![A light clock: moving, the light's path is longer, so each tick takes longer](assets/rel-clock@3x.png)

::: example
A spaceship flies at $0.8c$ for what Earth calls 10 years. On board, only
$$\frac{10}{5/3} = 6 \text{ years}$$
pass. The crew ages 6 years, Earth ages 10. Nobody feels anything odd: their own clocks, hearts and thoughts all run normally to them.
:::

::: problem id=p1 type=numeric answer="1.25" tolerance=0.001
What is $\gamma$ for a speed of $0.6c$?
hint: $v^{2}/c^{2} = 0.36$.
solution: $\sqrt{1 - 0.36} = \sqrt{0.64} = 0.8$, and $1/0.8 = 1.25$.
:::

::: problem id=p2 type=numeric answer="5"
A ship moves at $0.8c$ ($\gamma = 5/3$). Its clock records 3 hours. How many hours pass on Earth?
solution: $3 \times 5/3 = 5$ hours.
:::

::: problem id=p3 type=numeric answer="8"
A traveller moves at $0.6c$ for a trip that takes 10 years by Earth's clocks. How many years does the traveller age?
solution: $10 / 1.25 = 8$ years.
:::

::: problem id=p4 type=choice
A spaceship racing toward you at half the speed of light switches on its headlight. How fast do you measure that light approaching you?
- [ ] $1.5c$
- [x] $c$
- [ ] $0.5c$
solution: The second postulate: everyone measures the same speed of light, whatever the motion.
:::

::: problem id=p5 type=choice
Muons are made high in the atmosphere and live only about 2 microseconds, too short to reach the ground even at nearly light speed. Yet many reach the ground. Why?
- [ ] They're pushed by the wind.
- [x] Moving so fast, their clocks run slow as seen from Earth, so they last much longer.
- [ ] They're made at ground level.
solution: Time dilation, measured directly. It's one of the classic tests of relativity.
:::

::: problem id=p6 type=choice
One twin flies to a distant star at high speed and returns. Compared with the twin who stayed home, the traveller is:
- [x] younger
- [ ] older
- [ ] the same age
solution: The traveller's clock ran slow during the trip. The trip isn't symmetric: only the traveller turned around.
:::

::: problem id=p7 type=choice
At highway speeds, why don't we notice time dilation?
- [ ] It only affects light.
- [x] $v$ is tiny compared with $c$, so $\gamma$ is extremely close to 1.
- [ ] Cars are too heavy.
solution: At 30 m/s the effect is about one part in $10^{14}$.
:::
