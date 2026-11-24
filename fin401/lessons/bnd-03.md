---
id: bnd-03
title: Yields, prices and risk
---
Bond prices move opposite to yields. How much they move, and how much yield investors demand, depends on the bond.

::: rule
- When yields **rise**, bond prices **fall** (and the reverse).
- **Interest rate risk** is larger for **longer maturities** and **lower coupons**: more of their value comes far in the future.
- **Credit risk:** the issuer might not pay. Riskier issuers pay a higher yield.
- **Credit spread** = corporate yield − government yield of the same maturity.
:::

::: example
A 10-year zero (\$1,000 face): at 5% it costs \$613.91; at 6% it costs \$558.39. A one-point rise in yield cut the price by 9.04%.
:::

::: problem id=p1 type=numeric answer="-0.94" tolerance=0.02
A 1-year zero's yield rises from 5% to 6%. By what percent does its price change? Type the percent (negative for a fall).
solution: $1000/1.05 = 952.38$, $1000/1.06 = 943.40$. Change: $943.40/952.38 - 1 = -0.94\%$. Much smaller than the 10-year bond's fall.
:::

::: problem id=p2 type=choice
Which bond's price is most sensitive to a change in interest rates?
- [ ] a 2-year bond with an 8% coupon
- [x] a 30-year zero-coupon bond
- [ ] a 5-year bond with a 6% coupon
solution: Long maturity and no coupons: all its value comes in 30 years.
:::

::: problem id=p3 type=numeric answer="1.7" tolerance=0.01
A company's 10-year bonds yield 6.2%; 10-year Government of Canada bonds yield 4.5%. What is the credit spread, in percentage points?
solution: $6.2 - 4.5 = 1.7$ points.
:::

::: problem id=p4 type=text answers="fall;falls;go down;goes down;drop;drops;decrease;decreases"
When market interest rates rise, the prices of existing bonds ...
solution: They **fall**: their fixed payments are worth less at the higher rate.
:::

::: problem id=p5 type=numeric answer="783.53" tolerance=1
A 5-year zero (\$1,000 face) yielded 4%. Its yield rises to 5%. What is its new price?
solution: $1000 / 1.05^5 = 783.53$, so \$783.53 (down from \$821.93).
:::

::: problem id=p6 type=choice
Compared with a AAA-rated company, a BB-rated company's bonds will usually have:
- [x] a higher yield
- [ ] a lower yield
- [ ] the same yield
solution: Lower rating, more credit risk, so investors demand a higher yield.
:::

::: problem id=p7 type=numeric answer="8" tolerance=0.05 creative=true
A 2-year bond (\$1,000 face, 10% annual coupon) costs \$1,035.67. What is its yield to maturity? Type the percent.
hint: Try whole-number yields: price the bond at each until it matches. It's a premium bond, so the yield is below 10%.
solution: At 8%: $100/1.08 + 1100/1.08^2 = 92.59 + 943.07 = 1035.67$. The YTM is 8%.
:::
