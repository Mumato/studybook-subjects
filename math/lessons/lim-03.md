---
id: lim-03
title: One-sided limits and limits at infinity
---
::: rule
- $\lim_{x \to a^-}$: x comes from the **left**. $\lim_{x \to a^+}$: from the **right**. The ordinary limit exists only when both agree.
- $\lim_{x \to \infty}$: what f approaches as x grows huge. For rational functions, compare degrees (just like horizontal asymptotes). $\frac{1}{x} \to 0$.
:::

::: example
$\lim_{x \to \infty} \frac{3x^2 + 1}{x^2 - 5} = 3$: equal degrees, so divide the leading coefficients.
:::

::: graph
x -2..4
y -1..4
segment -2,1 1,1 blue
segment 1,3 4,3 blue
point 1,1 blue
point 1,3 blue open
:::

The graph above has a jump at $x = 1$.

::: problem id=p1 type=numeric answer="0"
$\lim_{x \to \infty} \frac{1}{x} = ?$
solution: Huge x makes $\frac{1}{x}$ tiny: **0**.
:::

::: problem id=p2 type=numeric answer="2"
$\lim_{x \to \infty} \frac{2x + 1}{x - 3} = ?$
solution: Equal degrees: $\frac{2}{1} = 2$.
:::

::: problem id=p3 type=numeric answer="0"
$\lim_{x \to \infty} \frac{5x}{x^2 + 1} = ?$
solution: The bottom's degree is bigger: **0**.
:::

::: problem id=p4 type=numeric answer="1"
In the jump graph above, what is $\lim_{x \to 1^-} f(x)$?
hint: Follow the piece on the left.
solution: The left piece is at height **1**.
:::

::: problem id=p5 type=numeric answer="3"
In the same graph, what is $\lim_{x \to 1^+} f(x)$?
solution: The right piece is at height **3**.
:::

::: problem id=p6 type=text answers="no"
In the same graph, does $\lim_{x \to 1} f(x)$ exist? Type yes or no.
solution: Left gives 1 and right gives 3: **no**.
:::

::: problem id=p7 type=choice
What happens to $\frac{1}{x}$ as $x \to 0^+$?
- [x] it grows without bound ($\infty$)
- [ ] it approaches 0
- [ ] it approaches 1
solution: Dividing 1 by tiny positive numbers gives huge positive numbers.
:::

::: problem id=p8 type=numeric answer="2"
$\lim_{x \to \infty} \frac{4x^3 - x}{2x^3 + 7} = ?$
solution: $\frac{4}{2} = 2$.
:::
