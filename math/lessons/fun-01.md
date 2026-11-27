---
id: fun-01
title: What a function is
---
::: rule
A **function** gives **exactly one output** for each input. We write $f(x)$ for the output when the input is x: if $f(x) = 2x + 3$, then $f(4) = 11$.

**Vertical line test:** a graph is a function if no vertical line crosses it more than once.
:::

::: example
The parabola $y = x^2$ is a function: every vertical line crosses it once. A circle is not: a vertical line through the middle crosses it twice.
:::

::: graph
x -4..4
y -4..4
plot x^2-2 blue
circle 0,0 2
:::

::: problem id=p1 type=choice
Which set of pairs (input, output) is a function?
- [x] $(1, 2), (2, 3), (3, 2)$
- [ ] $(1, 2), (1, 3), (2, 4)$
solution: In the second, input 1 has two outputs. The first is fine (two inputs may share an output).
:::

::: problem id=p2 type=text answers="no"
Does a circle pass the vertical line test? Type yes or no.
solution: A vertical line through the middle hits it twice: **no**.
:::

::: problem id=p3 type=choice
Is $y = x^2$ a function?
- [x] yes
- [ ] no
solution: Each x gives exactly one $x^2$: **yes**.
:::

::: problem id=p4 type=numeric answer="11"
$f(x) = 2x + 3$. What is $f(4)$?
solution: $2(4) + 3 = 11$.
:::

::: problem id=p5 type=text answers="no"
Is $x = y^2$ a function of x? Type yes or no.
hint: What y values go with $x = 4$?
solution: $x = 4$ gives $y = 2$ and $y = -2$: two outputs, so **no**.
:::

::: problem id=p6 type=numeric answer="8"
$f(x) = x^2 - 1$. What is $f(3)$?
solution: $9 - 1 = 8$.
:::

::: problem id=p7 type=choice
Is a vertical line, like $x = 2$, the graph of a function?
- [ ] yes
- [x] no
solution: The input 2 has infinitely many outputs: **no**.
:::

::: problem id=p8 type=point answer="3,2"
Here is $f(x) = x - 1$. Click the point on it where $x = 3$.
graph:
x -2..5
y -3..4
plot x-1 blue
solution: $f(3) = 2$: the point $(3, 2)$.
:::

::: problem id=x1 type=numeric answer="7" set=extra
$f(x) = 3x - 5$. What is $f(4)$?
solution: $3(4) - 5 = 7$.
:::

::: problem id=x2 type=numeric answer="3" set=extra
$f(x) = x^2 + 2x$. What is $f(-3)$?
solution: $(-3)^2 + 2(-3) = 9 - 6 = 3$.
:::

::: problem id=x3 type=numeric answer="10" set=extra
$f(x) = 10 - x^2$. What is $f(0)$?
solution: $10 - 0 = 10$.
:::

::: problem id=x4 type=choice set=extra
Which set of pairs (input, output) is a function?
- [x] $(2, 5), (3, 5), (4, 5)$
- [ ] $(1, 1), (1, -1)$
- [ ] $(0, 2), (3, 4), (0, 5)$
- [ ] $(5, 1), (5, 2)$
solution: In the first set each input appears once. Sharing the output 5 is fine.
:::

::: problem id=x5 type=text answers="yes" set=extra
In a function, can two different inputs have the same output? Type yes or no.
solution: **Yes**: $f(x) = x^2$ gives $f(2) = f(-2) = 4$. Only one input with two outputs is forbidden.
:::

::: problem id=x6 type=choice set=extra
Is $y = 2x + 1$ a function of x?
- [x] yes
- [ ] no
solution: Every x gives exactly one y. Any non-vertical line passes the vertical line test.
:::

::: problem id=x7 type=choice set=extra
Is $x^2 + y^2 = 25$ (a circle) a function of x?
- [ ] yes
- [x] no
solution: $x = 0$ gives $y = 5$ and $y = -5$: two outputs.
:::

::: problem id=x8 type=numeric answer="3" set=extra
$f(x) = 4x + 1$. For which x is $f(x) = 13$?
solution: $4x + 1 = 13$, $x = 3$.
:::

::: problem id=x9 type=point answer="2,1" set=extra
Here is $f(x) = x^2 - 3$. Click the point on it where $x = 2$.
graph:
x -3..3
y -4..5
plot x^2-3 blue
solution: $f(2) = 4 - 3 = 1$: the point $(2, 1)$.
:::

::: problem id=x10 type=numeric answer="3" set=extra
$f(x) = |x - 5|$. What is $f(2)$?
solution: $|2 - 5| = |-3| = 3$.
:::

::: problem id=x11 type=choice set=extra
A table gives inputs 1, 2, 3, 2 with outputs 4, 5, 6, 7. Is it a function?
- [x] No: input 2 has two outputs
- [ ] Yes: all outputs are different
- [ ] Yes: there are four pairs
- [ ] No: the outputs go up
solution: Input 2 goes to 5 and to 7, so it is **not** a function.
:::

::: problem id=x12 type=numeric answer="10" set=extra
$f(x) = 2x^2 - x$. What is $f(-2)$?
solution: $2(4) - (-2) = 8 + 2 = 10$.
:::

::: problem id=x13 type=choice set=extra
$f(x) = x^2$. Ann says $f(-3) = -9$. What is right?
- [x] $f(-3) = 9$
- [ ] $f(-3) = -9$
- [ ] $f(-3) = -6$
- [ ] $f(-3) = 6$
solution: Put the whole $-3$ in: $(-3)^2 = 9$.
:::

::: problem id=x14 type=numeric answer="17" set=extra
A taxi costs $C(d) = 3 + 2d$ dollars for d km. What is $C(7)$?
solution: $3 + 14 = 17$.
:::

::: problem id=x15 type=numeric answer="6" set=extra
$f(x) = 5 - 2x$. For which x is $f(x) = -7$?
solution: $5 - 2x = -7$, $-2x = -12$, $x = 6$.
:::

::: problem id=x16 type=numeric answer="4" set=extra
$f(x) = x^2 - 4x$. Find the positive a with $f(a) = 0$.
solution: $a^2 - 4a = a(a - 4) = 0$: $a = 0$ or 4. Positive: **4**.
:::

::: problem id=x17 type=numeric answer="2" set=extra
$f(x) = \frac{x + 1}{x - 2}$. What is $f(5)$?
solution: $\frac{6}{3} = 2$.
:::

::: problem id=x18 type=numeric answer="10" set=extra
$f(x) = x^2 + x$. What is $f(3) - f(1)$?
hint: Find each value first.
solution: $f(3) = 12$, $f(1) = 2$. $12 - 2 = 10$.
:::

::: problem id=x19 type=numeric answer="4" set=extra
$f(x) = ax + 3$ and $f(2) = 11$. What is a?
hint: Put $x = 2$ in and set it equal to 11.
solution: $2a + 3 = 11$, $a = 4$.
:::

::: problem id=x20 type=numeric answer="17" set=extra creative=true
A function has $f(0) = 2$ and $f(x + 1) = f(x) + 3$ for every x. What is $f(5)$?
hint: Find $f(1)$, $f(2)$, ... one at a time.
solution: Each step adds 3: $f(5) = 2 + 5 \cdot 3 = 17$.
:::
