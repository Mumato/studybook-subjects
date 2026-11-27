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

::: graph
x -2..4
y -1..4
segment -2,1 1,1 blue
segment 1,3 4,3 blue
point 1,1 blue
point 1,3 blue open
:::

The graph above has a jump at $x = 1$.

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

::: problem id=x1 type=numeric answer="5" set=extra
$\lim_{x \to \infty} \frac{5x^2 - 2}{x^2 + 4} = ?$
solution: Equal degrees: $\frac{5}{1} = 5$.
:::

::: problem id=x2 type=numeric answer="0" set=extra
$\lim_{x \to \infty} \frac{3x + 7}{x^2 - 1} = ?$
solution: The bottom's degree is bigger: **0**.
:::

::: problem id=x3 type=numeric answer="3" set=extra
$\lim_{x \to \infty} \frac{6x^3}{2x^3 - x + 1} = ?$
solution: Equal degrees: $\frac{6}{2} = 3$.
:::

::: problem id=x4 type=numeric answer="2" set=extra
$\lim_{x \to -\infty} \frac{4x - 1}{2x + 5} = ?$
solution: Equal degrees, either direction: $\frac{4}{2} = 2$.
:::

::: problem id=x5 type=numeric answer="-2/3" set=extra
$\lim_{x \to \infty} \frac{1 - 2x}{3x + 4} = ?$
solution: Leading terms $\frac{-2x}{3x}$: $-\frac{2}{3}$.
:::

::: problem id=x6 type=choice set=extra
$\lim_{x \to \infty} \frac{x^3 + 1}{x^2} = ?$
- [ ] 0
- [ ] 1
- [x] it grows without bound ($\infty$)
- [ ] 3
solution: The top's degree is bigger: $\frac{x^3 + 1}{x^2} \approx x \to \infty$.
:::

::: problem id=x7 type=numeric answer="3" set=extra
$f(x) = x + 2$ for $x < 1$ and $f(x) = 5 - x$ for $x \ge 1$. What is $\lim_{x \to 1^-} f(x)$?
solution: Left piece: $1 + 2 = 3$.
:::

::: problem id=x8 type=numeric answer="4" set=extra
Same f. What is $\lim_{x \to 1^+} f(x)$?
solution: Right piece: $5 - 1 = 4$.
:::

::: problem id=x9 type=text answers="no" set=extra
Same f. Does $\lim_{x \to 1} f(x)$ exist? Type yes or no.
solution: The sides give 3 and 4: **no**.
:::

::: problem id=x10 type=numeric answer="1" set=extra
$\lim_{x \to 2^+} \frac{|x - 2|}{x - 2} = ?$
hint: For $x > 2$, $|x - 2| = x - 2$.
solution: The fraction is $\frac{x - 2}{x - 2} = 1$.
:::

::: problem id=x11 type=numeric answer="-1" set=extra
$\lim_{x \to 2^-} \frac{|x - 2|}{x - 2} = ?$
solution: For $x < 2$, $|x - 2| = -(x - 2)$, so the fraction is $-1$.
:::

::: problem id=x12 type=choice set=extra
What happens to $\frac{1}{x - 3}$ as $x \to 3^-$?
- [ ] it approaches 0
- [ ] it grows to $+\infty$
- [x] it falls to $-\infty$
- [ ] it approaches 3
solution: Just left of 3, $x - 3$ is a tiny negative number. 1 over it is hugely negative.
:::

::: graph
x -2..4
y -2..3
segment -2,0 2,2 blue
point 2,2 blue open
segment 2,-1 4,1 blue
point 2,-1 blue
:::

The graph above has a jump at $x = 2$.

::: problem id=x13 type=numeric answer="2" set=extra
In the graph above, what is $\lim_{x \to 2^-} f(x)$?
solution: The left piece rises to height **2** (open dot).
:::

::: problem id=x14 type=numeric answer="-1" set=extra
In the same graph, what is $f(2)$?
solution: The filled dot at $x = 2$ is at height $-1$.
:::

::: problem id=x15 type=numeric answer="500" set=extra
A fish population grows as $P(t) = \frac{500t}{t + 4}$ (t in years). What does it level off at in the long run?
solution: $\lim_{t \to \infty} \frac{500t}{t + 4} = \frac{500}{1} = 500$.
:::

::: problem id=x16 type=numeric answer="1" set=extra
$\lim_{x \to \infty} \frac{\sqrt{x^2 + 1}}{x} = ?$
hint: For $x > 0$, $x = \sqrt{x^2}$. Put everything under one root.
solution: $\sqrt{\frac{x^2 + 1}{x^2}} = \sqrt{1 + \frac{1}{x^2}} \to 1$.
:::

::: problem id=x17 type=numeric answer="3/2" set=extra
$\lim_{x \to \infty} \frac{\sqrt{9x^2 + x}}{2x - 1} = ?$
hint: For huge x, $\sqrt{9x^2 + x} \approx 3x$.
solution: Divide top and bottom by x:
$\frac{\sqrt{9 + \frac{1}{x}}}{2 - \frac{1}{x}} \to \frac{3}{2}$.
:::

::: problem id=x18 type=numeric answer="3" set=extra
$f(x) = 2x + k$ for $x < 3$ and $f(x) = x^2$ for $x \ge 3$. For which k do the two one-sided limits at 3 agree?
hint: Left limit $6 + k$, right limit 9.
solution: $6 + k = 9$, so $k = 3$.
:::

::: problem id=x19 type=numeric answer="2" set=extra
$\lim_{x \to \infty} \left(\sqrt{x^2 + 4x} - x\right) = ?$
hint: Multiply and divide by the conjugate $\sqrt{x^2 + 4x} + x$.
solution: $\frac{4x}{\sqrt{x^2 + 4x} + x}$. Divide by x:
$\frac{4}{\sqrt{1 + \frac{4}{x}} + 1} \to \frac{4}{2} = 2$.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
For which a is $\lim_{x \to \infty} \frac{ax^2 + 1}{2x^2 - x} = 3$?
hint: Equal degrees: the limit is the ratio of leading coefficients.
solution: $\frac{a}{2} = 3$, so $a = 6$.
:::
