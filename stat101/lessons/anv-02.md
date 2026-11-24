---
id: anv-02
title: Computing the F statistic
---
Software usually does the arithmetic, but working one small ANOVA by hand shows where every number comes from. (OpenStax ch. 13)

::: rule
With group means $\bar{x}_i$, group sizes $n_i$ and the overall mean $\bar{x}$:
- $SSB = \sum n_i (\bar{x}_i - \bar{x})^2$ and $MSB = \frac{SSB}{k - 1}$.
- $SSW = \sum \sum (x - \bar{x}_i)^2$ (each value against its own group's mean) and $MSW = \frac{SSW}{N - k}$.
- $F = MSB / MSW$.
:::

::: example
Three groups of 4: A: 4, 5, 6, 5. B: 7, 8, 6, 7. C: 9, 8, 10, 9. Means 5, 7, 9; overall mean 7.
$SSB = 4(4) + 4(0) + 4(4) = 32$, $MSB = 32/2 = 16$.
Each group's squared deviations add to 2, so $SSW = 6$, $MSW = 6/9 = 0.667$.
$F = 16/0.667 = 24$, far above the 5% critical value 4.256 for (2, 9): the means differ.
:::

::: problem id=p1 type=numeric answer="12.5"
Three groups of 4: A: 10, 12, 11, 13. B: 14, 13, 15, 14. C: 12, 11, 13, 12. Group means are 11.5, 14 and 12. What is the overall mean?
solution: Equal group sizes: $(11.5 + 14 + 12)/3 = 12.5$.
:::

::: problem id=p2 type=numeric answer="14"
Same groups. What is $SSB$?
solution: $4(11.5 - 12.5)^2 + 4(14 - 12.5)^2 + 4(12 - 12.5)^2$, which is $4 + 9 + 1 = 14$.
:::

::: problem id=p3 type=numeric answer="7"
What is $MSB$?
solution: $14/(3 - 1) = 7$.
:::

::: problem id=p4 type=numeric answer="9"
What is $SSW$?
hint: A: squared deviations from 11.5. B: from 14. C: from 12.
solution: A: $2.25 + 0.25 + 0.25 + 2.25 = 5$. B: $0 + 1 + 1 + 0 = 2$. C: $0 + 1 + 1 + 0 = 2$. Total 9.
:::

::: problem id=p5 type=numeric answer="1"
What is $MSW$?
solution: $9/(12 - 3) = 1$.
:::

::: problem id=p6 type=numeric answer="7"
What is $F$?
solution: $7/1 = 7$.
:::

::: problem id=p7 type=choice creative=true
The 5% critical value for (2, 9) is 4.256. With $F = 7$, and B's mean the highest, what can you conclude?
- [ ] All three means differ
- [x] At least one mean differs; a follow-up test is needed to say which
- [ ] Only B differs, proven
solution: $7 > 4.256$, so reject $H_0$. ANOVA alone doesn't identify which groups differ.
:::
