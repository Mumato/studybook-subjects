---
id: bnd-02
title: Coupon bond prices
---
A coupon bond is an annuity (the coupons) plus a lump sum (the face value). Price it as both.

::: rule
With coupon $C$ per period, $n$ periods and yield $y$ per period:
$$P = \frac{C}{y}\left(1 - \frac{1}{(1+y)^n}\right) + \frac{FV}{(1+y)^n}$$
For semi-annual bonds, halve the coupon and the yield, and double the years.
- Coupon rate **>** YTM: **premium**. Coupon rate **<** YTM: **discount**. Equal: **par**.
- **Current yield** = annual coupon ÷ price.
:::

::: example
A 3-year bond, \$1,000 face, 5% annual coupon, yield 6%:
$$P = \frac{50}{0.06}\left(1 - \frac{1}{1.06^3}\right) + \frac{1000}{1.06^3} = 973.27$$
It sells at a discount because its coupon rate is below its yield.
:::

::: problem id=p1 type=numeric answer="1084.25" tolerance=1
A 5-year bond, \$1,000 face, pays an 8% coupon once a year. Its yield is 6%. What is its price?
solution: $\frac{80}{0.06}(1 - 1.06^{-5}) + 1000 \times 1.06^{-5} = 1084.25$.
:::

::: problem id=p2 type=numeric answer="1000" tolerance=1
A 10-year bond has a 6% coupon paid semi-annually and a 6% yield. What is its price?
solution: Coupon rate equals yield, so it trades at par: \$1,000.
:::

::: problem id=p3 type=numeric answer="964.15" tolerance=1
A 4-year bond, \$1,000 face, pays a 4% coupon semi-annually. Its yield is 5% (APR, semi-annual). What is its price?
hint: \$20 every half-year, a 2.5% yield per half-year, 8 periods.
solution: $\frac{20}{0.025}(1 - 1.025^{-8}) + 1000 \times 1.025^{-8} = 964.15$.
:::

::: problem id=p4 type=choice
A bond's coupon rate is 7% and its yield is 5%. It trades:
- [x] at a premium
- [ ] at a discount
- [ ] at par
solution: The coupons pay more than the market wants, so buyers pay more than face: a premium.
:::

::: problem id=p5 type=numeric answer="7" tolerance=0.01
A bond with a 7% coupon trades exactly at par. What is its yield to maturity? Type the percent.
solution: At par, yield = coupon rate = 7%.
:::

::: problem id=p6 type=numeric answer="6.32" tolerance=0.02
A bond pays \$60 a year and costs \$950. What is its current yield? Type the percent.
solution: $60 / 950 = 6.32\%$.
:::
