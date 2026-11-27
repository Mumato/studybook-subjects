---
id: cpx-01
title: Imaginary and complex numbers
---
No real number squares to a negative. So we invent one: the **imaginary unit** i.

::: rule
- $i = \sqrt{-1}$, so $i^2 = -1$.
- For $a > 0$: $\sqrt{-a} = i\sqrt{a}$. Take the i out **first**, then simplify.
- Powers of i repeat every 4: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. For $i^n$, divide n by 4 and use the remainder.
- A **complex number** is $a + bi$: a is the **real part**, b the **imaginary part** (b alone, without the i).
- $a + bi = c + di$ only when $a = c$ **and** $b = d$.
:::

::: example
$\sqrt{-49} = i\sqrt{49} = 7i$.

$\sqrt{-12} = i\sqrt{12} = 2i\sqrt{3}$.

Careful: $\sqrt{-4} \cdot \sqrt{-9} = 2i \cdot 3i = 6i^2 = -6$, not $\sqrt{36} = 6$.
:::

::: example
$i^{23}$: $23 = 4 \cdot 5 + 3$, remainder 3. So $i^{23} = i^3 = -i$.

$3 - 5i$ has real part 3 and imaginary part $-5$.
:::

::: problem id=p1 type=numeric answer="6"
$\sqrt{-36} = \square i$. What goes in the box?
solution: $i\sqrt{36} = 6i$.
:::

::: problem id=p2 type=numeric answer="-1"
What is $i^2$?
solution: By definition $i^2 = -1$.
:::

::: problem id=p3 type=choice
What is $i^3$?
- [x] $-i$
- [ ] $i$
- [ ] $-1$
- [ ] $1$
solution: $i^3 = i^2 \cdot i = -1 \cdot i = -i$.
:::

::: problem id=p4 type=choice
What is $i^{10}$?
- [ ] $1$
- [x] $-1$
- [ ] $i$
- [ ] $-i$
hint: Divide 10 by 4. What is left over?
solution: $10 = 4 \cdot 2 + 2$, so $i^{10} = i^2 = -1$.
:::

::: problem id=p5 type=numeric answer="4"
What is the real part of $4 - 7i$?
solution: The part without i: **4**.
:::

::: problem id=p6 type=numeric answer="-7"
What is the imaginary part of $4 - 7i$?
solution: The number in front of i, sign included: $-7$.
:::

::: problem id=p7 type=numeric answer="5"
$\sqrt{-50} = \square i\sqrt{2}$. What goes in the box?
solution: $i\sqrt{50} = i\sqrt{25 \cdot 2} = 5i\sqrt{2}$.
:::

::: problem id=p8 type=numeric answer="8"
$x + 3i = 5 + yi$ with x and y real. What is $x + y$?
hint: Match real parts and imaginary parts.
solution: Real parts: $x = 5$. Imaginary parts: $y = 3$. So $x + y = 8$.
:::

::: problem id=x1 type=numeric answer="9" set=extra
$\sqrt{-81} = \square i$. What goes in the box?
solution: $i\sqrt{81} = 9i$.
:::

::: problem id=x2 type=numeric answer="2" set=extra
$\sqrt{-20} = \square i\sqrt{5}$. What goes in the box?
solution: $i\sqrt{4 \cdot 5} = 2i\sqrt{5}$.
:::

::: problem id=x3 type=choice set=extra
What is $i^4$?
- [x] $1$
- [ ] $-1$
- [ ] $i$
- [ ] $4i$
solution: $i^4 = (i^2)^2 = (-1)^2 = 1$.
:::

::: problem id=x4 type=choice set=extra
What is $i^7$?
- [ ] $i$
- [ ] $-1$
- [x] $-i$
- [ ] $1$
solution: $7 = 4 + 3$: $i^7 = i^3 = -i$.
:::

::: problem id=x5 type=choice set=extra
What is $i^{25}$?
- [x] $i$
- [ ] $-i$
- [ ] $1$
- [ ] $-1$
solution: $25 = 4 \cdot 6 + 1$: $i^{25} = i$.
:::

::: problem id=x6 type=numeric answer="1" set=extra
What is $i^{100}$?
solution: 100 is a multiple of 4: $i^{100} = (i^4)^{25} = 1$.
:::

::: problem id=x7 type=numeric answer="0" set=extra
What is the real part of $6i$?
solution: $6i = 0 + 6i$: the real part is **0**.
:::

::: problem id=x8 type=numeric answer="1" set=extra
What is the imaginary part of $-2 + i$?
solution: $i = 1i$: the imaginary part is **1**.
:::

::: problem id=x9 type=choice set=extra
Which number is purely imaginary (real part 0, imaginary part not 0)?
- [x] $5i$
- [ ] $5$
- [ ] $5 + i$
- [ ] $i^2$
solution: $5i = 0 + 5i$. Note $i^2 = -1$ is real.
:::

::: problem id=x10 type=numeric answer="0" set=extra
$i^2 + i^4 = ?$
solution: $-1 + 1 = 0$.
:::

::: problem id=x11 type=numeric answer="-6" set=extra
$\sqrt{-4} \cdot \sqrt{-9} = ?$
hint: Write each as a multiple of i first.
solution: $2i \cdot 3i = 6i^2 = -6$.
:::

::: problem id=x12 type=choice set=extra
Ali writes $\sqrt{-4} \cdot \sqrt{-9} = \sqrt{36} = 6$. What is wrong?
- [x] $\sqrt{a}\sqrt{b} = \sqrt{ab}$ fails for negatives; the answer is $-6$
- [ ] Nothing, 6 is right
- [ ] The answer is $6i$
- [ ] The answer is $-6i$
solution: Take the i out first: $2i \cdot 3i = 6i^2 = -6$.
:::

::: problem id=x13 type=numeric answer="-4" set=extra
$(2i)^2 = ?$
solution: $2^2 \cdot i^2 = 4(-1) = -4$.
:::

::: problem id=x14 type=numeric answer="2" set=extra
$2x + 6i = 10 + 3yi$ with x and y real. What is y?
solution: Imaginary parts: $6 = 3y$, so $y = 2$. (And $x = 5$.)
:::

::: problem id=x15 type=numeric answer="0" set=extra
$i + i^2 + i^3 + i^4 = ?$
solution: $i - 1 - i + 1 = 0$.
:::

::: problem id=x16 type=choice set=extra
$\sqrt{-25} + \sqrt{-16} = ?$
- [x] $9i$
- [ ] $\sqrt{-41}$
- [ ] $-9$
- [ ] $20i$
solution: $5i + 4i = 9i$.
:::

::: problem id=x17 type=numeric answer="-3" set=extra
$(x - 1) + (y + 2)i = 3 - 5i$ with x and y real. What is $x + y$?
hint: Set real parts equal, then imaginary parts.
solution: $x - 1 = 3$, so $x = 4$. $y + 2 = -5$, so $y = -7$. $x + y = -3$.
:::

::: problem id=x18 type=choice set=extra
Solve $x^2 = -9$.
- [x] $x = \pm 3i$
- [ ] $x = \pm 3$
- [ ] $x = 3i$ only
- [ ] no solution at all
solution: $x = \pm\sqrt{-9} = \pm 3i$. Check: $(3i)^2 = 9i^2 = -9$.
:::

::: problem id=x19 type=numeric answer="-1" set=extra
What is the real part of $i^{42} + i^{43}$?
hint: Find the remainders of 42 and 43 when divided by 4.
solution: $i^{42} = i^2 = -1$ and $i^{43} = i^3 = -i$. Sum $-1 - i$: real part $-1$.
:::

::: problem id=x20 type=numeric answer="1" set=extra creative=true
What is the imaginary part of $i + i^2 + i^3 + \cdots + i^{50}$?
hint: Every block of four powers in a row adds to 0.
solution: $i^1$ to $i^{48}$ make 12 blocks that add to 0. Left: $i^{49} + i^{50} = i - 1$. Imaginary part **1**.
:::
