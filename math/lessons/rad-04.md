---
id: rad-04
title: Equations with roots
---
::: rule
1. Get the root alone on one side.
2. **Square** both sides (cube them for a cube root).
3. Solve.
4. **Check** every answer in the original equation: squaring can create fake (extraneous) solutions.

A square root is never negative, so $\sqrt{x} = -3$ has no solution.
:::

::: example
$\sqrt{x + 3} = 4$. Square: $x + 3 = 16$, so $x = 13$. Check: $\sqrt{16} = 4$. ✓
:::

::: example
$\sqrt{x + 6} = x$. Square: $x + 6 = x^2$, so $x^2 - x - 6 = 0$ and $x = 3$ or $x = -2$. Check $-2$: $\sqrt{4} = 2 \ne -2$. Only $x = 3$ works.
:::

::: problem id=p1 type=numeric answer="25"
Solve $\sqrt{x} = 5$.
solution: $x = 25$.
:::

::: problem id=p2 type=numeric answer="13"
Solve $\sqrt{x + 3} = 4$.
solution: $x + 3 = 16$, $x = 13$.
:::

::: problem id=p3 type=numeric answer="5"
Solve $\sqrt{2x - 1} = 3$.
solution: $2x - 1 = 9$, $x = 5$.
:::

::: problem id=p4 type=numeric answer="25"
Solve $\sqrt{x} + 2 = 7$.
hint: Get the root alone first.
solution: $\sqrt{x} = 5$, $x = 25$.
:::

::: problem id=p5 type=numeric answer="-8"
Solve $\sqrt[3]{x} = -2$.
solution: Cube both sides: $x = -8$.
:::

::: problem id=p6 type=choice
Solve $\sqrt{x} = -3$.
- [ ] $x = 9$
- [ ] $x = -9$
- [x] no solution
solution: A square root can't be negative: **no solution**.
:::

::: problem id=p7 type=numeric answer="3"
Solve $\sqrt{x + 6} = x$.
solution: $x^2 - x - 6 = 0$ gives 3 or $-2$; only 3 checks out.
:::

::: problem id=p8 type=numeric answer="24"
A square has area $x + 1$ and side length 5. What is x?
solution: $\sqrt{x + 1} = 5$, so $x + 1 = 25$ and $x = 24$.
:::

::: problem id=c1 type=numeric answer="6" creative=true
The roots go on forever: $\sqrt{x + \sqrt{x + \sqrt{x + \cdots}}} = 3$. What is x?
hint: The part inside the first root contains the whole thing again.
solution: The whole expression is 3, and it also appears inside: $\sqrt{x + 3} = 3$. So $x + 3 = 9$ and $x = 6$.
:::

::: problem id=x1 type=numeric answer="81" set=extra
Solve $\sqrt{x} = 9$.
solution: $x = 81$.
:::

::: problem id=x2 type=numeric answer="29" set=extra
Solve $\sqrt{x - 4} = 5$.
solution: $x - 4 = 25$, $x = 29$.
:::

::: problem id=x3 type=numeric answer="5" set=extra
Solve $\sqrt{3x + 1} = 4$.
solution: $3x + 1 = 16$, $x = 5$.
:::

::: problem id=x4 type=numeric answer="49" set=extra
Solve $\sqrt{x} - 3 = 4$.
solution: $\sqrt{x} = 7$, $x = 49$.
:::

::: problem id=x5 type=numeric answer="26" set=extra
Solve $\sqrt[3]{x + 1} = 3$.
solution: Cube: $x + 1 = 27$, $x = 26$.
:::

::: problem id=x6 type=numeric answer="25" set=extra
Solve $2\sqrt{x} = 10$.
solution: $\sqrt{x} = 5$, $x = 25$.
:::

::: problem id=x7 type=choice set=extra
Solve $\sqrt{x + 2} = -1$.
- [ ] $x = -1$
- [ ] $x = -3$
- [x] no solution
solution: A square root is never negative: **no solution**. (Squaring would give $x = -1$, but $\sqrt{1} = 1 \ne -1$.)
:::

::: problem id=x8 type=numeric answer="2" set=extra
Solve $\sqrt{x + 2} = x$.
solution: $x + 2 = x^2$, $(x - 2)(x + 1) = 0$. Check $-1$: $\sqrt{1} = 1 \ne -1$. Only $x = 2$.
:::

::: problem id=x9 type=choice set=extra
Squaring $\sqrt{2x + 3} = x$ gives $x = 3$ or $x = -1$. Which of them actually solve the original equation?
- [x] only 3
- [ ] only $-1$
- [ ] both
- [ ] neither
solution: $x = 3$: $\sqrt{9} = 3$ ✓. $x = -1$: $\sqrt{1} = 1 \ne -1$ ✗.
:::

::: problem id=x10 type=numeric answer="3" set=extra
Solve $\sqrt{5x - 1} = \sqrt{2x + 8}$.
solution: Square: $5x - 1 = 2x + 8$, $x = 3$. Check: $\sqrt{14} = \sqrt{14}$ ✓.
:::

::: problem id=x11 type=choice set=extra
Jo solves $\sqrt{x} + 1 = 3$ by squaring at once: $x + 1 = 9$, $x = 8$. What is right?
- [x] $x = 4$
- [ ] $x = 8$
- [ ] $x = 2$
- [ ] $x = 16$
solution: Get the root alone first: $\sqrt{x} = 2$, so $x = 4$. ($\sqrt{8} + 1 \ne 3$.)
:::

::: problem id=x12 type=numeric answer="-4" set=extra
Solve $\sqrt[3]{2x} = -2$.
solution: $2x = -8$, $x = -4$.
:::

::: problem id=x13 type=numeric answer="4" set=extra
Solve $\sqrt{x^2 + 9} = 5$ for $x > 0$.
solution: $x^2 + 9 = 25$, $x^2 = 16$, $x = 4$.
:::

::: problem id=x14 type=numeric answer="4" set=extra
A pendulum's swing time is $T = 2\sqrt{L}$ seconds for length L metres. How long is a pendulum with $T = 4$?
solution: $\sqrt{L} = 2$, $L = 4$ m.
:::

::: problem id=x15 type=numeric answer="5" set=extra
A dropped object hits the ground at speed $v = \sqrt{20d}$ m/s after falling d metres. From what height does it hit at 10 m/s?
solution: $20d = 100$, $d = 5$.
:::

::: problem id=x16 type=numeric answer="2" set=extra
Solve $\sqrt{x + 7} = x + 1$.
hint: Square, solve the quadratic, then check both answers.
solution: $x + 7 = x^2 + 2x + 1$, $x^2 + x - 6 = 0$: 2 or $-3$. Check $-3$: $\sqrt{4} = 2 \ne -2$. So $x = 2$.
:::

::: problem id=x17 type=numeric answer="9" set=extra
Solve $\sqrt{4x} = \sqrt{x} + 3$.
hint: $\sqrt{4x} = 2\sqrt{x}$.
solution: $2\sqrt{x} = \sqrt{x} + 3$, so $\sqrt{x} = 3$ and $x = 9$.
:::

::: problem id=x18 type=numeric answer="16" set=extra
Solve $x - \sqrt{x} = 12$.
hint: Let $u = \sqrt{x}$, so $x = u^2$.
solution: $u^2 - u - 12 = 0$, $(u - 4)(u + 3) = 0$. $u = \sqrt{x}$ can't be $-3$, so $u = 4$ and $x = 16$.
:::

::: problem id=x19 type=numeric answer="4" set=extra
Solve $\sqrt{x + 5} = \sqrt{x} + 1$.
hint: Square both sides; the x's cancel, leaving one root.
solution: $x + 5 = x + 2\sqrt{x} + 1$, so $2\sqrt{x} = 4$, $x = 4$. Check: $\sqrt{9} = 2 + 1$ ✓.
:::

::: problem id=x20 type=numeric answer="5" set=extra creative=true
Solve $\sqrt{2x - 1} + 2 = x$.
hint: Get the root alone, square, then check both answers.
solution: $2x - 1 = (x - 2)^2 = x^2 - 4x + 4$, so $x^2 - 6x + 5 = 0$: 1 or 5. Check 1: $1 + 2 \ne 1$ ✗. Check 5: $3 + 2 = 5$ ✓.
:::
