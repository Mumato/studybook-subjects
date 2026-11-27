---
id: quad-02
title: The quadratic formula
---
::: rule
Every equation $ax^2 + bx + c = 0$ can be solved with

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

First write the equation with 0 on one side, then read off a, b and c (with their signs).
:::

::: example
$2x^2 - 5x + 2 = 0$: $a = 2$, $b = -5$, $c = 2$.

$b^2 - 4ac = 25 - 16 = 9$. So $x = \frac{5 \pm 3}{4}$: $x = 2$ or $x = \frac{1}{2}$.
:::

::: problem id=p1 type=multi answers="1;-4"
Solve $x^2 + 3x - 4 = 0$.
solution: $\frac{-3 \pm \sqrt{9 + 16}}{2} = \frac{-3 \pm 5}{2}$: 1 and $-4$.
:::

::: problem id=p2 type=multi answers="2;1/2"
Solve $2x^2 - 5x + 2 = 0$.
solution: $\frac{5 \pm 3}{4}$: 2 and $\frac{1}{2}$.
:::

::: problem id=p3 type=multi answers="1+sqrt(2);1-sqrt(2)"
Solve $x^2 - 2x - 1 = 0$.
hint: $b^2 - 4ac = 4 + 4 = 8$, and $\sqrt{8} = 2\sqrt{2}$.
solution: $\frac{2 \pm 2\sqrt{2}}{2} = 1 \pm \sqrt{2}$.
:::

::: problem id=p4 type=numeric answer="73"
For $3x^2 + 7x - 2 = 0$, what is $b^2 - 4ac$?
solution: $49 - 4(3)(-2) = 49 + 24 = 73$.
:::

::: problem id=p5 type=multi answers="-2+sqrt(3);-2-sqrt(3)"
Solve $x^2 + 4x + 1 = 0$.
solution: $\frac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt{3}$.
:::

::: problem id=p6 type=multi answers="1;-1/3"
Solve $3x^2 = 2x + 1$.
hint: First move everything to one side.
solution: $3x^2 - 2x - 1 = 0$: $\frac{2 \pm \sqrt{4 + 12}}{6} = \frac{2 \pm 4}{6}$: 1 and $-\frac{1}{3}$.
:::

::: problem id=p7 type=numeric answer="4"
A ball's height is $h = -5t^2 + 20t$ metres after t seconds. After how many seconds does it land ($h = 0$, $t > 0$)?
solution: $-5t(t - 4) = 0$: $t = 0$ (thrown) or $t = 4$ (lands).
:::

::: problem id=p8 type=choice
Which is the quadratic formula?
- [x] $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- [ ] $x = \frac{b \pm \sqrt{b^2 - 4ac}}{2a}$
- [ ] $x = -b \pm \frac{\sqrt{b^2 - 4ac}}{2a}$
solution: The whole top, $-b \pm \sqrt{b^2 - 4ac}$, is divided by $2a$.
:::

::: problem id=x1 type=multi answers="5;2" set=extra
Solve $x^2 - 7x + 10 = 0$.
solution: $\frac{7 \pm \sqrt{49 - 40}}{2} = \frac{7 \pm 3}{2}$: 5 and 2.
:::

::: problem id=x2 type=multi answers="3;-4" set=extra
Solve $x^2 + x - 12 = 0$.
solution: $\frac{-1 \pm \sqrt{1 + 48}}{2} = \frac{-1 \pm 7}{2}$: 3 and $-4$.
:::

::: problem id=x3 type=multi answers="1/2;-2" set=extra
Solve $2x^2 + 3x - 2 = 0$.
solution: $\frac{-3 \pm \sqrt{9 + 16}}{4} = \frac{-3 \pm 5}{4}$: $\frac{1}{2}$ and $-2$.
:::

::: problem id=x4 type=numeric answer="40" set=extra
For $2x^2 - 4x - 3 = 0$, what is $b^2 - 4ac$?
solution: $16 - 4(2)(-3) = 16 + 24 = 40$.
:::

::: problem id=x5 type=multi answers="2+sqrt(2);2-sqrt(2)" set=extra
Solve $x^2 - 4x + 2 = 0$.
solution: $\frac{4 \pm \sqrt{16 - 8}}{2} = \frac{4 \pm 2\sqrt{2}}{2} = 2 \pm \sqrt{2}$.
:::

::: problem id=x6 type=multi answers="-3+sqrt(2);-3-sqrt(2)" set=extra
Solve $x^2 + 6x + 7 = 0$.
solution: $\frac{-6 \pm \sqrt{36 - 28}}{2} = \frac{-6 \pm 2\sqrt{2}}{2} = -3 \pm \sqrt{2}$.
:::

::: problem id=x7 type=multi answers="2;-1/3" set=extra
Solve $3x^2 - 5x - 2 = 0$.
solution: $\frac{5 \pm \sqrt{25 + 24}}{6} = \frac{5 \pm 7}{6}$: 2 and $-\frac{1}{3}$.
:::

::: problem id=x8 type=numeric answer="-3" set=extra
In $5 - 3x^2 + x = 0$, what is a?
solution: In order: $-3x^2 + x + 5 = 0$, so $a = -3$.
:::

::: problem id=x9 type=numeric answer="3" set=extra
Solve $x^2 + 9 = 6x$.
solution: $x^2 - 6x + 9 = 0$: $\frac{6 \pm \sqrt{36 - 36}}{2} = 3$. Only one solution.
:::

::: problem id=x10 type=choice set=extra
For $x^2 - 3x - 4 = 0$, Mia writes $x = \frac{-3 \pm 5}{2}$ and gets 1 and $-4$. What went wrong?
- [x] $b = -3$, so $-b = 3$, not $-3$
- [ ] $\sqrt{b^2 - 4ac}$ should be 3
- [ ] She should divide by 4
- [ ] Nothing is wrong
solution: $-b = 3$: $x = \frac{3 \pm 5}{2}$, giving 4 and $-1$.
:::

::: problem id=x11 type=multi answers="(1+sqrt(2))/2;(1-sqrt(2))/2" set=extra
Solve $4x^2 - 4x - 1 = 0$.
hint: $\sqrt{32} = 4\sqrt{2}$.
solution: $\frac{4 \pm \sqrt{16 + 16}}{8} = \frac{4 \pm 4\sqrt{2}}{8} = \frac{1 \pm \sqrt{2}}{2}$.
:::

::: problem id=x12 type=multi answers="3;-5" set=extra
Solve $x(x + 2) = 15$.
solution: $x^2 + 2x - 15 = 0$: $\frac{-2 \pm \sqrt{4 + 60}}{2} = \frac{-2 \pm 8}{2}$: 3 and $-5$.
:::

::: problem id=x13 type=numeric answer="5" set=extra
A rectangle is 3 m longer than it is wide and has area 40 m². How wide is it?
solution: $w(w + 3) = 40$, $w^2 + 3w - 40 = 0$: $\frac{-3 \pm 13}{2}$, so $w = 5$ (not $-8$).
:::

::: problem id=x14 type=numeric answer="3" set=extra
A ball's height is $h = -5t^2 + 10t + 15$ metres. After how many seconds does it land?
solution: $-5t^2 + 10t + 15 = 0$, so $t^2 - 2t - 3 = 0$: $t = 3$ or $t = -1$. Time is positive: **3**.
:::

::: problem id=x15 type=choice set=extra
For $2x^2 = 7 - 3x$, what are a, b and c?
- [x] $a = 2$, $b = 3$, $c = -7$
- [ ] $a = 2$, $b = -3$, $c = 7$
- [ ] $a = 2$, $b = 7$, $c = -3$
- [ ] $a = -3$, $b = 2$, $c = 7$
solution: Move everything left: $2x^2 + 3x - 7 = 0$.
:::

::: problem id=x16 type=multi answers="5;-1" set=extra
Solve $(x - 1)^2 = 2x + 6$.
solution: $x^2 - 2x + 1 = 2x + 6$, so $x^2 - 4x - 5 = 0$: $\frac{4 \pm 6}{2}$: 5 and $-1$.
:::

::: problem id=x17 type=multi answers="2;-4" set=extra
Solve $0.5x^2 + x - 4 = 0$.
hint: Multiply by 2 to clear the decimal.
solution: $x^2 + 2x - 8 = 0$: $\frac{-2 \pm 6}{2}$: 2 and $-4$.
:::

::: problem id=x18 type=numeric answer="8" set=extra
What is the sum of the two solutions of $x^2 - 8x + 3 = 0$?
hint: Add $\frac{8 + \sqrt{D}}{2}$ and $\frac{8 - \sqrt{D}}{2}$.
solution: The $\pm\sqrt{D}$ parts cancel: $\frac{8}{2} + \frac{8}{2} = 8$.
:::

::: problem id=x19 type=numeric answer="2" set=extra
A 10 m by 6 m garden has a path of width x m all round it. Garden and path cover 140 m². What is x?
hint: The outside measures $(10 + 2x)$ by $(6 + 2x)$.
solution: $4x^2 + 32x + 60 = 140$, $x^2 + 8x - 20 = 0$: $\frac{-8 \pm 12}{2}$, so $x = 2$.
:::

::: problem id=x20 type=numeric answer="11" set=extra creative=true
Two consecutive positive odd numbers multiply to 143. What is the smaller one?
hint: Call them n and $n + 2$.
solution: $n^2 + 2n - 143 = 0$: $D = 4 + 572 = 576 = 24^2$. $n = \frac{-2 + 24}{2} = 11$ (and $11 \times 13 = 143$).
:::
