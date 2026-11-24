---
id: bnd-01
title: Bond basics and zero-coupon bonds
---
A bond is a loan you can buy and sell. The issuer promises fixed payments, so its price is just the present value of those promises. (Berk ch. 6)

::: rule
- **Face value** (par, usually \$1,000): repaid at **maturity**.
- **Coupon** = coupon rate × face value ÷ payments per year. Canadian bonds usually pay twice a year.
- A **zero-coupon bond** pays only the face value at maturity:
$$P = \frac{FV}{(1 + YTM)^n}$$
- The **yield to maturity** (YTM) is the rate that makes the PV of the payments equal the price. For a zero:
$$YTM = \left(\frac{FV}{P}\right)^{1/n} - 1$$
- Price above face: **premium**. Below: **discount**. Equal: **par**.
:::

::: example
A 5-year zero with \$1,000 face and a 4% yield costs
$$\frac{1000}{1.04^5} = 821.93$$
:::

::: problem id=p1 type=numeric answer="30" tolerance=0.01
A \$1,000 bond has a 6% coupon rate, paid semi-annually. How much is each coupon payment?
solution: $6\% \times 1000 / 2 = 30$, so \$30 every six months.
:::

::: problem id=p2 type=numeric answer="613.91" tolerance=1
What does a 10-year zero-coupon bond with \$1,000 face cost at a 5% yield?
solution: $1000 / 1.05^{10} = 613.91$, so \$613.91.
:::

::: problem id=p3 type=numeric answer="3.57" tolerance=0.02
A 3-year zero with \$1,000 face costs \$900. What is its yield to maturity? Type the percent.
solution: $(1000/900)^{1/3} - 1 = 3.57\%$.
:::

::: problem id=p4 type=text answers="premium;at a premium;a premium"
A bond's price is above its face value. It trades at a ...
solution: Above face value is a **premium**.
:::

::: problem id=p5 type=choice
A zero-coupon bond pays:
- [ ] a coupon every year and the face value at maturity
- [x] only the face value, at maturity
- [ ] nothing: it's sold at par
solution: No coupons: just the face value at maturity. It's bought at a discount instead.
:::

::: problem id=p6 type=numeric answer="975.61" tolerance=1
A 1-year zero with \$1,000 face yields 2.5%. What is its price?
solution: $1000 / 1.025 = 975.61$, so \$975.61.
:::
