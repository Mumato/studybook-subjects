---
id: tech-02
title: Partial fractions
---
::: rule
Split a fraction with a factored bottom into simpler pieces:

$$\frac{1}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}$$

**Cover-up trick:** to find A, cover up $(x - a)$ and put $x = a$ into what's left. Each piece then integrates to a log: $\int \frac{1}{x - a}\,dx = \ln|x - a| + C$.
:::

::: example
$\frac{1}{(x - 1)(x + 1)}$: for A cover $(x - 1)$ and put $x = 1$: $\frac{1}{2}$. For B cover $(x + 1)$ and put $x = -1$: $-\frac{1}{2}$. So the integral is $\frac{1}{2}\ln|x - 1| - \frac{1}{2}\ln|x + 1| + C$.
:::

Type $|x|$ as abs(x). Leave out the + C.

::: problem id=p1 type=numeric answer="1/2"
$\frac{1}{(x - 1)(x + 1)} = \frac{A}{x - 1} + \frac{B}{x + 1}$. What is A?
solution: Cover $(x - 1)$, put $x = 1$: $\frac{1}{2}$.
:::

::: problem id=p2 type=numeric answer="-1/2"
Same fraction: what is B?
solution: Cover $(x + 1)$, put $x = -1$: $\frac{1}{-2}$.
:::

::: problem id=p3 type=numeric answer="1"
$\frac{3}{x(x + 3)} = \frac{A}{x} + \frac{B}{x + 3}$. What is A?
hint: Cover x, put $x = 0$.
solution: $\frac{3}{0 + 3} = 1$.
:::

::: problem id=p4 type=expression answer="ln(abs(x-1))/2-ln(abs(x+1))/2" form=antiderivative
$\int \frac{1}{(x - 1)(x + 1)}\,dx = ?$
solution: $\frac{1}{2}\ln|x - 1| - \frac{1}{2}\ln|x + 1| + C$.
:::

::: problem id=p5 type=expression answer="ln(abs(x+2))" form=antiderivative
$\int \frac{1}{x + 2}\,dx = ?$
solution: $\ln|x + 2| + C$.
:::

::: problem id=p6 type=numeric answer="3"
$\frac{5x + 1}{(x + 1)(x - 1)} = \frac{A}{x + 1} + \frac{B}{x - 1}$. What is B?
hint: Cover $(x - 1)$, put $x = 1$.
solution: $\frac{5 + 1}{1 + 1} = 3$.
:::

::: problem id=p7 type=expression answer="ln(abs(x))-ln(abs(x+3))" form=antiderivative
$\int \frac{3}{x(x + 3)}\,dx = ?$
hint: A = 1 and B = −1.
solution: $\ln|x| - \ln|x + 3| + C$.
:::

::: problem id=p8 type=numeric answer="ln(4/3)"
$\int_2^3 \frac{1}{x(x - 1)}\,dx = ?$ (exact)
hint: $\frac{1}{x(x - 1)} = \frac{1}{x - 1} - \frac{1}{x}$.
solution: $[\ln(x - 1) - \ln x]_2^3 = (\ln 2 - \ln 3) - (0 - \ln 2) = 2\ln 2 - \ln 3 = \ln\frac{4}{3}$.
:::
