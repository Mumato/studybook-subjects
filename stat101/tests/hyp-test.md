---
id: hyp-test
title: Hypothesis testing test
pass: 0.8
---
::: problem id=t1 type=choice
A website claims pages load in 2 seconds on average. You suspect it's **slower**. $H_a$ is:
- [ ] $\mu < 2$
- [x] $\mu > 2$
- [ ] $\mu \ne 2$
- [ ] $\mu = 2$
solution: Slower means more time: $\mu > 2$.
:::

::: problem id=t2 type=choice
A Type II error is:
- [ ] rejecting a true $H_0$
- [x] failing to reject a false $H_0$
- [ ] using the wrong $\alpha$
solution: Missing a real effect.
:::

::: problem id=t3 type=numeric answer="2"
$H_0: \mu = 500$, $\sigma = 40$, $n = 64$, $\bar{x} = 510$. What is $z$?
solution: $10/(40/8) = 2$.
:::

::: problem id=t4 type=numeric answer="0.0456"
That test is two-sided. Given $\Phi(2) = 0.9772$, what is the p-value?
solution: $2(1 - 0.9772) = 0.0456$.
:::

::: problem id=t5 type=numeric answer="2"
$H_0: \mu = 20$. A sample of 16 has $\bar{x} = 22$ and $s = 4$. What is $t$?
solution: $2/(4/4) = 2$.
:::

::: problem id=t6 type=choice
That t test (df 15) has a two-sided p-value of 0.064. At $\alpha = 0.05$:
- [ ] reject $H_0$
- [x] fail to reject $H_0$
solution: $0.064 > 0.05$.
:::

::: problem id=t7 type=numeric answer="2"
400 tosses of a coin give 220 heads. Test $H_0: p = 0.5$. What is $z$?
solution: SE $= 0.025$; $z = (0.55 - 0.5)/0.025 = 2$.
:::

::: problem id=t8 type=choice
Lowering $\alpha$ from 0.05 to 0.01:
- [x] makes Type I errors less likely and Type II errors more likely
- [ ] makes both errors less likely
- [ ] makes Type I errors more likely
solution: A stricter bar for rejecting means fewer false alarms but more missed effects.
:::
