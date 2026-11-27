---
id: fact-04
title: Special factoring patterns
---
::: rule
- **Difference of squares:** $a^2 - b^2 = (a + b)(a - b)$
- **Perfect squares:** $a^2 + 2ab + b^2 = (a + b)^2$ and $a^2 - 2ab + b^2 = (a - b)^2$

Always take out a common factor first, and keep going until nothing more factors. A **sum** of squares like $x^2 + 4$ doesn't factor.
:::

::: example
$4x^2 - 25 = (2x)^2 - 5^2$ $= (2x + 5)(2x - 5)$
:::

::: example
$2x^2 - 8 = 2(x^2 - 4) = 2(x + 2)(x - 2)$
:::

::: problem id=p1 type=expression answer="(x+3)(x-3)" form=factored
Factor $x^2 - 9$.
solution: $(x + 3)(x - 3)$.
:::

::: problem id=p2 type=expression answer="(2x+5)(2x-5)" form=factored
Factor $4x^2 - 25$.
solution: $(2x + 5)(2x - 5)$.
:::

::: problem id=p3 type=expression answer="(x+3)^2" form=factored
Factor $x^2 + 6x + 9$.
solution: $(x + 3)^2$.
:::

::: problem id=p4 type=expression answer="(x-5)^2" form=factored
Factor $x^2 - 10x + 25$.
solution: $(x - 5)^2$.
:::

::: problem id=p5 type=expression answer="2(x+2)(x-2)" form=factored
Factor $2x^2 - 8$ completely.
hint: Take out 2 first.
solution: $2(x^2 - 4) = 2(x + 2)(x - 2)$.
:::

::: problem id=p6 type=text answers="no"
Can $x^2 + 4$ be factored using whole numbers? Type yes or no.
solution: A sum of squares doesn't factor: **no**.
:::

::: problem id=p7 type=numeric answer="400"
Work out $101^2 - 99^2$ using the difference of squares.
solution: $(101 + 99)(101 - 99) = 200 \times 2 = 400$.
:::

::: problem id=p8 type=expression answer="(x^2+1)(x+1)(x-1)" form=factored
Factor $x^4 - 1$ completely.
hint: $x^4 - 1 = (x^2)^2 - 1^2$.
solution: $(x^2 + 1)(x^2 - 1)$ $= (x^2 + 1)(x + 1)(x - 1)$.
:::

::: problem id=x1 type=expression answer="(x+5)(x-5)" form=factored set=extra
Factor $x^2 - 25$.
solution: $x^2 - 5^2 = (x + 5)(x - 5)$.
:::

::: problem id=x2 type=expression answer="(3x+1)(3x-1)" form=factored set=extra
Factor $9x^2 - 1$.
solution: $(3x)^2 - 1^2 = (3x + 1)(3x - 1)$.
:::

::: problem id=x3 type=expression answer="(x+7)^2" form=factored set=extra
Factor $x^2 + 14x + 49$.
solution: $49 = 7^2$ and $14x = 2 \times 7 \times x$: $(x + 7)^2$.
:::

::: problem id=x4 type=expression answer="(x-6)^2" form=factored set=extra
Factor $x^2 - 12x + 36$.
solution: $36 = 6^2$ and $12x = 2 \times 6 \times x$, with a minus: $(x - 6)^2$.
:::

::: problem id=x5 type=expression answer="(4x+7)(4x-7)" form=factored set=extra
Factor $16x^2 - 49$.
solution: $(4x)^2 - 7^2 = (4x + 7)(4x - 7)$.
:::

::: problem id=x6 type=expression answer="(2x+3)^2" form=factored set=extra
Factor $4x^2 + 12x + 9$.
solution: $(2x)^2 + 2(2x)(3) + 3^2 = (2x + 3)^2$.
:::

::: problem id=x7 type=text answers="no" set=extra
Is $x^2 + 6x + 4$ a perfect square? Type yes or no.
solution: Half of 6 is 3, and $3^2 = 9$, not 4: **no**.
:::

::: problem id=x8 type=expression answer="3(x+3)(x-3)" form=factored set=extra
Factor $3x^2 - 27$ completely.
hint: Take out 3 first.
solution: $3(x^2 - 9) = 3(x + 3)(x - 3)$.
:::

::: problem id=x9 type=choice set=extra
Which is a perfect square trinomial?
- [x] $x^2 - 8x + 16$
- [ ] $x^2 + 8x - 16$
- [ ] $x^2 + 4x + 16$
solution: $x^2 - 8x + 16 = (x - 4)^2$. The last term of a perfect square is positive, and the middle must be $2 \times 4 = 8$.
:::

::: problem id=x10 type=choice set=extra
Al writes $x^2 + 25 = (x + 5)(x - 5)$. What's wrong?
- [x] $(x + 5)(x - 5) = x^2 - 25$; a sum of squares doesn't factor
- [ ] Nothing, it's right
- [ ] It should be $(x + 5)^2$
solution: Expanding gives $x^2 - 25$. And $(x + 5)^2 = x^2 + 10x + 25$. $x^2 + 25$ doesn't factor.
:::

::: problem id=x11 type=numeric answer="600" set=extra
Work out $53^2 - 47^2$ using the difference of squares.
solution: $(53 + 47)(53 - 47) = 100 \times 6 = 600$.
:::

::: problem id=x12 type=expression answer="(5x+2y)(5x-2y)" vars="x,y" form=factored set=extra
Factor $25x^2 - 4y^2$.
solution: $(5x)^2 - (2y)^2 = (5x + 2y)(5x - 2y)$.
:::

::: problem id=x13 type=numeric answer="18" set=extra
For which positive b is $x^2 + bx + 81$ a perfect square?
solution: $81 = 9^2$, so it must be $(x + 9)^2 = x^2 + 18x + 81$: $b = 18$.
:::

::: problem id=x14 type=expression answer="(x+2)(x-2)(x+3)" form=factored set=extra
Factor completely: $x^3 + 3x^2 - 4x - 12$.
hint: Group in pairs first, then look at what is left.
solution: $x^2(x + 3) - 4(x + 3) = (x^2 - 4)(x + 3)$ $= (x + 2)(x - 2)(x + 3)$.
:::

::: problem id=x15 type=expression answer="(x+1)(x-1)(x-5)" form=factored set=extra
Factor completely: $x^3 - 5x^2 - x + 5$.
hint: Group in pairs: $-x + 5 = -1(x - 5)$.
solution: $x^2(x - 5) - 1(x - 5) = (x^2 - 1)(x - 5)$ $= (x + 1)(x - 1)(x - 5)$.
:::

::: problem id=x16 type=expression answer="2x(x+3)(x-3)" form=factored set=extra
Factor $2x^3 - 18x$ completely.
hint: Take out $2x$ first.
solution: $2x(x^2 - 9) = 2x(x + 3)(x - 3)$.
:::

::: problem id=x17 type=expression answer="(x^2+4)(x+2)(x-2)" form=factored set=extra
Factor $x^4 - 16$ completely.
hint: $x^4 - 16 = (x^2)^2 - 4^2$, and keep going.
solution: $(x^2 + 4)(x^2 - 4)$ $= (x^2 + 4)(x + 2)(x - 2)$. The sum $x^2 + 4$ stops.
:::

::: problem id=x18 type=expression answer="(x+3+y)(x+3-y)" vars="x,y" form=factored set=extra
Factor $x^2 + 6x + 9 - y^2$.
hint: Group the first three terms: they make a perfect square.
solution: $(x + 3)^2 - y^2$, a difference of squares: $(x + 3 + y)(x + 3 - y)$.
:::

::: problem id=x19 type=expression answer="5x(x-2)^2" form=factored set=extra
Factor $5x^3 - 20x^2 + 20x$ completely.
hint: Take out $5x$, then look for a perfect square.
solution: $5x(x^2 - 4x + 4) = 5x(x - 2)^2$.
:::

::: problem id=x20 type=expression answer="(2x+3)(2x-3)(x+2)" form=factored set=extra creative=true
Factor completely: $4x^3 + 8x^2 - 9x - 18$.
hint: Group, then one bracket is a difference of squares.
solution: $4x^2(x + 2) - 9(x + 2) = (4x^2 - 9)(x + 2)$ $= (2x + 3)(2x - 3)(x + 2)$.
:::
