---
id: dsc-02
title: Mean, median and mode
---
The **center** of a data set is its typical value. There are three common ways to measure it, and they don't always agree. (OpenStax ch. 2)

::: rule
- **Mean:** add the values and divide by how many there are: $\bar{x} = \frac{\sum x}{n}$. (The population mean is written $\mu$.)
- **Median:** sort the values; it's the middle one. With an even count, it's the average of the two middle values.
- **Mode:** the value that occurs most often (there may be none, or several).
- The mean is pulled toward a long tail and outliers; the median isn't. Skewed right: mean > median. Skewed left: mean < median.
- **Weighted mean:** $\frac{\sum w x}{\sum w}$, when some values count more than others.
:::

::: example
Data: 2, 3, 3, 4, 5, 6, 30.
Mean $= 53 / 7 = 7.57$. Median: the 4th of 7 sorted values $= 4$. Mode $= 3$.
The one big value (30) drags the mean far above the median: the median describes this data better.
:::

::: problem id=p1 type=numeric answer="15"
Find the mean of 12, 15, 11, 18, 14, 20.
solution: $90 / 6 = 15$.
:::

::: problem id=p2 type=numeric answer="14.5"
Find the median of 12, 15, 11, 18, 14, 20.
solution: Sorted: 11, 12, 14, 15, 18, 20. The two middle values are 14 and 15: $(14 + 15) / 2 = 14.5$.
:::

::: problem id=p3 type=numeric answer="6"
Find the median of 4, 8, 6, 5, 3, 8, 7.
solution: Sorted: 3, 4, 5, 6, 7, 8, 8. The 4th value is 6.
:::

::: problem id=p4 type=numeric answer="8"
Find the mode of 4, 8, 6, 5, 3, 8, 7.
solution: 8 occurs twice; every other value once.
:::

::: problem id=p5 type=numeric answer="14"
Five numbers have a mean of 12. Four of them are 10, 14, 9 and 13. What is the fifth?
solution: The total is $5 \times 12 = 60$. $60 - (10 + 14 + 9 + 13) = 60 - 46 = 14$.
:::

::: problem id=p6 type=numeric answer="80.33" tolerance=0.01
You get 85 in a 3-credit course, 72 in a 4-credit course and 90 in a 2-credit course. What is your credit-weighted average? (2 decimals)
solution: $\frac{85(3) + 72(4) + 90(2)}{3 + 4 + 2} = \frac{255 + 288 + 180}{9} = \frac{723}{9} = 80.33$.
:::

::: problem id=p7 type=choice
House prices in a town are skewed right. Which is true?
- [x] The mean is bigger than the median
- [ ] The mean is smaller than the median
- [ ] The mean equals the median
solution: A few very expensive houses pull the mean up; the median stays in the middle. That's why reports use the median house price.
:::
