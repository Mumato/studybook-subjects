---
id: fact-03
title: Factoring ax² + bx + c
---
::: rule
When the number in front of $x^2$ isn't 1, use the **ac method**:
1. Multiply a and c.
2. Find two numbers that multiply to ac and add to b.
3. Split the middle term with them.
4. Factor the two pairs and take out the common bracket.
:::

::: example
$2x^2 + 7x + 3$: $ac = 6$. Numbers that multiply to 6 and add to 7: 6 and 1.

$2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3)$, which is $(2x + 1)(x + 3)$.
:::

::: problem id=p1 type=expression answer="(2x+3)(x+1)" form=factored
Factor $2x^2 + 5x + 3$.
hint: $ac = 6$: use 3 and 2.
solution: $2x^2 + 3x + 2x + 3$ $= x(2x + 3) + 1(2x + 3)$, which is $(2x + 3)(x + 1)$.
:::

::: problem id=p2 type=expression answer="(3x+4)(x+2)" form=factored
Factor $3x^2 + 10x + 8$.
solution: $ac = 24$: 6 and 4. $3x^2 + 6x + 4x + 8$ $= 3x(x + 2) + 4(x + 2)$, which is $(3x + 4)(x + 2)$.
:::

::: problem id=p3 type=expression answer="(2x+3)(x-2)" form=factored
Factor $2x^2 - x - 6$.
hint: $ac = -12$: which pair adds to $-1$?
solution: $-4$ and 3. $2x^2 - 4x + 3x - 6$ $= 2x(x - 2) + 3(x - 2)$, which is $(2x + 3)(x - 2)$.
:::

::: problem id=p4 type=expression answer="(2x+1)^2" form=factored
Factor $4x^2 + 4x + 1$.
solution: It's a perfect square: $(2x + 1)^2$.
:::

::: problem id=p5 type=expression answer="(2x+1)(3x+2)" form=factored
Factor $6x^2 + 7x + 2$.
solution: $ac = 12$: 4 and 3. $6x^2 + 4x + 3x + 2$ $= 2x(3x + 2) + 1(3x + 2)$, which is $(2x + 1)(3x + 2)$.
:::

::: problem id=p6 type=numeric answer="6"
For $2x^2 + 7x + 3$, what is $a \times c$?
solution: $2 \times 3 = 6$.
:::

::: problem id=p7 type=choice
Which is $3x^2 - 5x - 2$ factored?
- [x] $(3x + 1)(x - 2)$
- [ ] $(3x - 1)(x + 2)$
- [ ] $(3x - 2)(x + 1)$
solution: Expand: $3x^2 - 6x + x - 2 = 3x^2 - 5x - 2$.
:::

::: problem id=p8 type=expression answer="(5x+1)(x+2)" form=factored
Factor $5x^2 + 11x + 2$.
solution: $ac = 10$: 10 and 1. $5x^2 + 10x + x + 2$ $= 5x(x + 2) + 1(x + 2)$, which is $(5x + 1)(x + 2)$.
:::

::: problem id=x1 type=expression answer="(x^2+2)(x+3)" form=factored set=extra
Factor by grouping: $x^3 + 3x^2 + 2x + 6$.
hint: Factor the first two terms, then the last two.
solution: $x^2(x + 3) + 2(x + 3)$. Take out $(x + 3)$: $(x^2 + 2)(x + 3)$.
:::

::: problem id=x2 type=expression answer="(x^2+5)(x-4)" form=factored set=extra
Factor by grouping: $x^3 - 4x^2 + 5x - 20$.
solution: $x^2(x - 4) + 5(x - 4) = (x^2 + 5)(x - 4)$.
:::

::: problem id=x3 type=expression answer="(x^2+3)(2x+1)" form=factored set=extra
Factor by grouping: $2x^3 + x^2 + 6x + 3$.
solution: $x^2(2x + 1) + 3(2x + 1)$ $= (x^2 + 3)(2x + 1)$.
:::

::: problem id=x4 type=expression answer="(x+2)(y+3)" vars="x,y" form=factored set=extra
Factor by grouping: $xy + 3x + 2y + 6$.
solution: $x(y + 3) + 2(y + 3) = (x + 2)(y + 3)$.
:::

::: problem id=x5 type=expression answer="(3x+1)(x+2)" form=factored set=extra
Factor $3x^2 + 7x + 2$.
solution: $ac = 6$: 6 and 1. $3x^2 + 6x + x + 2$ $= 3x(x + 2) + 1(x + 2)$ $= (3x + 1)(x + 2)$.
:::

::: problem id=x6 type=expression answer="(2x+1)(x+5)" form=factored set=extra
Factor $2x^2 + 11x + 5$.
solution: $ac = 10$: 10 and 1. $2x^2 + 10x + x + 5$ $= 2x(x + 5) + 1(x + 5)$ $= (2x + 1)(x + 5)$.
:::

::: problem id=x7 type=expression answer="(2x-1)(x-3)" form=factored set=extra
Factor $2x^2 - 7x + 3$.
solution: $ac = 6$: $-6$ and $-1$. $2x^2 - 6x - x + 3$ $= 2x(x - 3) - 1(x - 3)$ $= (2x - 1)(x - 3)$.
:::

::: problem id=x8 type=expression answer="(3x+4)(x-1)" form=factored set=extra
Factor $3x^2 + x - 4$.
solution: $ac = -12$: 4 and $-3$. $3x^2 + 4x - 3x - 4$ $= x(3x + 4) - 1(3x + 4)$ $= (x - 1)(3x + 4)$.
:::

::: problem id=x9 type=multi answers="9;4" set=extra
To factor $6x^2 + 13x + 6$, which two numbers split the middle term? Type both.
solution: $ac = 36$. Numbers that multiply to 36 and add to 13: **9 and 4**.
:::

::: problem id=x10 type=expression answer="(2x+1)(2x-3)" form=factored set=extra
Factor $4x^2 - 4x - 3$.
solution: $ac = -12$: $-6$ and 2. $4x^2 - 6x + 2x - 3$ $= 2x(2x - 3) + 1(2x - 3)$ $= (2x + 1)(2x - 3)$.
:::

::: problem id=x11 type=choice set=extra
Which is $5x^2 - 13x - 6$ factored?
- [x] $(5x + 2)(x - 3)$
- [ ] $(5x - 2)(x + 3)$
- [ ] $(5x + 3)(x - 2)$
solution: $ac = -30$: $-15$ and 2. $5x(x - 3) + 2(x - 3) = (5x + 2)(x - 3)$. The others expand to $5x^2 + 13x - 6$ and $5x^2 - 7x - 6$.
:::

::: problem id=x12 type=expression answer="(x^2-3)(x+2)" form=factored set=extra
Ben groups $x^3 + 2x^2 - 3x - 6$ as $x^2(x + 2) - 3(x - 2)$. The brackets don't match. Factor it correctly.
hint: Taking out $-3$ from $-3x - 6$ changes both signs.
solution: $-3x - 6 = -3(x + 2)$. So $x^2(x + 2) - 3(x + 2) = (x^2 - 3)(x + 2)$.
:::

::: problem id=x13 type=expression answer="(2x+1)(3x-2)" form=factored set=extra
Factor $6x^2 - x - 2$.
solution: $ac = -12$: $-4$ and 3. $6x^2 - 4x + 3x - 2$ $= 2x(3x - 2) + 1(3x - 2)$ $= (2x + 1)(3x - 2)$.
:::

::: problem id=x14 type=expression answer="2x+3" set=extra
A rectangle has area $2x^2 + 7x + 6$. One side is $x + 2$. What is the other side?
solution: $ac = 12$: 4 and 3. $2x(x + 2) + 3(x + 2) = (2x + 3)(x + 2)$. The other side is $2x + 3$.
:::

::: problem id=x15 type=expression answer="(3x-2)(2x+3)" form=factored set=extra
Factor by grouping: $6x^2 + 9x - 4x - 6$.
solution: $3x(2x + 3) - 2(2x + 3)$ $= (3x - 2)(2x + 3)$.
:::

::: problem id=x16 type=expression answer="(3x-2)(2x+5)" form=factored set=extra
Factor $6x^2 + 11x - 10$.
hint: $ac = -60$. Try 15 and $-4$.
solution: $6x^2 + 15x - 4x - 10$ $= 3x(2x + 5) - 2(2x + 5)$ $= (3x - 2)(2x + 5)$.
:::

::: problem id=x17 type=expression answer="2(2x+3)(x+1)" form=factored set=extra
Factor $4x^2 + 10x + 6$ completely.
hint: Take out the common factor 2 first.
solution: $2(2x^2 + 5x + 3)$. $ac = 6$: 3 and 2. $2x^2 + 5x + 3 = (2x + 3)(x + 1)$. So $2(2x + 3)(x + 1)$.
:::

::: problem id=x18 type=expression answer="(2x+5)(y-3)" vars="x,y" form=factored set=extra
Factor by grouping: $2xy - 6x + 5y - 15$.
hint: Group the first two terms and the last two.
solution: $2x(y - 3) + 5(y - 3) = (2x + 5)(y - 3)$.
:::

::: problem id=x19 type=expression answer="(2x-1)(4x-3)" form=factored set=extra
Factor $8x^2 - 10x + 3$.
hint: $ac = 24$ and b is negative, so both numbers are negative.
solution: $-6$ and $-4$. $8x^2 - 6x - 4x + 3$ $= 2x(4x - 3) - 1(4x - 3)$ $= (2x - 1)(4x - 3)$.
:::

::: problem id=x20 type=expression answer="(3x-2y)(2x+3y)" vars="x,y" form=factored set=extra creative=true
Factor $6x^2 + 5xy - 6y^2$.
hint: Use the ac method with $ac = -36$; carry the y along.
solution: 9 and $-4$: $6x^2 + 9xy - 4xy - 6y^2$ $= 3x(2x + 3y) - 2y(2x + 3y)$ $= (3x - 2y)(2x + 3y)$.
:::
