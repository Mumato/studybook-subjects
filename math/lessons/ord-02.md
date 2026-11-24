---
id: ord-02
title: Order of operations
---
::: rule
When a calculation has several steps, do them in this order:

1. **Brackets** first
2. **Exponents**
3. **Multiplication and division**, left to right
4. **Addition and subtraction**, left to right
:::

::: example
$3 + 4 \times 5$

Multiply first: $4 \times 5 = 20$. Then add: $3 + 20 = 23$.
(Not 35: adding first is the classic mistake.)
:::

::: example
$(8 - 2)^2 \div 4$

Brackets: $8 - 2 = 6$. Exponent: $6^2 = 36$. Divide: $36 \div 4 = 9$.
:::

::: problem id=p1 type=numeric answer="14"
$2 + 3 \times 4 = ?$
hint: Multiply before you add.
solution: $3 \times 4 = 12$, then $2 + 12 = 14$.
:::

::: problem id=p2 type=numeric answer="20"
$(2 + 3) \times 4 = ?$
solution: Brackets first: $2 + 3 = 5$, then $5 \times 4 = 20$.
:::

::: problem id=p3 type=numeric answer="17"
$20 - 12 \div 4 = ?$
solution: $12 \div 4 = 3$, then $20 - 3 = 17$.
:::

::: problem id=p4 type=numeric answer="12"
$18 \div 3 \times 2 = ?$
hint: Multiplication and division go left to right.
solution: Left to right: $18 \div 3 = 6$, then $6 \times 2 = 12$.
:::

::: problem id=p5 type=numeric answer="13"
$5 + 2^3 = ?$
solution: Exponent first: $2^3 = 8$, then $5 + 8 = 13$.
:::

::: problem id=p6 type=numeric answer="36"
$(10 - 4)^2 = ?$
solution: $10 - 4 = 6$, then $6^2 = 36$.
:::

::: problem id=p7 type=numeric answer="29"
$4 \times (7 - 2) + 3^2 = ?$
hint: Brackets, then the exponent, then multiply, then add.
solution: $7 - 2 = 5$. $3^2 = 9$. $4 \times 5 = 20$. $20 + 9 = 29$.
:::

::: problem id=p8 type=numeric answer="30"
$50 - (3 + 2) \times (8 - 4) = ?$
solution: Brackets: 5 and 4. Multiply: $5 \times 4 = 20$. Subtract: $50 - 20 = 30$.
:::

::: problem id=c1 type=numeric answer="20" creative=true
Use the numbers 2, 3 and 4 once each, with one + and one ×, and brackets if you like. What is the largest result you can make?
hint: Try adding two numbers first, then multiplying by the third.
solution: The options with brackets: $(2+3) \times 4 = 20$, $(2+4) \times 3 = 18$, $(3+4) \times 2 = 14$. Without brackets the results are smaller (like $3 \times 4 + 2 = 14$). The largest is **20**.
:::
