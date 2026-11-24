---
id: opt-test
title: Options test
pass: 0.8
---
::: problem id=t1 type=choice
A put has a strike of \$70 and the stock ends at \$62. The put's payoff is:
- [ ] \$0
- [x] \$8
- [ ] \$62
- [ ] −\$8
solution: $\max(70 - 62, 0) = 8$.
:::

::: problem id=t2 type=numeric answer="4" tolerance=0.01
You bought a call with a \$30 strike for \$2. The stock ends at \$36. What is your profit?
solution: Payoff $6 - 2 = 4$.
:::

::: problem id=t3 type=choice
A stock is at \$50. A 1-year European call with a \$52 strike costs \$5 and the risk-free rate is 3%. The matching put should cost about:
- [ ] \$3.00
- [x] \$4.51
- [ ] \$7.00
- [ ] \$5.49
solution: $P = C - S + PV(K) = 5 - 50 + 52/1.03 = 4.51$.
:::

::: problem id=t4 type=choice
Which change makes a call option on a stock **less** valuable?
- [ ] higher volatility
- [ ] more time to expiry
- [x] a higher strike price
- [ ] a higher stock price
solution: A higher strike means paying more to buy the stock.
:::

::: problem id=t5 type=numeric answer="50" tolerance=0.01
A \$1,000 convertible bond converts into 20 shares. What is the conversion price?
solution: $1000 / 20 = 50$.
:::

::: problem id=t6 type=choice
Shareholders' claim on a levered firm is like:
- [x] a call option on the firm's assets with the debt as strike
- [ ] a put option on the firm's debt
- [ ] a risk-free bond
solution: They get whatever is left above the debt, or nothing: $\max(V - D, 0)$.
:::

::: problem id=t7 type=choice
A European option can be exercised:
- [ ] any time before expiry
- [x] only at expiry
- [ ] only if the stock pays a dividend
solution: American options can be exercised early; European only at expiry.
:::
