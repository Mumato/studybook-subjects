---
id: chi-01
title: Goodness of fit
---
Is a die fair? Do customers spread evenly over the days of the week? A **goodness-of-fit** test compares observed counts with the counts a claim predicts. (OpenStax ch. 11)

::: rule
- $H_0$: the population follows the claimed proportions. $H_a$: it doesn't.
- **Expected count** for each category: $E = n \times p_{\text{claimed}}$.
$$\chi^2 = \sum \frac{(O - E)^2}{E}, \quad df = k - 1$$
where $k$ is the number of categories.
- Large $\chi^2$ means the data is far from the claim: reject $H_0$ when $\chi^2$ is above the critical value (or $p \le \alpha$). The test is always right-tailed.
- Every expected count should be at least 5.
:::

::: example
A die is rolled 120 times: 15, 25, 18, 22, 14, 26 for faces 1 to 6. If fair, each $E = 20$.
$\chi^2 = \frac{25 + 25 + 4 + 4 + 36 + 36}{20} = 6.5$, $df = 5$. The 5% critical value is 11.07; $6.5 < 11.07$, so fail to reject: no strong evidence the die is unfair.
:::

::: problem id=p1 type=numeric answer="60"
A bag claims 30% red sweets. In a sample of 200, what is the expected number of reds?
solution: $200 \times 0.30 = 60$.
:::

::: problem id=p2 type=numeric answer="4.583" tolerance=0.01
Claimed shares 30%, 20%, 20%, 30%; a sample of 200 gives 70, 35, 45, 50. Expected: 60, 40, 40, 60. What is $\chi^2$? (3 decimals)
solution: $\frac{100}{60} + \frac{25}{40} + \frac{25}{40} + \frac{100}{60} = 1.667 + 0.625 + 0.625 + 1.667 = 4.583$.
:::

::: problem id=p3 type=numeric answer="3"
How many degrees of freedom does that test (4 categories) have?
solution: $4 - 1 = 3$.
:::

::: problem id=p4 type=choice
The 5% critical value for 3 df is 7.815. With $\chi^2 = 4.583$:
- [ ] reject $H_0$
- [x] fail to reject $H_0$: the data fits the claimed shares
solution: $4.583 < 7.815$.
:::

::: problem id=p5 type=numeric answer="4"
A coin is tossed 100 times: 60 heads, 40 tails. What is $\chi^2$ for "the coin is fair"?
solution: $E = 50$ each. $\frac{100}{50} + \frac{100}{50} = 4$.
:::

::: problem id=p6 type=choice
That coin test has 1 df; the 5% critical value is 3.841. Decision?
- [x] Reject $H_0$: $4 > 3.841$
- [ ] Fail to reject $H_0$
solution: The statistic is in the rejection region. (This matches the z test: $z = 2$, $z^2 = 4$.)
:::

::: problem id=p7 type=choice creative=true
A $\chi^2$ statistic can never be negative. Why?
- [x] Every term is a square divided by a positive count
- [ ] Observed counts are always bigger than expected
- [ ] The degrees of freedom are positive
solution: $(O - E)^2 \ge 0$ and $E > 0$, so each term is at least 0. Being off in either direction adds to $\chi^2$.
:::
