---
id: sys-test
title: Systems of equations test
pass: 0.8
---
::: problem id=t1 type=point answer="2,4"
Click the solution of $y = x + 2$ and $y = -x + 6$.
graph:
x -1..6
y -1..7
plot x+2 blue
plot -x+6 red
solution: $x + 2 = -x + 6$, $x = 2$, $y = 4$.
:::

::: problem id=t2 type=numeric answer="2"
$y = 2x + 1$ and $3x + y = 11$. What is x?
solution: $3x + 2x + 1 = 11$, $5x = 10$, $x = 2$.
:::

::: problem id=t3 type=numeric answer="3"
$x + y = 9$ and $x - y = 3$. What is y?
solution: Add: $2x = 12$, $x = 6$, so $y = 3$.
:::

::: problem id=t4 type=choice
How many solutions does $y = 3x + 2$, $y = 3x - 1$ have?
- [ ] one
- [x] none
- [ ] infinitely many
solution: Parallel lines never meet: **none**.
:::

::: problem id=t5 type=numeric answer="17"
Two numbers add up to 30 and differ by 4. What is the larger?
solution: $2x = 34$, $x = 17$.
:::

::: problem id=t6 type=numeric answer="4"
Adult tickets cost 10 dollars and child tickets 6. Eight tickets cost 64 dollars. How many adult tickets?
solution: $a + c = 8$, $10a + 6c = 64$. $10a + 48 - 6a = 64$, $4a = 16$, $a = 4$.
:::

::: problem id=t7 type=numeric answer="1"
$2x + 3y = 8$ and $2x - y = 0$. What is x?
solution: Subtract: $4y = 8$, $y = 2$. Then $2x = 2$, $x = 1$.
:::

::: problem id=t8 type=point answer="2,2"
Click the solution of $y = 2x - 2$ and $y = -x + 4$.
graph:
x -2..5
y -3..5
plot 2x-2 blue
plot -x+4 red
solution: $2x - 2 = -x + 4$, $x = 2$, $y = 2$.
:::

::: problem id=t9 type=choice
How many solutions does $y = -x + 3$, $2x + 2y = 6$ have?
- [ ] one
- [ ] none
- [x] infinitely many
solution: Divide the second by 2: $x + y = 3$, which is $y = -x + 3$. Same line: **infinitely many**.
:::

::: problem id=t10 type=numeric answer="2"
$x = 3y$ and $2x - y = 10$. What is y?
solution: $6y - y = 10$, $5y = 10$, $y = 2$.
:::

::: problem id=t11 type=numeric answer="3"
$y = 4 - x$ and $3x - 2y = 7$. What is x?
solution: $3x - 2(4 - x) = 7$, $5x - 8 = 7$, $x = 3$.
:::

::: problem id=t12 type=numeric answer="2"
$3x + 2y = 7$ and $5x - 2y = 1$. What is y?
solution: Add: $8x = 8$, $x = 1$. Then $3 + 2y = 7$, $y = 2$.
:::

::: problem id=t13 type=numeric answer="3"
$2x + 5y = 1$ and $3x + 2y = 7$. What is x?
solution: Multiply by 2 and 5: $4x + 10y = 2$ and $15x + 10y = 35$. Subtract: $11x = 33$, $x = 3$.
:::

::: problem id=t14 type=text answers="yes"
Is $(3, -1)$ a solution of $x + y = 2$ and $x - 2y = 5$? Type yes or no.
solution: $3 - 1 = 2$ and $3 + 2 = 5$: both true, **yes**.
:::

::: problem id=t15 type=numeric answer="12"
You have 20 coins, all 5-cent and 10-cent coins, worth 160 cents. How many 10-cent coins?
solution: $n + d = 20$, $5n + 10d = 160$. $100 - 5d + 10d = 160$, $d = 12$.
:::

::: problem id=t16 type=numeric answer="4"
You mix a 10% and a 40% salt solution to make 12 L of 20% solution. How many litres of the 40% solution?
solution: $x + y = 12$, $0.1x + 0.4y = 2.4$. $1.2 - 0.1y + 0.4y = 2.4$, $0.3y = 1.2$, $y = 4$.
:::

::: problem id=t17 type=numeric answer="10"
A boat goes 24 km downstream in 2 hours and 24 km upstream in 3 hours. What is the boat's speed in still water, in km/h?
solution: $b + c = 12$ and $b - c = 8$. Add: $2b = 20$, $b = 10$.
:::

::: problem id=t18 type=numeric answer="4"
For which k does $y = kx + 1$, $y = 4x - 3$ have no solution?
solution: No solution means parallel: same slope, different intercepts. $k = 4$.
:::
