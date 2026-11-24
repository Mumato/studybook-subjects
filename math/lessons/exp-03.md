---
id: exp-03
title: Log rules
---
::: rule
- $\log_b(xy) = \log_b x + \log_b y$
- $\log_b\left(\frac{x}{y}\right) = \log_b x - \log_b y$
- $\log_b(x^n) = n\log_b x$
- **change of base:** $\log_b x = \frac{\ln x}{\ln b}$

There's no rule for $\log(x + y)$.
:::

::: example
$\log 50 + \log 2 = \log 100 = 2$.
:::

::: example
$\log_2(8^5) = 5\log_2 8 = 5 \times 3 = 15$.
:::

::: problem id=p1 type=numeric answer="5"
$\log_2 8 + \log_2 4 = ?$
solution: $3 + 2 = 5$ (or $\log_2 32 = 5$).
:::

::: problem id=p2 type=numeric answer="2"
$\log 50 + \log 2 = ?$ (base 10)
solution: $\log 100 = 2$.
:::

::: problem id=p3 type=numeric answer="2"
$\log_3 81 - \log_3 9 = ?$
solution: $\log_3 9 = 2$.
:::

::: problem id=p4 type=numeric answer="15"
$\log_2(8^5) = ?$
solution: $5 \times 3 = 15$.
:::

::: problem id=p5 type=numeric answer="0.8"
$\log_b 2 = 0.3$ and $\log_b 3 = 0.5$. What is $\log_b 6$?
solution: $\log_b(2 \cdot 3) = 0.3 + 0.5 = 0.8$.
:::

::: problem id=p6 type=numeric answer="1"
With $\log_b 3 = 0.5$, what is $\log_b 9$?
solution: $\log_b(3^2) = 2 \times 0.5 = 1$.
:::

::: problem id=p7 type=numeric answer="1/3"
$\log_8 2 = ?$
hint: Which power of 8 is 2?
solution: $8^{\frac{1}{3}} = 2$.
:::

::: problem id=p8 type=choice
$\log a + \log b = ?$
- [x] $\log(ab)$
- [ ] $\log(a + b)$
- [ ] $\log a \cdot \log b$
solution: Adding logs multiplies the inside.
:::
