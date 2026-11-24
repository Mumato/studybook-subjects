---
id: hyp-01
title: The logic of hypothesis testing
---
A hypothesis test asks: if nothing special were going on, how surprising would our data be? Very surprising data is evidence against "nothing special". (OpenStax ch. 9)

::: rule
- The **null hypothesis** $H_0$ is the "no effect / no change" claim, always with $=$: $H_0: \mu = 500$.
- The **alternative** $H_a$ is what you suspect: $\mu < 500$, $\mu > 500$ (one-sided) or $\mu \ne 500$ (two-sided).
- The **p-value** is the probability, **if $H_0$ were true**, of data at least as extreme as yours.
- Pick a **significance level** $\alpha$ first (often 0.05). If $p \le \alpha$, **reject $H_0$**. Otherwise **fail to reject** $H_0$ (that's not proof it's true).
- **Type I error:** rejecting a true $H_0$ (probability $\alpha$). **Type II error:** failing to reject a false $H_0$.
:::

::: example
A bottler claims its bottles hold 500 ml on average. A consumer group suspects less.
$H_0: \mu = 500$, $H_a: \mu < 500$. A sample gives $p = 0.012$. At $\alpha = 0.05$, $0.012 \le 0.05$: reject $H_0$. The data is good evidence the mean is below 500 ml.
:::

::: problem id=p1 type=choice
A company says its batteries last 40 hours on average. You think they last **less**. The hypotheses are:
- [ ] $H_0: \mu < 40$, $H_a: \mu = 40$
- [x] $H_0: \mu = 40$, $H_a: \mu < 40$
- [ ] $H_0: \mu = 40$, $H_a: \mu \ne 40$
- [ ] $H_0: \mu > 40$, $H_a: \mu < 40$
solution: $H_0$ holds the claim with $=$; your suspicion ("less") is $H_a$.
:::

::: problem id=p2 type=choice
A school wants to know if its mean score **differs** from the national mean of 70. $H_a$ is:
- [ ] $\mu < 70$
- [ ] $\mu > 70$
- [x] $\mu \ne 70$
solution: "Differs" in either direction: two-sided.
:::

::: problem id=p3 type=choice
A test gives $p = 0.03$. At $\alpha = 0.05$ you should:
- [x] reject $H_0$
- [ ] fail to reject $H_0$
- [ ] accept $H_a$ as proven
solution: $0.03 \le 0.05$. Rejecting $H_0$ means strong evidence, not proof.
:::

::: problem id=p4 type=choice
A test gives $p = 0.21$. At $\alpha = 0.05$ the correct conclusion is:
- [ ] $H_0$ is true
- [x] there isn't enough evidence to reject $H_0$
- [ ] reject $H_0$
solution: A large p-value means the data isn't surprising under $H_0$. It doesn't prove $H_0$.
:::

::: problem id=p5 type=choice
A drug has no real effect, but a trial concludes that it works. This is a:
- [x] Type I error
- [ ] Type II error
- [ ] correct decision
solution: Rejecting a true $H_0$ ("no effect") is a Type I error.
:::

::: problem id=p6 type=numeric answer="0.01"
A test uses $\alpha = 0.01$. If $H_0$ is true, what is the probability of a Type I error?
solution: It equals $\alpha$: 0.01.
:::

::: problem id=p7 type=choice
A p-value of 0.04 means:
- [ ] there's a 4% chance $H_0$ is true
- [x] if $H_0$ were true, data this extreme would happen about 4% of the time
- [ ] the effect is 4% in size
solution: The p-value is computed assuming $H_0$. It's not the probability that $H_0$ is true.
:::
