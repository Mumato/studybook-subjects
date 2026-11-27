---
id: ang-02
title: Triangle facts
---
::: rule
- The angles of a triangle add up to **180°**.
- An **isosceles** triangle has two equal sides, and the angles opposite them (the base angles) are equal.
- An **equilateral** triangle has all sides equal and every angle 60°.
- An **exterior angle** equals the sum of the two interior angles not next to it.
:::

::: example
Angles 50° and 60°: the third is $180 - 50 - 60 = 70°$.
:::

::: example
An isosceles triangle with top angle 40°: the base angles share $180 - 40 = 140°$, so each is 70°.
:::

::: graph
x -1..5
y -1..5
axes off
grid off
polygon 0,0 4,0 2,4 fill
label 2,3.2 40°
label 0.75,0.35 70°
label 3.25,0.35 70°
:::

::: problem id=p1 type=numeric answer="70"
A triangle has angles 50° and 60°. What is the third angle?
solution: $180 - 50 - 60 = 70°$.
:::

::: problem id=p2 type=numeric answer="70"
An isosceles triangle has a top angle of 40°. What is each base angle?
solution: $(180 - 40) \div 2 = 70°$.
:::

::: problem id=p3 type=numeric answer="75"
An exterior angle of a triangle is opposite interior angles of 30° and 45°. How big is it?
solution: $30 + 45 = 75°$.
:::

::: problem id=p4 type=numeric answer="60"
What is each angle of an equilateral triangle?
solution: $180 \div 3 = 60°$.
:::

::: problem id=p5 type=numeric answer="55"
A right triangle has one 35° angle. What is the other small angle?
solution: $180 - 90 - 35 = 55°$.
:::

::: problem id=p6 type=numeric answer="30"
A triangle's angles are x, 2x and 3x. What is the smallest angle?
solution: $6x = 180$, $x = 30°$.
:::

::: problem id=p7 type=text answers="no"
Can a triangle have two right angles? Type yes or no.
solution: $90 + 90 = 180$ leaves 0° for the third angle: **no**.
:::

::: problem id=p8 type=text answers="yes"
In an isosceles triangle, are the base angles equal? Type yes or no.
solution: **Yes**.
:::

::: problem id=x1 type=numeric answer="60" set=extra
A triangle has angles 72° and 48°. What is the third angle?
solution: $180 - 72 - 48 = 60°$.
:::

::: problem id=x2 type=numeric answer="28" set=extra
A right triangle has one 62° angle. What is the other small angle?
solution: $180 - 90 - 62 = 28°$.
:::

::: problem id=x3 type=numeric answer="110" set=extra
Each base angle of an isosceles triangle is 35°. What is the top angle?
solution: $180 - 35 - 35 = 110°$.
:::

::: problem id=x4 type=numeric answer="75" set=extra
An exterior angle of a triangle is 120°. One of the two interior angles not next to it is 45°. What is the other?
solution: $120 = 45 + x$, so $x = 75°$.
:::

::: problem id=x5 type=numeric answer="40" set=extra
An isosceles triangle has a top angle of 100°. What is each base angle?
solution: $(180 - 100) \div 2 = 40°$.
:::

::: problem id=x6 type=numeric answer="115" set=extra
One interior angle of a triangle is 65°. What is the exterior angle at that corner?
solution: Interior and exterior lie on a line: $180 - 65 = 115°$.
:::

::: problem id=x7 type=text answers="no" set=extra
Can a triangle have angles of 100° and 85°? Type yes or no.
solution: $100 + 85 = 185 > 180$: **no**.
:::

::: problem id=x8 type=numeric answer="70" set=extra
A triangle's angles are x, $x + 10$ and $x + 20$. What is the largest angle?
solution: $3x + 30 = 180$, $x = 50$. Largest: $50 + 20 = 70°$.
:::

::: problem id=x9 type=numeric answer="80" set=extra
A triangle's angles are in the ratio 2 : 3 : 4. What is the largest?
solution: 9 parts make 180°: one part is 20°. Largest $4 \times 20 = 80°$.
:::

::: problem id=x10 type=choice set=extra
A triangle has angles 20° and 50°. A triangle with an angle over 90° is called obtuse. What type is this one?
- [ ] Acute (all angles under 90°)
- [ ] Right
- [x] Obtuse
solution: Third angle $180 - 70 = 110°$, over 90°: **obtuse**.
:::

::: problem id=x11 type=numeric answer="120" set=extra
What is each exterior angle of an equilateral triangle?
solution: Interior 60°, so exterior $180 - 60 = 120°$.
:::

::: problem id=x12 type=numeric answer="45" set=extra
A right triangle is also isosceles. What is each of its small angles?
solution: The two small angles are equal and share 90°: 45° each.
:::

::: problem id=x13 type=numeric answer="36" set=extra
In an isosceles triangle each base angle is twice the top angle. What is the top angle?
solution: $x + 2x + 2x = 180$, so $5x = 180$, $x = 36°$.
:::

::: problem id=x14 type=numeric answer="30" set=extra
An exterior angle is $3x + 5$ degrees. The two interior angles not next to it are $x + 15$ and 50 degrees. What is x?
solution: $3x + 5 = x + 15 + 50$, so $2x = 60$, $x = 30$.
:::

::: problem id=x15 type=numeric answer="360" set=extra
Take one exterior angle at each corner of a triangle. What do the three add up to?
hint: Each exterior angle is 180° minus its interior angle.
solution: $3 \times 180 - 180 = 360°$.
:::

::: problem id=x16 type=multi answers="100;70" set=extra
An isosceles triangle has one angle of 40°. Give every possible value of its largest angle.
hint: The 40° angle could be the top angle or a base angle.
solution: 40° on top: base angles 70°, largest 70°. 40° as a base angle: top $180 - 80 = 100°$. So 100 or 70.
:::

::: problem id=x17 type=numeric answer="75" set=extra
In triangle ABC, $B = 2A$ and $C = A + 40°$. Find C.
solution: $A + 2A + A + 40 = 180$, $4A = 140$, $A = 35$. $C = 75°$.
:::

::: problem id=x18 type=numeric answer="55" set=extra
In triangle ABC the exterior angle at C is 130°, and $A = B + 20°$. Find B.
hint: The exterior angle at C equals $A + B$.
solution: $A + B = 130$, so $2B + 20 = 130$ and $B = 55°$.
:::

::: problem id=x19 type=numeric answer="56" set=extra
Two lines cross, making a 34° angle. A right triangle has its corner at the crossing, with an angle vertically opposite that 34°. What is the triangle's third angle?
hint: First find the triangle's angle at the crossing.
solution: Vertical angles: the triangle has a 34° angle. Third angle: $180 - 90 - 34 = 56°$.
:::

::: problem id=x20 type=numeric answer="540" set=extra creative=true
What do the angles of a pentagon (5 sides) add up to?
hint: Draw lines from one corner to the others to cut the pentagon into triangles.
solution: From one corner you get 3 triangles: $3 \times 180 = 540°$.
:::
