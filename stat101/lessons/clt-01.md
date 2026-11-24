---
id: clt-01
title: Sampling distributions
---
Take a sample, compute its mean. Take another sample: you get a slightly different mean. The **sampling distribution** describes how a statistic varies from sample to sample. (OpenStax ch. 7)

::: rule
For random samples of size $n$ from a population with mean $\mu$ and SD $\sigma$, the sample mean $\bar{x}$ has:
- mean $\mu_{\bar{x}} = \mu$: on average it hits the target (it's **unbiased**);
- standard deviation $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$, called the **standard error**. Bigger samples give less variable means.
- To halve the standard error, you need **4 times** the sample size.
:::

::: example
IQ scores have $\mu = 100$ and $\sigma = 15$. For samples of 36 people, $\bar{x}$ has mean 100 and standard error $15/\sqrt{36} = 2.5$.
A single person is often 15 points from 100; a sample average of 36 people is rarely more than 5 points away.
:::

::: problem id=p1 type=numeric answer="4"
A population has $\sigma = 20$. What is the standard error of $\bar{x}$ for samples of 25?
solution: $20/\sqrt{25} = 20/5 = 4$.
:::

::: problem id=p2 type=numeric answer="1.5"
A population has $\sigma = 12$. What is the standard error of $\bar{x}$ for samples of 64?
solution: $12/8 = 1.5$.
:::

::: problem id=p3 type=numeric answer="80"
A population has mean 80 and SD 10. Samples of 100 are taken. What is the mean of the sampling distribution of $\bar{x}$?
solution: It equals the population mean: 80.
:::

::: problem id=p4 type=numeric answer="400"
With samples of 100, the standard error is 3. How big must samples be to get a standard error of 1.5?
solution: Halving the SE takes 4 times the sample: $400$.
:::

::: problem id=p5 type=numeric answer="1"
$\sigma = 10$ and $n = 100$. What is the standard error?
solution: $10/\sqrt{100} = 1$.
:::

::: problem id=p6 type=choice
As the sample size grows, the sampling distribution of $\bar{x}$:
- [ ] gets wider
- [x] gets narrower around $\mu$
- [ ] moves away from $\mu$
- [ ] stays the same
solution: The standard error $\sigma/\sqrt{n}$ shrinks as $n$ grows.
:::

::: problem id=p7 type=choice
A **statistic** is unbiased when:
- [x] its sampling distribution is centred on the parameter it estimates
- [ ] it always equals the parameter
- [ ] its standard error is 0
solution: Unbiased means right on average, not right every time.
:::
