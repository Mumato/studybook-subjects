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

::: problem id=x1 type=choice set=extra
How does $y = x^2 - 4$ compare to $y = x^2$?
- [x] shifted down 4
- [ ] shifted up 4
- [ ] shifted right 4
- [ ] shifted left 4
solution: Subtracting outside the function moves it **down**.
:::

::: problem id=x2 type=choice set=extra
How does $y = (x + 5)^2$ compare to $y = x^2$?
- [x] shifted left 5
- [ ] shifted right 5
- [ ] shifted up 5
- [ ] shifted down 5
solution: $x + 5 = x - (-5)$ inside: **left** 5.
:::

::: problem id=x3 type=point answer="3,2" set=extra
Click the vertex of $y = (x - 3)^2 + 2$.
graph:
x -1..6
y -1..6
plot (x-3)^2+2 blue
solution: Right 3, up 2: $(3, 2)$.
:::

::: problem id=x4 type=expression answer="(x-4)^2" set=extra
Write $y = x^2$ shifted 4 to the **right**, as $y = \ldots$
solution: $y = (x - 4)^2$.
:::

::: problem id=x5 type=expression answer="abs(x+1)+2" set=extra
Write $y = |x|$ shifted left 1 and up 2, as $y = \ldots$ (type $|x|$ as abs(x)).
solution: $y = |x + 1| + 2$.
:::

::: problem id=x6 type=point answer="-2,-3" set=extra
Click the corner of $y = |x + 2| - 3$.
graph:
x -6..3
y -4..4
plot abs(x+2)-3 blue
solution: Left 2, down 3: $(-2, -3)$.
:::

::: problem id=x7 type=choice set=extra
How does $y = 2x^2$ compare to $y = x^2$?
- [x] stretched vertically by 2 (narrower)
- [ ] shifted up 2
- [ ] shifted right 2
- [ ] flipped upside down
solution: Every y value is doubled: a vertical stretch.
:::

::: problem id=x8 type=choice set=extra
How does $y = -|x|$ compare to $y = |x|$?
- [x] flipped upside down
- [ ] shifted down 1
- [ ] shifted left
- [ ] the same
solution: The minus outside reflects it in the x-axis: a V turned into a ∧.
:::

::: problem id=x9 type=expression answer="sqrt(x)-3" set=extra
Write $y = \sqrt{x}$ shifted down 3, as $y = \ldots$
solution: $y = \sqrt{x} - 3$.
:::

::: problem id=x10 type=point answer="1,5" set=extra
The graph of $y = f(x)$ passes through $(1, 2)$. Click the point that $y = f(x) + 3$ must pass through.
graph:
x -2..4
y -1..6
point 1,2 A blue
solution: Up 3: $(1, 5)$.
:::

::: problem id=x11 type=point answer="3,2" set=extra
The graph of $y = f(x)$ passes through $(1, 2)$. Click the point that $y = f(x - 2)$ must pass through.
graph:
x -2..4
y -1..6
point 1,2 A blue
hint: Minus inside means right.
solution: Right 2: $(3, 2)$.
:::

::: problem id=x12 type=choice set=extra
Ray says $y = (x - 6)^2$ is $y = x^2$ moved left 6. What is right?
- [x] It is moved right 6
- [ ] He is right
- [ ] It is moved down 6
- [ ] It is moved up 6
solution: The vertex is where $x - 6 = 0$, at $x = 6$: **right** 6.
:::

::: problem id=x13 type=expression answer="-x^2+4" set=extra
Write $y = x^2$ flipped upside down and then moved up 4, as $y = \ldots$
solution: $y = -x^2 + 4$.
:::

::: problem id=x14 type=numeric answer="-3" set=extra
$y = f(x)$ has largest value 5. What is the largest value of $y = f(x) - 8$?
solution: Every output drops by 8: $5 - 8 = -3$.
:::

::: problem id=x15 type=numeric answer="12" set=extra
$f(2) = 4$. What is the value of $y = 3f(x)$ at $x = 2$?
solution: $3 \cdot 4 = 12$.
:::

::: problem id=x16 type=point answer="1,3" set=extra
Click the vertex of $y = -(x - 1)^2 + 3$.
graph:
x -2..4
y -3..5
plot -(x-1)^2+3 blue
solution: Right 1, up 3 (and flipped): $(1, 3)$.
:::

::: problem id=x17 type=expression answer="2abs(x-3)-1" set=extra
Write $y = |x|$ moved right 3, stretched vertically by 2, then moved down 1, as $y = \ldots$
hint: Stretch first, then add the shift down outside.
solution: Right 3: $|x - 3|$. Stretch: $2|x - 3|$. Down 1: $y = 2|x - 3| - 1$.
:::

::: problem id=x18 type=numeric answer="5" set=extra
$y = x^2 + 6x + 4$ is $y = x^2$ moved left 3 and down $\square$. What goes in the box?
hint: Complete the square.
solution: $x^2 + 6x + 4 = (x + 3)^2 - 9 + 4$, which is $(x + 3)^2 - 5$. Down **5**.
:::

::: problem id=x19 type=point answer="-1,-1" set=extra
$y = f(x)$ passes through $(-1, 2)$. Click the point that $y = -f(x) + 1$ must pass through.
graph:
x -4..4
y -4..4
point -1,2 A blue
hint: Flip first ($y \to -y$), then move up 1.
solution: $2 \to -2 \to -2 + 1 = -1$: $(-1, -1)$.
:::

::: problem id=x20 type=numeric answer="-4" set=extra creative=true
$y = x^2$ is moved right h and up k, so that the new graph crosses the x-axis at 0 and 4. What is k?
hint: The vertex sits halfway between the x-intercepts.
solution: $y = (x - h)^2 + k$ with axis $h = 2$. Through $(0, 0)$: $4 + k = 0$, so $k = -4$. (It is $x(x - 4)$.)
:::
