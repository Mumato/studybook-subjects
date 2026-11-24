---
id: fina-test
title: Final practice exam A
pass: 0.7
---
::: problem id=t1 type=numeric answer="2"
A population has $\sigma = 18$. What is the standard error of $\bar{x}$ for samples of 81?
solution: $18/9 = 2$.
:::

::: problem id=t2 type=numeric answer="60.08"
$\bar{x} = 64$, $\sigma = 18$, $n = 81$. What is the lower end of the 95% confidence interval?
solution: $64 - 1.96(2) = 64 - 3.92 = 60.08$.
:::

::: problem id=t3 type=numeric answer="2"
$H_0: \mu = 11$. A sample of 9 has $\bar{x} = 13$ and $s = 3$. What is $t$?
solution: $(13 - 11)/(3/3) = 2$.
:::

::: problem id=t4 type=numeric answer="1.6"
Test $H_0: p = 0.5$ with $n = 100$ and $\hat{p} = 0.58$. What is $z$?
solution: SE $= \sqrt{0.25/100} = 0.05$. $z = 0.08/0.05 = 1.6$.
:::

::: problem id=t5 type=numeric answer="6.667" tolerance=0.01
A store claims customers split evenly over 3 checkout lanes. Of 90 customers, 40, 30 and 20 use each lane. What is $\chi^2$? (3 decimals)
solution: $E = 30$ each. $(100 + 0 + 100)/30 = 6.667$.
:::

::: problem id=t6 type=numeric answer="27"
A regression line is $\hat{y} = 12 + 3x$. Predict $y$ for $x = 5$.
solution: $12 + 15 = 27$.
:::

::: problem id=t7 type=numeric answer="4"
An ANOVA has $MSB = 24$ and $MSW = 6$. What is $F$?
solution: $24/6 = 4$.
:::

::: problem id=t8 type=choice
You want to know if the share of students who vote differs between two universities. The right procedure is:
- [ ] paired t test
- [ ] one-way ANOVA
- [x] two-proportion z test
- [ ] $\chi^2$ goodness of fit
solution: Two independent groups, a yes/no variable: compare two proportions.
:::
