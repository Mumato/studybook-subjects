---
id: pre-03
title: Rational functions and asymptotes
---
::: rule
For $f(x) = \frac{p(x)}{q(x)}$:
- **vertical asymptotes** where $q(x) = 0$ (and the top isn't 0 there)
- **horizontal asymptote** by comparing degrees: top smaller → $y = 0$; equal → $y = \frac{\text{leading coeff. of top}}{\text{leading coeff. of bottom}}$; top bigger → none
- **x-intercepts** where the top is 0
:::

::: example
$f(x) = \frac{1}{x - 2} + 1$: vertical asymptote $x = 2$, horizontal asymptote $y = 1$.
:::

::: graph
x -3..7
y -4..6
plot 1/(x-2)+1 blue
plot 1 green
point 2,1 red open
:::

::: problem id=p1 type=numeric answer="3"
Where is the vertical asymptote of $\frac{1}{x - 3}$? Type the x value.
solution: $x = 3$.
:::

::: problem id=p2 type=numeric answer="2"
What is the horizontal asymptote of $\frac{2x + 1}{x - 1}$? Type the y value.
solution: Equal degrees: $\frac{2}{1} = 2$.
:::

::: problem id=p3 type=numeric answer="0"
What is the horizontal asymptote of $\frac{1}{x}$? Type the y value.
solution: Top degree smaller: $y = 0$.
:::

::: problem id=p4 type=multi answers="2;-2"
Where are the vertical asymptotes of $\frac{1}{x^2 - 4}$? Type both x values.
solution: $x^2 = 4$: $x = 2$ and $x = -2$.
:::

::: problem id=p5 type=choice
What is the horizontal asymptote of $\frac{x^2}{x + 1}$?
- [ ] $y = 1$
- [ ] $y = 0$
- [x] there is none
solution: The top's degree is bigger.
:::

::: problem id=p6 type=numeric answer="4"
Where does $\frac{x - 4}{x + 1}$ cross the x-axis? Type the x value.
solution: The top is 0 at $x = 4$.
:::

::: problem id=p7 type=point answer="2,1"
Here is $y = \frac{1}{x - 2} + 1$. Click the point where its two asymptotes cross.
graph:
x -3..7
y -4..6
plot 1/(x-2)+1 blue
solution: $x = 2$ and $y = 1$ meet at $(2, 1)$.
:::

::: problem id=p8 type=numeric answer="-3"
What is the y-intercept of $\frac{x + 6}{x - 2}$?
solution: $\frac{6}{-2} = -3$.
:::

::: problem id=c1 type=expression answer="x+1" creative=true
$f(x) = \frac{x^2 - 1}{x - 1}$ has no vertical asymptote at $x = 1$. Its graph is a straight line with one point missing. Which line? Type $y = \ldots$
hint: Factor the top.
solution: $\frac{(x + 1)(x - 1)}{x - 1} = x + 1$, with a hole at $x = 1$.
:::

::: problem id=x1 type=numeric answer="-4" set=extra
Where is the vertical asymptote of $\frac{5}{x + 4}$? Type the x value.
solution: $x + 4 = 0$ at $x = -4$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
What is the horizontal asymptote of $\frac{6x - 1}{3x + 2}$? Type the y value.
solution: Equal degrees: $\frac{6}{3} = 2$.
:::

::: problem id=x3 type=numeric answer="0" set=extra
What is the horizontal asymptote of $\frac{x + 3}{x^2 + 1}$? Type the y value.
solution: Top degree smaller: $y = 0$.
:::

::: problem id=x4 type=numeric answer="3" set=extra
Where does $\frac{2x - 6}{x + 1}$ cross the x-axis? Type the x value.
solution: $2x - 6 = 0$ at $x = 3$.
:::

::: problem id=x5 type=numeric answer="-1" set=extra
What is the y-intercept of $\frac{x - 3}{x + 3}$?
solution: $\frac{-3}{3} = -1$.
:::

::: problem id=x6 type=multi answers="3;-2" set=extra
Where are the vertical asymptotes of $\frac{x + 1}{x^2 - x - 6}$?
solution: $x^2 - x - 6 = (x - 3)(x + 2)$: $x = 3$ and $x = -2$ (the top isn't 0 there).
:::

::: problem id=x7 type=choice set=extra
What is the horizontal asymptote of $\frac{4x^3}{2x^3 - 1}$?
- [x] $y = 2$
- [ ] $y = 4$
- [ ] $y = 0$
- [ ] there is none
solution: Equal degrees: $\frac{4}{2} = 2$.
:::

::: problem id=x8 type=numeric answer="2" set=extra
What is $f(3)$ for $f(x) = \frac{x + 1}{x - 1}$?
solution: $\frac{4}{2} = 2$.
:::

::: problem id=x9 type=numeric answer="5/2" set=extra
Which x value is not in the domain of $\frac{x}{2x - 5}$?
solution: $2x - 5 = 0$ at $x = \frac{5}{2}$.
:::

::: problem id=x10 type=multi answers="3;-3" set=extra
Where does $\frac{x^2 - 9}{x + 1}$ cross the x-axis?
solution: $x^2 - 9 = 0$: $x = 3$ and $x = -3$.
:::

::: problem id=x11 type=choice set=extra
Which function has a vertical asymptote $x = 1$ and a horizontal asymptote $y = 3$?
- [x] $\frac{3x}{x - 1}$
- [ ] $\frac{x}{3x - 1}$
- [ ] $\frac{3}{x - 1}$
- [ ] $\frac{3x}{x + 1}$
solution: Bottom 0 at $x = 1$, and equal degrees with $\frac{3}{1} = 3$.
:::

::: problem id=x12 type=point answer="-1,-2" set=extra
Here is $y = \frac{2}{x + 1} - 2$. Click where its two asymptotes cross.
graph:
x -5..4
y -6..3
plot 2/(x+1)-2 blue
solution: Vertical asymptote $x = -1$, horizontal $y = -2$: they meet at $(-1, -2)$.
:::

::: problem id=x13 type=choice set=extra
Does $\frac{x^2 - 1}{x + 1}$ have a vertical asymptote?
- [x] no, it has a hole at $x = -1$
- [ ] yes, at $x = -1$
- [ ] yes, at $x = 1$
- [ ] yes, at $x = 1$ and $x = -1$
solution: $\frac{(x - 1)(x + 1)}{x + 1} = x - 1$ for $x \ne -1$: the bottom's zero cancels, leaving a hole.
:::

::: problem id=x14 type=numeric answer="4" set=extra
$\frac{x^2 - 4}{x - 2}$ has a hole. What is its y-coordinate?
hint: Cancel the common factor, then put in the x of the hole.
solution: It equals $x + 2$ for $x \ne 2$. At $x = 2$: $y = 4$.
:::

::: problem id=x15 type=numeric answer="2" set=extra
Making x items costs 500 dollars plus 2 dollars each, so the average cost is $C(x) = \frac{500 + 2x}{x}$. What does the average cost approach for very large x?
hint: Find the horizontal asymptote.
solution: Equal degrees: $\frac{2}{1} = 2$ dollars per item.
:::

::: problem id=x16 type=numeric answer="2" set=extra
Solve $\frac{2x + 1}{x + 3} = 1$.
hint: Multiply both sides by $x + 3$.
solution: $2x + 1 = x + 3$, so $x = 2$.
:::

::: problem id=x17 type=numeric answer="8" set=extra
For which k does $\frac{kx + 1}{2x - 3}$ have horizontal asymptote $y = 4$?
solution: $\frac{k}{2} = 4$, so $k = 8$.
:::

::: problem id=x18 type=numeric answer="1" set=extra
Sam says $\frac{x - 1}{x^2 - 1}$ has a vertical asymptote at $x = 1$. How many vertical asymptotes does it really have?
solution: $\frac{x - 1}{(x - 1)(x + 1)} = \frac{1}{x + 1}$: a hole at 1 and only one asymptote, $x = -1$.
:::

::: problem id=x19 type=numeric answer="10" set=extra
$f(x) = \frac{a}{x - 4}$ passes through $(6, 5)$. What is a?
hint: Put $x = 6$, $y = 5$ in.
solution: $\frac{a}{2} = 5$, so $a = 10$.
:::

::: problem id=x20 type=numeric answer="5/4" set=extra creative=true
$f(x) = \frac{x^2 + x - 6}{x^2 - 4}$ has a hole. What is its y-coordinate?
hint: Factor top and bottom.
solution: $\frac{(x + 3)(x - 2)}{(x - 2)(x + 2)} = \frac{x + 3}{x + 2}$.
At $x = 2$: $\frac{5}{4}$.
:::
