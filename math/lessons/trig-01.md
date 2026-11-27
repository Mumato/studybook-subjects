---
id: trig-01
title: Sine, cosine and tangent
---
::: rule
In a right triangle, for an angle A (not the right angle):
- the **hypotenuse** is the longest side
- the **opposite** side is across from A
- the **adjacent** side is next to A (not the hypotenuse)

**SOH CAH TOA:**
$\sin A = \frac{\text{opp}}{\text{hyp}}$, $\cos A = \frac{\text{adj}}{\text{hyp}}$, $\tan A = \frac{\text{opp}}{\text{adj}}$
:::

::: example
In a 3-4-5 triangle, for the angle A opposite the side 3: $\sin A = \frac{3}{5}$, $\cos A = \frac{4}{5}$, $\tan A = \frac{3}{4}$.
:::

::: graph
x -1..5
y -1..4
axes off
grid off
polygon 0,0 4,0 4,3 fill
segment 0,0 4,0 adj 4
segment 4,0 4,3 opp 3
segment 0,0 4,3 hyp 5
label 0.7,0.25 A
:::

::: problem id=p1 type=numeric answer="3/5"
In the 3-4-5 triangle, what is $\sin A$?
solution: $\frac{\text{opp}}{\text{hyp}} = \frac{3}{5}$.
:::

::: problem id=p2 type=numeric answer="4/5"
In the same triangle, what is $\cos A$?
solution: $\frac{\text{adj}}{\text{hyp}} = \frac{4}{5}$.
:::

::: problem id=p3 type=numeric answer="3/4"
In the same triangle, what is $\tan A$?
solution: $\frac{\text{opp}}{\text{adj}} = \frac{3}{4}$.
:::

::: problem id=p4 type=numeric answer="1/2"
$\sin 30° = ?$
hint: A 30-60-90 triangle has sides 1, $\sqrt{3}$, 2.
solution: Opposite 30° is the short side 1, hypotenuse 2: $\frac{1}{2}$.
:::

::: problem id=p5 type=numeric answer="1/2"
$\cos 60° = ?$
solution: Adjacent to 60° is the short side 1, hypotenuse 2: $\frac{1}{2}$.
:::

::: problem id=p6 type=numeric answer="1"
$\tan 45° = ?$
hint: In a 45-45-90 triangle both legs are equal.
solution: Opposite and adjacent are equal: $\tan 45° = 1$.
:::

::: problem id=p7 type=choice
Which is $\cos A$?
- [ ] $\frac{\text{opp}}{\text{hyp}}$
- [x] $\frac{\text{adj}}{\text{hyp}}$
- [ ] $\frac{\text{opp}}{\text{adj}}$
solution: CAH: cosine is adjacent over hypotenuse.
:::

::: problem id=p8 type=numeric answer="5/13"
A right triangle has legs 5 and 12 and hypotenuse 13. What is the sine of the angle opposite the side 5?
solution: $\frac{5}{13}$.
:::

::: problem id=x1 type=numeric answer="7/25" set=extra
A right triangle has legs 7 and 24 and hypotenuse 25. What is the sine of the angle opposite the side 7?
solution: $\frac{\text{opp}}{\text{hyp}} = \frac{7}{25}$.
:::

::: problem id=x2 type=numeric answer="24/25" set=extra
Same 7-24-25 triangle: what is the cosine of the angle opposite the side 7?
solution: Adjacent 24, hypotenuse 25: $\frac{24}{25}$.
:::

::: problem id=x3 type=numeric answer="7/24" set=extra
Same triangle: what is the tangent of the angle opposite the side 7?
solution: $\frac{\text{opp}}{\text{adj}} = \frac{7}{24}$.
:::

::: problem id=x4 type=numeric answer="8/17" set=extra
A right triangle has sides 8, 15, 17. What is the cosine of the angle opposite the side 15?
solution: Adjacent to that angle is 8: $\frac{8}{17}$.
:::

::: problem id=x5 type=numeric answer="9/40" set=extra
A right triangle has legs 9 and 40 and hypotenuse 41. What is the tangent of the angle opposite the side 9?
solution: $\frac{9}{40}$.
:::

::: problem id=x6 type=choice set=extra
Which is $\tan A$?
- [ ] $\frac{\text{opp}}{\text{hyp}}$
- [ ] $\frac{\text{adj}}{\text{hyp}}$
- [x] $\frac{\text{opp}}{\text{adj}}$
- [ ] $\frac{\text{adj}}{\text{opp}}$
solution: TOA: tangent is opposite over adjacent.
:::

::: problem id=x7 type=numeric answer="3/5" set=extra
A right triangle has legs 6 and 8. What is the sine of the angle opposite the side 6?
hint: Find the hypotenuse first.
solution: Hypotenuse $\sqrt{36 + 64} = 10$. $\sin = \frac{6}{10} = \frac{3}{5}$.
:::

::: problem id=x8 type=numeric answer="sqrt(2)/2" set=extra
A right triangle has both legs equal to 1. What is the sine of one of its small angles? (exact)
solution: Hypotenuse $\sqrt{2}$. $\sin = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.
:::

::: problem id=x9 type=numeric answer="5/13" set=extra
A right triangle has hypotenuse 13 and legs 5 and 12. What is the cosine of the angle opposite the side 12?
solution: Adjacent to that angle is 5: $\frac{5}{13}$.
:::

::: problem id=x10 type=numeric answer="4/5" set=extra
In a right triangle, $\sin A = \frac{3}{5}$. What is $\cos A$?
hint: Draw a triangle with opposite 3 and hypotenuse 5.
solution: Adjacent $\sqrt{25 - 9} = 4$. $\cos A = \frac{4}{5}$.
:::

::: problem id=x11 type=numeric answer="5/13" set=extra
In a right triangle, $\tan A = \frac{5}{12}$. What is $\sin A$?
solution: Opposite 5, adjacent 12, hypotenuse 13. $\sin A = \frac{5}{13}$.
:::

::: problem id=x12 type=numeric answer="0.6" set=extra
A and B are the two small angles of a right triangle, and $\sin A = 0.6$. What is $\cos B$?
solution: The side opposite A is the side adjacent to B, so $\cos B = \sin A = 0.6$.
:::

::: problem id=x13 type=text answers="no" set=extra
Ali says $\sin A = \frac{5}{3}$ in his right triangle. Can the sine of an angle in a right triangle be bigger than 1? Type yes or no.
solution: The hypotenuse is the longest side, so $\frac{\text{opp}}{\text{hyp}} < 1$: **no**.
:::

::: problem id=x14 type=numeric answer="3/2" set=extra
A right triangle has legs 2 and 3. What is the tangent of the angle opposite the side 3?
solution: $\frac{3}{2}$.
:::

::: problem id=x15 type=numeric answer="1/8" set=extra
A ramp rises 1 m over a horizontal distance of 8 m. What is the tangent of the ramp's angle?
solution: Opposite 1, adjacent 8: $\frac{1}{8}$.
:::

::: problem id=x16 type=choice set=extra
In any right triangle, $\frac{\sin A}{\cos A}$ equals:
- [x] $\tan A$
- [ ] 1
- [ ] $\sin A$
- [ ] the hypotenuse
solution: $\frac{\text{opp}/\text{hyp}}{\text{adj}/\text{hyp}} = \frac{\text{opp}}{\text{adj}} = \tan A$.
:::

::: problem id=x17 type=numeric answer="sqrt(5)/5" set=extra
A right triangle has legs 1 and 2. What is the sine of the angle opposite the side 1? (exact)
hint: Hypotenuse $\sqrt{1 + 4}$.
solution: $\frac{1}{\sqrt{5}} = \frac{\sqrt{5}}{5}$.
:::

::: problem id=x18 type=numeric answer="9" set=extra
In a right triangle, $\cos A = 0.8$ and the hypotenuse is 15. How long is the side opposite A?
hint: First find the adjacent side, then use Pythagoras.
solution: Adjacent $0.8 \times 15 = 12$. Opposite $\sqrt{225 - 144} = 9$.
:::

::: problem id=x19 type=numeric answer="3sqrt(5)" set=extra
In a right triangle, $\tan A = 2$ and the side adjacent to A is 3. How long is the hypotenuse? (exact)
hint: The opposite side is $2 \times 3$.
solution: Opposite 6. Hypotenuse $\sqrt{9 + 36} = \sqrt{45} = 3\sqrt{5}$.
:::

::: problem id=x20 type=numeric answer="45" set=extra creative=true
In a right triangle, $\sin A = \cos A$. What is A in degrees?
hint: What does that say about the opposite and adjacent sides?
solution: Opposite = adjacent, so the triangle is isosceles: $A = 45°$.
:::
