---
id: con-01
title: Circles and parabolas
---
Slice a cone with a flat plane and you get a **conic section**: a circle, a parabola, an ellipse or a hyperbola. This lesson does the first two.

::: rule
**Circle** with centre $(h, k)$ and radius r:
$$(x - h)^2 + (y - k)^2 = r^2$$
If the equation is expanded, **complete the square** in x and in y to get back to this form.

**Parabola** with vertex $(h, k)$: every point is the same distance from the **focus** as from the **directrix** line.
- $(x - h)^2 = 4p(y - k)$ opens up ($p > 0$) or down ($p < 0$); focus $(h, k + p)$, directrix $y = k - p$
- $(y - k)^2 = 4p(x - h)$ opens right ($p > 0$) or left ($p < 0$); focus $(h + p, k)$, directrix $x = h - p$
:::

::: example
Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.

Group: $(x^2 - 6x) + (y^2 + 4y) = 12$.

Add $9$ and $4$ to both sides:
$(x - 3)^2 + (y + 2)^2 = 25$.

Centre $(3, -2)$, radius 5.
:::

::: example
For $x^2 = 8y$: $4p = 8$, so $p = 2$. Vertex $(0, 0)$, opens up, focus $(0, 2)$, directrix $y = -2$.
:::

::: graph
x -6..6
y -3..6
plot x^2/8 blue
plot -2 red
point 0,2 F
point 0,0
:::

::: problem id=p1 type=point answer="2,-1"
Click the centre of $(x - 2)^2 + (y + 1)^2 = 9$.
graph:
x -5..5
y -5..5
solution: $h = 2$ and $k = -1$ (the signs flip): $(2, -1)$.
:::

::: problem id=p2 type=numeric answer="7"
What is the radius of $(x + 4)^2 + y^2 = 49$?
solution: $r^2 = 49$, so $r = 7$.
:::

::: problem id=p3 type=choice
Which is the circle with centre $(1, -3)$ and radius 4?
- [x] $(x - 1)^2 + (y + 3)^2 = 16$
- [ ] $(x + 1)^2 + (y - 3)^2 = 16$
- [ ] $(x - 1)^2 + (y + 3)^2 = 4$
- [ ] $(x - 1)^2 - (y + 3)^2 = 16$
solution: Subtract the centre and square the radius: $(x - 1)^2 + (y + 3)^2 = 16$.
:::

::: problem id=p4 type=numeric answer="3"
What is the radius of $x^2 + y^2 - 8x + 2y + 8 = 0$?
hint: Complete the square in x and in y.
solution: $(x - 4)^2 + (y + 1)^2 = -8 + 16 + 1 = 9$.
Radius 3.
:::

::: problem id=p5 type=point answer="1,3"
Click the focus of $(x - 1)^2 = 4(y - 2)$.
graph:
x -4..6
y -1..8
plot (x-1)^2/4+2 blue
hint: $4p = 4$.
solution: Vertex $(1, 2)$ and $p = 1$: the focus is 1 above, at $(1, 3)$.
:::

::: problem id=p6 type=numeric answer="-3"
What is the directrix of $x^2 = 12y$? Type the y value.
solution: $4p = 12$, $p = 3$: directrix $y = -3$.
:::

::: problem id=p7 type=choice
Which way does $y^2 = -8x$ open?
- [x] left
- [ ] right
- [ ] up
- [ ] down
solution: y is squared, so it opens sideways; $4p = -8 < 0$, so to the left.
:::

::: problem id=c1 type=numeric answer="1" creative=true
A satellite dish is a parabola 4 m across and 1 m deep. The receiver sits at the focus. How far above the vertex is it, in m?
hint: Put the vertex at the origin: $x^2 = 4py$ passes through $(2, 1)$.
solution: $2^2 = 4p \cdot 1$, so $p = 1$. The receiver is 1 m above the vertex.
:::

::: problem id=x1 type=numeric answer="6" set=extra
What is the radius of $x^2 + y^2 = 36$?
solution: $r = \sqrt{36} = 6$.
:::

::: problem id=x2 type=point answer="-3,4" set=extra
Click the centre of $(x + 3)^2 + (y - 4)^2 = 4$.
graph:
x -6..6
y -6..6
solution: $(-3, 4)$.
:::

::: problem id=x3 type=numeric answer="5sqrt(2)" set=extra
What is the radius of $(x - 5)^2 + (y + 5)^2 = 50$?
solution: $\sqrt{50} = 5\sqrt{2}$.
:::

::: problem id=x4 type=choice set=extra
Which is the circle with centre $(-2, 0)$ and radius 3?
- [x] $(x + 2)^2 + y^2 = 9$
- [ ] $(x - 2)^2 + y^2 = 9$
- [ ] $(x + 2)^2 + y^2 = 3$
- [ ] $x^2 + (y + 2)^2 = 9$
solution: $(x - (-2))^2 + (y - 0)^2 = 3^2$.
:::

::: problem id=x5 type=numeric answer="5" set=extra
What is the radius of $x^2 + y^2 + 6y = 16$?
solution: $x^2 + (y + 3)^2 = 16 + 9 = 25$: radius 5.
:::

::: problem id=x6 type=point answer="2,-5" set=extra
Click the centre of $x^2 + y^2 - 4x + 10y + 20 = 0$.
graph:
x -6..6
y -6..6
hint: Complete the square in both variables.
solution: $(x - 2)^2 + (y + 5)^2 = -20 + 4 + 25 = 9$.
Centre $(2, -5)$.
:::

::: problem id=x7 type=point answer="0,1" set=extra
Click the focus of $x^2 = 4y$.
graph:
x -4..4
y -3..5
plot x^2/4 blue
solution: $4p = 4$, $p = 1$: focus $(0, 1)$.
:::

::: problem id=x8 type=numeric answer="5" set=extra
$y^2 = 20x$. What is the x-coordinate of its focus?
solution: $4p = 20$, $p = 5$: focus $(5, 0)$.
:::

::: problem id=x9 type=numeric answer="3" set=extra
What is the directrix of $y^2 = -12x$? Type the x value.
solution: $4p = -12$, $p = -3$: directrix $x = -p = 3$.
:::

::: problem id=x10 type=choice set=extra
What is the vertex of $(y - 2)^2 = 8(x + 1)$?
- [x] $(-1, 2)$
- [ ] $(1, -2)$
- [ ] $(2, -1)$
- [ ] $(-2, 1)$
solution: $h = -1$ (with x) and $k = 2$ (with y).
:::

::: problem id=x11 type=numeric answer="5" set=extra
A circle has centre $(1, 2)$ and passes through $(4, 6)$. What is its radius?
solution: $\sqrt{3^2 + 4^2} = 5$.
:::

::: problem id=x12 type=numeric answer="4" set=extra
A diameter of a circle runs from $(-1, 3)$ to $(7, 3)$. What is the radius?
solution: The diameter is $7 - (-1) = 8$ long, so the radius is 4 (centre $(3, 3)$).
:::

::: problem id=x13 type=text answers="yes" set=extra
Is $(3, 4)$ on the circle $x^2 + y^2 = 25$? Type yes or no.
solution: $9 + 16 = 25$: **yes**.
:::

::: problem id=x14 type=point answer="3,0" set=extra
Sam says $x^2 + y^2 - 6x = 7$ has centre $(-3, 0)$. Click the real centre.
graph:
x -6..6
y -6..6
solution: $(x - 3)^2 + y^2 = 16$: centre $(3, 0)$, radius 4.
:::

::: problem id=x15 type=point answer="2,-1" set=extra
Click the focus of $(x - 2)^2 = -8(y - 1)$.
graph:
x -4..6
y -6..4
plot -(x-2)^2/8+1 blue
solution: Vertex $(2, 1)$, $4p = -8$, $p = -2$: focus $(2, -1)$.
:::

::: problem id=x16 type=numeric answer="3/2" set=extra
What is the directrix of $(x + 1)^2 = 6(y - 3)$? Type the y value.
solution: $p = \frac{6}{4} = \frac{3}{2}$, vertex $(-1, 3)$.
Directrix $y = 3 - \frac{3}{2} = \frac{3}{2}$.
:::

::: problem id=x17 type=choice set=extra
Which parabola has focus $(0, 3)$ and directrix $y = -3$?
- [x] $x^2 = 12y$
- [ ] $y^2 = 12x$
- [ ] $x^2 = 3y$
- [ ] $x^2 = -12y$
solution: Vertex halfway: $(0, 0)$. $p = 3$, opening up: $x^2 = 4 \cdot 3y = 12y$.
:::

::: problem id=x18 type=numeric answer="8" set=extra
A parabola has vertex $(0, 0)$ and focus $(0, 2)$. Its point at height $y = 8$ has $x > 0$. What is x?
hint: Find the equation first.
solution: $p = 2$: $x^2 = 8y$.
$x^2 = 64$, so $x = 8$.
:::

::: problem id=x19 type=numeric answer="6" set=extra
The circle $(x - 3)^2 + (y - 4)^2 = 25$ passes through the origin. Where else does it cross the x-axis?
hint: Put $y = 0$.
solution: $(x - 3)^2 + 16 = 25$, so $x - 3 = \pm 3$.
$x = 0$ or $x = 6$: the other one is 6.
:::

::: problem id=x20 type=numeric answer="7sqrt(2)" set=extra creative=true
The line $y = x + 1$ cuts the circle $x^2 + y^2 = 25$ at two points. How far apart are they?
hint: Substitute $y = x + 1$ into the circle.
solution: $x^2 + (x + 1)^2 = 25$ gives $x^2 + x - 12 = 0$.
$x = 3$ or $-4$: points $(3, 4)$ and $(-4, -3)$.
Distance $\sqrt{49 + 49} = 7\sqrt{2}$.
:::
