---
id: seq-01
title: Arithmetic sequences
---
::: rule
An **arithmetic sequence** adds the same **common difference** d each time: $3, 7, 11, 15, \ldots$ has $d = 4$.

- n-th term: $a_n = a_1 + (n - 1)d$
- sum of the first n terms: $S_n = \frac{n}{2}(a_1 + a_n)$
:::

::: example
$3, 7, 11, \ldots$: the 10th term is $3 + 9 \times 4 = 39$, and the first 10 terms add to $\frac{10}{2}(3 + 39) = 210$.
:::

::: graph
x 0..7
y 0..28
point 1,3
point 2,7
point 3,11
point 4,15
point 5,19
point 6,23
:::

::: problem id=p1 type=numeric answer="4"
What is the common difference of $3, 7, 11, 15, \ldots$?
solution: $7 - 3 = 4$.
:::

::: problem id=p2 type=numeric answer="39"
What is the 10th term of $3, 7, 11, \ldots$?
solution: $3 + 9 \times 4 = 39$.
:::

::: problem id=p3 type=numeric answer="-3"
What is the common difference of $20, 17, 14, \ldots$?
solution: $17 - 20 = -3$.
:::

::: problem id=p4 type=numeric answer="5"
What is the 6th term of $20, 17, 14, \ldots$?
solution: $20 + 5 \times (-3) = 5$.
:::

::: problem id=p5 type=numeric answer="5050"
Add up $1 + 2 + 3 + \cdots + 100$.
hint: Pair the first and last terms.
solution: $\frac{100}{2}(1 + 100) = 5050$.
:::

::: problem id=p6 type=expression answer="4n-1" vars="n"
Write the n-th term of $3, 7, 11, \ldots$ as an expression in n.
solution: $3 + (n - 1)4 = 4n - 1$.
:::

::: problem id=p7 type=numeric answer="210"
Add up the first 10 terms of $3, 7, 11, \ldots$
solution: $\frac{10}{2}(3 + 39) = 210$.
:::

::: problem id=p8 type=point answer="4,15"
The dots show $3, 7, 11, \ldots$ with the term number across. Click the dot for the 4th term.
graph:
x 0..7
y 0..28
point 1,3
point 2,7
point 3,11
point 5,19
point 6,23
solution: The 4th term is 15: $(4, 15)$. The dots lie on a straight line, as arithmetic sequences always do.
:::

::: problem id=x1 type=numeric answer="7" set=extra
What is the common difference of $12, 19, 26, \ldots$?
solution: $19 - 12 = 7$.
:::

::: problem id=x2 type=numeric answer="44" set=extra
What is the 15th term of $2, 5, 8, \ldots$?
solution: $2 + 14 \times 3 = 44$.
:::

::: problem id=x3 type=numeric answer="6" set=extra
What is the 12th term of $50, 46, 42, \ldots$?
solution: $50 + 11 \times (-4) = 6$.
:::

::: problem id=x4 type=numeric answer="178" set=extra
An arithmetic sequence has $a_1 = 4$ and $d = 6$. What is $a_{30}$?
solution: $4 + 29 \times 6 = 178$.
:::

::: problem id=x5 type=numeric answer="400" set=extra
Add up the first 20 terms of $1, 3, 5, \ldots$
solution: $a_{20} = 1 + 19 \times 2 = 39$.
$S_{20} = \frac{20}{2}(1 + 39) = 400$.
:::

::: problem id=x6 type=expression answer="7-2n" vars="n" set=extra
Write the n-th term of $5, 3, 1, \ldots$ as an expression in n.
solution: $5 + (n - 1)(-2) = 7 - 2n$.
:::

::: problem id=x7 type=numeric answer="630" set=extra
Add up $3 + 6 + 9 + \cdots + 60$.
solution: 20 terms: $\frac{20}{2}(3 + 60) = 630$.
:::

::: problem id=x8 type=numeric answer="17" set=extra
Which term of $4, 10, 16, \ldots$ is 100?
solution: $4 + (n - 1)6 = 100$, so $n - 1 = 16$ and $n = 17$.
:::

::: problem id=x9 type=choice set=extra
Which sequence is arithmetic?
- [x] $10, 7, 4, 1$
- [ ] $1, 2, 4, 8$
- [ ] $1, 1, 2, 3$
- [ ] $2, 4, 8, 10$
solution: $10, 7, 4, 1$ subtracts 3 each time.
:::

::: problem id=x10 type=numeric answer="4" set=extra
$x, 10, 16$ are consecutive terms of an arithmetic sequence. What is x?
solution: The difference is $16 - 10 = 6$, so $x = 10 - 6 = 4$.
:::

::: problem id=x11 type=numeric answer="29" set=extra
Sam says the 10th term of $2, 5, 8, \ldots$ is $2 + 10 \times 3 = 32$. What is it really?
solution: From term 1 to term 10 is 9 steps: $2 + 9 \times 3 = 29$.
:::

::: problem id=x12 type=numeric answer="24" set=extra
How many terms does $7, 11, 15, \ldots, 99$ have?
solution: $\frac{99 - 7}{4} + 1 = 23 + 1 = 24$.
:::

::: problem id=x13 type=numeric answer="1272" set=extra
Add up $7 + 11 + 15 + \cdots + 99$.
solution: 24 terms: $\frac{24}{2}(7 + 99) = 12 \times 106 = 1272$.
:::

::: problem id=x14 type=numeric answer="43500" set=extra
A salary starts at 30000 and rises by 1500 each year. What is it in year 10?
solution: $30000 + 9 \times 1500 = 43500$.
:::

::: problem id=x15 type=numeric answer="4" set=extra
In an arithmetic sequence $a_5 = 17$ and $a_9 = 33$. What is d?
hint: From term 5 to term 9 is 4 steps.
solution: $4d = 33 - 17 = 16$, so $d = 4$.
:::

::: problem id=x16 type=numeric answer="1" set=extra
In an arithmetic sequence $a_5 = 17$ and $a_9 = 33$. What is $a_1$?
hint: Find d first, then step back from $a_5$.
solution: $d = 4$, and $a_1 = 17 - 4 \times 4 = 1$.
:::

::: problem id=x17 type=numeric answer="510" set=extra
A theatre has 20 seats in the first row and 2 more in each row after. How many seats are in 15 rows?
hint: Find the seats in row 15 first.
solution: Row 15: $20 + 14 \times 2 = 48$.
Total: $\frac{15}{2}(20 + 48) = 510$.
:::

::: problem id=x18 type=numeric answer="367500" set=extra
A salary starts at 30000 and rises by 1500 each year. How much is earned in total over the first 10 years?
hint: Year 10's salary is 43500.
solution: $\frac{10}{2}(30000 + 43500)$
$= 5 \times 73500 = 367500$.
:::

::: problem id=x19 type=numeric answer="1683" set=extra
Add up all multiples of 3 from 3 to 99.
hint: How many multiples of 3 are there?
solution: $3, 6, \ldots, 99$ has 33 terms.
$\frac{33}{2}(3 + 99) = 33 \times 51 = 1683$.
:::

::: problem id=x20 type=numeric answer="21" set=extra creative=true
The sum of the first n terms of a sequence is $S_n = n^2 + 2n$. What is the 10th term?
hint: $a_{10} = S_{10} - S_9$.
solution: $S_{10} = 120$ and $S_9 = 99$.
$a_{10} = 120 - 99 = 21$.
:::
