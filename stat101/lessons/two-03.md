---
id: two-03
title: Comparing two proportions
---
Is a new ad clicked more often than the old one? Compare two sample proportions. (OpenStax ch. 10)

::: rule
To test $H_0: p_1 = p_2$, pool the samples (under $H_0$ they share one proportion):
$$\hat{p} = \frac{x_1 + x_2}{n_1 + n_2}, \quad z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1 - \hat{p})\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$$
- For a **confidence interval**, don't pool: $SE = \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n_2}}$.
:::

::: example
Ad A: 45 clicks out of 150 ($0.30$). Ad B: 30 of 150 ($0.20$).
Pooled $\hat{p} = 75/300 = 0.25$. $SE = \sqrt{0.25(0.75)(2/150)} = 0.05$. $z = 0.10/0.05 = 2$.
Two-sided $p = 0.0456$: at $\alpha = 0.05$, ad A's click rate is significantly higher.
:::

::: problem id=p1 type=numeric answer="0.2625"
120 of 400 city residents and 90 of 400 rural residents support a policy. What is the pooled proportion?
solution: $(120 + 90)/800 = 210/800 = 0.2625$.
:::

::: problem id=p2 type=numeric answer="0.0311" tolerance=0.0005
Same samples. What is the pooled standard error? (4 decimals)
solution: $\sqrt{0.2625 \times 0.7375 \times (1/400 + 1/400)} = 0.0311$.
:::

::: problem id=p3 type=numeric answer="2.41" tolerance=0.02
Same samples ($\hat{p}_1 = 0.30$, $\hat{p}_2 = 0.225$). What is $z$? (2 decimals)
solution: $0.075/0.0311 = 2.41$.
:::

::: problem id=p4 type=numeric answer="0.0608" tolerance=0.001
For a 95% **interval** for $p_1 - p_2$ with these samples, what is the margin of error? (4 decimals)
solution: Unpooled $SE = \sqrt{0.3(0.7)/400 + 0.225(0.775)/400} = 0.0310$. $1.96 \times 0.0310 = 0.0608$.
:::

::: problem id=p5 type=numeric answer="0.075"
What is the center of that interval?
solution: $\hat{p}_1 - \hat{p}_2 = 0.30 - 0.225 = 0.075$.
:::

::: problem id=p6 type=choice
Why pool the proportions for the test but not for the interval?
- [x] The test assumes $H_0$: one common proportion. The interval doesn't assume they're equal.
- [ ] Pooling always gives a smaller SE
- [ ] Intervals can't use pooled values by law
solution: Pooling matches the assumption of the calculation.
:::

::: problem id=p7 type=choice
A 95% interval for $p_1 - p_2$ is (0.02, 0.13). This means:
- [x] $p_1$ is likely bigger than $p_2$, by 2 to 13 percentage points
- [ ] $p_2$ is bigger
- [ ] there's no difference
solution: The whole interval is above 0.
:::
