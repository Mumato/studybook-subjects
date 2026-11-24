---
id: dsc-01
title: Frequencies and histograms
---
A long list of numbers says little until you count how often each value or range turns up. (OpenStax ch. 1-2)

::: rule
- The **frequency** of a value is how many times it occurs. Its **relative frequency** is frequency ÷ total. Relative frequencies add up to 1.
- The **cumulative relative frequency** of a value is the share of data at or below it.
- A **histogram** groups quantitative data into equal-width bins and draws a bar for each bin's frequency. Categorical data uses a **bar chart** or **pie chart**.
- Shape: **symmetric** (two sides mirror), **skewed right** (long tail to the right, toward big values) or **skewed left** (long tail to the left).
:::

::: example
Commute times (minutes) of 18 workers, in bins of 10: 0-10: 3, 10-20: 7, 20-30: 5, 30-40: 2, 40-50: 1.
The relative frequency of 10-20 is $7/18 = 0.389$. The share under 20 minutes is $(3+7)/18 = 0.556$.
Most bars are on the left with a tail to the right: **skewed right**.
:::

::: graph
x -0.5..10.5
y -1.2..8
axes off
grid off
polygon 0,0 2,0 2,3 0,3 fill
polygon 2,0 4,0 4,7 2,7 fill
polygon 4,0 6,0 6,5 4,5 fill
polygon 6,0 8,0 8,2 6,2 fill
polygon 8,0 10,0 10,1 8,1 fill
label 1,3.6 3
label 3,7.6 7
label 5,5.6 5
label 7,2.6 2
label 9,1.6 1
label 0,-0.6 0
label 2,-0.6 10
label 4,-0.6 20
label 6,-0.6 30
label 8,-0.6 40
label 10,-0.6 50
:::

::: problem id=p1 type=numeric answer="0.25"
In a class of 40, 10 students got an A. What is the relative frequency of an A?
solution: $10 / 40 = 0.25$.
:::

::: problem id=p2 type=numeric answer="0.3"
A survey's relative frequencies for "never", "sometimes" and "often" are 0.15, 0.30 and 0.25. The only other answer is "always". What is its relative frequency?
solution: They must add to 1: $1 - 0.15 - 0.30 - 0.25 = 0.30$.
:::

::: problem id=p3 type=numeric answer="0.65"
Households have 1, 2, 3 or 4+ cars with relative frequencies 0.20, 0.45, 0.25, 0.10. What is the cumulative relative frequency of 2 cars (the share with 2 or fewer)?
solution: $0.20 + 0.45 = 0.65$.
:::

::: problem id=p4 type=numeric answer="8"
In the commute example above, how many workers commute at least 20 minutes?
solution: The bins 20-30, 30-40 and 40-50 hold $5 + 2 + 1 = 8$ workers.
:::

::: problem id=p5 type=choice
Incomes in a city: most people earn a modest amount, and a few earn a huge amount. The histogram is most likely:
- [ ] symmetric
- [x] skewed right
- [ ] skewed left
solution: The few huge incomes make a long tail toward the big values (right).
:::

::: problem id=p6 type=choice
Scores on an easy quiz: most students score near 100%, a few score much lower. The shape is:
- [ ] symmetric
- [ ] skewed right
- [x] skewed left
solution: The tail stretches toward the low scores (left).
:::

::: problem id=p7 type=choice
Which graph suits "favourite music genre" of 300 students?
- [ ] histogram
- [x] bar chart
- [ ] boxplot
solution: Genre is categorical. Histograms are for quantitative data in bins.
:::
