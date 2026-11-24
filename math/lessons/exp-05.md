---
id: exp-05
title: Growth and decay
---
::: rule
- **Percent growth** r per period: $A = P(1 + r)^t$ (use $1 - r$ for decay)
- **Continuous growth:** $A = Pe^{rt}$
- **Doubling / half-life:** after each doubling time the amount doubles; after each half-life it halves.
:::

::: example
1000 dollars at 10% a year for 2 years: $1000 \times 1.1^2 = 1210$.
:::

::: example
A substance with half-life 5 days: 80 g becomes 40 g after 5 days, 20 g after 10, 10 g after 15.
:::

::: problem id=p1 type=numeric answer="1210"
1000 dollars grows at 10% per year. How much after 2 years?
solution: $1000 \times 1.21 = 1210$.
:::

::: problem id=p2 type=numeric answer="10"
80 g of a substance has a half-life of 5 days. How much is left after 15 days?
solution: Three halvings: $80 \to 40 \to 20 \to 10$ g.
:::

::: problem id=p3 type=numeric answer="600"
A town of 500 grows 20% per year. How many people after 1 year?
solution: $500 \times 1.2 = 600$.
:::

::: problem id=p4 type=numeric answer="100e^0.5" tolerance="0.01"
$A = 100e^{0.05t}$. What is A when $t = 10$? (exact or to hundredths)
solution: $100e^{0.5} \approx 164.87$.
:::

::: problem id=p5 type=numeric answer="8"
An investment doubles every 3 years. By what factor has it grown after 9 years?
solution: Three doublings: $2^3 = 8$.
:::

::: problem id=p6 type=numeric answer="17000"
A 20000-dollar car loses 15% of its value each year. What is it worth after 1 year?
solution: $20000 \times 0.85 = 17000$.
:::

::: problem id=p7 type=numeric answer="6"
1000 grows to 8000, doubling every 2 years. How many years does that take?
solution: $8000 = 1000 \times 2^3$: three doublings, 6 years.
:::

::: problem id=p8 type=choice
Which models decay?
- [x] $A = 50(0.9)^t$
- [ ] $A = 50(1.1)^t$
- [ ] $A = 50e^{0.2t}$
solution: The factor 0.9 is less than 1.
:::

::: problem id=c1 type=numeric answer="102.4" creative=true
A sheet of paper is 0.1 mm thick. You fold it in half 10 times. How thick is the stack in mm?
hint: Each fold doubles the thickness.
solution: $0.1 \times 2^{10} = 0.1 \times 1024 = 102.4$ mm. (After 42 folds it would reach the Moon!)
:::
