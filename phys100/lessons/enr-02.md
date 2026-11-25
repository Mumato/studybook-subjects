---
id: enr-02
title: Potential and kinetic energy
---
Energy is the ability to do work. Lift a rock and you store energy in it; let it fall and that energy shows up as motion. The total never changes: it only changes form. (OpenStax College Physics 2e ch. 7)

::: rule
$$PE = m g h \qquad KE = \frac{1}{2} m v^{2}$$
- **Potential energy** (PE) is stored energy of position: a raised mass, a stretched spring.
- **Kinetic energy** (KE) is energy of motion. Because of the $v^2$, **twice the speed means four times the KE**.
- **Conservation of energy:** energy is never created or destroyed. Without friction, PE + KE stays the same: what is lost in one is gained in the other.
:::

![A falling ball: PE turns into KE](assets/enr-bars@3x.png)

::: example
A 2 kg ball is dropped from 20 m. At the top: $PE = 2 \times 10 \times 20 = 400$ J and $KE = 0$. At the bottom all 400 J is kinetic:
$$\tfrac{1}{2} \times 2 \times v^{2} = 400$$
so $v^{2} = 400$ and $v = 20$ m/s, the same answer free fall gave. Notice the mass cancels: any ball dropped from 20 m lands at 20 m/s.
:::

::: problem id=p1 type=numeric answer="30"
A 2 kg book sits on a shelf 1.5 m above the floor. What is its potential energy relative to the floor, in joules?
solution: $PE = 2 \times 10 \times 1.5 = 30$ J.
:::

::: problem id=p2 type=numeric answer="200000"
What is the kinetic energy of a 1000 kg car moving at 20 m/s, in joules?
solution: $KE = \tfrac{1}{2} \times 1000 \times 20^{2}$, which is $500 \times 400 = 200000$ J.
:::

::: problem id=p3 type=numeric answer="4"
A car doubles its speed. By what factor does its kinetic energy grow?
solution: $KE \propto v^{2}$: $2^{2} = 4$.
:::

::: problem id=p4 type=numeric answer="120"
A car moving at 50 km/h needs 30 m to brake to a stop. Braking with the same force, about how many metres does it need at 100 km/h?
hint: The brakes must do work equal to the KE. How does the KE change?
solution: Double the speed gives four times the KE, so four times the braking distance: $4 \times 30 = 120$ m. This is why speeding is so dangerous.
:::

::: problem id=p5 type=numeric answer="30"
A roller coaster starts at rest at A, 45 m above the lowest point B. Ignoring friction, how fast is it moving at B, in m/s?
![](assets/enr-coaster@3x.png)
hint: All the PE lost turns into KE. The mass cancels.
solution: $g h = \tfrac{1}{2} v^{2}$: $10 \times 45 = 450 = \tfrac{1}{2} v^{2}$, so $v^{2} = 900$ and $v = 30$ m/s.
:::

::: problem id=p6 type=numeric answer="20"
On the same coaster, how fast is it moving at C, 25 m high, in m/s?
![](assets/enr-coaster@3x.png)
solution: It has dropped $45 - 25 = 20$ m: $10 \times 20 = \tfrac{1}{2} v^{2}$, $v^{2} = 400$, $v = 20$ m/s.
:::

::: problem id=p7 type=choice creative=true
Two smooth slides start at the same height and end at the same height. One is short and steep, the other long and gentle. Two identical kids start at rest. Ignoring friction, which kid is faster at the bottom?
- [ ] the one on the steep slide
- [ ] the one on the gentle slide
- [x] they have the same speed
solution: Each loses the same PE ($mgh$ depends only on the height), so each gains the same KE and has the same speed. The steep slide just gets there sooner.
:::
