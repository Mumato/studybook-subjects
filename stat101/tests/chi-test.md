---
id: chi-test
title: Chi-square tests test
pass: 0.8
---
::: problem id=t1 type=numeric answer="6.5"
A die is rolled 120 times: 15, 25, 18, 22, 14, 26. What is $\chi^2$ for "the die is fair"?
solution: $E = 20$ each. $(25 + 25 + 4 + 4 + 36 + 36)/20 = 130/20 = 6.5$.
:::

::: problem id=t2 type=numeric answer="5"
How many degrees of freedom does that test have?
solution: 6 faces: $6 - 1 = 5$.
:::

::: problem id=t3 type=choice
The 5% critical value for 5 df is 11.07. With $\chi^2 = 6.5$:
- [ ] reject $H_0$: the die is unfair
- [x] fail to reject $H_0$
solution: $6.5 < 11.07$.
:::

::: problem id=t4 type=numeric answer="30"
A shop claims 25% of sales are on weekends. In 120 sales, what is the expected number on weekends?
solution: $120 \times 0.25 = 30$.
:::

::: problem id=t5 type=numeric answer="12"
In a two-way table, a row total is 40, a column total is 30, and the grand total is 100. What is the expected count in that cell?
solution: $40 \times 30/100 = 12$.
:::

::: problem id=t6 type=numeric answer="4"
A table has 3 rows and 3 columns. How many degrees of freedom?
solution: $(3 - 1)(3 - 1) = 4$.
:::

::: problem id=t7 type=numeric answer="1.333" tolerance=0.01
A cell has observed 8 and expected 12. What does it add to $\chi^2$? (3 decimals)
solution: $(8 - 12)^2/12 = 16/12 = 1.333$.
:::

::: problem id=t8 type=choice
An independence test gives $\chi^2 = 10.2$ with 4 df (critical value 9.488). Conclusion?
- [x] The variables are related
- [ ] The variables are independent
- [ ] One variable causes the other
solution: $10.2 > 9.488$: reject independence.
:::
