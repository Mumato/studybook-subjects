---
id: quad-05
title: Quadratic and polynomial inequalities
---
A polynomial can only change sign where it equals 0. So its zeros cut the number line into pieces, and on each piece the sign stays the same.

::: rule
To solve $ax^2 + bx + c > 0$ (or $<$, $\ge$, $\le$):
1. Get 0 on one side and factor.
2. Find the zeros (the **critical points**).
3. **Sign chart:** test one number in each piece.
4. Keep the pieces with the sign you want. For $\ge$ or $\le$ the zeros are included too.

**Interval notation:** $(a, b)$ means $a < x < b$; $[a, b]$ means $a \le x \le b$. Round brackets leave the end out, square brackets keep it. $\infty$ always gets a round bracket. $\cup$ joins two pieces.
:::

::: example
$x^2 - x - 6 < 0$. Factor: $(x - 3)(x + 2) < 0$. Zeros: $-2$ and 3.

Test $x = -3$: $(-6)(-1) = 6$, positive.
Test $x = 0$: $(-3)(2) = -6$, negative.
Test $x = 4$: $(1)(6) = 6$, positive.

We want negative: $-2 < x < 3$, or $(-2, 3)$.
:::

::: example
$x(x - 2)(x + 3) \ge 0$. Zeros: $-3$, 0, 2.

Signs left to right: $-$, $+$, $-$, $+$.

Keep the $+$ pieces and the zeros:
$[-3, 0] \cup [2, \infty)$.
:::

::: graph
x -4..5
y -7..6
plot x^2-x-6 blue
point -2,0 open
point 3,0 open
:::

The parabola is below the x-axis exactly between $-2$ and 3.

::: problem id=p1 type=choice
Solve $x^2 - 4 < 0$.
- [x] $-2 < x < 2$
- [ ] $x < -2$ or $x > 2$
- [ ] $x < 2$
- [ ] $x < 4$
hint: Zeros at $\pm 2$. Test $x = 0$.
solution: $(x - 2)(x + 2) < 0$. At $x = 0$: $-4 < 0$, so the middle piece: $-2 < x < 2$.
:::

::: problem id=p2 type=multi answers="1;-4"
What are the critical points of $(x - 1)(x + 4) > 0$? Type both.
solution: Each factor is 0 once: $x = 1$ and $x = -4$.
:::

::: problem id=p3 type=choice
Solve $x^2 - x - 6 > 0$.
- [x] $(-\infty, -2) \cup (3, \infty)$
- [ ] $(-2, 3)$
- [ ] $[-2, 3]$
- [ ] $(-\infty, -3) \cup (2, \infty)$
solution: $(x - 3)(x + 2)$ is positive outside the zeros $-2$ and 3, and $>$ leaves them out.
:::

::: problem id=p4 type=numeric answer="7"
How many integers satisfy $x^2 - 2x - 8 \le 0$?
hint: Factor and find where the product is negative or 0.
solution: $(x - 4)(x + 2) \le 0$ for $-2 \le x \le 4$. Integers $-2, \ldots, 4$: **7**.
:::

::: problem id=p5 type=choice
Which is $-1 \le x < 5$ in interval notation?
- [x] $[-1, 5)$
- [ ] $(-1, 5]$
- [ ] $(-1, 5)$
- [ ] $[-1, 5]$
solution: $-1$ is included (square bracket), 5 is not (round bracket).
:::

::: problem id=p6 type=choice
Solve $x(x - 2)(x + 3) \ge 0$.
- [x] $[-3, 0] \cup [2, \infty)$
- [ ] $(-\infty, -3] \cup [0, 2]$
- [ ] $[-3, 2]$
- [ ] $[2, \infty)$
hint: Test $x = -4$, $-1$, 1 and 3.
solution: Signs: $-$, $+$, $-$, $+$. Keep the $+$ pieces with their ends: $[-3, 0] \cup [2, \infty)$.
:::

::: problem id=p7 type=choice
Solve $x^2 + 1 > 0$.
- [x] all real numbers
- [ ] no solution
- [ ] $x > -1$
- [ ] $x > 1$
solution: $x^2 \ge 0$, so $x^2 + 1 \ge 1 > 0$ for every x.
:::

::: problem id=p8 type=numeric answer="2"
A ball's height is $h = -5t^2 + 20t$ metres after t seconds. For how many seconds is it higher than 15 m?
hint: Solve $-5t^2 + 20t > 15$. Divide by $-5$ and flip the sign.
solution: $t^2 - 4t + 3 < 0$, $(t - 1)(t - 3) < 0$: $1 < t < 3$. That's **2** seconds.
:::

::: problem id=x1 type=choice set=extra
Solve $x^2 - 9 \ge 0$.
- [x] $x \le -3$ or $x \ge 3$
- [ ] $-3 \le x \le 3$
- [ ] $x \ge 3$
- [ ] $x \ge 9$
solution: $(x - 3)(x + 3) \ge 0$ outside the zeros, ends included.
:::

::: problem id=x2 type=choice set=extra
Solve $(x - 1)(x - 5) < 0$.
- [x] $(1, 5)$
- [ ] $(-\infty, 1) \cup (5, \infty)$
- [ ] $[1, 5]$
- [ ] $(-5, -1)$
solution: At $x = 3$: $(2)(-2) = -4 < 0$. The middle piece, ends left out: $(1, 5)$.
:::

::: problem id=x3 type=choice set=extra
Solve $x^2 + 2x - 15 \le 0$.
- [x] $[-5, 3]$
- [ ] $[-3, 5]$
- [ ] $(-5, 3)$
- [ ] $(-\infty, -5] \cup [3, \infty)$
solution: $(x + 5)(x - 3) \le 0$ between the zeros, ends included: $[-5, 3]$.
:::

::: problem id=x4 type=numeric answer="4" set=extra
What is the largest integer with $x^2 < 20$?
solution: $4^2 = 16 < 20$ but $5^2 = 25 > 20$. So **4**.
:::

::: problem id=x5 type=multi answers="3/2;-1" set=extra
What are the critical points of $2x^2 - x - 3 > 0$?
solution: $2x^2 - x - 3 = (2x - 3)(x + 1)$: zeros $\frac{3}{2}$ and $-1$.
:::

::: problem id=x6 type=choice set=extra
Solve $2x^2 - x - 3 > 0$.
- [x] $(-\infty, -1) \cup (\frac{3}{2}, \infty)$
- [ ] $(-1, \frac{3}{2})$
- [ ] $(-\infty, -\frac{3}{2}) \cup (1, \infty)$
- [ ] $(-\frac{3}{2}, 1)$
solution: Zeros $-1$ and $\frac{3}{2}$; $a = 2 > 0$, so it is positive outside them.
:::

::: problem id=x7 type=choice set=extra
Which inequality is $(-\infty, 4]$?
- [x] $x \le 4$
- [ ] $x < 4$
- [ ] $x \ge 4$
- [ ] $x > 4$
solution: Everything up to 4, and the square bracket includes 4: $x \le 4$.
:::

::: problem id=x8 type=text answers="no" set=extra
Is $\infty$ ever written with a square bracket? Type yes or no.
solution: **No**: $\infty$ is not a number you can reach, so it always gets a round bracket.
:::

::: problem id=x9 type=point answer="3,0" set=extra
Here is $y = x^2 - 2x - 3$. It is negative for $a < x < b$. Click the point $(b, 0)$.
graph:
x -3..5
y -5..5
plot x^2-2x-3 blue
solution: The graph is below the x-axis between its x-intercepts $-1$ and 3. So $b = 3$: the point $(3, 0)$.
:::

::: problem id=x10 type=numeric answer="6" set=extra
How many integers satisfy $x^2 - 3x - 10 < 0$?
solution: $(x - 5)(x + 2) < 0$: $-2 < x < 5$. Integers $-1, 0, 1, 2, 3, 4$: **6**.
:::

::: problem id=x11 type=choice set=extra
Sam writes: "$x^2 > 4$, so $x > 2$." What is wrong?
- [x] It misses $x < -2$
- [ ] It should be $x < 2$
- [ ] It should be $x > 4$
- [ ] Nothing is wrong
solution: $(-3)^2 = 9 > 4$ too. The answer is $x < -2$ or $x > 2$.
:::

::: problem id=x12 type=choice set=extra
Solve $x^2 \le 0$.
- [x] only $x = 0$
- [ ] all real numbers
- [ ] no solution
- [ ] $x \le 0$
solution: A square is never negative, and it is 0 only at $x = 0$.
:::

::: problem id=x13 type=choice set=extra
Solve $x^2 - 6x + 9 > 0$.
- [x] every x except 3
- [ ] $x > 3$
- [ ] no solution
- [ ] all real numbers
solution: $(x - 3)^2 > 0$ unless $x - 3 = 0$. So every $x \ne 3$.
:::

::: problem id=x14 type=choice set=extra
Solve $-x^2 + 4x \ge 0$.
- [x] $[0, 4]$
- [ ] $(-\infty, 0] \cup [4, \infty)$
- [ ] $[-4, 0]$
- [ ] $(0, 4)$
hint: Multiply by $-1$ and flip the sign first.
solution: $x^2 - 4x \le 0$, $x(x - 4) \le 0$: $0 \le x \le 4$.
:::

::: problem id=x15 type=choice set=extra
Solve $(x + 2)(x - 1)(x - 4) < 0$.
- [x] $(-\infty, -2) \cup (1, 4)$
- [ ] $(-2, 1) \cup (4, \infty)$
- [ ] $(-\infty, -2) \cup (4, \infty)$
- [ ] $(1, 4)$
solution: Test $-3$: $(-)(-)(-) < 0$. Test 0: $(+)(-)(-) > 0$. Test 2: $(+)(+)(-) < 0$. Test 5: $> 0$.
:::

::: problem id=x16 type=numeric answer="3" set=extra
A rectangle has perimeter 20 m, so its sides are x and $10 - x$. Its area must be at least 21 m². What is the smallest x allowed?
hint: Solve $x(10 - x) \ge 21$.
solution: $x^2 - 10x + 21 \le 0$, $(x - 3)(x - 7) \le 0$: $3 \le x \le 7$. Smallest: **3**.
:::

::: problem id=x17 type=choice set=extra
Solve $x^3 - 4x > 0$.
- [x] $(-2, 0) \cup (2, \infty)$
- [ ] $(-\infty, -2) \cup (0, 2)$
- [ ] $(2, \infty)$
- [ ] $(-2, 2)$
hint: Factor out x, then a difference of squares.
solution: $x(x - 2)(x + 2)$. Signs from the left: $-$, $+$, $-$, $+$. Keep $+$: $(-2, 0) \cup (2, \infty)$.
:::

::: problem id=x18 type=numeric answer="10" set=extra
Profit is $P = -x^2 + 12x - 20$ (thousands, x in hundreds of items). Profit is positive for $a < x < b$. What is b?
hint: Multiply by $-1$ and flip the sign.
solution: $x^2 - 12x + 20 < 0$, $(x - 2)(x - 10) < 0$: $2 < x < 10$. $b = 10$.
:::

::: problem id=x19 type=choice set=extra
Solve $(x - 3)^2(x + 1) \ge 0$.
- [x] $[-1, \infty)$
- [ ] $[-1, 3]$
- [ ] $[3, \infty)$
- [ ] $(-\infty, -1]$
hint: $(x - 3)^2$ is never negative, so the sign does not change at 3.
solution: The sign is the sign of $x + 1$ (times a square), so $x \ge -1$. At $x = 3$ it is 0, which is allowed.
:::

::: problem id=x20 type=numeric answer="7" set=extra creative=true
For how many integers k is $x^2 + kx + 4 > 0$ true for **every** x?
hint: The parabola opens up. It must never touch the x-axis.
solution: Need no real zeros: $D = k^2 - 16 < 0$, so $-4 < k < 4$. Integers $-3, \ldots, 3$: **7**.
:::
