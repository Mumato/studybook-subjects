---
id: con-02
title: Ellipses
---
An **ellipse** is a stretched circle: the set of points whose distances to two fixed points, the **foci**, add up to the same number.

::: rule
Ellipse with centre $(h, k)$, where $a > b > 0$:
$$\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$$
- the larger denominator $a^2$ goes with the **major axis**: under x it is horizontal, under y it is vertical
- **vertices** (ends of the major axis) are a from the centre; **co-vertices** are b from the centre
- major axis length $2a$, minor axis length $2b$
- **foci** lie on the major axis, c from the centre, with
$$c^2 = a^2 - b^2$$
- for every point on the ellipse, the distances to the two foci add to $2a$
:::

::: example
$\frac{x^2}{25} + \frac{y^2}{9} = 1$: $a = 5$, $b = 3$, horizontal.

$c^2 = 25 - 9 = 16$, so $c = 4$.

Vertices $(\pm 5, 0)$, co-vertices $(0, \pm 3)$, foci $(\pm 4, 0)$.
:::

::: example
$4x^2 + y^2 = 16$. Divide by 16:
$\frac{x^2}{4} + \frac{y^2}{16} = 1$.

16 is under y, so the major axis is vertical: $a = 4$, $b = 2$.

$c = \sqrt{16 - 4} = 2\sqrt{3}$. Vertices $(0, \pm 4)$, foci $(0, \pm 2\sqrt{3})$.
:::

::: graph
x -6..6
y -4..4
param x=5cos(t); y=3sin(t) blue
point 4,0 F red
point -4,0 F red
point 5,0
point -5,0
:::

::: problem id=p1 type=numeric answer="12"
How long is the major axis of $\frac{x^2}{36} + \frac{y^2}{16} = 1$?
solution: $a^2 = 36$, $a = 6$: length $2a = 12$.
:::

::: problem id=p2 type=point answer="4,0"
Click the right vertex of $\frac{x^2}{16} + \frac{y^2}{4} = 1$.
graph:
x -5..5
y -5..5
plot 2*sqrt(1-x^2/16) blue
plot -2*sqrt(1-x^2/16) blue
solution: $a = 4$ along x: $(4, 0)$.
:::

::: problem id=p3 type=numeric answer="3"
The foci of $\frac{x^2}{25} + \frac{y^2}{16} = 1$ are $(\pm c, 0)$. What is c?
solution: $c^2 = 25 - 16 = 9$, $c = 3$.
:::

::: problem id=p4 type=choice
Which way is the major axis of $\frac{x^2}{9} + \frac{y^2}{49} = 1$?
- [x] vertical
- [ ] horizontal
- [ ] it is a circle
solution: The larger denominator, 49, is under y.
:::

::: problem id=p5 type=numeric answer="2sqrt(10)"
What is the y-coordinate of the upper focus of $\frac{x^2}{9} + \frac{y^2}{49} = 1$?
solution: $c^2 = 49 - 9 = 40$, $c = 2\sqrt{10}$. The foci are $(0, \pm 2\sqrt{10})$.
:::

::: problem id=p6 type=point answer="1,-2"
Click the centre of $\frac{(x - 1)^2}{9} + \frac{(y + 2)^2}{4} = 1$.
graph:
x -5..5
y -5..5
solution: $(h, k) = (1, -2)$.
:::

::: problem id=p7 type=numeric answer="8"
An ellipse has vertices $(\pm 10, 0)$ and foci $(\pm 6, 0)$. What is b?
hint: $b^2 = a^2 - c^2$.
solution: $b^2 = 100 - 36 = 64$, $b = 8$.
:::

::: problem id=p8 type=numeric answer="4"
How long is the minor axis of $9x^2 + 4y^2 = 36$?
hint: Divide by 36 first.
solution: $\frac{x^2}{4} + \frac{y^2}{9} = 1$: $b = 2$, minor axis $2b = 4$.
:::

::: problem id=x1 type=numeric answer="6" set=extra
How long is the minor axis of $\frac{x^2}{49} + \frac{y^2}{9} = 1$?
solution: $b = 3$: $2b = 6$.
:::

::: problem id=x2 type=point answer="0,5" set=extra
Click the top vertex of $\frac{x^2}{4} + \frac{y^2}{25} = 1$.
graph:
x -6..6
y -6..6
plot 5*sqrt(1-x^2/4) blue
plot -5*sqrt(1-x^2/4) blue
solution: $a = 5$ along y: $(0, 5)$.
:::

::: problem id=x3 type=numeric answer="5" set=extra
What is c for $\frac{x^2}{169} + \frac{y^2}{144} = 1$?
solution: $c^2 = 169 - 144 = 25$, $c = 5$.
:::

::: problem id=x4 type=numeric answer="2" set=extra
What is c for $\frac{x^2}{10} + \frac{y^2}{6} = 1$?
solution: $c^2 = 10 - 6 = 4$, $c = 2$.
:::

::: problem id=x5 type=choice set=extra
Which way is the major axis of $\frac{(x - 2)^2}{5} + \frac{(y + 1)^2}{8} = 1$?
- [x] vertical
- [ ] horizontal
- [ ] it is a circle
solution: The larger denominator, 8, is under the y term.
:::

::: problem id=x6 type=point answer="-3,1" set=extra
Click the centre of $\frac{(x + 3)^2}{16} + \frac{(y - 1)^2}{9} = 1$.
graph:
x -6..6
y -6..6
solution: $(-3, 1)$.
:::

::: problem id=x7 type=point answer="1,1" set=extra
Click the right vertex of $\frac{(x + 3)^2}{16} + \frac{(y - 1)^2}{9} = 1$.
graph:
x -8..6
y -6..6
solution: Centre $(-3, 1)$, $a = 4$ along x: $(-3 + 4, 1) = (1, 1)$.
:::

::: problem id=x8 type=numeric answer="10" set=extra
How long is the major axis of $25x^2 + 4y^2 = 100$?
solution: Divide by 100: $\frac{x^2}{4} + \frac{y^2}{25} = 1$. $a = 5$, so $2a = 10$.
:::

::: problem id=x9 type=choice set=extra
Which ellipse has vertices $(0, \pm 6)$ and co-vertices $(\pm 2, 0)$?
- [x] $\frac{x^2}{4} + \frac{y^2}{36} = 1$
- [ ] $\frac{x^2}{36} + \frac{y^2}{4} = 1$
- [ ] $\frac{x^2}{2} + \frac{y^2}{6} = 1$
- [ ] $\frac{x^2}{4} - \frac{y^2}{36} = 1$
solution: $a = 6$ along y and $b = 2$ along x; the denominators are the squares.
:::

::: problem id=x10 type=numeric answer="16" set=extra
An ellipse has vertices $(\pm 5, 0)$ and foci $(\pm 3, 0)$. What is $b^2$?
solution: $b^2 = 25 - 9 = 16$.
:::

::: problem id=x11 type=numeric answer="5" set=extra
An ellipse has vertices $(0, \pm 13)$ and foci $(0, \pm 12)$. What is b?
solution: $b^2 = 169 - 144 = 25$, $b = 5$.
:::

::: problem id=x12 type=numeric answer="9/5" set=extra
The point $(4, y)$ with $y > 0$ is on $\frac{x^2}{25} + \frac{y^2}{9} = 1$. What is y?
solution: $\frac{y^2}{9} = 1 - \frac{16}{25} = \frac{9}{25}$.
$y^2 = \frac{81}{25}$, $y = \frac{9}{5}$.
:::

::: problem id=x13 type=numeric answer="4" set=extra
Sam says $\frac{x^2}{9} + \frac{y^2}{25} = 1$ has $c = \sqrt{9 + 25}$. What is c really?
solution: For an ellipse, subtract: $c^2 = 25 - 9 = 16$, $c = 4$.
:::

::: problem id=x14 type=text answers="circle;a circle" set=extra
What shape is $\frac{x^2}{16} + \frac{y^2}{16} = 1$?
solution: $a = b = 4$ and $c = 0$: it is a **circle** of radius 4.
:::

::: problem id=x15 type=numeric answer="12" set=extra
P is any point on $\frac{x^2}{36} + \frac{y^2}{20} = 1$. What is the sum of its distances to the two foci?
hint: It is the same for every point, so try a vertex.
solution: The sum is $2a = 2 \times 6 = 12$.
:::

::: problem id=x16 type=point answer="1,2" set=extra
Click the centre of $x^2 + 4y^2 - 2x - 16y + 13 = 0$.
graph:
x -4..6
y -3..5
hint: Complete the square: $(x^2 - 2x) + 4(y^2 - 4y) = -13$.
solution: $(x - 1)^2 + 4(y - 2)^2 = -13 + 1 + 16 = 4$.
Centre $(1, 2)$.
:::

::: problem id=x17 type=numeric answer="2sqrt(3)" set=extra
How far apart are the foci of $x^2 + 4y^2 - 2x - 16y + 13 = 0$?
hint: First put it in standard form.
solution: $\frac{(x - 1)^2}{4} + (y - 2)^2 = 1$: $a = 2$, $b = 1$.
$c = \sqrt{3}$, so the foci are $2\sqrt{3}$ apart.
:::

::: problem id=x18 type=numeric answer="40" set=extra
A whispering gallery is an elliptical room 50 m long and 30 m wide. A whisper at one focus is heard at the other. How far apart are the foci, in m?
hint: $a$ and $b$ are half the length and width.
solution: $a = 25$, $b = 15$: $c^2 = 625 - 225 = 400$, $c = 20$.
Foci $2c = 40$ m apart.
:::

::: problem id=x19 type=numeric answer="3.6" set=extra
A bridge arch is half an ellipse, 20 m wide and 6 m high. How high is it 8 m from the centre?
hint: $\frac{x^2}{100} + \frac{y^2}{36} = 1$.
solution: $\frac{y^2}{36} = 1 - \frac{64}{100} = 0.36$.
$y^2 = 12.96$, $y = 3.6$ m.
:::

::: problem id=x20 type=numeric answer="10" set=extra creative=true
An ellipse has foci $(\pm 4, 0)$ and passes through $(0, 3)$. How long is its major axis?
hint: $(0, 3)$ is a co-vertex.
solution: $b = 3$, $c = 4$, so $a^2 = b^2 + c^2 = 25$ and $a = 5$.
Major axis $2a = 10$.
:::
