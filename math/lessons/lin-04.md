---
id: lin-04
title: Compound inequalities and absolute value
---
::: rule
- **And**: both must be true. $-2 \le x < 3$ means x is between $-2$ and 3.
- **Or**: at least one is true. $x < -1$ or $x > 4$ is two separate pieces.

To solve a "between" inequality, do the same thing to all **three** parts.

Absolute value is distance from 0:
- $|x| < a$ means $-a < x < a$ (between)
- $|x| > a$ means $x < -a$ or $x > a$ (outside)
:::

::: example
$-3 \le 2x + 1 < 7$

Subtract 1 from all three parts: $-4 \le 2x < 6$. Divide by 2: $-2 \le x < 3$.
:::

::: graph
numberline -4..5
segment -2,0 3,0 blue
point -2 blue
point 3 blue open
:::

::: example
$|x - 1| \ge 2$: x is at least 2 away from 1, so $x \le -1$ or $x \ge 3$.
:::

::: problem id=p1 type=choice
Solve $-3 \le 2x + 1 < 7$.
- [x] $-2 \le x < 3$
- [ ] $-1 \le x < 4$
- [ ] $x < 3$
solution: Subtract 1 from all parts: $-4 \le 2x < 6$. Divide by 2: $-2 \le x < 3$.
:::

::: problem id=p2 type=numeric answer="5"
How many integers satisfy $-2 \le x < 3$?
solution: $-2, -1, 0, 1, 2$: **5** integers.
:::

::: problem id=p3 type=choice
Solve $|x| < 4$.
- [x] $-4 < x < 4$
- [ ] $x < -4$ or $x > 4$
- [ ] $x < 4$
solution: Less than 4 away from 0: $-4 < x < 4$.
:::

::: problem id=p4 type=choice
Solve $|x - 1| \ge 2$.
- [ ] $-1 \le x \le 3$
- [x] $x \le -1$ or $x \ge 3$
- [ ] $x \ge 3$
hint: Which numbers are at least 2 away from 1?
solution: 2 away from 1 is $-1$ and 3. At least that far: $x \le -1$ or $x \ge 3$.
:::

::: problem id=p5 type=numeric answer="3"
What is the largest integer with $1 < x + 3 \le 6$?
solution: Subtract 3: $-2 < x \le 3$. The largest integer is **3**.
:::

::: problem id=p6 type=text answers="no"
In $-2 < x < 5$, is 5 included? Type yes or no.
solution: $<$ never includes the end, so **no**.
:::

::: problem id=p7 type=point answer="-1"
For $-1 \le x < 4$, click the endpoint that **is** included.
graph:
numberline -3..6
segment -1,0 4,0 blue
hint: $\le$ includes its number.
solution: $\le$ includes $-1$, $<$ doesn't include 4. The included endpoint is **−1**.
:::

::: problem id=p8 type=multi answers="5;-5"
Solve $|2x| = 10$. Type both solutions, like 1, -1.
solution: $2x = 10$ or $2x = -10$, so $x = 5$ or $x = -5$.
:::

::: problem id=x1 type=choice set=extra
Solve $1 < x + 4 < 9$.
- [x] $-3 < x < 5$
- [ ] $5 < x < 13$
- [ ] $-3 < x < 9$
solution: Subtract 4 from all three parts: $-3 < x < 5$.
:::

::: problem id=x2 type=numeric answer="7" set=extra
How many integers satisfy $-6 \le 3x \le 12$?
solution: Divide all parts by 3: $-2 \le x \le 4$. That is $-2, -1, 0, 1, 2, 3, 4$: **7** integers.
:::

::: problem id=x3 type=choice set=extra
Solve $|x| > 3$.
- [ ] $-3 < x < 3$
- [x] $x < -3$ or $x > 3$
- [ ] $x > 3$
solution: More than 3 away from 0: $x < -3$ or $x > 3$.
:::

::: problem id=x4 type=multi answers="7;-3" set=extra
Solve $|x - 2| = 5$. Type both solutions.
solution: $x - 2 = 5$ or $x - 2 = -5$, so $x = 7$ or $x = -3$.
:::

::: problem id=x5 type=choice set=extra
Solve $|x + 1| < 4$.
- [x] $-5 < x < 3$
- [ ] $-3 < x < 5$
- [ ] $x < -5$ or $x > 3$
solution: $-4 < x + 1 < 4$. Subtract 1: $-5 < x < 3$.
:::

::: problem id=x6 type=numeric answer="0" set=extra
How many solutions does $|x + 4| = -1$ have?
solution: An absolute value is a distance, never negative. So **0** solutions.
:::

::: problem id=x7 type=numeric answer="-1" set=extra
What is the smallest integer with $-5 < 2x - 1 \le 7$?
solution: Add 1: $-4 < 2x \le 8$. Divide by 2: $-2 < x \le 4$. Smallest integer: **−1**.
:::

::: problem id=x8 type=text answers="yes" set=extra
Is $-3$ a solution of "$x < -2$ or $x > 5$"? Type yes or no.
solution: $-3 < -2$ is true. For "or", one true part is enough: **yes**.
:::

::: problem id=x9 type=text answers="no" set=extra
Is 0 a solution of $|x - 4| \le 3$? Type yes or no.
solution: $|0 - 4| = 4$, and $4 \le 3$ is false: **no**.
:::

::: problem id=x10 type=choice set=extra
Which says "x is between $-1$ and 6, including $-1$ but not 6"?
- [x] $-1 \le x < 6$
- [ ] $-1 < x \le 6$
- [ ] $x \le -1$ or $x > 6$
solution: $\le$ includes $-1$, $<$ leaves out 6: $-1 \le x < 6$.
:::

::: problem id=x11 type=choice set=extra
Solve $|x - 5| \le 2$.
- [x] $3 \le x \le 7$
- [ ] $x \le 3$ or $x \ge 7$
- [ ] $-7 \le x \le -3$
solution: At most 2 away from 5: from $5 - 2 = 3$ to $5 + 2 = 7$.
:::

::: problem id=x12 type=point answer="-2" set=extra
For "$x \le -2$ or $x > 3$", click the endpoint that **is** included.
graph:
numberline -5..6
solution: $\le$ includes $-2$; $>$ leaves out 3. The included endpoint is **−2**.
:::

::: problem id=x13 type=choice set=extra
Raj solves $-3 < -x < 2$ and writes $-3 < x < 2$. What is the correct answer?
- [x] $-2 < x < 3$
- [ ] $-3 < x < 2$
- [ ] $2 < x < -3$
solution: Multiply all parts by $-1$ and flip both signs: $3 > x > -2$, which is $-2 < x < 3$.
:::

::: problem id=x14 type=numeric answer="18" set=extra
A heater keeps a room within 2 degrees of 20 degrees: $|t - 20| \le 2$. What is the lowest allowed temperature?
solution: $-2 \le t - 20 \le 2$, so $18 \le t \le 22$. Lowest: **18** degrees.
:::

::: problem id=x15 type=multi answers="5;-4" set=extra
Solve $|2x - 1| = 9$.
solution: $2x - 1 = 9$ gives $x = 5$. $2x - 1 = -9$ gives $x = -4$.
:::

::: problem id=x16 type=choice set=extra
Solve $|2x + 3| \ge 7$.
- [x] $x \le -5$ or $x \ge 2$
- [ ] $-5 \le x \le 2$
- [ ] $x \ge 2$
hint: "Greater than" means outside: two separate pieces.
solution: $2x + 3 \ge 7$ gives $x \ge 2$. $2x + 3 \le -7$ gives $x \le -5$.
:::

::: problem id=x17 type=numeric answer="7" set=extra
How many integers satisfy $|x - 3| < 4$?
hint: Rewrite it as a "between" inequality.
solution: $-4 < x - 3 < 4$, so $-1 < x < 7$. That is 0 to 6: **7** integers.
:::

::: problem id=x18 type=multi answers="5;-3" set=extra
Solve $2|x - 1| + 3 = 11$.
hint: Get the absolute value alone first.
solution: $2|x - 1| = 8$, so $|x - 1| = 4$. Then $x - 1 = 4$ or $x - 1 = -4$: $x = 5$ or $x = -3$.
:::

::: problem id=x19 type=numeric answer="0.4" set=extra
A bolt must be between 9.6 mm and 10.4 mm long. Written as $|L - c| \le t$, what is t?
hint: c is the middle of the range; t is the distance from the middle to either end.
solution: Middle $c = \frac{9.6 + 10.4}{2} = 10$. Then $t = 10.4 - 10 = 0.4$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
Solve $|x - 1| = |x - 5|$.
hint: Think of distances on the number line.
solution: x is the same distance from 1 as from 5, so it's halfway between them: $x = 3$.
:::
