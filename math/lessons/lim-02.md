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

::: problem id=x1 type=numeric answer="15" set=extra
$\lim_{x \to 3} (2x^2 - x) = ?$
solution: Substitute: $18 - 3 = 15$.
:::

::: problem id=x2 type=numeric answer="-4" set=extra
$\lim_{x \to -2} \frac{x^2 - 4}{x + 2} = ?$
solution: $\frac{(x - 2)(x + 2)}{x + 2} = x - 2 \to -4$.
:::

::: problem id=x3 type=numeric answer="5" set=extra
$\lim_{x \to 4} \frac{x^2 - 3x - 4}{x - 4} = ?$
solution: $\frac{(x - 4)(x + 1)}{x - 4} = x + 1 \to 5$.
:::

::: problem id=x4 type=numeric answer="2" set=extra
$\lim_{x \to 1} \frac{x^2 + 2x - 3}{x^2 - 1} = ?$
solution: $\frac{(x - 1)(x + 3)}{(x - 1)(x + 1)} = \frac{x + 3}{x + 1}$.
At 1: $\frac{4}{2} = 2$.
:::

::: problem id=x5 type=numeric answer="1/8" set=extra
$\lim_{x \to 0} \frac{\sqrt{x + 16} - 4}{x} = ?$
solution: Conjugate: $\frac{1}{\sqrt{x + 16} + 4} \to \frac{1}{8}$.
:::

::: problem id=x6 type=numeric answer="27" set=extra
$\lim_{x \to -3} \frac{x^3 + 27}{x + 3} = ?$
hint: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.
solution: $x^2 - 3x + 9 \to 9 + 9 + 9 = 27$.
:::

::: problem id=x7 type=numeric answer="6" set=extra
$\lim_{h \to 0} \frac{(3 + h)^2 - 9}{h} = ?$
solution: $\frac{6h + h^2}{h} = 6 + h \to 6$.
:::

::: problem id=x8 type=numeric answer="-1/4" set=extra
$\lim_{x \to 2} \frac{\frac{1}{x} - \frac{1}{2}}{x - 2} = ?$
hint: Combine the top into one fraction.
solution: Top $= \frac{2 - x}{2x}$. Divide by $x - 2$: $-\frac{1}{2x} \to -\frac{1}{4}$.
:::

::: problem id=x9 type=numeric answer="15" set=extra
$\lim_{x \to 0} \frac{x^3 - 2x^2 + 15x}{x} = ?$
solution: $x^2 - 2x + 15 \to 15$.
:::

::: problem id=x10 type=choice set=extra
A student writes: "$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \frac{0}{0} = 0$." What went wrong?
- [ ] Nothing, the limit is 0
- [x] $\frac{0}{0}$ is not a number; factor first to get 6
- [ ] The limit doesn't exist
- [ ] The answer should be 1
solution: $\frac{0}{0}$ means "simplify". $x + 3 \to 6$.
:::

::: problem id=x11 type=choice set=extra
Substituting $x = 2$ into $\frac{x^2 + 1}{x - 2}$ gives $\frac{5}{0}$. What does that tell you?
- [ ] The limit is 0
- [ ] The limit is 5
- [ ] Factor and cancel, then substitute
- [x] It isn't $\frac{0}{0}$: the function blows up, so there is no finite limit
solution: A non-zero number over 0 can't be cancelled away: the values grow without bound near 2.
:::

::: problem id=x12 type=numeric answer="1/4" set=extra
$\lim_{x \to 5} \frac{\sqrt{x - 1} - 2}{x - 5} = ?$
hint: Multiply by $\sqrt{x - 1} + 2$.
solution: Top becomes $(x - 1) - 4 = x - 5$.
So $\frac{1}{\sqrt{x - 1} + 2} \to \frac{1}{4}$.
:::

::: problem id=x13 type=numeric answer="4" set=extra
$\lim_{x \to 1} \frac{x^4 - 1}{x - 1} = ?$
solution: $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$.
So $(x + 1)(x^2 + 1) \to 2 \cdot 2 = 4$.
:::

::: problem id=x14 type=expression answer="2x" set=extra
$\lim_{h \to 0} \frac{(x + h)^2 - x^2}{h} = ?$ (Answer in terms of x.)
solution: $\frac{2xh + h^2}{h} = 2x + h \to 2x$.
:::

::: problem id=x15 type=numeric answer="-1/9" set=extra
$\lim_{x \to 3} \frac{\frac{1}{x} - \frac{1}{3}}{x - 3} = ?$
solution: Top $= \frac{3 - x}{3x}$. Divide by $x - 3$: $-\frac{1}{3x} \to -\frac{1}{9}$.
:::

::: problem id=x16 type=numeric answer="16" set=extra
$\lim_{x \to 2} \frac{x^2 - 4}{\sqrt{x + 2} - 2} = ?$
hint: Multiply top and bottom by $\sqrt{x + 2} + 2$.
solution: Bottom becomes $x - 2$. Left: $(x + 2)(\sqrt{x + 2} + 2)$.
At 2: $4 \cdot 4 = 16$.
:::

::: problem id=x17 type=numeric answer="1" set=extra
$\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x} = ?$
hint: Multiply by $\sqrt{1 + x} + \sqrt{1 - x}$.
solution: Top becomes $(1 + x) - (1 - x) = 2x$.
So $\frac{2}{\sqrt{1 + x} + \sqrt{1 - x}} \to \frac{2}{2} = 1$.
:::

::: problem id=x18 type=numeric answer="4" set=extra
$\lim_{x \to 3} \frac{x^2 - 2x - 3}{x^2 - 5x + 6} = ?$
hint: Both factor with $x - 3$.
solution: $\frac{(x - 3)(x + 1)}{(x - 3)(x - 2)} = \frac{x + 1}{x - 2}$.
At 3: $\frac{4}{1} = 4$.
:::

::: problem id=x19 type=numeric answer="3" set=extra
$\lim_{h \to 0} \frac{(1 + h)^3 - 1}{h} = ?$
hint: $(1 + h)^3 = 1 + 3h + 3h^2 + h^3$.
solution: $\frac{3h + 3h^2 + h^3}{h} = 3 + 3h + h^2 \to 3$.
:::

::: problem id=x20 type=numeric answer="1/6" set=extra creative=true
$\lim_{x \to 0} \frac{\sqrt{x^2 + 9} - 3}{x^2} = ?$
hint: The conjugate trick still works with $x^2$ inside.
solution: Top times $\sqrt{x^2 + 9} + 3$ gives $x^2$.
So $\frac{1}{\sqrt{x^2 + 9} + 3} \to \frac{1}{6}$.
:::
