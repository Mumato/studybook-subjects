---
id: wacc-01
title: The weighted average cost of capital
---
A firm is paid for by shareholders and lenders, and both expect a return. The WACC blends those costs: it's the return the firm's investments must earn. (Berk ch. 12)

::: rule
$$r_{wacc} = \frac{E}{V}\,r_E + \frac{P}{V}\,r_P + \frac{D}{V}\,r_D\,(1 - T_c)$$
- $E$, $P$, $D$: **market values** of equity, preferred shares and debt; $V = E + P + D$.
- Debt's cost is taken **after tax**, because interest is tax-deductible.
- Market value of equity = shares × share price. Market value of debt = what the bonds trade for.
:::

::: example
Equity \$600M at 12%, debt \$400M at 6%, tax 25%:
$$r_{wacc} = 0.6 \times 12\% + 0.4 \times 6\% \times 0.75 = 7.2\% + 1.8\% = 9\%$$
:::

::: problem id=p1 type=numeric answer="5.92" tolerance=0.01
A firm's debt costs 8% and its tax rate is 26%. What is its after-tax cost of debt? Type the percent.
solution: $8\% \times (1 - 0.26) = 5.92\%$.
:::

::: problem id=p2 type=numeric answer="60" tolerance=0.01
Equity is worth \$300M and debt \$200M. What percent of the firm is equity?
solution: $300 / 500 = 60\%$.
:::

::: problem id=p3 type=numeric answer="8.75" tolerance=0.01
A firm is 70% equity at 11% and 30% debt at 5%; the tax rate is 30%. What is its WACC? Type the percent.
solution: $0.7 \times 11 + 0.3 \times 5 \times 0.7 = 7.7 + 1.05 = 8.75\%$.
:::

::: problem id=p4 type=numeric answer="300" tolerance=0.1
A firm has 20 million shares trading at \$15. What is the market value of its equity, in millions?
solution: $20 \times 15 = 300$ million.
:::

::: problem id=p5 type=numeric answer="98" tolerance=0.1
A firm's bonds have \$100M face value and trade at 98% of face. What is the market value of its debt, in millions?
solution: $0.98 \times 100 = 98$ million.
:::

::: problem id=p6 type=choice
The weights in the WACC should be based on:
- [x] market values
- [ ] book values from the balance sheet
- [ ] the amounts originally raised
solution: The WACC is about what investors expect **now**, on what their claims are worth now: market values.
:::

::: problem id=p7 type=numeric answer="8.5" tolerance=0.01 creative=true
A firm is 50% common equity (12%), 10% preferred shares (7%) and 40% debt (6%); the tax rate is 25%. What is its WACC? Type the percent.
hint: Preferred dividends aren't tax-deductible: no tax adjustment for them.
solution: $0.5 \times 12 + 0.1 \times 7 + 0.4 \times 6 \times 0.75 = 6 + 0.7 + 1.8 = 8.5\%$.
:::
