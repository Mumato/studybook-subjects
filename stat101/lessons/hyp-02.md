---
id: hyp-02
title: Testing a mean with z
---
When $\sigma$ is known, measure how far the sample mean lands from the claimed $\mu_0$, in standard errors. (OpenStax ch. 9)

::: rule
$$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$$
- p-value for $H_a: \mu > \mu_0$: $1 - \Phi(z)$. For $\mu < \mu_0$: $\Phi(z)$. For $\mu \ne \mu_0$: double the smaller tail.
- **Critical value** method: at $\alpha = 0.05$, a two-sided test rejects when $|z| > 1.96$; a one-sided test when $z > 1.645$ (or $z < -1.645$).
:::

::: example
$H_0: \mu = 500$, $H_a: \mu \ne 500$; $\sigma = 40$, $n = 64$, $\bar{x} = 510$.
$z = (510 - 500)/(40/8) = 2$. Given $\Phi(2) = 0.9772$, the two-sided p-value is $2(0.0228) = 0.0456$. Since $0.0456 \le 0.05$, reject $H_0$.
:::

::: problem id=p1 type=numeric answer="-2"
$H_0: \mu = 12$ oz. A sample of 25 has $\bar{x} = 11.8$; $\sigma = 0.5$. What is $z$?
solution: $(11.8 - 12)/(0.5/5) = -0.2/0.1 = -2$.
:::

::: problem id=p2 type=numeric answer="0.0228"
Same test with $H_a: \mu < 12$. Given $\Phi(-2) = 0.0228$, what is the p-value?
solution: Left tail: $\Phi(-2) = 0.0228$.
:::

::: problem id=p3 type=numeric answer="1.5"
$H_0: \mu = 30$, $\sigma = 6$, $n = 36$, $\bar{x} = 31.5$. What is $z$?
solution: $1.5/(6/6) = 1.5$.
:::

::: problem id=p4 type=numeric answer="0.1336"
Same test with $H_a: \mu \ne 30$. Given $\Phi(1.5) = 0.9332$, what is the p-value?
solution: One tail is $0.0668$; double it: $0.1336$.
:::

::: problem id=p5 type=choice
With $p = 0.1336$ at $\alpha = 0.05$:
- [ ] reject $H_0$
- [x] fail to reject $H_0$
solution: $0.1336 > 0.05$: the sample mean of 31.5 isn't surprising if $\mu = 30$.
:::

::: problem id=p6 type=numeric answer="2.121" tolerance=0.01
$H_0: \mu = 100$, $\sigma = 15$, $n = 50$, $\bar{x} = 104.5$. What is $z$? (3 decimals)
solution: SE $= 15/\sqrt{50} = 2.121$. $z = 4.5/2.121 = 2.121$.
:::

::: problem id=p7 type=choice
A two-sided z test at $\alpha = 0.05$ gives $z = -2.3$. Using the critical value 1.96:
- [x] reject $H_0$, since $|-2.3| > 1.96$
- [ ] fail to reject, since $-2.3 < 1.96$
solution: In a two-sided test, extreme values in either tail count: compare $|z|$ with 1.96.
:::
