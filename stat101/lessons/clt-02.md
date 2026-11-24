---
id: clt-02
title: The central limit theorem
---
Here is the surprise that makes statistics work: sample means are close to normal even when the population isn't. (OpenStax ch. 7)

::: rule
**Central limit theorem (CLT):** for large enough $n$ (a common guide is $n \ge 30$), the sample mean $\bar{x}$ is approximately normal with mean $\mu$ and standard error $\sigma/\sqrt{n}$, **whatever the shape** of the population.
- If the population is itself normal, $\bar{x}$ is normal for any $n$.
- To find a probability about $\bar{x}$: $z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$.
:::

::: example
IQ: $\mu = 100$, $\sigma = 15$. For a sample of 36, what is $P(\bar{x} > 104)$?
Standard error $= 2.5$, $z = (104 - 100)/2.5 = 1.6$, and $\Phi(1.6) = 0.9452$, so $P = 0.0548$.
For one person, $P(X > 104)$ uses $z = 4/15 = 0.27$: about 0.39, far more likely.
:::

::: problem id=p1 type=numeric answer="1.6"
In the example, what z-score did the sample mean 104 have?
solution: $(104 - 100)/2.5 = 1.6$.
:::

::: problem id=p2 type=numeric answer="0.0401"
Commute times are skewed right with $\mu = 30$ min and $\sigma = 8$. For a random sample of 49 commuters, find $P(\bar{x} < 28)$. Given $\Phi(-1.75) = 0.0401$.
solution: SE $= 8/7 = 1.143$. $z = (28 - 30)/1.143 = -1.75$. $P = 0.0401$.
:::

::: problem id=p3 type=numeric answer="0.8164"
A population has $\mu = 50$, $\sigma = 12$. For samples of 64, find $P(48 < \bar{x} < 52)$. Given $\Phi(1.33) = 0.9082$.
solution: SE $= 1.5$, $z = \pm 2/1.5 = \pm 1.33$. $0.9082 - (1 - 0.9082) = 0.8164$.
:::

::: problem id=p4 type=numeric answer="0.0228"
Bags of rice weigh $\mu = 1000$ g with $\sigma = 20$ g. A crate holds 16 bags. Given $\Phi(-2) = 0.0228$, what is the probability the crate's mean bag weight is under 990 g?
solution: SE $= 20/4 = 5$, $z = -10/5 = -2$, so $0.0228$.
:::

::: problem id=p5 type=choice
A population is strongly skewed. Which sample size makes $\bar{x}$ closest to normal?
- [ ] 2
- [ ] 5
- [ ] 10
- [x] 100
solution: The CLT improves as $n$ grows.
:::

::: problem id=p6 type=choice
The CLT says that for large samples:
- [ ] the population becomes normal
- [ ] every sample looks normal
- [x] the distribution of sample means is approximately normal
solution: It's about the sample **means**, not the population or the data in one sample.
:::

::: problem id=p7 type=choice creative=true
Adult weights have $\mu = 80$ kg and $\sigma = 15$ kg. A big lift holds 20 adults with a 1,800 kg limit; a small one holds 2 adults with a 180 kg limit. Both overload when the riders' mean weight is over 90 kg. Which overloads more often?
- [x] The small lift
- [ ] The big lift
- [ ] Equally often
solution: Big lift: SE $= 15/\sqrt{20} = 3.35$, so 90 is $z = 2.98$ (about 0.1% of the time). Small lift: SE $= 15/\sqrt{2} = 10.6$, $z = 0.94$ (about 17%). Means of small groups vary much more.
:::
