---
id: tvm-03
title: Growing cash flows and interest rates
---
Cash flows often grow (dividends, rents), and rates are often quoted per year but paid more often.

::: rule
**Growing perpetuity** (first payment $C$ next period, growing at $g < r$):
$$PV = \frac{C}{r - g}$$
**Growing annuity** for $n$ periods:
$$PV = \frac{C}{r - g}\left(1 - \left(\frac{1+g}{1+r}\right)^n\right)$$
An **APR** compounded $k$ times a year has the **effective annual rate**
$$EAR = \left(1 + \frac{APR}{k}\right)^k - 1$$
To get a rate for a different period, convert through the EAR: $(1 + EAR)^{1/12} - 1$ is the monthly rate.
:::

::: example
\$1,000 next year, growing 2% a year forever, at 7%:
$$PV = \frac{1000}{0.07 - 0.02} = 20000$$
A 12% APR compounded monthly is really $(1.01)^{12} - 1 = 12.68\%$ a year.
:::

::: problem id=p1 type=numeric answer="100000" tolerance=1
A payment of \$5,000 next year grows 3% a year forever. What is it worth at 8%?
solution: $5000 / (0.08 - 0.03) = 100000$, so \$100,000.
:::

::: problem id=p2 type=numeric answer="12.68" tolerance=0.02
What is the effective annual rate of a 12% APR compounded monthly? Type the percent.
solution: $(1 + 0.12/12)^{12} - 1 = 12.68\%$.
:::

::: problem id=p3 type=numeric answer="0.4868" tolerance=0.001
An account pays an effective 6% a year. What is its monthly rate? Type the percent.
solution: $1.06^{1/12} - 1 = 0.004868$, so 0.4868% a month.
:::

::: problem id=p4 type=numeric answer="122500.41" tolerance=5
You'll get \$10,000 next year, growing 3% a year, for 20 years. What is it worth today at 8%?
solution: $\frac{10000}{0.05}\left(1 - (1.03/1.08)^{20}\right) = 122500.41$.
:::

::: problem id=p5 type=choice
As a saver, which account pays more per year?
- [x] 10% APR compounded monthly
- [ ] 10.4% compounded once a year
solution: Monthly: $(1 + 0.1/12)^{12} - 1 = 10.47\%$, which beats 10.4%.
:::

::: problem id=p6 type=numeric answer="0.4939" tolerance=0.001
Canadian mortgage rates are quoted as an APR compounded **semi-annually**. For 6% that way, what is the monthly rate? Type the percent.
hint: EAR first: $1.03^2 - 1$. Then the twelfth root.
solution: $EAR = 1.03^2 - 1 = 6.09\%$; monthly $= 1.0609^{1/12} - 1 = 0.4939\%$.
:::

::: problem id=p7 type=numeric answer="1919.42" tolerance=1 creative=true
A \$300,000 Canadian mortgage at 6% (compounded semi-annually) is paid monthly for 25 years. What is the monthly payment?
hint: Use the monthly rate from the last problem and $n = 300$ months.
solution: $i = 0.4939\%$. $C = \frac{300000 \times i}{1 - (1+i)^{-300}} = 1919.42$, so \$1,919.42 a month.
:::
