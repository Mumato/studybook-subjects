---
id: nrm-01
title: Continuous distributions and the uniform
---
A continuous variable (a time, a weight) can take any value in a range, so we can't list probabilities one value at a time. Instead, probability is **area under a curve**. (OpenStax ch. 5)

::: rule
- A **density curve** sits on or above the x-axis and has total area 1. $P(a < X < b)$ is the area between $a$ and $b$.
- For a continuous variable, $P(X = a) = 0$, so $<$ and $\le$ give the same answer.
- **Uniform** on $[a, b]$: every value equally likely, a flat curve of height $\frac{1}{b - a}$.
$$P(c < X < d) = \frac{d - c}{b - a}$$
$$\mu = \frac{a + b}{2}, \quad \sigma = \frac{b - a}{\sqrt{12}}$$
:::

::: example
A bus comes every 20 minutes and you arrive at a random time: your wait is uniform on $[0, 20]$.
$P(\text{wait} < 5) = 5/20 = 0.25$. The mean wait is $10$ minutes, with $\sigma = 20/\sqrt{12} = 5.77$.
:::

::: problem id=p1 type=numeric answer="0.3"
Your wait is uniform on $[0, 20]$ minutes. What is the probability you wait between 8 and 14 minutes?
solution: $(14 - 8)/20 = 6/20 = 0.3$.
:::

::: problem id=p2 type=numeric answer="14"
Your wait is uniform on $[0, 20]$. What wait time is the 70th percentile (70% of waits are shorter)?
solution: $0.70 \times 20 = 14$ minutes.
:::

::: problem id=p3 type=numeric answer="0.125"
X is uniform on $[2, 10]$. What is the height of its density curve?
solution: The area must be 1: height $= 1/(10 - 2) = 0.125$.
:::

::: problem id=p4 type=numeric answer="6"
X is uniform on $[2, 10]$. What is its mean?
solution: $(2 + 10)/2 = 6$.
:::

::: problem id=p5 type=numeric answer="0.75"
X is uniform on $[2, 10]$. Find $P(X > 4)$.
solution: $(10 - 4)/8 = 0.75$.
:::

::: problem id=p6 type=numeric answer="2.309" tolerance=0.01
X is uniform on $[2, 10]$. Find its standard deviation. (3 decimals)
solution: $8 / \sqrt{12} = 2.309$.
:::

::: problem id=p7 type=choice
A delivery time is continuous. The probability it takes **exactly** 30.000 minutes is:
- [x] 0
- [ ] the height of the curve at 30
- [ ] 0.5
solution: A single point has no width, so no area. Only intervals have positive probability.
:::
