---
id: ang-03
title: Similar triangles
---
::: rule
**Similar** triangles have the same shape: equal angles, and all sides scaled by the same **scale factor** k.
- If two angles match, the triangles are similar.
- Matching sides are in proportion: $\frac{a'}{a} = \frac{b'}{b} = k$.
- Areas scale by $k^2$.
:::

::: example
A 3-4-5 triangle and a similar one with shortest side 6: $k = 2$, so its sides are 6, 8, 10.
:::

::: graph
x -1..9
y -1..7
axes off
grid off
polygon 0,0 4,0 4,3 fill
polygon 5,0 9,0 9,3
segment 0,0 4,0 4
segment 4,0 4,3 3
segment 5,0 9,0 8
segment 9,0 9,3 6
:::

::: problem id=p1 type=numeric answer="10"
A triangle with sides 3, 4, 5 is similar to one with sides 6, 8 and x. What is x?
solution: Scale factor 2: $x = 10$.
:::

::: problem id=p2 type=numeric answer="5/2"
A side of 2 cm matches a side of 5 cm in a similar triangle. What is the scale factor?
solution: $\frac{5}{2} = 2.5$.
:::

::: problem id=p3 type=numeric answer="12"
A 1.8 m person casts a 2.4 m shadow. At the same time a building casts a 16 m shadow. How tall is it?
hint: $\frac{h}{16} = \frac{1.8}{2.4}$.
solution: $h = 16 \times \frac{1.8}{2.4} = 12$ m.
:::

::: problem id=p4 type=numeric answer="9"
Two similar triangles have scale factor 3. How many times bigger is the area of the larger?
solution: $3^2 = 9$.
:::

::: problem id=p5 type=numeric answer="3"
Similar triangles: $\frac{x}{6} = \frac{4}{8}$. What is x?
solution: $x = 3$.
:::

::: problem id=p6 type=choice
Two triangles both have angles 50° and 70°. They are:
- [x] similar
- [ ] not necessarily similar
solution: Two matching angles force the third to match too: **similar**.
:::

::: problem id=p7 type=numeric answer="15"
In a photo, a 2 m tall door is 4 cm tall. A tree in the same photo is 30 cm tall. How tall is the real tree in metres?
solution: Scale: 4 cm is 2 m, so 1 cm is 0.5 m. $30 \times 0.5 = 15$ m.
:::

::: problem id=p8 type=text answers="yes"
Are all equilateral triangles similar? Type yes or no.
solution: They all have angles 60°, 60°, 60°: **yes**.
:::
