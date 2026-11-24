---
id: anv-01
title: The idea of ANOVA
---
To compare **three or more** group means at once, analysis of variance (ANOVA) asks: are the groups further apart than the spread inside each group would explain? (OpenStax ch. 13)

::: rule
- $H_0: \mu_1 = \mu_2 = \dots = \mu_k$. $H_a$: at least one mean differs.
- **Between-groups** variation (MSB) measures how far the group means are from the overall mean. **Within-groups** variation (MSW) measures the spread inside the groups.
$$F = \frac{MSB}{MSW}, \quad df_1 = k - 1, \quad df_2 = N - k$$
($k$ groups, $N$ values in all.)
- If $H_0$ is true, $F$ is near 1. A large $F$ is evidence against $H_0$; the test is right-tailed.
- Assumptions: independent random samples, roughly normal groups, similar standard deviations.
:::

::: example
Three diets, 10 people each ($k = 3$, $N = 30$). $MSB = 45$, $MSW = 9$, so $F = 5$ with $df = (2, 27)$.
The 5% critical value for (2, 27) is 3.354. $5 > 3.354$: reject $H_0$. At least one diet's mean weight loss differs.
:::

::: problem id=p1 type=numeric answer="3"
An ANOVA compares 4 groups. What is $df_1$ (between groups)?
solution: $k - 1 = 3$.
:::

::: problem id=p2 type=numeric answer="36"
4 groups of 10 people each. What is $df_2$ (within groups)?
solution: $N - k = 40 - 4 = 36$.
:::

::: problem id=p3 type=numeric answer="6.667" tolerance=0.01
$MSB = 20$ and $MSW = 3$. What is $F$? (3 decimals)
solution: $20/3 = 6.667$.
:::

::: problem id=p4 type=choice
With $df = (3, 36)$ the 5% critical value is 2.866. With $F = 6.667$:
- [x] reject $H_0$: at least one mean differs
- [ ] fail to reject $H_0$
- [ ] all four means differ
solution: $6.667 > 2.866$. ANOVA says some mean differs, not which, and not that all do.
:::

::: problem id=p5 type=choice
An ANOVA gives $F = 0.8$. This suggests:
- [ ] the group means are very different
- [x] the group means differ no more than chance would explain
- [ ] the calculation is wrong
solution: $F$ near or below 1 means the between-group spread is like the within-group spread.
:::

::: problem id=p6 type=choice
Why use one ANOVA instead of t tests on every pair of groups?
- [x] Many tests at $\alpha = 0.05$ each raise the overall chance of a false alarm
- [ ] t tests can't compare means
- [ ] ANOVA always gives smaller p-values
solution: With 5 groups there are 10 pairs. Ten tests each at 5% make at least one Type I error much more likely than 5%.
:::

::: problem id=p7 type=choice
Which situation calls for one-way ANOVA?
- [ ] Comparing the mean income of men and women
- [x] Comparing mean test scores under four teaching methods
- [ ] Testing whether a coin is fair
- [ ] Predicting weight from height
solution: One quantitative response, one categorical factor with more than two groups.
:::
