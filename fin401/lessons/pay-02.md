---
id: pay-02
title: Payout policy and taxes
---
MM say payout policy doesn't matter in perfect markets. Taxes change that.

::: rule
**MM payout irrelevance:** investors can make **homemade dividends** by selling shares, or reinvest dividends they don't want, so the form of payout can't matter in perfect markets.

**With taxes:** dividends are often taxed more heavily than capital gains (which are also taxed later). The **effective dividend tax rate** is
$$\tau_d^* = \frac{\tau_d - \tau_g}{1 - \tau_g}$$
and on the ex-dividend date the price drops by $Div \times (1 - \tau_d^*)$.
- If $\tau_d > \tau_g$, buybacks are better for taxable shareholders.
- **Clientele effect:** investors with different tax rates prefer different payout policies (low-tax investors like pension funds hold high-dividend stocks).
:::

::: example
$\tau_d = 30\%$, $\tau_g = 20\%$:
$$\tau_d^* = \frac{0.30 - 0.20}{1 - 0.20} = 12.5\%$$
So a \$2 dividend makes the price drop by only $2 \times 0.875 = 1.75$.
:::

::: problem id=p1 type=numeric answer="23.75" tolerance=0.01
An investor pays 39% tax on dividends and 20% on capital gains. What is the effective dividend tax rate? Type the percent.
solution: $(0.39 - 0.20) / 0.80 = 23.75\%$.
:::

::: problem id=p2 type=numeric answer="1.75" tolerance=0.01
With an effective dividend tax rate of 12.5%, by how much should the price drop when a stock goes ex-dividend on a \$2 dividend?
solution: $2 \times (1 - 0.125) = 1.75$.
:::

::: problem id=p3 type=numeric answer="100" tolerance=0.01
You own 1,000 shares at \$20 of a firm that pays no dividend. You want \$2,000 of cash. How many shares do you sell?
solution: $2000 / 20 = 100$ shares: a homemade dividend.
:::

::: problem id=p4 type=choice
Dividends are taxed more heavily than capital gains. For taxable shareholders, the better way to pay out cash is:
- [ ] a dividend
- [x] a share buyback
- [ ] it makes no difference
solution: A buyback turns the payout into capital gains, taxed at the lower rate (and only when shares are sold).
:::

::: problem id=p5 type=choice
A tax-exempt pension fund and a high-income individual would likely prefer:
- [x] the fund high-dividend stocks; the individual low-dividend stocks
- [ ] both high-dividend stocks
- [ ] both low-dividend stocks
solution: That's the clientele effect: the fund pays no tax on dividends, the individual pays a lot.
:::

::: problem id=p6 type=numeric answer="2" tolerance=0.01
If dividends and capital gains are taxed at the same rate, by how much does the price fall when the stock goes ex-dividend on a \$2 dividend?
solution: $\tau_d^* = 0$, so the full \$2.
:::

::: problem id=p7 type=open creative=true
If dividends are taxed more than capital gains, why do so many firms still pay dividends? (This is the "dividend puzzle".)
solution: Some investors pay little or no tax on dividends (the clientele effect), dividends can signal confidence in future earnings, they commit managers to paying out cash instead of wasting it, and some investors simply like a steady income.
:::
