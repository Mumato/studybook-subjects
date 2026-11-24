---
id: rsk-test
title: Risk management test
pass: 0.8
---
::: problem id=t1 type=choice
A wheat farmer wants to lock in the price of next year's harvest. She should:
- [ ] buy wheat futures
- [x] sell wheat futures
- [ ] buy a call on wheat
solution: As a seller she hedges with a short futures position.
:::

::: problem id=t2 type=numeric answer="-15000" tolerance=1
You are long one 5,000-unit futures contract at \$40. It settles at \$37 the next day. What is your cash flow that day? (negative for a payment)
solution: $5000 \times (37 - 40) = -15000$.
:::

::: problem id=t3 type=choice
The spot rate is 0.70 USD per CAD; 1-year rates are 3% in the US and 4.5% in Canada. The 1-year forward rate (USD per CAD) is closest to:
- [x] 0.6899
- [ ] 0.7102
- [ ] 0.7000
- [ ] 0.6720
solution: $F = 0.70 \times 1.03 / 1.045 = 0.6899$ (USD is the "home" currency in this quote).
:::

::: problem id=t4 type=choice
A firm sells CAD 500,000 forward at 0.71 USD per CAD. It will receive:
- [ ] USD 500,000
- [x] USD 355,000
- [ ] USD 704,225
- [ ] it depends on the future spot rate
solution: $500000 \times 0.71 = 355000$, locked in.
:::

::: problem id=t5 type=choice
Which statement about hedging is true?
- [ ] Hedging raises a firm's expected cash flows
- [x] Hedging reduces risk but gives up gains from favourable price moves
- [ ] Hedging with futures has large credit risk
solution: A hedge offsets price moves both ways.
:::

::: problem id=t6 type=choice
A Canadian exporter paid in USD wants protection if the USD falls, but wants to benefit if it rises. It should:
- [ ] sell USD forward
- [x] buy put options on USD
- [ ] buy USD forward
solution: A put on USD sets a floor and keeps the upside.
:::
