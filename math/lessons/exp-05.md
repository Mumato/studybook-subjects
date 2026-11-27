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

::: problem id=x1 type=numeric answer="2205" set=extra
2000 dollars grows at 5% per year. How much after 2 years?
solution: $2000 \times 1.05^2 = 2000 \times 1.1025 = 2205$.
:::

::: problem id=x2 type=numeric answer="4" set=extra
64 g of a substance has a half-life of 3 days. How much is left after 12 days?
solution: Four halvings: $64 \to 32 \to 16 \to 8 \to 4$ g.
:::

::: problem id=x3 type=numeric answer="450" set=extra
A herd of 800 shrinks by 25% per year. How many after 2 years?
solution: $800 \times 0.75^2 = 800 \times 0.5625 = 450$.
:::

::: problem id=x4 type=numeric answer="400" set=extra
50 bacteria double every 4 hours. How many after 12 hours?
solution: Three doublings: $50 \times 8 = 400$.
:::

::: problem id=x5 type=numeric answer="500" set=extra
$A = 500e^{0.04t}$. What is the starting amount?
solution: $t = 0$: $500e^0 = 500$.
:::

::: problem id=x6 type=numeric answer="1.06" set=extra
A quantity grows 6% per year. By what factor is it multiplied each year?
solution: $1 + 0.06 = 1.06$.
:::

::: problem id=x7 type=choice set=extra
$A = 300(0.92)^t$. By what percent does A fall each period?
- [x] 8%
- [ ] 92%
- [ ] 0.92%
- [ ] 108%
solution: The factor is $1 - r = 0.92$, so $r = 0.08 = 8\%$.
:::

::: problem id=x8 type=numeric answer="5624.32" set=extra
5000 dollars earns 4% per year. How much after 3 years? (to the cent)
solution: $5000 \times 1.04^3$
$= 5000 \times 1.124864 = 5624.32$.
:::

::: problem id=x9 type=numeric answer="1000e^0.5" tolerance="0.01" set=extra
1000 dollars grows continuously at 10%. How much after 5 years? (exact or to the cent)
solution: $1000e^{0.1 \times 5} = 1000e^{0.5} \approx 1648.72$.
:::

::: problem id=x10 type=numeric answer="1/8" set=extra
A substance has a half-life of 10 years. What fraction is left after 30 years?
solution: Three half-lives: $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$.
:::

::: problem id=x11 type=numeric answer="24" set=extra
A drug has a half-life of 6 hours. After how many hours is only $\frac{1}{16}$ of it left?
solution: $\frac{1}{16} = \left(\frac{1}{2}\right)^4$: 4 half-lives, $4 \times 6 = 24$ hours.
:::

::: problem id=x12 type=numeric answer="19200" set=extra
A 30000-dollar car loses 20% of its value each year. What is it worth after 2 years?
solution: $30000 \times 0.8^2 = 30000 \times 0.64 = 19200$.
:::

::: problem id=x13 type=choice set=extra
In the long run, which grows larger: $A = 1000(1.05)^t$ or $B = 5000 + 200t$?
- [x] A
- [ ] B
- [ ] they stay equal
solution: Exponential growth always overtakes linear growth eventually, however big the linear head start.
:::

::: problem id=x14 type=numeric answer="3.43" set=extra
A 10 mg dose of medicine is eliminated at 30% per hour. How many mg remain after 3 hours?
solution: $10 \times 0.7^3 = 10 \times 0.343 = 3.43$ mg.
:::

::: problem id=x15 type=numeric answer="20" set=extra
A population grows from 1000 to 1440 in 2 years at a constant percent rate. What is the rate per year, in percent?
hint: $1000(1 + r)^2 = 1440$.
solution: $(1 + r)^2 = 1.44$, so $1 + r = 1.2$ and the rate is 20%.
:::

::: problem id=x16 type=numeric answer="4" set=extra
200 g of a substance decays to 25 g in 12 days. What is its half-life in days?
hint: How many halvings take 200 to 25?
solution: $200 \to 100 \to 50 \to 25$: 3 half-lives in 12 days, so 4 days each.
:::

::: problem id=x17 type=numeric answer="5ln(2)" tolerance="0.01" set=extra
$A = 50e^{-0.2t}$. When is $A = 25$? (exact or to hundredths)
hint: Divide by 50, then take ln.
solution: $e^{-0.2t} = \frac{1}{2}$, so $-0.2t = -\ln 2$.
$t = 5\ln 2 \approx 3.47$.
:::

::: problem id=x18 type=numeric answer="ln(2)/ln(1.08)" tolerance="0.01" set=extra
Money earns 8% per year. How many years until it doubles? (exact or to hundredths)
hint: Solve $1.08^t = 2$ with logs.
solution: $t\ln 1.08 = \ln 2$.
$t = \frac{\ln 2}{\ln 1.08} \approx 9.01$ years.
:::

::: problem id=x19 type=numeric answer="206" set=extra
Rent is 200 dollars and rises 3% per year. What is it after 1 year?
solution: $200 \times 1.03 = 206$.
:::

::: problem id=x20 type=numeric answer="11460" set=extra creative=true
Carbon-14 has a half-life of 5730 years. A bone has 25% of its original carbon-14. How old is it?
hint: How many half-lives leave 25%?
solution: $25\% = \left(\frac{1}{2}\right)^2$: two half-lives, $2 \times 5730 = 11460$ years.
:::
