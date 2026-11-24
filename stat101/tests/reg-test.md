---
id: reg-test
title: Linear regression test
pass: 0.8
---
::: problem id=t1 type=choice
Which describes $r = -0.85$?
- [x] strong negative linear relationship
- [ ] weak negative relationship
- [ ] strong positive relationship
- [ ] no relationship
solution: Close to −1: strong and negative.
:::

::: problem id=t2 type=numeric answer="0.6"
Data: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5), with $\sum(x - \bar{x})(y - \bar{y}) = 6$ and $\sum(x - \bar{x})^2 = 10$. What is the slope?
solution: $6/10 = 0.6$.
:::

::: problem id=t3 type=numeric answer="2.2"
Same data, $\bar{x} = 3$, $\bar{y} = 4$, $b = 0.6$. What is the intercept?
solution: $4 - 0.6(3) = 2.2$.
:::

::: problem id=t4 type=numeric answer="74"
$r = -0.6$, $s_x = 3$, $s_y = 12$, $\bar{x} = 10$, $\bar{y} = 50$. What is the intercept?
solution: $b = -0.6 \times 12/3 = -2.4$. $a = 50 - (-2.4)(10) = 74$.
:::

::: problem id=t5 type=numeric answer="20.1"
Ads and sales: $\hat{y} = 6.5 + 1.7x$. Predict sales when $x = 8$.
solution: $6.5 + 13.6 = 20.1$.
:::

::: problem id=t6 type=numeric answer="0.9"
In that data, sales at $x = 8$ were 21. What is the residual?
solution: $21 - 20.1 = 0.9$.
:::

::: problem id=t7 type=numeric answer="0.6"
Data with $r = 0.7746$. What is $r^2$? (1 decimal)
solution: $0.7746^2 = 0.6$.
:::

::: problem id=t8 type=choice
Countries that eat more chocolate win more Nobel prizes ($r = 0.8$). This shows:
- [ ] chocolate makes people smarter
- [x] an association that could be explained by other factors, like national wealth
- [ ] Nobel prizes cause chocolate eating
solution: Correlation is not causation. Wealthy countries have both more chocolate and more research funding.
:::
