---
id: clt-03
title: Sampling distribution of a proportion
---
Polls report a **sample proportion** $\hat{p}$: the share of the sample with some feature. Like $\bar{x}$, it varies from sample to sample in a predictable way. (OpenStax ch. 7)

::: rule
For random samples of size $n$ from a population with true proportion $p$:
- $\hat{p}$ has mean $p$ and standard error $\sqrt{\frac{p(1 - p)}{n}}$.
- It's approximately normal when $np \ge 10$ and $n(1 - p) \ge 10$.
- Then $z = \frac{\hat{p} - p}{\sqrt{p(1 - p)/n}}$.
:::

::: example
40% of a city's voters back a plan. In a poll of 150, the SE is $\sqrt{0.4(0.6)/150} = 0.04$.
$P(\hat{p} > 0.45)$: $z = 0.05/0.04 = 1.25$, $\Phi(1.25) = 0.8944$, so $P = 0.1056$.
Checks: $150(0.4) = 60 \ge 10$ and $150(0.6) = 90 \ge 10$.
:::

::: problem id=p1 type=numeric answer="0.05"
The true proportion is 0.5 and $n = 100$. What is the standard error of $\hat{p}$?
solution: $\sqrt{0.25/100} = 0.5/10 = 0.05$.
:::

::: problem id=p2 type=numeric answer="0.02"
$p = 0.2$ and $n = 400$. What is the standard error of $\hat{p}$?
solution: $\sqrt{0.16/400} = 0.4/20 = 0.02$.
:::

::: problem id=p3 type=numeric answer="0.0668"
20% of customers return a product. In a sample of 400, find $P(\hat{p} < 0.17)$. Given $\Phi(-1.5) = 0.0668$.
solution: SE $= 0.02$, $z = -0.03/0.02 = -1.5$, so $0.0668$.
:::

::: problem id=p4 type=numeric answer="0.0228"
A coin is fair. In 100 tosses, what is the probability that 60% or more are heads? Given $\Phi(2) = 0.9772$.
solution: SE $= 0.05$, $z = 0.10/0.05 = 2$, $P = 1 - 0.9772 = 0.0228$.
:::

::: problem id=p5 type=numeric answer="0.3"
30% of a population is left-handed. What is the mean of $\hat{p}$ for samples of 50?
solution: The mean of $\hat{p}$ is $p = 0.3$.
:::

::: problem id=p6 type=choice
$p = 0.05$ and $n = 100$. Can you use the normal approximation for $\hat{p}$?
- [ ] Yes, $n$ is over 30
- [x] No: $np = 5$ is less than 10
- [ ] Yes: $n(1-p) = 95$
solution: Both $np$ and $n(1 - p)$ must be at least 10, and $np = 5$ fails.
:::

::: problem id=p7 type=numeric answer="0.0316" tolerance=0.0005
$p = 0.3$ and $n = 210$. What is the standard error of $\hat{p}$? (4 decimals)
solution: $\sqrt{0.21/210} = \sqrt{0.001} = 0.0316$.
:::
