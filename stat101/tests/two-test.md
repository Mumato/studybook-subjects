---
id: two-test
title: Two-sample inference test
pass: 0.8
---
::: problem id=t1 type=numeric answer="2.828" tolerance=0.01
Class A: $n = 25$, $s = 10$. Class B: $n = 36$, $s = 12$. What is the standard error of $\bar{x}_A - \bar{x}_B$? (3 decimals)
solution: $\sqrt{4 + 4} = 2.828$.
:::

::: problem id=t2 type=numeric answer="2.121" tolerance=0.01
Same classes with $\bar{x}_A = 78$ and $\bar{x}_B = 72$. What is $t$? (3 decimals)
solution: $6/2.828 = 2.121$.
:::

::: problem id=t3 type=numeric answer="24"
Using the simple rule, how many degrees of freedom does that test use?
solution: Smaller $n$ is 25: $df = 24$.
:::

::: problem id=t4 type=choice
Each of 20 patients rates pain before and after a treatment. The right test is:
- [ ] two-sample t
- [x] paired t
- [ ] two-proportion z
solution: Same patients twice: paired.
:::

::: problem id=t5 type=numeric answer="3.384" tolerance=0.01
Paired differences have $\bar{d} = 3$, $s_d = 2.507$, $n = 8$. What is $t$? (3 decimals)
solution: $3/(2.507/\sqrt{8}) = 3/0.8864 = 3.384$.
:::

::: problem id=t6 type=numeric answer="0.25"
Ad A: 45 clicks of 150. Ad B: 30 clicks of 150. What is the pooled proportion?
solution: $75/300 = 0.25$.
:::

::: problem id=t7 type=numeric answer="2"
Same ads. With pooled $SE = 0.05$, what is $z$?
solution: $(0.30 - 0.20)/0.05 = 2$.
:::

::: problem id=t8 type=choice
A 95% interval for $\mu_1 - \mu_2$ is $(-3.1, -0.4)$. Which is supported?
- [ ] $\mu_1 > \mu_2$
- [x] $\mu_1 < \mu_2$
- [ ] no difference
solution: The whole interval is below 0, so $\mu_1 - \mu_2 < 0$.
:::
