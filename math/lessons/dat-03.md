---
id: dat-03
title: Probability basics
---
Probability measures how likely something is, from 0 (impossible) to 1 (certain).

::: rule
The **sample space** is the list of all possible outcomes. When they are equally likely:

$$P(\text{event}) = \frac{\text{favourable outcomes}}{\text{all outcomes}}$$

The **complement** "not A" happens whenever A doesn't: $P(\text{not } A) = 1 - P(A)$.

Two trials are **independent** when one doesn't change the other (coin flips, die rolls, drawing with replacement). Then
$P(A \text{ and } B) = P(A) \times P(B)$.
For two dice there are $6 \times 6 = 36$ outcomes.
:::

::: example
Roll a die. Sample space: 1, 2, 3, 4, 5, 6.

$P(\text{even}) = \frac{3}{6} = \frac{1}{2}$. $P(\text{not } 6) = 1 - \frac{1}{6} = \frac{5}{6}$.
:::

::: example
Flip a coin and roll a die: $2 \times 6 = 12$ outcomes.

$P(\text{heads and } 6) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$.
:::

Type probabilities as fractions, like 1/6, or as decimals.

::: problem id=p1 type=numeric answer="1/6"
You roll a die. What is $P(4)$?
solution: One favourable outcome out of 6: $\frac{1}{6}$.
:::

::: problem id=p2 type=numeric answer="1/2"
A bag has 3 red, 5 blue and 2 green marbles. You pick one. What is $P(\text{blue})$?
solution: $\frac{5}{10} = \frac{1}{2}$.
:::

::: problem id=p3 type=numeric answer="4/5"
Same bag: 3 red, 5 blue, 2 green. What is $P(\text{not green})$?
hint: Use the complement.
solution: $P(\text{green}) = \frac{2}{10}$, so $P(\text{not green}) = 1 - \frac{2}{10} = \frac{8}{10} = \frac{4}{5}$.
:::

::: problem id=p4 type=numeric answer="8"
You flip 3 coins. How many outcomes are in the sample space?
solution: $2 \times 2 \times 2 = 8$ (HHH, HHT, HTH, HTT, THH, THT, TTH, TTT).
:::

::: problem id=p5 type=numeric answer="1/4"
You flip two coins. What is the probability both land heads?
solution: Independent: $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.
:::

::: problem id=p6 type=choice
An event has probability 0. What does that mean?
- [x] It can't happen.
- [ ] It is certain.
- [ ] It happens half the time.
- [ ] It is very likely.
solution: 0 means impossible; 1 means certain.
:::

::: problem id=p7 type=numeric answer="1/6"
You roll two dice. What is the probability the sum is 7?
hint: List the pairs: (1, 6), (2, 5), ...
solution: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 of 36. $\frac{6}{36} = \frac{1}{6}$.
:::

::: problem id=c1 type=numeric answer="11/36" creative=true
You roll a die twice. What is the probability of getting at least one 6?
hint: Find the probability of no 6 at all, then use the complement.
solution: $P(\text{no } 6) = \frac{5}{6} \times \frac{5}{6} = \frac{25}{36}$. So $P(\text{at least one } 6) = 1 - \frac{25}{36} = \frac{11}{36}$.
:::

::: problem id=x1 type=numeric answer="1/2" set=extra
You roll a die. What is $P(\text{odd})$?
solution: 1, 3, 5: $\frac{3}{6} = \frac{1}{2}$.
:::

::: problem id=x2 type=numeric answer="3/8" set=extra
A spinner has 8 equal parts numbered 1 to 8. What is the probability of a number greater than 5?
solution: 6, 7, 8: $\frac{3}{8}$.
:::

::: problem id=x3 type=numeric answer="1/4" set=extra
Cards numbered 1 to 20 are shuffled. You draw one. What is the probability it is a multiple of 4?
solution: 4, 8, 12, 16, 20: $\frac{5}{20} = \frac{1}{4}$.
:::

::: problem id=x4 type=numeric answer="0.65" set=extra
The probability that a bus is late is 0.35. What is the probability it is not late?
solution: $1 - 0.35 = 0.65$.
:::

::: problem id=x5 type=numeric answer="60" set=extra
A bag has 4 red and 6 yellow counters. What is the probability of picking yellow, as a percent?
solution: $\frac{6}{10} = 0.6 = 60\%$.
:::

::: problem id=x6 type=choice set=extra
Which number can't be a probability?
- [x] $1.2$
- [ ] $0$
- [ ] $0.5$
- [ ] $1$
solution: Probabilities are between 0 and 1. 1.2 is too big.
:::

::: problem id=x7 type=numeric answer="2/11" set=extra
A letter is picked at random from the 11 letters of PROBABILITY. What is $P(\text{B})$?
solution: B appears twice: $\frac{2}{11}$.
:::

::: problem id=x8 type=numeric answer="6" set=extra
You flip a coin and spin a spinner with 3 colours (red, blue, green). How many outcomes are there?
solution: $2 \times 3 = 6$: H-red, H-blue, H-green, T-red, T-blue, T-green.
:::

::: problem id=x9 type=numeric answer="1/6" set=extra
You roll two dice. What is the probability of a double (both the same)?
solution: (1,1) to (6,6): 6 of 36. $\frac{6}{36} = \frac{1}{6}$.
:::

::: problem id=x10 type=numeric answer="1/36" set=extra
Dan says the chance of a sum of 2 with two dice is $\frac{1}{11}$, because the sums 2 to 12 make 11 outcomes. What is the correct probability?
solution: The sums are not equally likely. Of the 36 equally likely pairs, only (1, 1) gives 2: $\frac{1}{36}$.
:::

::: problem id=x11 type=numeric answer="1/16" set=extra
A coin is flipped 4 times. What is the probability of 4 heads?
solution: $\left(\frac{1}{2}\right)^4 = \frac{1}{16}$.
:::

::: problem id=x12 type=numeric answer="1/4" set=extra
You roll a die twice. What is the probability both rolls are even?
solution: $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.
:::

::: problem id=x13 type=numeric answer="1/24" set=extra
A spinner has 4 equal colours, one of them red. You spin it and roll a die. What is $P(\text{red and } 3)$?
solution: $\frac{1}{4} \times \frac{1}{6} = \frac{1}{24}$.
:::

::: problem id=x14 type=numeric answer="100" set=extra
A fair coin is flipped 200 times. About how many heads do you expect?
solution: $\frac{1}{2} \times 200 = 100$.
:::

::: problem id=x15 type=numeric answer="0.49" set=extra
The chance of rain is 0.3 on each of two days, independently. What is the probability of no rain on either day?
hint: First find P(no rain) for one day.
solution: $P(\text{no rain}) = 0.7$ each day. Both: $0.7 \times 0.7 = 0.49$.
:::

::: problem id=x16 type=numeric answer="1/6" set=extra
You roll two dice. What is the probability the sum is 10 or more?
hint: Count the pairs for 10, 11 and 12.
solution: Sum 10: 3 pairs. 11: 2 pairs. 12: 1 pair. $\frac{6}{36} = \frac{1}{6}$.
:::

::: problem id=x17 type=numeric answer="7/8" set=extra
You guess all 3 questions of a true/false quiz. What is the probability you get at least one wrong?
hint: The complement of "at least one wrong" is "all right".
solution: $P(\text{all right}) = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$. So $1 - \frac{1}{8} = \frac{7}{8}$.
:::

::: problem id=x18 type=numeric answer="13/25" set=extra
A bag has 2 red and 3 blue balls. You draw one, put it back, and draw again. What is the probability both are the same colour?
hint: Add P(both red) and P(both blue).
solution: $\frac{2}{5} \times \frac{2}{5} + \frac{3}{5} \times \frac{3}{5}$
$= \frac{4}{25} + \frac{9}{25} = \frac{13}{25}$.
:::

::: problem id=x19 type=numeric answer="1/1000" set=extra
A lock has 3 dials, each with digits 0 to 9. What is the probability of guessing the code in one try?
hint: How many codes are there?
solution: $10 \times 10 \times 10 = 1000$ codes, one is right: $\frac{1}{1000}$.
:::

::: problem id=x20 type=numeric answer="3/4" set=extra creative=true
You roll two dice and multiply the numbers. What is the probability the product is even?
hint: A product is odd only when both numbers are odd.
solution: $P(\text{both odd}) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. So $P(\text{even}) = 1 - \frac{1}{4} = \frac{3}{4}$.
:::
