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
