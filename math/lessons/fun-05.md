---
id: fun-05
title: Transforming graphs
---
::: rule
Starting from $y = f(x)$:
- $f(x) + k$: shift **up** k (down if k is negative)
- $f(x - h)$: shift **right** h (careful: minus means right)
- $-f(x)$: flip upside down (reflect in the x-axis)
- $a \cdot f(x)$: stretch vertically by a
:::

::: example
$y = (x + 1)^2 - 2$ is $y = x^2$ moved **left** 1 and **down** 2, so its vertex is $(-1, -2)$.
:::

::: graph
x -4..3
y -3..5
plot x^2 green
plot (x+1)^2-2 blue
point -1,-2
:::

::: problem id=p1 type=choice
How does $y = x^2 + 3$ compare to $y = x^2$?
- [x] shifted up 3
- [ ] shifted right 3
- [ ] shifted left 3
solution: Adding outside the function moves it **up**.
:::

::: problem id=p2 type=choice
How does $y = (x - 2)^2$ compare to $y = x^2$?
- [ ] shifted left 2
- [x] shifted right 2
- [ ] shifted down 2
solution: $x - 2$ inside moves it **right** 2.
:::

::: problem id=p3 type=point answer="-1,-2"
Click the vertex of $y = (x + 1)^2 - 2$.
graph:
x -4..3
y -3..5
plot (x+1)^2-2 blue
solution: Left 1, down 2: $(-1, -2)$.
:::

::: problem id=p4 type=expression answer="(x+3)^2"
Write $y = x^2$ shifted 3 to the **left**, as $y = \ldots$
solution: $y = (x + 3)^2$.
:::

::: problem id=p5 type=expression answer="abs(x)-4"
Write $y = |x|$ shifted down 4, as $y = \ldots$ (type $|x|$ as abs(x)).
solution: $y = |x| - 4$.
:::

::: problem id=p6 type=choice
How does $y = -x^2$ compare to $y = x^2$?
- [x] flipped upside down
- [ ] shifted down
- [ ] the same
solution: The minus reflects it in the x-axis.
:::

::: problem id=p7 type=point answer="2,1"
Click the corner (vertex) of $y = |x - 2| + 1$.
graph:
x -2..6
y -1..6
plot abs(x-2)+1 blue
solution: Right 2, up 1: $(2, 1)$.
:::

::: problem id=p8 type=expression answer="3x^2+1"
Write $y = x^2$ stretched vertically by 3 and then moved up 1, as $y = \ldots$
solution: $y = 3x^2 + 1$.
:::
