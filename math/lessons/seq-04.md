---
id: seq-04
title: Infinite geometric series
---
::: rule
If $|r| < 1$, the terms of a geometric series shrink towards 0 and the whole infinite sum has a value:

$$a_1 + a_1 r + a_1 r^2 + \cdots = \frac{a_1}{1 - r}$$

If $|r| \ge 1$ the sum grows without limit (or keeps jumping around): it **diverges**.
:::

::: example
$1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = \frac{1}{1 - \frac{1}{2}} = 2$.
:::

::: example
$0.333\ldots = \frac{3}{10} + \frac{3}{100} + \cdots = \frac{3/10}{1 - 1/10} = \frac{1}{3}$.
:::

::: problem id=p1 type=numeric answer="2"
$1 + \frac{1}{2} + \frac{1}{4} + \cdots = ?$
solution: $\frac{1}{1 - \frac{1}{2}} = 2$.
:::

::: problem id=p2 type=numeric answer="27/2"
$9 + 3 + 1 + \frac{1}{3} + \cdots = ?$
solution: $r = \frac{1}{3}$: $\frac{9}{2/3} = \frac{27}{2} = 13.5$.
:::

::: problem id=p3 type=numeric answer="1"
$0.999\ldots = \frac{9}{10} + \frac{9}{100} + \cdots = ?$
hint: $a_1 = \frac{9}{10}$, $r = \frac{1}{10}$.
solution: $\frac{9/10}{9/10} = 1$. Yes, $0.999\ldots$ is exactly 1!
:::

::: problem id=p4 type=choice
What happens with $1 + 2 + 4 + 8 + \cdots$?
- [ ] it adds up to $-1$
- [x] it diverges
- [ ] it adds up to 16
solution: $r = 2$, so the sum grows without limit.
:::

::: problem id=p5 type=numeric answer="8/3"
$4 - 2 + 1 - \frac{1}{2} + \cdots = ?$
hint: $r = -\frac{1}{2}$.
solution: $\frac{4}{1 + \frac{1}{2}} = \frac{8}{3}$.
:::

::: problem id=p6 type=numeric answer="7/9"
Write $0.777\ldots$ as a fraction.
solution: $\frac{7/10}{9/10} = \frac{7}{9}$.
:::

::: problem id=p7 type=numeric answer="5"
An infinite geometric series has $r = \frac{1}{2}$ and adds up to 10. What is its first term?
solution: $\frac{a_1}{1/2} = 10$, so $a_1 = 5$.
:::

::: problem id=p8 type=text answers="no"
Does a geometric series with $r = 1.1$ add up to a number? Type yes or no.
solution: $|r| \ge 1$: it diverges, **no**.
:::

::: problem id=c1 type=numeric answer="30" creative=true
A ball is dropped from 10 m. Each bounce takes it back up to half its previous height. In total, how far does it travel (up and down) before it stops?
hint: It falls 10 m, then goes up and down 5, 2.5, 1.25, …
solution: $10 + 2(5 + 2.5 + \cdots) = 10 + 2 \cdot \frac{5}{1 - \frac{1}{2}} = 10 + 20 = 30$ m.
:::
