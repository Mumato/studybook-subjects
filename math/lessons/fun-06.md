---
id: fun-06
title: Piecewise and absolute value functions
---
A **piecewise function** uses different formulas on different parts of its domain, like a phone plan that charges one way up to a limit and another way after it.

::: rule
- **Evaluate:** find the piece whose condition x meets, and use only that formula.
- **Graph:** draw each piece only over its own interval. At an end use a closed dot if it is included ($\le$, $\ge$) and an open dot if not ($<$, $>$).
- **Absolute value** is piecewise: $|x| = x$ if $x \ge 0$, and $|x| = -x$ if $x < 0$. Its graph is a V with its corner at $(0, 0)$.
- $y = a|x - h| + k$ is a V with corner $(h, k)$ and slopes $a$ and $-a$. It opens up if $a > 0$, down if $a < 0$.
:::

::: example
$f(x) = 2x + 1$ if $x < 1$,
$f(x) = 5 - x$ if $x \ge 1$.

$f(-2)$: $-2 < 1$, first piece: $-4 + 1 = -3$.
$f(1)$: $1 \ge 1$, second piece: $5 - 1 = 4$.
$f(4)$: second piece: $5 - 4 = 1$.
:::

::: graph
x -3..5
y -5..5
segment -3,-5 1,3 blue
point 1,3 blue open
segment 1,4 5,0 red
point 1,4 red
:::

At $x = 1$ the blue piece stops (open dot) and the red piece starts (closed dot), so $f(1) = 4$.

::: example
$y = 2|x - 1| - 3$: corner $(1, -3)$, slopes 2 and $-2$, opens up.

x-intercepts: $2|x - 1| = 3$, so $x - 1 = \pm\frac{3}{2}$: $x = \frac{5}{2}$ or $x = -\frac{1}{2}$.
:::

::: problem id=p1 type=numeric answer="-3"
$f(x) = 2x + 1$ if $x < 1$, and $f(x) = 5 - x$ if $x \ge 1$. What is $f(-2)$?
solution: $-2 < 1$, so the first piece: $2(-2) + 1 = -3$.
:::

::: problem id=p2 type=numeric answer="4"
$f(x) = 2x + 1$ if $x < 1$, and $f(x) = 5 - x$ if $x \ge 1$. What is $f(1)$?
hint: Which condition does $x = 1$ meet?
solution: $1 \ge 1$: second piece, $5 - 1 = 4$.
:::

::: problem id=p3 type=numeric answer="9"
$g(x) = x^2$ if $x \le 0$, and $g(x) = 3x$ if $x > 0$. What is $g(-3)$?
solution: $-3 \le 0$: $(-3)^2 = 9$.
:::

::: problem id=p4 type=choice
For $x < 0$, what is $|x|$ equal to?
- [x] $-x$
- [ ] $x$
- [ ] $0$
- [ ] $\frac{1}{x}$
solution: For negative x, $-x$ is positive: $|-5| = -(-5) = 5$.
:::

::: problem id=p5 type=point answer="1,-3"
Click the corner of $y = 2|x - 1| - 3$.
graph:
x -3..5
y -4..5
plot 2abs(x-1)-3 blue
solution: $h = 1$, $k = -3$: corner $(1, -3)$.
:::

::: problem id=p6 type=multi answers="5;-1"
Where does $y = |x - 2| - 3$ cross the x-axis? Type both x-values.
solution: $|x - 2| = 3$: $x - 2 = 3$ or $x - 2 = -3$. So $x = 5$ or $x = -1$.
:::

::: problem id=p7 type=numeric answer="32"
A phone plan costs \$20 for up to 5 GB. Above 5 GB it costs $20 + 4(g - 5)$ dollars for g GB. What does 8 GB cost, in dollars?
solution: $8 > 5$: $20 + 4(3) = 32$.
:::

::: problem id=p8 type=numeric answer="2"
$f(x) = x + 3$ if $x < 0$, $f(x) = x^2$ if $0 \le x \le 2$, and $f(x) = 6 - x$ if $x > 2$. What is $f(0) + f(4)$?
solution: $f(0)$: middle piece, $0^2 = 0$. $f(4)$: last piece, $6 - 4 = 2$. Sum: 2.
:::

::: problem id=x1 type=numeric answer="-3" set=extra
$f(x) = 3x$ if $x < 2$, and $f(x) = x + 4$ if $x \ge 2$. What is $f(-1)$?
solution: $-1 < 2$: $3(-1) = -3$.
:::

::: problem id=x2 type=numeric answer="6" set=extra
$f(x) = 3x$ if $x < 2$, and $f(x) = x + 4$ if $x \ge 2$. What is $f(2)$?
solution: $2 \ge 2$: second piece, $2 + 4 = 6$.
:::

::: problem id=x3 type=numeric answer="9" set=extra
$f(x) = 3x$ if $x < 2$, and $f(x) = x + 4$ if $x \ge 2$. What is $f(5)$?
solution: Second piece: $5 + 4 = 9$.
:::

::: problem id=x4 type=numeric answer="4" set=extra
$h(x) = -x$ if $x < 0$, and $h(x) = x^2$ if $x \ge 0$. What is $h(-4)$?
solution: First piece: $-(-4) = 4$.
:::

::: problem id=x5 type=numeric answer="10" set=extra
$|-7| + |3| = ?$
solution: $7 + 3 = 10$.
:::

::: problem id=x6 type=point answer="-3,1" set=extra
Click the corner of $y = |x + 3| + 1$.
graph:
x -6..2
y -1..5
plot abs(x+3)+1 blue
solution: $h = -3$, $k = 1$: $(-3, 1)$.
:::

::: problem id=x7 type=point answer="2,4" set=extra
Click the corner of $y = -|x - 2| + 4$.
graph:
x -2..6
y -2..5
plot -abs(x-2)+4 blue
solution: Corner $(2, 4)$; it opens down, so this is the highest point.
:::

::: problem id=x8 type=multi answers="3;-3" set=extra
Where does $y = 2|x| - 6$ cross the x-axis? Type both x-values.
solution: $2|x| = 6$, $|x| = 3$: $x = \pm 3$.
:::

::: problem id=x9 type=choice set=extra
$f(x) = x - 1$ if $x < 3$, and $f(x) = 2x$ if $x \ge 3$. Which dots go at $x = 3$?
- [x] open at $(3, 2)$, closed at $(3, 6)$
- [ ] closed at $(3, 2)$, open at $(3, 6)$
- [ ] closed at both
- [ ] open at both
solution: The first piece stops before 3 (open at $3 - 1 = 2$). The second includes 3 (closed at $2 \cdot 3 = 6$).
:::

::: problem id=x10 type=point answer="3,6" set=extra
Here is $f(x) = x - 1$ for $x < 3$ and $f(x) = 2x$ for $x \ge 3$. Click the point $(3, f(3))$.
graph:
x -1..5
y -2..10
segment -1,-2 3,2 blue
point 3,2 blue open
segment 3,6 5,10 blue
point 3,6 blue
solution: $3 \ge 3$, so $f(3) = 6$: the closed dot $(3, 6)$.
:::

::: problem id=x11 type=numeric answer="11" set=extra
Parking costs \$3 for up to 1 hour, then $3 + 2(h - 1)$ dollars for h hours. What do 5 hours cost, in dollars?
solution: $5 > 1$: $3 + 2(4) = 11$.
:::

::: problem id=x12 type=choice set=extra
$f(x) = x^2$ if $x < 0$, and $f(x) = x + 1$ if $x \ge 0$. Sam says $f(0) = 0$. What is right?
- [x] $f(0) = 1$
- [ ] $f(0) = 0$
- [ ] $f(0)$ is not defined
- [ ] $f(0) = -1$
solution: $0 \ge 0$, so use $x + 1$: $f(0) = 1$.
:::

::: problem id=x13 type=numeric answer="2" set=extra
What is the smallest value of $y = |x - 4| + 2$?
solution: $|x - 4| \ge 0$, so the smallest value is 2 (at the corner $x = 4$).
:::

::: problem id=x14 type=choice set=extra
What is the range of $y = -|x| + 5$?
- [x] $y \le 5$
- [ ] $y \ge 5$
- [ ] $y \le 0$
- [ ] all real numbers
solution: $-|x| \le 0$, so $y \le 5$. It opens down from the corner $(0, 5)$.
:::

::: problem id=x15 type=expression answer="abs(x-1)+2" set=extra
Write the V with corner $(1, 2)$ and slopes 1 and $-1$, opening up, as $y = \ldots$ (type $|x|$ as abs(x)).
solution: $a = 1$, $h = 1$, $k = 2$: $y = |x - 1| + 2$.
:::

::: problem id=x16 type=multi answers="4;-3" set=extra
Where does $y = |2x - 1|$ meet the line $y = 7$? Type both x-values.
solution: $2x - 1 = 7$ gives $x = 4$; $2x - 1 = -7$ gives $x = -3$.
:::

::: problem id=x17 type=numeric answer="4000" set=extra
Tax is $0.1x$ on income $x \le 10000$, and $1000 + 0.2(x - 10000)$ above that. What is the tax on 25000?
hint: Which piece does 25000 use?
solution: $25000 > 10000$: $1000 + 0.2(15000) = 1000 + 3000 = 4000$.
:::

::: problem id=x18 type=numeric answer="16" set=extra
What is the area of the region between $y = |x|$ and the line $y = 4$?
hint: Sketch it: it is a triangle.
solution: Corners $(0, 0)$, $(-4, 4)$ and $(4, 4)$. Base 8, height 4: $\frac{1}{2} \cdot 8 \cdot 4 = 16$.
:::

::: problem id=x19 type=choice set=extra
Which piecewise formula equals $|x - 3|$?
- [x] $x - 3$ if $x \ge 3$; $3 - x$ if $x < 3$
- [ ] $x - 3$ if $x \ge 0$; $-x - 3$ if $x < 0$
- [ ] $x + 3$ if $x \ge 3$; $-x - 3$ if $x < 3$
- [ ] $x - 3$ for every x
hint: The inside $x - 3$ changes sign at $x = 3$.
solution: When $x - 3 \ge 0$ keep it; when it is negative, take $-(x - 3) = 3 - x$.
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
$f(x) = x + a$ if $x < 2$, and $f(x) = x^2$ if $x \ge 2$. For which a do the two pieces join without a jump?
hint: Both pieces must give the same value at $x = 2$.
solution: Left piece at 2: $2 + a$. Right piece: $2^2 = 4$. So $2 + a = 4$, $a = 2$.
:::
