---
id: idr-test
title: Investment decision rules test
pass: 0.8
---
::: problem id=t1 type=numeric answer="25.04" tolerance=0.05
A project costs \$2,000 and pays \$800 a year for 3 years. At 9%, what is its NPV?
solution: $-2000 + \frac{800}{0.09}(1 - 1.09^{-3}) = 25.04$.
:::

::: problem id=t2 type=choice
A project's IRR is 14% and its cost of capital 12%. Its cash flows are a cost now, then inflows. You should:
- [x] accept it
- [ ] reject it
- [ ] need its payback period to decide
solution: For a normal project, IRR above the cost of capital means positive NPV.
:::

::: problem id=t3 type=numeric answer="15" tolerance=0.01
Pay \$800 now, get \$920 in one year. What is the IRR? Type the percent.
solution: $920 / 800 - 1 = 15\%$.
:::

::: problem id=t4 type=choice
A project costs \$900 and pays \$300 a year for 4 years. Its payback period is:
- [ ] 2 years
- [x] 3 years
- [ ] 4 years
- [ ] 3.33 years
solution: $900 / 300 = 3$ years.
:::

::: problem id=t5 type=numeric answer="0.25" tolerance=0.001
A project costs \$600 and has an NPV of \$150. What is its profitability index?
solution: $150 / 600 = 0.25$.
:::

::: problem id=t6 type=choice
Projects A (NPV \$120, IRR 30%) and B (NPV \$200, IRR 20%) are mutually exclusive. Take:
- [ ] A, the higher IRR
- [x] B, the higher NPV
- [ ] both
solution: Only one can be taken: pick the one that adds the most value, B.
:::

::: problem id=t7 type=choice
Which rule always picks the choice that adds the most value to the firm?
- [x] NPV
- [ ] IRR
- [ ] payback
- [ ] profitability index
solution: NPV measures value created directly. The others can disagree with it in some cases.
:::
