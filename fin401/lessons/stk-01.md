---
id: stk-01
title: Stock prices and returns
---
A share is worth what it will pay you: dividends while you hold it, then the price when you sell. (Berk ch. 7)

::: rule
Holding a stock for one year at equity cost of capital $r_E$:
$$P_0 = \frac{Div_1 + P_1}{1 + r_E}$$
Its total return has two parts:
$$r = \underbrace{\frac{Div_1}{P_0}}_{\text{dividend yield}} + \underbrace{\frac{P_1 - P_0}{P_0}}_{\text{capital gain rate}}$$
Over many years, the price is the PV of all expected future dividends (the **dividend discount model**).
:::

::: example
A stock will pay a \$2 dividend and should then sell for \$52. At 10%:
$$P_0 = \frac{2 + 52}{1.10} = 49.09$$
:::

::: problem id=p1 type=numeric answer="38.43" tolerance=0.05
A stock will pay \$1.50 next year and then sell for \$40. At 8%, what is it worth today?
solution: $(1.50 + 40) / 1.08 = 38.43$.
:::

::: problem id=p2 type=numeric answer="12" tolerance=0.01
You buy a share for \$50, receive a \$2 dividend and sell for \$54. What was your total return? Type the percent.
solution: $(2 + 54 - 50) / 50 = 12\%$.
:::

::: problem id=p3 type=numeric answer="4" tolerance=0.01
In the last problem, what was the dividend yield? Type the percent.
solution: $2 / 50 = 4\%$.
:::

::: problem id=p4 type=numeric answer="8" tolerance=0.01
And the capital gain rate? Type the percent.
solution: $(54 - 50) / 50 = 8\%$. Check: $4\% + 8\% = 12\%$.
:::

::: problem id=p5 type=numeric answer="25.03" tolerance=0.05
A stock pays \$1 a year for 3 years, then sells for \$30 right after the third dividend. At 10%, what is it worth?
solution: $\frac{1}{1.1} + \frac{1}{1.1^2} + \frac{1 + 30}{1.1^3} = 25.03$.
:::

::: problem id=p6 type=choice
According to the dividend discount model, a stock's price equals:
- [ ] its book value per share
- [x] the present value of its expected future dividends
- [ ] next year's earnings times 10
solution: The price is the PV of all the dividends the share will ever pay.
:::
