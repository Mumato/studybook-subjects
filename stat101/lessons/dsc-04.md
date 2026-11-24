---
id: dsc-04
title: Standard deviation and z-scores
---
The **standard deviation** measures how far values typically sit from the mean. With it, you can say how unusual any single value is. (OpenStax ch. 2)

::: rule
- Sample variance: $s^2 = \frac{\sum (x - \bar{x})^2}{n - 1}$. Sample standard deviation: $s = \sqrt{s^2}$. (For a whole population, divide by $N$ and write $\sigma$.)
- A **z-score** says how many standard deviations a value is from the mean: $z = \frac{x - \bar{x}}{s}$. Negative means below the mean.
- **Empirical rule** for bell-shaped data: about **68%** of values lie within 1 SD of the mean, **95%** within 2 SD, **99.7%** within 3 SD.
:::

::: example
Data: 10, 12, 14, 16, 18. Mean $= 14$. Deviations: $-4, -2, 0, 2, 4$. Squares: $16, 4, 0, 4, 16$, sum $40$.
$s^2 = 40 / 4 = 10$, so $s = \sqrt{10} = 3.16$.
The value 18 has $z = (18 - 14)/3.16 = 1.26$: a bit over one SD above the mean.
:::

::: problem id=p1 type=numeric answer="10"
Find the sample variance $s^2$ of 3, 5, 7, 9, 11.
hint: The mean is 7. Square each distance from 7, add, divide by $n - 1 = 4$.
solution: Deviations $-4, -2, 0, 2, 4$; squares sum to 40; $s^2 = 40/4 = 10$.
:::

::: problem id=p2 type=numeric answer="3.742" tolerance=0.01
Find the sample standard deviation of 6, 8, 10, 12, 14, 16. (3 decimals)
solution: Mean 11. Squared deviations: 25, 9, 1, 1, 9, 25, sum 70. $s^2 = 70/5 = 14$, $s = \sqrt{14} = 3.742$.
:::

::: problem id=p3 type=numeric answer="1.5"
Exam scores have mean 70 and SD 10. What is the z-score of 85?
solution: $(85 - 70)/10 = 1.5$.
:::

::: problem id=p4 type=numeric answer="34"
A data set has mean 50 and SD 8. Which value has $z = -2$?
solution: $x = \bar{x} + z s = 50 - 2(8) = 34$.
:::

::: problem id=p5 type=choice
Ana scored 82 on a test with mean 75 and SD 5. Ben scored 88 on a test with mean 80 and SD 10. Relative to their classes, who did better?
- [x] Ana
- [ ] Ben
- [ ] They did equally well
solution: Ana: $z = 7/5 = 1.4$. Ben: $z = 8/10 = 0.8$. Ana is further above her class mean.
:::

::: problem id=p6 type=numeric answer="95"
IQ scores are bell-shaped with mean 100 and SD 15. About what percent lie between 70 and 130?
solution: 70 and 130 are 2 SD from the mean: about 95%.
:::

::: problem id=p7 type=numeric answer="16"
Same IQ scores. About what percent are **above** 115?
hint: 68% lie between 85 and 115. The rest is split evenly between the two tails.
solution: $100\% - 68\% = 32\%$ outside, half of it above: 16%.
:::

::: problem id=p8 type=choice
You add 5 points to every value in a data set. The standard deviation:
- [ ] goes up by 5
- [x] stays the same
- [ ] goes down by 5
- [ ] doubles
solution: Every value and the mean move up by 5, so the distances from the mean don't change.
:::
