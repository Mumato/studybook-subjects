---
id: nrm-02
title: The standard normal distribution
---
The bell-shaped **normal** curve describes heights, test scores, measurement errors and much more. The **standard normal** $Z$ has mean 0 and standard deviation 1. (OpenStax ch. 6)

::: rule
- $\Phi(z) = P(Z < z)$ is the area to the **left** of $z$ (tables and calculators give it). Problems here give you the values you need.
- Area to the right: $P(Z > z) = 1 - \Phi(z)$.
- Area between: $P(a < Z < b) = \Phi(b) - \Phi(a)$.
- The curve is symmetric about 0: $\Phi(-z) = 1 - \Phi(z)$.
:::

::: graph
x -3.5..3.5
y -0.8..2.8
axes off
grid off
plot 6*exp(-x^2/2)/sqrt(2*pi) blue
segment -3.5,0 3.5,0
label -3,-0.5 -3
label -2,-0.5 -2
label -1,-0.5 -1
label 0,-0.5 0
label 1,-0.5 1
label 2,-0.5 2
label 3,-0.5 3
:::

::: example
Given $\Phi(1.5) = 0.9332$ and $\Phi(-0.5) = 0.3085$:
$P(Z > 1.5) = 1 - 0.9332 = 0.0668$.
$P(-0.5 < Z < 1.5) = 0.9332 - 0.3085 = 0.6247$.
:::

::: problem id=p1 type=numeric answer="0.1151"
$\Phi(1.2) = 0.8849$. Find $P(Z > 1.2)$.
solution: $1 - 0.8849 = 0.1151$.
:::

::: problem id=p2 type=numeric answer="0.7881"
$\Phi(-0.8) = 0.2119$. Find $P(Z > -0.8)$.
solution: $1 - 0.2119 = 0.7881$.
:::

::: problem id=p3 type=numeric answer="0.1056"
$\Phi(1.25) = 0.8944$. Use symmetry to find $\Phi(-1.25)$.
solution: $1 - 0.8944 = 0.1056$.
:::

::: problem id=p4 type=numeric answer="0.7888"
$\Phi(1.25) = 0.8944$. Find $P(-1.25 < Z < 1.25)$.
solution: $\Phi(-1.25) = 0.1056$, so $0.8944 - 0.1056 = 0.7888$.
:::

::: problem id=p5 type=numeric answer="0.2417"
$\Phi(0.5) = 0.6915$ and $\Phi(1.5) = 0.9332$. Find $P(0.5 < Z < 1.5)$.
solution: $0.9332 - 0.6915 = 0.2417$.
:::

::: problem id=p6 type=numeric answer="0.9544"
$\Phi(2) = 0.9772$. Find $P(-2 < Z < 2)$.
solution: $0.9772 - (1 - 0.9772) = 0.9772 - 0.0228 = 0.9544$: the "95%" of the empirical rule.
:::

::: problem id=p7 type=numeric answer="1.645" tolerance=0.01
$\Phi(1.645) = 0.95$. Which $z$ has 5% of the area to its **right**?
solution: 95% to the left means 5% to the right: $z = 1.645$.
:::

::: problem id=p8 type=choice
$P(Z < 0)$ equals:
- [ ] 0
- [x] 0.5
- [ ] 1
- [ ] it depends on the data
solution: The curve is symmetric about 0, so half the area is on each side.
:::
