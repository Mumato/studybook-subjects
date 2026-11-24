---
id: two-02
title: Paired data
---
Before-and-after scores of the same people, or twins split between two treatments, are **paired**: each value in one group belongs with one value in the other. (OpenStax ch. 10)

::: rule
- For paired data, take the **difference** $d$ for each pair, then run a one-sample t procedure on the differences.
$$t = \frac{\bar{d} - 0}{s_d / \sqrt{n}}, \quad df = n - 1$$
- $n$ is the number of **pairs**. Pairing removes person-to-person variation, so it often finds effects that a two-sample test would miss.
:::

::: example
8 students take a test before and after a course. Gains: 3, 5, −1, 4, 6, 2, 0, 5.
$\bar{d} = 24/8 = 3$, $s_d = 2.507$. $t = 3/(2.507/\sqrt{8}) = 3.38$ with 7 df. One-sided $p = 0.006$: strong evidence of a gain.
:::

::: problem id=p1 type=numeric answer="3"
Differences: 3, 5, −1, 4, 6, 2, 0, 5. What is $\bar{d}$?
solution: $24/8 = 3$.
:::

::: problem id=p2 type=numeric answer="7"
Same 8 pairs. How many degrees of freedom does the paired t test use?
solution: $8 - 1 = 7$.
:::

::: problem id=p3 type=numeric answer="2.598" tolerance=0.01
12 patients' blood pressure drops by $\bar{d} = 1.5$ on average, $s_d = 2$. What is $t$? (3 decimals)
solution: $1.5/(2/\sqrt{12}) = 1.5/0.5774 = 2.598$.
:::

::: problem id=p4 type=choice
That test is two-sided with 11 df, and $p = 0.025$. At $\alpha = 0.05$:
- [x] reject $H_0$: the mean change isn't 0
- [ ] fail to reject $H_0$
solution: $0.025 \le 0.05$.
:::

::: problem id=p5 type=choice
Which data is **paired**?
- [ ] Heights of 30 men and 30 women
- [x] Each driver's reaction time with and without a phone
- [ ] Test scores from two different schools
- [ ] Weights of cats and dogs
solution: The same driver is measured twice.
:::

::: problem id=p6 type=numeric answer="4"
5 runners' times (seconds) on an old and a new shoe: old 60, 58, 62, 65, 59; new 57, 55, 57, 60, 55. What is the mean improvement (old − new)?
solution: Differences 3, 3, 5, 5, 4: mean $20/5 = 4$.
:::

::: problem id=p7 type=choice creative=true
Why might a paired test find a difference that a two-sample test on the same numbers misses?
- [x] Pairing removes the big differences between individuals, leaving a smaller standard error
- [ ] Paired tests use a larger $\alpha$
- [ ] Paired tests always give larger means
solution: Runners differ a lot from each other, but each runner's improvement is steady. The differences vary little, so their SE is small.
:::
