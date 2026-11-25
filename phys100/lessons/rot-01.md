---
id: rot-01
title: Circular motion
---
Anything moving in a circle is accelerating, because its direction keeps changing. By the first law, that needs a force: something must keep pulling it toward the centre. (OpenStax College Physics 2e ch. 6)

::: rule
- **Rotational speed** is turns per second: every point on a turning merry-go-round has the same. **Linear (tangential) speed** is metres per second: points farther from the centre go farther each turn, so they move faster.
- Circular motion needs a **centripetal force**, pointing toward the centre:
$$F = \frac{m v^{2}}{r}$$
- The force comes from something real: a string's tension, a road's friction, gravity.
- Nothing pushes you *outward* in a turn. Your body just tries to keep going straight (inertia). Let go, and the object leaves along a straight line, at a tangent.
:::

![](assets/rot-cut.3x.png)

::: example
A 1000 kg car takes a curve of radius 50 m at 20 m/s. The road's friction must supply
$$F = \frac{1000 \times 20^{2}}{50} = 8000 \text{ N}$$
toward the centre of the curve. On ice there's too little friction, so the car slides straight on.
:::

::: problem id=p1 type=choice
Two children ride the merry-go-round: A near the middle, B at the edge. Which is true?
![](assets/rot-merry.3x.png)
- [ ] A and B have the same linear speed.
- [x] They have the same rotational speed, but B has the greater linear speed.
- [ ] A has the greater rotational speed.
solution: Both go around once per turn, so the rotational speed is equal. B travels a bigger circle in the same time, so B moves faster.
:::

::: problem id=p2 type=numeric answer="2pi" tolerance=0.05
A horse on a carousel is 10 m from the centre and goes around once every 10 s. What is its linear speed, in m/s? (One lap is $2\pi r$.)
solution: One lap is $2\pi \times 10 \approx 62.8$ m, in 10 s: $v = 2\pi \approx 6.28$ m/s.
:::

::: problem id=p3 type=choice
A car turns a corner on a flat road. What force pulls it toward the centre of the turn?
- [ ] the engine
- [ ] centrifugal force
- [x] friction between the tyres and the road
- [ ] gravity
solution: The tyres grip the road sideways. That friction is the centripetal force.
:::

::: problem id=p4 type=choice
You whirl a ball on a string in a horizontal circle, and the string snaps when the ball is at the top of the picture. Which way does the ball go?
![](assets/rot-cut.3x.png)
- [ ] straight outward, away from the centre
- [x] straight on, along the direction it was moving
- [ ] it keeps curving, then straightens out
solution: With the pull gone, no force acts sideways: it continues in a straight line along its velocity at that moment.
:::

::: problem id=p5 type=numeric answer="8000"
A 1000 kg car rounds a curve of radius 50 m at 20 m/s. What centripetal force is needed, in newtons?
solution: $F = 1000 \times 400 / 50 = 8000$ N.
:::

::: problem id=p6 type=numeric answer="4"
The car takes the same curve at twice the speed. By what factor does the needed centripetal force grow?
solution: $F \propto v^{2}$: $2^{2} = 4$. This is why taking a bend too fast is dangerous.
:::

::: problem id=p7 type=choice
In a car turning sharply left, you feel pressed against the right door. Why?
- [ ] A centrifugal force pushes you outward.
- [x] Your body tends to go straight, and the door pushes you left to make you turn.
- [ ] The car's engine pushes you right.
solution: The only real force on you sideways is the door pushing you *inward*. You feel squashed because the door is forcing you to turn.
:::
