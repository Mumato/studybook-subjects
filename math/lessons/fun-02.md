---
id: fun-02
title: Domain and range
---
::: rule
- The **domain** is every input allowed. Watch for: dividing by 0, and square roots of negative numbers.
- The **range** is every output the function actually makes.
:::

::: example
$f(x) = \sqrt{x - 2}$ needs $x - 2 \ge 0$, so the domain is $x \ge 2$. Its outputs are never negative: range $y \ge 0$.
:::

::: graph
x -1..8
y -1..4
plot sqrt(x-2) blue
point 2,0
:::

::: problem id=p1 type=numeric answer="4"
Which x is not in the domain of $\frac{1}{x - 4}$?
solution: $x = 4$ would divide by 0.
:::

::: problem id=p2 type=choice
What is the domain of $\sqrt{x - 2}$?
- [x] $x \ge 2$
- [ ] $x \le 2$
- [ ] all real numbers
solution: Need $x - 2 \ge 0$: $x \ge 2$.
:::

::: problem id=p3 type=choice
What is the range of $f(x) = x^2$?
- [ ] all real numbers
- [x] $y \ge 0$
- [ ] $y > 0$
solution: Squares are never negative, and 0 is reached at $x = 0$.
:::

::: problem id=p4 type=numeric answer="3"
What is the smallest output of $f(x) = x^2 + 3$?
solution: $x^2$ is smallest (0) at $x = 0$: the smallest output is **3**.
:::

::: problem id=p5 type=choice
What is the domain of $f(x) = 2x + 1$?
- [x] all real numbers
- [ ] $x \ge 0$
- [ ] $x \ne 0$
solution: Any x works: **all real numbers**.
:::

::: problem id=p6 type=numeric answer="6"
The domain of $\sqrt{6 - x}$ is $x \le \square$. What goes in the box?
solution: $6 - x \ge 0$ means $x \le 6$.
:::

::: problem id=p7 type=numeric answer="5"
What is the largest output of $f(x) = -x^2 + 5$?
solution: $-x^2$ is at most 0, so the largest output is **5**.
:::

::: problem id=p8 type=point answer="0,0"
Here is $y = \sqrt{x}$. Click the point where the graph starts.
graph:
x -1..6
y -1..3
plot sqrt(x) blue
solution: It starts at $(0, 0)$: the domain is $x \ge 0$.
:::

::: problem id=x1 type=numeric answer="-6" set=extra
Which x is not in the domain of $\frac{3}{x + 6}$?
solution: $x + 6 = 0$ at $x = -6$.
:::

::: problem id=x2 type=choice set=extra
What is the domain of $\sqrt{x + 5}$?
- [x] $x \ge -5$
- [ ] $x \ge 5$
- [ ] $x \le -5$
- [ ] all real numbers
solution: $x + 5 \ge 0$, so $x \ge -5$.
:::

::: problem id=x3 type=numeric answer="10" set=extra
The domain of $\sqrt{10 - x}$ is $x \le \square$. What goes in the box?
solution: $10 - x \ge 0$ means $x \le 10$.
:::

::: problem id=x4 type=choice set=extra
What is the range of $f(x) = x^2 - 2$?
- [x] $y \ge -2$
- [ ] $y \ge 0$
- [ ] $y \ge 2$
- [ ] all real numbers
solution: $x^2 \ge 0$, so $x^2 - 2 \ge -2$, and $-2$ is reached at $x = 0$.
:::

::: problem id=x5 type=numeric answer="4" set=extra
What is the smallest output of $f(x) = (x - 1)^2 + 4$?
solution: The square is smallest (0) at $x = 1$: smallest output **4**.
:::

::: problem id=x6 type=multi answers="3;-3" set=extra
Which x are not in the domain of $\frac{1}{x^2 - 9}$?
solution: $x^2 - 9 = 0$ at $x = \pm 3$.
:::

::: problem id=x7 type=choice set=extra
What is the domain of $f(x) = x^3 - x$?
- [x] all real numbers
- [ ] $x \ge 0$
- [ ] $x \ne 0$
- [ ] $x \ge 1$
solution: A polynomial has no division and no roots: every x works.
:::

::: problem id=x8 type=choice set=extra
What is the range of $f(x) = -x^2$?
- [x] $y \le 0$
- [ ] $y \ge 0$
- [ ] $y < 0$
- [ ] all real numbers
solution: $x^2 \ge 0$, so $-x^2 \le 0$, with 0 reached at $x = 0$.
:::

::: problem id=x9 type=numeric answer="7" set=extra
What is the largest output of $f(x) = 7 - (x + 2)^2$?
solution: The square is at least 0, so the largest output is 7 (at $x = -2$).
:::

::: problem id=x10 type=choice set=extra
What is the range of $f(x) = \sqrt{x} + 3$?
- [x] $y \ge 3$
- [ ] $y \ge 0$
- [ ] $x \ge 0$
- [ ] all real numbers
solution: $\sqrt{x} \ge 0$, so $\sqrt{x} + 3 \ge 3$.
:::

::: problem id=x11 type=choice set=extra
What is the domain of $\sqrt{2x - 6}$?
- [x] $x \ge 3$
- [ ] $x \ge 6$
- [ ] $x \ge -3$
- [ ] $x \le 3$
solution: $2x - 6 \ge 0$, $x \ge 3$.
:::

::: problem id=x12 type=choice set=extra
Lin says the domain of $\frac{1}{x - 4}$ is $x \ne 0$. What is right?
- [x] $x \ne 4$
- [ ] $x \ne 0$
- [ ] $x \ne -4$
- [ ] $x > 4$
solution: Only the denominator matters: $x - 4 = 0$ at $x = 4$.
:::

::: problem id=x13 type=choice set=extra
What is the domain of $\frac{x + 1}{x^2 - 5x}$?
- [x] all x except 0 and 5
- [ ] all x except $-1$
- [ ] all x except 5
- [ ] all x except $-1$, 0 and 5
solution: $x^2 - 5x = x(x - 5) = 0$ at 0 and 5. The top doesn't matter.
:::

::: problem id=x14 type=choice set=extra
What is the range of the constant function $f(x) = 3$?
- [x] only the number 3
- [ ] all real numbers
- [ ] $y \ge 3$
- [ ] $x = 3$
solution: Every input gives 3, so 3 is the only output.
:::

::: problem id=x15 type=point answer="-2,0" set=extra
Here is $y = \sqrt{x + 2}$. Click the point where the graph starts.
graph:
x -3..5
y -1..3
plot sqrt(x+2) blue
solution: $x + 2 \ge 0$ means $x \ge -2$, and $\sqrt{0} = 0$: it starts at $(-2, 0)$.
:::

::: problem id=x16 type=numeric answer="10" set=extra
A rectangle has perimeter 20, so its sides are x and $10 - x$. Both sides must be positive, so the domain is $0 < x < \square$. What goes in the box?
solution: $10 - x > 0$ means $x < 10$.
:::

::: problem id=x17 type=choice set=extra
What is the domain of $\frac{\sqrt{x}}{x - 1}$?
- [x] $x \ge 0$ and $x \ne 1$
- [ ] $x \ne 1$
- [ ] $x \ge 0$
- [ ] $x > 1$
hint: Check the root and the denominator.
solution: The root needs $x \ge 0$; the denominator needs $x \ne 1$.
:::

::: problem id=x18 type=choice set=extra
What is the domain of $\frac{1}{\sqrt{4 - x}}$?
- [x] $x < 4$
- [ ] $x \le 4$
- [ ] $x > 4$
- [ ] $x \ne 4$
hint: The root must exist **and** not be 0.
solution: Need $4 - x > 0$ (0 would divide by zero), so $x < 4$.
:::

::: problem id=x19 type=numeric answer="2" set=extra
The range of $f(x) = x^2 + 6x + 11$ is $y \ge \square$. What goes in the box?
hint: Find the vertex.
solution: Vertex at $x = -3$: $9 - 18 + 11 = 2$. It opens up, so $y \ge 2$.
:::

::: problem id=x20 type=numeric answer="9" set=extra creative=true
How many integers are in the domain of $\sqrt{16 - x^2}$?
hint: Solve $16 - x^2 \ge 0$.
solution: $x^2 \le 16$ means $-4 \le x \le 4$. Integers $-4, \ldots, 4$: **9**.
:::
