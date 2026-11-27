---
id: tech-06
title: Numerical integration
---
Many integrals, like $\int_0^1 e^{-x^2}\,dx$, have no antiderivative you can write down. Then you estimate them from a few values of f.

::: rule
Split $[a, b]$ into n pieces of width $\Delta x = \frac{b - a}{n}$, with points $x_0 = a, x_1, \ldots, x_n = b$. Write $f_i = f(x_i)$.
- **Midpoint:** $M_n = \Delta x\,[f(m_1) + \cdots + f(m_n)]$, with $m_i$ the middle of each piece.
- **Trapezoid:** $T_n = \frac{\Delta x}{2}[f_0 + 2f_1 + \cdots + 2f_{n-1} + f_n]$
- **Simpson** (n even): $S_n = \frac{\Delta x}{3}[f_0 + 4f_1 + 2f_2 + \cdots$ $+ 4f_{n-1} + f_n]$

**Error bounds** (K bounds $|f''|$ for M and T, $|f^{(4)}|$ for S):

$$|E_T| \le \frac{K(b - a)^3}{12n^2}$$

$$|E_M| \le \frac{K(b - a)^3}{24n^2}$$

$$|E_S| \le \frac{K(b - a)^5}{180n^4}$$

So doubling n cuts the T and M errors by about 4, and the Simpson error by about 16. Simpson is exact for cubics.
:::

::: example
$\int_0^2 x^2\,dx = \frac{8}{3}$ with $n = 2$, so $\Delta x = 1$:
- $M_2 = 1\,(0.5^2 + 1.5^2) = 2.5$ (too small)
- $T_2 = \frac{1}{2}(0 + 2 \cdot 1 + 4) = 3$ (too big)
- $S_2 = \frac{1}{3}(0 + 4 \cdot 1 + 4) = \frac{8}{3}$ (exact)

Here $x^2$ is concave up: the trapezoids lie above the curve and the midpoint rectangles fall below. The midpoint error ($\frac{1}{6}$) is half the trapezoid error ($\frac{1}{3}$).
:::

::: example
How large must n be so that $T_n$ is within 0.001 of $\int_1^2 \frac{1}{x}\,dx$? Here $f'' = \frac{2}{x^3} \le 2$ on $[1, 2]$, so $K = 2$:

$$\frac{2 \cdot 1^3}{12n^2} \le 0.001 \;\Rightarrow\; n^2 \ge 166.7$$

So $n = 13$ is enough (since $12^2 = 144$ is too small).
:::

::: problem id=p1 type=numeric answer="1"
You estimate $\int_1^5 f(x)\,dx$ with $n = 4$. What is $\Delta x$?
solution: $\frac{5 - 1}{4} = 1$.
:::

::: problem id=p2 type=numeric answer="22"
Find $T_4$ for $\int_0^4 x^2\,dx$.
hint: $\Delta x = 1$; the values are 0, 1, 4, 9, 16.
solution: $\frac{1}{2}(0 + 2(1 + 4 + 9) + 16) = \frac{44}{2} = 22$. (Exact: $\frac{64}{3} \approx 21.33$.)
:::

::: problem id=p3 type=numeric answer="21"
Find $M_4$ for $\int_0^4 x^2\,dx$.
hint: Midpoints 0.5, 1.5, 2.5, 3.5.
solution: $1\,(0.25 + 2.25 + 6.25 + 12.25) = 21$.
:::

::: problem id=p4 type=numeric answer="64/3"
Find $S_4$ for $\int_0^4 x^2\,dx$.
solution: $\frac{1}{3}(0 + 4 \cdot 1 + 2 \cdot 4 + 4 \cdot 9 + 16) = \frac{64}{3}$: exact, as Simpson always is for polynomials up to degree 3.
:::

::: problem id=p5 type=numeric answer="7/6"
Find $T_2$ for $\int_1^3 \frac{1}{x}\,dx$.
solution: $\Delta x = 1$: $\frac{1}{2}\left(1 + 2 \cdot \frac{1}{2} + \frac{1}{3}\right) = \frac{1}{2} \cdot \frac{7}{3} = \frac{7}{6}$.
:::

::: problem id=p6 type=choice
Which rule gives the **exact** value of $\int_0^1 (x^3 + 2x)\,dx$, for any even n?
- [ ] Midpoint
- [ ] Trapezoid
- [x] Simpson
- [ ] none of them
solution: Simpson's error depends on $f^{(4)}$, which is 0 for a cubic. So Simpson is exact.
:::

::: problem id=p7 type=choice
f is concave up on $[a, b]$. What does $T_n$ do?
- [x] overestimates the integral
- [ ] underestimates the integral
- [ ] gives it exactly
solution: Each chord lies above a concave-up curve, so the trapezoids hold too much area: an **overestimate**. (The midpoint rule underestimates.)
:::

::: problem id=p8 type=numeric answer="10"
For $\int_0^1 x^4\,dx$, $|f''| \le 12$. What is the smallest n that guarantees $|E_T| \le 0.01$?
solution: $\frac{12 \cdot 1}{12n^2} = \frac{1}{n^2} \le 0.01$, so $n^2 \ge 100$ and $n = 10$.
:::

::: problem id=x1 type=numeric answer="1/2" set=extra
You estimate $\int_0^3 f(x)\,dx$ with $n = 6$. What is $\Delta x$?
solution: $\frac{3 - 0}{6} = \frac{1}{2}$.
:::

::: problem id=x2 type=numeric answer="5" set=extra
Find $T_2$ for $\int_0^2 x^3\,dx$.
solution: $\Delta x = 1$: $\frac{1}{2}(0 + 2 \cdot 1 + 8) = 5$. (Exact: 4.)
:::

::: problem id=x3 type=numeric answer="7/2" set=extra
Find $M_2$ for $\int_0^2 x^3\,dx$.
solution: $1\,(0.5^3 + 1.5^3) = 0.125 + 3.375 = 3.5$.
:::

::: problem id=x4 type=numeric answer="4" set=extra
Find $S_2$ for $\int_0^2 x^3\,dx$.
solution: $\frac{1}{3}(0 + 4 \cdot 1 + 8) = 4$, the exact value.
:::

::: problem id=x5 type=numeric answer="3/8" set=extra
Find $T_2$ for $\int_0^1 x^2\,dx$.
solution: $\Delta x = \frac{1}{2}$: $\frac{1}{4}\left(0 + 2 \cdot \frac{1}{4} + 1\right) = \frac{3}{8}$.
:::

::: problem id=x6 type=numeric answer="2.0046" tolerance="0.001" set=extra
Find $S_4$ for $\int_0^{\pi} \sin x\,dx$. (to 4 decimals)
solution: $\Delta x = \frac{\pi}{4}$, values $0, \frac{\sqrt{2}}{2}, 1, \frac{\sqrt{2}}{2}, 0$. $S_4 = \frac{\pi}{12}(2 + 4\sqrt{2}) \approx 2.0046$. (Exact: 2.)
:::

::: problem id=x7 type=numeric answer="17.5" set=extra
A function has $f(0) = 3$, $f(1) = 5$, $f(2) = 6$, $f(3) = 4$, $f(4) = 2$. Estimate $\int_0^4 f(x)\,dx$ with $T_4$.
solution: $\frac{1}{2}(3 + 2(5 + 6 + 4) + 2) = \frac{35}{2} = 17.5$.
:::

::: problem id=x8 type=numeric answer="53/3" set=extra
Same table: estimate $\int_0^4 f(x)\,dx$ with $S_4$.
solution: $\frac{1}{3}(3 + 4 \cdot 5 + 2 \cdot 6 + 4 \cdot 4 + 2) = \frac{53}{3}$.
:::

::: problem id=x9 type=numeric answer="345" set=extra
A car's speed is read every 10 s: 0, 6, 10, 12, 13 m/s at $t = 0, 10, 20, 30, 40$. Estimate the distance with the trapezoid rule.
hint: Distance is the integral of speed; $\Delta t = 10$.
solution: $\frac{10}{2}(0 + 2(6 + 10 + 12) + 13)$, which is $5 \cdot 69 = 345$ m.
:::

::: problem id=x10 type=numeric answer="350" set=extra
Same car: estimate the distance with Simpson's rule.
solution: $\frac{10}{3}(0 + 24 + 20 + 48 + 13)$, which is $\frac{10}{3} \cdot 105 = 350$ m.
:::

::: problem id=x11 type=numeric answer="1/3" set=extra
$T_2 = 3$ for $\int_0^2 x^2\,dx$. By how much is it too big?
solution: Exact value $\frac{8}{3}$. Error $3 - \frac{8}{3} = \frac{1}{3}$.
:::

::: problem id=x12 type=choice set=extra
You double n in the trapezoid rule. The error becomes about:
- [ ] half as big
- [x] a quarter as big
- [ ] a sixteenth as big
- [ ] the same
solution: The bound has $n^2$ below: $(2n)^2 = 4n^2$, so about **a quarter**.
:::

::: problem id=x13 type=choice set=extra
You double n in Simpson's rule. The error becomes about:
- [ ] half as big
- [ ] a quarter as big
- [x] a sixteenth as big
- [ ] an eighth as big
solution: The bound has $n^4$ below: $2^4 = 16$.
:::

::: problem id=x14 type=choice set=extra
Why can't you use Simpson's rule with $n = 5$?
- [x] it pairs up the pieces, so n must be even
- [ ] n must be a multiple of 4
- [ ] it only works for $n = 2$
- [ ] 5 is too small
solution: Simpson fits a parabola over each **pair** of pieces, so n must be even.
:::

::: problem id=x15 type=numeric answer="16/15" set=extra
Find $M_2$ for $\int_1^3 \frac{1}{x}\,dx$.
solution: $\Delta x = 1$, midpoints 1.5 and 2.5: $\frac{2}{3} + \frac{2}{5} = \frac{16}{15}$.
:::

::: problem id=x16 type=numeric answer="11/10" set=extra
For $\int_1^3 \frac{1}{x}\,dx$, $T_2 = \frac{7}{6}$ and $M_2 = \frac{16}{15}$. A known shortcut is $S_4 = \frac{2M_2 + T_2}{3}$. Find $S_4$.
hint: Turn both into thirtieths.
solution: $\frac{2 \cdot 32 + 35}{30} = \frac{99}{30}$, then divide by 3: $\frac{99}{90} = \frac{11}{10}$. (Exact: $\ln 3 \approx 1.0986$.)
:::

::: problem id=x17 type=numeric answer="71" set=extra
For $\int_0^1 x^4\,dx$, $|f''| \le 12$. What is the smallest n that guarantees $|E_M| \le 0.0001$?
hint: Use the midpoint bound with 24 below.
solution: $\frac{12}{24n^2} = \frac{1}{2n^2} \le 0.0001$, so $n^2 \ge 5000$. $70^2 = 4900$ is too small: $n = 71$.
:::

::: problem id=x18 type=numeric answer="8" set=extra
For $\int_0^1 x^4\,dx$, $f^{(4)} = 24$. What is the smallest n that guarantees $|E_S| \le 0.0001$?
hint: Remember n must be even.
solution: $\frac{24}{180n^4} \le 0.0001$ gives $n^4 \ge 1333.3$. $6^4 = 1296$ is too small, $n = 7$ is odd, so $n = 8$.
:::

::: problem id=x19 type=numeric answer="0.7430" tolerance="0.001" set=extra
Estimate $\int_0^1 e^{-x^2}\,dx$ with $T_4$. (to 3 decimals)
hint: $\Delta x = 0.25$. Values: 1, 0.9394, 0.7788, 0.5698, 0.3679.
solution: The sum $1 + 2(2.2880) + 0.3679 = 5.9439$, so $T_4 = 0.125 \cdot 5.9439 \approx 0.7430$.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
Use $S_2$ to find $\int_0^2 (x^3 - 3x^2 + 5)\,dx$. Why is your answer exact?
solution: Values 5, 3, 1 at $x = 0, 1, 2$: $\frac{1}{3}(5 + 12 + 1) = 6$. Simpson is exact for cubics. Check: $\left[\frac{x^4}{4} - x^3 + 5x\right]_0^2 = 4 - 8 + 10 = 6$.
:::
