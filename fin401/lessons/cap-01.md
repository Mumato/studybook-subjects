---
id: cap-01
title: Incremental earnings
---
To value a project we need its cash flows. We start with the earnings it adds: only what changes **because** of the project counts. (Berk ch. 9)

::: rule
**Incremental earnings** (the project's own income statement):
$$EBIT = \text{revenue} - \text{costs} - \text{depreciation}$$
$$\text{Unlevered net income} = EBIT \times (1 - T_c)$$
Leave out interest: financing is handled through the cost of capital.
- Count **opportunity costs** (a building you could otherwise rent out).
- Count **side effects**, like cannibalized sales of your other products.
- Ignore **sunk costs**: money already spent that you can't get back either way.
:::

::: example
Revenue \$500,000, costs \$300,000, depreciation \$100,000, tax 25%: EBIT = \$100,000, unlevered net income = $100000 \times 0.75 = 75000$.
:::

::: problem id=p1 type=numeric answer="250000" tolerance=1
A project brings revenue of \$1,000,000 with costs of \$600,000 and depreciation of \$150,000. What is its EBIT?
solution: $1000000 - 600000 - 150000 = 250000$.
:::

::: problem id=p2 type=numeric answer="175000" tolerance=1
With a 30% tax rate, what is that project's unlevered net income?
solution: $250000 \times 0.70 = 175000$.
:::

::: problem id=p3 type=numeric answer="100000" tolerance=1
A \$500,000 machine is depreciated straight-line over 5 years to zero. What is the yearly depreciation?
solution: $500000 / 5 = 100000$.
:::

::: problem id=p4 type=choice
Last year the firm spent \$200,000 on market research for this product. In the project's cash flows, that \$200,000:
- [ ] is subtracted in year 0
- [ ] is spread over the project's life
- [x] is ignored: it's a sunk cost
solution: It's spent whether or not the project goes ahead, so it doesn't change the decision.
:::

::: problem id=p5 type=choice
The project will use a warehouse the firm owns, which it could otherwise rent out for \$50,000 a year. The \$50,000:
- [x] is a cost of the project (an opportunity cost)
- [ ] is ignored, because the firm already owns the warehouse
- [ ] is extra revenue for the project
solution: Taking the project gives up \$50,000 of rent each year: that's a real cost.
:::

::: problem id=p6 type=numeric answer="1700000" tolerance=1
A new phone will sell \$2,000,000 a year, but \$300,000 of those sales come from customers who would otherwise have bought the firm's older phone. What is the incremental revenue?
solution: $2000000 - 300000 = 1700000$: cannibalized sales aren't new.
:::
