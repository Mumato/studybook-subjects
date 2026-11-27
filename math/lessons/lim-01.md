---
id: lim-01
title: What a limit is
---
::: rule
$\lim_{x \to a} f(x) = L$ means: as x gets **close to** a (from both sides), $f(x)$ gets close to L.

What happens **exactly at** $x = a$ doesn't matter. f doesn't even need to be defined there.
:::

::: example
$f(x) = \frac{x^2 - 1}{x - 1}$ is undefined at $x = 1$. But for every other x it equals $x + 1$, so its graph is a line with a hole, and $\lim_{x \to 1} f(x) = 2$.
:::

::: graph
x -2..4
y -1..5
plot x+1 blue
point 1,2 blue open
:::

::: problem id=p1 type=numeric answer="7"
$\lim_{x \to 3} (2x + 1) = ?$
solution: Nothing goes wrong at 3, so put it in: $2(3) + 1 = 7$.
:::

::: problem id=p2 type=numeric answer="4"
$f(1.9) = 3.9$, $f(1.99) = 3.99$, $f(2.01) = 4.01$, $f(2.1) = 4.1$. What does $\lim_{x \to 2} f(x)$ seem to be?
hint: Look at what the outputs close in on from both sides.
solution: Both sides close in on **4**.
:::

::: problem id=p3 type=point answer="2,4"
Here is $y = \frac{x^2 - 4}{x - 2}$. It has a hole. Click where the hole is.
graph:
x -2..5
y -1..7
plot (x^2-4)/(x-2) blue
hint: For $x \ne 2$, the fraction simplifies to $x + 2$.
solution: The graph is $y = x + 2$ with a hole at $x = 2$: the point $(2, 4)$.
:::

::: problem id=p4 type=text answers="no"
Does the value of $f(a)$ change $\lim_{x \to a} f(x)$? Type yes or no.
solution: The limit only cares about x **near** a: **no**.
:::

::: problem id=p5 type=numeric answer="1"
$\frac{\sin 0.1}{0.1} \approx 0.998$ and $\frac{\sin 0.01}{0.01} \approx 0.99998$. What does $\lim_{x \to 0} \frac{\sin x}{x}$ seem to be?
hint: x must be in radians.
solution: The values close in on **1**. (This is a famous limit.)
:::

::: problem id=p6 type=text answers="no"
As x approaches 3 from the left, $f(x)$ approaches 2. From the right, it approaches 5. Does $\lim_{x \to 3} f(x)$ exist? Type yes or no.
solution: The two sides disagree: **no**.
:::

::: problem id=p7 type=numeric answer="4"
$\lim_{x \to -2} x^2 = ?$
solution: $(-2)^2 = 4$.
:::

::: problem id=p8 type=numeric answer="2"
$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = ?$
hint: Factor the top.
solution: $\frac{(x - 1)(x + 1)}{x - 1} = x + 1 \to 2$.
:::

::: problem id=x1 type=numeric answer="9" set=extra
$\lim_{x \to 2} (x^2 + 3x - 1) = ?$
solution: Nothing goes wrong at 2: $4 + 6 - 1 = 9$.
:::

::: problem id=x2 type=numeric answer="7" set=extra
$\lim_{x \to -1} (5 - 2x) = ?$
solution: $5 - 2(-1) = 7$.
:::

::: problem id=x3 type=numeric answer="9" set=extra
$f(2.9) = 8.41$, $f(2.99) = 8.9401$, $f(3.01) = 9.0601$, $f(3.1) = 9.61$. What does $\lim_{x \to 3} f(x)$ seem to be?
solution: Both sides close in on **9**.
:::

::: problem id=x4 type=numeric answer="2" set=extra
$\lim_{x \to 0} \frac{x^2 + 4}{x + 2} = ?$
solution: The bottom isn't 0 at 0, so substitute: $\frac{4}{2} = 2$.
:::

::: problem id=x5 type=point answer="-1,-2" set=extra
Here is $y = \frac{x^2 - 1}{x + 1}$. Click where the hole is.
graph:
x -4..3
y -4..3
plot (x^2-1)/(x+1) blue
hint: For $x \ne -1$ the fraction equals $x - 1$.
solution: It's $y = x - 1$ with a hole at $x = -1$: the point $(-1, -2)$.
:::

::: problem id=x6 type=numeric answer="3" set=extra
$f(x) = x + 1$ for every $x \ne 2$, but $f(2) = 10$. What is $\lim_{x \to 2} f(x)$?
solution: Only x near 2 counts: $2 + 1 = 3$. The value $f(2) = 10$ doesn't matter.
:::

::: problem id=x7 type=numeric answer="4" set=extra
As $x \to 5$ from either side, $f(x)$ approaches 4. But $f(5) = 7$. What is $\lim_{x \to 5} f(x)$?
solution: Both sides approach 4, so the limit is **4**.
:::

::: problem id=x8 type=numeric answer="8" set=extra
$\lim_{x \to 4} \frac{x^2 - 16}{x - 4} = ?$
hint: $x^2 - 16 = (x - 4)(x + 4)$.
solution: $x + 4 \to 8$.
:::

::: problem id=x9 type=choice set=extra
What does $\lim_{x \to a} f(x) = L$ say?
- [ ] $f(a) = L$
- [x] $f(x)$ gets close to L when x is close to a (both sides)
- [ ] $f(x) = L$ for every x
- [ ] L is the largest value of f
solution: A limit describes f **near** a, not at a.
:::

::: graph
x -1..4
y -1..6
plot x^2 blue
point 2,4 blue open
point 2,1 blue
:::

The graph above shows f: it follows $y = x^2$, with a hole at $(2, 4)$ and a dot at $(2, 1)$.

::: problem id=x10 type=numeric answer="4" set=extra
In the graph above, what is $\lim_{x \to 2} f(x)$?
solution: The curve closes in on height **4** from both sides.
:::

::: problem id=x11 type=numeric answer="1" set=extra
In the same graph, what is $f(2)$?
solution: The filled dot sits at height **1**.
:::

::: problem id=x12 type=text answers="no" set=extra
$f(0.9) = 1.9$, $f(0.99) = 1.99$, $f(1.01) = 3.01$, $f(1.1) = 3.1$. Does $\lim_{x \to 1} f(x)$ seem to exist? Type yes or no.
solution: From the left it nears 2, from the right 3: **no**.
:::

::: problem id=x13 type=numeric answer="1" set=extra
$\lim_{x \to 0} \cos x = ?$
solution: $\cos 0 = 1$.
:::

::: problem id=x14 type=numeric answer="1" set=extra
For $f(x) = \frac{e^x - 1}{x}$: $f(0.1) \approx 1.0517$, $f(0.01) \approx 1.0050$, $f(-0.01) \approx 0.9950$, $f(-0.1) \approx 0.9516$. What does $\lim_{x \to 0} f(x)$ seem to be?
solution: Both sides close in on **1**.
:::

::: problem id=x15 type=choice set=extra
A student says: "$\lim_{x \to 1} \frac{x^2 - 1}{x - 1}$ doesn't exist, because at $x = 1$ you get $\frac{0}{0}$." Is that right?
- [ ] Yes: $\frac{0}{0}$ means no limit
- [x] No: $\frac{0}{0}$ only says simplify first; the limit is 2
- [ ] No: the limit is 0
- [ ] No: the limit is 1
solution: $\frac{0}{0}$ tells you nothing yet. Cancel: $x + 1 \to 2$.
:::

::: problem id=x16 type=numeric answer="-1" set=extra
$\lim_{x \to -3} \frac{x^2 + 5x + 6}{x + 3} = ?$
hint: Factor the top: $(x + 2)(x + 3)$.
solution: $x + 2 \to -3 + 2 = -1$.
:::

::: problem id=x17 type=numeric answer="-1/4" set=extra
$\lim_{x \to 2} \frac{x^2 - 5x + 6}{x^2 - 4} = ?$
hint: Factor top and bottom; both have a factor $x - 2$.
solution: $\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \frac{x - 3}{x + 2}$.
At 2: $\frac{-1}{4}$.
:::

::: problem id=x18 type=numeric answer="6" set=extra
$\lim_{x \to 0} \frac{(x + 3)^2 - 9}{x} = ?$
hint: Expand $(x + 3)^2$ first.
solution: $\frac{x^2 + 6x}{x} = x + 6 \to 6$.
:::

::: problem id=x19 type=numeric answer="6" set=extra
$\lim_{x \to 9} \frac{x - 9}{\sqrt{x} - 3} = ?$
hint: $x - 9 = (\sqrt{x} - 3)(\sqrt{x} + 3)$.
solution: Cancel: $\sqrt{x} + 3 \to 3 + 3 = 6$.
:::

::: problem id=x20 type=numeric answer="1" set=extra creative=true
For which number a does $\lim_{x \to 2} \frac{x^2 + ax - 6}{x - 2}$ exist?
hint: The bottom goes to 0, so the top must go to 0 too.
solution: Top at 2: $4 + 2a - 6 = 0$, so $a = 1$.
Then $\frac{(x - 2)(x + 3)}{x - 2} \to 5$.
:::
