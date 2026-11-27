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

::: problem id=x1 type=numeric answer="18" set=extra
$6 + 4 \times 3 = ?$
solution: $4 \times 3 = 12$, then $6 + 12 = 18$.
:::

::: problem id=x2 type=numeric answer="24" set=extra
$30 - 18 \div 3 = ?$
solution: $18 \div 3 = 6$, then $30 - 6 = 24$.
:::

::: problem id=x3 type=numeric answer="30" set=extra
$(9 - 4) \times 6 = ?$
solution: Brackets: $9 - 4 = 5$. Then $5 \times 6 = 30$.
:::

::: problem id=x4 type=numeric answer="8" set=extra
$24 \div 6 \times 2 = ?$
hint: Left to right.
solution: $24 \div 6 = 4$, then $4 \times 2 = 8$.
:::

::: problem id=x5 type=numeric answer="18" set=extra
$2 \times 3^2 = ?$
solution: Exponent first: $3^2 = 9$. Then $2 \times 9 = 18$.
:::

::: problem id=x6 type=numeric answer="5" set=extra
$40 \div (2 + 6) = ?$
solution: $2 + 6 = 8$, then $40 \div 8 = 5$.
:::

::: problem id=x7 type=numeric answer="7" set=extra
$10 - 2^3 + 5 = ?$
solution: $2^3 = 8$. Left to right: $10 - 8 = 2$, $2 + 5 = 7$.
:::

::: problem id=x8 type=numeric answer="108" set=extra
$3 \times (4 + 2)^2 = ?$
solution: Brackets: 6. Exponent: $6^2 = 36$. Multiply: $3 \times 36 = 108$.
:::

::: problem id=x9 type=choice set=extra
Max says $8 + 2 \times 5 = 50$. What went wrong?
- [x] He added first; multiply first, so it is 18
- [ ] Nothing, 50 is right
- [ ] It should be 15
- [ ] It should be 80
solution: $2 \times 5 = 10$, then $8 + 10 = 18$. 50 is $(8 + 2) \times 5$.
:::

::: problem id=x10 type=choice set=extra
Which one equals 20?
- [ ] $2 + 3 \times 4$
- [x] $(2 + 3) \times 4$
- [ ] $2 \times 3 + 4$
- [ ] $2 + 3 + 4$
solution: $(2 + 3) \times 4 = 5 \times 4 = 20$. The others are 14, 10 and 9.
:::

::: problem id=x11 type=choice set=extra
Where do brackets go to make $6 + 4 \times 2 = 20$ true?
- [x] $(6 + 4) \times 2$
- [ ] $6 + (4 \times 2)$
- [ ] No brackets are needed
solution: $(6 + 4) \times 2 = 10 \times 2 = 20$. Without them you get $6 + 8 = 14$.
:::

::: problem id=x12 type=numeric answer="41" set=extra
You buy 3 books at 12 dollars each and a pen for 5 dollars. Work out $3 \times 12 + 5$. How many dollars is it?
solution: $3 \times 12 = 36$, then $36 + 5 = 41$ dollars.
:::

::: problem id=x13 type=numeric answer="0" set=extra
$100 - 4 \times 5^2 = ?$
solution: $5^2 = 25$. $4 \times 25 = 100$. $100 - 100 = 0$.
:::

::: problem id=x14 type=numeric answer="17" set=extra
$(15 - 3) \div 4 + 2 \times 7 = ?$
solution: Brackets: 12. Then $12 \div 4 = 3$ and $2 \times 7 = 14$. $3 + 14 = 17$.
:::

::: problem id=x15 type=numeric answer="11" set=extra
$2^4 \div 4 \times 3 - 1 = ?$
hint: Exponent, then divide and multiply left to right, then subtract.
solution: $2^4 = 16$. $16 \div 4 = 4$. $4 \times 3 = 12$. $12 - 1 = 11$.
:::

::: problem id=x16 type=numeric answer="40" set=extra
$5 \times (2 + 3 \times (8 - 6)) = ?$
hint: Start with the innermost brackets.
solution: $8 - 6 = 2$. Inside: $2 + 3 \times 2 = 8$. Then $5 \times 8 = 40$.
:::

::: problem id=x17 type=numeric answer="15" set=extra
$48 \div (3 + 1)^2 \times 5 = ?$
hint: Brackets, exponent, then left to right.
solution: $3 + 1 = 4$, $4^2 = 16$. $48 \div 16 = 3$. $3 \times 5 = 15$.
:::

::: problem id=x18 type=numeric answer="24" set=extra
Ali has 50 dollars. He buys 4 drinks at 3 dollars and 2 sandwiches at 7 dollars. How many dollars are left? (Work out $50 - (4 \times 3 + 2 \times 7)$.)
hint: Find the total cost inside the brackets first.
solution: $4 \times 3 = 12$, $2 \times 7 = 14$, cost 26. $50 - 26 = 24$ dollars.
:::

::: problem id=x19 type=numeric answer="10" set=extra
$7 + 3 \times (10 - 2^3) \div 2 = ?$
hint: Inside the brackets, the exponent comes first.
solution: $2^3 = 8$, $10 - 8 = 2$. Then $3 \times 2 = 6$, $6 \div 2 = 3$. $7 + 3 = 10$.
:::

::: problem id=x20 type=numeric answer="70" set=extra creative=true
Put one pair of brackets into $2 \times 3 + 4 \times 5$ to make the result as large as possible. What is the largest result?
hint: Try brackets around different parts and work each out.
solution: No brackets: 26. $(2 \times 3 + 4) \times 5 = 50$. $2 \times (3 + 4 \times 5) = 46$. $2 \times (3 + 4) \times 5 = 70$. The largest is **70**.
:::
