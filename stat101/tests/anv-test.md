---
id: anv-test
title: One-way ANOVA test
pass: 0.8
---
::: problem id=t1 type=choice
The null hypothesis of a one-way ANOVA with 3 groups is:
- [x] $\mu_1 = \mu_2 = \mu_3$
- [ ] all three means differ
- [ ] at least one mean differs
solution: $H_0$ says all means are equal. "At least one differs" is $H_a$.
:::

::: problem id=t2 type=numeric answer="4"
5 groups of 6 people each. What is $df_1$ (between groups)?
solution: $k - 1 = 5 - 1 = 4$.
:::

::: problem id=t3 type=numeric answer="25"
Same 5 groups of 6. What is $df_2$ (within groups)?
solution: $N - k = 30 - 5 = 25$.
:::

::: problem id=t4 type=numeric answer="5"
$MSB = 45$ and $MSW = 9$. What is $F$?
solution: $45/9 = 5$.
:::

::: problem id=t5 type=numeric answer="32"
Three groups of 4 have means 5, 7 and 9; the overall mean is 7. What is $SSB$?
solution: $4(4) + 4(0) + 4(4) = 32$.
:::

::: problem id=t6 type=numeric answer="0.6667" tolerance=0.001
Those groups have $SSW = 6$, with $N = 12$ and $k = 3$. What is $MSW$? (4 decimals)
solution: $6/9 = 0.6667$.
:::

::: problem id=t7 type=choice
An ANOVA gives $F = 2.1$ with $df = (2, 12)$; the 5% critical value is 3.885. Conclusion?
- [ ] reject $H_0$
- [x] fail to reject $H_0$: no significant difference among the means
solution: $2.1 < 3.885$.
:::

::: problem id=t8 type=choice
ANOVA compares means by comparing:
- [x] variation between group means with variation within groups
- [ ] the largest and smallest values
- [ ] group medians
solution: $F = MSB/MSW$.
:::
