---
id: finb-test
title: Final practice exam B
pass: 0.7
---
::: problem id=t1 type=numeric answer="385"
A pollster wants a 95% margin of error of 0.05 and has no earlier estimate. How many people should be sampled?
solution: $(1.96/0.05)^2 \times 0.25 = 384.16$; round up to 385.
:::

::: problem id=t2 type=numeric answer="2.5"
9 pairs have mean difference $\bar{d} = 2.5$ and $s_d = 3$. What is the paired $t$?
solution: $2.5/(3/3) = 2.5$.
:::

::: problem id=t3 type=numeric answer="2.828" tolerance=0.01
Sample 1: $n = 9$, $s = 6$. Sample 2: $n = 16$, $s = 8$. What is the standard error of $\bar{x}_1 - \bar{x}_2$? (3 decimals)
solution: $\sqrt{36/9 + 64/16} = \sqrt{8} = 2.828$.
:::

::: problem id=t4 type=numeric answer="10"
In a two-way table, a row total is 50, a column total is 40, and the grand total is 200. What is the expected count in that cell?
solution: $50 \times 40/200 = 10$.
:::

::: problem id=t5 type=numeric answer="25"
$r = 0.5$. What percent of the variation in $y$ does the regression line explain?
solution: $r^2 = 0.25$: 25%.
:::

::: problem id=t6 type=numeric answer="2"
$r = 0.5$, $s_x = 2$, $s_y = 8$. What is the slope of the least-squares line?
solution: $0.5 \times 8/2 = 2$.
:::

::: problem id=t7 type=numeric answer="20"
25% of shoppers use a loyalty card. Among 80 random shoppers, how many are expected to use one?
solution: Binomial mean: $80 \times 0.25 = 20$.
:::

::: problem id=t8 type=choice
A test gives $p = 0.003$ and $\alpha = 0.01$. The conclusion is:
- [x] reject $H_0$
- [ ] fail to reject $H_0$
- [ ] $H_0$ is proven false with certainty
solution: $0.003 \le 0.01$: reject. That's strong evidence, not certainty.
:::
