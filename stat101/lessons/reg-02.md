---
id: reg-02
title: The least-squares line
---
When the pattern is linear, a line summarizes it and makes predictions. The **least-squares line** is the one that makes the squared vertical misses as small as possible. (OpenStax ch. 12)

::: rule
$$\hat{y} = a + bx, \quad b = r \frac{s_y}{s_x}, \quad a = \bar{y} - b\bar{x}$$
- $\hat{y}$ is the **predicted** $y$. The line always passes through $(\bar{x}, \bar{y})$.
- **Slope** $b$: the predicted change in $y$ for each 1-unit increase in $x$.
- **Intercept** $a$: the predicted $y$ when $x = 0$ (only meaningful if $x = 0$ makes sense).
- From raw data: $b = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sum (x - \bar{x})^2}$.
:::

::: example
Data: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5). $\bar{x} = 3$, $\bar{y} = 4$, $\sum(x - \bar{x})(y - \bar{y}) = 6$, $\sum(x - \bar{x})^2 = 10$.
$b = 6/10 = 0.6$, $a = 4 - 0.6(3) = 2.2$. Line: $\hat{y} = 2.2 + 0.6x$. At $x = 6$: $\hat{y} = 5.8$.
:::

::: problem id=p1 type=numeric answer="4"
$r = 0.8$, $s_x = 2$, $s_y = 10$. What is the slope $b$?
solution: $0.8 \times 10/2 = 4$.
:::

::: problem id=p2 type=numeric answer="40"
Same data with $\bar{x} = 5$ and $\bar{y} = 60$ (so $b = 4$). What is the intercept $a$?
solution: $60 - 4(5) = 40$.
:::

::: problem id=p3 type=numeric answer="68"
With $\hat{y} = 40 + 4x$, predict $y$ when $x = 7$.
solution: $40 + 28 = 68$.
:::

::: problem id=p4 type=numeric answer="-2.4"
$r = -0.6$, $s_x = 3$, $s_y = 12$. What is the slope?
solution: $-0.6 \times 12/3 = -2.4$.
:::

::: problem id=p5 type=numeric answer="1.7"
Ad spending $x$ (thousands): 2, 4, 6, 8. Sales $y$: 10, 14, 15, 21. Here $\sum(x - \bar{x})(y - \bar{y}) = 34$ and $\sum(x - \bar{x})^2 = 20$. What is the slope?
solution: $34/20 = 1.7$.
:::

::: problem id=p6 type=numeric answer="6.5"
Same data: $\bar{x} = 5$, $\bar{y} = 15$, $b = 1.7$. What is the intercept?
solution: $15 - 1.7(5) = 6.5$.
:::

::: problem id=p7 type=choice
The line $\widehat{\text{price}} = 15000 - 1200 \times \text{age}$ predicts a used car's price from its age in years. The slope means:
- [x] each extra year lowers the predicted price by \$1,200
- [ ] a new car costs \$1,200
- [ ] the price falls 1,200% a year
solution: Slope = predicted change in $y$ per unit of $x$. The intercept, \$15,000, is the predicted price at age 0.
:::
