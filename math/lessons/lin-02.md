---
id: lin-02
title: Rearranging formulas
---
::: rule
To solve a formula **for** one letter, treat all the other letters like numbers and undo the operations around the one you want, exactly as with an equation.
:::

::: example
Solve $d = rt$ for t. Divide both sides by r: $t = \frac{d}{r}$.
:::

::: example
Solve $p = 2l + 2w$ for w. Subtract $2l$: $p - 2l = 2w$. Divide by 2: $w = \frac{p - 2l}{2}$.
:::

Use the same letters in your answer, like d/r.

::: problem id=p1 type=expression answer="d/r" vars="d,r"
Solve $d = rt$ for t.
solution: $t = \frac{d}{r}$.
:::

::: problem id=p2 type=expression answer="a/w" vars="a,w"
Solve $a = lw$ for l.
solution: $l = \frac{a}{w}$.
:::

::: problem id=p3 type=expression answer="y-m*x" vars="y,m,x"
Solve $y = mx + b$ for b.
hint: Subtract mx from both sides.
solution: $b = y - mx$.
:::

::: problem id=p4 type=expression answer="c/(2pi)" vars="c"
Solve $c = 2\pi r$ for r.
solution: $r = \frac{c}{2\pi}$, typed c/(2pi).
:::

::: problem id=p5 type=numeric answer="100"
Use $F = \frac{9}{5}C + 32$. What is C when $F = 212$?
hint: Subtract 32 first.
solution: $180 = \frac{9}{5}C$, so $C = 180 \times \frac{5}{9} = 100$.
:::

::: problem id=p6 type=expression answer="(p-2w)/2" vars="p,w"
Solve $p = 2l + 2w$ for l.
solution: $l = \frac{p - 2w}{2}$.
:::

::: problem id=p7 type=expression answer="i/(p*t)" vars="i,p,t"
Simple interest is $i = prt$. Solve for r.
solution: $r = \frac{i}{pt}$, typed i/(p*t).
:::

::: problem id=p8 type=numeric answer="11"
A rectangle has perimeter 30 and width 4. How long is it?
hint: $30 = 2l + 2 \times 4$.
solution: $30 = 2l + 8$, $2l = 22$, $l = 11$.
:::

::: problem id=c1 type=multi answers="4;5" creative=true
Find every integer x with both $x > 2x - 6$ and $3x > 9$. Type them all, like 1, 2.
hint: Solve each inequality, then look for numbers that fit both.
solution: $x > 2x - 6$ gives $x < 6$. $3x > 9$ gives $x > 3$. The integers between: **4 and 5**.
:::

::: problem id=x1 type=expression answer="p/4" vars="p" set=extra
Solve $p = 4s$ for s.
solution: Divide by 4: $s = \frac{p}{4}$.
:::

::: problem id=x2 type=expression answer="v/(l*w)" vars="v,l,w" set=extra
Solve $v = lwh$ for h.
solution: Divide by $lw$: $h = \frac{v}{lw}$, typed v/(l*w).
:::

::: problem id=x3 type=expression answer="b-a" vars="a,b" set=extra
Solve $a = b - c$ for c.
solution: Add c: $a + c = b$. Subtract a: $c = b - a$.
:::

::: problem id=x4 type=expression answer="(y+6)/3" vars="y" set=extra
Solve $y = 3x - 6$ for x.
solution: $y + 6 = 3x$, so $x = \frac{y + 6}{3}$.
:::

::: problem id=x5 type=expression answer="2a-b" vars="a,b" set=extra
Solve $a = \frac{b + c}{2}$ for c.
solution: Multiply by 2: $2a = b + c$. So $c = 2a - b$.
:::

::: problem id=x6 type=expression answer="m*k" vars="m,k" set=extra
Solve $m = \frac{n}{k}$ for n.
solution: Multiply by k: $n = mk$.
:::

::: problem id=x7 type=numeric answer="2.5" set=extra
Use $d = rt$. A car drives 150 km at 60 km per hour. How many hours does it take?
solution: $t = \frac{d}{r} = \frac{150}{60} = 2.5$ hours.
:::

::: problem id=x8 type=numeric answer="10" set=extra
Use $C = \frac{5}{9}(F - 32)$. What is C when $F = 50$?
solution: $\frac{5}{9}(50 - 32) = \frac{5}{9} \times 18 = 10$.
:::

::: problem id=x9 type=expression answer="(12-2x)/3" vars="x" set=extra
Solve $2x + 3y = 12$ for y.
solution: $3y = 12 - 2x$, so $y = \frac{12 - 2x}{3}$.
:::

::: problem id=x10 type=choice set=extra
Solve $a = \frac{1}{2}bh$ for b.
- [x] $b = \frac{2a}{h}$
- [ ] $b = \frac{a}{2h}$
- [ ] $b = 2ah$
solution: Multiply by 2: $2a = bh$. Divide by h: $b = \frac{2a}{h}$.
:::

::: problem id=x11 type=choice set=extra
Ben solves $y = mx + b$ for x and writes $x = y - \frac{b}{m}$. What is the correct answer?
- [x] $x = \frac{y - b}{m}$
- [ ] $x = \frac{y}{m} - b$
- [ ] $x = \frac{y + b}{m}$
solution: Subtract b first: $y - b = mx$. Then divide the **whole** side by m: $x = \frac{y - b}{m}$.
:::

::: problem id=x12 type=expression answer="i/(p*r)" vars="i,p,r" set=extra
Solve $i = prt$ for t.
solution: Divide by $pr$: $t = \frac{i}{pr}$, typed i/(p*r).
:::

::: problem id=x13 type=numeric answer="5" set=extra
A triangle has area $a = \frac{1}{2}bh$. The area is 30 and the base is 12. What is the height?
solution: $h = \frac{2a}{b} = \frac{60}{12} = 5$.
:::

::: problem id=x14 type=expression answer="k/3+2" vars="k" set=extra
Solve $k = 3(m - 2)$ for m.
solution: Divide by 3: $\frac{k}{3} = m - 2$. So $m = \frac{k}{3} + 2$.
:::

::: problem id=x15 type=numeric answer="0.04" set=extra
Simple interest: $i = prt$. You earn 120 dollars on 1000 dollars in 3 years. What is the rate r, as a decimal?
solution: $r = \frac{i}{pt} = \frac{120}{3000} = 0.04$ (4% per year).
:::

::: problem id=x16 type=expression answer="c/a-b" vars="a,b,c" set=extra
Solve $a(x + b) = c$ for x.
hint: Divide by a first, then subtract b.
solution: $x + b = \frac{c}{a}$, so $x = \frac{c}{a} - b$.
:::

::: problem id=x17 type=expression answer="5(f-32)/9" vars="f" set=extra
Solve $f = \frac{9}{5}c + 32$ for c.
hint: Subtract 32, then multiply by $\frac{5}{9}$.
solution: $f - 32 = \frac{9}{5}c$. So $c = \frac{5(f - 32)}{9}$.
:::

::: problem id=x18 type=numeric answer="11" set=extra
A trapezoid has area $a = \frac{h(b + c)}{2}$. The area is 45, the height 5 and one base 7. How long is the other base?
hint: Put in the numbers, then solve for c.
solution: $45 = \frac{5(7 + c)}{2}$. So $90 = 35 + 5c$, $5c = 55$, $c = 11$.
:::

::: problem id=x19 type=expression answer="a*b/(a+b)" vars="a,b" set=extra
Solve $\frac{x}{a} + \frac{x}{b} = 1$ for x.
hint: Multiply every term by $ab$, then take x out as a common factor.
solution: $bx + ax = ab$, so $x(a + b) = ab$. Then $x = \frac{ab}{a + b}$.
:::

::: problem id=x20 type=expression answer="(3y+1)/(y-2)" vars="y" set=extra creative=true
Solve $y = \frac{2x + 1}{x - 3}$ for x.
hint: Multiply by $x - 3$, gather the x terms on one side, then take x out.
solution: $yx - 3y = 2x + 1$. So $yx - 2x = 3y + 1$. Then $x(y - 2) = 3y + 1$ and $x = \frac{3y + 1}{y - 2}$.
:::
