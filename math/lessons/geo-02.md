---
id: geo-02
title: Perimeter and area
---
::: rule
**Perimeter** is the distance around a shape: add all the sides.

**Area** is the space inside, measured in square units (cm², m²):
- rectangle: $A = l \times w$
- square: $A = s^2$
- triangle: $A = \frac{1}{2} \times b \times h$ (b is the base, h the height straight up from it)
:::

::: example
A rectangle 8 cm by 5 cm. Perimeter: $8 + 5 + 8 + 5 = 26$ cm. Area: $8 \times 5 = 40$ cm².
:::

::: graph
x -1..9
y -1..6
axes off
grid off
polygon 0,0 8,0 8,5 0,5 fill
label 4,-0.6 8 cm
label 8.7,2.5 5
:::

::: example
A triangle with base 10 m and height 6 m: $A = \frac{1}{2} \times 10 \times 6 = 30$ m².
:::

::: graph
x -1..11
y -1..7
axes off
grid off
polygon 0,0 10,0 3,6 fill
segment 3,0 3,6 6 blue
label 5,-0.6 base 10
:::

::: problem id=p1 type=numeric answer="22"
What is the perimeter of a rectangle 7 cm by 4 cm?
solution: $7 + 4 + 7 + 4 = 22$ cm.
:::

::: problem id=p2 type=numeric answer="54"
What is the area of a rectangle 9 m by 6 m?
solution: $9 \times 6 = 54$ m².
:::

::: problem id=p3 type=numeric answer="25"
What is the area of a square with sides of 5 cm?
solution: $5^2 = 25$ cm².
:::

::: problem id=p4 type=numeric answer="30"
What is the area of a triangle with base 12 cm and height 5 cm?
hint: Half of base times height.
solution: $\frac{1}{2} \times 12 \times 5 = 30$ cm².
:::

::: problem id=p5 type=numeric answer="9"
A square has a perimeter of 36 cm. How long is each side?
solution: A square has 4 equal sides: $36 \div 4 = 9$ cm.
:::

::: problem id=p6 type=numeric answer="14"
A room is 4 m by 3.5 m. What is its floor area in m²?
solution: $4 \times 3.5 = 14$ m².
:::

::: problem id=p7 type=numeric answer="8"
A rectangle has an area of 48 cm² and a width of 6 cm. How long is it?
hint: Area = length × width, so length = area ÷ width.
solution: $48 \div 6 = 8$ cm.
:::

::: problem id=p8 type=numeric answer="14"
What is the area of a triangle with base 7 m and height 4 m?
solution: $\frac{1}{2} \times 7 \times 4 = 14$ m².
:::

::: problem id=x1 type=numeric answer="34" set=extra
What is the perimeter of a rectangle 12 cm by 5 cm?
solution: $12 + 5 + 12 + 5 = 34$ cm.
:::

::: problem id=x2 type=numeric answer="77" set=extra
What is the area of a rectangle 11 m by 7 m?
solution: $11 \times 7 = 77$ m².
:::

::: problem id=x3 type=numeric answer="81" set=extra
What is the area of a square with sides of 9 cm?
solution: $9^2 = 81$ cm².
:::

::: problem id=x4 type=numeric answer="63" set=extra
What is the area of a triangle with base 14 cm and height 9 cm?
solution: $\frac{1}{2} \times 14 \times 9 = 63$ cm².
:::

::: problem id=x5 type=numeric answer="30" set=extra
What is the perimeter of a square with sides of 7.5 cm?
solution: $4 \times 7.5 = 30$ cm.
:::

::: problem id=x6 type=numeric answer="21" set=extra
A triangle has sides 5 cm, 7 cm and 9 cm. What is its perimeter?
solution: $5 + 7 + 9 = 21$ cm.
:::

::: problem id=x7 type=numeric answer="10.5" set=extra
What is the area of a rectangle 2.5 m by 4.2 m?
solution: $2.5 \times 4.2 = 10.5$ m².
:::

::: problem id=x8 type=numeric answer="6" set=extra
A rectangle has an area of 72 cm² and a length of 12 cm. How wide is it?
solution: $72 \div 12 = 6$ cm.
:::

::: problem id=x9 type=numeric answer="8" set=extra
A triangle has an area of 40 cm² and a base of 10 cm. What is its height?
hint: $\frac{1}{2} \times 10 \times h = 40$.
solution: $5h = 40$, so $h = 8$ cm.
:::

::: problem id=x10 type=choice set=extra
A floor is 5 m by 4 m. What is its area?
- [x] 20 m²
- [ ] 20 m
- [ ] 18 m
- [ ] 18 m²
solution: $5 \times 4 = 20$, and area is in square units: 20 m². (18 m is the perimeter.)
:::

::: problem id=x11 type=numeric answer="24" set=extra
Tom says a triangle with base 8 cm and height 6 cm has area 48 cm². What is the correct area?
solution: He forgot the half: $\frac{1}{2} \times 8 \times 6 = 24$ cm².
:::

::: problem id=x12 type=numeric answer="360" set=extra
Carpet costs 15 dollars per m². How much does it cost to carpet a room 6 m by 4 m?
solution: Area $6 \times 4 = 24$ m². Cost $24 \times 15 = 360$ dollars.
:::

::: problem id=x13 type=numeric answer="12" set=extra
The triangle below is drawn on a grid of 1 cm squares. What is its area in cm²?
graph:
x -1..7
y -1..5
axes off
polygon 0,0 6,0 2,4 fill
hint: Count the squares along the base, and how many squares up the top corner is.
solution: Base along the bottom: 6 cm. Height (how far up the top corner is): 4 cm. Area $\frac{1}{2} \times 6 \times 4 = 12$ cm².
:::

::: problem id=x14 type=numeric answer="68" set=extra
A rectangle 10 m by 8 m has a 4 m by 3 m rectangle cut out of one corner. What is the area of the shape that is left?
hint: Big area minus the cut-out area.
solution: $10 \times 8 - 4 \times 3 = 80 - 12 = 68$ m².
:::

::: problem id=x15 type=numeric answer="49" set=extra
A square has a perimeter of 28 cm. What is its area?
hint: Find the side first.
solution: Side $28 \div 4 = 7$ cm. Area $7^2 = 49$ cm².
:::

::: problem id=x16 type=numeric answer="54" set=extra
A rectangle has a perimeter of 30 cm and a length of 9 cm. What is its area?
hint: Length plus width is half the perimeter.
solution: $9 + w = 15$, so $w = 6$. Area $9 \times 6 = 54$ cm².
:::

::: problem id=x17 type=numeric answer="30" set=extra
A garden 8 m by 5 m has a path 1 m wide all the way around it. What is the area of the path?
hint: The garden plus path is a bigger rectangle: add 1 m on each side.
solution: Outer rectangle $10 \times 7 = 70$ m². Garden $8 \times 5 = 40$ m². Path $70 - 40 = 30$ m².
:::

::: problem id=x18 type=choice set=extra
The sides of a square are doubled. What happens to its area?
- [ ] It doubles.
- [ ] It triples.
- [x] It becomes 4 times as big.
- [ ] It stays the same.
hint: Try side 3, then side 6.
solution: Side s gives $s^2$; side $2s$ gives $(2s)^2 = 4s^2$. Four times as big.
:::

::: problem id=x19 type=numeric answer="13.2" set=extra
A wall is 5 m by 3 m. It has a window 1.5 m by 1.2 m. What area of wall needs paint?
hint: Subtract the window.
solution: $5 \times 3 = 15$ and $1.5 \times 1.2 = 1.8$. Paint $15 - 1.8 = 13.2$ m².
:::

::: problem id=x20 type=numeric answer="25" set=extra creative=true
A rectangle has whole-number sides and a perimeter of 20 cm. What is the largest area it can have?
hint: Length plus width is 10. List the pairs.
solution: Pairs: $1 \times 9 = 9$, $2 \times 8 = 16$, $3 \times 7 = 21$, $4 \times 6 = 24$, $5 \times 5 = 25$. The largest is **25** cm² (a square).
:::
