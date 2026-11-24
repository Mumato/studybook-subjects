---
id: app-03
title: Optimization
---
::: rule
To find the biggest or smallest possible value of something:
1. Write the quantity as a function of **one** variable (use the given facts to get rid of the others).
2. Take the derivative and set it to 0.
3. Check that it's a max (or min) and answer the question that was asked.
:::

::: example
40 m of fence around a rectangle. If one side is x, the other is $20 - x$, so the area is $A = x(20 - x) = 20x - x^2$. $A' = 20 - 2x = 0$ at $x = 10$: a 10 by 10 square, area 100 m².
:::

::: problem id=p1 type=numeric answer="25"
Two numbers add up to 10. What is the biggest their product can be?
hint: $P = x(10 - x)$.
solution: $P' = 10 - 2x = 0$, $x = 5$: $5 \times 5 = 25$.
:::

::: problem id=p2 type=numeric answer="100"
A rectangle has perimeter 40. What is its largest possible area?
solution: A 10 by 10 square: 100.
:::

::: problem id=p3 type=numeric answer="1250"
A farmer has 100 m of fence to make a rectangle along a river (no fence needed on the river side). What is the biggest area?
hint: With two sides of x, the third side is $100 - 2x$.
solution: $A = x(100 - 2x)$, $A' = 100 - 4x = 0$, $x = 25$: $25 \times 50 = 1250$ m².
:::

::: problem id=p4 type=numeric answer="4"
For $x > 0$, what is the smallest value of $x + \frac{4}{x}$?
solution: $1 - \frac{4}{x^2} = 0$ at $x = 2$: $2 + 2 = 4$.
:::

::: problem id=p5 type=numeric answer="2"
You cut squares of side x from the corners of a 12 by 12 sheet and fold up the sides to make an open box. Which x gives the biggest volume?
hint: $V = x(12 - 2x)^2$ and $V' = (12 - 2x)(12 - 6x)$.
solution: $V' = 0$ at $x = 6$ (no box) or $x = 2$. So $x = 2$, giving $V = 128$.
:::

::: problem id=p6 type=numeric answer="8"
Two positive numbers multiply to 16. What is the smallest their sum can be?
solution: $S = x + \frac{16}{x}$, $S' = 1 - \frac{16}{x^2} = 0$ at $x = 4$: $4 + 4 = 8$.
:::

::: problem id=p7 type=numeric answer="20"
A ball's height is $h(t) = 20t - 5t^2$ metres. What is its greatest height?
solution: $h' = 20 - 10t = 0$ at $t = 2$: $h(2) = 40 - 20 = 20$ m.
:::

::: problem id=p8 type=numeric answer="25"
A shop sells $100 - 2p$ items at price p. Revenue is $R = p(100 - 2p)$. Which price gives the most revenue?
solution: $R' = 100 - 4p = 0$, $p = 25$.
:::

::: problem id=c1 type=numeric answer="2" creative=true
A can (a cylinder) must hold a fixed volume. To use the least metal, how many times its radius should its height be?
hint: $V = \pi r^2 h$ is fixed, so $h = \frac{V}{\pi r^2}$. Minimise the surface $S = 2\pi r^2 + 2\pi rh$.
solution: $S = 2\pi r^2 + \frac{2V}{r}$, $S' = 4\pi r - \frac{2V}{r^2} = 0$ gives $V = 2\pi r^3$. Then $h = \frac{2\pi r^3}{\pi r^2} = 2r$: the height is **2** times the radius.
:::
