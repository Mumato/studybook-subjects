---
id: der-01
title: The derivative
---
::: rule
The **derivative** $f'(x)$ is the slope of the graph at x: the slope of the **tangent line** that just touches it there.

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

It is also written $\frac{dy}{dx}$. It measures the **rate of change**: if $s(t)$ is position, $s'(t)$ is velocity.
:::

::: example
$f(x) = x^2$: $\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h \to 2x$. So $f'(x) = 2x$. At $x = 1$ the slope is 2, and the tangent is $y = 2x - 1$.
:::

::: graph
x -2..3
y -2..6
plot x^2 blue
plot 2x-1 red
point 1,1
:::

Type derivatives like 2x+1.

::: problem id=p1 type=numeric answer="6"
$f'(x) = 2x$ for $f(x) = x^2$. What is the slope of the tangent at $x = 3$?
solution: $2 \times 3 = 6$.
:::

::: problem id=p2 type=numeric answer="3"
$f(x) = 3x + 2$ is a straight line. What is $f'(x)$?
solution: A line's slope never changes: **3**.
:::

::: problem id=p3 type=expression answer="2x+1"
Use the definition to find $f'(x)$ for $f(x) = x^2 + x$.
hint: $\frac{(x + h)^2 + (x + h) - x^2 - x}{h} = \frac{2xh + h^2 + h}{h}$.
solution: $2x + h + 1 \to 2x + 1$.
:::

::: problem id=p4 type=point answer="2,1"
Here is $y = x^2 - 4x + 5$. Click the point where the tangent line is flat (slope 0).
graph:
x -1..5
y -1..6
plot x^2-4x+5 blue
hint: Flat tangents sit at the very bottom of a valley.
solution: The vertex $(2, 1)$.
:::

::: problem id=p5 type=choice
$f'(a)$ tells you:
- [x] the slope of the tangent at $x = a$
- [ ] the value of f at a
- [ ] where f crosses the x-axis
solution: The derivative is a slope.
:::

::: problem id=p6 type=numeric answer="0"
$f(x) = 7$. What is $f'(x)$?
solution: A flat line has slope **0**.
:::

::: problem id=p7 type=expression answer="4x-4"
Write the tangent line to $y = x^2$ at $x = 2$ as $y = \ldots$
hint: The point is $(2, 4)$ and the slope is $2 \times 2 = 4$.
solution: $y - 4 = 4(x - 2)$, so $y = 4x - 4$.
:::

::: problem id=p8 type=numeric answer="10"
A ball's position is $s(t) = t^2$ metres, and $s'(t) = 2t$. How fast is it moving at $t = 5$ seconds (in m/s)?
hint: Velocity is the derivative of position.
solution: $s'(5) = 10$ m/s.
:::
