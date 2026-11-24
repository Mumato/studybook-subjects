---
id: clt-test
title: Central limit theorem test
pass: 0.8
---
::: problem id=t1 type=numeric answer="2.5"
$\sigma = 15$ and $n = 36$. What is the standard error of $\bar{x}$?
solution: $15/6 = 2.5$.
:::

::: problem id=t2 type=numeric answer="0.0548"
IQ: $\mu = 100$, $\sigma = 15$. For a sample of 36, find $P(\bar{x} > 104)$. Given $\Phi(1.6) = 0.9452$.
solution: $z = 4/2.5 = 1.6$; $1 - 0.9452 = 0.0548$.
:::

::: problem id=t3 type=numeric answer="200"
With $n = 50$ the standard error is 4. What sample size gives a standard error of 2?
solution: Half the SE needs 4 times the sample: 200.
:::

::: problem id=t4 type=choice
A population is skewed left. For samples of 60, the distribution of $\bar{x}$ is:
- [ ] skewed left, like the population
- [x] approximately normal
- [ ] uniform
solution: The CLT: with $n \ge 30$, sample means are about normal whatever the population shape.
:::

::: problem id=t5 type=numeric answer="0.04"
$p = 0.4$ and $n = 150$. What is the standard error of $\hat{p}$?
solution: $\sqrt{0.24/150} = \sqrt{0.0016} = 0.04$.
:::

::: problem id=t6 type=numeric answer="0.1056"
$p = 0.4$, $n = 150$. Find $P(\hat{p} > 0.45)$. Given $\Phi(1.25) = 0.8944$.
solution: $z = 0.05/0.04 = 1.25$; $1 - 0.8944 = 0.1056$.
:::

::: problem id=t7 type=numeric answer="0.9544"
A population has $\mu = 70$, $\sigma = 9$. For samples of 81, find $P(68 < \bar{x} < 72)$. Given $\Phi(2) = 0.9772$.
solution: SE $= 9/9 = 1$, $z = \pm 2$: $0.9772 - 0.0228 = 0.9544$.
:::

::: problem id=t8 type=choice
Which sample makes the normal approximation for $\hat{p}$ valid?
- [ ] $n = 40$, $p = 0.1$
- [x] $n = 200$, $p = 0.1$
- [ ] $n = 30$, $p = 0.2$
solution: $200(0.1) = 20$ and $200(0.9) = 180$, both at least 10. The others fail: $40(0.1) = 4$ and $30(0.2) = 6$.
:::
