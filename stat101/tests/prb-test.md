---
id: prb-test
title: Probability test
pass: 0.8
---
::: problem id=t1 type=numeric answer="1/6" tolerance=0.001
Roll two dice. What is the probability the sum is 7? (A fraction, or 3 decimals.)
solution: 6 of the 36 outcomes: $1/6 = 0.167$.
:::

::: problem id=t2 type=numeric answer="11/36" tolerance=0.001
Roll two dice. What is the probability of at least one six? (A fraction, or 3 decimals.)
solution: $1 - (5/6)^2 = 11/36 = 0.306$.
:::

::: problem id=t3 type=numeric answer="0.6"
$P(A) = 0.35$, $P(B) = 0.45$, $P(A \text{ and } B) = 0.2$. Find $P(A \text{ or } B)$.
solution: $0.35 + 0.45 - 0.2 = 0.6$.
:::

::: problem id=t4 type=numeric answer="0.25"
Of 240 non-smokers, 60 have a cough. What is $P(\text{cough} \mid \text{non-smoker})$?
solution: $60/240 = 0.25$.
:::

::: problem id=t5 type=numeric answer="0.18"
A flight is late with probability 0.3 and your connection is late with probability 0.6, independently. What is the probability both are late?
solution: $0.3 \times 0.6 = 0.18$.
:::

::: problem id=t6 type=choice
Which statement shows A and B are **independent**?
- [ ] $P(A \text{ and } B) = 0$
- [x] $P(A \mid B) = P(A)$
- [ ] $P(A) + P(B) = 1$
- [ ] $P(A \text{ or } B) = P(A) + P(B)$
solution: Knowing B doesn't change A's chance. Options 1 and 4 describe mutually exclusive events.
:::

::: problem id=t7 type=numeric answer="0.0974" tolerance=0.0001
A disease affects 2% of people. A test is positive for 95% of the sick and for 8% of the healthy. What is the probability a random person tests positive? (4 decimals)
solution: $0.02(0.95) + 0.98(0.08) = 0.019 + 0.0784 = 0.0974$.
:::

::: problem id=t8 type=numeric answer="0.195" tolerance=0.001
Same test. A person tests positive. What is the probability they are sick? (3 decimals)
solution: $0.019 / 0.0974 = 0.195$.
:::
