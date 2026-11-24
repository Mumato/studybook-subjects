---
id: ci-test
title: Confidence intervals test
pass: 0.8
---
::: problem id=t1 type=numeric answer="3.92"
$\sigma = 12$, $n = 36$. What is the 95% margin of error?
solution: $1.96 \times 12/6 = 3.92$.
:::

::: problem id=t2 type=numeric answer="68.08"
$\bar{x} = 72$, $\sigma = 12$, $n = 36$. What is the lower end of the 95% interval?
solution: $72 - 3.92 = 68.08$.
:::

::: problem id=t3 type=numeric answer="4.262" tolerance=0.01
$n = 16$, $s = 8$, $t^* = 2.131$. What is the margin of error? (3 decimals)
solution: $2.131 \times 8/4 = 4.262$.
:::

::: problem id=t4 type=numeric answer="19"
A t interval comes from a sample of 20. How many degrees of freedom?
solution: $20 - 1 = 19$.
:::

::: problem id=t5 type=numeric answer="0.031" tolerance=0.001
$\hat{p} = 0.52$, $n = 1000$. What is the 95% margin of error? (3 decimals)
solution: $1.96\sqrt{0.52 \times 0.48/1000} = 1.96 \times 0.0158 = 0.031$.
:::

::: problem id=t6 type=numeric answer="166"
$\sigma = 15$. How large a sample gives a 99% margin of error of 3 ($z^* = 2.576$)?
solution: $(2.576 \times 15/3)^2 = 12.88^2 = 165.9$; round up to 166.
:::

::: problem id=t7 type=choice
Which change makes a confidence interval **narrower**?
- [ ] Raising the confidence level
- [x] Taking a bigger sample
- [ ] Using $t^*$ with fewer degrees of freedom
- [ ] A bigger $\sigma$
solution: The margin has $\sqrt{n}$ in the denominator. The other changes widen it.
:::

::: problem id=t8 type=choice
You must estimate a mean but don't know $\sigma$. You should use:
- [ ] $z^*$ with $s$ in place of $\sigma$
- [x] $t^*$ with $df = n - 1$
- [ ] the proportion formula
solution: Unknown $\sigma$, estimated by $s$: the t interval.
:::
