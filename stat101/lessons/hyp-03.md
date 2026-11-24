---
id: hyp-03
title: Testing a mean with t
---
With $\sigma$ unknown, use $s$ and the t distribution, just as for confidence intervals. (OpenStax ch. 9)

::: rule
$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}, \quad df = n - 1$$
- Find the p-value from the t distribution with $n - 1$ degrees of freedom (problems give the area you need).
- Or compare $t$ with the critical value $t^*$ for your $\alpha$ and $df$.
:::

::: example
A tutor claims students gain 20 points. 16 students gain $\bar{x} = 22$ with $s = 4$. Test $H_0: \mu = 20$ vs $H_a: \mu \ne 20$.
$t = (22 - 20)/(4/4) = 2$, $df = 15$. The two-sided p-value is $0.064$. At $\alpha = 0.05$: fail to reject $H_0$.
:::

::: problem id=p1 type=numeric answer="-1.8"
$H_0: \mu = 50$. A sample of 25 gives $\bar{x} = 48.2$, $s = 5$. What is $t$?
solution: $(48.2 - 50)/(5/5) = -1.8$.
:::

::: problem id=p2 type=numeric answer="24"
How many degrees of freedom does that test use?
solution: $25 - 1 = 24$.
:::

::: problem id=p3 type=numeric answer="0.0422"
Same test, $H_a: \mu < 50$. With 24 df, $P(T < -1.8) = 0.0422$. What is the p-value?
solution: Left tail: $0.0422$.
:::

::: problem id=p4 type=choice
With $p = 0.0422$ at $\alpha = 0.05$:
- [x] reject $H_0$
- [ ] fail to reject $H_0$
solution: $0.0422 \le 0.05$.
:::

::: problem id=p5 type=numeric answer="2.108" tolerance=0.01
$H_0: \mu = 5$. A sample of 10 gives $\bar{x} = 5.6$, $s = 0.9$. What is $t$? (3 decimals)
solution: SE $= 0.9/\sqrt{10} = 0.2846$. $t = 0.6/0.2846 = 2.108$.
:::

::: problem id=p6 type=choice
Same test, $H_a: \mu > 5$ at $\alpha = 0.05$. The critical value for 9 df is $t^* = 1.833$. Decision?
- [x] Reject $H_0$: $2.108 > 1.833$
- [ ] Fail to reject: $2.108 < 2.262$
solution: One-sided, so use the one-sided critical value 1.833.
:::

::: problem id=p7 type=choice creative=true
In the tutor example, the one-sided p-value ($H_a: \mu > 20$) would be 0.032. Which is true?
- [ ] You may switch to one-sided after seeing the data to get significance
- [x] The one-sided test must be chosen before looking at the data; otherwise the error rate is wrong
- [ ] One- and two-sided tests always agree
solution: Picking the side after seeing which way the data went doubles your real chance of a Type I error.
:::
