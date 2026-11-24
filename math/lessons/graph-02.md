---
id: graph-02
title: Slope
---
::: rule
The **slope** of a line says how steep it is: how much it rises for each step to the right.

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

- positive: goes up to the right
- negative: goes down to the right
- 0: flat (horizontal)
- vertical lines have **undefined** slope (you'd divide by 0)
:::

::: example
Through $(0, 1)$ and $(2, 5)$: rise $5 - 1 = 4$, run $2 - 0 = 2$, so $m = \frac{4}{2} = 2$.
:::

::: graph
x -1..4
y -1..6
plot 2x+1 blue
point 0,1
point 2,5
segment 0,1 2,1 run 2 red
segment 2,1 2,5 rise 4 red
:::

::: problem id=p1 type=numeric answer="2"
What is the slope of the line through $(1, 2)$ and $(3, 6)$?
solution: $\frac{6 - 2}{3 - 1} = \frac{4}{2} = 2$.
:::

::: problem id=p2 type=numeric answer="-2"
What is the slope of the line through $(-1, 4)$ and $(2, -2)$?
hint: Keep the order the same on top and bottom.
solution: $\frac{-2 - 4}{2 - (-1)} = \frac{-6}{3} = -2$.
:::

::: problem id=p3 type=numeric answer="0"
What is the slope of the line through $(0, 3)$ and $(4, 3)$?
solution: The rise is $3 - 3 = 0$, so the slope is **0** (a flat line).
:::

::: problem id=p4 type=choice
What is the slope of a vertical line?
- [ ] 0
- [ ] 1
- [x] undefined
solution: The run is 0, and you can't divide by 0: **undefined**.
:::

::: problem id=p5 type=numeric answer="1/4"
A ramp rises 3 m over a horizontal distance of 12 m. What is its slope?
solution: $\frac{3}{12} = \frac{1}{4}$.
:::

::: problem id=p6 type=point answer="2,4"
A line goes through $(0, 0)$ with slope 2. Click the point on the line where $x = 2$.
graph:
x -1..5
y -1..6
point 0,0
hint: Every 1 step right, the line goes up 2.
solution: 2 steps right means up $2 \times 2 = 4$: $(2, 4)$.
:::

::: problem id=p7 type=numeric answer="1/2"
What is the slope of the line through $(2, 5)$ and $(6, 7)$?
solution: $\frac{7 - 5}{6 - 2} = \frac{2}{4} = \frac{1}{2}$.
:::

::: problem id=p8 type=choice
A line goes down from left to right. Its slope is:
- [ ] positive
- [x] negative
- [ ] zero
solution: Going down to the right means **negative** slope.
:::
