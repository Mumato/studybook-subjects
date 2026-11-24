---
id: stk-03
title: Total payout and free cash flow models
---
Dividends aren't the only way firms pay shareholders, and some firms pay none. Two other models value the whole firm instead.

::: rule
**Total payout model:** discount all payouts (dividends **and** share buybacks), then divide by shares:
$$P_0 = \frac{PV(\text{total dividends and buybacks})}{\text{shares outstanding}}$$
**Discounted free cash flow model:** discount the firm's free cash flows at the **WACC** to get its **enterprise value** $V_0$. Then
$$\text{Equity} = V_0 + \text{cash} - \text{debt} \qquad P_0 = \frac{\text{Equity}}{\text{shares}}$$
:::

::: example
Free cash flow next year \$10 million, growing 4%, WACC 9%: $V_0 = 10 / (0.09 - 0.04) = 200$ million. With \$20M cash and \$60M debt, equity is \$160M; over 10 million shares that's \$16 a share.
:::

::: problem id=p1 type=numeric answer="428.57" tolerance=0.5
Next year a firm will pay \$30 million in dividends and buybacks, growing 3% a year. At $r_E = 10\%$, what are all its shares worth, in millions?
solution: $30 / (0.10 - 0.03) = 428.57$ million.
:::

::: problem id=p2 type=numeric answer="21.43" tolerance=0.05
That firm has 20 million shares. What is the price per share?
solution: $428.57 / 20 = 21.43$.
:::

::: problem id=p3 type=numeric answer="100" tolerance=0.1
Free cash flow next year is \$8 million, growing 2%, and the WACC is 10%. What is the enterprise value, in millions?
solution: $8 / (0.10 - 0.02) = 100$ million.
:::

::: problem id=p4 type=numeric answer="75" tolerance=0.1
The firm has \$5 million cash and \$30 million debt. What is its equity worth, in millions?
solution: $100 + 5 - 30 = 75$ million.
:::

::: problem id=p5 type=numeric answer="15" tolerance=0.01
It has 5 million shares. What is the price per share?
solution: $75 / 5 = 15$.
:::

::: problem id=p6 type=choice
In the discounted free cash flow model, free cash flows are discounted at:
- [ ] the equity cost of capital
- [x] the weighted average cost of capital (WACC)
- [ ] the risk-free rate
solution: Free cash flow goes to both shareholders and lenders, so it's discounted at the WACC, which blends both costs.
:::

::: problem id=p7 type=choice
Enterprise value equals:
- [x] market value of equity + debt − cash
- [ ] market value of equity − debt + cash
- [ ] book value of assets
solution: It's the value of the business itself: what you'd pay for the equity, plus the debt you take on, minus the cash you get.
:::
