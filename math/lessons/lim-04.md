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

::: problem id=x1 type=multi answers="3;-3" set=extra
Where is $\frac{x + 2}{x^2 - 9}$ not continuous? Type both x values.
solution: The bottom is 0 when $x^2 = 9$: $x = 3$ and $x = -3$.
:::

::: problem id=x2 type=numeric answer="5/2" set=extra
$f(x) = 3x - 1$ for $x < 2$ and $f(x) = kx$ for $x \ge 2$. Which k makes f continuous?
solution: Meet at 2: $3(2) - 1 = 2k$, so $5 = 2k$, $k = \frac{5}{2}$.
:::

::: problem id=x3 type=text answers="yes" set=extra
Is $\frac{1}{x^2 + 1}$ continuous everywhere? Type yes or no.
solution: $x^2 + 1 \ge 1$ is never 0: **yes**.
:::

::: problem id=x4 type=choice set=extra
What kind of break does $\frac{1}{x - 2}$ have at $x = 2$?
- [ ] a hole
- [ ] a jump
- [x] a vertical asymptote
solution: A non-zero top over a bottom near 0 blows up: a **vertical asymptote**.
:::

::: problem id=x5 type=choice set=extra
$f(x) = x$ for $x < 0$ and $f(x) = x + 1$ for $x \ge 0$. What kind of break is at $x = 0$?
- [ ] a hole
- [x] a jump
- [ ] a vertical asymptote
solution: From the left f nears 0, from the right 1: a **jump**.
:::

::: problem id=x6 type=numeric answer="5" set=extra
$f(x) = \frac{x^2 - x - 6}{x - 3}$ for $x \ne 3$, and $f(3) = c$. Which c makes f continuous?
solution: $\frac{(x - 3)(x + 2)}{x - 3} = x + 2 \to 5$, so $c = 5$.
:::

::: problem id=x7 type=choice set=extra
$f(x) = x^3 + x - 3$. In which interval does the intermediate value theorem guarantee a root?
- [ ] $[-1, 0]$
- [ ] $[0, 1]$
- [x] $[1, 2]$
- [ ] $[2, 3]$
solution: $f(1) = -1$ and $f(2) = 7$ have opposite signs. The other intervals have no sign change.
:::

::: problem id=x8 type=choice set=extra
$f(x) = \frac{x^2 - 1}{x - 1}$ is not continuous at 1. Which part of $\lim_{x \to 1} f(x) = f(1)$ fails?
- [ ] the limit doesn't exist
- [x] $f(1)$ is not defined
- [ ] the limit and $f(1)$ are different numbers
solution: The limit is 2, but $f(1)$ is $\frac{0}{0}$: undefined.
:::

::: problem id=x9 type=point answer="2,3" set=extra
Here is $y = \frac{x^2 - x - 2}{x - 2}$. Click the point that is missing.
graph:
x -2..5
y -1..6
plot (x^2-x-2)/(x-2) blue
hint: Factor the top: $(x - 2)(x + 1)$.
solution: It's $y = x + 1$ with a hole at $(2, 3)$.
:::

::: problem id=x10 type=choice set=extra
Where is $\ln x$ continuous?
- [ ] everywhere
- [x] for $x > 0$
- [ ] for $x \ge 0$
- [ ] for $x \ne 1$
solution: $\ln x$ is only defined for $x > 0$, and it is continuous on all of that.
:::

::: problem id=x11 type=numeric answer="1" set=extra
$f(x) = \frac{\sin x}{x}$ for $x \ne 0$. Which value at $x = 0$ makes f continuous?
hint: Remember the famous limit from the first lesson.
solution: $\lim_{x \to 0} \frac{\sin x}{x} = 1$, so set $f(0) = 1$.
:::

::: problem id=x12 type=numeric answer="-1" set=extra
$\frac{x^2 - 4}{x^2 - x - 2}$ has a hole at one x and a vertical asymptote at another. Where is the vertical asymptote?
hint: Factor: $\frac{(x - 2)(x + 2)}{(x - 2)(x + 1)}$.
solution: $x - 2$ cancels (hole at 2). $x + 1$ stays: asymptote at $x = -1$.
:::

::: problem id=x13 type=text answers="yes" set=extra
The temperature was 10 degrees at 6 am and 25 degrees at noon, and it changes continuously. Was it exactly 18 degrees at some moment in between? Type yes or no.
solution: 18 is between 10 and 25, so by the intermediate value theorem: **yes**.
:::

::: problem id=x14 type=choice set=extra
A student says: "$f(x) = \frac{1}{x}$ has $f(-1) = -1$ and $f(1) = 1$, so by the IVT $f(c) = 0$ for some c between." What's wrong?
- [ ] Nothing, such a c exists
- [x] f isn't continuous on $[-1, 1]$ (it breaks at 0), so the IVT doesn't apply
- [ ] The IVT only works for polynomials
- [ ] $f(1)$ is really $-1$
solution: The IVT needs continuity on the whole interval. $\frac{1}{x}$ is never 0.
:::

::: problem id=x15 type=numeric answer="1" set=extra
$\sin x$ is continuous. What is $\lim_{x \to \pi/2} \sin x$?
solution: Continuous means just substitute: $\sin\frac{\pi}{2} = 1$.
:::

::: problem id=x16 type=numeric answer="4/3" set=extra
$f(x) = kx^2$ for $x \le 2$ and $f(x) = 2x + k$ for $x > 2$. Which k makes f continuous?
hint: Put $x = 2$ into both pieces and set them equal.
solution: $4k = 4 + k$, so $3k = 4$, $k = \frac{4}{3}$.
:::

::: problem id=x17 type=numeric answer="1/4" set=extra
$f(x) = \frac{\sqrt{x} - 2}{x - 4}$ for $x \ne 4$, and $f(4) = c$. Which c makes f continuous?
hint: $x - 4 = (\sqrt{x} - 2)(\sqrt{x} + 2)$.
solution: $f(x) = \frac{1}{\sqrt{x} + 2} \to \frac{1}{4}$, so $c = \frac{1}{4}$.
:::

::: problem id=x18 type=multi answers="1;4" set=extra
Where is $\frac{x}{x^2 - 5x + 4}$ not continuous? Type both x values.
hint: Factor the bottom.
solution: $x^2 - 5x + 4 = (x - 1)(x - 4)$: $x = 1$ and $x = 4$.
:::

::: problem id=x19 type=numeric answer="3" set=extra
$f(x) = x^3 - 4x + 1$. Using $f(-3), f(-2), \ldots, f(2)$ and the IVT, at least how many real roots must f have?
hint: Work out the six values and count sign changes.
solution: Values: $-14, 1, 4, 1, -2, 1$.
Sign changes on $[-3, -2]$, $[0, 1]$, $[1, 2]$: at least **3** roots.
:::

::: problem id=x20 type=numeric answer="-2" set=extra creative=true
$f(x) = x + 1$ for $x < 1$, $f(x) = ax + b$ for $1 \le x < 2$, $f(x) = 3x$ for $x \ge 2$. f is continuous. What is b?
hint: Make the pieces meet at $x = 1$ and at $x = 2$.
solution: At 1: $a + b = 2$. At 2: $2a + b = 6$.
Subtract: $a = 4$, so $b = -2$.
:::
