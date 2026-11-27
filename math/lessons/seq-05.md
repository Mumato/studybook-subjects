---
id: seq-05
title: The binomial theorem
---
Multiplying out $(a + b)^n$ by hand gets slow fast. The binomial theorem writes down every term at once.

::: rule
**Factorial:** $n! = n \times (n - 1) \times \cdots \times 1$, with $0! = 1$.

**Binomial coefficient** ("n choose k"):
$$\binom{n}{k} = \frac{n!}{k!\,(n - k)!}$$

They form **Pascal's triangle**: each entry is the sum of the two above it. Row n is $\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}$:
- row 3: 1, 3, 3, 1
- row 4: 1, 4, 6, 4, 1
- row 5: 1, 5, 10, 10, 5, 1

**Binomial theorem:**
$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n - k} b^k$$

There are $n + 1$ terms. The **(k + 1)-th term** is $\binom{n}{k} a^{n - k} b^k$: the powers of a go down while the powers of b go up, always adding to n.
:::

::: example
Expand $(x + 2)^4$. Row 4 is 1, 4, 6, 4, 1, and the powers of 2 are 1, 2, 4, 8, 16:

$x^4 + 4 \cdot 2x^3 + 6 \cdot 4x^2$
$+ 4 \cdot 8x + 16$

$= x^4 + 8x^3 + 24x^2 + 32x + 16$.
:::

::: example
Find the coefficient of $x^3$ in $(2x - 1)^5$.

Here $a = 2x$, $b = -1$. We need $a^3$, so $5 - k = 3$ and $k = 2$:

$\binom{5}{2}(2x)^3(-1)^2 = 10 \cdot 8x^3 \cdot 1$

The coefficient is **80**.
:::

::: problem id=p1 type=numeric answer="10"
$\binom{5}{2} = ?$
solution: $\frac{5!}{2!\,3!} = \frac{120}{2 \times 6} = 10$.
:::

::: problem id=p2 type=numeric answer="35"
$\binom{7}{3} = ?$
hint: $\frac{7 \times 6 \times 5}{3 \times 2 \times 1}$.
solution: $\frac{210}{6} = 35$.
:::

::: problem id=p3 type=numeric answer="15"
Row 6 of Pascal's triangle starts $1, 6, \ldots$ What is its third entry?
hint: Add the 2nd and 3rd entries of row 5: 5 and 10.
solution: $5 + 10 = 15$ (that is $\binom{6}{2}$).
:::

::: problem id=p4 type=numeric answer="6"
What is the coefficient of $x^2$ in $(x + 1)^4$?
solution: Row 4: 1, 4, 6, 4, 1. The $x^2$ term is $\binom{4}{2}x^2 = 6x^2$.
:::

::: problem id=p5 type=numeric answer="27"
What is the coefficient of x in $(x + 3)^3$?
solution: $x^1$ needs $k = 2$: $\binom{3}{2} \cdot x \cdot 3^2 = 3 \cdot 9x = 27x$.
:::

::: problem id=p6 type=numeric answer="32"
What is the constant term of $(x + 2)^5$?
solution: No x at all: $k = 5$, giving $2^5 = 32$.
:::

::: problem id=p7 type=numeric answer="20"
What is the coefficient of the 4th term of $(a + b)^6$?
hint: The 4th term has $k = 3$.
solution: $\binom{6}{3} = 20$: the term is $20a^3b^3$.
:::

::: problem id=p8 type=numeric answer="-80"
What is the coefficient of $x^2$ in $(x - 2)^5$?
solution: $x^2$ needs $5 - k = 2$, so $k = 3$.
$\binom{5}{3}(-2)^3 = 10 \times (-8) = -80$.
:::

::: problem id=x1 type=numeric answer="28" set=extra
$\binom{8}{2} = ?$
solution: $\frac{8 \times 7}{2} = 28$.
:::

::: problem id=x2 type=numeric answer="120" set=extra
$\binom{10}{3} = ?$
solution: $\frac{10 \times 9 \times 8}{6} = 120$.
:::

::: problem id=x3 type=numeric answer="30" set=extra
$\frac{6!}{4!} = ?$
solution: $\frac{6 \times 5 \times 4!}{4!} = 30$.
:::

::: problem id=x4 type=numeric answer="10" set=extra
How many terms does $(a + b)^9$ have?
solution: $n + 1 = 10$.
:::

::: problem id=x5 type=numeric answer="64" set=extra
Add up all the entries of row 6 of Pascal's triangle.
solution: $1 + 6 + 15 + 20 + 15 + 6 + 1 = 64 = 2^6$.
:::

::: problem id=x6 type=numeric answer="35" set=extra
What is the coefficient of $x^3$ in $(x + 1)^7$?
solution: $x^3$ needs $7 - k = 3$, $k = 4$: $\binom{7}{4} = 35$.
:::

::: problem id=x7 type=numeric answer="60" set=extra
What is the coefficient of $x^4$ in $(x + 2)^6$?
solution: $k = 2$: $\binom{6}{2} \cdot 2^2 = 15 \times 4 = 60$.
:::

::: problem id=x8 type=numeric answer="81" set=extra
What is the constant term of $(x - 3)^4$?
solution: $k = 4$: $(-3)^4 = 81$.
:::

::: problem id=x9 type=numeric answer="10" set=extra
What is the coefficient of x in $(2x + 1)^5$?
solution: $x^1$ needs $k = 4$: $\binom{5}{4}(2x)^1 \cdot 1^4 = 5 \cdot 2x = 10x$.
:::

::: problem id=x10 type=numeric answer="10" set=extra
What is the coefficient of $x^2y^3$ in $(x + y)^5$?
solution: $k = 3$: $\binom{5}{3} = 10$.
:::

::: problem id=x11 type=choice set=extra
What is the third term of $(a + b)^4$?
- [x] $6a^2b^2$
- [ ] $4a^3b$
- [ ] $4ab^3$
- [ ] $6a^3b$
solution: The third term has $k = 2$: $\binom{4}{2}a^2b^2 = 6a^2b^2$.
:::

::: problem id=x12 type=numeric answer="2" set=extra
Sam says $(x + y)^2 = x^2 + y^2$. What is the coefficient of $xy$ that he left out?
solution: Row 2 is 1, 2, 1: $(x + y)^2 = x^2 + 2xy + y^2$.
:::

::: problem id=x13 type=numeric answer="56" set=extra
A pizza place offers 8 toppings. In how many ways can you choose 3 different toppings?
solution: Order doesn't matter: $\binom{8}{3} = \frac{8 \times 7 \times 6}{6} = 56$.
:::

::: problem id=x14 type=numeric answer="1140" set=extra
$\binom{20}{17} = ?$
hint: $\binom{n}{k} = \binom{n}{n - k}$.
solution: $\binom{20}{3} = \frac{20 \times 19 \times 18}{6} = 1140$.
:::

::: problem id=x15 type=numeric answer="54" set=extra
What is the coefficient of $x^2$ in $(3x - 1)^4$?
solution: $k = 2$: $\binom{4}{2}(3x)^2(-1)^2 = 6 \cdot 9x^2 = 54x^2$.
:::

::: problem id=x16 type=numeric answer="1.4641" set=extra
Use the binomial theorem on $(1 + 0.1)^4$ to find $1.1^4$.
solution: $1 + 4(0.1) + 6(0.01) + 4(0.001) + 0.0001$
$= 1 + 0.4 + 0.06 + 0.004 + 0.0001$
$= 1.4641$.
:::

::: problem id=x17 type=numeric answer="20" set=extra
What is the constant term of $\left(x + \frac{1}{x}\right)^6$?
hint: The term with k has $x^{6 - k} \cdot x^{-k}$.
solution: $x^{6 - 2k} = x^0$ needs $k = 3$: $\binom{6}{3} = 20$.
:::

::: problem id=x18 type=numeric answer="40" set=extra
What is the coefficient of $x^6$ in $(x^2 + 2)^5$?
hint: $(x^2)^{5 - k} = x^{10 - 2k}$.
solution: $10 - 2k = 6$, so $k = 2$: $\binom{5}{2} \cdot 2^2 = 40$.
:::

::: problem id=x19 type=numeric answer="720" set=extra
What is the coefficient of the 3rd term of $(2x - 3)^5$?
hint: The 3rd term has $k = 2$.
solution: $\binom{5}{2}(2x)^3(-3)^2 = 10 \cdot 8x^3 \cdot 9$
$= 720x^3$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
In $(x + k)^5$ with $k > 0$, the coefficient of $x^3$ is 90. What is k?
hint: Write the $x^3$ term in terms of k.
solution: $x^3$ needs the term $\binom{5}{2}x^3k^2 = 10k^2x^3$.
$10k^2 = 90$, so $k = 3$.
:::
