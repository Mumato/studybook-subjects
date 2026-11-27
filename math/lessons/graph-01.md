---
id: graph-01
title: The coordinate plane
---
::: rule
A point is written $(x, y)$: start at the **origin** $(0, 0)$, move x across (right if positive, left if negative), then y up or down.

The axes split the plane into four **quadrants**, numbered I to IV counter-clockwise starting top right:
- I: $(+, +)$  II: $(-, +)$  III: $(-, -)$  IV: $(+, -)$
:::

::: example
$A(3, 2)$: right 3, up 2. $B(-2, 4)$: left 2, up 4. $C(-4, -1)$: left 4, down 1.
:::

::: graph
point 3,2 A
point -2,4 B blue
point -4,-1 C red
:::

::: problem id=p1 type=point answer="3,2"
Plot the point $(3, 2)$.
graph:
x -5..5
y -5..5
hint: Right 3, then up 2.
solution: From the origin go right 3 and up 2.
:::

::: problem id=p2 type=point answer="-4,1"
Plot the point $(-4, 1)$.
graph:
x -5..5
y -5..5
solution: Left 4, up 1.
:::

::: problem id=p3 type=point answer="0,-3"
Plot the point $(0, -3)$.
graph:
x -5..5
y -5..5
hint: x is 0, so don't move sideways at all.
solution: Stay on the y-axis and go down 3.
:::

::: problem id=p4 type=choice
Which quadrant is $(-2, 5)$ in?
- [ ] I
- [x] II
- [ ] III
- [ ] IV
solution: x negative, y positive: quadrant **II** (top left).
:::

::: problem id=p5 type=text answers="iv;4;quadrant iv;quadrant 4;fourth"
Which quadrant is $(3, -1)$ in? Type I, II, III or IV.
solution: x positive, y negative: quadrant **IV** (bottom right).
:::

::: problem id=p6 type=point answer="-2,3"
Plot the point that is 2 left of the origin and 3 up.
graph:
x -5..5
y -5..5
solution: That's $(-2, 3)$.
:::

::: problem id=p7 type=point answer="4,0"
Plot the point on the x-axis where $x = 4$.
graph:
x -5..5
y -5..5
hint: On the x-axis, y is 0.
solution: $(4, 0)$.
:::

::: problem id=p8 type=numeric answer="5"
How far apart are $(1, 2)$ and $(1, 7)$?
hint: They have the same x, so just compare the y values.
solution: $7 - 2 = 5$.
:::

::: problem id=x1 type=point answer="2,5" set=extra
Plot $(2, 5)$.
graph:
x -6..6
y -6..6
solution: Right 2, up 5.
:::

::: problem id=x2 type=point answer="-5,-2" set=extra
Plot $(-5, -2)$.
graph:
x -6..6
y -6..6
solution: Left 5, down 2.
:::

::: problem id=x3 type=point answer="4,-4" set=extra
Plot $(4, -4)$.
graph:
x -6..6
y -6..6
solution: Right 4, down 4.
:::

::: problem id=x4 type=point answer="-3,0" set=extra
Plot $(-3, 0)$.
graph:
x -6..6
y -6..6
hint: y is 0, so the point is on the x-axis.
solution: Left 3 along the x-axis.
:::

::: problem id=x5 type=choice set=extra
Which quadrant is $(-7, -1)$ in?
- [ ] I
- [ ] II
- [x] III
- [ ] IV
solution: Both coordinates negative: quadrant **III** (bottom left).
:::

::: problem id=x6 type=choice set=extra
Which quadrant is $(6, 9)$ in?
- [x] I
- [ ] II
- [ ] III
- [ ] IV
solution: Both positive: quadrant **I**.
:::

::: problem id=x7 type=choice set=extra
Where is the point $(0, 5)$?
- [ ] In quadrant I
- [ ] On the x-axis
- [x] On the y-axis
- [ ] At the origin
solution: x is 0, so it sits on the **y-axis**, 5 up. A point on an axis is in no quadrant.
:::

::: problem id=x8 type=numeric answer="0" set=extra
What is the y-coordinate of every point on the x-axis?
solution: Points on the x-axis haven't moved up or down: $y = 0$.
:::

::: problem id=x9 type=numeric answer="8" set=extra
How far apart are $(-3, 4)$ and $(5, 4)$?
hint: Same y, so compare the x values.
solution: $5 - (-3) = 8$.
:::

::: problem id=x10 type=numeric answer="9" set=extra
How far apart are $(2, -6)$ and $(2, 3)$?
solution: Same x. $3 - (-6) = 9$.
:::

::: problem id=x11 type=point answer="-4,-3" set=extra
Plot the point 4 left of the origin and 3 down.
graph:
x -6..6
y -6..6
solution: That's $(-4, -3)$.
:::

::: problem id=x12 type=point answer="1,5" set=extra
Start at $(1, 2)$ and move 3 units up. Plot where you end.
graph:
x -6..6
y -6..6
hint: Moving up changes only y.
solution: $y$: $2 + 3 = 5$, so $(1, 5)$.
:::

::: problem id=x13 type=point answer="-2,-1" set=extra
Start at $(3, -1)$ and move 5 units left. Plot where you end.
graph:
x -6..6
y -6..6
solution: $x$: $3 - 5 = -2$, so $(-2, -1)$.
:::

::: problem id=x14 type=point answer="3,-2" set=extra
Reflect $(3, 2)$ across the x-axis (flip it over the x-axis). Plot the image.
graph:
x -6..6
y -6..6
point 3,2 A
hint: Over the x-axis, y changes sign and x stays.
solution: $(3, 2) \to (3, -2)$.
:::

::: problem id=x15 type=point answer="4,1" set=extra
Reflect $(-4, 1)$ across the y-axis. Plot the image.
graph:
x -6..6
y -6..6
point -4,1 A
solution: Over the y-axis, x changes sign: $(4, 1)$.
:::

::: problem id=x16 type=choice set=extra
A point has a negative x-coordinate and a positive y-coordinate. Where is it?
- [ ] Quadrant I
- [x] Quadrant II
- [ ] Quadrant III
- [ ] Quadrant IV
solution: Left of the y-axis and above the x-axis: quadrant **II**.
:::

::: problem id=x17 type=numeric answer="22" set=extra
A rectangle has corners $(-2, 1)$, $(5, 1)$, $(5, 5)$ and $(-2, 5)$. What is its perimeter?
hint: Find the width from the x values and the height from the y values.
solution: Width $5 - (-2) = 7$, height $5 - 1 = 4$. Perimeter $2(7 + 4) = 22$.
:::

::: problem id=x18 type=point answer="4,-3" set=extra
Three corners of a rectangle are $(-1, 2)$, $(4, 2)$ and $(-1, -3)$. Plot the fourth corner.
graph:
x -6..6
y -6..6
point -1,2
point 4,2
point -1,-3
hint: The fourth corner lines up with $(4, 2)$ vertically and with $(-1, -3)$ horizontally.
solution: Same x as $(4, 2)$ and same y as $(-1, -3)$: $(4, -3)$.
:::

::: problem id=x19 type=numeric answer="12" set=extra
What is the area of the triangle with corners $(0, 0)$, $(6, 0)$ and $(0, 4)$?
hint: Two sides lie along the axes, so they are the base and height.
solution: Base 6, height 4: $\frac{1}{2} \times 6 \times 4 = 12$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
Point $P$ is in quadrant IV, 3 units from the x-axis and 5 units from the y-axis. What is the distance from $P$ to the point $(5, 0)$?
hint: First work out $P$'s coordinates from the quadrant and the two distances.
solution: In quadrant IV, x is positive and y negative: $P = (5, -3)$. It is straight below $(5, 0)$, so the distance is 3.
:::
