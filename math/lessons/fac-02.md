---
id: fac-02
title: Primes and prime factorization
---
::: rule
A **prime** number has exactly two factors: 1 and itself. The first primes are 2, 3, 5, 7, 11, 13, 17, 19. (1 is **not** prime.)

Every other number above 1 is **composite**: it can be written as a product of primes in exactly one way, its **prime factorization**. Find it by splitting into factors until every piece is prime.
:::

::: example
Prime factorization of 60:

$60 = 6 \times 10 = (2 \times 3) \times (2 \times 5)$

So $60 = 2 \times 2 \times 3 \times 5 = 2^2 \times 3 \times 5$.
:::

::: example
Is 51 prime? Its digit sum is 6, so it divides by 3: $51 = 3 \times 17$. It is **not** prime.
:::

::: problem id=p1 type=choice
Which number is prime?
- [ ] 21
- [x] 29
- [ ] 39
- [ ] 49
hint: Try dividing each by 3 and by 7.
solution: $21 = 3 \times 7$, $39 = 3 \times 13$, $49 = 7 \times 7$. **29** has no factors except 1 and 29.
:::

::: problem id=p2 type=numeric answer="8"
How many prime numbers are less than 20?
solution: 2, 3, 5, 7, 11, 13, 17, 19: **8** primes.
:::

::: problem id=p3 type=numeric answer="3"
The prime factorization of 72 is $2^a \times 3^b$. What is a?
hint: $72 = 8 \times 9$.
solution: $72 = 8 \times 9 = 2^3 \times 3^2$, so $a = 3$.
:::

::: problem id=p4 type=numeric answer="7"
$84 = 2^2 \times 3 \times \square$. Which prime goes in the box?
solution: $84 \div 4 = 21$ and $21 = 3 \times 7$. The missing prime is **7**.
:::

::: problem id=p5 type=numeric answer="7"
What is the smallest prime factor of 91?
hint: 91 isn't even and doesn't divide by 3 or 5. Try 7.
solution: $91 = 7 \times 13$, so the smallest prime factor is **7**.
:::

::: problem id=p6 type=numeric answer="5"
What is the largest prime factor of 150?
solution: $150 = 2 \times 75 = 2 \times 3 \times 25 = 2 \times 3 \times 5^2$. The largest prime is **5**.
:::

::: problem id=p7 type=text answers="no"
Is 1 a prime number? Type yes or no.
solution: A prime needs exactly two different factors. 1 has only one factor, so it is **not** prime.
:::

::: problem id=p8 type=numeric answer="40"
$2^3 \times 5 = ?$
solution: $8 \times 5 = 40$.
:::

::: problem id=c1 type=numeric answer="12" creative=true
A number less than 15 has only 2 and 3 as prime factors, and it has exactly 6 factors. What is it?
hint: Try numbers made of 2s and 3s: 6, 8, 9, 12, ...
solution: 6 has 4 factors, 8 has 4, 9 has 3, but **12** has 6: 1, 2, 3, 4, 6, 12.
:::
