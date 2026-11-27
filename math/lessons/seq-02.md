---
id: seq-02
title: Geometric sequences
---
::: rule
A **geometric sequence** multiplies by the same **common ratio** r each time: $2, 6, 18, 54, \ldots$ has $r = 3$.

- n-th term: $a_n = a_1 r^{n - 1}$
- sum of the first n terms: $S_n = a_1\frac{1 - r^n}{1 - r}$ (for $r \ne 1$)
:::

::: example
$2, 6, 18, \ldots$: the 5th term is $2 \times 3^4 = 162$. The first 4 terms add to $2 \cdot \frac{1 - 81}{1 - 3} = 80$ (check: $2 + 6 + 18 + 54 = 80$).
:::

::: problem id=p1 type=numeric answer="3"
What is the common ratio of $2, 6, 18, \ldots$?
solution: $6 \div 2 = 3$.
:::

::: problem id=p2 type=numeric answer="162"
What is the 5th term of $2, 6, 18, \ldots$?
solution: $2 \times 3^4 = 162$.
:::

::: problem id=p3 type=numeric answer="1/2"
What is the common ratio of $64, 32, 16, \ldots$?
solution: $\frac{32}{64} = \frac{1}{2}$.
:::

::: problem id=p4 type=numeric answer="-2"
What is the common ratio of $1, -2, 4, -8, \ldots$?
solution: $-2 \div 1 = -2$.
:::

::: problem id=p5 type=numeric answer="80"
Add up the first 4 terms of $2, 6, 18, \ldots$
solution: $2 + 6 + 18 + 54 = 80$.
:::

::: problem id=p6 type=numeric answer="1023"
Add up $1 + 2 + 4 + \cdots + 512$ (10 terms).
hint: Use $S_n$ with $a_1 = 1$, $r = 2$, $n = 10$.
solution: $\frac{1 - 2^{10}}{1 - 2} = 1023$.
:::

::: problem id=p7 type=choice
Which sequence is geometric?
- [ ] $1, 4, 7, 10$
- [x] $5, 10, 20, 40$
- [ ] $1, 4, 9, 16$
solution: Each term is double the last.
:::

::: problem id=p8 type=numeric answer="5"
$3, 12, 48, \ldots$ Which term is 768?
solution: $3 \cdot 4^{n - 1} = 768$, so $4^{n - 1} = 256 = 4^4$. Then $n - 1 = 4$ and $n = 5$.
:::

::: problem id=x1 type=numeric answer="3" set=extra
What is the common ratio of $5, 15, 45, \ldots$?
solution: $15 \div 5 = 3$.
:::

::: problem id=x2 type=numeric answer="32" set=extra
What is the 6th term of $1, 2, 4, \ldots$?
solution: $1 \times 2^5 = 32$.
:::

::: problem id=x3 type=numeric answer="1" set=extra
What is the 5th term of $81, 27, 9, \ldots$?
solution: $81 \times \left(\frac{1}{3}\right)^4 = 1$.
:::

::: problem id=x4 type=numeric answer="-1/2" set=extra
What is the common ratio of $10, -5, 2.5, \ldots$?
solution: $-5 \div 10 = -\frac{1}{2}$.
:::

::: problem id=x5 type=numeric answer="121" set=extra
Add up the first 5 terms of $1, 3, 9, \ldots$
solution: $\frac{1 - 3^5}{1 - 3} = \frac{-242}{-2} = 121$.
:::

::: problem id=x6 type=expression answer="3*2^(n-1)" vars="n" set=extra
Write the n-th term of $3, 6, 12, \ldots$ as an expression in n.
solution: $a_n = 3 \cdot 2^{n - 1}$.
:::

::: problem id=x7 type=numeric answer="128" set=extra
What is the 7th term of $2, -4, 8, \ldots$?
solution: $2 \times (-2)^6 = 2 \times 64 = 128$.
:::

::: problem id=x8 type=choice set=extra
Which sequence is geometric?
- [x] $3, -6, 12, -24$
- [ ] $2, 4, 6, 8$
- [ ] $1, 3, 6, 10$
- [ ] $5, 5, 10, 15$
solution: Each term is $-2$ times the last.
:::

::: problem id=x9 type=numeric answer="8" set=extra
A geometric sequence has $a_1 = 5$ and $r = 2$. Which term is 640?
solution: $5 \cdot 2^{n - 1} = 640$, so $2^{n - 1} = 128 = 2^7$ and $n = 8$.
:::

::: problem id=x10 type=numeric answer="10" set=extra
$4, x, 25$ are consecutive positive terms of a geometric sequence. What is x?
solution: $\frac{x}{4} = \frac{25}{x}$, so $x^2 = 100$ and $x = 10$.
:::

::: problem id=x11 type=numeric answer="2430" set=extra
10 bacteria triple every hour. How many are there after 5 hours?
solution: $10 \times 3^5 = 10 \times 243 = 2430$.
:::

::: problem id=x12 type=numeric answer="27" set=extra
A ball is dropped from 64 cm and each bounce reaches $\frac{3}{4}$ of the height before. How high is the 3rd bounce?
solution: $64 \times \left(\frac{3}{4}\right)^3 = 64 \times \frac{27}{64} = 27$ cm.
:::

::: problem id=x13 type=numeric answer="44100" set=extra
A salary of 40000 rises 5% each year. What is it in the 3rd year?
solution: Two raises: $40000 \times 1.05^2 = 44100$.
:::

::: problem id=x14 type=numeric answer="48" set=extra
Sam says the 5th term of $3, 6, 12, \ldots$ is $3 \times 2^5 = 96$. What is it really?
solution: The power is $n - 1 = 4$: $3 \times 2^4 = 48$.
:::

::: problem id=x15 type=numeric answer="3" set=extra
In a geometric sequence with positive terms, $a_2 = 6$ and $a_4 = 54$. What is r?
hint: From term 2 to term 4 multiplies by $r^2$.
solution: $r^2 = \frac{54}{6} = 9$, so $r = 3$.
:::

::: problem id=x16 type=numeric answer="2" set=extra
In a geometric sequence with positive terms, $a_2 = 6$ and $a_4 = 54$. What is $a_1$?
hint: Find r first.
solution: $r = 3$, so $a_1 = 6 \div 3 = 2$.
:::

::: problem id=x17 type=numeric answer="2186" set=extra
Add up $2 + 6 + 18 + \cdots + 1458$.
hint: $1458 = 2 \cdot 3^6$, so how many terms?
solution: 7 terms: $2 \cdot \frac{1 - 3^7}{1 - 3}$
$= 2 \cdot \frac{2186}{2} = 2186$.
:::

::: problem id=x18 type=numeric answer="-85" set=extra
Add up the first 8 terms of $1, -2, 4, -8, \ldots$
hint: $r = -2$.
solution: $\frac{1 - (-2)^8}{1 - (-2)} = \frac{1 - 256}{3} = -85$.
:::

::: problem id=x19 type=numeric answer="1048575" set=extra
One grain of rice goes on the first square of a board, 2 on the next, 4 on the next, and so on. How many grains are on the first 20 squares together?
hint: $a_1 = 1$, $r = 2$, $n = 20$.
solution: $\frac{1 - 2^{20}}{1 - 2} = 2^{20} - 1 = 1048575$.
:::

::: problem id=x20 type=numeric answer="189" set=extra creative=true
A geometric sequence has $a_3 = 12$ and $a_6 = 96$. Add up its first 6 terms.
hint: Three steps multiply by $r^3$.
solution: $r^3 = 8$, $r = 2$, $a_1 = 12 \div 4 = 3$.
$S_6 = 3(2^6 - 1) = 189$.
:::
