---
id: tvm-02
title: Annuities and perpetuities
---
Many cash flows repeat: loan payments, rent, coupons. Instead of discounting each one, we use shortcuts.

::: rule
A **perpetuity** pays $C$ every period forever, starting in one period:
$$PV = \frac{C}{r}$$
An **annuity** pays $C$ every period for $n$ periods, starting in one period:
$$PV = \frac{C}{r}\left(1 - \frac{1}{(1+r)^n}\right)$$
$$FV = \frac{C}{r}\left((1+r)^n - 1\right)$$
If the first payment is **today** (an annuity due), multiply by $(1 + r)$.
:::

::: example
\$1,000 a year for 5 years at 6%:
$$PV = \frac{1000}{0.06}\left(1 - \frac{1}{1.06^5}\right) = 4212.36$$
As an annuity due (first payment today): $4212.36 \times 1.06 = 4465.11$.
:::

::: problem id=p1 type=numeric answer="12500" tolerance=1
A perpetuity pays \$500 a year, starting next year. What is it worth at 4%?
solution: $500 / 0.04 = 12500$, so \$12,500.
:::

::: problem id=p2 type=numeric answer="14047.16" tolerance=1
What is \$2,000 a year for 10 years worth today at 7%?
solution: $\frac{2000}{0.07}(1 - 1.07^{-10}) = 14047.16$, so \$14,047.16.
:::

::: problem id=p3 type=numeric answer="99197.86" tolerance=2
You save \$3,000 at the end of each year for 20 years at 5%. How much do you have at the end?
solution: $FV = \frac{3000}{0.05}(1.05^{20} - 1) = 99197.86$, so \$99,197.86.
:::

::: problem id=p4 type=numeric answer="4747.93" tolerance=1
A \$20,000 loan is repaid with 5 equal yearly payments at 6%. What is each payment?
hint: The loan is the PV of the payments: solve the annuity formula for $C$.
solution: $C = \frac{20000 \times 0.06}{1 - 1.06^{-5}} = 4747.93$, so \$4,747.93.
:::

::: problem id=p5 type=numeric answer="18140.59" tolerance=1
A perpetuity pays \$1,000 a year, but the first payment is in **3 years**. What is it worth today at 5%?
hint: The formula gives its value one period before the first payment: at year 2.
solution: Value at year 2: $1000 / 0.05 = 20000$. Today: $20000 / 1.05^2 = 18140.59$.
:::

::: problem id=p6 type=choice
Two annuities have the same payments and rate. One starts today, the other in one year. The one starting today is worth:
- [x] more, by a factor of $(1 + r)$
- [ ] less, by a factor of $(1 + r)$
- [ ] the same
solution: Every payment arrives one period earlier, so each is worth $(1 + r)$ times more.
:::

::: problem id=p7 type=numeric answer="12648.91" tolerance=1 creative=true
You want \$1,000,000 in 30 years. How much must you save at the end of every year, at 6%?
hint: Solve the annuity FV formula for $C$.
solution: $C = \frac{1000000 \times 0.06}{1.06^{30} - 1} = 12648.91$, so \$12,648.91 a year.
:::
