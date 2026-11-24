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
