---
id: dis-01
title: Random variables and expected value
---
A **random variable** turns a chance outcome into a number: the number of heads, the prize you win. Its distribution lists each value and its probability. (OpenStax ch. 4)

::: rule
- A **discrete** random variable $X$ has separate values $x$ with probabilities $P(x)$. Each $P(x)$ is between 0 and 1, and they add to 1.
- **Expected value (mean):** $\mu = E(X) = \sum x \, P(x)$: the long-run average over many repeats.
- **Variance:** $\sigma^2 = \sum (x - \mu)^2 P(x)$. **Standard deviation:** $\sigma = \sqrt{\sigma^2}$.
- A game is **fair** when your expected net winnings are 0.
:::

::: example
X = 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2.
$\mu = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7$.
$\sigma^2 = (-1.7)^2(0.1) + (-0.7)^2(0.3) + (0.3)^2(0.4) + (1.3)^2(0.2) = 0.81$, so $\sigma = 0.9$.
:::

::: problem id=p1 type=numeric answer="0.15"
A family has 0, 1, 2 or 3 children with probabilities 0.20, 0.35, 0.30 and $p$. What is $p$?
solution: The probabilities add to 1: $1 - 0.20 - 0.35 - 0.30 = 0.15$.
:::

::: problem id=p2 type=numeric answer="1.4"
X = 0, 1, 2, 3 with probabilities 0.20, 0.35, 0.30, 0.15. Find $E(X)$.
solution: $0 + 0.35 + 0.60 + 0.45 = 1.4$.
:::

::: problem id=p3 type=numeric answer="0.94" tolerance=0.01
Same X (mean 1.4). Find the variance $\sigma^2$.
solution: $(1.96)(0.2) + (0.16)(0.35) + (0.36)(0.3) + (2.56)(0.15) = 0.392 + 0.056 + 0.108 + 0.384 = 0.94$.
:::

::: problem id=p4 type=numeric answer="0.45"
Same X. What is $P(X \ge 2)$?
solution: $0.30 + 0.15 = 0.45$.
:::

::: problem id=p5 type=numeric answer="-1"
A \$2 ticket wins \$500 with probability 0.002 (otherwise nothing). What are your expected **net** winnings per ticket, in dollars?
solution: Expected prize: $500 \times 0.002 = \$1$. Minus the \$2 ticket: $-\$1$.
:::

::: problem id=p6 type=numeric answer="0"
Roll a die. A six wins you \$10; anything else loses you \$2. What are your expected winnings per roll?
solution: $10 \cdot \frac{1}{6} - 2 \cdot \frac{5}{6} = \frac{10 - 10}{6} = 0$: a fair game.
:::

::: problem id=p7 type=choice
An insurer's expected payout per policy is \$180. What does that mean?
- [ ] Every customer gets \$180
- [x] Averaged over many policies, it pays about \$180 each
- [ ] The most likely payout is \$180
solution: The expected value is a long-run average. Most customers get nothing; a few get a lot.
:::
