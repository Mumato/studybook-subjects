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

::: problem id=x1 type=choice set=extra
Which number is prime?
- [ ] 27
- [ ] 33
- [x] 37
- [ ] 51
solution: $27 = 3 \times 9$, $33 = 3 \times 11$, $51 = 3 \times 17$. **37** has only the factors 1 and 37.
:::

::: problem id=x2 type=text answers="no" set=extra
Is 57 prime? Type yes or no.
hint: Check its digit sum.
solution: $5 + 7 = 12$ divides by 3: $57 = 3 \times 19$. So **no**.
:::

::: problem id=x3 type=numeric answer="2" set=extra
The prime factorization of 36 is $2^a \times 3^b$. What is a?
solution: $36 = 4 \times 9 = 2^2 \times 3^2$, so $a = 2$.
:::

::: problem id=x4 type=numeric answer="7" set=extra
What is the smallest prime factor of 119?
solution: Not even, digit sum 11 (not 3), doesn't end in 0 or 5. $119 = 7 \times 17$, so **7**.
:::

::: problem id=x5 type=numeric answer="7" set=extra
What is the largest prime factor of 84?
solution: $84 = 4 \times 21 = 2^2 \times 3 \times 7$. The largest prime is **7**.
:::

::: problem id=x6 type=numeric answer="180" set=extra
$2^2 \times 3^2 \times 5 = ?$
solution: $4 \times 9 = 36$, $36 \times 5 = 180$.
:::

::: problem id=x7 type=multi answers="23;29;31;37" set=extra
List all the primes between 20 and 40.
solution: Cross out even numbers, multiples of 3, 5 and 7: 23, 29, 31, 37 are left.
:::

::: problem id=x8 type=numeric answer="4" set=extra
How many **different** prime factors does 210 have?
solution: $210 = 2 \times 105 = 2 \times 3 \times 5 \times 7$: **4** different primes.
:::

::: problem id=x9 type=numeric answer="5" set=extra
$96 = 2^a \times 3$. What is a?
solution: $96 \div 3 = 32 = 2^5$, so $a = 5$.
:::

::: problem id=x10 type=choice set=extra
Pat writes the prime factorization of 72 as $2 \times 2 \times 3 \times 6$. What is wrong?
- [x] 6 is not prime; it should be $2^3 \times 3^2$
- [ ] Nothing, it is right
- [ ] It should be $8 \times 9$
- [ ] It should be $2 \times 36$
solution: Every piece must be prime. Split $6 = 2 \times 3$: $72 = 2 \times 2 \times 2 \times 3 \times 3 = 2^3 \times 3^2$.
:::

::: problem id=x11 type=choice set=extra
Which number is composite?
- [ ] 2
- [ ] 13
- [ ] 41
- [x] 91
solution: $91 = 7 \times 13$, so it is **composite**. 2, 13 and 41 are prime.
:::

::: problem id=x12 type=numeric answer="210" set=extra
What is the product of the first four prime numbers?
solution: The first four primes are 2, 3, 5, 7. $2 \times 3 \times 5 \times 7 = 210$.
:::

::: problem id=x13 type=numeric answer="6" set=extra
$1000 = 2^a \times 5^b$. What is $a + b$?
solution: $1000 = 10^3 = 2^3 \times 5^3$. $a + b = 3 + 3 = 6$.
:::

::: problem id=x14 type=numeric answer="30" set=extra
What is the smallest number with three different prime factors?
hint: Use the three smallest primes.
solution: $2 \times 3 \times 5 = 30$.
:::

::: problem id=x15 type=numeric answer="13" set=extra
What is the smallest prime factor of 221?
hint: Try 2, 3, 5, 7, 11, then 13.
solution: 2, 3, 5, 7 and 11 don't divide 221. $221 = 13 \times 17$, so **13**.
:::

::: problem id=x16 type=numeric answer="13" set=extra
Two primes add up to 20 and their difference is 6. What is the larger one?
hint: List pairs of primes that add to 20.
solution: Prime pairs adding to 20: 3 and 17, 7 and 13. Only $13 - 7 = 6$, so the larger is **13**.
:::

::: problem id=x17 type=numeric answer="43" set=extra
Twin primes are two primes that differ by 2, like 11 and 13. What is the larger twin prime between 40 and 50?
hint: List the primes between 40 and 50.
solution: Primes there: 41, 43, 47. 41 and 43 differ by 2, so the answer is **43**.
:::

::: problem id=x18 type=numeric answer="2" set=extra
The prime factorization of 360 is $2^a \times 3^b \times 5$. What is b?
hint: $360 = 36 \times 10$.
solution: $36 = 2^2 \times 3^2$ and $10 = 2 \times 5$. So $360 = 2^3 \times 3^2 \times 5$ and $b = 2$.
:::

::: problem id=x19 type=numeric answer="101" set=extra
What is the smallest prime greater than 100?
hint: For numbers up to 120 you only need to test 2, 3, 5 and 7.
solution: 101 is odd, digit sum 2, doesn't end in 5, and $7 \times 14 = 98$ leaves 3. So **101** is prime.
:::

::: problem id=x20 type=numeric answer="4" set=extra creative=true
How many numbers less than 50 have exactly 3 factors?
hint: Try 4 and 9. What do they have in common?
solution: A number with exactly 3 factors is a prime squared: 4 (1, 2, 4), 9, 25, 49. That's **4** numbers.
:::
