---
id: hyp-04
title: Testing a proportion
---
Is a coin fair? Do more than half of voters support a plan? Test a claimed proportion $p_0$ with a z statistic. (OpenStax ch. 9)

::: rule
$$z = \frac{\hat{p} - p_0}{\sqrt{p_0(1 - p_0)/n}}$$
- The standard error uses $p_0$ (the value $H_0$ claims), not $\hat{p}$.
- Conditions: $np_0 \ge 10$ and $n(1 - p_0) \ge 10$.
- p-values and decisions work as for the z test of a mean.
:::

::: example
Is a coin fair? 400 tosses give 220 heads: $\hat{p} = 0.55$. $H_0: p = 0.5$, $H_a: p \ne 0.5$.
SE $= \sqrt{0.25/400} = 0.025$, $z = 0.05/0.025 = 2$. Two-sided $p = 2(0.0228) = 0.0456$: reject at $\alpha = 0.05$.
:::

::: problem id=p1 type=numeric answer="0.0179" tolerance=0.0005
$H_0: p = 0.2$ with $n = 500$. What is the standard error? (4 decimals)
solution: $\sqrt{0.2 \times 0.8/500} = \sqrt{0.00032} = 0.0179$.
:::

::: problem id=p2 type=numeric answer="-1.677" tolerance=0.01
Same test; the sample gives $\hat{p} = 0.17$. What is $z$? (3 decimals)
solution: $(0.17 - 0.2)/0.0179 = -1.677$.
:::

::: problem id=p3 type=numeric answer="0.0465"
Same test with $H_a: p < 0.2$. Given $\Phi(-1.68) = 0.0465$, what is the p-value (using $z = -1.68$)?
solution: Left tail: $0.0465$.
:::

::: problem id=p4 type=numeric answer="0.66"
A store claims 60% of customers return. In a sample of 150, 99 return. What is $\hat{p}$?
solution: $99/150 = 0.66$.
:::

::: problem id=p5 type=numeric answer="1.5"
Test $H_0: p = 0.6$ with $n = 150$ and $\hat{p} = 0.66$. What is $z$?
solution: SE $= \sqrt{0.24/150} = 0.04$. $z = 0.06/0.04 = 1.5$.
:::

::: problem id=p6 type=numeric answer="0.1336"
Same test, $H_a: p \ne 0.6$. Given $\Phi(1.5) = 0.9332$, what is the p-value?
solution: $2(1 - 0.9332) = 0.1336$. Not significant at 0.05.
:::

::: problem id=p7 type=choice
Why does the test's standard error use $p_0$ instead of $\hat{p}$?
- [x] The p-value is computed assuming $H_0$ is true, so $p = p_0$
- [ ] $\hat{p}$ is always wrong
- [ ] It gives a smaller standard error
solution: Every part of the calculation pictures the world where $H_0$ holds.
:::
