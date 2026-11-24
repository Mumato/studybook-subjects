---
id: reg-03
title: Residuals, r-squared and predictions
---
How good is the line? Look at how far the points miss it, and at how much of the variation in $y$ it explains. (OpenStax ch. 12)

::: rule
- **Residual** $= y - \hat{y}$ (observed minus predicted). Positive: the point is above the line.
- $r^2$ (the **coefficient of determination**) is the share of the variation in $y$ that the line explains. For $r = 0.9$, $r^2 = 0.81$: 81%.
- A good linear fit has residuals scattered randomly around 0. A curved residual pattern means a line is the wrong model.
- **Extrapolation**, predicting far outside the range of the data, is unreliable.
- **Influential points** (far out in $x$) can pull the line toward themselves.
:::

::: example
Hours and scores: $\hat{y} = 45.5 + 6.5x$. A student who studied 3 hours scored 63.
Predicted: $45.5 + 19.5 = 65$. Residual: $63 - 65 = -2$ (2 points below the line).
$r = 0.991$, so $r^2 = 0.98$: hours explain 98% of the variation in these scores.
:::

::: problem id=p1 type=numeric answer="-0.5"
With $\hat{y} = 45.5 + 6.5x$, a student who studied 4 hours scored 71. What is the residual?
solution: $\hat{y} = 45.5 + 26 = 71.5$. Residual $= 71 - 71.5 = -0.5$.
:::

::: problem id=p2 type=numeric answer="1.5"
Same line. A student who studied 2 hours scored 60. What is the residual?
solution: $\hat{y} = 45.5 + 13 = 58.5$. Residual $= 60 - 58.5 = 1.5$.
:::

::: problem id=p3 type=numeric answer="36"
$r = -0.6$. What percent of the variation in $y$ does the line explain?
solution: $r^2 = 0.36$: 36%.
:::

::: problem id=p4 type=numeric answer="0.9"
A line explains 81% of the variation in $y$, and the relationship is positive. What is $r$?
solution: $r = \sqrt{0.81} = 0.9$ (positive, matching the direction).
:::

::: problem id=p5 type=choice
A residual plot shows a clear U shape. This means:
- [ ] the line fits very well
- [x] the relationship is curved, so a straight line is a poor model
- [ ] $r$ must be 1
solution: Residuals should look like random scatter. A pattern means the line misses something systematic.
:::

::: problem id=p6 type=choice
A line predicting children's height from age was fit to ages 2 to 10. Using it to predict height at age 40 is:
- [ ] fine, since the line is good
- [x] extrapolation: unreliable, because growth stops
solution: The data says nothing about ages far outside 2 to 10. The line would predict an absurd height.
:::

::: problem id=p7 type=numeric answer="0"
The least-squares residuals of any data set add up to what?
solution: The least-squares line balances the points: residuals always sum to 0.
:::

::: problem id=p8 type=choice creative=true
One point lies far to the right of all the others and well below the pattern. Removing it would most likely:
- [x] change the slope a lot
- [ ] leave the line unchanged
- [ ] make $r$ exactly 0
solution: A point far out in $x$ is influential: it pulls the line toward itself. Always check the line with and without it.
:::
