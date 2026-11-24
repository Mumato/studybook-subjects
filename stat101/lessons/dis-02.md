---
id: dis-02
title: The binomial distribution
---
Count the successes in a fixed number of independent tries, each with the same chance: that count is **binomial**. (OpenStax ch. 4)

::: rule
Conditions: $n$ fixed trials, each a success or failure, independent, same success probability $p$. Then $X$ = number of successes, and
$$P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}$$
- $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ counts the orders the $k$ successes can come in.
- Mean $\mu = np$. Standard deviation $\sigma = \sqrt{np(1 - p)}$.
:::

::: example
20% of a store's customers use a coupon. Of the next 10 customers, the chance exactly 2 use one:
$\binom{10}{2}(0.2)^2(0.8)^8 = 45 \times 0.04 \times 0.1678 = 0.302$.
None use one: $0.8^{10} = 0.107$. At least one: $1 - 0.107 = 0.893$.
:::

::: problem id=p1 type=numeric answer="10"
What is $\binom{5}{2}$?
solution: $\frac{5!}{2!\,3!} = \frac{120}{2 \cdot 6} = 10$.
:::

::: problem id=p2 type=numeric answer="0.3125"
Toss a fair coin 5 times. What is the probability of exactly 3 heads?
solution: $\binom{5}{3}(0.5)^5 = 10/32 = 0.3125$.
:::

::: problem id=p3 type=numeric answer="0.2646" tolerance=0.001
A free-throw shooter scores 30% of the time. In 4 shots, what is the probability of exactly 2 scores? (4 decimals)
solution: $\binom{4}{2}(0.3)^2(0.7)^2 = 6 \times 0.09 \times 0.49 = 0.2646$.
:::

::: problem id=p4 type=numeric answer="0.4305" tolerance=0.001
A flight is on time 90% of the time. Over 8 independent flights, what is the probability all 8 are on time? (4 decimals)
solution: $0.9^8 = 0.4305$.
:::

::: problem id=p5 type=numeric answer="30"
30% of voters support a plan. In a random sample of 100, what is the expected number of supporters?
solution: $np = 100 \times 0.3 = 30$.
:::

::: problem id=p6 type=numeric answer="4.583" tolerance=0.01
Same sample: what is the standard deviation of the number of supporters? (3 decimals)
solution: $\sqrt{100 \times 0.3 \times 0.7} = \sqrt{21} = 4.583$.
:::

::: problem id=p7 type=choice
Which is **not** binomial?
- [ ] The number of sixes in 12 rolls of a die
- [ ] The number of defective bulbs in a random sample of 20 from a huge batch
- [x] The number of rolls until you get a six
- [ ] The number of heads in 50 coin tosses
solution: "Until" means the number of trials isn't fixed. That's a geometric variable (next lesson).
:::

::: problem id=p8 type=numeric answer="0.000977" tolerance=0.00001 creative=true
You guess on a 5-question quiz where each question has 4 options. What is the probability you get all 5 right? (6 decimals)
solution: $0.25^5 = 1/1024 = 0.000977$. Guessing is a poor strategy.
:::
