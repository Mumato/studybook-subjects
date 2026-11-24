---
id: app-test
title: Markov chains and dynamics test
pass: 0.8
---
::: problem id=t1 type=numeric answer="0.55"
$P$ has columns $(0.9, 0.1)$ and $(0.2, 0.8)$. From $\vec{x}_0 = (0.5, 0.5)$, what is the first entry of $\vec{x}_1$?
solution: $0.45 + 0.1 = 0.55$.
:::

::: problem id=t2 type=numeric answer="2/3" tolerance=0.001
Same $P$. What is the first entry of its steady state? (A fraction, or 3 decimals.)
solution: $0.1a = 0.2b$, $a + b = 1$: $a = \frac{2}{3} \approx 0.667$.
:::

::: problem id=t3 type=numeric answer="380"
Same $P$ (city, suburbs). 600 live in the city and 400 in the suburbs. How many live in the suburbs a year later?
solution: $0.1(600) + 0.8(400)$, which is $60 + 320 = 380$.
:::

::: problem id=t4 type=numeric answer="0.4"
$P$ has columns $(0.8, 0.2)$ and $(0.3, 0.7)$. What is the second entry of its steady state?
solution: $a = 0.6$, so $b = 0.4$.
:::

::: problem id=t5 type=numeric answer="1.5"
$A = \begin{bmatrix} 1 & 2 \\ 0.25 & 0.5 \end{bmatrix}$. What is its dominant eigenvalue?
solution: Trace 1.5, determinant 0: eigenvalues 1.5 and 0.
:::

::: problem id=t6 type=numeric answer="89"
The Fibonacci numbers start $0, 1, 1, 2, 3, 5, \dots$ ($F_0 = 0$). What is $F_{11}$?
solution: $F_{10} = 55$, $F_9 = 34$: $F_{11} = 89$.
:::

::: problem id=t7 type=choice
In a transition matrix, each **column**:
- [x] adds up to 1
- [ ] adds up to 0
- [ ] has exactly one 1
solution: From each state, the chances of going somewhere add to 1.
:::

::: problem id=t8 type=choice
For $\vec{x}_{k+1} = A\vec{x}_k$ with dominant eigenvalue 2 and eigenvector $(1, 3)$, after many steps $\vec{x}_k$:
- [x] doubles each step and points close to the direction $(1, 3)$
- [ ] approaches $(1, 3)$ exactly
- [ ] shrinks to $\vec{0}$
solution: Growth by $\lambda_1 = 2$ per step, along its eigenvector.
:::
