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
