---
id: quad-01
title: Square roots and completing the square
---
::: rule
- If $x^2 = k$ (with $k > 0$), then $x = \sqrt{k}$ or $x = -\sqrt{k}$. Don't forget the negative one!
- If $(x - h)^2 = k$, then $x = h \pm \sqrt{k}$.

**Completing the square** turns $x^2 + bx$ into a perfect square by adding $\left(\frac{b}{2}\right)^2$:
$x^2 + bx + \left(\frac{b}{2}\right)^2 = \left(x + \frac{b}{2}\right)^2$
:::

::: example
$(x - 2)^2 = 9$: $x - 2 = \pm 3$, so $x = 5$ or $x = -1$.
:::

::: example
$x^2 + 6x + 2 = 0$. Move the 2: $x^2 + 6x = -2$. Add $3^2 = 9$ to both sides: $(x + 3)^2 = 7$. So $x = -3 \pm \sqrt{7}$.
:::

Type square roots as sqrt(...), like -3+sqrt(7), -3-sqrt(7).

::: problem id=p1 type=multi answers="7;-7"
Solve $x^2 = 49$. Type both, like 1, -1.
solution: $x = 7$ or $x = -7$.
:::

::: problem id=p2 type=multi answers="5;-1"
Solve $(x - 2)^2 = 9$.
solution: $x - 2 = \pm 3$: $x = 5$ or $x = -1$.
:::

::: problem id=p3 type=multi answers="sqrt(12);-sqrt(12)"
Solve $x^2 = 12$. (You can leave the roots as sqrt.)
solution: $x = \pm\sqrt{12} = \pm 2\sqrt{3}$.
:::

::: problem id=p4 type=numeric answer="16"
To complete the square for $x^2 + 8x$, what number do you add?
hint: Half of 8, squared.
solution: $\left(\frac{8}{2}\right)^2 = 16$: $x^2 + 8x + 16 = (x + 4)^2$.
:::

::: problem id=p5 type=multi answers="-3+sqrt(7);-3-sqrt(7)"
Solve $x^2 + 6x + 2 = 0$ by completing the square.
solution: $(x + 3)^2 = 7$, so $x = -3 \pm \sqrt{7}$.
:::

::: problem id=p6 type=multi answers="6;-2"
Solve $x^2 - 4x = 12$ by completing the square.
hint: Add 4 to both sides.
solution: $x^2 - 4x + 4 = 16$, $(x - 2)^2 = 16$, $x - 2 = \pm 4$: $x = 6$ or $x = -2$.
:::

::: problem id=p7 type=choice
Solve $(x + 5)^2 = -4$.
- [ ] $x = -3$ or $x = -7$
- [ ] $x = -5$
- [x] no real solutions
solution: A square can never be negative, so there are **no real solutions**.
:::

::: problem id=p8 type=numeric answer="25"
$x^2 + 10x + \square$ is a perfect square. What goes in the box?
solution: $\left(\frac{10}{2}\right)^2 = 25$.
:::

::: problem id=x1 type=multi answers="9;-9" set=extra
Solve $x^2 = 81$.
solution: $x = \pm 9$.
:::

::: problem id=x2 type=multi answers="sqrt(7);-sqrt(7)" set=extra
Solve $x^2 = 7$.
solution: $x = \pm\sqrt{7}$.
:::

::: problem id=x3 type=multi answers="1;-7" set=extra
Solve $(x + 3)^2 = 16$.
solution: $x + 3 = \pm 4$: $x = 1$ or $x = -7$.
:::

::: problem id=x4 type=multi answers="4+sqrt(5);4-sqrt(5)" set=extra
Solve $(x - 4)^2 = 5$.
solution: $x - 4 = \pm\sqrt{5}$: $x = 4 \pm \sqrt{5}$.
:::

::: problem id=x5 type=numeric answer="36" set=extra
To complete the square for $x^2 - 12x$, what number do you add?
solution: $\left(\frac{-12}{2}\right)^2 = 36$: $x^2 - 12x + 36 = (x - 6)^2$.
:::

::: problem id=x6 type=numeric answer="25/4" set=extra
$x^2 + 5x + \square$ is a perfect square. What goes in the box?
solution: $\left(\frac{5}{2}\right)^2 = \frac{25}{4}$.
:::

::: problem id=x7 type=multi answers="4;-4" set=extra
Solve $3x^2 = 48$.
solution: $x^2 = 16$: $x = \pm 4$.
:::

::: problem id=x8 type=multi answers="4;-2" set=extra
Solve $2(x - 1)^2 = 18$.
solution: $(x - 1)^2 = 9$, $x - 1 = \pm 3$: 4 and $-2$.
:::

::: problem id=x9 type=numeric answer="4" set=extra
$x^2 + 8x + 16 = (x + \square)^2$. What goes in the box?
solution: Half of 8 is 4: $(x + 4)^2$.
:::

::: problem id=x10 type=multi answers="2;-4" set=extra
Solve $x^2 + 2x - 8 = 0$ by completing the square.
solution: $x^2 + 2x = 8$, add 1: $(x + 1)^2 = 9$. $x + 1 = \pm 3$: 2 and $-4$.
:::

::: problem id=x11 type=multi answers="3+sqrt(5);3-sqrt(5)" set=extra
Solve $x^2 - 6x + 4 = 0$ by completing the square.
solution: $x^2 - 6x = -4$, add 9: $(x - 3)^2 = 5$. $x = 3 \pm \sqrt{5}$.
:::

::: problem id=x12 type=choice set=extra
Leo writes: "$x^2 = 25$, so $x = 5$." What is wrong?
- [x] He forgot $x = -5$
- [ ] It should be $x = 12.5$
- [ ] It should be $x = 625$
- [ ] Nothing is wrong
solution: $(-5)^2 = 25$ too: $x = \pm 5$.
:::

::: problem id=x13 type=numeric answer="13" set=extra
A square tile has area 169 cm². How long is a side, in cm?
solution: $s^2 = 169$, and a length is positive: $s = 13$.
:::

::: problem id=x14 type=numeric answer="4" set=extra
A dropped stone falls $d = 5t^2$ metres in t seconds. How many seconds to fall 80 m?
solution: $5t^2 = 80$, $t^2 = 16$, $t = 4$ (time is positive).
:::

::: problem id=x15 type=choice set=extra
Solve $(x - 2)^2 = 0$.
- [x] only $x = 2$
- [ ] $x = 2$ or $x = -2$
- [ ] no real solutions
- [ ] $x = 0$
solution: $x - 2 = 0$, so $x = 2$, just one solution.
:::

::: problem id=x16 type=multi answers="-2+sqrt(5);-2-sqrt(5)" set=extra
Solve $x^2 + 4x = 1$ by completing the square.
solution: Add 4: $(x + 2)^2 = 5$. $x = -2 \pm \sqrt{5}$.
:::

::: problem id=x17 type=multi answers="1;-5" set=extra
Solve $2x^2 + 8x - 10 = 0$ by completing the square.
hint: Divide everything by 2 first.
solution: $x^2 + 4x = 5$, add 4: $(x + 2)^2 = 9$. $x + 2 = \pm 3$: 1 and $-5$.
:::

::: problem id=x18 type=numeric answer="-18" set=extra
Write $x^2 - 10x + 7$ as $(x - h)^2 + k$. What is k?
hint: $x^2 - 10x + 25 = (x - 5)^2$.
solution: $x^2 - 10x + 7 = (x - 5)^2 - 25 + 7$, which is $(x - 5)^2 - 18$.
:::

::: problem id=x19 type=multi answers="1;-4" set=extra
Solve $x^2 + 3x - 4 = 0$ by completing the square.
hint: Add $\left(\frac{3}{2}\right)^2 = \frac{9}{4}$.
solution: $\left(x + \frac{3}{2}\right)^2 = 4 + \frac{9}{4} = \frac{25}{4}$. $x = -\frac{3}{2} \pm \frac{5}{2}$: 1 and $-4$.
:::

::: problem id=x20 type=numeric answer="6" set=extra creative=true
A square photo of side x cm gets a 2 cm frame all the way round. Photo and frame together cover 100 cm². What is x?
hint: The framed square has side $x + 4$.
solution: $(x + 4)^2 = 100$, $x + 4 = 10$ (lengths are positive), so $x = 6$.
:::
