---
id: app-02
title: Linear dynamical systems
---
Populations, savings and even the Fibonacci numbers follow rules of the form "next state = matrix × this state". Eigenvalues predict the long run. (Nicholson ch. 3)

::: rule
- A **linear dynamical system** is $\vec{x}_{k+1} = A\vec{x}_k$, so $\vec{x}_k = A^k\vec{x}_0$.
- If $A$ is diagonalizable with a **dominant** eigenvalue $\lambda_1$ (larger in size than all the others), then for large $k$:
- $\vec{x}_k$ grows (or shrinks) by a factor of about $\lambda_1$ per step: growth if $|\lambda_1| > 1$, decay if $|\lambda_1| < 1$;
- the direction of $\vec{x}_k$ approaches an eigenvector for $\lambda_1$.
:::

::: example
Juveniles $j$ and adults $a$: $j_{k+1} = j_k + 2a_k$ and $a_{k+1} = 0.25j_k + 0.5a_k$.
$$A = \begin{bmatrix} 1 & 2 \\ 0.25 & 0.5 \end{bmatrix}$$
Trace 1.5, determinant 0: eigenvalues 1.5 and 0. Eigenvector for 1.5: $(4, 1)$.
In the long run the population grows 50% per step, with 4 juveniles for every adult.
:::

::: problem id=p1 type=numeric answer="6"
Check the eigenvector: what is the first entry of $A(4, 1)$ for the matrix in the example?
solution: $4 + 2 = 6$, which is $1.5 \times 4$. (The second is $1 + 0.5 = 1.5$.)
:::

::: problem id=p2 type=numeric answer="67.5"
Same $A$, starting with $\vec{x}_0 = (10, 10)$. Compute $\vec{x}_3$. What is the juvenile count?
hint: $\vec{x}_1 = (30, 7.5)$ and $\vec{x}_2 = (45, 11.25)$.
solution: Juveniles: $45 + 2(11.25) = 67.5$. Adults: $0.25(45) + 0.5(11.25) = 16.875$.
:::

::: problem id=p3 type=numeric answer="4"
In that run, what is the ratio $j/a$ for $\vec{x}_3 = (67.5, 16.875)$?
solution: $67.5 / 16.875 = 4$: already the eigenvector direction $(4, 1)$.
:::

::: problem id=p4 type=numeric answer="55"
The Fibonacci numbers $0, 1, 1, 2, 3, 5, \dots$ satisfy $(F_{k+1}, F_k) = A(F_k, F_{k-1})$ with $A$ having rows $(1, 1)$ and $(1, 0)$. What is $F_{10}$?
solution: $0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55$: $F_{10} = 55$.
:::

::: problem id=p5 type=numeric answer="1.618" tolerance=0.001
The eigenvalues of that Fibonacci matrix solve $\lambda^2 - \lambda - 1 = 0$. What is the dominant one? (3 decimals)
solution: $\lambda = \frac{1 + \sqrt{5}}{2} \approx 1.618$: each Fibonacci number is about 1.618 times the last.
:::

::: problem id=p6 type=choice
A system's dominant eigenvalue is 0.9. In the long run the state vector:
- [x] shrinks toward $\vec{0}$
- [ ] grows without bound
- [ ] stays the same size
solution: Each step multiplies its size by about 0.9.
:::

::: problem id=p7 type=choice creative=true
A Markov chain is a dynamical system whose dominant eigenvalue is 1. What does the long-run rule predict for it?
- [x] The state settles down to a fixed vector: the steady state
- [ ] The state grows forever
- [ ] The state goes to $\vec{0}$
solution: A factor of 1 per step means no growth or decay; the direction approaches the eigenvector for $\lambda = 1$.
:::
