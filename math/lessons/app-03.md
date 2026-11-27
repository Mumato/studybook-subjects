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

::: problem id=x1 type=numeric answer="64" set=extra
Two numbers add up to 16. What is the biggest their product can be?
solution: $P = x(16 - x)$, $P' = 16 - 2x = 0$ at $x = 8$: $8 \times 8 = 64$.
:::

::: problem id=x2 type=numeric answer="225" set=extra
A rectangle has perimeter 60. What is its largest possible area?
solution: Sides x and $30 - x$. $A' = 30 - 2x = 0$ at $x = 15$: $15 \times 15 = 225$.
:::

::: problem id=x3 type=numeric answer="6" set=extra
For $x > 0$, what is the smallest value of $x + \frac{9}{x}$?
solution: $1 - \frac{9}{x^2} = 0$ at $x = 3$: $3 + 3 = 6$.
:::

::: problem id=x4 type=numeric answer="45" set=extra
A ball's height is $h(t) = 30t - 5t^2$ metres. What is its greatest height?
solution: $h' = 30 - 10t = 0$ at $t = 3$.
$h(3) = 90 - 45 = 45$ m.
:::

::: problem id=x5 type=numeric answer="32" set=extra
A rectangle has area 64. What is its smallest possible perimeter?
solution: $P = 2x + \frac{128}{x}$, $P' = 2 - \frac{128}{x^2} = 0$ at $x = 8$: an 8 by 8 square, $P = 32$.
:::

::: problem id=x6 type=numeric answer="7200" set=extra
A farmer has 240 m of fence for a rectangle along a river (no fence on the river side). What is the biggest area?
solution: $A = x(240 - 2x)$, $A' = 240 - 4x = 0$, $x = 60$.
$60 \times 120 = 7200$ m².
:::

::: problem id=x7 type=numeric answer="1/4" set=extra
What is the largest value of $x - x^2$?
solution: $1 - 2x = 0$ at $x = \frac{1}{2}$: $\frac{1}{2} - \frac{1}{4} = \frac{1}{4}$.
:::

::: problem id=x8 type=numeric answer="2500" set=extra
A shop's revenue is $R = p(200 - 4p)$ dollars at price p. What is the most revenue it can make?
solution: $R' = 200 - 8p = 0$ at $p = 25$.
$R = 25 \times 100 = 2500$ dollars.
:::

::: problem id=x9 type=point answer="4,2" set=extra
Click the point on the line $y = 10 - 2x$ that is closest to the origin.
graph:
x -1..6
y -1..11
plot 10-2x blue
hint: Minimise the squared distance $D = x^2 + (10 - 2x)^2$.
solution: $D' = 2x - 4(10 - 2x) = 10x - 40 = 0$, $x = 4$.
$y = 10 - 8 = 2$: $(4, 2)$.
:::

::: problem id=x10 type=numeric answer="3" set=extra
Squares of side x are cut from the corners of an 18 by 18 sheet to make an open box. Which x gives the biggest volume?
solution: $V = x(18 - 2x)^2$, $V' = (18 - 2x)(18 - 6x)$.
$x = 9$ gives no box, so $x = 3$ ($V = 432$).
:::

::: problem id=x11 type=numeric answer="24" set=extra
Positive numbers x and y have $xy = 36$. What is the smallest possible value of $x + 4y$?
solution: $S = x + \frac{144}{x}$, $S' = 1 - \frac{144}{x^2} = 0$ at $x = 12$.
$y = 3$, $S = 12 + 12 = 24$.
:::

::: problem id=x12 type=numeric answer="18" set=extra
What is the largest value of $f(x) = x^3 - 3x$ on the interval $0 \le x \le 3$?
hint: On a closed interval, compare the critical points **and** the endpoints.
solution: $f' = 0$ at $x = 1$: $f(1) = -2$. Endpoints: $f(0) = 0$, $f(3) = 18$. Largest: **18**, at an endpoint.
:::

::: problem id=x13 type=numeric answer="32" set=extra
A rectangle has its base on the x-axis and its top corners on $y = 12 - x^2$. What is its largest area?
hint: With corners at $\pm x$, the area is $A = 2x(12 - x^2)$.
solution: $A = 24x - 2x^3$, $A' = 24 - 6x^2 = 0$, $x = 2$.
$A = 4 \cdot 8 = 32$.
:::

::: problem id=x14 type=numeric answer="48" set=extra
An open box (no lid) with a square base must hold 32 cm³. What is the least surface area it can have?
hint: Base x by x, height $h = \frac{32}{x^2}$. Surface $S = x^2 + 4xh$.
solution: $S = x^2 + \frac{128}{x}$, $S' = 2x - \frac{128}{x^2} = 0$: $x^3 = 64$, $x = 4$, $h = 2$.
$S = 16 + 32 = 48$ cm².
:::

::: problem id=x15 type=numeric answer="40" set=extra
A rectangular pen of area 200 m² is built against a barn wall, so only three sides need fence. What is the least fence needed?
solution: Two sides x, third side $\frac{200}{x}$. $L = 2x + \frac{200}{x}$.
$L' = 2 - \frac{200}{x^2} = 0$, $x = 10$: $L = 20 + 20 = 40$ m.
:::

::: problem id=x16 type=numeric answer="100" set=extra
A company's profit is $P(x) = -x^2 + 40x - 300$ (thousands of dollars) when it makes x thousand items. What is the greatest profit, in thousands?
solution: $P' = -2x + 40 = 0$ at $x = 20$.
$P(20) = -400 + 800 - 300 = 100$.
:::

::: problem id=x17 type=numeric answer="7/2" set=extra
Which point on the curve $y = \sqrt{x}$ is closest to $(4, 0)$? Type its x value.
hint: The squared distance is $D = (x - 4)^2 + x$.
solution: $D' = 2(x - 4) + 1 = 0$, so $x = \frac{7}{2}$.
:::

::: problem id=x18 type=numeric answer="2" set=extra
For $x > 0$, what is the smallest possible value of a number plus its reciprocal, $x + \frac{1}{x}$?
solution: $1 - \frac{1}{x^2} = 0$ at $x = 1$: $1 + 1 = 2$.
:::

::: problem id=x19 type=numeric answer="3" set=extra
An open-top cylinder must hold $27\pi$ cm³. Which height uses the least material?
hint: $h = \frac{27}{r^2}$ and the material is $S = \pi r^2 + 2\pi rh$.
solution: $S = \pi r^2 + \frac{54\pi}{r}$, $S' = 2\pi r - \frac{54\pi}{r^2} = 0$.
$r^3 = 27$, $r = 3$, $h = \frac{27}{9} = 3$.
:::

::: problem id=x20 type=numeric answer="45/2" set=extra creative=true
A lifeguard is at point A on a straight beach. A swimmer is 30 m out at sea, opposite point B, which is 40 m along the beach from A. The lifeguard runs at 5 m/s and swims at 3 m/s. How far from B should she enter the water?
hint: If she enters x metres from B, the time is $T = \frac{40 - x}{5} + \frac{\sqrt{x^2 + 900}}{3}$.
solution: $T' = -\frac{1}{5} + \frac{x}{3\sqrt{x^2 + 900}} = 0$.
$3\sqrt{x^2 + 900} = 5x$, so $9x^2 + 8100 = 25x^2$.
$x^2 = \frac{8100}{16}$, $x = \frac{90}{4} = 22.5$ m.
:::
