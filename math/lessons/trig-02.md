---
id: trig-02
title: Solving right triangles
---
::: rule
- **Missing side:** pick the ratio that links the side you know, the side you want, and the angle. Then rearrange.
- **Missing angle:** find a ratio from two sides, then use the inverse: $A = \sin^{-1}(\ldots)$, $\cos^{-1}$ or $\tan^{-1}$.

The **angle of elevation** is measured up from the horizontal.
:::

::: example
Hypotenuse 10, angle 30°. The side opposite: $\sin 30° = \frac{x}{10}$, so $x = 10 \times \frac{1}{2} = 5$.
:::

::: example
Opposite 1, hypotenuse 2: $\sin A = \frac{1}{2}$, so $A = 30°$.
:::

::: problem id=p1 type=numeric answer="5"
A right triangle has hypotenuse 10 and an angle of 30°. How long is the side opposite the 30°?
solution: $10 \sin 30° = 5$.
:::

::: problem id=p2 type=numeric answer="5sqrt(3)" tolerance="0.01"
Same triangle: how long is the side adjacent to the 30°? (Type 5sqrt(3) or round to hundredths.)
hint: $\cos 30° = \frac{\sqrt{3}}{2}$.
solution: $10 \cos 30° = 5\sqrt{3} \approx 8.66$.
:::

::: problem id=p3 type=numeric answer="45"
$\tan A = 1$. What is A in degrees?
solution: $A = 45°$.
:::

::: problem id=p4 type=numeric answer="3sqrt(3)" tolerance="0.01"
A 6 m ladder makes a 60° angle with the ground. How high up the wall does it reach? (Exact or to hundredths.)
solution: $6 \sin 60° = 6 \times \frac{\sqrt{3}}{2} = 3\sqrt{3} \approx 5.20$ m.
:::

::: problem id=p5 type=numeric answer="30"
In a right triangle the side opposite angle A is 1 and the hypotenuse is 2. What is A in degrees?
solution: $\sin A = \frac{1}{2}$, so $A = 30°$.
:::

::: problem id=p6 type=numeric answer="4"
A right triangle has a 45° angle and the side adjacent to it is 4. How long is the opposite side?
solution: $\tan 45° = 1$, so the opposite side is also 4.
:::

::: problem id=p7 type=numeric answer="45"
You stand 20 m from a building that is 20 m tall. What is the angle of elevation to the top, in degrees?
solution: $\tan A = \frac{20}{20} = 1$: $A = 45°$.
:::

::: problem id=p8 type=numeric answer="6"
The side opposite a 30° angle is 3. How long is the hypotenuse?
solution: $\sin 30° = \frac{3}{h}$, so $h = 3 \div \frac{1}{2} = 6$.
:::

::: problem id=x1 type=numeric answer="6" set=extra
A right triangle has hypotenuse 12 and an angle of 30°. How long is the side opposite the 30°?
solution: $12 \sin 30° = 12 \times \frac{1}{2} = 6$.
:::

::: problem id=x2 type=numeric answer="4" set=extra
A right triangle has hypotenuse 8 and an angle of 60°. How long is the side adjacent to the 60°?
solution: $8 \cos 60° = 8 \times \frac{1}{2} = 4$.
:::

::: problem id=x3 type=numeric answer="7sqrt(3)" tolerance="0.01" set=extra
A right triangle has a 60° angle, and the side adjacent to it is 7. How long is the opposite side? (exact or to hundredths)
solution: $7 \tan 60° = 7\sqrt{3} \approx 12.12$.
:::

::: problem id=x4 type=numeric answer="6sqrt(3)" tolerance="0.01" set=extra
The side opposite a 60° angle is 9. How long is the hypotenuse? (exact or to hundredths)
solution: $h = \frac{9}{\sin 60°} = \frac{18}{\sqrt{3}} = 6\sqrt{3} \approx 10.39$.
:::

::: problem id=x5 type=numeric answer="60" set=extra
$\sin A = \frac{\sqrt{3}}{2}$ and A is an angle of a right triangle. What is A in degrees?
solution: $A = 60°$.
:::

::: problem id=x6 type=numeric answer="30" set=extra
A right triangle has the side opposite A equal to 5 and the side adjacent to A equal to $5\sqrt{3}$. What is A in degrees?
solution: $\tan A = \frac{5}{5\sqrt{3}} = \frac{1}{\sqrt{3}}$, so $A = 30°$.
:::

::: problem id=x7 type=numeric answer="6.43" tolerance="0.01" set=extra
Use a calculator in degree mode. A right triangle has hypotenuse 10 and an angle of 40°. How long is the side opposite the 40°? (to hundredths)
solution: $10 \sin 40° \approx 6.43$.
:::

::: problem id=x8 type=numeric answer="36.87" tolerance="0.01" set=extra
Use a calculator. A right triangle has legs 3 and 4. What is the angle opposite the side 3, in degrees? (to hundredths)
solution: $\tan A = \frac{3}{4}$, $A = \tan^{-1}(0.75) \approx 36.87°$.
:::

::: problem id=x9 type=numeric answer="30sqrt(3)" tolerance="0.01" set=extra
You stand 30 m from a building. The angle of elevation to the top is 60°. How tall is the building? (exact or to hundredths)
solution: $h = 30 \tan 60° = 30\sqrt{3} \approx 51.96$ m.
:::

::: problem id=x10 type=numeric answer="50sqrt(3)" tolerance="0.01" set=extra
From the top of a 50 m cliff, the angle of depression (measured down from the horizontal) to a boat is 30°. It equals the boat's angle of elevation to the cliff top. How far is the boat from the foot of the cliff? (exact or to hundredths)
solution: $\tan 30° = \frac{50}{d}$, so $d = 50\sqrt{3} \approx 86.60$ m.
:::

::: problem id=x11 type=numeric answer="53.13" tolerance="0.01" set=extra
Use a calculator. A 10 m ladder reaches 8 m up a wall. What angle does it make with the ground, in degrees? (to hundredths)
solution: $\sin A = \frac{8}{10}$, $A = \sin^{-1}(0.8) \approx 53.13°$.
:::

::: problem id=x12 type=numeric answer="25" set=extra
A kite string is 50 m long and makes a 30° angle with the ground. How high is the kite?
solution: $50 \sin 30° = 25$ m.
:::

::: problem id=x13 type=choice set=extra
You know the hypotenuse and one angle and want the side next to the angle. Which ratio links them?
- [ ] sin
- [x] cos
- [ ] tan
solution: Adjacent and hypotenuse: CAH, cosine.
:::

::: problem id=x14 type=numeric answer="11.47" tolerance="0.01" set=extra
Use a calculator. A ramp makes a 5° angle with the ground and rises 1 m. How long is the ramp surface? (to hundredths)
solution: $\sin 5° = \frac{1}{L}$, so $L = \frac{1}{\sin 5°} \approx 11.47$ m.
:::

::: problem id=x15 type=numeric answer="24.42" tolerance="0.01" set=extra
Use a calculator. A right triangle has a 35° angle with adjacent side 20. How long is the hypotenuse? (to hundredths)
solution: $h = \frac{20}{\cos 35°} \approx 24.42$.
:::

::: problem id=x16 type=text answers="bigger;larger;it gets bigger;increases;it increases" set=extra
You walk toward a tall tower. Does the angle of elevation to its top get bigger or smaller?
solution: The height stays, the distance shrinks, so $\tan A$ grows: it gets **bigger**.
:::

::: problem id=x17 type=numeric answer="25sqrt(3)/2" tolerance="0.01" set=extra
A right triangle has hypotenuse 10 and a 30° angle. What is its area? (exact or to hundredths)
hint: Find both legs first.
solution: Legs $10 \sin 30° = 5$ and $10 \cos 30° = 5\sqrt{3}$. Area $\frac{1}{2} \cdot 5 \cdot 5\sqrt{3} = \frac{25\sqrt{3}}{2} \approx 21.65$.
:::

::: problem id=x18 type=numeric answer="10sqrt(3)" tolerance="0.01" set=extra
An isosceles triangle has two sides of 10 and a top angle of 120°. How long is its base? (exact or to hundredths)
hint: The height splits it into two right triangles with a 60° angle at the top.
solution: Half the base is $10 \sin 60° = 5\sqrt{3}$. Base $10\sqrt{3} \approx 17.32$.
:::

::: problem id=x19 type=numeric answer="10sqrt(3)" tolerance="0.01" set=extra
From point P the angle of elevation to the top of a tower is 30°. After walking 20 m straight toward the tower it is 60°. How tall is the tower? (exact or to hundredths)
hint: With height h, the distances are $h\sqrt{3}$ and $\frac{h}{\sqrt{3}}$.
solution: $h\sqrt{3} - \frac{h}{\sqrt{3}} = \frac{2h}{\sqrt{3}} = 20$, so $h = 10\sqrt{3} \approx 17.32$ m.
:::

::: problem id=x20 type=numeric answer="2sqrt(3)" tolerance="0.01" set=extra creative=true
A regular hexagon has sides of 2. How far apart are two opposite sides? (exact or to hundredths)
hint: The hexagon is made of 6 equilateral triangles. Find the height of one.
solution: One triangle's height is $2 \sin 60° = \sqrt{3}$. Two of them across: $2\sqrt{3} \approx 3.46$.
:::
