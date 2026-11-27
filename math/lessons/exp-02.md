---
id: exp-02
title: Logarithms
---
::: rule
A **logarithm** answers "what power?":

$$\log_b x = y \quad\text{means}\quad b^y = x$$

- $\log x$ means base 10; $\ln x$ means base $e \approx 2.718$
- $\log_b 1 = 0$ and $\log_b b = 1$
- logs undo exponentials: $\log_b(b^x) = x$
:::

::: example
$\log_2 8 = 3$ because $2^3 = 8$. $\log_3 \frac{1}{9} = -2$ because $3^{-2} = \frac{1}{9}$.
:::

::: problem id=p1 type=numeric answer="3"
$\log_2 8 = ?$
solution: $2^3 = 8$.
:::

::: problem id=p2 type=numeric answer="3"
$\log 1000 = ?$ (base 10)
solution: $10^3 = 1000$.
:::

::: problem id=p3 type=numeric answer="0"
$\log_5 1 = ?$
solution: $5^0 = 1$.
:::

::: problem id=p4 type=numeric answer="-2"
$\log_3 \frac{1}{9} = ?$
solution: $3^{-2} = \frac{1}{9}$.
:::

::: problem id=p5 type=numeric answer="1"
$\ln e = ?$
solution: $e^1 = e$.
:::

::: problem id=p6 type=numeric answer="1/2"
$\log_4 2 = ?$
hint: 2 is the square root of 4.
solution: $4^{\frac{1}{2}} = 2$.
:::

::: problem id=p7 type=choice
$\log_2 x = 5$ means:
- [x] $2^5 = x$
- [ ] $x^5 = 2$
- [ ] $5^2 = x$
solution: The base to the power of the log gives x.
:::

::: problem id=p8 type=numeric answer="-2"
$\log 0.01 = ?$ (base 10)
solution: $10^{-2} = 0.01$.
:::

::: problem id=x1 type=numeric answer="3" set=extra
$\log_3 27 = ?$
solution: $3^3 = 27$.
:::

::: problem id=x2 type=numeric answer="4" set=extra
$\log_5 625 = ?$
solution: $5^4 = 625$.
:::

::: problem id=x3 type=numeric answer="5" set=extra
$\log 100000 = ?$ (base 10)
solution: $10^5 = 100000$.
:::

::: problem id=x4 type=numeric answer="-4" set=extra
$\log_2 \frac{1}{16} = ?$
solution: $2^{-4} = \frac{1}{16}$.
:::

::: problem id=x5 type=numeric answer="3" set=extra
$\ln(e^3) = ?$
solution: Logs undo exponentials: $\ln(e^3) = 3$.
:::

::: problem id=x6 type=numeric answer="1/2" set=extra
$\log_9 3 = ?$
solution: $9^{\frac{1}{2}} = \sqrt{9} = 3$.
:::

::: problem id=x7 type=choice set=extra
Write $3^4 = 81$ as a logarithm.
- [x] $\log_3 81 = 4$
- [ ] $\log_4 81 = 3$
- [ ] $\log_{81} 3 = 4$
- [ ] $\log_3 4 = 81$
solution: The base stays the base, and the log is the exponent: $\log_3 81 = 4$.
:::

::: problem id=x8 type=numeric answer="7" set=extra
$\log_b 49 = 2$. What is b?
solution: $b^2 = 49$, so $b = 7$ (a base is positive).
:::

::: problem id=x9 type=numeric answer="64" set=extra
$\log_4 x = 3$. What is x?
solution: $x = 4^3 = 64$.
:::

::: problem id=x10 type=numeric answer="7" set=extra
$10^{\log 7} = ?$
solution: $\log 7$ is the power of 10 that gives 7, so $10^{\log 7} = 7$.
:::

::: problem id=x11 type=choice set=extra
Between which two whole numbers is $\log 500$?
- [ ] 1 and 2
- [x] 2 and 3
- [ ] 50 and 51
- [ ] 4 and 5
solution: $10^2 = 100 < 500 < 1000 = 10^3$, so $\log 500$ is between 2 and 3.
:::

::: problem id=x12 type=numeric answer="4" set=extra
The pH of a solution is $-\log[\text{H}^+]$. What is the pH when $[\text{H}^+] = 10^{-4}$?
solution: $\log 10^{-4} = -4$, so pH $= 4$.
:::

::: problem id=x13 type=numeric answer="5" set=extra
Sam says $\log_2 32 = 16$ because $32 \div 2 = 16$. What is $\log_2 32$ really?
solution: A log asks for a power, not a quotient: $2^5 = 32$, so $\log_2 32 = 5$.
:::

::: problem id=x14 type=numeric answer="-2" set=extra
$\ln\left(\frac{1}{e^2}\right) = ?$
solution: $\frac{1}{e^2} = e^{-2}$, so the log is $-2$.
:::

::: problem id=x15 type=numeric answer="-1" set=extra
For any valid base b, $\log_b \frac{1}{b} = ?$
solution: $\frac{1}{b} = b^{-1}$, so the log is $-1$.
:::

::: problem id=x16 type=numeric answer="-3" set=extra
$\log_{1/2} 8 = ?$
hint: Which power of $\frac{1}{2}$ gives 8? Try negative powers.
solution: $\left(\frac{1}{2}\right)^{-3} = 2^3 = 8$, so the answer is $-3$.
:::

::: problem id=x17 type=numeric answer="2/3" set=extra
$\log_8 4 = ?$
hint: Write both 8 and 4 as powers of 2.
solution: $8^y = 4$ means $2^{3y} = 2^2$, so $3y = 2$ and $y = \frac{2}{3}$.
:::

::: problem id=x18 type=numeric answer="2" set=extra
$\log_2(\log_3 81) = ?$
hint: Work from the inside out.
solution: $\log_3 81 = 4$, then $\log_2 4 = 2$.
:::

::: problem id=x19 type=numeric answer="30" set=extra
Loudness in decibels is $L = 10\log\frac{I}{I_0}$. What is L for a sound with $I = 1000 I_0$?
hint: Find $\log 1000$ first.
solution: $10 \log 1000 = 10 \times 3 = 30$ dB.
:::

::: problem id=x20 type=numeric answer="729" set=extra creative=true
$\log_3 x = 2$ and $\log_x y = 3$. What is y?
hint: Find x first.
solution: $x = 3^2 = 9$. Then $y = 9^3 = 729$.
:::
