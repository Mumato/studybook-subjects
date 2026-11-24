---
id: rsk-03
title: Exchange rate risk
---
A Canadian firm that will be paid in US dollars doesn't know how many Canadian dollars it will get. (Berk ch. 21.3)

::: rule
- **Forward contract:** a private agreement to exchange currencies at a fixed **forward rate** on a future date. It locks in the rate (no upside, no downside).
- **Covered interest parity:** with spot rate $S$ and forward rate $F$ (both in CAD per USD) for $T$ years,
$$F = S \times \frac{(1 + r_{CAD})^T}{(1 + r_{USD})^T}$$
The currency with the higher interest rate trades at a forward **discount**.
- **Currency options:** a put on USD sets a **floor** on what the dollars are worth but keeps the upside, for a premium paid today.
:::

::: example
Spot 1.35 CAD per USD, 1-year rates 4% in Canada and 5% in the US:
$$F = 1.35 \times \frac{1.04}{1.05} = 1.3371$$
:::

::: problem id=p1 type=numeric answer="1.3371" tolerance=0.0005
The spot rate is 1.35 CAD/USD, the Canadian 1-year rate 4% and the US 1-year rate 5%. What is the 1-year forward rate, in CAD per USD?
solution: $1.35 \times 1.04 / 1.05 = 1.3371$.
:::

::: problem id=p2 type=numeric answer="2680000" tolerance=1
A Canadian firm will receive USD 2 million in a year and sells it forward at 1.34 CAD/USD. How many Canadian dollars does it lock in?
solution: $2000000 \times 1.34 = 2680000$.
:::

::: problem id=p3 type=numeric answer="1.31" tolerance=0.001
Instead, it buys put options on USD with a strike of 1.33 CAD/USD for a premium of 0.02 CAD per USD. What is the lowest net rate it can end up with?
solution: It can always sell at 1.33, minus the 0.02 premium: 1.31 CAD per USD.
:::

::: problem id=p4 type=choice
Compared with a forward hedge, hedging with currency options:
- [x] keeps the upside if the currency moves favourably, but costs a premium
- [ ] is free and removes all risk
- [ ] locks in one exact rate
solution: An option is a right, not an obligation: you keep the good outcomes and pay for that up front.
:::

::: problem id=p5 type=choice
Interest rates are higher in the US than in Canada. In CAD per USD, the forward rate will be:
- [ ] above the spot rate
- [x] below the spot rate
- [ ] equal to the spot rate
solution: By covered interest parity, the high-rate currency trades at a forward discount.
:::

::: problem id=p6 type=choice
A Canadian importer must **pay** EUR 1 million in 6 months. To hedge, it should:
- [x] buy euros forward
- [ ] sell euros forward
- [ ] buy put options on euros
solution: It needs euros later, so it locks in the price of buying them. (Call options on euros would also work.)
:::
