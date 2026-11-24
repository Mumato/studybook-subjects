---
id: idr-01
title: The NPV rule
---
Should a company take a project? Compare what it costs with what it brings in, all valued today. (Berk ch. 8)

::: rule
**Net present value:** the PV of all the project's cash flows, including the cost today (a negative cash flow):
$$NPV = CF_0 + \frac{CF_1}{1 + r} + \frac{CF_2}{(1 + r)^2} + \dots$$
where $r$ is the project's **cost of capital**.
**NPV rule:** take projects with $NPV > 0$; between alternatives, take the highest NPV. NPV is the value the project adds to the firm today.
:::

::: example
Pay \$100 today to get \$40 a year for 3 years, at 8%:
$$NPV = -100 + \frac{40}{0.08}\left(1 - \frac{1}{1.08^3}\right)$$
$$NPV = -100 + 103.08 = 3.08$$
Positive, so take it: it adds \$3.08 of value.
:::

::: problem id=p1 type=numeric answer="-2.63" tolerance=0.05
A project costs \$500 and pays \$200 a year for 3 years. The cost of capital is 10%. What is its NPV?
solution: $-500 + \frac{200}{0.1}(1 - 1.1^{-3}) = -500 + 497.37 = -2.63$.
:::

::: problem id=p2 type=text answers="reject;reject it;no;don't take it;do not take it"
Should the company take that project? (accept or reject)
solution: **Reject**: its NPV is negative, so it would lose value.
:::

::: problem id=p3 type=numeric answer="14.03" tolerance=0.05
A project costs \$1,000 and pays \$600 in each of the next 2 years. At 12%, what is its NPV?
solution: $-1000 + 600/1.12 + 600/1.12^2 = 14.03$.
:::

::: problem id=p4 type=choice
For a normal project (a cost now, then inflows), as the cost of capital rises its NPV:
- [x] falls
- [ ] rises
- [ ] doesn't change
solution: The inflows are discounted more heavily, so they're worth less today.
:::

::: problem id=p5 type=numeric answer="500" tolerance=0.5
A project costs \$2,000 and pays \$150 a year forever. At 6%, what is its NPV?
solution: $-2000 + 150 / 0.06 = -2000 + 2500 = 500$.
:::

::: problem id=p6 type=choice
A project's NPV is \$2 million. This means:
- [ ] it earns 2% more than the cost of capital
- [x] taking it increases the firm's value today by \$2 million
- [ ] its cash inflows total \$2 million
solution: NPV is the value created, measured in today's dollars.
:::
