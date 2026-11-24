---
id: dsc-03
title: Quartiles, boxplots and outliers
---
The center isn't the whole story: two classes can have the same average and very different spreads. Quartiles split sorted data into four equal parts. (OpenStax ch. 2)

::: rule
- Sort the data. $Q_2$ is the median. $Q_1$ is the median of the **lower half**, $Q_3$ the median of the **upper half** (with an odd count, leave the middle value out of both halves).
- **Range** $= \max - \min$. **Interquartile range** $IQR = Q_3 - Q_1$: the spread of the middle 50%.
- **Five-number summary:** min, $Q_1$, median, $Q_3$, max. A **boxplot** draws it: a box from $Q_1$ to $Q_3$ with a line at the median, and whiskers out to the data.
- **Outlier rule:** a value below $Q_1 - 1.5 \cdot IQR$ or above $Q_3 + 1.5 \cdot IQR$ is a potential outlier.
:::

::: example
Data: 20, 22, 25, 27, 31, 33, 35, 60 (8 values).
Median $= (27 + 31)/2 = 29$. Lower half 20, 22, 25, 27: $Q_1 = 23.5$. Upper half 31, 33, 35, 60: $Q_3 = 34$.
$IQR = 10.5$. Upper fence $= 34 + 1.5(10.5) = 49.75$. 60 is above it: an outlier.
:::

::: problem id=p1 type=numeric answer="74"
Test scores: 61, 70, 74, 78, 80, 83, 85, 88, 90, 95, 99. What is $Q_1$?
hint: 11 values: the median is the 6th. The lower half is the 5 values before it.
solution: The median is 83. Lower half: 61, 70, 74, 78, 80, so $Q_1 = 74$.
:::

::: problem id=p2 type=numeric answer="90"
Same scores: 61, 70, 74, 78, 80, 83, 85, 88, 90, 95, 99. What is $Q_3$?
solution: Upper half: 85, 88, 90, 95, 99, so $Q_3 = 90$.
:::

::: problem id=p3 type=numeric answer="16"
Using $Q_1 = 74$ and $Q_3 = 90$, what is the IQR?
solution: $90 - 74 = 16$.
:::

::: problem id=p4 type=numeric answer="38"
What is the range of 61, 70, 74, 78, 80, 83, 85, 88, 90, 95, 99?
solution: $99 - 61 = 38$.
:::

::: problem id=p5 type=numeric answer="5"
Data: 5, 7, 8, 9, 10, 12, 13, 20. What is the IQR?
solution: Lower half 5, 7, 8, 9: $Q_1 = 7.5$. Upper half 10, 12, 13, 20: $Q_3 = 12.5$. $IQR = 5$.
:::

::: problem id=p6 type=numeric answer="20"
For that data, $Q_3 = 12.5$ and $IQR = 5$. What is the upper fence $Q_3 + 1.5 \cdot IQR$?
solution: $12.5 + 7.5 = 20$. The value 20 sits exactly on the fence, so it is **not** above it: not an outlier.
:::

::: problem id=p7 type=choice
A boxplot's box runs from 40 to 70, with the median line at 45. The data is probably:
- [x] skewed right
- [ ] skewed left
- [ ] symmetric
solution: The median is close to $Q_1$: the upper half of the middle 50% is stretched out, so the right side is longer.
:::

::: problem id=p8 type=choice creative=true
Why is the IQR often a better measure of spread than the range?
- [ ] It's always bigger
- [x] One extreme value can change the range a lot, but barely moves the IQR
- [ ] It uses every value equally
solution: The range depends only on the two most extreme values. The IQR looks at the middle half, so outliers don't affect it.
:::
