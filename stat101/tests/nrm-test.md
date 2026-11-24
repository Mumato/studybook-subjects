---
id: nrm-test
title: Normal distributions test
pass: 0.8
---
::: problem id=t1 type=numeric answer="0.25"
X is uniform on $[0, 40]$. Find $P(10 < X < 20)$.
solution: $10 / 40 = 0.25$.
:::

::: problem id=t2 type=numeric answer="20"
X is uniform on $[0, 40]$. What is its mean?
solution: $(0 + 40)/2 = 20$.
:::

::: problem id=t3 type=numeric answer="0.0668"
$\Phi(1.5) = 0.9332$. Find $P(Z > 1.5)$.
solution: $1 - 0.9332 = 0.0668$.
:::

::: problem id=t4 type=numeric answer="0.6247"
$\Phi(1.5) = 0.9332$ and $\Phi(-0.5) = 0.3085$. Find $P(-0.5 < Z < 1.5)$.
solution: $0.9332 - 0.3085 = 0.6247$.
:::

::: problem id=t5 type=numeric answer="0.9332"
Heights are normal, $\mu = 170$ cm, $\sigma = 8$. Given $\Phi(1.5) = 0.9332$, find $P(X < 182)$.
solution: $z = 12/8 = 1.5$, so $0.9332$.
:::

::: problem id=t6 type=numeric answer="0.2266"
Commute times are normal, $\mu = 30$ min, $\sigma = 4$. Given $\Phi(0.75) = 0.7734$, what is the probability a commute takes more than 33 minutes?
solution: $z = 3/4 = 0.75$. $1 - 0.7734 = 0.2266$.
:::

::: problem id=t7 type=numeric answer="164.6" tolerance=0.1
Heights: $\mu = 170$, $\sigma = 8$. Given $\Phi(-0.674) = 0.25$, find the 25th percentile.
solution: $170 - 0.674(8) = 164.6$ cm.
:::

::: problem id=t8 type=choice
For a normal variable, about what share of values lie more than 3 SDs from the mean?
- [x] 0.3%
- [ ] 3%
- [ ] 5%
- [ ] 32%
solution: 99.7% lie within 3 SDs, leaving 0.3%.
:::
