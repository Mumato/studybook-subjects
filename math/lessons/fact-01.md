---
id: fact-01
title: Factoring out the GCF
---
::: rule
**Factoring** is expanding in reverse: write a sum as a product.

First look for the **greatest common factor (GCF)** of all the terms (numbers and variables) and take it outside brackets:
$6x^2 + 9x = 3x(2x + 3)$

Check by expanding.
:::

::: example
$6x^2 + 9x$: the GCF of 6 and 9 is 3, and both terms have at least one x. So the GCF is $3x$: $3x(2x + 3)$.
:::

Type a factored answer with brackets, like 3x(2x+3).

::: problem id=p1 type=expression answer="4(x+3)" form=factored
Factor $4x + 12$.
solution: $4(x + 3)$.
:::

::: problem id=p2 type=expression answer="3x(2x+3)" form=factored
Factor $6x^2 + 9x$.
solution: $3x(2x + 3)$.
:::

::: problem id=p3 type=expression answer="6x^2"
What is the GCF of $12x^3$ and $18x^2$?
hint: The GCF of 12 and 18, and the lower power of x.
solution: GCF of 12 and 18 is 6; the lower power is $x^2$: $6x^2$.
:::

::: problem id=p4 type=expression answer="5x(x-2)" form=factored
Factor $5x^2 - 10x$.
solution: $5x(x - 2)$.
:::

::: problem id=p5 type=numeric answer="3"
$7x + 21 = 7(x + \square)$. What goes in the box?
solution: $21 \div 7 = 3$.
:::

::: problem id=p6 type=choice
Which is $8y^2 + 4y$ fully factored?
- [x] $4y(2y + 1)$
- [ ] $4(2y^2 + y)$
- [ ] $2y(4y + 2)$
solution: The GCF is $4y$. The others still have a common factor inside the brackets.
:::

::: problem id=p7 type=expression answer="x^2(x+1)" form=factored
Factor $x^3 + x^2$.
solution: $x^2(x + 1)$.
:::

::: problem id=p8 type=numeric answer="5"
$15x - 25 = 5(3x - \square)$. What goes in the box?
solution: $25 \div 5 = 5$.
:::

::: problem id=x1 type=expression answer="6(x+3)" form=factored set=extra
Factor $6x + 18$.
solution: $18 = 6 \times 3$: $6(x + 3)$.
:::

::: problem id=x2 type=expression answer="5(2x-3)" form=factored set=extra
Factor $10x - 15$.
solution: The GCF of 10 and 15 is 5: $5(2x - 3)$.
:::

::: problem id=x3 type=expression answer="4x(x+2)" form=factored set=extra
Factor $4x^2 + 8x$.
solution: The GCF is $4x$: $4x(x + 2)$.
:::

::: problem id=x4 type=expression answer="3x^2(3x-2)" form=factored set=extra
Factor $9x^3 - 6x^2$.
solution: GCF of 9 and 6 is 3, lower power $x^2$: $3x^2(3x - 2)$.
:::

::: problem id=x5 type=expression answer="4x^3" set=extra
What is the GCF of $8x^4$ and $20x^3$?
solution: GCF of 8 and 20 is 4; the lower power is $x^3$: $4x^3$.
:::

::: problem id=x6 type=expression answer="2(x^2+3x+5)" form=factored set=extra
Factor $2x^2 + 6x + 10$.
solution: Every term is even, and not all have an x: $2(x^2 + 3x + 5)$.
:::

::: problem id=x7 type=expression answer="7x*y(x+2)" vars="x,y" form=factored set=extra
Factor $7x^2y + 14xy$.
solution: The GCF is $7xy$: $7xy(x + 2)$.
:::

::: problem id=x8 type=numeric answer="2" set=extra
$12x - 8 = 4(3x - \square)$. What goes in the box?
solution: $8 \div 4 = 2$.
:::

::: problem id=x9 type=choice set=extra
Which is $12x^2 - 18x$ fully factored?
- [x] $6x(2x - 3)$
- [ ] $3x(4x - 6)$
- [ ] $6(2x^2 - 3x)$
solution: The GCF of 12 and 18 is 6, and both terms have x: $6x(2x - 3)$. The others still have a common factor inside.
:::

::: problem id=x10 type=expression answer="5x(x+1)" form=factored set=extra
Kay factors $5x^2 + 5x$ as $5x(x)$. That's wrong. Factor it correctly.
hint: What is $5x \div 5x$?
solution: $5x \div 5x = 1$, so a 1 stays behind: $5x(x + 1)$. Check: $5x^2 + 5x$.
:::

::: problem id=x11 type=expression answer="-4(x+3)" form=factored set=extra
Factor $-4x - 12$ by taking out $-4$.
solution: $-4x \div (-4) = x$ and $-12 \div (-4) = 3$: $-4(x + 3)$.
:::

::: problem id=x12 type=expression answer="5a*b(3a-2b)" vars="a,b" form=factored set=extra
Factor $15a^2b - 10ab^2$.
solution: The GCF is $5ab$: $5ab(3a - 2b)$.
:::

::: problem id=x13 type=expression answer="2x+3" set=extra
A rectangle has area $6x^2 + 9x$ and width $3x$. What is its length?
solution: $6x^2 + 9x = 3x(2x + 3)$, so the length is $2x + 3$.
:::

::: problem id=x14 type=expression answer="x^3(x^2+2)" form=factored set=extra
Factor $x^5 + 2x^3$.
solution: The lower power is $x^3$: $x^3(x^2 + 2)$.
:::

::: problem id=x15 type=expression answer="(x-2)(3x+5)" form=factored set=extra
Factor $3x(x - 2) + 5(x - 2)$.
hint: The common factor is the whole bracket $(x - 2)$.
solution: Take out $(x - 2)$: $(x - 2)(3x + 5)$.
:::

::: problem id=x16 type=expression answer="4x(2x^2-3x+1)" form=factored set=extra
Factor out the GCF of $8x^3 - 12x^2 + 4x$.
hint: The last term $4x$ is the GCF itself.
solution: $4x(2x^2 - 3x + 1)$. Don't forget the 1 left from $4x \div 4x$.
:::

::: problem id=x17 type=expression answer="(x+4)(x-3)" form=factored set=extra
Factor $x(x + 4) - 3(x + 4)$.
hint: Take out the common bracket.
solution: $(x + 4)(x - 3)$.
:::

::: problem id=x18 type=expression answer="(a-b)(2x-3)" vars="a,b,x" form=factored set=extra
Factor $2x(a - b) + 3(b - a)$.
hint: $b - a = -(a - b)$.
solution: $2x(a - b) - 3(a - b) = (a - b)(2x - 3)$.
:::

::: problem id=x19 type=expression answer="5t(4-t)" vars="t" form=factored set=extra
A ball's height is $20t - 5t^2$ metres after t seconds. Factor the expression.
hint: The GCF is $5t$.
solution: $5t(4 - t)$.
:::

::: problem id=x20 type=numeric answer="3" set=extra creative=true
$2^{10} + 2^9 = 2^9 \times \square$. What goes in the box?
hint: Take out the common factor $2^9$.
solution: $2^{10} = 2^9 \times 2$, so $2^9(2 + 1) = 2^9 \times 3$.
:::
