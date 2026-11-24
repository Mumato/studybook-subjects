---
id: cap-03
title: CCA tax shields and sensitivity
---
In Canada, tax depreciation follows the **Capital Cost Allowance** (CCA) system: a fixed rate on a declining balance, by asset class.

::: rule
- Each year's CCA = CCA rate $d$ × the **undepreciated capital cost** (UCC) left in the class.
- **Half-year rule:** in the first year only half the cost is added, so year-1 CCA is $C \times d / 2$.
- The PV of all the CCA tax shields, at cost of capital $k$ and tax rate $T$, forever:
$$PV = \frac{C\,d\,T}{d + k} \times \frac{1 + 0.5k}{1 + k}$$
First-year tax rules have changed over the years: use the version your textbook uses.

**Sensitivity analysis:** change one input (price, sales, costs) and see how the NPV moves. **Break-even:** the input value that makes $NPV = 0$.
:::

::: example
A \$100,000 machine, CCA rate 20%, tax 25%, cost of capital 10%:
$$PV = \frac{100000 \times 0.2 \times 0.25}{0.2 + 0.1} \times \frac{1.05}{1.10}$$
$$PV = 15909.09$$
:::

::: problem id=p1 type=numeric answer="8788.27" tolerance=1
A \$50,000 asset has a 30% CCA rate. The tax rate is 26% and the cost of capital 12%. What is the PV of its CCA tax shield?
solution: $\frac{50000 \times 0.3 \times 0.26}{0.42} \times \frac{1.06}{1.12} = 8788.27$.
:::

::: problem id=p2 type=numeric answer="10000" tolerance=1
With the half-year rule, what is the first-year CCA on a \$100,000 asset at a 20% rate?
solution: $100000 \times 0.20 / 2 = 10000$.
:::

::: problem id=p3 type=numeric answer="18000" tolerance=1
After that first year the UCC is \$90,000. What is the second-year CCA?
solution: $90000 \times 0.20 = 18000$.
:::

::: problem id=p4 type=choice
Why does a CCA tax shield have value?
- [ ] CCA is cash the government pays the firm
- [x] CCA is deducted from taxable income, so the firm pays less tax
- [ ] CCA raises the asset's resale price
solution: Each dollar of CCA saves $T$ dollars of tax.
:::

::: problem id=p5 type=choice
A project's NPV changes a lot when the sales forecast changes, but barely when costs change. Management should:
- [x] spend more effort getting the sales forecast right
- [ ] spend more effort on the cost estimates
- [ ] ignore both: the NPV is positive
solution: That's what sensitivity analysis is for: it shows which inputs matter most.
:::

::: problem id=p6 type=choice
The break-even sales level of a project is the level at which:
- [ ] accounting profit is highest
- [x] the NPV is zero
- [ ] the payback period is one year
solution: Below it the project loses value; above it, it adds value.
:::
