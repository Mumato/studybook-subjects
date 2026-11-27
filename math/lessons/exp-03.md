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

::: problem id=x1 type=numeric answer="2" set=extra
$\log_6 4 + \log_6 9 = ?$
solution: $\log_6 36 = 2$.
:::

::: problem id=x2 type=numeric answer="4" set=extra
$\log_2 48 - \log_2 3 = ?$
solution: $\log_2 16 = 4$.
:::

::: problem id=x3 type=numeric answer="8" set=extra
$\log_3(9^4) = ?$
solution: $4 \log_3 9 = 4 \times 2 = 8$.
:::

::: problem id=x4 type=numeric answer="3" set=extra
$3\log 5 + 3\log 2 = ?$ (base 10)
solution: $3(\log 5 + \log 2) = 3\log 10 = 3$.
:::

::: problem id=x5 type=numeric answer="3" set=extra
$\log_4 2 + \log_4 32 = ?$
solution: $\log_4 64 = 3$.
:::

::: problem id=x6 type=numeric answer="0.2" set=extra
$\log_b 2 = 0.3$ and $\log_b 3 = 0.5$. What is $\log_b \frac{3}{2}$?
solution: $0.5 - 0.3 = 0.2$.
:::

::: problem id=x7 type=numeric answer="0.9" set=extra
$\log_b 2 = 0.3$. What is $\log_b 8$?
solution: $\log_b(2^3) = 3 \times 0.3 = 0.9$.
:::

::: problem id=x8 type=numeric answer="1.1" set=extra
$\log_b 2 = 0.3$ and $\log_b 3 = 0.5$. What is $\log_b 12$?
solution: $12 = 2^2 \cdot 3$: $0.6 + 0.5 = 1.1$.
:::

::: problem id=x9 type=choice set=extra
Expand $\log(x^3 y)$.
- [x] $3\log x + \log y$
- [ ] $3\log(xy)$
- [ ] $\log 3x + \log y$
- [ ] $3\log x \cdot \log y$
solution: Product rule, then power rule: $\log x^3 + \log y = 3\log x + \log y$.
:::

::: problem id=x10 type=choice set=extra
Which of these is **not** a log rule?
- [x] $\log(a + b) = \log a + \log b$
- [ ] $\log\frac{a}{b} = \log a - \log b$
- [ ] $\log a^n = n\log a$
- [ ] $\log(ab) = \log a + \log b$
solution: There is no rule for the log of a sum. Try $a = b = 1$: $\log 2 \ne 0$.
:::

::: problem id=x11 type=numeric answer="3/2" set=extra
Use change of base: $\log_4 8 = ?$
solution: $\frac{\ln 8}{\ln 4} = \frac{3\ln 2}{2\ln 2} = \frac{3}{2}$.
:::

::: problem id=x12 type=numeric answer="ln(5)/ln(2)" tolerance="0.01" set=extra
$\log_2 5 = ?$ (to hundredths, or exact)
solution: $\frac{\ln 5}{\ln 2} \approx 2.32$.
:::

::: problem id=x13 type=numeric answer="2" set=extra
$2\log 5 + \log 4 = ?$ (base 10)
solution: $\log 25 + \log 4 = \log 100 = 2$.
:::

::: problem id=x14 type=numeric answer="3" set=extra
$\log_3 54 - \log_3 2 = ?$
solution: $\log_3 27 = 3$.
:::

::: problem id=x15 type=numeric answer="3/4" set=extra
$\log_{16} 8 = ?$
solution: $\frac{\log_2 8}{\log_2 16} = \frac{3}{4}$.
:::

::: problem id=x16 type=numeric answer="0" set=extra
Sam writes $\log 2 + \log 5 = \log 7$. What is $\log 2 + \log 5 - 1$ really? (base 10)
solution: Adding logs multiplies: $\log 2 + \log 5 = \log 10 = 1$. So the value is $1 - 1 = 0$.
:::

::: problem id=x17 type=numeric answer="3" set=extra
$\log_2 3 \cdot \log_3 8 = ?$
hint: Write both with change of base using ln.
solution: $\frac{\ln 3}{\ln 2} \cdot \frac{\ln 8}{\ln 3} = \frac{\ln 8}{\ln 2} = \log_2 8 = 3$.
:::

::: problem id=x18 type=numeric answer="1" set=extra
$\log_b x = 2$ and $\log_b y = 5$. What is $\log_b \frac{x^3}{y}$?
hint: Quotient rule, then power rule.
solution: $3\log_b x - \log_b y = 6 - 5 = 1$.
:::

::: problem id=x19 type=numeric answer="0" set=extra
$\log_b x = 4$ and $\log_b y = -1$. What is $\log_b(\sqrt{x}\, y^2)$?
hint: $\sqrt{x} = x^{1/2}$.
solution: $\frac{1}{2}\log_b x + 2\log_b y = 2 - 2 = 0$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
Work out the product $\log_2 3 \cdot \log_3 4 \cdot \log_4 5 \cdot \log_5 6 \cdot \log_6 7 \cdot \log_7 8$.
hint: Change every factor to ln and look for cancelling.
solution: Each $\ln$ on top cancels the next one below.
What is left: $\frac{\ln 8}{\ln 2} = \log_2 8 = 3$.
:::
