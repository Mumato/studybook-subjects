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

::: problem id=x1 type=numeric answer="41" set=extra
A right triangle has legs 9 and 40. How long is the hypotenuse?
solution: $c^2 = 81 + 1600 = 1681$, so $c = 41$.
:::

::: problem id=x2 type=numeric answer="17" set=extra
A right triangle has legs 8 and 15. How long is the hypotenuse?
solution: $c^2 = 64 + 225 = 289$, so $c = 17$.
:::

::: problem id=x3 type=numeric answer="24" set=extra
A right triangle has hypotenuse 25 and one leg 7. How long is the other leg?
solution: $a^2 = 625 - 49 = 576$, so $a = 24$.
:::

::: problem id=x4 type=numeric answer="24" set=extra
A right triangle has hypotenuse 26 and one leg 10. How long is the other leg?
solution: $a^2 = 676 - 100 = 576$, so $a = 24$.
:::

::: problem id=x5 type=numeric answer="sqrt(5)" tolerance="0.01" set=extra
A right triangle has legs 1 and 2. How long is the hypotenuse? Type sqrt(5) or round to hundredths.
solution: $c^2 = 1 + 4 = 5$, so $c = \sqrt{5} \approx 2.24$.
:::

::: problem id=x6 type=numeric answer="29" set=extra
A right triangle has legs 20 and 21. How long is the hypotenuse?
solution: $c^2 = 400 + 441 = 841$, so $c = 29$.
:::

::: problem id=x7 type=text answers="no" set=extra
Can a triangle with sides 6, 8 and 11 be a right triangle? Type yes or no.
solution: $6^2 + 8^2 = 100$, but $11^2 = 121$. Not equal, so **no**.
:::

::: problem id=x8 type=choice set=extra
A right triangle has sides 5, 12 and 13. Which side is the hypotenuse?
- [ ] 5
- [ ] 12
- [x] 13
solution: The hypotenuse is always the longest side: 13. ($25 + 144 = 169$.)
:::

::: problem id=x9 type=numeric answer="6" set=extra
Jo needs the missing leg of a right triangle with hypotenuse 10 and leg 8. She adds the squares and gets $\sqrt{164}$. What is the correct length?
solution: For a leg, subtract: $a^2 = 100 - 64 = 36$, so $a = 6$.
:::

::: problem id=x10 type=numeric answer="12" set=extra
A 13 m ladder leans on a wall with its foot 5 m from the wall. How high up the wall does it reach?
solution: $h^2 = 169 - 25 = 144$, so $h = 12$ m.
:::

::: problem id=x11 type=numeric answer="30" set=extra
A TV screen is 24 inches wide and 18 inches tall. How long is its diagonal?
solution: $d^2 = 576 + 324 = 900$, so $d = 30$ inches.
:::

::: problem id=x12 type=numeric answer="25" set=extra
You walk 7 km east, then 24 km north. How far are you from your start, in a straight line?
solution: $d^2 = 49 + 576 = 625$, so $d = 25$ km.
:::

::: problem id=x13 type=numeric answer="5" set=extra
The grid below has squares 1 unit wide. How far apart are points A and B, in a straight line?
graph:
x 0..6
y 0..7
axes off
point 1,2 A
point 4,6 B
hint: From A to B is across 3, up 4. Those are the legs.
solution: $d^2 = 3^2 + 4^2 = 25$, so $d = 5$.
:::

::: problem id=x14 type=numeric answer="5sqrt(2)" tolerance="0.01" set=extra
A square has sides of 5 cm. How long is its diagonal? Type 5sqrt(2) or round to hundredths.
solution: $d^2 = 25 + 25 = 50$, so $d = \sqrt{50} = 5\sqrt{2} \approx 7.07$ cm.
:::

::: problem id=x15 type=numeric answer="8" set=extra
A triangle has sides 10, 10 and a base of 12. How tall is it (from the middle of the base to the top)?
hint: The height cuts the base in half, making a right triangle with legs 6 and h.
solution: $h^2 = 100 - 36 = 64$, so $h = 8$.
:::

::: problem id=x16 type=numeric answer="120" set=extra
A rectangle has a diagonal of 17 cm and one side of 8 cm. What is its area?
hint: First find the other side.
solution: $s^2 = 289 - 64 = 225$, so $s = 15$. Area $8 \times 15 = 120$ cm².
:::

::: problem id=x17 type=numeric answer="40" set=extra
A park is a rectangle 60 m by 80 m. How many metres do you save by walking along the diagonal instead of along two edges?
hint: Diagonal: $\sqrt{60^2 + 80^2}$.
solution: Edges: $60 + 80 = 140$. Diagonal: $\sqrt{3600 + 6400} = 100$. Saved: $40$ m.
:::

::: problem id=x18 type=numeric answer="3" set=extra
A right triangle has legs x and $2x$ and hypotenuse $\sqrt{45}$. How long is the shorter leg?
hint: $x^2 + (2x)^2 = 45$.
solution: $x^2 + 4x^2 = 5x^2 = 45$, so $x^2 = 9$ and $x = 3$.
:::

::: problem id=x19 type=numeric answer="sqrt(136)" tolerance="0.05" set=extra
A wire runs from the top of a 10 m pole to the ground, 6 m from the foot of the pole. How long is the wire, to the nearest tenth of a metre?
hint: The pole and the ground are the legs.
solution: $w^2 = 100 + 36 = 136$, so $w = \sqrt{136} \approx 11.7$ m.
:::

::: problem id=x20 type=numeric answer="13" set=extra creative=true
A box is 3 cm by 4 cm by 12 cm. How long is the longest straight stick that fits inside, from one corner to the opposite corner?
hint: First find the diagonal of the 3 by 4 bottom. Then use it with the height 12.
solution: Bottom diagonal: $\sqrt{9 + 16} = 5$. Then $\sqrt{5^2 + 12^2} = \sqrt{169} = 13$ cm.
:::
