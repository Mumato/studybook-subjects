---
id: reg-01
title: Scatterplots and correlation
---
To see how two quantitative variables move together, plot each individual as a point. The **correlation** $r$ measures how close the points are to a straight line. (OpenStax ch. 12)

::: rule
- In a **scatterplot**, the explanatory variable $x$ goes on the horizontal axis and the response $y$ on the vertical.
- Describe **direction** (positive or negative), **form** (linear or curved) and **strength**.
- **Correlation:** $r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \sum (y - \bar{y})^2}}$.
- $-1 \le r \le 1$. The sign gives the direction; values near $\pm 1$ mean a strong **linear** pattern, near 0 a weak one. $r$ has no units and ignores curves.
- **Correlation is not causation.**
:::

::: example
Hours studied (1 to 5) and test score for five students: (1, 52), (2, 60), (3, 63), (4, 71), (5, 79). The points rise almost in a line: $r = 0.99$, a strong positive linear relationship.
:::

::: graph
x -2..11.5
y -2..9.5
axes off
grid off
segment 0,0 11,0
segment 0,0 0,9
label 2,-0.6 1
label 4,-0.6 2
label 6,-0.6 3
label 8,-0.6 4
label 10,-0.6 5
label 6,-1.5 hours studied
label -1,2 50
label -1,4 60
label -1,6 70
label -1,8 80
label 1.5,9 score
point 2,2.4 blue
point 4,4 blue
point 6,4.6 blue
point 8,6.2 blue
point 10,7.8 blue
:::

::: problem id=p1 type=numeric answer="0.775" tolerance=0.005
Data: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5). Here $\sum(x - \bar{x})(y - \bar{y}) = 6$, $\sum(x - \bar{x})^2 = 10$ and $\sum(y - \bar{y})^2 = 6$. Find $r$. (3 decimals)
solution: $r = 6/\sqrt{10 \times 6} = 6/7.746 = 0.775$.
:::

::: problem id=p2 type=choice
Which $r$ shows the **strongest** linear relationship?
- [ ] 0.65
- [x] −0.92
- [ ] 0.10
- [ ] −0.50
solution: Strength depends on the size, not the sign: $|-0.92|$ is largest.
:::

::: problem id=p3 type=choice
As a car ages, its resale value falls. The correlation between age and value is most likely:
- [x] negative
- [ ] positive
- [ ] exactly 0
solution: One goes up as the other goes down.
:::

::: problem id=p4 type=choice
Heights are measured in cm instead of inches. The correlation between height and weight:
- [x] stays the same
- [ ] gets bigger
- [ ] gets smaller
solution: $r$ has no units: changing units doesn't change it.
:::

::: problem id=p5 type=choice
Points follow a perfect U-shaped curve. $r$ is close to:
- [ ] 1
- [ ] −1
- [x] 0
solution: $r$ only measures **straight-line** patterns. A strong curve can have $r$ near 0.
:::

::: problem id=p6 type=choice
Cities with more churches have more crimes ($r = 0.9$). The best explanation is:
- [ ] churches cause crime
- [ ] crime causes churches
- [x] bigger cities have more of both
solution: Population is a lurking (confounding) variable.
:::

::: problem id=p7 type=choice
Which value is impossible for $r$?
- [ ] −1
- [ ] 0
- [x] 1.3
- [ ] 0.99
solution: $r$ is always between −1 and 1.
:::
