---
id: two-01
title: Comparing two means
---
Do students taught one way score higher than students taught another way? With two **independent** samples, test the difference of the means. (OpenStax ch. 10)

::: rule
For independent random samples, test $H_0: \mu_1 = \mu_2$ with
$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$
- A simple, safe choice of degrees of freedom: $df$ = (smaller $n$) $- 1$. Software uses a more exact formula.
- Confidence interval for $\mu_1 - \mu_2$: $(\bar{x}_1 - \bar{x}_2) \pm t^* \cdot SE$.
:::

::: example
Class A: $n = 25$, $\bar{x} = 78$, $s = 10$. Class B: $n = 36$, $\bar{x} = 72$, $s = 12$.
$SE = \sqrt{100/25 + 144/36} = \sqrt{4 + 4} = 2.828$. $t = 6/2.828 = 2.12$ with $df = 24$.
95% interval: $6 \pm 2.064(2.828) = 6 \pm 5.84$, from 0.16 to 11.84.
:::

::: problem id=p1 type=numeric answer="2.1213" tolerance=0.001
Group 1: $n = 16$, $\bar{x} = 31$, $s = 6$. Group 2: $n = 9$, $\bar{x} = 26$, $s = 4.5$. What is the standard error of the difference? (4 decimals)
solution: $\sqrt{36/16 + 20.25/9} = \sqrt{2.25 + 2.25} = \sqrt{4.5} = 2.1213$.
:::

::: problem id=p2 type=numeric answer="2.357" tolerance=0.01
Same groups. What is $t$? (3 decimals)
solution: $(31 - 26)/2.1213 = 2.357$.
:::

::: problem id=p3 type=numeric answer="8"
Same groups. Using the simple rule, how many degrees of freedom?
solution: The smaller sample has 9: $df = 8$.
:::

::: problem id=p4 type=choice
Same test, two-sided. With 8 df the p-value is 0.046. At $\alpha = 0.05$:
- [x] reject $H_0$: the means differ
- [ ] fail to reject $H_0$
solution: $0.046 \le 0.05$.
:::

::: problem id=p5 type=numeric answer="0.5799" tolerance=0.001
Sample 1: $n = 50$, $s = 3$. Sample 2: $n = 40$, $s = 2.5$. What is the standard error of $\bar{x}_1 - \bar{x}_2$? (4 decimals)
solution: $\sqrt{9/50 + 6.25/40} = \sqrt{0.18 + 0.15625} = 0.5799$.
:::

::: problem id=p6 type=numeric answer="5.838" tolerance=0.01
In the example ($SE = 2.828$, $t^* = 2.064$), what is the 95% margin of error? (3 decimals)
solution: $2.064 \times 2.828 = 5.838$.
:::

::: problem id=p7 type=choice
A 95% interval for $\mu_1 - \mu_2$ is $(-1.5, 4.2)$. What does a two-sided test at $\alpha = 0.05$ conclude?
- [ ] The means differ
- [x] No significant difference: 0 is inside the interval
- [ ] Group 1 is bigger
solution: A difference of 0 is a plausible value, so we can't reject $H_0: \mu_1 = \mu_2$.
:::
