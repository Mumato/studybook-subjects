---
id: dis-test
title: Discrete distributions test
pass: 0.8
---
::: problem id=t1 type=numeric answer="1.7"
X = 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2. Find $E(X)$.
solution: $0.3 + 0.8 + 0.6 = 1.7$.
:::

::: problem id=t2 type=numeric answer="0.833" tolerance=0.01
Roll a die. A six wins \$20; anything else loses \$3. What are your expected winnings per roll? (3 decimals)
solution: $20/6 - 3(5/6) = (20 - 15)/6 = 0.833$.
:::

::: problem id=t3 type=numeric answer="120"
What is $\binom{10}{3}$?
solution: $\frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = 120$.
:::

::: problem id=t4 type=numeric answer="0.356" tolerance=0.001
A quarter of emails are spam. Of 6 emails, what is the probability exactly 1 is spam? (3 decimals)
solution: $\binom{6}{1}(0.25)(0.75)^5 = 6 \times 0.25 \times 0.2373 = 0.356$.
:::

::: problem id=t5 type=numeric answer="3.464" tolerance=0.01
$X$ is binomial with $n = 50$ and $p = 0.4$. Find its standard deviation. (3 decimals)
solution: $\sqrt{50 \times 0.4 \times 0.6} = \sqrt{12} = 3.464$.
:::

::: problem id=t6 type=numeric answer="0.128"
A player makes 20% of long shots. What is the probability the first make is on the 3rd shot?
solution: $0.8^2 \times 0.2 = 0.128$.
:::

::: problem id=t7 type=numeric answer="0.0498" tolerance=0.001
Calls arrive at 3 per hour on average (Poisson). What is the probability of no calls in an hour? (4 decimals)
solution: $e^{-3} = 0.0498$.
:::

::: problem id=t8 type=choice
For a binomial count to apply, the trials must be:
- [x] fixed in number, independent, with the same success chance
- [ ] continued until the first success
- [ ] dependent on each other
- [ ] measured on a continuous scale
solution: Those are the binomial conditions.
:::
