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
