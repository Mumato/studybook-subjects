---
id: midb-test
title: Midterm practice exam B
pass: 0.7
---
::: problem id=t1 type=numeric answer="2.582" tolerance=0.01
Find the sample standard deviation of 4, 6, 8, 10. (3 decimals)
solution: Mean 7. Squared deviations 9, 1, 1, 9, sum 20. $s^2 = 20/3$, $s = 2.582$.
:::

::: problem id=t2 type=numeric answer="8"
Find the IQR of 2, 5, 7, 8, 10, 13, 15, 20.
solution: Lower half 2, 5, 7, 8: $Q_1 = 6$. Upper half 10, 13, 15, 20: $Q_3 = 14$. $IQR = 8$.
:::

::: problem id=t3 type=choice
A study compares the grades of students who chose to join a tutoring program with those who didn't. It finds the tutored group did better. Which is right?
- [ ] It's an experiment, so tutoring caused the better grades
- [x] It's observational: more motivated students may have chosen tutoring
- [ ] It's a stratified sample
solution: Nobody was assigned. Motivation is a likely confounding variable.
:::

::: problem id=t4 type=numeric answer="0.4"
$P(A) = 0.3$ and $P(A \text{ and } B) = 0.12$. Find $P(B \mid A)$.
solution: $0.12 / 0.3 = 0.4$.
:::

::: problem id=t5 type=numeric answer="0.4213" tolerance=0.001
Roll a die 3 times. What is the probability of at least one six? (4 decimals)
solution: $1 - (5/6)^3 = 1 - 125/216 = 91/216 = 0.4213$.
:::

::: problem id=t6 type=numeric answer="4.243" tolerance=0.01
10% of parts are faulty. In a batch of 200, what is the standard deviation of the number of faulty parts? (3 decimals)
solution: Binomial: $\sqrt{200 \times 0.1 \times 0.9} = \sqrt{18} = 4.243$.
:::

::: problem id=t7 type=numeric answer="0.2231" tolerance=0.001
Goals in a game average 1.5 (Poisson). What is the probability of no goals? (4 decimals)
solution: $e^{-1.5} = 0.2231$.
:::

::: problem id=t8 type=numeric answer="124.7" tolerance=0.1
IQ scores are normal, $\mu = 100$, $\sigma = 15$. Given $\Phi(1.645) = 0.95$, what score marks the top 5%? (1 decimal)
solution: $100 + 1.645(15) = 124.7$.
:::
