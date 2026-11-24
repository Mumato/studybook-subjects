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
