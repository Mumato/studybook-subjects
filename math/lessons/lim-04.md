---
id: lim-04
title: Continuity
---
::: rule
f is **continuous** at a when you can draw through $x = a$ without lifting your pen:

$$\lim_{x \to a} f(x) = f(a)$$

- Polynomials are continuous everywhere; rational functions everywhere except where the bottom is 0.
- Breaks come as a **hole**, a **jump** or a **vertical asymptote**.
- **Intermediate value theorem:** if f is continuous on $[a, b]$, it takes every value between $f(a)$ and $f(b)$.
:::

::: example
$f(x) = x^2$ for $x < 2$ and $f(x) = kx$ for $x \ge 2$. The pieces meet when $2^2 = 2k$, so $k = 2$ makes f continuous.
:::

::: problem id=p1 type=numeric answer="5"
Where is $\frac{1}{x - 5}$ not continuous? Type the x value.
solution: The bottom is 0 at $x = 5$.
:::

::: problem id=p2 type=text answers="yes"
Is $x^3 - 2x$ continuous everywhere? Type yes or no.
solution: It's a polynomial: **yes**.
:::

::: problem id=p3 type=numeric answer="4"
$f(x) = x + 3$ for $x < 1$ and $f(x) = kx$ for $x \ge 1$. Which k makes f continuous?
hint: Make the two pieces meet at $x = 1$.
solution: $1 + 3 = k \cdot 1$, so $k = 4$.
:::

::: problem id=p4 type=multi answers="1;-4"
Where is $\frac{1}{(x - 1)(x + 4)}$ not continuous? Type both x values.
solution: $x = 1$ and $x = -4$.
:::

::: problem id=p5 type=choice
What kind of break does $\frac{x^2 - 1}{x - 1}$ have at $x = 1$?
- [x] a hole
- [ ] a jump
- [ ] a vertical asymptote
solution: It simplifies to $x + 1$ with one missing point: a **hole**.
:::

::: problem id=p6 type=text answers="yes"
f is continuous, $f(1) = -2$ and $f(3) = 5$. Must $f(x) = 0$ somewhere between 1 and 3? Type yes or no.
hint: 0 lies between $-2$ and 5.
solution: By the intermediate value theorem: **yes**.
:::

::: problem id=p7 type=numeric answer="4"
$f(x) = \frac{x^2 - 4}{x - 2}$ for $x \ne 2$, and $f(2) = c$. Which c makes f continuous?
solution: The limit at 2 is $2 + 2 = 4$, so $c = 4$.
:::

::: problem id=p8 type=point answer="3,6"
Here is $y = \frac{x^2 - 9}{x - 3}$. Click the point that is missing.
graph:
x -1..6
y -1..9
plot (x^2-9)/(x-3) blue
solution: It's $y = x + 3$ with a hole at $(3, 6)$.
:::
