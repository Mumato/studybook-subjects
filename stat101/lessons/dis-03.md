---
id: dis-03
title: Geometric and Poisson distributions
---
Two more counting models: how many tries until the first success, and how many events happen in a stretch of time. (OpenStax ch. 4)

::: rule
- **Geometric:** independent tries with success chance $p$; $X$ = the trial of the first success. $P(X = k) = (1 - p)^{k - 1} p$, and $\mu = \frac{1}{p}$.
- **Poisson:** events happen at random at an average rate $\lambda$ per interval (calls per hour, typos per page). $X$ = the number in one interval:
$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$
Its mean and variance are both $\lambda$.
:::

::: example
A salesperson closes 20% of calls. The first sale comes on the 3rd call with probability $0.8^2 \times 0.2 = 0.128$. On average the first sale comes on call $1/0.2 = 5$.
A help desk gets 3 calls an hour on average. No calls in an hour: $e^{-3} = 0.0498$. Exactly 2: $e^{-3} \cdot 9/2 = 0.224$.
:::

::: problem id=p1 type=numeric answer="0.1875"
25% of cereal boxes hold a prize. What is the probability the **first** prize is in the 2nd box you open?
solution: Miss, then hit: $0.75 \times 0.25 = 0.1875$.
:::

::: problem id=p2 type=numeric answer="4"
Same boxes (25% hold a prize). On average, which box gives the first prize?
solution: $1/p = 1/0.25 = 4$.
:::

::: problem id=p3 type=numeric answer="0.2707" tolerance=0.001
Typos occur at an average of 2 per page. What is the probability a page has exactly 1 typo? (4 decimals)
solution: $e^{-2} \cdot 2^1 / 1! = 2e^{-2} = 0.2707$.
:::

::: problem id=p4 type=numeric answer="0.8647" tolerance=0.001
Same typos (2 per page). What is the probability a page has **at least one** typo? (4 decimals)
solution: $1 - P(0) = 1 - e^{-2} = 0.8647$.
:::

::: problem id=p5 type=numeric answer="0.1954" tolerance=0.001
A road has 4 accidents a month on average. What is the probability of exactly 3 next month? (4 decimals)
solution: $e^{-4} \cdot 4^3 / 3! = e^{-4} \cdot 64/6 = 0.1954$.
:::

::: problem id=p6 type=numeric answer="4"
For that road (4 accidents a month), what is the **variance** of the monthly count?
solution: For a Poisson variable the variance equals the mean: 4.
:::

::: problem id=p7 type=choice
Which situation fits a Poisson model best?
- [ ] The number of heads in 10 tosses
- [x] The number of customers arriving at a shop in 10 minutes
- [ ] The number of tries until a password guess works
solution: Arrivals at a steady average rate, with no fixed number of trials: Poisson. The others are binomial and geometric.
:::
