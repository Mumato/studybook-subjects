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
solution: $10 + 2(5 + 2.5 + \cdots)$
$= 10 + 2 \cdot \frac{5}{1 - \frac{1}{2}}$
$= 10 + 20 = 30$ m.
:::

::: problem id=x1 type=numeric answer="9" set=extra
$6 + 2 + \frac{2}{3} + \cdots = ?$
solution: $r = \frac{1}{3}$: $\frac{6}{2/3} = 9$.
:::

::: problem id=x2 type=numeric answer="4/3" set=extra
$1 + \frac{1}{4} + \frac{1}{16} + \cdots = ?$
solution: $\frac{1}{1 - \frac{1}{4}} = \frac{4}{3}$.
:::

::: problem id=x3 type=numeric answer="20/3" set=extra
$10 - 5 + 2.5 - \cdots = ?$
solution: $r = -\frac{1}{2}$: $\frac{10}{3/2} = \frac{20}{3}$.
:::

::: problem id=x4 type=numeric answer="4/9" set=extra
Write $0.444\ldots$ as a fraction.
solution: $\frac{4/10}{9/10} = \frac{4}{9}$.
:::

::: problem id=x5 type=numeric answer="4/33" set=extra
Write $0.121212\ldots$ as a fraction.
solution: $\frac{12}{100} + \frac{12}{10000} + \cdots = \frac{12/100}{99/100} = \frac{12}{99} = \frac{4}{33}$.
:::

::: problem id=x6 type=numeric answer="1/2" set=extra
$\sum_{k=1}^{\infty} \left(\frac{1}{3}\right)^k = ?$
solution: First term $\frac{1}{3}$, $r = \frac{1}{3}$: $\frac{1/3}{2/3} = \frac{1}{2}$.
:::

::: problem id=x7 type=numeric answer="9" set=extra
$\sum_{k=1}^{\infty} 3\left(\frac{2}{3}\right)^{k - 1} = ?$
solution: $\frac{3}{1 - \frac{2}{3}} = 9$.
:::

::: problem id=x8 type=text answers="yes" set=extra
Does a geometric series with $r = -0.9$ add up to a number? Type yes or no.
solution: $|r| = 0.9 < 1$: **yes**, it converges.
:::

::: problem id=x9 type=choice set=extra
Which infinite series converges?
- [x] $2 - 1 + \frac{1}{2} - \cdots$
- [ ] $1 - 2 + 4 - \cdots$
- [ ] $3 + 3 + 3 + \cdots$
- [ ] $1 + 1.5 + 2.25 + \cdots$
solution: Only the first has $|r| < 1$ ($r = -\frac{1}{2}$).
:::

::: problem id=x10 type=numeric answer="2/3" set=extra
An infinite geometric series has first term 4 and sum 12. What is r?
solution: $\frac{4}{1 - r} = 12$, so $1 - r = \frac{1}{3}$ and $r = \frac{2}{3}$.
:::

::: problem id=x11 type=numeric answer="23/9" set=extra
Write $2.555\ldots$ as a fraction.
solution: $2 + \frac{5}{9} = \frac{23}{9}$.
:::

::: problem id=x12 type=numeric answer="16/3" set=extra
$8 - 4 + 2 - 1 + \cdots = ?$
solution: $r = -\frac{1}{2}$: $\frac{8}{3/2} = \frac{16}{3}$.
:::

::: problem id=x13 type=numeric answer="3" set=extra
Sam writes $1 + \frac{2}{3} + \frac{4}{9} + \cdots = \frac{1}{1 + \frac{2}{3}} = \frac{3}{5}$. What is the sum really?
solution: The bottom is $1 - r$: $\frac{1}{1 - \frac{2}{3}} = 3$.
:::

::: problem id=x14 type=numeric answer="1/2" set=extra
$\sum_{k=2}^{\infty} \left(\frac{1}{2}\right)^k = ?$
solution: $\frac{1}{4} + \frac{1}{8} + \cdots = \frac{1/4}{1/2} = \frac{1}{2}$.
:::

::: problem id=x15 type=numeric answer="4/5" set=extra
$1 + x + x^2 + \cdots = 5$. What is x?
solution: $\frac{1}{1 - x} = 5$, so $1 - x = \frac{1}{5}$ and $x = \frac{4}{5}$.
:::

::: problem id=x16 type=numeric answer="5/18" set=extra
Write $0.2777\ldots$ as a fraction.
hint: Split it as $0.2 + 0.0777\ldots$
solution: $0.0777\ldots = \frac{7/100}{9/10} = \frac{7}{90}$.
$\frac{1}{5} + \frac{7}{90} = \frac{18 + 7}{90} = \frac{5}{18}$.
:::

::: problem id=x17 type=numeric answer="400/3" set=extra
A patient takes 100 mg every day, and $\frac{1}{4}$ of the drug in the body is still there a day later. In the long run, how many mg are in the body right after a dose?
hint: Right after a dose: $100 + 100 \cdot \frac{1}{4} + 100 \cdot \frac{1}{16} + \cdots$
solution: $\frac{100}{1 - \frac{1}{4}} = \frac{400}{3} \approx 133.3$ mg.
:::

::: problem id=x18 type=numeric answer="2" set=extra
A square has area 1. Joining the midpoints of its sides makes a square with half the area, and this goes on forever. What is the total area of all the squares?
hint: Areas $1, \frac{1}{2}, \frac{1}{4}, \ldots$
solution: $\frac{1}{1 - \frac{1}{2}} = 2$.
:::

::: problem id=x19 type=multi answers="3/4;1/4" set=extra
An infinite geometric series has second term 3 and sum 16. Find both possible values of r.
hint: $a_1 r = 3$ and $\frac{a_1}{1 - r} = 16$.
solution: $a_1 = 16(1 - r)$, so $16r(1 - r) = 3$.
$16r^2 - 16r + 3 = (4r - 3)(4r - 1) = 0$.
$r = \frac{3}{4}$ or $r = \frac{1}{4}$.
:::

::: problem id=x20 type=numeric answer="1" set=extra creative=true
Start with a triangle of area 1. Remove the middle quarter (area $\frac{1}{4}$), leaving 3 small triangles. From each, remove its middle quarter, and so on forever. What total area is removed?
hint: Each step removes 3 times as many pieces, each a quarter the size: the removed areas form a geometric series.
solution: $\frac{1}{4} + \frac{3}{16} + \frac{9}{64} + \cdots$ has $r = \frac{3}{4}$.
Total: $\frac{1/4}{1/4} = 1$. All of the area is removed!
:::
