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

::: problem id=x1 type=numeric answer="39" set=extra
A 5-12-13 triangle is similar to a triangle whose shortest side is 15. How long is the longest side of the bigger triangle?
solution: $k = 15 \div 5 = 3$. Longest: $13 \times 3 = 39$.
:::

::: problem id=x2 type=numeric answer="1/3" set=extra
A side of 9 cm matches a side of 3 cm in a similar triangle. What is the scale factor from the first triangle to the second?
solution: $\frac{3}{9} = \frac{1}{3}$ (the second is smaller).
:::

::: problem id=x3 type=numeric answer="16" set=extra
Two similar triangles have scale factor 4. How many times bigger is the larger area?
solution: $4^2 = 16$.
:::

::: problem id=x4 type=numeric answer="6" set=extra
Similar triangles: $\frac{x}{10} = \frac{3}{5}$. What is x?
solution: $x = 10 \times \frac{3}{5} = 6$.
:::

::: problem id=x5 type=numeric answer="10" set=extra
A triangle has sides 2, 3 and 4. A similar triangle is 2.5 times as big. How long is its longest side?
solution: $4 \times 2.5 = 10$.
:::

::: problem id=x6 type=numeric answer="45" set=extra
A triangle has area 5. A similar triangle has sides 3 times as long. What is its area?
solution: Area scales by $3^2 = 9$: $5 \times 9 = 45$.
:::

::: problem id=x7 type=numeric answer="5" set=extra
One triangle has 25 times the area of a similar triangle. What is the scale factor of the sides?
solution: $k^2 = 25$, so $k = 5$.
:::

::: problem id=x8 type=numeric answer="15" set=extra
A 3 m pole casts a 2 m shadow. At the same time a tree casts a 10 m shadow. How tall is the tree?
solution: $\frac{h}{10} = \frac{3}{2}$, so $h = 15$ m.
:::

::: problem id=x9 type=choice set=extra
One triangle has angles 40° and 60°. Another has angles 40° and 80°. Are they similar?
- [x] Yes
- [ ] No
- [ ] Not enough information
solution: The first triangle's third angle is 80°. Both are 40-60-80: **similar**.
:::

::: problem id=x10 type=choice set=extra
Are triangles with sides 3, 4, 5 and 6, 8, 9 similar?
- [ ] Yes, scale factor 2
- [x] No
solution: $\frac{6}{3} = \frac{8}{4} = 2$ but $\frac{9}{5} \ne 2$. Not all in the same ratio: **no**.
:::

::: problem id=x11 type=numeric answer="36" set=extra
A triangle has perimeter 12. A similar triangle has scale factor 3. What is its perimeter?
solution: Every side triples, so the perimeter triples: 36.
:::

::: problem id=x12 type=numeric answer="9" set=extra
Two similar triangles have areas 8 and 72. A side of the small one is 3. How long is the matching side of the large one?
hint: First find k from the areas.
solution: $k^2 = \frac{72}{8} = 9$, $k = 3$. Side: $3 \times 3 = 9$.
:::

::: problem id=x13 type=numeric answer="24/5" set=extra
A triangle has base 12 and height 10. A line parallel to the base cuts off a small triangle at the top with height 4. How long is the small triangle's base?
solution: The small triangle is similar with $k = \frac{4}{10}$. Base: $12 \times \frac{4}{10} = 4.8$.
:::

::: problem id=x14 type=choice set=extra
Mia doubles every side of a triangle and says the area doubles too. What really happens to the area?
- [ ] It doubles
- [ ] It triples
- [x] It becomes 4 times as big
- [ ] It becomes 8 times as big
solution: Area scales by $k^2 = 2^2 = 4$.
:::

::: problem id=x15 type=numeric answer="9" set=extra
A mirror lies on the ground. You stand 2 m from it with your eyes 1.5 m up and see the top of a tree in it. The tree is 12 m from the mirror. How tall is the tree?
hint: The mirror makes equal angles, so the two triangles are similar.
solution: $\frac{h}{12} = \frac{1.5}{2}$, so $h = 9$ m.
:::

::: problem id=x16 type=numeric answer="54" set=extra
A triangle has sides 4, 6, 8. In a similar triangle, the longest side is 12 more than the shortest. What is the perimeter of the similar triangle?
hint: Write the sides as $4k$, $6k$, $8k$.
solution: $8k - 4k = 12$, so $k = 3$. Perimeter $3(4 + 6 + 8) = 54$.
:::

::: problem id=x17 type=numeric answer="12" set=extra
In triangle ABC, D is on AB and E is on AC with DE parallel to BC. $AD = 3$, $DB = 6$, $DE = 4$. How long is BC?
hint: Triangles ADE and ABC are similar. Compare AD with AB.
solution: $AB = 9$, so $k = \frac{9}{3} = 3$. $BC = 3 \times 4 = 12$.
:::

::: problem id=x18 type=numeric answer="40" set=extra
In the same figure ($AD = 3$, $AB = 9$), triangle ADE has area 5. What is the area of the four-sided piece DBCE?
hint: Find the area of ABC first.
solution: $k = 3$, so ABC has area $5 \times 9 = 45$. DBCE: $45 - 5 = 40$.
:::

::: problem id=x19 type=numeric answer="1" set=extra
Congruent triangles (same shape and same size) are similar with what scale factor?
solution: Every side matches exactly: $k = 1$.
:::

::: problem id=x20 type=numeric answer="6.4" set=extra creative=true
A 1.6 m person stands 6 m from a lamp post and casts a 2 m shadow. How tall is the lamp post?
hint: The big triangle runs from the post to the tip of the shadow.
solution: Big triangle base $6 + 2 = 8$. $\frac{h}{8} = \frac{1.6}{2}$, so $h = 6.4$ m.
:::
