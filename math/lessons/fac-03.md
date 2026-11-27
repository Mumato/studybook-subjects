---
id: fac-03
title: GCF and LCM
---
::: rule
The **greatest common factor (GCF)** of two numbers is the biggest number that divides both.

The **least common multiple (LCM)** is the smallest number that both divide into.

Find them by listing factors or multiples, or from the prime factorizations:
- GCF: the primes they share, at the **lower** power
- LCM: every prime, at the **higher** power
:::

::: example
12 and 18.

Factors of 12: 1, 2, 3, 4, **6**, 12. Factors of 18: 1, 2, 3, **6**, 9, 18. GCF = 6.

Multiples of 12: 12, 24, **36**. Multiples of 18: 18, **36**. LCM = 36.
:::

::: example
One bus comes every 6 minutes and another every 8 minutes. They leave together. When are they together again?

Multiples of 6: 6, 12, 18, **24**. Multiples of 8: 8, 16, **24**. After **24** minutes.
:::

::: problem id=p1 type=numeric answer="4"
What is the GCF of 8 and 12?
solution: Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. GCF = **4**.
:::

::: problem id=p2 type=numeric answer="12"
What is the LCM of 4 and 6?
hint: List the multiples of 6 and find the first one that 4 divides.
solution: Multiples of 6: 6, 12. 4 divides 12, so LCM = **12**.
:::

::: problem id=p3 type=numeric answer="12"
What is the GCF of 24 and 36?
hint: $24 = 2^3 \times 3$ and $36 = 2^2 \times 3^2$.
solution: Shared primes at the lower power: $2^2 \times 3 = 12$.
:::

::: problem id=p4 type=numeric answer="35"
What is the LCM of 5 and 7?
solution: They share no factor except 1, so the LCM is $5 \times 7 = 35$.
:::

::: problem id=p5 type=numeric answer="1"
What is the GCF of 15 and 28?
solution: $15 = 3 \times 5$ and $28 = 2^2 \times 7$ share no prime. GCF = **1**.
:::

::: problem id=p6 type=numeric answer="36"
What is the LCM of 9 and 12?
solution: Multiples of 12: 12, 24, 36. 9 divides 36, so LCM = **36**.
:::

::: problem id=p7 type=numeric answer="6"
You have 18 red and 24 blue flowers. You want identical bouquets with every flower used. What is the most bouquets you can make?
hint: The number of bouquets must divide both 18 and 24.
solution: GCF of 18 and 24 is **6**: 6 bouquets, each with 3 red and 4 blue.
:::

::: problem id=p8 type=numeric answer="40"
Hot dogs come in packs of 10 and buns in packs of 8. What is the smallest number of hot dogs you can buy to have exactly as many buns?
solution: LCM of 10 and 8: multiples of 10 are 10, 20, 30, **40**, and 8 divides 40. So **40** hot dogs (4 packs) and 40 buns (5 packs).
:::

::: problem id=x1 type=numeric answer="4" set=extra
What is the GCF of 12 and 16?
solution: Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 16: 1, 2, 4, 8, 16. GCF = **4**.
:::

::: problem id=x2 type=numeric answer="24" set=extra
What is the LCM of 3 and 8?
solution: They share no factor except 1, so LCM = $3 \times 8 = 24$.
:::

::: problem id=x3 type=numeric answer="9" set=extra
What is the GCF of 18 and 27?
solution: $18 = 2 \times 3^2$, $27 = 3^3$. Shared: $3^2 = 9$.
:::

::: problem id=x4 type=numeric answer="18" set=extra
What is the LCM of 6 and 9?
solution: Multiples of 9: 9, 18. 6 divides 18, so LCM = **18**.
:::

::: problem id=x5 type=numeric answer="14" set=extra
What is the GCF of 42 and 56?
solution: $42 = 2 \times 3 \times 7$, $56 = 2^3 \times 7$. Shared: $2 \times 7 = 14$.
:::

::: problem id=x6 type=numeric answer="60" set=extra
What is the LCM of 12 and 15?
solution: $12 = 2^2 \times 3$, $15 = 3 \times 5$. LCM $= 2^2 \times 3 \times 5 = 60$.
:::

::: problem id=x7 type=numeric answer="17" set=extra
What is the GCF of 17 and 51?
solution: $51 = 3 \times 17$, so 17 divides both. GCF = **17**.
:::

::: problem id=x8 type=numeric answer="24" set=extra
What is the LCM of 8 and 12?
solution: Multiples of 12: 12, 24. 8 divides 24, so LCM = **24**.
:::

::: problem id=x9 type=numeric answer="12" set=extra
What is the GCF of $2^3 \times 3$ and $2^2 \times 3^2 \times 5$?
hint: Take the shared primes at the lower power.
solution: Shared primes 2 and 3. Lower powers: $2^2 \times 3 = 12$.
:::

::: problem id=x10 type=numeric answer="360" set=extra
What is the LCM of $2^3 \times 3$ and $2^2 \times 3^2 \times 5$?
solution: Every prime at the higher power: $2^3 \times 3^2 \times 5$. That is $8 \times 9 \times 5 = 360$.
:::

::: problem id=x11 type=choice set=extra
Ron says the LCM of 4 and 6 is 24, because $4 \times 6 = 24$. Is he right?
- [x] No: 12 is already a multiple of both, so the LCM is 12
- [ ] Yes, the LCM is always the product
- [ ] No, the LCM is 2
solution: 4 and 6 share the factor 2, so the product is too big. 12 is the smallest common multiple. (The product works only when the GCF is 1.)
:::

::: problem id=x12 type=numeric answer="12" set=extra
A floor is 48 cm by 36 cm. It is covered with equal square tiles, as large as possible, with no cutting. How long is each tile's side in cm?
hint: The side must divide both 48 and 36.
solution: GCF of 48 and 36: $48 = 2^4 \times 3$, $36 = 2^2 \times 3^2$, shared $2^2 \times 3 = 12$ cm.
:::

::: problem id=x13 type=numeric answer="30" set=extra
Ann visits the library every 10 days and Ben every 15 days. They both went today. In how many days will they both go again on the same day?
solution: LCM of 10 and 15: multiples of 15 are 15, **30**, and 10 divides 30. In **30** days.
:::

::: problem id=x14 type=numeric answer="216" set=extra
Find the GCF and the LCM of 12 and 18, then multiply them together.
hint: Compare your answer with $12 \times 18$.
solution: GCF 6, LCM 36. $6 \times 36 = 216$, which equals $12 \times 18$.
:::

::: problem id=x15 type=numeric answer="12" set=extra
What is the GCF of 24, 36 and 60?
solution: $24 = 2^3 \times 3$, $36 = 2^2 \times 3^2$, $60 = 2^2 \times 3 \times 5$. Shared: $2^2 \times 3 = 12$.
:::

::: problem id=x16 type=numeric answer="60" set=extra
What is the LCM of 4, 5 and 6?
hint: Use prime factorizations: every prime at its highest power.
solution: $4 = 2^2$, $5$, $6 = 2 \times 3$. LCM $= 2^2 \times 3 \times 5 = 60$.
:::

::: problem id=x17 type=numeric answer="5" set=extra
60 pencils and 48 erasers are packed into identical kits with nothing left over, making as many kits as possible. How many pencils are in each kit?
hint: The number of kits is the GCF of 60 and 48.
solution: GCF of 60 and 48 is 12, so 12 kits. Pencils per kit: $60 \div 12 = 5$.
:::

::: problem id=x18 type=numeric answer="18" set=extra
Two numbers have GCF 6 and LCM 36. One of them is 12. What is the other?
hint: GCF times LCM equals the product of the two numbers.
solution: $6 \times 36 = 216 = 12 \times \square$, so $\square = 216 \div 12 = 18$. Check: GCF(12, 18) = 6, LCM = 36.
:::

::: problem id=x19 type=numeric answer="180" set=extra
Three bells ring every 12, 18 and 30 minutes. They ring together at 9:00. After how many minutes do they next ring together?
hint: Find the LCM of all three from prime factorizations.
solution: $12 = 2^2 \times 3$, $18 = 2 \times 3^2$, $30 = 2 \times 3 \times 5$. LCM $= 2^2 \times 3^2 \times 5 = 180$ minutes (at 12:00).
:::

::: problem id=x20 type=numeric answer="84" set=extra creative=true
Two different numbers, both less than 50, have GCF 12. What is the largest their sum can be?
hint: Both must be multiples of 12. Which pairs have GCF exactly 12?
solution: Multiples of 12 below 50: 12, 24, 36, 48. 24 and 48 have GCF 24, but 36 and 48 have GCF 12. Largest sum: $36 + 48 = 84$.
:::
