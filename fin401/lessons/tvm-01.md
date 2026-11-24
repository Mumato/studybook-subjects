---
id: tvm-01
title: Present and future value
---
A dollar today is worth more than a dollar later, because today's dollar can earn interest. Every decision in this course compares cash flows at different dates, so first we move them to the same date. (Berk ch. 3–4)

::: rule
**Future value** of an amount $PV$ invested at rate $r$ for $n$ periods:
$$FV = PV \times (1 + r)^n$$
**Present value** of an amount $FV$ received in $n$ periods:
$$PV = \frac{FV}{(1 + r)^n}$$
Moving money forward is **compounding**; moving it back is **discounting**.
:::

::: example
\$1,000 invested at 5% for 3 years grows to
$$1000 \times 1.05^3 = 1157.63$$
So \$1,157.63 in 3 years is worth \$1,000 today at 5%.
:::

::: problem id=p1 type=numeric answer="2676.45" tolerance=1
You invest \$2,000 at 6% a year for 5 years. How much do you have?
solution: $2000 \times 1.06^5 = 2676.45$, so \$2,676.45.
:::

::: problem id=p2 type=numeric answer="7350.30" tolerance=1
What is \$10,000 received in 4 years worth today at 8%?
solution: $10000 / 1.08^4 = 7350.30$, so \$7,350.30.
:::

::: problem id=p3 type=numeric answer="605" tolerance=1
\$500 earns 10% a year for 2 years. What is it worth then?
solution: $500 \times 1.1^2 = 605$, so \$605.
:::

::: problem id=p4 type=numeric answer="10.24" tolerance=0.05
How many years does it take money to double at 7% a year?
hint: Solve $1.07^n = 2$ with logs: $n = \ln 2 / \ln 1.07$.
solution: $n = \ln 2 / \ln 1.07 = 10.24$ years.
:::

::: problem id=p5 type=numeric answer="6.99" tolerance=0.02
\$1,000 grows to \$1,500 in 6 years. What yearly rate did it earn? Type the percent.
hint: $r = (FV / PV)^{1/n} - 1$.
solution: $r = 1.5^{1/6} - 1 = 0.0699$, so 6.99%.
:::

::: problem id=p6 type=choice
At 8%, which is worth the most today?
- [ ] \$1,000 today
- [x] \$1,100 in 1 year
- [ ] \$1,150 in 2 years
solution: Today's values: \$1,000; $1100 / 1.08 = 1018.52$; $1150 / 1.08^2 = 985.94$. The \$1,100 in 1 year wins.
:::

::: problem id=p7 type=numeric answer="6.27" tolerance=0.02 creative=true
You can take \$50,000 now or \$60,000 in 3 years. At what yearly rate are the two worth the same? Type the percent.
hint: Find $r$ so that $50000 \times (1+r)^3 = 60000$.
solution: $(60000 / 50000)^{1/3} - 1 = 1.2^{1/3} - 1 = 0.0627$, so 6.27%. Above that rate, take the money now.
:::
