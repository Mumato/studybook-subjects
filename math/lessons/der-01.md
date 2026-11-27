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

::: problem id=x1 type=numeric answer="-8" set=extra
$f(x) = x^2$ has $f'(x) = 2x$. What is the slope of the tangent at $x = -4$?
solution: $2(-4) = -8$.
:::

::: problem id=x2 type=numeric answer="-5" set=extra
$f(x) = -5x + 1$. What is $f'(x)$?
solution: A line's slope: $-5$.
:::

::: problem id=x3 type=expression answer="6x" set=extra
Use the definition to find $f'(x)$ for $f(x) = 3x^2$.
solution: $\frac{3(x + h)^2 - 3x^2}{h} = \frac{6xh + 3h^2}{h} = 6x + 3h \to 6x$.
:::

::: problem id=x4 type=expression answer="2x-3" set=extra
Use the definition to find $f'(x)$ for $f(x) = x^2 - 3x$.
solution: $\frac{2xh + h^2 - 3h}{h} = 2x + h - 3 \to 2x - 3$.
:::

::: problem id=x5 type=numeric answer="4" set=extra
What is the average rate of change of $f(x) = x^2$ from $x = 1$ to $x = 3$?
solution: $\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4$.
:::

::: problem id=x6 type=expression answer="-2x-1" set=extra
Write the tangent line to $y = x^2$ at $x = -1$ as $y = \ldots$
solution: Point $(-1, 1)$, slope $2(-1) = -2$.
$y - 1 = -2(x + 1)$, so $y = -2x - 1$.
:::

::: problem id=x7 type=choice set=extra
$f'(2) = 0$ means:
- [ ] $f(2) = 0$
- [x] the tangent at $x = 2$ is horizontal
- [ ] the graph crosses the x-axis at 2
- [ ] f is undefined at 2
solution: The derivative is the tangent's slope; slope 0 is flat.
:::

::: problem id=x8 type=point answer="1,4" set=extra
Here is $y = -x^2 + 2x + 3$. Click the point where the tangent is flat.
graph:
x -2..4
y -1..5
plot -x^2+2x+3 blue
solution: The top of the hill: $(1, 4)$.
:::

::: problem id=x9 type=choice set=extra
On $y = x^2$, is $f'(-2)$ positive, negative or zero?
- [ ] positive
- [x] negative
- [ ] zero
solution: Left of the vertex the parabola goes down: $f'(-2) = -4 < 0$.
:::

::: problem id=x10 type=choice set=extra
$V(t)$ is the water in a tank in litres, t in minutes. What are the units of $V'(t)$?
- [ ] litres
- [ ] minutes
- [x] litres per minute
- [ ] minutes per litre
solution: A derivative is output change over input change: litres per minute.
:::

::: problem id=x11 type=numeric answer="3" set=extra
At which x does the tangent to $y = x^2$ have slope 6?
solution: $2x = 6$, so $x = 3$.
:::

::: problem id=x12 type=numeric answer="3" set=extra
$\lim_{h \to 0} \frac{(3 + h)^2 - 9}{h}$ is $f'(a)$ for $f(x) = x^2$. What is a?
solution: It is $\frac{f(a + h) - f(a)}{h}$ with $a = 3$ (and $f(3) = 9$).
:::

::: problem id=x13 type=choice set=extra
A student computes $\frac{(x + h)^2 - x^2}{h} = \frac{x^2 + h^2 - x^2}{h} = h \to 0$. What's wrong?
- [ ] Nothing, $(x^2)' = 0$
- [x] $(x + h)^2 \ne x^2 + h^2$; the $2xh$ term is missing
- [ ] You can't divide by h
- [ ] The limit should be $h \to 1$
solution: $(x + h)^2 = x^2 + 2xh + h^2$. Then the quotient is $2x + h \to 2x$.
:::

::: problem id=x14 type=numeric answer="7" set=extra
A car's position is $s(t) = t^2 + 3t$ metres. Use the definition to find its velocity at $t = 2$ s (in m/s).
hint: First find $s'(t)$ from the difference quotient.
solution: $\frac{2th + h^2 + 3h}{h} \to 2t + 3$. At 2: $7$ m/s.
:::

::: problem id=x15 type=numeric answer="1/4" set=extra
Use the definition to find $f'(4)$ for $f(x) = \sqrt{x}$.
hint: Multiply $\frac{\sqrt{4 + h} - 2}{h}$ by the conjugate.
solution: $\frac{(4 + h) - 4}{h(\sqrt{4 + h} + 2)} = \frac{1}{\sqrt{4 + h} + 2} \to \frac{1}{4}$.
:::

::: problem id=x16 type=expression answer="-1/x^2" set=extra
Use the definition to find $f'(x)$ for $f(x) = \frac{1}{x}$.
hint: $\frac{1}{x + h} - \frac{1}{x} = \frac{-h}{x(x + h)}$.
solution: Divide by h: $\frac{-1}{x(x + h)} \to -\frac{1}{x^2}$.
:::

::: problem id=x17 type=expression answer="3x^2" set=extra
Use the definition to find $f'(x)$ for $f(x) = x^3$.
hint: $(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$.
solution: $\frac{3x^2h + 3xh^2 + h^3}{h} = 3x^2 + 3xh + h^2 \to 3x^2$.
:::

::: problem id=x18 type=expression answer="3x-1" set=extra
$f(x) = x^2 + x$ has $f'(x) = 2x + 1$. Write the tangent at $x = 1$ as $y = \ldots$
hint: Find the point first: $f(1) = 2$.
solution: Slope $f'(1) = 3$. $y - 2 = 3(x - 1)$, so $y = 3x - 1$.
:::

::: problem id=x19 type=multi answers="3;-3" set=extra
The tangent to $y = x^2$ at $x = a$ passes through $(0, -9)$. Find both values of a.
hint: The tangent at a is $y = 2ax - a^2$.
solution: At $x = 0$: $-a^2 = -9$, so $a = 3$ or $a = -3$.
:::

::: problem id=x20 type=choice set=extra creative=true
Why does $f(x) = |x|$ have no derivative at $x = 0$?
- [ ] $|0|$ is undefined
- [x] $\frac{|h|}{h}$ goes to $-1$ from the left and 1 from the right, so the limit doesn't exist
- [ ] The slope there is 0
- [ ] The slope there is infinite
solution: At 0 the quotient is $\frac{|h| - 0}{h}$. The two sides disagree, so there's a corner and no single tangent.
:::
