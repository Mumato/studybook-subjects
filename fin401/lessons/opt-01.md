---
id: opt-01
title: Calls and puts
---
An option is the **right, but not the obligation**, to buy or sell something at a fixed price. (Berk ch. 13)

::: rule
- **Call:** right to **buy** at the **strike price** $K$. **Put:** right to **sell** at $K$.
- **American** options can be exercised any time before expiry; **European** only at expiry.
- The buyer pays a **premium**; the seller (**writer**) collects it and must deliver if the buyer exercises.
- Payoff at expiry when the stock price is $S$:
$$\text{call: } \max(S - K,\,0) \qquad \text{put: } \max(K - S,\,0)$$
- **Profit** = payoff − premium paid.
:::

::: example
A call with strike \$50 bought for \$3. If the stock ends at \$58: payoff \$8, profit \$5. If it ends at \$45: payoff 0, loss \$3 (only the premium).
:::

::: problem id=p1 type=numeric answer="8" tolerance=0.01
A call has a \$50 strike. The stock ends at \$58. What is the call's payoff?
solution: $\max(58 - 50, 0) = 8$.
:::

::: problem id=p2 type=numeric answer="0" tolerance=0.01
A put has a \$50 strike. The stock ends at \$58. What is the put's payoff?
solution: $\max(50 - 58, 0) = 0$: nobody sells at \$50 what's worth \$58.
:::

::: problem id=p3 type=numeric answer="7" tolerance=0.01
A put has a \$40 strike. The stock ends at \$33. What is the payoff?
solution: $\max(40 - 33, 0) = 7$.
:::

::: problem id=p4 type=numeric answer="5" tolerance=0.01
You paid \$3 for a call with a \$50 strike; the stock ends at \$58. What is your profit?
solution: Payoff $8 - 3 = 5$.
:::

::: problem id=p5 type=numeric answer="53" tolerance=0.01
At what stock price does that call buyer break even at expiry?
solution: $K + \text{premium} = 50 + 3 = 53$.
:::

::: problem id=p6 type=choice
The writer (seller) of a call option:
- [ ] has the right to buy the stock
- [x] must sell the stock at the strike price if the buyer exercises
- [ ] pays the premium
solution: The buyer has the right; the writer has the obligation, in exchange for the premium.
:::
