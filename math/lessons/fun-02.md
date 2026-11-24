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
