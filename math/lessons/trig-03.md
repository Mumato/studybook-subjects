---
id: trig-03
title: Special triangles
---
::: rule
Two triangles give exact values without a calculator:
- **45-45-90:** sides $1, 1, \sqrt{2}$. So $\sin 45° = \cos 45° = \frac{\sqrt{2}}{2}$, $\tan 45° = 1$.
- **30-60-90:** sides $1, \sqrt{3}, 2$ (short side opposite 30°). So $\sin 30° = \frac{1}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{1}{\sqrt{3}}$, $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac{1}{2}$, $\tan 60° = \sqrt{3}$.
:::

::: graph
x -0.5..4.5
y -0.5..2.3
axes off
grid off
polygon 0,0 1.4,0 1.4,1.4 fill
segment 0,0 1.4,0 1
segment 1.4,0 1.4,1.4 1
segment 0,0 1.4,1.4 √2
polygon 2.2,0 4.2,0 4.2,1.15 fill
segment 2.2,0 4.2,0 √3
segment 4.2,0 4.2,1.15 1
segment 2.2,0 4.2,1.15 2
:::

::: example
$\cos 45°$: in the 45-45-90 triangle, adjacent 1 over hypotenuse $\sqrt{2}$ gives $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.
:::

Type roots as sqrt, like sqrt(2)/2.

::: problem id=p1 type=numeric answer="sqrt(2)/2"
$\sin 45° = ?$ (exact)
solution: $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.
:::

::: problem id=p2 type=numeric answer="sqrt(3)/2"
$\cos 30° = ?$ (exact)
solution: Adjacent $\sqrt{3}$ over hypotenuse 2: $\frac{\sqrt{3}}{2}$.
:::

::: problem id=p3 type=numeric answer="sqrt(3)"
$\tan 60° = ?$ (exact)
solution: Opposite $\sqrt{3}$ over adjacent 1: $\sqrt{3}$.
:::

::: problem id=p4 type=numeric answer="5sqrt(2)"
A 45-45-90 triangle has legs of 5. How long is the hypotenuse? (exact)
solution: $5\sqrt{2}$.
:::

::: problem id=p5 type=numeric answer="8"
In a 30-60-90 triangle the short side is 4. How long is the hypotenuse?
solution: Twice the short side: 8.
:::

::: problem id=p6 type=numeric answer="4sqrt(3)"
In the same 30-60-90 triangle (short side 4), how long is the longer leg? (exact)
solution: $4\sqrt{3}$.
:::

::: problem id=p7 type=numeric answer="sqrt(3)/2"
$\sin 60° = ?$ (exact)
solution: $\frac{\sqrt{3}}{2}$.
:::

::: problem id=p8 type=choice
$\tan 30° = ?$
- [x] $\frac{1}{\sqrt{3}}$
- [ ] $\sqrt{3}$
- [ ] $\frac{1}{2}$
solution: Opposite 1 over adjacent $\sqrt{3}$.
:::

::: problem id=c1 type=numeric answer="1" creative=true
Work out $(\sin 30°)^2 + (\cos 30°)^2$. Then try it for 45° and 60°. What do you always get?
solution: $\frac{1}{4} + \frac{3}{4} = 1$. It's always **1**: in any right triangle, $\text{opp}^2 + \text{adj}^2 = \text{hyp}^2$.
:::

::: problem id=x1 type=numeric answer="sqrt(2)/2" set=extra
$\cos 45° = ?$ (exact)
solution: Adjacent 1 over hypotenuse $\sqrt{2}$: $\frac{\sqrt{2}}{2}$.
:::

::: problem id=x2 type=numeric answer="sqrt(3)/3" set=extra
$\tan 30° = ?$ Give it with a rational denominator. (exact)
solution: $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$.
:::

::: problem id=x3 type=numeric answer="1/2" set=extra
$\cos 60° = ?$
solution: Adjacent 1 over hypotenuse 2: $\frac{1}{2}$.
:::

::: problem id=x4 type=numeric answer="5sqrt(2)" set=extra
A 45-45-90 triangle has hypotenuse 10. How long is each leg? (exact)
solution: Leg $= \frac{10}{\sqrt{2}} = 5\sqrt{2}$.
:::

::: problem id=x5 type=numeric answer="6" set=extra
A 30-60-90 triangle has hypotenuse 12. How long is the short side?
solution: Half the hypotenuse: 6.
:::

::: problem id=x6 type=numeric answer="6sqrt(3)" set=extra
Same triangle (hypotenuse 12): how long is the longer leg? (exact)
solution: Short side times $\sqrt{3}$: $6\sqrt{3}$.
:::

::: problem id=x7 type=numeric answer="3sqrt(3)" set=extra
In a 30-60-90 triangle the longer leg is 9. How long is the short side? (exact)
solution: $\frac{9}{\sqrt{3}} = 3\sqrt{3}$.
:::

::: problem id=x8 type=numeric answer="3sqrt(2)" set=extra
A 45-45-90 triangle has hypotenuse 6. How long is each leg? (exact)
solution: $\frac{6}{\sqrt{2}} = 3\sqrt{2}$.
:::

::: problem id=x9 type=choice set=extra
In a 30-60-90 triangle with sides 1, $\sqrt{3}$, 2, which side is opposite the 60° angle?
- [ ] 1
- [x] $\sqrt{3}$
- [ ] 2
solution: The bigger angle faces the bigger leg: $\sqrt{3}$. (2 is the hypotenuse, opposite 90°.)
:::

::: problem id=x10 type=numeric answer="3/4" set=extra
$\sin 60° \times \cos 30° = ?$
solution: $\frac{\sqrt{3}}{2} \times \frac{\sqrt{3}}{2} = \frac{3}{4}$.
:::

::: problem id=x11 type=numeric answer="1+sqrt(3)" set=extra
$\tan 45° + \tan 60° = ?$ (exact)
solution: $1 + \sqrt{3}$.
:::

::: problem id=x12 type=numeric answer="7sqrt(2)" set=extra
A square has sides of 7. How long is its diagonal? (exact)
solution: The diagonal cuts it into two 45-45-90 triangles: $7\sqrt{2}$.
:::

::: problem id=x13 type=numeric answer="3sqrt(3)" set=extra
An equilateral triangle has sides of 6. What is its height? (exact)
solution: The height makes two 30-60-90 triangles with short side 3: height $3\sqrt{3}$.
:::

::: problem id=x14 type=numeric answer="4sqrt(3)" set=extra
An equilateral triangle has sides of 4. What is its area? (exact)
solution: Height $2\sqrt{3}$. Area $\frac{1}{2} \cdot 4 \cdot 2\sqrt{3} = 4\sqrt{3}$.
:::

::: problem id=x15 type=choice set=extra
Kim writes $\cos 30° = \frac{1}{2}$. What is the correct value?
- [ ] $\frac{1}{2}$, Kim is right
- [x] $\frac{\sqrt{3}}{2}$
- [ ] $\frac{\sqrt{2}}{2}$
- [ ] $\sqrt{3}$
solution: Adjacent to 30° is the long leg $\sqrt{3}$: $\frac{\sqrt{3}}{2}$. Kim gave $\cos 60°$.
:::

::: problem id=x16 type=numeric answer="60" set=extra
$\tan A = \sqrt{3}$ and A is an acute angle. What is A in degrees?
solution: $\tan 60° = \sqrt{3}$: $A = 60°$.
:::

::: problem id=x17 type=numeric answer="6+2sqrt(3)" set=extra
A 30-60-90 triangle has short side 2. What is its perimeter? (exact)
hint: Find the other two sides first.
solution: Sides 2, $2\sqrt{3}$, 4. Perimeter $6 + 2\sqrt{3}$.
:::

::: problem id=x18 type=numeric answer="6sqrt(2)" set=extra
A 45-45-90 triangle has area 18. How long is its hypotenuse? (exact)
hint: Area $= \frac{1}{2}a^2$ where a is a leg.
solution: $\frac{1}{2}a^2 = 18$, $a = 6$. Hypotenuse $6\sqrt{2}$.
:::

::: problem id=x19 type=numeric answer="25sqrt(3)" set=extra
A rectangle's diagonal is 10 and makes a 30° angle with the longer side. What is the rectangle's area? (exact)
hint: The diagonal splits it into two 30-60-90 triangles.
solution: Short side $10 \sin 30° = 5$, long side $10 \cos 30° = 5\sqrt{3}$. Area $25\sqrt{3}$.
:::

::: problem id=x20 type=numeric answer="4sqrt(3)" set=extra creative=true
An equilateral triangle has height 6. How long is each side? (exact)
hint: The height is the long leg of a 30-60-90 triangle.
solution: Short side $\frac{6}{\sqrt{3}} = 2\sqrt{3}$, and the side is twice that: $4\sqrt{3}$.
:::
