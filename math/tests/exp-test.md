---
id: exp-test
title: Exponentials and logarithms test
pass: 0.8
---
::: problem id=t1 type=numeric answer="32"
$f(x) = 2^x$. What is $f(5)$?
solution: 32.
:::

::: problem id=t2 type=numeric answer="4"
$\log_3 81 = ?$
solution: $3^4 = 81$.
:::

::: problem id=t3 type=numeric answer="2"
$\log 4 + \log 25 = ?$ (base 10)
solution: $\log 100 = 2$.
:::

::: problem id=t4 type=numeric answer="12"
$\log_2(8^4) = ?$
solution: $4 \times 3 = 12$.
:::

::: problem id=t5 type=numeric answer="3"
Solve $5^x = 125$.
solution: $x = 3$.
:::

::: problem id=t6 type=numeric answer="ln(7)"
Solve $e^x = 7$.
solution: $x = \ln 7$.
:::

::: problem id=t7 type=numeric answer="1331"
1000 grows 10% per year. How much after 3 years?
solution: $1000 \times 1.1^3 = 1331$.
:::

::: problem id=t8 type=numeric answer="25"
100 g has a half-life of 2 hours. How much is left after 4 hours?
solution: $100 \to 50 \to 25$ g.
:::

::: problem id=t9 type=numeric answer="3/4"
$f(x) = 6\left(\frac{1}{2}\right)^x$. What is $f(3)$?
solution: $6 \cdot \frac{1}{8} = \frac{3}{4}$.
:::

::: problem id=t10 type=choice
Which function shows decay?
- [ ] $y = 0.5 \cdot 3^x$
- [x] $y = 4(0.7)^x$
- [ ] $y = 2^x + 1$
- [ ] $y = 10(1.2)^x$
solution: Only $4(0.7)^x$ has a base between 0 and 1.
:::

::: problem id=t11 type=numeric answer="-5"
$\log_2 \frac{1}{32} = ?$
solution: $2^{-5} = \frac{1}{32}$.
:::

::: problem id=t12 type=numeric answer="ln(2)/0.03" tolerance="0.01"
$A = 200e^{0.03t}$. How long until A doubles? (exact or to hundredths)
solution: $e^{0.03t} = 2$, so $t = \frac{\ln 2}{0.03} \approx 23.10$.
:::

::: problem id=t13 type=numeric answer="2"
$\log_6 9 + \log_6 4 = ?$
solution: $\log_6 36 = 2$.
:::

::: problem id=t14 type=numeric answer="1.5"
$\log_b 2 = 0.4$ and $\log_b 5 = 0.7$. What is $\log_b 20$?
solution: $20 = 2^2 \cdot 5$: $0.8 + 0.7 = 1.5$.
:::

::: problem id=t15 type=numeric answer="5/3"
Solve $8^x = 32$.
solution: $2^{3x} = 2^5$: $x = \frac{5}{3}$.
:::

::: problem id=t16 type=numeric answer="10"
Solve $\log_3(x - 1) = 2$.
solution: $x - 1 = 9$, $x = 10$.
:::

::: problem id=t17 type=numeric answer="2"
Solve $\log_2 x + \log_2(x + 6) = 4$.
solution: $x(x + 6) = 16$, so $x^2 + 6x - 16 = 0$.
$(x + 8)(x - 2) = 0$. Reject $-8$ (log of a negative): $x = 2$.
:::

::: problem id=t18 type=numeric answer="15"
A 240 mg dose has a half-life of 6 hours. How many mg are left after one day?
solution: 24 hours is 4 half-lives: $240 \div 16 = 15$ mg.
:::
