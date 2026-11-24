---
id: cap-02
title: Free cash flow and project NPV
---
Earnings aren't cash. Free cash flow fixes that, and its NPV decides the project.

::: rule
$$FCF = \text{unlevered net income} + \text{depreciation} - \text{capital expenditures} - \Delta NWC$$
Equivalently: $FCF = (\text{revenue} - \text{costs})(1 - T_c) - \text{capex} - \Delta NWC + T_c \times \text{depreciation}$.
- Depreciation isn't paid in cash, but it lowers taxes: the **depreciation tax shield** is $T_c \times$ depreciation.
- **Net working capital** (inventory, receivables minus payables) ties up cash; increases are a cost and the NWC usually comes back at the end.
Discount the FCFs at the project's cost of capital to get the NPV.
:::

::: example
Unlevered net income \$75,000, depreciation \$100,000, no capex, NWC rises by \$20,000: $FCF = 75000 + 100000 - 20000 = 155000$.
:::

::: problem id=p1 type=numeric answer="295000" tolerance=1
Unlevered net income is \$175,000, depreciation \$150,000, no capex, and NWC rises by \$30,000. What is the FCF?
solution: $175000 + 150000 - 30000 = 295000$.
:::

::: problem id=p2 type=numeric answer="-550000" tolerance=1
In year 0 a project buys a \$500,000 machine and adds \$50,000 of working capital. What is the year-0 FCF?
solution: $-500000 - 50000 = -550000$.
:::

::: problem id=p3 type=numeric answer="15000" tolerance=1
A project's NWC goes from \$40,000 to \$55,000. What is $\Delta NWC$ (the cash it ties up)?
solution: $55000 - 40000 = 15000$.
:::

::: problem id=p4 type=numeric answer="325" tolerance=0.5
Revenue minus costs is \$400 (thousands), tax is 25%, depreciation \$100 (thousands), no capex or NWC change. What is the FCF, in thousands?
solution: $400 \times 0.75 + 0.25 \times 100 = 300 + 25 = 325$.
:::

::: problem id=p5 type=numeric answer="60000" tolerance=1
At a 30% tax rate, what is the tax shield from \$200,000 of depreciation?
solution: $0.30 \times 200000 = 60000$.
:::

::: problem id=p6 type=numeric answer="-5.26" tolerance=0.05
A project's FCFs are −\$1,000 now and \$400 a year for 3 years. At 10%, what is its NPV?
solution: $-1000 + \frac{400}{0.1}(1 - 1.1^{-3}) = -1000 + 994.74 = -5.26$.
:::

::: problem id=p7 type=numeric answer="255.48" tolerance=0.5 creative=true
A project needs a \$600 machine and \$60 of working capital now (thousands). For 3 years it earns unlevered net income of \$150 and depreciation of \$200 a year; the working capital comes back at the end of year 3. At 10%, what is its NPV, in thousands?
hint: FCFs: −660, then 350, 350, and 350 + 60 in year 3.
solution: $-660 + \frac{350}{1.1} + \frac{350}{1.1^2} + \frac{410}{1.1^3} = 255.48$.
:::
