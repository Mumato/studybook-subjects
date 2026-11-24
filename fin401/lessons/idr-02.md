---
id: idr-02
title: The IRR rule
---
The internal rate of return is the project's own "interest rate". It's popular, but it can mislead.

::: rule
The **IRR** is the discount rate that makes $NPV = 0$.
**IRR rule:** take the project if its IRR is above the cost of capital.
For a normal project (cost first, then inflows) this agrees with NPV. It can fail when:
- cash flows change sign more than once (there can be **several IRRs** or none),
- you must choose between projects (**mutually exclusive**): the higher IRR isn't always the higher NPV, especially when projects differ in size or timing.
When IRR and NPV disagree, **trust NPV**.
:::

::: example
Pay \$100 today, get \$110 in a year: $-100 + 110/(1 + IRR) = 0$, so $IRR = 10\%$. With a cost of capital of 8%, take it.
:::

::: problem id=p1 type=numeric answer="15" tolerance=0.01
Pay \$1,000 today and get \$1,150 in one year. What is the IRR? Type the percent.
solution: $1150 / 1000 - 1 = 15\%$.
:::

::: problem id=p2 type=numeric answer="10" tolerance=0.01
Pay \$500 today and get \$605 in two years. What is the IRR? Type the percent.
solution: $(605/500)^{1/2} - 1 = 1.21^{1/2} - 1 = 10\%$.
:::

::: problem id=p3 type=numeric answer="8" tolerance=0.01
A project costs \$1,000 and pays \$80 a year forever. What is its IRR? Type the percent.
solution: $-1000 + 80/IRR = 0$, so $IRR = 8\%$.
:::

::: problem id=p4 type=choice
A project's IRR is 11% and its cost of capital is 13%. You should:
- [ ] take it: 11% is a good return
- [x] reject it
- [ ] take it only if it's large
solution: IRR below the cost of capital means negative NPV: reject.
:::

::: problem id=p5 type=choice
A project's cash flows are −\$100, +\$230, −\$132. Why is the IRR rule unreliable here?
- [x] The cash flows change sign twice, so there can be more than one IRR
- [ ] Projects with negative cash flows have no NPV
- [ ] The IRR is always 0 for such projects
solution: Each change of sign can add an IRR. This one has two (10% and 20%), so "IRR above the cost of capital" has no clear meaning. Use NPV.
:::

::: problem id=p6 type=numeric answer="13.07" tolerance=0.05
A project costs \$1,000 and pays \$600 in each of the next 2 years. What is its IRR? Type the percent.
hint: Try rates until the NPV is 0, or use your calculator's IRR function. At 12% the NPV is \$14.03, so the IRR is a bit above 12%.
solution: $600/1.1307 + 600/1.1307^2 = 1000$: the IRR is 13.07%.
:::

::: problem id=p7 type=choice creative=true
You can take **only one** of two projects, at a 10% cost of capital. A: pay \$100, get \$150 in a year (IRR 50%, NPV \$36.36). B: pay \$1,000, get \$1,300 in a year (IRR 30%, NPV \$181.82). Which should you take?
- [ ] A, because its IRR is higher
- [x] B, because its NPV is higher
- [ ] Both, since both IRRs beat 10%
solution: B adds \$181.82 of value; A only \$36.36. IRR ignores scale: a high return on a small amount can be worth less. When they disagree, follow NPV.
:::
