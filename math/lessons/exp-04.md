---
id: exp-04
title: Exponential and log equations
---
::: rule
- If you can, write both sides with the **same base** and set the exponents equal: $2^x = 32 = 2^5$, so $x = 5$.
- Otherwise take a **log** of both sides: $e^x = 5$ gives $x = \ln 5$.
- For $\log_b x = c$, rewrite as $x = b^c$.
:::

::: example
$4^x = 8$: $2^{2x} = 2^3$, so $2x = 3$ and $x = \frac{3}{2}$.
:::

::: example
$\log x + \log 4 = 2$: $\log(4x) = 2$, so $4x = 100$ and $x = 25$.
:::

You can type exact answers like ln(5) or e^2.

::: problem id=p1 type=numeric answer="5"
Solve $2^x = 32$.
solution: $32 = 2^5$, so $x = 5$.
:::

::: problem id=p2 type=numeric answer="2"
Solve $3^{x + 1} = 27$.
solution: $27 = 3^3$, so $x + 1 = 3$ and $x = 2$.
:::

::: problem id=p3 type=numeric answer="ln(5)"
Solve $e^x = 5$.
solution: $x = \ln 5$.
:::

::: problem id=p4 type=numeric answer="16"
Solve $\log_2 x = 4$.
solution: $x = 2^4 = 16$.
:::

::: problem id=p5 type=numeric answer="e^2"
Solve $\ln x = 2$.
solution: $x = e^2$.
:::

::: problem id=p6 type=numeric answer="3/2"
Solve $4^x = 8$.
hint: Write both as powers of 2.
solution: $2^{2x} = 2^3$: $x = \frac{3}{2}$.
:::

::: problem id=p7 type=numeric answer="-3"
Solve $10^x = 0.001$.
solution: $0.001 = 10^{-3}$.
:::

::: problem id=p8 type=numeric answer="25"
Solve $\log x + \log 4 = 2$.
solution: $\log(4x) = 2$, $4x = 100$, $x = 25$.
:::

::: problem id=x1 type=numeric answer="4" set=extra
Solve $3^x = 81$.
solution: $81 = 3^4$, so $x = 4$.
:::

::: problem id=x2 type=numeric answer="4" set=extra
Solve $5^{x - 2} = 25$.
solution: $x - 2 = 2$, so $x = 4$.
:::

::: problem id=x3 type=numeric answer="2" set=extra
Solve $2^{3x} = 64$.
solution: $64 = 2^6$: $3x = 6$, $x = 2$.
:::

::: problem id=x4 type=numeric answer="3/2" set=extra
Solve $9^x = 27$.
solution: $3^{2x} = 3^3$: $x = \frac{3}{2}$.
:::

::: problem id=x5 type=numeric answer="81" set=extra
Solve $\log_3 x = 4$.
solution: $x = 3^4 = 81$.
:::

::: problem id=x6 type=numeric answer="22" set=extra
Solve $\log_5(x + 3) = 2$.
solution: $x + 3 = 25$, so $x = 22$.
:::

::: problem id=x7 type=numeric answer="ln(10)" set=extra
Solve $e^x = 10$.
solution: $x = \ln 10$.
:::

::: problem id=x8 type=numeric answer="ln(3)" set=extra
Solve $e^{2x} = 9$.
solution: $2x = \ln 9 = 2\ln 3$, so $x = \ln 3$.
:::

::: problem id=x9 type=numeric answer="1/e" set=extra
Solve $\ln x = -1$.
solution: $x = e^{-1} = \frac{1}{e}$.
:::

::: problem id=x10 type=numeric answer="-3" set=extra
Solve $\left(\frac{1}{2}\right)^x = 8$.
solution: $2^{-x} = 2^3$, so $x = -3$.
:::

::: problem id=x11 type=numeric answer="3/2" set=extra
Solve $10^{2x} = 1000$.
solution: $2x = 3$, $x = \frac{3}{2}$.
:::

::: problem id=x12 type=numeric answer="3" set=extra
Solve $4^x = 2^{x + 3}$.
solution: $2^{2x} = 2^{x + 3}$: $2x = x + 3$, $x = 3$.
:::

::: problem id=x13 type=numeric answer="4" set=extra
Solve $3 \cdot 2^x = 48$.
solution: Divide by 3 first: $2^x = 16$, $x = 4$.
:::

::: problem id=x14 type=choice set=extra
Solving $\log x + \log(x - 3) = 1$ gives $x^2 - 3x - 10 = 0$, so $x = 5$ or $x = -2$. Which are real solutions?
- [x] only $x = 5$
- [ ] only $x = -2$
- [ ] both
- [ ] neither
solution: $\log(-2)$ is undefined, so $-2$ is rejected. Check 5: $\log 5 + \log 2 = \log 10 = 1$.
:::

::: problem id=x15 type=numeric answer="20ln(2)" tolerance="0.01" set=extra
Solve $100e^{0.05t} = 200$. (exact or to hundredths)
solution: $e^{0.05t} = 2$, so $0.05t = \ln 2$.
$t = 20\ln 2 \approx 13.86$.
:::

::: problem id=x16 type=numeric answer="4" set=extra
Solve $\log_2 x + \log_2(x - 2) = 3$.
hint: Combine into one log, then rewrite as a power. Check the answers.
solution: $x(x - 2) = 8$, so $x^2 - 2x - 8 = 0$ and $x = 4$ or $-2$.
$-2$ is not allowed in a log, so $x = 4$.
:::

::: problem id=x17 type=numeric answer="ln(3)/ln(2)-1" set=extra
Solve $2^{x + 1} = 3$. (exact)
hint: Take ln of both sides.
solution: $(x + 1)\ln 2 = \ln 3$.
$x = \frac{\ln 3}{\ln 2} - 1 \approx 0.585$.
:::

::: problem id=x18 type=numeric answer="10/7" set=extra
Solve $\log_3(2x + 1) - \log_3(x - 1) = 2$.
hint: Quotient rule, then $\frac{2x + 1}{x - 1} = 3^2$.
solution: $2x + 1 = 9(x - 1) = 9x - 9$.
$7x = 10$, $x = \frac{10}{7}$ (and $x - 1 > 0$, so it is allowed).
:::

::: problem id=x19 type=multi answers="ln(2);ln(3)" set=extra
Solve $e^{2x} - 5e^x + 6 = 0$. Type both solutions.
hint: Let $u = e^x$: it is a quadratic in u.
solution: $u^2 - 5u + 6 = (u - 2)(u - 3) = 0$.
$e^x = 2$ or $e^x = 3$: $x = \ln 2$ or $x = \ln 3$.
:::

::: problem id=x20 type=numeric answer="ln(3)/(ln(3)-ln(2))" tolerance="0.01" set=extra creative=true
Solve $2^x = 3^{x - 1}$. (exact, or to hundredths: about 2.71)
hint: Take ln, then gather the x terms.
solution: $x\ln 2 = (x - 1)\ln 3$.
$x(\ln 3 - \ln 2) = \ln 3$.
$x = \frac{\ln 3}{\ln 3 - \ln 2} \approx 2.71$.
:::
