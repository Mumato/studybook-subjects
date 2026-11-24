---
id: wacc-02
title: Estimating the costs of equity and debt
---
Nobody tells you a firm's cost of equity: you estimate it. The main tool is the CAPM.

::: rule
**CAPM:**
$$r_E = r_f + \beta_E \times (E[R_{mkt}] - r_f)$$
$\beta$ measures **market (systematic) risk**: how much the stock moves with the market. $E[R_{mkt}] - r_f$ is the **market risk premium**.
Other estimates:
- **Dividend growth model:** $r_E = \dfrac{Div_1}{P_0} + g$
- **Cost of debt:** the **yield to maturity** on the firm's bonds (not their coupon rate).
- **Preferred shares:** $r_P = \dfrac{Div_P}{P_P}$
:::

::: example
Risk-free rate 3%, beta 1.2, market risk premium 6%:
$$r_E = 3\% + 1.2 \times 6\% = 10.2\%$$
:::

::: problem id=p1 type=numeric answer="8" tolerance=0.01
The risk-free rate is 4%, a stock's beta is 0.8 and the market risk premium is 5%. What is its cost of equity? Type the percent.
solution: $4 + 0.8 \times 5 = 8\%$.
:::

::: problem id=p2 type=numeric answer="12.5" tolerance=0.01
The risk-free rate is 3.5%, the market's expected return 9.5% and a stock's beta 1.5. What is its cost of equity? Type the percent.
hint: The market risk premium is the market's return minus the risk-free rate.
solution: Premium $= 9.5 - 3.5 = 6\%$. $r_E = 3.5 + 1.5 \times 6 = 12.5\%$.
:::

::: problem id=p3 type=numeric answer="9" tolerance=0.01
A stock costs \$50, its next dividend is \$2.50 and dividends grow 4%. What is its cost of equity? Type the percent.
solution: $2.50 / 50 + 4\% = 5\% + 4\% = 9\%$.
:::

::: problem id=p4 type=numeric answer="8" tolerance=0.01
A preferred share pays \$4 a year and costs \$50. What is the cost of preferred? Type the percent.
solution: $4 / 50 = 8\%$.
:::

::: problem id=p5 type=choice
A firm's bonds have a 5% coupon but trade at a discount, with a 7% yield to maturity. Its pre-tax cost of debt is:
- [ ] 5%, the coupon rate
- [x] 7%, the yield to maturity
- [ ] 6%, the average
solution: The cost of debt is what lenders expect to earn **now**: the current yield to maturity.
:::

::: problem id=p6 type=choice
In the CAPM, a stock's beta measures:
- [ ] its total volatility
- [x] how sensitive its returns are to the market's
- [ ] its dividend yield
solution: Beta captures only market risk: risk that can't be diversified away, which is what investors are paid for.
:::

::: problem id=p7 type=open creative=true
The CAPM gives a firm a cost of equity of 10%, but the dividend growth model gives 12%. What would you do, and why?
solution: Each estimate rests on guesses: beta and the market premium for the CAPM, the growth rate for the dividend model (which is very sensitive to it). Check the inputs, compare with similar firms, and often use an average or the estimate with the more reliable inputs. Most practitioners lean on the CAPM.
:::
