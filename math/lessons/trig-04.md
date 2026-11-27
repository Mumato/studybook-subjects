---
id: trig-04
title: The law of sines
---
SOH CAH TOA needs a right angle. The law of sines works in **any** triangle. Label the angles A, B, C and the sides opposite them a, b, c.

::: rule
**Law of sines:**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

- **AAS or ASA** (two angles and a side): find the third angle ($A + B + C = 180°$), then each side.
- **SSA** (two sides and an angle not between them) is the **ambiguous case**. Find $\sin B = \frac{b \sin A}{a}$:
  - $\sin B > 1$: no triangle.
  - $\sin B = 1$: one right triangle.
  - $\sin B < 1$: B can be acute, or $180° - B$ (since $\sin(180° - x) = \sin x$). The obtuse one only works if it still leaves room for A.

**Area:** $\frac{1}{2}ab \sin C$ (two sides and the angle between them).
:::

::: example
$A = 30°$, $B = 45°$, $a = 10$. Find b.

$\frac{b}{\sin 45°} = \frac{10}{\sin 30°}$

$b = \frac{10 \cdot \frac{\sqrt{2}}{2}}{\frac{1}{2}} = 10\sqrt{2} \approx 14.14$
:::

::: example
SSA: $A = 30°$, $a = 6$, $b = 10$.

$\sin B = \frac{10 \sin 30°}{6} = \frac{5}{6}$

$B \approx 56.44°$ or $B \approx 123.56°$.

$30 + 123.56 < 180$, so both work: **two** triangles.
:::

Use a calculator in degree mode for decimals. Type roots as sqrt.

::: problem id=p1 type=numeric answer="8sqrt(2)" tolerance="0.01"
In triangle ABC, $A = 30°$, $B = 45°$ and $a = 8$. Find b. (exact or to hundredths)
hint: $b = \frac{a \sin B}{\sin A}$.
solution: $b = \frac{8 \cdot \frac{\sqrt{2}}{2}}{\frac{1}{2}} = 8\sqrt{2} \approx 11.31$.
:::

::: problem id=p2 type=numeric answer="5sqrt(6)" tolerance="0.01"
$A = 45°$, $B = 60°$, $a = 10$. Find b. (exact or to hundredths)
solution: $b = \frac{10 \cdot \frac{\sqrt{3}}{2}}{\frac{\sqrt{2}}{2}} = \frac{10\sqrt{3}}{\sqrt{2}} = 5\sqrt{6} \approx 12.25$.
:::

::: problem id=p3 type=numeric answer="8.85" tolerance="0.01"
ASA: $A = 50°$, $B = 70°$ and the side between them is $c = 10$. Find a. (to hundredths)
hint: Find C first.
solution: $C = 180 - 50 - 70 = 60°$. $a = \frac{10 \sin 50°}{\sin 60°} \approx 8.85$.
:::

::: problem id=p4 type=numeric answer="12"
A triangle has sides 6 and 8 with a 30° angle between them. What is its area?
solution: $\frac{1}{2} \cdot 6 \cdot 8 \cdot \sin 30° = 24 \cdot \frac{1}{2} = 12$.
:::

::: problem id=p5 type=numeric answer="5sqrt(3)" tolerance="0.01"
A triangle has sides 5 and 4 with a 60° angle between them. What is its area? (exact or to hundredths)
solution: $\frac{1}{2} \cdot 5 \cdot 4 \cdot \frac{\sqrt{3}}{2} = 5\sqrt{3} \approx 8.66$.
:::

::: problem id=p6 type=choice
SSA: $A = 30°$, $a = 3$, $b = 10$. How many triangles are there?
- [x] None
- [ ] One
- [ ] Two
solution: $\sin B = \frac{10 \cdot \frac{1}{2}}{3} = \frac{5}{3} > 1$: **no** triangle. Side a is too short to reach.
:::

::: problem id=p7 type=numeric answer="2"
SSA: $A = 30°$, $a = 5$, $b = 8$. How many triangles are there?
solution: $\sin B = \frac{8 \cdot \frac{1}{2}}{5} = 0.8$. $B \approx 53.13°$ or $126.87°$. $30 + 126.87 < 180$, so **2**.
:::

::: problem id=p8 type=numeric answer="90"
SSA: $A = 30°$, $a = 5$, $b = 10$. Find B in degrees.
solution: $\sin B = \frac{10 \cdot \frac{1}{2}}{5} = 1$, so $B = 90°$: exactly one (right) triangle.
:::

::: problem id=x1 type=numeric answer="3sqrt(6)" tolerance="0.01" set=extra
$A = 60°$, $B = 45°$, $b = 6$. Find a. (exact or to hundredths)
solution: $a = \frac{6 \cdot \frac{\sqrt{3}}{2}}{\frac{\sqrt{2}}{2}} = \frac{6\sqrt{3}}{\sqrt{2}} = 3\sqrt{6} \approx 7.35$.
:::

::: problem id=x2 type=numeric answer="4sqrt(3)" tolerance="0.01" set=extra
$A = 30°$, $C = 120°$, $a = 4$. Find c. (exact or to hundredths)
solution: $c = \frac{4 \sin 120°}{\sin 30°} = \frac{4 \cdot \frac{\sqrt{3}}{2}}{\frac{1}{2}} = 4\sqrt{3} \approx 6.93$.
:::

::: problem id=x3 type=numeric answer="18.03" tolerance="0.01" set=extra
$A = 40°$, $B = 75°$, $a = 12$. Find b. (to hundredths)
solution: $b = \frac{12 \sin 75°}{\sin 40°} \approx 18.03$.
:::

::: problem id=x4 type=numeric answer="17.5" set=extra
A triangle has sides 10 and 7 with a 150° angle between them. What is its area?
solution: $\sin 150° = \sin 30° = \frac{1}{2}$. Area $\frac{1}{2} \cdot 10 \cdot 7 \cdot \frac{1}{2} = 17.5$.
:::

::: problem id=x5 type=numeric answer="27sqrt(2)" tolerance="0.01" set=extra
A triangle has sides 9 and 12 with a 45° angle between them. What is its area? (exact or to hundredths)
solution: $\frac{1}{2} \cdot 9 \cdot 12 \cdot \frac{\sqrt{2}}{2} = 27\sqrt{2} \approx 38.18$.
:::

::: problem id=x6 type=numeric answer="41.85" tolerance="0.01" set=extra
A triangle has sides 8 and 11 with a 72° angle between them. What is its area? (to hundredths)
solution: $\frac{1}{2} \cdot 8 \cdot 11 \cdot \sin 72° = 44 \sin 72° \approx 41.85$.
:::

::: problem id=x7 type=numeric answer="30" set=extra
A triangle has sides 6 and 10, area 15, and the angle C between them is acute. Find C in degrees.
solution: $\frac{1}{2} \cdot 6 \cdot 10 \sin C = 15$, so $\sin C = \frac{1}{2}$ and $C = 30°$.
:::

::: problem id=x8 type=choice set=extra
Which given information can give two different triangles?
- [ ] ASA
- [ ] AAS
- [x] SSA
- [ ] Three angles and no side
solution: SSA is the ambiguous case. (Three angles fix only the shape, not the size: infinitely many triangles.)
:::

::: problem id=x9 type=numeric answer="1" set=extra
SSA: $A = 40°$, $a = 10$, $b = 8$. How many triangles are there?
solution: $\sin B = \frac{8 \sin 40°}{10} \approx 0.514$, so $B \approx 30.9°$ or $149.1°$. $40 + 149.1 > 180$, so only **1**.
:::

::: problem id=x10 type=numeric answer="0" set=extra
SSA: $A = 120°$, $a = 5$, $b = 7$. How many triangles are there?
hint: Which side must be the longest when A is obtuse?
solution: An obtuse A needs the longest side opposite it, but $a < b$. (Also $\sin B = \frac{7 \sin 120°}{5} > 1$.) **0** triangles.
:::

::: problem id=x11 type=numeric answer="43.58" tolerance="0.01" set=extra
$A = 80°$, $a = 10$, $b = 7$. Find B in degrees. (to hundredths)
solution: $\sin B = \frac{7 \sin 80°}{10} \approx 0.6894$, $B \approx 43.58°$. (The obtuse option $136.42°$ is too big with $A = 80°$.)
:::

::: problem id=x12 type=choice set=extra
Working an SSA problem, Jo gets $\sin B = 1.3$. What does that mean?
- [ ] B is about 1.3°
- [ ] Use $180° - B$ instead
- [x] No triangle has these measurements
- [ ] B is obtuse
solution: Sine is never more than 1, so **no** triangle exists.
:::

::: problem id=x13 type=numeric answer="1366.03" tolerance="0.01" set=extra
Two rangers stand 1000 m apart at A and B. They see a fire F. Angle FAB is 60° and angle FBA is 75°. How far is the fire from A? (to hundredths)
hint: Find the angle at F, then use the law of sines.
solution: $F = 180 - 60 - 75 = 45°$. $AF = \frac{1000 \sin 75°}{\sin 45°} \approx 1366.03$ m.
:::

::: problem id=x14 type=numeric answer="124.98" tolerance="0.01" set=extra
SSA: $A = 35°$, $a = 7$, $b = 10$. Two triangles exist. Find the obtuse value of B. (to hundredths)
solution: $\sin B = \frac{10 \sin 35°}{7} \approx 0.8194$. Acute $B \approx 55.02°$; obtuse $B \approx 180 - 55.02 = 124.98°$.
:::

::: problem id=x15 type=numeric answer="4.18" tolerance="0.01" set=extra
In the obtuse triangle of the last problem ($A = 35°$, $a = 7$, $B \approx 124.98°$), find c. (to hundredths)
hint: Find C first.
solution: $C \approx 180 - 35 - 124.98 = 20.02°$. $c = \frac{7 \sin 20.02°}{\sin 35°} \approx 4.18$.
:::

::: problem id=x16 type=numeric answer="16sqrt(3)" tolerance="0.01" set=extra
A triangle has two sides of 8 with a 60° angle between them. What is its area? (exact or to hundredths)
solution: $\frac{1}{2} \cdot 8 \cdot 8 \cdot \frac{\sqrt{3}}{2} = 16\sqrt{3} \approx 27.71$.
:::

::: problem id=x17 type=numeric answer="30" set=extra
A parallelogram has sides 6 and 10 with a 30° angle between them. What is its area?
hint: A diagonal splits it into two equal triangles.
solution: Each triangle: $\frac{1}{2} \cdot 6 \cdot 10 \cdot \frac{1}{2} = 15$. Two of them: 30.
:::

::: problem id=x18 type=numeric answer="2sqrt(2)" tolerance="0.01" set=extra
$A = 45°$, $B = 30°$, $a = 4$. Find b. (exact or to hundredths)
solution: $b = \frac{4 \cdot \frac{1}{2}}{\frac{\sqrt{2}}{2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2} \approx 2.83$.
:::

::: problem id=x19 type=numeric answer="10" set=extra
A ship sails past a lighthouse L. At P, the angle between the direction it is sailing and the line to L is 25°. It sails 10 km straight on to Q, where the angle between the direction it is sailing and the line to L is 50°. How far is Q from L?
hint: Angle PQL is $180 - 50 = 130°$. Find the angle at L.
solution: Angle at L $= 180 - 25 - 130 = 25°$, equal to the angle at P. So the triangle is isosceles: $QL = PQ = 10$ km.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
$A = 30°$ and $b = 10$. What is the smallest whole number a that gives exactly two triangles?
hint: Two triangles need $\sin B < 1$ and also $a < b$.
solution: $\sin B = \frac{5}{a} < 1$ needs $a > 5$. If $a \ge 10$ the obtuse B leaves no room. So $5 < a < 10$: smallest whole number **6**.
:::
