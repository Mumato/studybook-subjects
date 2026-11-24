---
id: app-01
title: Markov chains
---
Each year some people move from the city to the suburbs and some move back. A **Markov chain** tracks the shares in each state, step by step, with one matrix. (Nicholson ch. 2)

::: rule
- A **transition matrix** $P$ has entry $p_{ij}$ = the probability of moving **from** state $j$ **to** state $i$. Each column adds up to 1.
- A **state vector** $\vec{x}_k$ lists the shares in each state after $k$ steps (adding to 1). Then $\vec{x}_{k+1} = P\vec{x}_k$, so $\vec{x}_k = P^k\vec{x}_0$.
- A **steady state** $\vec{q}$ has $P\vec{q} = \vec{q}$: it's an eigenvector for $\lambda = 1$, scaled so its entries add to 1. For a regular chain the state vectors approach it from any start.
:::

::: example
Each year 10% of city people move to the suburbs and 20% of suburb people move to the city:
$$P = \begin{bmatrix} 0.9 & 0.2 \\ 0.1 & 0.8 \end{bmatrix}$$
From $\vec{x}_0 = (0.5, 0.5)$: $\vec{x}_1 = (0.55, 0.45)$.
Steady state: $0.1a = 0.2b$ (flows balance), so $a = 2b$; with $a + b = 1$, $\vec{q} = (\frac{2}{3}, \frac{1}{3})$.
:::

::: problem id=p1 type=numeric answer="0.585"
Using the example, find the city share after 2 years, $\vec{x}_2 = P\vec{x}_1$, from $\vec{x}_1 = (0.55, 0.45)$.
solution: $0.9(0.55) + 0.2(0.45)$, which is $0.495 + 0.09 = 0.585$.
:::

::: problem id=p2 type=numeric answer="620"
In the example, 600 people live in the city and 400 in the suburbs. How many live in the city a year later?
solution: $0.9(600) + 0.2(400)$, which is $540 + 80 = 620$.
:::

::: problem id=p3 type=numeric answer="4/7" tolerance=0.001
$P$ has columns $(0.7, 0.3)$ and $(0.4, 0.6)$. Find the first entry of the steady state. (A fraction, or 3 decimals.)
hint: Balance the flows: $0.3a = 0.4b$, and $a + b = 1$.
solution: $a = \frac{4}{3}b$, so $\frac{7}{3}b = 1$: $b = \frac{3}{7}$, $a = \frac{4}{7} \approx 0.571$.
:::

::: problem id=p4 type=numeric answer="0.7"
$P$ has columns $(0.8, 0.2)$ and $(0.3, 0.7)$. Starting from $\vec{x}_0 = (1, 0)$, what is the first entry of $\vec{x}_2$?
solution: $\vec{x}_1 = (0.8, 0.2)$. Then $0.8(0.8) + 0.3(0.2)$, which is $0.64 + 0.06 = 0.7$.
:::

::: problem id=p5 type=numeric answer="0.6"
Same $P$. What is the first entry of its steady state?
solution: $0.2a = 0.3b$ and $a + b = 1$: $a = 0.6$, $b = 0.4$.
:::

::: problem id=p6 type=choice
Which can be a transition matrix?
- [x] columns $(0.5, 0.5)$ and $(0.25, 0.75)$
- [ ] columns $(0.5, 0.6)$ and $(0.3, 0.7)$
- [ ] columns $(1.2, -0.2)$ and $(0, 1)$
solution: Entries must be probabilities (0 to 1) and each column must add to 1.
:::

::: problem id=p7 type=numeric answer="1"
Every transition matrix has which eigenvalue?
solution: $\lambda = 1$: that's why a steady state exists.
:::
