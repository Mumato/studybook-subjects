---
id: idr-03
title: Payback, profitability index and choosing projects
---
Two more rules you'll meet in practice, and how to choose when you can't take everything.

::: rule
- **Payback period:** how long until the cash inflows repay the cost. Simple, but it ignores the time value of money and everything after the cutoff.
- **Profitability index:** $PI = \dfrac{NPV}{\text{resources used}}$ (usually the initial investment). With a **limited budget**, rank projects by PI and take them from the top.
- **Mutually exclusive projects** (only one can be taken): pick the **highest NPV**.
:::

::: example
Cost \$1,000, then \$300, \$400, \$500. After 2 years \$700 is back; \$300 more is needed from the \$500 of year 3: $300/500 = 0.6$. Payback: **2.6 years**.
:::

::: problem id=p1 type=numeric answer="3" tolerance=0.01
A project costs \$600 and pays \$200 a year. What is its payback period, in years?
solution: $600 / 200 = 3$ years.
:::

::: problem id=p2 type=numeric answer="2.5" tolerance=0.01
A project costs \$1,000 and pays \$400 a year for 3 years. What is its payback period, in years?
solution: After 2 years \$800 is back; the last \$200 takes half of year 3: 2.5 years.
:::

::: problem id=p3 type=numeric answer="0.3" tolerance=0.001
A project costs \$1,000 and has an NPV of \$300. What is its profitability index?
solution: $300 / 1000 = 0.3$.
:::

::: problem id=p4 type=choice
You have a fixed budget and more good projects than you can afford. The best way to choose is to:
- [ ] take the projects with the shortest payback
- [ ] take the largest projects first
- [x] rank by profitability index and take the best until the budget runs out
solution: The PI is value per dollar of budget, which is exactly what's scarce.
:::

::: problem id=p5 type=choice
Two projects are mutually exclusive. Project X has NPV \$50 and IRR 25%; project Y has NPV \$80 and IRR 18%. Choose:
- [ ] X
- [x] Y
solution: Pick the highest NPV: Y adds more value.
:::

::: problem id=p6 type=choice
The main weakness of the payback rule is that it:
- [x] ignores the time value of money and cash flows after the cutoff
- [ ] is hard to calculate
- [ ] always rejects good projects
solution: A dollar in year 3 counts the same as one in year 1, and a huge payoff after the cutoff doesn't count at all.
:::
