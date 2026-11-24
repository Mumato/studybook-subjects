---
id: nrm-03
title: Working with normal distributions
---
Any normal variable becomes standard normal once you turn values into z-scores. Going backwards, a z-value turns into a cutoff. (OpenStax ch. 6)

::: rule
If $X$ is normal with mean $\mu$ and SD $\sigma$:
- **Probability from a value:** $z = \frac{x - \mu}{\sigma}$, then use $\Phi(z)$.
- **Value from a probability** (a percentile or cutoff): find the $z$ with that area, then $x = \mu + z\sigma$.
:::

::: example
Heights are normal with $\mu = 170$ cm and $\sigma = 8$ cm.
$P(X < 182)$: $z = (182 - 170)/8 = 1.5$, and $\Phi(1.5) = 0.9332$.
The 25th percentile: $\Phi(-0.674) = 0.25$, so $x = 170 - 0.674(8) = 164.6$ cm.
:::

::: problem id=p1 type=numeric answer="0.0359"
Exam scores are normal, $\mu = 72$, $\sigma = 10$. Given $\Phi(1.8) = 0.9641$, what is the probability a score is above 90?
solution: $z = (90 - 72)/10 = 1.8$. $P = 1 - 0.9641 = 0.0359$.
:::

::: problem id=p2 type=numeric answer="0.7888"
Heights: $\mu = 170$, $\sigma = 8$. Given $\Phi(1.25) = 0.8944$, find $P(160 < X < 180)$.
solution: $z = \pm 1.25$. $0.8944 - 0.1056 = 0.7888$.
:::

::: problem id=p3 type=numeric answer="0.0228"
Battery life is normal, $\mu = 40$ hours, $\sigma = 5$. Given $\Phi(-2) = 0.0228$, what share of batteries last under 30 hours?
solution: $z = (30 - 40)/5 = -2$, so $0.0228$ (2.28%).
:::

::: problem id=p4 type=numeric answer="0.8185" tolerance=0.001
Same batteries. Given $\Phi(-1) = 0.1587$ and $\Phi(2) = 0.9772$, find $P(35 < X < 50)$.
solution: $z$ from $-1$ to $2$: $0.9772 - 0.1587 = 0.8185$.
:::

::: problem id=p5 type=numeric answer="628" tolerance=0.5
Test scores are normal, $\mu = 500$, $\sigma = 100$. The top 10% get a prize. Given $\Phi(1.28) = 0.90$, what is the lowest prize score?
solution: $x = 500 + 1.28(100) = 628$.
:::

::: problem id=p6 type=numeric answer="80.4" tolerance=0.1
Scores: $\mu = 72$, $\sigma = 10$. Given $\Phi(0.84) = 0.80$, what score is the 80th percentile?
solution: $x = 72 + 0.84(10) = 80.4$.
:::

::: problem id=p7 type=numeric answer="6.5" tolerance=0.01 creative=true
A machine fills bags with a normal amount, $\sigma = 0.2$ kg. The owner wants only 0.62% of bags under 6 kg. Given $\Phi(-2.5) = 0.0062$, at what mean should the machine be set?
hint: 6 must sit 2.5 SDs below the mean.
solution: $6 = \mu - 2.5(0.2)$, so $\mu = 6.5$ kg.
:::
