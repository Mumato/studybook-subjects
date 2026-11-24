---
id: dsc-test
title: Describing data test
pass: 0.8
---
::: problem id=t1 type=numeric answer="11.5556" tolerance=0.01
Find the mean of 1, 3, 5, 7, 9, 11, 13, 15, 40. (2 decimals)
solution: $104 / 9 = 11.56$.
:::

::: problem id=t2 type=numeric answer="9"
Find the median of 1, 3, 5, 7, 9, 11, 13, 15, 40.
solution: 9 values: the 5th is 9.
:::

::: problem id=t3 type=numeric answer="10"
For 1, 3, 5, 7, 9, 11, 13, 15, 40, what is the IQR?
solution: Lower half 1, 3, 5, 7: $Q_1 = 4$. Upper half 11, 13, 15, 40: $Q_3 = 14$. $IQR = 10$.
:::

::: problem id=t4 type=choice
For 1, 3, 5, 7, 9, 11, 13, 15, 40 ($Q_1 = 4$, $Q_3 = 14$), is 40 an outlier?
- [x] Yes: it's above the upper fence of 29
- [ ] No: it's below the upper fence of 29
- [ ] No: outliers must be below $Q_1$
solution: $14 + 1.5(10) = 29$, and $40 > 29$.
:::

::: problem id=t5 type=numeric answer="2"
Find the sample standard deviation of 1, 3, 5.
solution: Mean 3. Squared deviations 4, 0, 4, sum 8. $s^2 = 8/2 = 4$, $s = 2$.
:::

::: problem id=t6 type=numeric answer="-1.25" tolerance=0.01
Heights have mean 170 cm and SD 8 cm. What is the z-score of 160 cm?
solution: $(160 - 170)/8 = -1.25$.
:::

::: problem id=t7 type=numeric answer="2.5"
Bell-shaped data has mean 60 and SD 5. About what percent of values are **above** 70?
solution: 70 is 2 SD above. 95% lie between 50 and 70; the other 5% is split between the tails: 2.5%.
:::

::: problem id=t8 type=numeric answer="0.6"
Of 50 cars in a lot, 18 are white and 12 are black. What is the relative frequency of cars that are white or black?
solution: $(18 + 12)/50 = 0.6$.
:::
