---
id: dat-02
title: Mean, median, mode and range
---
One number can sum up a whole data set. Different "averages" tell different stories.

::: rule
- **Mean:** add all the values, divide by how many there are.
- **Median:** the middle value once the data is sorted. With an even count, it is the mean of the two middle values.
- **Mode:** the value that appears most often (there can be several, or none).
- **Range:** largest value minus smallest value.

**Weighted mean:** multiply each value by its weight, add, then divide by the total weight. With percent weights that add to 100%, just add value × weight.

An **outlier** is a value far from the others. It pulls the mean a lot but hardly moves the median.
:::

::: example
Data: 4, 8, 6, 5, 3, 8, 1.

Sorted: 1, 3, 4, 5, 6, 8, 8.

Mean: $35 \div 7 = 5$. Median: the 4th value, 5. Mode: 8. Range: $8 - 1 = 7$.
:::

::: example
Homework counts 20% (score 90), tests 50% (score 80), the final 30% (score 70).

$0.2(90) + 0.5(80) + 0.3(70)$
$= 18 + 40 + 21 = 79$.
:::

::: problem id=p1 type=numeric answer="7"
Find the mean of 6, 9, 3, 10, 7.
solution: $6 + 9 + 3 + 10 + 7 = 35$, and $35 \div 5 = 7$.
:::

::: problem id=p2 type=numeric answer="9"
Find the median of 12, 5, 9, 15, 7.
hint: Sort them first.
solution: Sorted: 5, 7, 9, 12, 15. The middle one is **9**.
:::

::: problem id=p3 type=numeric answer="7"
Find the median of 4, 10, 6, 8.
solution: Sorted: 4, 6, 8, 10. Two middle values: $\frac{6 + 8}{2} = 7$.
:::

::: problem id=p4 type=numeric answer="7"
Find the mode of 3, 7, 7, 2, 9, 7, 2.
solution: 7 appears three times, more than any other: **7**.
:::

::: problem id=p5 type=numeric answer="18"
Find the range of 15, 4, 22, 9, 11.
solution: $22 - 4 = 18$.
:::

::: problem id=p6 type=numeric answer="82.5"
Three tests count 25%, 25% and 50%. The scores are 80, 70 and 90. What is the weighted mean?
solution: $0.25(80) + 0.25(70) + 0.5(90)$
$= 20 + 17.5 + 45 = 82.5$.
:::

::: problem id=p7 type=choice
Data: 5, 6, 7, 6, 50. Which is pulled more by the 50?
- [x] The mean
- [ ] The median
- [ ] Both the same
solution: Mean $= 74 \div 5 = 14.8$, far above most values. Median $= 6$, still typical. The outlier pulls the mean.
:::

::: problem id=p8 type=numeric answer="14"
The mean of four numbers is 12. Three of them are 10, 15 and 9. What is the fourth?
hint: The four numbers add up to $4 \times 12$.
solution: Total $48$. $48 - (10 + 15 + 9) = 48 - 34 = 14$.
:::

::: problem id=x1 type=numeric answer="14" set=extra
Find the mean of 12, 15, 9, 20.
solution: $56 \div 4 = 14$.
:::

::: problem id=x2 type=numeric answer="6" set=extra
Find the median of 3, 9, 1, 7, 4, 8, 6.
solution: Sorted: 1, 3, 4, 6, 7, 8, 9. The 4th value is **6**.
:::

::: problem id=x3 type=numeric answer="19.5" set=extra
Find the median of 21, 14, 18, 30, 25, 12.
solution: Sorted: 12, 14, 18, 21, 25, 30. $\frac{18 + 21}{2} = 19.5$.
:::

::: problem id=x4 type=numeric answer="15" set=extra
Find the range of $-3$, 8, 2, $-7$, 5.
solution: $8 - (-7) = 15$.
:::

::: problem id=x5 type=multi answers="4;6" set=extra
Find the mode of 2, 4, 4, 5, 6, 6, 9. Type every mode, like 1, 2.
solution: 4 and 6 both appear twice. There are two modes: **4 and 6**.
:::

::: problem id=x6 type=numeric answer="4" set=extra
Find the mean of 2.5, 3.5, 4, 6.
solution: $16 \div 4 = 4$.
:::

::: problem id=x7 type=numeric answer="3" set=extra
Find the mean of $-4$, 6, $-2$, 8, 7.
solution: $-4 + 6 - 2 + 8 + 7 = 15$, and $15 \div 5 = 3$.
:::

::: problem id=x8 type=numeric answer="2.1" set=extra
In a survey, 2 people have 1 pet, 5 people have 2 pets and 3 people have 3 pets. What is the mean number of pets?
solution: Total pets $2(1) + 5(2) + 3(3) = 21$. People: 10. Mean $21 \div 10 = 2.1$.
:::

::: problem id=x9 type=numeric answer="2" set=extra
Same survey: 2 people have 1 pet, 5 have 2 pets, 3 have 3 pets. What is the median?
solution: Sorted: 1, 1, 2, 2, 2, 2, 2, 3, 3, 3. The 5th and 6th values are both 2, so the median is **2**.
:::

::: problem id=x10 type=numeric answer="5" set=extra
Ron says the median of 8, 2, 5 is 2, because 2 is in the middle. What is the correct median?
solution: Sort first: 2, 5, 8. The median is **5**.
:::

::: problem id=x11 type=choice set=extra
In a street, most houses cost about 300000 dollars, but one mansion costs 5000000. Which gives the best "typical" price?
- [x] The median
- [ ] The mean
- [ ] The range
solution: The mansion is an outlier. It pulls the mean far up, but the median stays near a typical house.
:::

::: problem id=x12 type=numeric answer="420" set=extra
The mean of 5 test scores is 84. What is the total of the scores?
solution: $5 \times 84 = 420$.
:::

::: problem id=x13 type=numeric answer="95" set=extra
Kim's mean on 4 tests is 85. What must she score on the 5th test to make her mean 87?
hint: Compare the total she needs with the total she has.
solution: Needed total $5 \times 87 = 435$. Has $4 \times 85 = 340$. She needs $435 - 340 = 95$.
:::

::: problem id=x14 type=numeric answer="3.25" set=extra
A student gets an A (4 points) in a 3-credit course, a B (3 points) in a 4-credit course and a C (2 points) in a 1-credit course. What is the grade point average, weighted by credits?
solution: $3(4) + 4(3) + 1(2) = 26$ points over $8$ credits: $26 \div 8 = 3.25$.
:::

::: problem id=x15 type=numeric answer="8.5" set=extra
Data: 10, 12, 11, 13, 54. By how much does the mean go down if the 54 is removed?
hint: Find the mean with and without 54.
solution: With: $100 \div 5 = 20$. Without: $46 \div 4 = 11.5$. Down by $20 - 11.5 = 8.5$.
:::

::: problem id=x16 type=numeric answer="15" set=extra
Six numbers have a mean of 10. One is removed, and the other five have a mean of 9. Which number was removed?
hint: Compare the totals.
solution: Totals: $6 \times 10 = 60$ and $5 \times 9 = 45$. Removed: $60 - 45 = 15$.
:::

::: problem id=x17 type=numeric answer="76" set=extra
A class of 20 has a mean score of 70. A class of 30 has a mean of 80. What is the mean of all 50 students?
hint: It is not just $\frac{70 + 80}{2}$. Use totals.
solution: $20 \times 70 = 1400$ and $30 \times 80 = 2400$. $3800 \div 50 = 76$.
:::

::: problem id=x18 type=numeric answer="85.1" set=extra
Homework counts 15% (92), quizzes 25% (84), the midterm 25% (78) and the final 35% (88). What is the course grade?
hint: Multiply each score by its weight as a decimal, then add.
solution: $13.8 + 21 + 19.5 + 30.8 = 85.1$.
:::

::: problem id=x19 type=choice set=extra
Every value in a data set goes up by 5. What happens?
- [x] The mean goes up by 5 and the range stays the same.
- [ ] The mean and the range both go up by 5.
- [ ] The mean stays the same and the range goes up by 5.
- [ ] Nothing changes.
solution: Everything shifts up 5, so the mean (and median) rise by 5. Largest minus smallest doesn't change.
:::

::: problem id=x20 type=numeric answer="11" set=extra creative=true
Five whole numbers have a single mode of 4, a median of 5 and a mean of 6. What is the largest the biggest number can be?
hint: The total is 30. Two of the numbers must be 4, and no other value may appear twice.
solution: Sorted: 4, 4, 5, d, e with $d + e = 30 - 13 = 17$. d can't be 5 (5 would tie 4 as mode), so $d = 6$ and $e = 11$. Check: 4, 4, 5, 6, 11.
:::
