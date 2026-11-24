---
id: opt-03
title: Options in corporate finance
---
Options are everywhere in companies: in their equity, their convertible bonds and their warrants. (Berk ch. 13.3, ch. 15 "Convertible Provisions")

::: rule
- **Equity is a call option** on the firm's assets, with the debt's face value as the strike: shareholders get $\max(V - D,\,0)$ at maturity.
- **Convertible bond:** can be swapped for a fixed number of shares (the **conversion ratio**).
$$\text{conversion price} = \frac{\text{face value}}{\text{conversion ratio}} \qquad \text{conversion value} = \text{ratio} \times S$$
Convert at maturity if the conversion value beats the face value. Convertibles pay lower coupons, since the conversion option has value.
- **Warrants** are calls issued by the firm itself; exercising them creates new shares.
:::

::: example
A \$1,000 bond converts into 25 shares: the conversion price is \$40. With the stock at \$45 the conversion value is $25 \times 45 = 1125$, so holders would convert.
:::

::: problem id=p1 type=numeric answer="40" tolerance=0.01
A \$1,000 convertible bond converts into 25 shares. What is its conversion price?
solution: $1000 / 25 = 40$.
:::

::: problem id=p2 type=numeric answer="1125" tolerance=0.5
The stock trades at \$45. What is the bond's conversion value?
solution: $25 \times 45 = 1125$.
:::

::: problem id=p3 type=choice
At maturity the stock is at \$36. The holders of that bond should:
- [ ] convert into shares
- [x] take the \$1,000 face value
solution: Conversion value $25 \times 36 = 900 < 1000$, so take the cash.
:::

::: problem id=p4 type=numeric answer="0" tolerance=0.01
A firm's assets are worth \$70M when its \$80M of debt comes due. What do the shareholders get, in millions?
solution: $\max(70 - 80, 0) = 0$: equity is a call that expires worthless; lenders take the \$70M.
:::

::: problem id=p5 type=choice
Compared with a regular bond from the same firm, a convertible bond usually pays:
- [ ] a higher coupon
- [x] a lower coupon
- [ ] the same coupon
solution: Investors accept a lower coupon in return for the conversion option.
:::

::: problem id=p6 type=choice
Seeing equity as a call option explains why shareholders of a firm near default may like:
- [x] riskier projects
- [ ] safer projects
- [ ] paying off debt early
solution: Call options gain value with volatility, the same "excessive risk-taking" from capital structure.
:::
