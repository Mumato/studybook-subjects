---
id: prb-04
title: Two-way tables and tree diagrams
---
Real questions often cross two variables, like smoking and coughing. Count each combination, then read any probability off the counts. (OpenStax ch. 3)

::: rule
- In a **two-way (contingency) table**, each count belongs to one row group **and** one column group. Divide by the right total: the grand total for "and" questions, a row or column total for "given" questions.
- A **tree diagram** lists the first stage's branches, then each branch's conditional chances. Multiply along a path for "and"; add paths that lead to the same result.
- Reversing a condition (from $P(\text{pos} \mid \text{sick})$ to $P(\text{sick} \mid \text{pos})$): $P(\text{sick} \mid \text{pos}) = \frac{P(\text{sick and pos})}{P(\text{pos})}$.
:::

::: example
A disease affects 2% of people. A test is positive for 95% of the sick and, by mistake, for 8% of the healthy.
$P(\text{sick and pos}) = 0.02 \times 0.95 = 0.019$. $P(\text{healthy and pos}) = 0.98 \times 0.08 = 0.0784$.
$P(\text{pos}) = 0.0974$, so $P(\text{sick} \mid \text{pos}) = 0.019 / 0.0974 = 0.195$. Most positives are false alarms, because the disease is rare.
:::

::: problem id=p1 type=numeric answer="0.35"
Of 300 adults, 60 smoke and 45 of the smokers have a cough. Of the 240 non-smokers, 60 have a cough. What is $P(\text{cough})$?
solution: $(45 + 60)/300 = 105/300 = 0.35$.
:::

::: problem id=p2 type=numeric answer="0.75"
Same 300 adults (60 smokers, 45 of them cough; 240 non-smokers, 60 of them cough). What is $P(\text{cough} \mid \text{smoker})$?
solution: Only look at the 60 smokers: $45/60 = 0.75$.
:::

::: problem id=p3 type=numeric answer="3/7" tolerance=0.001
Same adults. What is $P(\text{smoker} \mid \text{cough})$? (A fraction, or 3 decimals.)
solution: 105 people cough, 45 of them smokers: $45/105 = 3/7 = 0.429$.
:::

::: problem id=p4 type=numeric answer="0.15"
Same adults. What is $P(\text{smoker and cough})$?
solution: Divide by the grand total: $45/300 = 0.15$.
:::

::: problem id=p5 type=numeric answer="0.038"
Machine A makes 60% of a factory's parts and 3% of its parts are defective. Machine B makes the other 40%, and 5% of its parts are defective. What is the probability a random part is defective?
solution: $0.6(0.03) + 0.4(0.05) = 0.018 + 0.020 = 0.038$.
:::

::: problem id=p6 type=numeric answer="0.474" tolerance=0.001
Same factory. A part is defective. What is the probability it came from machine A? (3 decimals)
solution: $0.018 / 0.038 = 0.474$.
:::

::: problem id=p7 type=choice creative=true
In the disease example, $P(\text{pos} \mid \text{sick}) = 0.95$ but $P(\text{sick} \mid \text{pos}) = 0.195$. Why so different?
- [ ] The test is broken
- [x] Healthy people vastly outnumber sick ones, so even a small false-positive rate makes many false positives
- [ ] Conditional probabilities are always about 0.2
solution: 98% of people are healthy; 8% of them is 0.0784 of everyone, four times the 0.019 who are sick and positive.
:::
