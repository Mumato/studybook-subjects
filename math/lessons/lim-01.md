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
