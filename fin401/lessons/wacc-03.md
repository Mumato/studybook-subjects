---
id: wacc-03
title: Using the WACC for projects
---
The firm's WACC fits projects as risky as the firm's average project. Other projects need their own cost of capital.

::: rule
- A project with **different risk** from the firm uses the cost of capital of **comparable firms** in that business.
- Comparable firms have different debt, so remove its effect: the **asset (unlevered) beta**
$$\beta_U = \frac{E}{V}\,\beta_E + \frac{D}{V}\,\beta_D$$
then $r_U = r_f + \beta_U \times$ market risk premium.
- **Flotation costs** (fees to raise money) are added to the project's **initial investment**, not to the WACC.
:::

::: example
A comparable firm is 60% equity (beta 1.5) and 40% debt (beta 0): its asset beta is $0.6 \times 1.5 + 0.4 \times 0 = 0.9$.
:::

::: problem id=p1 type=numeric answer="0.95" tolerance=0.001
A firm is 75% equity with beta 1.2 and 25% debt with beta 0.2. What is its asset beta?
solution: $0.75 \times 1.2 + 0.25 \times 0.2 = 0.9 + 0.05 = 0.95$.
:::

::: problem id=p2 type=numeric answer="9.6" tolerance=0.01
A project's comparable firms have an asset beta of 1.1. The risk-free rate is 3% and the market risk premium 6%. What is the project's cost of capital? Type the percent.
solution: $3 + 1.1 \times 6 = 9.6\%$.
:::

::: problem id=p3 type=choice
A food company considers opening a riskier chain of restaurants. To value it, the company should discount the cash flows at:
- [ ] its own WACC
- [x] a cost of capital based on restaurant companies
- [ ] the risk-free rate, since the cash flows are estimated carefully
solution: The discount rate must match the project's risk, which is that of the restaurant business.
:::

::: problem id=p4 type=numeric answer="10.53" tolerance=0.01
A project needs \$10 million. Flotation costs are 5% of the amount raised. How much must the firm raise, in millions?
hint: After paying 5%, 95% of what's raised is left: raise $10 / 0.95$.
solution: $10 / 0.95 = 10.53$ million. The \$0.53M of fees is part of the project's cost.
:::

::: problem id=p5 type=choice
Flotation costs should be handled by:
- [x] adding them to the project's initial investment
- [ ] raising the WACC
- [ ] ignoring them, since they're paid to banks
solution: They're a real cash cost paid once at the start, so they belong in the initial investment.
:::

::: problem id=p6 type=numeric answer="2" tolerance=0.01
A project costs \$18 million and produces \$1.8 million of free cash flow a year forever. The WACC is 9%. What is its NPV, in millions?
solution: $-18 + 1.8 / 0.09 = -18 + 20 = 2$ million.
:::
