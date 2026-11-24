---
id: stk-02
title: Constant dividend growth
---
If dividends grow at a steady rate forever, the dividend discount model becomes a growing perpetuity.

::: rule
**Constant growth model:**
$$P_0 = \frac{Div_1}{r_E - g} \qquad \text{so} \qquad r_E = \frac{Div_1}{P_0} + g$$
Remember $Div_1 = Div_0 \times (1 + g)$: the formula uses **next** year's dividend.

Growth comes from reinvesting: $g = \text{retention rate} \times \text{return on new investment}$. Cutting dividends to invest raises the price only if the new investments earn more than $r_E$.
:::

::: example
Next dividend \$3, growth 4%, $r_E = 10\%$:
$$P_0 = \frac{3}{0.10 - 0.04} = 50$$
:::

::: problem id=p1 type=numeric answer="50" tolerance=0.05
The next dividend is \$2, dividends grow 5% a year and $r_E = 9\%$. What is the price?
solution: $2 / (0.09 - 0.05) = 50$.
:::

::: problem id=p2 type=numeric answer="41.20" tolerance=0.05
A company **just paid** \$2. Dividends grow 3% and $r_E = 8\%$. What is the price?
hint: First find $Div_1 = 2 \times 1.03$.
solution: $Div_1 = 2.06$. $P_0 = 2.06 / 0.05 = 41.20$.
:::

::: problem id=p3 type=numeric answer="10" tolerance=0.01
A stock costs \$40, its next dividend is \$2 and dividends grow 5%. What is its equity cost of capital? Type the percent.
solution: $2/40 + 5\% = 5\% + 5\% = 10\%$.
:::

::: problem id=p4 type=numeric answer="9" tolerance=0.01
A firm keeps 60% of its earnings and earns 15% on new investments. What is its growth rate? Type the percent.
solution: $g = 0.60 \times 15\% = 9\%$.
:::

::: problem id=p5 type=choice
A firm cuts its dividend to invest in projects earning 6%. Its equity cost of capital is 9%. Its share price will:
- [ ] rise, because growth goes up
- [x] fall, because the projects earn less than investors require
- [ ] stay the same
solution: Growth only adds value when new investments earn more than $r_E$. At 6% < 9% the reinvestment destroys value.
:::

::: problem id=p6 type=numeric answer="27.27" tolerance=0.05
A stock just paid \$1. Dividends grow 20% for two years, then 5% forever. At 10%, what is it worth?
hint: $Div_1 = 1.20$, $Div_2 = 1.44$, $Div_3 = 1.512$. Price at year 2: $Div_3 / (r - g)$.
solution: $P_2 = 1.512 / 0.05 = 30.24$. $P_0 = \frac{1.20}{1.1} + \frac{1.44 + 30.24}{1.1^2} = 27.27$.
:::

::: problem id=p7 type=open creative=true
Why can't the constant growth model be used when $g \geq r_E$?
solution: The formula would give an infinite or negative price. Growing faster than the discount rate forever is impossible: no company can outgrow the whole economy forever. Use a two-stage model instead.
:::
