---
id: lim-02
title: Finding limits with algebra
---
::: rule
1. Try **direct substitution**. If you get a number, that's the limit.
2. If you get $\frac{0}{0}$, simplify first: **factor and cancel**, or multiply by the **conjugate** when there's a square root. Then substitute.
:::

::: example
$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} (x + 3) = 6$.
:::

::: example
$\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}$: multiply top and bottom by $\sqrt{x + 4} + 2$ to get $\frac{1}{\sqrt{x + 4} + 2} \to \frac{1}{4}$.
:::

::: problem id=p1 type=numeric answer="10"
$\lim_{x \to 2} (x^2 + 3x) = ?$
solution: $4 + 6 = 10$.
:::

::: problem id=p2 type=numeric answer="6"
$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = ?$
solution: $x + 3 \to 6$.
:::

::: problem id=p3 type=numeric answer="1"
$\lim_{x \to -1} \frac{x^2 + 3x + 2}{x + 1} = ?$
hint: $x^2 + 3x + 2 = (x + 1)(x + 2)$.
solution: $x + 2 \to 1$.
:::

::: problem id=p4 type=numeric answer="1/6"
$\lim_{x \to 0} \frac{\sqrt{x + 9} - 3}{x} = ?$
hint: Multiply by the conjugate $\sqrt{x + 9} + 3$.
solution: $\frac{1}{\sqrt{x + 9} + 3} \to \frac{1}{6}$.
:::

::: problem id=p5 type=numeric answer="12"
$\lim_{x \to 2} \frac{x^3 - 8}{x - 2} = ?$
solution: $\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4 \to 12$.
:::

::: problem id=p6 type=numeric answer="3"
$\lim_{x \to 4} (\sqrt{x} + 1) = ?$
solution: $2 + 1 = 3$.
:::

::: problem id=p7 type=numeric answer="5"
$\lim_{x \to 0} \frac{x^2 + 5x}{x} = ?$
solution: $x + 5 \to 5$.
:::

::: problem id=p8 type=numeric answer="4"
$\lim_{h \to 0} \frac{(2 + h)^2 - 4}{h} = ?$
hint: Expand $(2 + h)^2$ first.
solution: $\frac{4h + h^2}{h} = 4 + h \to 4$.
:::

::: problem id=c1 type=numeric answer="5" creative=true
$\lim_{x \to 1} \frac{x^5 - 1}{x - 1} = ?$
hint: $x^5 - 1 = (x - 1)(x^4 + x^3 + x^2 + x + 1)$.
solution: $x^4 + x^3 + x^2 + x + 1 \to 5$. In general the answer is n for $x^n$.
:::
