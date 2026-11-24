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
