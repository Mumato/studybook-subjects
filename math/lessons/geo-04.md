---
id: geo-04
title: The Pythagorean theorem
---
::: rule
In a **right triangle** (one 90° angle), the side opposite the right angle is the **hypotenuse** c, the longest side. The other two sides a and b are the **legs**:

$$a^2 + b^2 = c^2$$

To find a leg instead: $a^2 = c^2 - b^2$.
:::

::: example
Legs 3 and 4: $c^2 = 9 + 16 = 25$, so $c = 5$.
:::

::: graph
x -1..5
y -1..4
axes off
grid off
polygon 0,0 4,0 4,3 fill
segment 0,0 4,0 4
segment 4,0 4,3 3
segment 0,0 4,3 c = 5 red
:::

::: example
Hypotenuse 13 and one leg 5: $a^2 = 169 - 25 = 144$, so $a = 12$.
:::

::: problem id=p1 type=numeric answer="10"
A right triangle has legs 6 and 8. How long is the hypotenuse?
solution: $c^2 = 36 + 64 = 100$, so $c = 10$.
:::

::: problem id=p2 type=numeric answer="13"
A right triangle has legs 5 and 12. How long is the hypotenuse?
solution: $c^2 = 25 + 144 = 169$, so $c = 13$.
:::

::: problem id=p3 type=numeric answer="8"
A right triangle has hypotenuse 10 and one leg 6. How long is the other leg?
hint: Subtract the squares.
solution: $a^2 = 100 - 36 = 64$, so $a = 8$.
:::

::: problem id=p4 type=numeric answer="sqrt(2)" tolerance="0.01"
A right triangle has both legs equal to 1. How long is the hypotenuse? Type sqrt(2) or round to hundredths.
solution: $c^2 = 1 + 1 = 2$, so $c = \sqrt{2} \approx 1.41$.
:::

::: problem id=p5 type=text answers="yes"
Can a triangle with sides 7, 24 and 25 be a right triangle? Type yes or no.
solution: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$, so **yes**.
:::

::: problem id=p6 type=numeric answer="4"
A 5 m ladder leans on a wall with its foot 3 m from the wall. How high up the wall does it reach, in m?
solution: $h^2 = 25 - 9 = 16$, so $h = 4$ m.
:::

::: problem id=p7 type=numeric answer="15"
A rectangle is 9 cm by 12 cm. How long is its diagonal?
hint: The diagonal makes a right triangle with two sides.
solution: $d^2 = 81 + 144 = 225$, so $d = 15$ cm.
:::

::: problem id=p8 type=numeric answer="sqrt(13)" tolerance="0.01"
A right triangle has legs 2 and 3. How long is the hypotenuse? Type sqrt(13) or round to hundredths.
solution: $c^2 = 4 + 9 = 13$, so $c = \sqrt{13} \approx 3.61$.
:::

::: problem id=c1 type=numeric answer="50" creative=true
A square has a diagonal of 10 cm. What is its area in cm²?
hint: The diagonal is the hypotenuse of a right triangle whose legs are two sides of the square.
solution: $s^2 + s^2 = 10^2$, so $2s^2 = 100$ and $s^2 = 50$. The area is $s^2 = 50$ cm².
:::
