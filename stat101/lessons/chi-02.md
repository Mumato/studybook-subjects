---
id: chi-02
title: Testing independence
---
Is music preference related to age group? Is smoking related to coughing? A $\chi^2$ test of **independence** checks a two-way table. (OpenStax ch. 11)

::: rule
- $H_0$: the two variables are independent. $H_a$: they're related.
- **Expected count** in each cell: $E = \frac{\text{row total} \times \text{column total}}{\text{grand total}}$.
- $\chi^2 = \sum \frac{(O - E)^2}{E}$ over all cells, with $df = (r - 1)(c - 1)$ for $r$ rows and $c$ columns.
:::

::: example
100 people: 60 men, 40 women. Favourite of three brands: A 50, B 30, C 20 overall.
Expected men choosing A: $60 \times 50/100 = 30$. All expected counts: men 30, 18, 12; women 20, 12, 8.
Observed: men 35, 15, 10; women 15, 15, 10. $\chi^2 = 4.17$ with $df = (2-1)(3-1) = 2$. The 5% critical value is 5.991: fail to reject.
:::

::: problem id=p1 type=numeric answer="18"
In the example, check one expected count: men (row total 60) choosing brand B (column total 30), out of 100.
solution: $60 \times 30/100 = 18$.
:::

::: problem id=p2 type=numeric answer="2"
A table has 2 rows and 3 columns. How many degrees of freedom?
solution: $(2 - 1)(3 - 1) = 2$.
:::

::: problem id=p3 type=numeric answer="6"
A table has 4 rows and 3 columns. How many degrees of freedom?
solution: $(4 - 1)(3 - 1) = 6$.
:::

::: problem id=p4 type=numeric answer="21"
300 adults: 60 smokers, 240 non-smokers; 105 have a cough. If smoking and coughing were independent, how many smokers would be expected to cough?
solution: $60 \times 105/300 = 21$. (45 actually did.)
:::

::: problem id=p5 type=numeric answer="27.43" tolerance=0.05
For that cell, observed 45 and expected 21. What does it add to $\chi^2$? (2 decimals)
solution: $(45 - 21)^2/21 = 576/21 = 27.43$.
:::

::: problem id=p6 type=choice
The full smoking table gives $\chi^2 = 52.7$ with 1 df (5% critical value 3.841). Conclusion?
- [x] Smoking and coughing are related
- [ ] They're independent
- [ ] Smoking causes coughing, proven
solution: $52.7 > 3.841$: reject independence. It's an observational study, so the test shows a relationship, not cause.
:::

::: problem id=p7 type=choice
A goodness-of-fit test and an independence test differ in that:
- [ ] only one uses $\chi^2$
- [x] goodness of fit checks one variable against claimed shares; independence checks whether two variables are related
- [ ] independence tests are left-tailed
solution: Same statistic, different questions and expected counts.
:::
