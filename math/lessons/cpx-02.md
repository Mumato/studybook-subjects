---
id: cpx-02
title: Complex arithmetic and complex roots
---
Complex numbers follow the usual algebra rules. Just remember that $i^2 = -1$.

::: rule
- **Add or subtract:** combine real parts and imaginary parts separately.
- **Multiply:** expand (FOIL), then replace $i^2$ by $-1$.
- The **conjugate** of $a + bi$ is $a - bi$. Their product is real: $(a + bi)(a - bi) = a^2 + b^2$.
- **Divide:** multiply top and bottom by the conjugate of the bottom.
- If $b^2 - 4ac < 0$, the quadratic formula still works: $\sqrt{b^2 - 4ac}$ becomes an imaginary number. The two roots are conjugates.
:::

::: example
$(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2$
$= 8 + 10i + 3 = 11 + 10i$.

$\frac{3 + i}{1 - i} = \frac{(3 + i)(1 + i)}{(1 - i)(1 + i)}$
$= \frac{3 + 4i + i^2}{1 + 1} = \frac{2 + 4i}{2} = 1 + 2i$.
:::

::: example
$x^2 - 4x + 13 = 0$: $D = 16 - 52 = -36$.

$\sqrt{-36} = 6i$, so $x = \frac{4 \pm 6i}{2} = 2 \pm 3i$.
:::

::: problem id=p1 type=numeric answer="-4"
$(3 + 2i) + (5 - 6i)$. What is the imaginary part?
solution: $(3 + 5) + (2 - 6)i = 8 - 4i$. Imaginary part $-4$.
:::

::: problem id=p2 type=numeric answer="5"
$(7 - i) - (2 + 4i)$. What is the real part?
solution: $(7 - 2) + (-1 - 4)i = 5 - 5i$. Real part 5.
:::

::: problem id=p3 type=numeric answer="11"
$(2 + 3i)(4 - i)$. What is the real part?
hint: FOIL, then $i^2 = -1$.
solution: $8 - 2i + 12i - 3i^2 = 11 + 10i$. Real part 11.
:::

::: problem id=p4 type=numeric answer="29"
$(5 + 2i)(5 - 2i) = ?$
solution: Conjugates: $5^2 + 2^2 = 29$.
:::

::: problem id=p5 type=choice
What is the conjugate of $-3 + 4i$?
- [x] $-3 - 4i$
- [ ] $3 - 4i$
- [ ] $3 + 4i$
- [ ] $4 - 3i$
solution: Keep the real part, change the sign of the imaginary part: $-3 - 4i$.
:::

::: problem id=p6 type=numeric answer="2"
$\frac{3 + i}{1 - i}$. What is the imaginary part?
hint: Multiply top and bottom by $1 + i$.
solution: $\frac{(3 + i)(1 + i)}{2} = \frac{2 + 4i}{2} = 1 + 2i$. Imaginary part 2.
:::

::: problem id=p7 type=choice
Solve $x^2 - 4x + 13 = 0$.
- [x] $x = 2 \pm 3i$
- [ ] $x = -2 \pm 3i$
- [ ] $x = 2 \pm 6i$
- [ ] no solution
solution: $D = 16 - 52 = -36$, $\sqrt{-36} = 6i$. $x = \frac{4 \pm 6i}{2} = 2 \pm 3i$.
:::

::: problem id=c1 type=numeric answer="1" creative=true
For which positive real number a is $(a + i)^2$ purely imaginary (real part 0)?
hint: Expand $(a + i)^2$ and find its real part.
solution: $(a + i)^2 = a^2 + 2ai + i^2 = (a^2 - 1) + 2ai$. Real part $a^2 - 1 = 0$, so $a = 1$. Then $(1 + i)^2 = 2i$.
:::

::: problem id=x1 type=numeric answer="3" set=extra
$(4 - 3i) + (-1 + 5i)$. What is the real part?
solution: $3 + 2i$. Real part 3.
:::

::: problem id=x2 type=numeric answer="9" set=extra
$(6 + 2i) - (6 - 7i)$. What is the imaginary part?
solution: $0 + (2 + 7)i = 9i$. Imaginary part 9.
:::

::: problem id=x3 type=numeric answer="15" set=extra
$3i(2 - 5i)$. What is the real part?
solution: $6i - 15i^2 = 15 + 6i$. Real part 15.
:::

::: problem id=x4 type=numeric answer="2" set=extra
$(1 + i)^2$. What is the imaginary part?
solution: $1 + 2i + i^2 = 2i$. Imaginary part 2.
:::

::: problem id=x5 type=numeric answer="13" set=extra
$(2 - 3i)(2 + 3i) = ?$
solution: $2^2 + 3^2 = 13$.
:::

::: problem id=x6 type=numeric answer="-1" set=extra
$(3 - 2i)(2 + i)$. What is the imaginary part?
solution: $6 + 3i - 4i - 2i^2 = 8 - i$. Imaginary part $-1$.
:::

::: problem id=x7 type=choice set=extra
What is the conjugate of $5i$?
- [x] $-5i$
- [ ] $5i$
- [ ] $5$
- [ ] $-5$
solution: $5i = 0 + 5i$, conjugate $0 - 5i = -5i$.
:::

::: problem id=x8 type=numeric answer="-4" set=extra
$\frac{10}{1 + 2i}$. What is the imaginary part?
solution: $\frac{10(1 - 2i)}{1 + 4} = 2(1 - 2i) = 2 - 4i$. Imaginary part $-4$.
:::

::: problem id=x9 type=numeric answer="3" set=extra
$\frac{4 + 2i}{1 + i}$. What is the real part?
solution: $\frac{(4 + 2i)(1 - i)}{2} = \frac{4 - 2i - 2i^2}{2} = \frac{6 - 2i}{2} = 3 - i$. Real part 3.
:::

::: problem id=x10 type=choice set=extra
Solve $x^2 + 25 = 0$.
- [x] $x = \pm 5i$
- [ ] $x = \pm 5$
- [ ] $x = -25$
- [ ] no solution
solution: $x^2 = -25$, $x = \pm 5i$.
:::

::: problem id=x11 type=choice set=extra
Solve $x^2 + 2x + 5 = 0$.
- [x] $x = -1 \pm 2i$
- [ ] $x = 1 \pm 2i$
- [ ] $x = -1 \pm 4i$
- [ ] $x = -2 \pm 4i$
solution: $D = 4 - 20 = -16$, $\sqrt{-16} = 4i$. $x = \frac{-2 \pm 4i}{2} = -1 \pm 2i$.
:::

::: problem id=x12 type=choice set=extra
Ken writes $(2 + i)(3 + i) = 6 + i^2 = 5$. What is right?
- [x] $5 + 5i$
- [ ] $5$
- [ ] $7 + 5i$
- [ ] $6 + 5i$
solution: He forgot the middle terms: $6 + 2i + 3i + i^2 = 5 + 5i$.
:::

::: problem id=x13 type=numeric answer="37" set=extra
Multiply $6 - i$ by its conjugate. What do you get?
solution: $(6 - i)(6 + i) = 36 + 1 = 37$.
:::

::: problem id=x14 type=numeric answer="-4" set=extra
$i(3 + 4i)$. What is the real part?
solution: $3i + 4i^2 = -4 + 3i$. Real part $-4$.
:::

::: problem id=x15 type=numeric answer="1" set=extra
$\frac{1 + i}{1 - i}$. What is the imaginary part?
solution: $\frac{(1 + i)^2}{(1 - i)(1 + i)} = \frac{2i}{2} = i$. Imaginary part 1.
:::

::: problem id=x16 type=choice set=extra
Solve $x^2 - 6x + 10 = 0$.
- [x] $x = 3 \pm i$
- [ ] $x = -3 \pm i$
- [ ] $x = 3 \pm 2i$
- [ ] $x = 2$ or $x = 4$
solution: $D = 36 - 40 = -4$. $x = \frac{6 \pm 2i}{2} = 3 \pm i$.
:::

::: problem id=x17 type=numeric answer="-1/2" set=extra
The roots of $2x^2 + 2x + 1 = 0$ are complex. What is their real part?
hint: Use the quadratic formula with $a = 2$.
solution: $D = 4 - 8 = -4$. $x = \frac{-2 \pm 2i}{4} = -\frac{1}{2} \pm \frac{1}{2}i$. Real part $-\frac{1}{2}$.
:::

::: problem id=x18 type=numeric answer="-4" set=extra
$(1 + i)^4 = ?$
hint: $(1 + i)^4 = \left((1 + i)^2\right)^2$.
solution: $(1 + i)^2 = 2i$, and $(2i)^2 = 4i^2 = -4$.
:::

::: problem id=x19 type=numeric answer="11/25" set=extra
$\frac{2 + i}{3 - 4i}$. What is the imaginary part?
hint: Multiply top and bottom by $3 + 4i$.
solution: Top: $6 + 8i + 3i + 4i^2 = 2 + 11i$. Bottom: $9 + 16 = 25$. So $\frac{2}{25} + \frac{11}{25}i$.
:::

::: problem id=x20 type=numeric answer="29" set=extra creative=true
$x^2 + bx + c = 0$ has real b and c, and one root is $2 + 5i$. What is c?
hint: The other root is the conjugate. Multiply $(x - (2 + 5i))(x - (2 - 5i))$.
solution: That is $(x - 2)^2 - (5i)^2 = (x - 2)^2 + 25$, which is $x^2 - 4x + 29$. So $c = 29$.
:::
