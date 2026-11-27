---
id: pre-02
title: Dividing polynomials
---
::: rule
Divide polynomials like long division with numbers: divide the leading terms, multiply back, subtract, bring down, repeat.

**Remainder theorem:** dividing $p(x)$ by $(x - a)$ leaves remainder $p(a)$.

**Factor theorem:** $(x - a)$ is a factor exactly when $p(a) = 0$.
:::

::: example
$(x^2 + 5x + 6) \div (x + 2) = x + 3$, remainder 0, since $(x + 2)(x + 3) = x^2 + 5x + 6$.
:::

::: example
Remainder of $(x^3 - 2x + 4) \div (x - 2)$: $p(2) = 8 - 4 + 4 = 8$.
:::

::: problem id=p1 type=expression answer="x+3"
$(x^2 + 5x + 6) \div (x + 2) = ?$
solution: $x + 3$.
:::

::: problem id=p2 type=numeric answer="2"
What is the remainder of $(x^2 + 1) \div (x - 1)$?
solution: $p(1) = 1 + 1 = 2$.
:::

::: problem id=p3 type=numeric answer="8"
What is the remainder of $(x^3 - 2x + 4) \div (x - 2)$?
solution: $p(2) = 8$.
:::

::: problem id=p4 type=text answers="yes"
Is $(x - 1)$ a factor of $x^3 - 1$? Type yes or no.
solution: $1^3 - 1 = 0$: **yes**.
:::

::: problem id=p5 type=expression answer="x^2+2x+4"
$(x^3 - 8) \div (x - 2) = ?$
solution: $x^2 + 2x + 4$, because $(x - 2)(x^2 + 2x + 4) = x^3 - 8$.
:::

::: problem id=p6 type=numeric answer="-1"
For which k is $(x - 3)$ a factor of $x^2 + kx - 6$?
hint: Set $p(3) = 0$.
solution: $9 + 3k - 6 = 0$, $k = -1$.
:::

::: problem id=p7 type=expression answer="2x+1"
$(2x^2 + 7x + 3) \div (x + 3) = ?$
solution: $2x + 1$.
:::

::: problem id=p8 type=numeric answer="-2"
$p(x) = x^4 + x^3 - 2$. What is $p(-1)$?
solution: $1 - 1 - 2 = -2$.
:::

::: problem id=x1 type=expression answer="x+2" set=extra
$(x^2 + 7x + 10) \div (x + 5) = ?$
solution: $(x + 5)(x + 2) = x^2 + 7x + 10$, so $x + 2$.
:::

::: problem id=x2 type=expression answer="x+3" set=extra
$(x^2 - x - 12) \div (x - 4) = ?$
solution: $(x - 4)(x + 3) = x^2 - x - 12$, so $x + 3$.
:::

::: problem id=x3 type=numeric answer="11" set=extra
What is the remainder of $(x^2 + 4x - 1) \div (x - 2)$?
solution: $p(2) = 4 + 8 - 1 = 11$.
:::

::: problem id=x4 type=numeric answer="-4" set=extra
What is the remainder of $(x^3 + 2x^2 - 5) \div (x + 1)$?
solution: $p(-1) = -1 + 2 - 5 = -4$.
:::

::: problem id=x5 type=expression answer="3x+4" set=extra
$(3x^2 + 10x + 8) \div (x + 2) = ?$
solution: $3x^2 \div x = 3x$; $3x(x + 2) = 3x^2 + 6x$; left $4x + 8 = 4(x + 2)$. Quotient $3x + 4$.
:::

::: problem id=x6 type=text answers="yes" set=extra
Is $(x + 2)$ a factor of $x^3 + 8$? Type yes or no.
solution: $p(-2) = -8 + 8 = 0$: **yes**.
:::

::: problem id=x7 type=expression answer="x^2+3x+9" set=extra
$(x^3 - 27) \div (x - 3) = ?$
solution: $(x - 3)(x^2 + 3x + 9) = x^3 - 27$.
:::

::: problem id=x8 type=numeric answer="-7" set=extra
What is the remainder of $(2x^3 - x + 7) \div (x + 2)$?
solution: $p(-2) = -16 + 2 + 7 = -7$.
:::

::: problem id=x9 type=numeric answer="3" set=extra
For which k is $(x + 1)$ a factor of $x^3 + kx + 4$?
solution: $p(-1) = -1 - k + 4 = 0$, so $k = 3$.
:::

::: problem id=x10 type=choice set=extra
A polynomial has $p(5) = 0$. What follows?
- [x] $(x - 5)$ is a factor
- [ ] $(x + 5)$ is a factor
- [ ] dividing by $(x - 5)$ leaves remainder 5
- [ ] $p$ has no other zeros
solution: Factor theorem: $p(a) = 0$ exactly when $(x - a)$ is a factor.
:::

::: problem id=x11 type=expression answer="x+2" set=extra
$(x^2 + 3x + 5) \div (x + 1)$ leaves a remainder. What is the quotient?
solution: $x(x + 1) = x^2 + x$; left $2x + 5$; $2(x + 1) = 2x + 2$; left 3.
Quotient $x + 2$, remainder 3.
:::

::: problem id=x12 type=expression answer="x^3+x^2+x+1" set=extra
$(x^4 - 1) \div (x - 1) = ?$
solution: $(x - 1)(x^3 + x^2 + x + 1) = x^4 - 1$.
:::

::: problem id=x13 type=expression answer="3x+2" set=extra
$(6x^2 + x - 2) \div (2x - 1) = ?$
solution: $(2x - 1)(3x + 2)$
$= 6x^2 + 4x - 3x - 2$
$= 6x^2 + x - 2$.
:::

::: problem id=x14 type=numeric answer="6" set=extra
Sam finds the remainder of $(x^2 + x) \div (x + 3)$ as $p(3) = 12$. What is the right remainder?
solution: Dividing by $x + 3 = x - (-3)$ needs $p(-3) = 9 - 3 = 6$.
:::

::: problem id=x15 type=numeric answer="-3" set=extra
$x^2 + bx + 7$ leaves remainder 5 when divided by $(x - 2)$. What is b?
solution: $p(2) = 4 + 2b + 7 = 5$, so $2b = -6$ and $b = -3$.
:::

::: problem id=x16 type=expression answer="x^2+3x+2" set=extra
$(x^3 + 2x^2 - x - 2) \div (x - 1) = ?$
hint: Check that $p(1) = 0$ first, then divide.
solution: $(x - 1)(x^2 + 3x + 2)$
$= x^3 + 3x^2 + 2x - x^2 - 3x - 2$, which matches.
:::

::: problem id=x17 type=multi answers="2;3;-1" set=extra
$x = 2$ is a zero of $x^3 - 4x^2 + x + 6$. Find all its zeros.
hint: Divide by $(x - 2)$ and factor the quadratic.
solution: The quotient is $x^2 - 2x - 3 = (x - 3)(x + 1)$.
Zeros: 2, 3, $-1$.
:::

::: problem id=x18 type=expression answer="x^2+4" set=extra
$(x^3 - 3x^2 + 4x - 12) \div (x - 3) = ?$
hint: Try grouping: $x^2(x - 3) + 4(x - 3)$.
solution: $(x - 3)(x^2 + 4)$, so the quotient is $x^2 + 4$.
:::

::: problem id=x19 type=numeric answer="-2" set=extra
$p(x) = x^3 + ax^2 + 5$ leaves remainder 5 when divided by $(x - 2)$. What is a?
hint: Remainder theorem with $x = 2$.
solution: $p(2) = 8 + 4a + 5 = 5$, so $4a = -8$ and $a = -2$.
:::

::: problem id=x20 type=expression answer="3x+2" set=extra creative=true
$p(x)$ leaves remainder 5 when divided by $(x - 1)$ and $-1$ when divided by $(x + 1)$. Its remainder when divided by $x^2 - 1$ has the form $ax + b$. Find it.
hint: Write $p(x) = (x^2 - 1)q(x) + ax + b$ and put in $x = 1$ and $x = -1$.
solution: $p(1) = a + b = 5$ and $p(-1) = -a + b = -1$.
So $b = 2$, $a = 3$: remainder $3x + 2$.
:::
