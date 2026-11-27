---
id: app-02
title: The second derivative and concavity
---
::: rule
The **second derivative** $f''$ is the derivative of $f'$.
- $f'' > 0$: **concave up**, shaped like a cup ∪
- $f'' < 0$: **concave down**, shaped like a cap ∩
- An **inflection point** is where the concavity changes.

**Second derivative test:** if $f'(c) = 0$ and $f''(c) > 0$, it's a minimum; if $f''(c) < 0$, a maximum.
:::

::: example
$f(x) = x^3$: $f'' = 6x$. It's negative for $x < 0$ and positive for $x > 0$, so $(0, 0)$ is an inflection point.
:::

::: graph
x -2..2
y -3..3
plot x^3 blue
point 0,0 inflection
:::

::: problem id=p1 type=expression answer="12x^2"
$f(x) = x^4$. What is $f''(x)$?
solution: $f' = 4x^3$, $f'' = 12x^2$.
:::

::: problem id=p2 type=numeric answer="1"
$f(x) = x^3 - 3x^2$. Where is its inflection point? Type the x value.
hint: $f''(x) = 6x - 6$.
solution: $6x - 6 = 0$, $x = 1$.
:::

::: problem id=p3 type=expression answer="-sin(x)"
$f(x) = \sin x$. What is $f''(x)$?
solution: $f' = \cos x$, $f'' = -\sin x$.
:::

::: problem id=p4 type=text answers="minimum;min;local minimum;local min"
$f(x) = x^2 - 8x$ has $f'(4) = 0$ and $f''(4) = 2$. Is $x = 4$ a maximum or a minimum?
solution: $f'' > 0$, a cup: **minimum**.
:::

::: problem id=p5 type=numeric answer="9"
$f(x) = -x^2 + 6x$. What is its maximum value?
hint: Find where $f'(x) = 0$ first.
solution: $-2x + 6 = 0$ at $x = 3$; $f(3) = -9 + 18 = 9$.
:::

::: problem id=p6 type=choice
Where $f'' > 0$, the graph is shaped like:
- [x] a cup ∪
- [ ] a cap ∩
- [ ] a straight line
solution: Concave up: a cup.
:::

::: problem id=p7 type=point answer="1,0"
Here is $y = x^3 - 3x^2 + 2$. Click its inflection point.
graph:
x -2..4
y -4..4
plot x^3-3x^2+2 blue
hint: $f''(x) = 6x - 6$.
solution: $x = 1$, $y = 1 - 3 + 2 = 0$: $(1, 0)$.
:::

::: problem id=p8 type=numeric answer="2"
$f(x) = x^3 - 6x^2$. Where is its inflection point? Type the x value.
solution: $f'' = 6x - 12 = 0$, $x = 2$.
:::

::: problem id=x1 type=expression answer="20x^3-18x" set=extra
$f(x) = x^5 - 3x^3$. What is $f''(x)$?
solution: $f' = 5x^4 - 9x^2$, $f'' = 20x^3 - 18x$.
:::

::: problem id=x2 type=expression answer="4e^(2x)" set=extra
$f(x) = e^{2x}$. What is $f''(x)$?
solution: $f' = 2e^{2x}$, $f'' = 4e^{2x}$.
:::

::: problem id=x3 type=expression answer="-1/x^2" set=extra
$f(x) = \ln x$. What is $f''(x)$?
solution: $f' = \frac{1}{x} = x^{-1}$, $f'' = -x^{-2} = -\frac{1}{x^2}$.
:::

::: problem id=x4 type=numeric answer="-2" set=extra
$f(x) = x^3 + 6x^2$. Where is its inflection point? Type the x value.
solution: $f'' = 6x + 12 = 0$, $x = -2$.
:::

::: problem id=x5 type=numeric answer="24" set=extra
$f(x) = x^4 - 2x^3$. What is $f''(2)$?
solution: $f'' = 12x^2 - 12x$.
$f''(2) = 48 - 24 = 24$.
:::

::: problem id=x6 type=choice set=extra
$f(x) = x^3 - 12x$ has $f'(2) = 0$. What does the second derivative test say about $x = 2$?
- [x] local minimum
- [ ] local maximum
- [ ] the test gives no answer
solution: $f'' = 6x$, $f''(2) = 12 > 0$: a cup, so a **minimum**.
:::

::: problem id=x7 type=text answers="maximum;max;local maximum;local max" set=extra
Same function, $f(x) = x^3 - 12x$, at $x = -2$. Maximum or minimum?
solution: $f''(-2) = -12 < 0$: a cap, so a **maximum**.
:::

::: problem id=x8 type=choice set=extra
Where is $f(x) = x^3 - 3x^2$ concave up?
- [ ] $x < 1$
- [x] $x > 1$
- [ ] $0 < x < 2$
- [ ] everywhere
solution: $f'' = 6x - 6 > 0$ when $x > 1$.
:::

::: problem id=x9 type=multi answers="1;-1" set=extra
Find both inflection points (x values) of $f(x) = x^4 - 6x^2$.
solution: $f'' = 12x^2 - 12 = 0$ at $x = \pm 1$. The sign changes at both.
:::

::: problem id=x10 type=choice set=extra
$f(x) = x^4$ has $f''(0) = 0$. Is $(0, 0)$ an inflection point?
- [ ] Yes, because $f''(0) = 0$
- [x] No, because $f''$ does not change sign
- [ ] Yes, because $f'(0) = 0$
solution: $f'' = 12x^2 \ge 0$ on both sides. The graph is a cup all the way: **no** inflection.
:::

::: problem id=x11 type=point answer="-1,1" set=extra
Here is $y = x^3 + 3x^2 - 1$. Click its inflection point.
graph:
x -4..2
y -3..5
plot x^3+3x^2-1 blue
hint: Solve $f''(x) = 0$.
solution: $f'' = 6x + 6 = 0$ at $x = -1$.
$y = -1 + 3 - 1 = 1$: $(-1, 1)$.
:::

::: problem id=x12 type=choice set=extra
$f'(c) = 0$ and $f''(c) = 0$. What does the second derivative test tell you?
- [ ] c is a maximum
- [ ] c is a minimum
- [ ] c is an inflection point
- [x] nothing: use the first derivative test instead
solution: The test needs $f''(c) \ne 0$. Think of $x^3$, $x^4$ and $-x^4$ at 0: all three cases happen.
:::

::: problem id=x13 type=numeric answer="-22" set=extra
Find the local minimum value of $f(x) = x^3 - 3x^2 - 9x + 5$.
solution: $f' = 3(x - 3)(x + 1)$. $f''(3) = 12 > 0$: min at 3.
$f(3) = 27 - 27 - 27 + 5 = -22$.
:::

::: problem id=x14 type=choice set=extra
A graph is rising and bending like a cap ∩. Which is true?
- [ ] $f' < 0$, $f'' > 0$
- [ ] $f' > 0$, $f'' > 0$
- [x] $f' > 0$, $f'' < 0$
- [ ] $f' < 0$, $f'' < 0$
solution: Rising: $f' > 0$. Cap shape: concave down, $f'' < 0$.
:::

::: problem id=x15 type=numeric answer="-2" set=extra
Where is the inflection point of $f(x) = xe^x$? Type the x value.
hint: $f'(x) = (x + 1)e^x$. Differentiate again with the product rule.
solution: $f'' = e^x + (x + 1)e^x = (x + 2)e^x$. Zero at $x = -2$, and the sign changes there.
:::

::: problem id=x16 type=numeric answer="-6" set=extra
$f(x) = x^3 + bx^2 + x$ has an inflection point at $x = 2$. Find b.
hint: Set $f''(2) = 0$.
solution: $f'' = 6x + 2b$. $12 + 2b = 0$, so $b = -6$.
:::

::: problem id=x17 type=numeric answer="-16" set=extra
$f(x) = x^4 - 4x^3$ has two inflection points. What is the y-coordinate of the one with $x > 0$?
hint: $f'' = 12x^2 - 24x$.
solution: $12x(x - 2) = 0$ at $x = 0, 2$ (sign changes at both).
$f(2) = 16 - 32 = -16$.
:::

::: problem id=x18 type=numeric answer="e^(-3/2)" set=extra
Where is the inflection point of $f(x) = x^2\ln x$ ($x > 0$)? (exact)
hint: $f'(x) = 2x\ln x + x$.
solution: $f'' = 2\ln x + 2 + 1 = 2\ln x + 3$.
$\ln x = -\frac{3}{2}$, so $x = e^{-3/2}$.
:::

::: problem id=x19 type=choice set=extra
$f'(x) = x^2 - 4$. Where is f concave down?
- [x] $x < 0$
- [ ] $x > 0$
- [ ] $-2 < x < 2$
- [ ] $x < -2$ or $x > 2$
solution: $f'' = 2x < 0$ when $x < 0$. (The interval $-2 < x < 2$ is where f **decreases**.)
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
$f(x) = x^3 - 6x^2 + 9x + 1$ has critical points at $x = 1$ and $x = 3$. Guess the inflection point's x value first, then check. Why does the guess always work for a cubic?
hint: $f'$ is a parabola. Where is a parabola's vertex?
solution: $f'' = 6x - 12 = 0$ at $x = 2$, halfway between 1 and 3. For a cubic, $f'$ is a parabola, symmetric about its vertex, and the vertex is where $f'' = 0$.
:::
