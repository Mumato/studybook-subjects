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
solution: $[\ln(x - 1) - \ln x]_2^3$ is $(\ln 2 - \ln 3) - (0 - \ln 2)$, which is $2\ln 2 - \ln 3 = \ln\frac{4}{3}$.
:::

::: problem id=x1 type=numeric answer="1/5" set=extra
$\frac{1}{(x - 2)(x + 3)} = \frac{A}{x - 2} + \frac{B}{x + 3}$. What is A?
solution: Cover $(x - 2)$, put $x = 2$: $\frac{1}{2 + 3} = \frac{1}{5}$.
:::

::: problem id=x2 type=numeric answer="-1/5" set=extra
Same fraction: what is B?
solution: Cover $(x + 3)$, put $x = -3$: $\frac{1}{-3 - 2} = -\frac{1}{5}$.
:::

::: problem id=x3 type=numeric answer="2" set=extra
$\frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}$. What is A?
solution: Cover $(x - 1)$, put $x = 1$: $\frac{1 + 5}{1 + 2} = 2$.
:::

::: problem id=x4 type=expression answer="ln(abs(x-2))/5-ln(abs(x+3))/5" form=antiderivative set=extra
$\int \frac{1}{(x - 2)(x + 3)}\,dx = ?$
solution: $A = \frac{1}{5}$, $B = -\frac{1}{5}$. So $\frac{1}{5}\ln|x - 2| - \frac{1}{5}\ln|x + 3| + C$.
:::

::: problem id=x5 type=expression answer="ln(abs(x-1))-ln(abs(x+4))" form=antiderivative set=extra
$\int \frac{5}{(x - 1)(x + 4)}\,dx = ?$
solution: $A = \frac{5}{5} = 1$, $B = \frac{5}{-5} = -1$. So $\ln|x - 1| - \ln|x + 4| + C$.
:::

::: problem id=x6 type=expression answer="2ln(abs(x-1))-ln(abs(x+2))" form=antiderivative set=extra
$\int \frac{x + 5}{(x - 1)(x + 2)}\,dx = ?$
solution: $A = 2$; for B put $x = -2$: $\frac{3}{-3} = -1$. So $2\ln|x - 1| - \ln|x + 2| + C$.
:::

::: problem id=x7 type=expression answer="ln(abs(x-3))/6-ln(abs(x+3))/6" form=antiderivative set=extra
$\int \frac{1}{x^2 - 9}\,dx = ?$
hint: Factor the bottom first.
solution: $x^2 - 9 = (x - 3)(x + 3)$. $A = \frac{1}{6}$, $B = -\frac{1}{6}$. So $\frac{1}{6}\ln|x - 3| - \frac{1}{6}\ln|x + 3| + C$.
:::

::: problem id=x8 type=choice set=extra
Which fraction needs long division **before** partial fractions?
- [ ] $\frac{1}{x^2 - 1}$
- [ ] $\frac{x}{x^2 - 1}$
- [x] $\frac{x^3}{x^2 - 1}$
- [ ] $\frac{3}{x(x + 1)}$
solution: Partial fractions need the top's degree **below** the bottom's. Only $\frac{x^3}{x^2 - 1}$ has degree 3 over degree 2.
:::

::: problem id=x9 type=expression answer="x^2/2-x+ln(abs(x+1))" form=antiderivative set=extra
$\int \frac{x^2}{x + 1}\,dx = ?$
hint: Divide first: $\frac{x^2}{x + 1} = x - 1 + \frac{1}{x + 1}$.
solution: Integrate each piece: $\frac{x^2}{2} - x + \ln|x + 1| + C$.
:::

::: problem id=x10 type=numeric answer="1" set=extra
A repeated factor gets one piece per power: $\frac{1}{x^2(x + 1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x + 1}$. What is B?
hint: Cover the whole $x^2$ and put $x = 0$.
solution: $\frac{1}{0 + 1} = 1$.
:::

::: problem id=x11 type=numeric answer="ln(3/2)" set=extra
$\int_1^2 \frac{2}{x(x + 2)}\,dx = ?$ (exact)
solution: $\frac{2}{x(x + 2)} = \frac{1}{x} - \frac{1}{x + 2}$. $[\ln x - \ln(x + 2)]_1^2$ is $(\ln 2 - \ln 4) - (0 - \ln 3)$, which is $\ln\frac{3}{2}$.
:::

::: problem id=x12 type=numeric answer="2" set=extra
For $\frac{x + 3}{(x - 1)(x + 1)} = \frac{A}{x - 1} + \frac{B}{x + 1}$ a student covered $(x - 1)$ but put in $x = -1$, getting $A = -1$. What is the correct A?
solution: Put in the root of the covered factor, $x = 1$: $\frac{1 + 3}{1 + 1} = 2$.
:::

::: problem id=x13 type=expression answer="5x+1" set=extra
Add $\frac{2}{x - 1} + \frac{3}{x + 2}$ into one fraction over $(x - 1)(x + 2)$. What is the top?
solution: $2(x + 2) + 3(x - 1) = 5x + 1$.
:::

::: problem id=x14 type=numeric answer="ln(2)" set=extra
$\int_0^2 \frac{3}{(x + 1)(x + 4)}\,dx = ?$ (exact)
solution: $A = 1$, $B = -1$. $[\ln(x + 1) - \ln(x + 4)]_0^2$ is $(\ln 3 - \ln 6) - (0 - \ln 4)$, which is $\ln\frac{3 \cdot 4}{6} = \ln 2$.
:::

::: problem id=x15 type=expression answer="ln(abs(x-1))+2ln(abs(x+2))" form=antiderivative set=extra
$\int \frac{3x}{(x - 1)(x + 2)}\,dx = ?$
solution: $A = \frac{3}{3} = 1$, $B = \frac{-6}{-3} = 2$. So $\ln|x - 1| + 2\ln|x + 2| + C$.
:::

::: problem id=x16 type=expression answer="ln(abs(x))" form=antiderivative set=extra
$\int \frac{x + 1}{x^2 + x}\,dx = ?$
hint: Factor the bottom. Does anything cancel?
solution: $\frac{x + 1}{x(x + 1)} = \frac{1}{x}$, so the answer is $\ln|x| + C$. No partial fractions needed.
:::

::: problem id=x17 type=expression answer="-ln(abs(x))+ln(abs(x-1))/2+ln(abs(x+1))/2" form=antiderivative set=extra
$\int \frac{1}{x(x - 1)(x + 1)}\,dx = ?$
hint: Three pieces. Cover each factor in turn.
solution: $x = 0$: $\frac{1}{(-1)(1)} = -1$. $x = 1$: $\frac{1}{2}$. $x = -1$: $\frac{1}{2}$. So $-\ln|x| + \frac{1}{2}\ln|x - 1| + \frac{1}{2}\ln|x + 1| + C$.
:::

::: problem id=x18 type=expression answer="-ln(abs(x))-1/x+ln(abs(x+1))" form=antiderivative set=extra
$\int \frac{1}{x^2(x + 1)}\,dx = ?$
hint: $B = 1$ and $C = 1$. Then find A by putting in $x = 1$.
solution: At $x = 1$: $\frac{1}{2} = A + 1 + \frac{1}{2}$, so $A = -1$. Integrate: $-\ln|x| - \frac{1}{x} + \ln|x + 1| + C$.
:::

::: problem id=x19 type=expression answer="x^2/2+ln(abs(x-1))/2+ln(abs(x+1))/2" form=antiderivative set=extra
$\int \frac{x^3}{x^2 - 1}\,dx = ?$
hint: Long division gives $x + \frac{x}{x^2 - 1}$.
solution: $\frac{x}{(x - 1)(x + 1)} = \frac{1/2}{x - 1} + \frac{1/2}{x + 1}$. Answer: $\frac{x^2}{2} + \frac{1}{2}\ln|x - 1| + \frac{1}{2}\ln|x + 1| + C$.
:::

::: problem id=x20 type=expression answer="ln(e^x+1)-ln(e^x+2)" form=antiderivative set=extra creative=true
$\int \frac{e^x}{(e^x + 1)(e^x + 2)}\,dx = ?$
hint: Substitute $u = e^x$ first.
solution: $du = e^x\,dx$: $\int \frac{du}{(u + 1)(u + 2)}$, which is $\ln|u + 1| - \ln|u + 2|$. Answer: $\ln(e^x + 1) - \ln(e^x + 2) + C$.
:::
