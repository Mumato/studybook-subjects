---
id: stk-test
title: Stocks test
pass: 0.8
---
::: problem id=t1 type=numeric answer="50" tolerance=0.05
The next dividend is \$2.50, dividends grow 6% a year and $r_E = 11\%$. What is the price?
solution: $2.50 / (0.11 - 0.06) = 50$.
:::

::: problem id=t2 type=choice
A stock costs \$25. Its next dividend is \$1 and dividends grow 6%. Its equity cost of capital is:
- [ ] 4%
- [ ] 6%
- [x] 10%
- [ ] 10.24%
solution: $1/25 + 6\% = 4\% + 6\% = 10\%$.
:::

::: problem id=t3 type=numeric answer="51" tolerance=0.05
A company **just paid** a \$3 dividend. Dividends grow 2% and $r_E = 8\%$. What is the price?
solution: $Div_1 = 3 \times 1.02 = 3.06$. $P_0 = 3.06 / 0.06 = 51$.
:::

::: problem id=t4 type=choice
A firm keeps 40% of its earnings and earns 20% on new investments. Its dividend growth rate is:
- [ ] 4%
- [x] 8%
- [ ] 12%
- [ ] 20%
solution: $g = 0.40 \times 20\% = 8\%$.
:::

::: problem id=t5 type=numeric answer="20" tolerance=0.05
Free cash flow next year is \$12 million, growing 3%; WACC is 9%. The firm has \$10M cash, \$50M debt and 8 million shares. What is the price per share?
hint: Enterprise value first, then add cash, subtract debt, divide by shares.
solution: $V_0 = 12 / 0.06 = 200$M. Equity $= 200 + 10 - 50 = 160$M. Per share: $160 / 8 = 20$.
:::

::: problem id=t6 type=choice
You buy a share at \$20, get a \$1 dividend and sell at \$22. Your total return is:
- [ ] 5%
- [ ] 10%
- [x] 15%
- [ ] 11%
solution: $(1 + 22 - 20) / 20 = 15\%$.
:::

::: problem id=t7 type=choice
The total payout model discounts:
- [ ] dividends only
- [x] dividends and share buybacks
- [ ] free cash flows to the whole firm
- [ ] earnings
solution: Total payout counts everything paid to shareholders: dividends and buybacks.
:::
