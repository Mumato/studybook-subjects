---
id: tvm-test
title: Time value of money test
pass: 0.8
---
::: problem id=t1 type=choice
\$5,000 is invested at 4% a year for 10 years. It grows to:
- [ ] \$7,000.00
- [x] \$7,401.22
- [ ] \$7,103.66
- [ ] \$6,083.26
solution: $5000 \times 1.04^{10} = 7401.22$. (\$7,000 is simple interest, which ignores compounding.)
:::

::: problem id=t2 type=numeric answer="13326.84" tolerance=1
What is \$20,000 received in 6 years worth today at 7%?
solution: $20000 / 1.07^6 = 13326.84$.
:::

::: problem id=t3 type=choice
A perpetuity pays \$800 a year starting next year. At 5% it is worth:
- [ ] \$4,000
- [ ] \$8,400
- [x] \$16,000
- [ ] \$40,000
solution: $800 / 0.05 = 16000$.
:::

::: problem id=t4 type=numeric answer="4528.81" tolerance=1
A \$15,000 loan is repaid with 4 equal yearly payments at 8%. What is each payment?
solution: $\frac{15000 \times 0.08}{1 - 1.08^{-4}} = 4528.81$.
:::

::: problem id=t5 type=choice
An 8% APR compounded quarterly has an effective annual rate of:
- [ ] 8.00%
- [x] 8.24%
- [ ] 8.30%
- [ ] 2.00%
solution: $(1 + 0.08/4)^4 - 1 = 1.02^4 - 1 = 8.24\%$.
:::

::: problem id=t6 type=numeric answer="50000" tolerance=1
\$2,000 next year, growing 2% a year forever. What is it worth at 6%?
solution: $2000 / (0.06 - 0.02) = 50000$.
:::

::: problem id=t7 type=choice
\$1,000 a year for 3 years at 5%, with the **first payment today**, is worth:
- [ ] \$2,723.25
- [x] \$2,859.41
- [ ] \$3,000.00
- [ ] \$3,152.50
solution: Ordinary annuity: \$2,723.25. Starting today, multiply by 1.05: \$2,859.41.
:::
