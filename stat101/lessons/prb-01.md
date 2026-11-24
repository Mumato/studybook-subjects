---
id: prb-01
title: Probability basics
---
Probability measures how likely something is, on a scale from 0 (impossible) to 1 (certain). (OpenStax ch. 3)

::: rule
- The **sample space** $S$ is the list of all possible outcomes. An **event** is a set of outcomes.
- When all outcomes are equally likely: $P(A) = \frac{\text{outcomes in } A}{\text{outcomes in } S}$.
- **Complement:** $P(\text{not } A) = 1 - P(A)$. Useful for "at least one" questions.
- Over many repetitions, the share of times an event happens settles near its probability (the **law of large numbers**).
:::

::: example
Roll two dice: there are $6 \times 6 = 36$ equally likely outcomes.
A sum of 7 happens 6 ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1): $P = 6/36 = 1/6$.
At least one six: $P(\text{no six}) = \frac{5}{6} \cdot \frac{5}{6} = \frac{25}{36}$, so $P = 1 - \frac{25}{36} = \frac{11}{36}$.
:::

::: problem id=p1 type=numeric answer="5/36" tolerance=0.001
Roll two dice. What is the probability the sum is 8? (A fraction, or 3 decimals.)
hint: List the pairs: 2+6, 3+5, ...
solution: 2+6, 3+5, 4+4, 5+3, 6+2: 5 ways out of 36. $P = 5/36 = 0.139$.
:::

::: problem id=p2 type=numeric answer="3/13" tolerance=0.001
A card is drawn from a standard 52-card deck. What is the probability it's a face card (jack, queen or king)?
solution: 3 face cards in each of 4 suits: 12. $12/52 = 3/13 = 0.231$.
:::

::: problem id=p3 type=numeric answer="0.125"
A fair coin is tossed 3 times. What is the probability of 3 heads?
solution: 8 equally likely outcomes, one of them HHH: $1/8 = 0.125$.
:::

::: problem id=p4 type=numeric answer="0.875"
A fair coin is tossed 3 times. What is the probability of **at least one** head?
solution: The complement is "no heads" (TTT), probability $1/8$. $1 - 1/8 = 7/8 = 0.875$.
:::

::: problem id=p5 type=numeric answer="0.65"
The chance of rain tomorrow is 0.35. What is the chance of no rain?
solution: $1 - 0.35 = 0.65$.
:::

::: problem id=p6 type=choice
Which of these can **not** be a probability?
- [ ] 0
- [ ] 0.999
- [x] 1.2
- [ ] 1
solution: Probabilities lie between 0 and 1.
:::

::: problem id=p7 type=choice
A fair coin has landed heads 6 times in a row. The probability of heads on the next toss is:
- [ ] less than 0.5: tails is "due"
- [x] 0.5
- [ ] more than 0.5: heads is "hot"
solution: The coin has no memory. Believing tails is "due" is the gambler's fallacy. The law of large numbers is about the long run, not the next toss.
:::
