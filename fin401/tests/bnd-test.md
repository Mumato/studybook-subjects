---
id: bnd-test
title: Bonds test
pass: 0.8
---
::: problem id=t1 type=numeric answer="627.41" tolerance=1
What is the price of an 8-year zero-coupon bond with \$1,000 face at a 6% yield?
solution: $1000 / 1.06^8 = 627.41$.
:::

::: problem id=t2 type=choice
A 4-year bond (\$1,000 face) pays a 5% annual coupon and yields 7%. Its price is:
- [x] \$932.26, a discount
- [ ] \$1,071.75, a premium
- [ ] \$1,000.00, par
- [ ] \$762.90
solution: $\frac{50}{0.07}(1 - 1.07^{-4}) + 1000 \times 1.07^{-4} = 932.26$. Coupon rate below yield: a discount.
:::

::: problem id=t3 type=numeric answer="918.89" tolerance=1
A 5-year bond (\$1,000 face) pays a 6% coupon semi-annually and yields 8% (APR, semi-annual). What is its price?
solution: \$30 for 10 half-years at 4%: $\frac{30}{0.04}(1 - 1.04^{-10}) + 1000 \times 1.04^{-10} = 918.89$.
:::

::: problem id=t4 type=choice
Interest rates rise by 1%. Which bond loses the most value?
- [ ] a 1-year zero
- [ ] a 5-year bond with a 10% coupon
- [x] a 20-year zero
- [ ] a 20-year bond with a 10% coupon
solution: The longest maturity with no coupons has all its value far in the future.
:::

::: problem id=t5 type=numeric answer="4.56" tolerance=0.02
A 5-year zero with \$1,000 face costs \$800. What is its yield to maturity? Type the percent.
solution: $(1000/800)^{1/5} - 1 = 4.56\%$.
:::

::: problem id=t6 type=choice
A bond pays a \$45 coupon a year and sells for \$900. Its current yield is:
- [ ] 4.5%
- [x] 5.0%
- [ ] 9.0%
- [ ] 20%
solution: $45 / 900 = 5\%$.
:::

::: problem id=t7 type=text answers="discount;at a discount;a discount"
A bond's coupon rate is lower than its yield to maturity. It trades at a ...
solution: A **discount**: the price is below face value.
:::
