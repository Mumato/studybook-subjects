---
id: con-03
title: Hyperbolas
---
A **hyperbola** is the set of points whose distances to two foci have the same **difference**. It has two separate branches that approach two crossing lines, the asymptotes.

::: rule
Hyperbola with centre $(0, 0)$, $a, b > 0$:
- $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ opens **left and right**: vertices $(\pm a, 0)$, foci $(\pm c, 0)$, asymptotes $y = \pm\frac{b}{a}x$
- $\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$ opens **up and down**: vertices $(0, \pm a)$, foci $(0, \pm c)$, asymptotes $y = \pm\frac{a}{b}x$
- in both, $a^2$ is under the positive term and
$$c^2 = a^2 + b^2$$
With $(x - h)$ and $(y - k)$ the centre moves to $(h, k)$.

**Which conic?** For $Ax^2 + Cy^2 + Dx + Ey + F = 0$:
- only one variable squared: **parabola**
- $A = C$: **circle**
- A and C same sign, different: **ellipse**
- A and C opposite signs: **hyperbola**
:::

::: example
$\frac{x^2}{9} - \frac{y^2}{16} = 1$: $a = 3$, $b = 4$, opens left and right.

$c^2 = 9 + 16 = 25$, $c = 5$.

Vertices $(\pm 3, 0)$, foci $(\pm 5, 0)$, asymptotes $y = \pm\frac{4}{3}x$.
:::

::: example
$4x^2 - y^2 + 8x - 4 = 0$: $x^2$ has $+4$, $y^2$ has $-1$. Opposite signs: a **hyperbola**.
:::

::: graph
x -7..7
y -7..7
plot 4/3*sqrt(x^2-9) blue
plot -4/3*sqrt(x^2-9) blue
plot 4x/3 green
plot -4x/3 green
point 5,0 F red
point -5,0 F red
:::

::: problem id=p1 type=point answer="5,0"
Click the right vertex of $\frac{x^2}{25} - \frac{y^2}{9} = 1$.
graph:
x -7..7
y -5..5
solution: $a = 5$: vertices $(\pm 5, 0)$.
:::

::: problem id=p2 type=numeric answer="5"
The foci of $\frac{x^2}{16} - \frac{y^2}{9} = 1$ are $(\pm c, 0)$. What is c?
solution: $c^2 = 16 + 9 = 25$, $c = 5$.
:::

::: problem id=p3 type=numeric answer="5/2"
What is the positive slope of the asymptotes of $\frac{x^2}{4} - \frac{y^2}{25} = 1$?
solution: $\frac{b}{a} = \frac{5}{2}$.
:::

::: problem id=p4 type=choice
Which way does $\frac{y^2}{9} - \frac{x^2}{4} = 1$ open?
- [x] up and down
- [ ] left and right
- [ ] it is an ellipse
solution: The positive term is the y term.
:::

::: problem id=p5 type=numeric answer="3/2"
What is the positive slope of the asymptotes of $\frac{y^2}{9} - \frac{x^2}{4} = 1$?
solution: Opening up and down, the slopes are $\pm\frac{a}{b} = \pm\frac{3}{2}$.
:::

::: problem id=p6 type=choice
Which conic is $x^2 + y^2 - 4x = 5$?
- [x] circle
- [ ] ellipse
- [ ] parabola
- [ ] hyperbola
solution: $x^2$ and $y^2$ both have coefficient 1.
:::

::: problem id=p7 type=choice
Which conic is $3x^2 - 5y^2 + 6x = 10$?
- [ ] circle
- [ ] ellipse
- [ ] parabola
- [x] hyperbola
solution: The squared terms have opposite signs.
:::

::: problem id=p8 type=choice
Which conic is $y^2 - 8x + 2y = 0$?
- [ ] circle
- [ ] ellipse
- [x] parabola
- [ ] hyperbola
solution: Only y is squared.
:::

::: problem id=x1 type=numeric answer="10" set=extra
What is c for $\frac{x^2}{64} - \frac{y^2}{36} = 1$?
solution: $c^2 = 64 + 36 = 100$, $c = 10$.
:::

::: problem id=x2 type=point answer="4,0" set=extra
Click the right vertex of $\frac{x^2}{16} - \frac{y^2}{20} = 1$.
graph:
x -6..6
y -6..6
solution: $a = 4$: $(4, 0)$.
:::

::: problem id=x3 type=numeric answer="1/2" set=extra
What is the positive slope of the asymptotes of $\frac{x^2}{36} - \frac{y^2}{9} = 1$?
solution: $\frac{b}{a} = \frac{3}{6} = \frac{1}{2}$.
:::

::: problem id=x4 type=numeric answer="3" set=extra
What is the y-coordinate of the upper focus of $\frac{y^2}{5} - \frac{x^2}{4} = 1$?
solution: $c^2 = 5 + 4 = 9$: foci $(0, \pm 3)$.
:::

::: problem id=x5 type=choice set=extra
What are the vertices of $\frac{y^2}{16} - \frac{x^2}{9} = 1$?
- [x] $(0, \pm 4)$
- [ ] $(\pm 4, 0)$
- [ ] $(0, \pm 3)$
- [ ] $(\pm 3, 0)$
solution: The y term is positive, so the vertices are on the y-axis, $a = 4$ from the centre.
:::

::: problem id=x6 type=point answer="2,-3" set=extra
Click the centre of $\frac{(x - 2)^2}{9} - \frac{(y + 3)^2}{4} = 1$.
graph:
x -6..6
y -6..6
solution: $(2, -3)$.
:::

::: problem id=x7 type=choice set=extra
Which conic is $4x^2 + 9y^2 - 36 = 0$?
- [ ] circle
- [x] ellipse
- [ ] parabola
- [ ] hyperbola
solution: Both squares positive with different coefficients (4 and 9).
:::

::: problem id=x8 type=choice set=extra
Which conic is $2x^2 + 2y^2 - 8y = 0$?
- [x] circle
- [ ] ellipse
- [ ] parabola
- [ ] hyperbola
solution: Equal coefficients on $x^2$ and $y^2$.
:::

::: problem id=x9 type=choice set=extra
Which conic is $x^2 + 4x - y + 3 = 0$?
- [ ] circle
- [ ] ellipse
- [x] parabola
- [ ] hyperbola
solution: Only x is squared: it is $y = x^2 + 4x + 3$.
:::

::: problem id=x10 type=choice set=extra
Which conic is $-x^2 + 4y^2 + 2x = 7$?
- [ ] circle
- [ ] ellipse
- [ ] parabola
- [x] hyperbola
solution: $-1$ and $+4$ have opposite signs.
:::

::: problem id=x11 type=numeric answer="4" set=extra
A hyperbola has vertices $(\pm 3, 0)$ and foci $(\pm 5, 0)$. What is b?
solution: $b^2 = c^2 - a^2 = 25 - 9 = 16$, $b = 4$.
:::

::: problem id=x12 type=choice set=extra
Which hyperbola has vertices $(0, \pm 2)$ and foci $(0, \pm 3)$?
- [x] $\frac{y^2}{4} - \frac{x^2}{5} = 1$
- [ ] $\frac{x^2}{4} - \frac{y^2}{5} = 1$
- [ ] $\frac{y^2}{4} - \frac{x^2}{13} = 1$
- [ ] $\frac{y^2}{9} - \frac{x^2}{4} = 1$
solution: $a = 2$ on the y-axis; $b^2 = 9 - 4 = 5$.
:::

::: problem id=x13 type=numeric answer="5" set=extra
Sam says $\frac{x^2}{9} - \frac{y^2}{16} = 1$ has $c = \sqrt{16 - 9} = \sqrt{7}$. What is c really?
solution: For a hyperbola, add: $c^2 = 9 + 16 = 25$, $c = 5$.
:::

::: problem id=x14 type=numeric answer="4" set=extra
How far apart are the vertices of $9x^2 - 4y^2 = 36$?
solution: Divide by 36: $\frac{x^2}{4} - \frac{y^2}{9} = 1$. $a = 2$, so they are $2a = 4$ apart.
:::

::: problem id=x15 type=numeric answer="sqrt(5)" set=extra
A hyperbola opening left and right has vertices $(\pm 1, 0)$ and asymptotes $y = \pm 2x$. What is c?
solution: $a = 1$ and $\frac{b}{a} = 2$, so $b = 2$.
$c = \sqrt{1 + 4} = \sqrt{5}$.
:::

::: problem id=x16 type=point answer="6,0" set=extra
Click the right focus of $\frac{(x - 1)^2}{16} - \frac{y^2}{9} = 1$.
graph:
x -6..8
y -5..5
solution: Centre $(1, 0)$, $c = \sqrt{16 + 9} = 5$: focus $(1 + 5, 0) = (6, 0)$.
:::

::: problem id=x17 type=expression answer="3x/2+1/2" set=extra
Write the asymptote with positive slope of $\frac{(x - 1)^2}{4} - \frac{(y - 2)^2}{9} = 1$, as $y = \ldots$
hint: It passes through the centre with slope $\frac{b}{a}$.
solution: Centre $(1, 2)$, slope $\frac{3}{2}$: $y - 2 = \frac{3}{2}(x - 1)$.
$y = \frac{3}{2}x + \frac{1}{2}$.
:::

::: problem id=x18 type=point answer="2,-1" set=extra
Click the centre of $x^2 - 4y^2 - 4x - 8y - 4 = 0$.
graph:
x -5..5
y -5..5
hint: Complete the square: $(x^2 - 4x) - 4(y^2 + 2y) = 4$.
solution: $(x - 2)^2 - 4(y + 1)^2 = 4 + 4 - 4 = 4$.
Centre $(2, -1)$.
:::

::: problem id=x19 type=numeric answer="2sqrt(5)" set=extra
How far apart are the foci of $x^2 - 4y^2 - 4x - 8y - 4 = 0$?
hint: Get the standard form first.
solution: $\frac{(x - 2)^2}{4} - (y + 1)^2 = 1$: $a^2 = 4$, $b^2 = 1$.
$c = \sqrt{5}$, so they are $2\sqrt{5}$ apart.
:::

::: problem id=x20 type=numeric answer="8" set=extra creative=true
A hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ has foci $(\pm 10, 0)$ and asymptotes $y = \pm\frac{3}{4}x$. What is a?
hint: Write $b = \frac{3}{4}a$ and use $c^2 = a^2 + b^2$.
solution: $a^2 + \frac{9}{16}a^2 = 100$, so $\frac{25}{16}a^2 = 100$.
$a^2 = 64$, $a = 8$ (and $b = 6$).
:::
