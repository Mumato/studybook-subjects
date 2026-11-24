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
