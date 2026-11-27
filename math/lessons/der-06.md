---
id: der-06
title: Implicit differentiation
---
A curve like a circle isn't one function $y = f(x)$. You can still find its slope without solving for y.

::: rule
To find $\frac{dy}{dx}$ (written $y'$) when x and y are mixed in one equation:

1. Differentiate **both sides** with respect to x.
2. Treat y as a function of x: every time you differentiate something with y, multiply by $y'$ (chain rule). So $\frac{d}{dx}y^2 = 2yy'$, and $\frac{d}{dx}(xy) = y + xy'$.
3. Collect the $y'$ terms on one side and solve for $y'$.

The answer usually has both x and y in it. Put in the point to get a number.
:::

::: example
Circle $x^2 + y^2 = 25$:

$2x + 2yy' = 0$, so $y' = -\frac{x}{y}$.

At $(3, 4)$: slope $-\frac{3}{4}$. Tangent:

$y - 4 = -\frac{3}{4}(x - 3)$, so $y = -\frac{3}{4}x + \frac{25}{4}$.
:::

::: graph
x -6..7
y -6..7
circle 0,0 5
plot -3x/4+25/4 red
point 3,4
:::

::: example
$x^3 + y^3 = 6xy$. Product rule on the right:

$3x^2 + 3y^2y' = 6y + 6xy'$.

Collect: $y'(3y^2 - 6x) = 6y - 3x^2$.

So $y' = \frac{2y - x^2}{y^2 - 2x}$. At $(3, 3)$: $\frac{6 - 9}{9 - 6} = -1$.
:::

Type answers with x and y, like -x/y.

::: problem id=p1 type=expression answer="-x/y" vars="x,y"
Find $y'$ for $x^2 + y^2 = 16$, in terms of x and y.
solution: $2x + 2yy' = 0$, so $y' = -\frac{x}{y}$.
:::

::: problem id=p2 type=numeric answer="3/4"
What is the slope of $x^2 + y^2 = 25$ at $(-3, 4)$?
hint: $y' = -\frac{x}{y}$.
solution: $-\frac{-3}{4} = \frac{3}{4}$.
:::

::: problem id=p3 type=expression answer="2/y" vars="x,y"
Find $y'$ for $y^2 = 4x$, in terms of y.
solution: $2yy' = 4$, so $y' = \frac{2}{y}$.
:::

::: problem id=p4 type=numeric answer="-3/2"
What is the slope of $xy = 6$ at $(2, 3)$?
hint: Product rule: $\frac{d}{dx}(xy) = y + xy'$.
solution: $y + xy' = 0$, so $y' = -\frac{y}{x} = -\frac{3}{2}$.
:::

::: problem id=p5 type=expression answer="-(2x+y)/(x+2y)" vars="x,y"
Find $y'$ for $x^2 + xy + y^2 = 7$, in terms of x and y.
hint: The middle term gives $y + xy'$.
solution: $2x + y + xy' + 2yy' = 0$.
$y'(x + 2y) = -(2x + y)$, so $y' = -\frac{2x + y}{x + 2y}$.
:::

::: problem id=p6 type=expression answer="-x/2+2"
Write the tangent line to the ellipse $x^2 + 4y^2 = 8$ at $(2, 1)$ as $y = \ldots$
hint: $2x + 8yy' = 0$.
solution: $y' = -\frac{x}{4y} = -\frac{2}{4} = -\frac{1}{2}$.
$y - 1 = -\frac{1}{2}(x - 2)$, so $y = -\frac{x}{2} + 2$.
:::

::: problem id=p7 type=choice
$\frac{d}{dx}(y^3) = ?$ (y is a function of x)
- [ ] $3y^2$
- [x] $3y^2y'$
- [ ] $3x^2$
- [ ] $y'^3$
solution: Chain rule: $3y^2$ times the inside's derivative $y'$.
:::

::: problem id=p8 type=expression answer="1/cos(y)" vars="x,y"
$\sin y = x$. Find $y'$ in terms of y.
solution: $\cos y \cdot y' = 1$, so $y' = \frac{1}{\cos y}$.
:::

::: problem id=x1 type=numeric answer="-3/4" set=extra
What is the slope of $x^2 + y^2 = 100$ at $(6, 8)$?
solution: $y' = -\frac{x}{y} = -\frac{6}{8} = -\frac{3}{4}$.
:::

::: problem id=x2 type=expression answer="x/y" vars="x,y" set=extra
Find $y'$ for $x^2 - y^2 = 9$, in terms of x and y.
solution: $2x - 2yy' = 0$, so $y' = \frac{x}{y}$.
:::

::: problem id=x3 type=numeric answer="1/3" set=extra
What is the slope of $y^3 = x^2$ at $(8, 4)$?
solution: $3y^2y' = 2x$, so $y' = \frac{2x}{3y^2} = \frac{16}{48} = \frac{1}{3}$.
:::

::: problem id=x4 type=numeric answer="-1/4" set=extra
What is the slope of $x^3 + y^3 = 9$ at $(1, 2)$?
solution: $3x^2 + 3y^2y' = 0$, so $y' = -\frac{x^2}{y^2} = -\frac{1}{4}$.
:::

::: problem id=x5 type=numeric answer="-8" set=extra
What is the slope of $x^2y = 4$ at $(1, 4)$?
solution: $2xy + x^2y' = 0$, so $y' = -\frac{2y}{x} = -8$.
:::

::: problem id=x6 type=numeric answer="-2" set=extra
What is the slope of $4x^2 + y^2 = 8$ at $(1, 2)$?
solution: $8x + 2yy' = 0$, so $y' = -\frac{4x}{y} = -2$.
:::

::: problem id=x7 type=choice set=extra
$\frac{d}{dx}(xy) = ?$ (y is a function of x)
- [ ] $y'$
- [ ] $xy'$
- [x] $y + xy'$
- [ ] $1 \cdot y'$
solution: Product rule: $1 \cdot y + x \cdot y'$.
:::

::: problem id=x8 type=choice set=extra
A student differentiates $x^2 + y^2 = 25$ as $2x + 2y = 0$. What's missing?
- [ ] Nothing
- [x] The $y'$: $\frac{d}{dx}y^2 = 2yy'$
- [ ] The right side should become 25
- [ ] An extra $x'$ on the first term
solution: y depends on x, so its term needs the chain rule factor $y'$.
:::

::: problem id=x9 type=expression answer="-2x/3+13/3" set=extra
Write the tangent line to $x^2 + y^2 = 13$ at $(2, 3)$ as $y = \ldots$
solution: Slope $-\frac{2}{3}$. $y - 3 = -\frac{2}{3}(x - 2)$.
So $y = -\frac{2x}{3} + \frac{13}{3}$.
:::

::: problem id=x10 type=point answer="0,3" set=extra
On the circle $x^2 + y^2 = 9$, click the point in the top half where the tangent is horizontal.
graph:
x -4..4
y -4..4
circle 0,0 3
hint: $y' = -\frac{x}{y} = 0$ needs $x = 0$.
solution: $x = 0$ gives $y = 3$ on top: $(0, 3)$.
:::

::: problem id=x11 type=point answer="4,0" set=extra
On the circle $x^2 + y^2 = 16$, click the point on the right where the tangent is vertical.
graph:
x -5..5
y -5..5
circle 0,0 4
hint: $y' = -\frac{x}{y}$ blows up when $y = 0$.
solution: $y = 0$ gives $x = 4$ on the right: $(4, 0)$.
:::

::: problem id=x12 type=expression answer="1/(1+cos(y))" vars="x,y" set=extra
$y + \sin y = x$. Find $y'$ in terms of y.
solution: $y' + \cos y \cdot y' = 1$, so $y' = \frac{1}{1 + \cos y}$.
:::

::: problem id=x13 type=numeric answer="-1" set=extra
What is the slope of $x^2 + 3xy + y^2 = 5$ at $(1, 1)$?
solution: $2x + 3y + 3xy' + 2yy' = 0$.
At $(1, 1)$: $5 + 5y' = 0$, so $y' = -1$.
:::

::: problem id=x14 type=expression answer="-4x/(9y)" vars="x,y" set=extra
Find $y'$ for the ellipse $\frac{x^2}{9} + \frac{y^2}{4} = 1$, in terms of x and y.
solution: $\frac{2x}{9} + \frac{2yy'}{4} = 0$.
So $y' = -\frac{2x}{9} \cdot \frac{2}{y} = -\frac{4x}{9y}$.
:::

::: problem id=x15 type=numeric answer="3" set=extra
What is the slope of $y^2 = x^3$ at $(4, 8)$?
solution: $2yy' = 3x^2$, so $y' = \frac{3x^2}{2y} = \frac{48}{16} = 3$.
:::

::: problem id=x16 type=numeric answer="-8/5" set=extra
What is the slope of $x^2y + xy^2 = 6$ at $(1, 2)$?
hint: Each term needs the product rule.
solution: $2xy + x^2y' + y^2 + 2xyy' = 0$.
At $(1, 2)$: $4 + y' + 4 + 4y' = 0$, so $y' = -\frac{8}{5}$.
:::

::: problem id=x17 type=expression answer="-x+2" set=extra
Write the tangent line to $x^2 + xy + y^2 = 3$ at $(1, 1)$ as $y = \ldots$
hint: $y' = -\frac{2x + y}{x + 2y}$.
solution: Slope $-\frac{3}{3} = -1$. $y - 1 = -(x - 1)$, so $y = -x + 2$.
:::

::: problem id=x18 type=point answer="-3,4" set=extra
On $x^2 + y^2 = 25$ the slope is $\frac{3}{4}$ at two points. Click the one in quadrant II.
graph:
x -6..6
y -6..6
circle 0,0 5
hint: $-\frac{x}{y} = \frac{3}{4}$, so $x = -\frac{3}{4}y$. Put that into the circle.
solution: $\frac{9}{16}y^2 + y^2 = 25$, $y^2 = 16$.
$y = 4$ gives $x = -3$: $(-3, 4)$.
:::

::: problem id=x19 type=expression answer="4x/3" set=extra
The **normal line** is perpendicular to the tangent. Write the normal to $x^2 + y^2 = 25$ at $(3, 4)$ as $y = \ldots$
hint: The tangent slope is $-\frac{3}{4}$.
solution: Normal slope $\frac{4}{3}$. $y - 4 = \frac{4}{3}(x - 3)$, so $y = \frac{4x}{3}$ (through the centre).
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
The tilted ellipse $x^2 + xy + y^2 = 3$ has a highest point, where the tangent is horizontal. What is its y-coordinate?
hint: $y' = 0$ means $2x + y = 0$. Put $y = -2x$ into the curve.
solution: $x^2 - 2x^2 + 4x^2 = 3$, so $x = \pm 1$.
$x = -1$ gives $y = 2$, the top point $(-1, 2)$.
:::
