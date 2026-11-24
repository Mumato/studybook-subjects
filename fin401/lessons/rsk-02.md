---
id: rsk-02
title: Futures and marking to market
---
Futures are settled every day, which removes credit risk but creates cash flows along the way.

::: rule
- Futures trade on an **exchange**, are standardized, and the exchange stands between buyer and seller, so there's almost no **credit risk**.
- **Marking to market:** each day, gains and losses are paid in cash based on the change in the futures price, through a **margin** account.
- Daily cash flow for a **long** position $=$ (new futures price − old) × contract size; the short gets the opposite.
- Over the life of the contract the daily payments add up to (final − initial price) × size: the hedger still locks in the original price.
- **Liquidity risk:** a hedger may need cash for margin calls before the hedge pays off.
:::

::: example
Long one oil contract (10,000 barrels) at \$70. Next day it settles at \$72: you receive \$20,000. The day after, \$69: you pay \$30,000.
:::

::: problem id=p1 type=numeric answer="20000" tolerance=1
You are long one 10,000-barrel oil futures contract bought at \$70. It settles at \$72 the next day. What is your cash flow that day?
solution: $10000 \times (72 - 70) = 20000$ received.
:::

::: problem id=p2 type=numeric answer="-30000" tolerance=1
The following day it settles at \$69. What is your cash flow? (negative for a payment)
solution: $10000 \times (69 - 72) = -30000$.
:::

::: problem id=p3 type=numeric answer="-10000" tolerance=1
What is your total cash flow over the two days?
solution: $20000 - 30000 = -10000$, the same as $(69 - 70) \times 10000$.
:::

::: problem id=p4 type=choice
Futures have almost no credit risk because:
- [ ] buyers are always large firms
- [x] gains and losses are settled daily through margin accounts
- [ ] the government guarantees them
solution: Losses never build up: they're paid every day.
:::

::: problem id=p5 type=choice
A firm hedged with futures faces large margin calls when prices move against the futures. This is:
- [ ] credit risk
- [x] liquidity risk
- [ ] basis risk
solution: The hedge works overall, but the firm needs cash now to meet margin calls.
:::

::: problem id=p6 type=choice
The seller (short side) of a futures contract gains when the futures price:
- [ ] rises
- [x] falls
- [ ] stays the same
solution: The short has agreed to sell at the old price, which is worth more when prices fall.
:::

::: problem id=p7 type=open creative=true
A chocolate maker buys cocoa every month. Give one reason it might prefer a long-term contract with a supplier over futures, and one reason it might prefer futures.
solution: Long-term contracts can be tailored (exact quality, delivery place, amounts) and need no margin calls, but they carry the risk the supplier defaults and are hard to exit. Futures have almost no credit risk and are easy to trade or close, but they're standardized and need cash for marking to market.
:::
