---
id: opt-02
title: Put-call parity and option values
---
Calls, puts, the stock and a bond are linked: knowing three prices gives the fourth.

::: rule
**Put-call parity** (European options, same strike $K$ and expiry, no dividends):
$$C = P + S - PV(K)$$
where $PV(K) = K / (1 + r_f)^T$.

An option is worth **more** when:
- the stock is more **volatile** (bigger upside; the downside is capped),
- there is **more time** to expiry,
- for a call, the stock price is higher or the strike lower (the reverse for a put).
:::

::: example
$S = 45$, $K = 50$, a 1-year put costs \$6, $r_f = 5\%$:
$$C = 6 + 45 - \frac{50}{1.05} = 3.38$$
:::

::: problem id=p1 type=numeric answer="3.38" tolerance=0.01
A stock trades at \$45. A 1-year European put with a \$50 strike costs \$6 and the risk-free rate is 5%. What should the matching call cost?
solution: $6 + 45 - 50 / 1.05 = 3.38$.
:::

::: problem id=p2 type=numeric answer="5.69" tolerance=0.01
A stock trades at \$60. A 1-year European call with a \$60 strike costs \$8; the risk-free rate is 4%. What should the matching put cost?
solution: $P = C - S + PV(K) = 8 - 60 + 60 / 1.04 = 5.69$.
:::

::: problem id=p3 type=choice
A stock becomes more volatile. Its call options become:
- [x] more valuable
- [ ] less valuable
- [ ] unchanged
solution: More volatility means a bigger chance of a big payoff, while the loss is limited to the premium.
:::

::: problem id=p4 type=choice
Its put options become:
- [x] more valuable
- [ ] less valuable
- [ ] unchanged
solution: The same logic: volatility raises the value of both calls and puts.
:::

::: problem id=p5 type=choice
All else equal, an option with longer to expiry is worth:
- [x] more
- [ ] less
- [ ] the same
solution: More time gives the stock more room to move in the holder's favour.
:::

::: problem id=p6 type=choice
Buying a stock and a put on it, with strike $K$, gives:
- [ ] unlimited losses
- [x] a floor: you can't end up with less than $K$
- [ ] the same payoff as a put alone
solution: This is a **protective put**: insurance on the stock.
:::

::: problem id=p7 type=open creative=true
Use put-call parity to explain why a stock plus a put is worth the same as a call plus a risk-free bond paying $K$.
solution: Rearranging $C = P + S - PV(K)$ gives $S + P = C + PV(K)$. At expiry both pay $\max(S, K)$: if $S > K$ you hold the stock (or exercise the call); if $S < K$ you get $K$ (by putting the stock, or from the bond). Same payoffs, so the same price.
:::
