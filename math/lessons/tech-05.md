---
id: tech-05
title: Trig substitution
---
A square root like $\sqrt{9 - x^2}$ won't go away with an ordinary substitution. Put in a trig function instead, and a Pythagorean identity removes the root.

::: rule
Match the root to a substitution:
- $\sqrt{a^2 - x^2}$: let $x = a\sin\theta$. Then the root is $a\cos\theta$.
- $\sqrt{a^2 + x^2}$: let $x = a\tan\theta$. Then the root is $a\sec\theta$.
- $\sqrt{x^2 - a^2}$: let $x = a\sec\theta$. Then the root is $a\tan\theta$.

Don't forget dx: for $x = a\sin\theta$, $dx = a\cos\theta\,d\theta$.

**Back-substitute** with a right triangle: for $x = a\sin\theta$, $\sin\theta = \frac{x}{a}$, so the opposite side is x, the hypotenuse a, and the adjacent side $\sqrt{a^2 - x^2}$.
:::

::: example
$\int \frac{dx}{x^2\sqrt{9 - x^2}}$. Let $x = 3\sin\theta$, $dx = 3\cos\theta\,d\theta$, $\sqrt{9 - x^2} = 3\cos\theta$:

$$\int \frac{3\cos\theta\,d\theta}{9\sin^2\theta \cdot 3\cos\theta}$$

$$= \frac{1}{9}\int \csc^2\theta\,d\theta = -\frac{\cot\theta}{9} + C$$

Triangle: opposite x, hypotenuse 3, adjacent $\sqrt{9 - x^2}$. So $\cot\theta = \frac{\sqrt{9 - x^2}}{x}$, and the answer is $-\frac{\sqrt{9 - x^2}}{9x} + C$.
:::

::: example
$\int_0^2 \sqrt{4 - x^2}\,dx$. Let $x = 2\sin\theta$: θ runs from 0 to $\frac{\pi}{2}$.

$$\int_0^{\pi/2} 2\cos\theta \cdot 2\cos\theta\,d\theta$$

$$= 4\int_0^{\pi/2}\cos^2\theta\,d\theta$$

That is $4 \cdot \frac{\pi}{4} = \pi$: a quarter of a circle of radius 2, as the picture says.
:::

::: graph
x -0.5..2.5
y -0.5..2.5
plot sqrt(4-x^2) blue
polygon 0,0 0,2 0.5,1.936 1,1.732 1.5,1.323 1.8,0.872 2,0 fill
:::

Type $\arcsin$ as asin. Leave out the + C.

::: problem id=p1 type=choice
Which substitution fits $\int \sqrt{25 - x^2}\,dx$?
- [x] $x = 5\sin\theta$
- [ ] $x = 5\tan\theta$
- [ ] $x = 5\sec\theta$
- [ ] $x = 25\sin\theta$
solution: The form is $\sqrt{a^2 - x^2}$ with $a = 5$: $x = 5\sin\theta$, and $25 - 25\sin^2\theta = 25\cos^2\theta$.
:::

::: problem id=p2 type=choice
Which substitution fits $\int \frac{dx}{\sqrt{x^2 + 16}}$?
- [ ] $x = 4\sin\theta$
- [x] $x = 4\tan\theta$
- [ ] $x = 4\sec\theta$
- [ ] $x = 16\tan\theta$
solution: $\sqrt{a^2 + x^2}$ with $a = 4$: $x = 4\tan\theta$, since $16 + 16\tan^2\theta = 16\sec^2\theta$.
:::

::: problem id=p3 type=choice
Which substitution fits $\int \frac{dx}{x^2\sqrt{x^2 - 9}}$?
- [ ] $x = 3\sin\theta$
- [ ] $x = 3\tan\theta$
- [x] $x = 3\sec\theta$
- [ ] $x = 9\sec\theta$
solution: $\sqrt{x^2 - a^2}$ with $a = 3$: $x = 3\sec\theta$, since $9\sec^2\theta - 9 = 9\tan^2\theta$.
:::

::: problem id=p4 type=numeric answer="4"
With $x = 4\sin\theta$, $\sqrt{16 - x^2} = k\cos\theta$. What is k?
solution: $16 - 16\sin^2\theta = 16\cos^2\theta$, whose root is $4\cos\theta$ (for $\cos\theta \ge 0$).
:::

::: problem id=p5 type=expression answer="x/sqrt(9-x^2)"
You used $x = 3\sin\theta$. Write $\tan\theta$ in terms of x.
hint: Draw the triangle: opposite x, hypotenuse 3.
solution: The adjacent side is $\sqrt{9 - x^2}$, so $\tan\theta = \frac{x}{\sqrt{9 - x^2}}$.
:::

::: problem id=p6 type=expression answer="-sqrt(4-x^2)/(4x)" form=antiderivative
$\int \frac{dx}{x^2\sqrt{4 - x^2}} = ?$
hint: Follow the first example with $x = 2\sin\theta$.
solution: $\frac{1}{4}\int \csc^2\theta\,d\theta = -\frac{\cot\theta}{4}$. With $\cot\theta = \frac{\sqrt{4 - x^2}}{x}$: $-\frac{\sqrt{4 - x^2}}{4x} + C$.
:::

::: problem id=p7 type=expression answer="x/(9sqrt(x^2+9))" form=antiderivative
$\int \frac{dx}{(x^2 + 9)^{3/2}} = ?$
hint: $x = 3\tan\theta$, so $(x^2 + 9)^{3/2} = 27\sec^3\theta$.
solution: $dx = 3\sec^2\theta\,d\theta$: $\frac{1}{9}\int \cos\theta\,d\theta = \frac{\sin\theta}{9}$. Triangle: $\sin\theta = \frac{x}{\sqrt{x^2 + 9}}$. Answer: $\frac{x}{9\sqrt{x^2 + 9}} + C$.
:::

::: problem id=p8 type=expression answer="sqrt(x^2-4)/(4x)" form=antiderivative
$\int \frac{dx}{x^2\sqrt{x^2 - 4}} = ?$
hint: $x = 2\sec\theta$, $dx = 2\sec\theta\tan\theta\,d\theta$.
solution: The integral becomes $\frac{1}{4}\int \cos\theta\,d\theta = \frac{\sin\theta}{4}$. Here $\sec\theta = \frac{x}{2}$: hypotenuse x, adjacent 2, opposite $\sqrt{x^2 - 4}$. Answer: $\frac{\sqrt{x^2 - 4}}{4x} + C$.
:::

::: problem id=x1 type=choice set=extra
Which substitution fits $\sqrt{9 - 4x^2}$?
- [ ] $x = 3\sin\theta$
- [x] $x = \frac{3}{2}\sin\theta$
- [ ] $x = \frac{2}{3}\sin\theta$
- [ ] $x = \frac{3}{2}\tan\theta$
hint: You want $4x^2 = 9\sin^2\theta$.
solution: $2x = 3\sin\theta$, so $x = \frac{3}{2}\sin\theta$. Then $9 - 9\sin^2\theta = 9\cos^2\theta$.
:::

::: problem id=x2 type=choice set=extra
With $x = 2\sec\theta$, what is $\sqrt{x^2 - 4}$?
- [ ] $2\sec\theta$
- [ ] $2\cos\theta$
- [x] $2\tan\theta$
- [ ] $4\tan\theta$
solution: $4\sec^2\theta - 4 = 4\tan^2\theta$, whose root is $2\tan\theta$.
:::

::: problem id=x3 type=expression answer="x/sqrt(x^2+4)" set=extra
You used $x = 2\tan\theta$. Write $\sin\theta$ in terms of x.
solution: Triangle: opposite x, adjacent 2, hypotenuse $\sqrt{x^2 + 4}$. So $\sin\theta = \frac{x}{\sqrt{x^2 + 4}}$.
:::

::: problem id=x4 type=expression answer="sqrt(25-x^2)/5" set=extra
You used $x = 5\sin\theta$. Write $\cos\theta$ in terms of x.
solution: Opposite x, hypotenuse 5, adjacent $\sqrt{25 - x^2}$: $\cos\theta = \frac{\sqrt{25 - x^2}}{5}$.
:::

::: problem id=x5 type=numeric answer="9pi/4" set=extra
$\int_0^3 \sqrt{9 - x^2}\,dx = ?$
hint: It is a quarter circle. Or use $x = 3\sin\theta$.
solution: $9\int_0^{\pi/2}\cos^2\theta\,d\theta = 9 \cdot \frac{\pi}{4} = \frac{9\pi}{4}$.
:::

::: problem id=x6 type=expression answer="asin(x)/2-xsqrt(1-x^2)/2" form=antiderivative set=extra
$\int \frac{x^2}{\sqrt{1 - x^2}}\,dx = ?$
solution: $x = \sin\theta$: $\int \sin^2\theta\,d\theta = \frac{\theta}{2} - \frac{\sin\theta\cos\theta}{2}$. Back: $\frac{\arcsin x}{2} - \frac{x\sqrt{1 - x^2}}{2} + C$.
:::

::: problem id=x7 type=expression answer="asin(x)/2+xsqrt(1-x^2)/2" form=antiderivative set=extra
$\int \sqrt{1 - x^2}\,dx = ?$
hint: $\sin 2\theta = 2\sin\theta\cos\theta$.
solution: $x = \sin\theta$: $\int \cos^2\theta\,d\theta = \frac{\theta}{2} + \frac{\sin\theta\cos\theta}{2}$. Back: $\frac{\arcsin x}{2} + \frac{x\sqrt{1 - x^2}}{2} + C$.
:::

::: problem id=x8 type=expression answer="-sqrt(16-x^2)/(16x)" form=antiderivative set=extra
$\int \frac{dx}{x^2\sqrt{16 - x^2}} = ?$
solution: $x = 4\sin\theta$: $\frac{1}{16}\int \csc^2\theta\,d\theta = -\frac{\cot\theta}{16}$. Back: $-\frac{\sqrt{16 - x^2}}{16x} + C$.
:::

::: problem id=x9 type=expression answer="-sqrt(x^2+4)/(4x)" form=antiderivative set=extra
$\int \frac{dx}{x^2\sqrt{x^2 + 4}} = ?$
hint: $x = 2\tan\theta$. You'll get $\frac{1}{4}\int \frac{\cos\theta}{\sin^2\theta}\,d\theta$.
solution: With $u = \sin\theta$ that is $-\frac{1}{4\sin\theta}$. And $\sin\theta = \frac{x}{\sqrt{x^2 + 4}}$. Answer: $-\frac{\sqrt{x^2 + 4}}{4x} + C$.
:::

::: problem id=x10 type=expression answer="x/(4sqrt(4-x^2))" form=antiderivative set=extra
$\int \frac{dx}{(4 - x^2)^{3/2}} = ?$
solution: $x = 2\sin\theta$: $\int \frac{2\cos\theta\,d\theta}{8\cos^3\theta} = \frac{1}{4}\int \sec^2\theta\,d\theta = \frac{\tan\theta}{4}$. Back: $\frac{x}{4\sqrt{4 - x^2}} + C$.
:::

::: problem id=x11 type=choice set=extra
Which integral is quicker with a plain substitution $u = 9 - x^2$ than with trig substitution?
- [x] $\int \frac{x}{\sqrt{9 - x^2}}\,dx$
- [ ] $\int \frac{x^2}{\sqrt{9 - x^2}}\,dx$
- [ ] $\int \sqrt{9 - x^2}\,dx$
- [ ] $\int \frac{dx}{x^2\sqrt{9 - x^2}}$
solution: Only the first has the factor x that matches $du = -2x\,dx$.
:::

::: problem id=x12 type=expression answer="-sqrt(9-x^2)" form=antiderivative set=extra
$\int \frac{x}{\sqrt{9 - x^2}}\,dx = ?$
solution: $u = 9 - x^2$, $du = -2x\,dx$: $-\frac{1}{2}\int u^{-1/2}\,du = -\sqrt{u}$. Answer: $-\sqrt{9 - x^2} + C$.
:::

::: problem id=x13 type=expression answer="asin(x/3)" form=antiderivative set=extra
$\int \frac{dx}{\sqrt{9 - x^2}} = ?$
solution: $x = 3\sin\theta$: $\int \frac{3\cos\theta}{3\cos\theta}\,d\theta = \theta$. Back: $\theta = \arcsin\frac{x}{3}$, so $\arcsin\frac{x}{3} + C$.
:::

::: problem id=x14 type=numeric answer="6pi" set=extra
Find the area inside the ellipse $\frac{x^2}{9} + \frac{y^2}{4} = 1$. (in terms of pi)
hint: The top half is $y = \frac{2}{3}\sqrt{9 - x^2}$. Use symmetry: 4 times the first-quadrant part.
solution: $4 \cdot \frac{2}{3}\int_0^3 \sqrt{9 - x^2}\,dx$ is $\frac{8}{3} \cdot \frac{9\pi}{4} = 6\pi$. (In general $\pi ab$.)
:::

::: problem id=x15 type=numeric answer="sqrt(2)/2" set=extra
$\int_0^1 \frac{dx}{(x^2 + 1)^{3/2}} = ?$
hint: The antiderivative is $\frac{x}{\sqrt{x^2 + 1}}$ (as in p7 with $a = 1$).
solution: $\frac{1}{\sqrt{2}} - 0 = \frac{\sqrt{2}}{2}$.
:::

::: problem id=x16 type=numeric answer="pi/4" set=extra
$\int_0^1 \frac{x^2}{\sqrt{1 - x^2}}\,dx = ?$
hint: Change the bounds: $x = \sin\theta$ runs θ from 0 to $\frac{\pi}{2}$.
solution: $\int_0^{\pi/2}\sin^2\theta\,d\theta = \left[\frac{\theta}{2} - \frac{\sin 2\theta}{4}\right]_0^{\pi/2} = \frac{\pi}{4}$.
:::

::: problem id=x17 type=choice set=extra
A student puts $x = 3\sin\theta$ into $\int \frac{dx}{\sqrt{9 - x^2}}$ and writes $\int \frac{d\theta}{3\cos\theta}$. What did they miss?
- [ ] the root should be $9\cos\theta$
- [x] $dx = 3\cos\theta\,d\theta$, not $d\theta$
- [ ] they should use $x = 3\tan\theta$
- [ ] nothing: it is right
solution: dx must be changed too: $dx = 3\cos\theta\,d\theta$. Then the integral is $\int d\theta = \theta$.
:::

::: problem id=x18 type=numeric answer="sqrt(3)/8" set=extra
$\int_2^4 \frac{dx}{x^2\sqrt{x^2 - 4}} = ?$
hint: Use the antiderivative from p8.
solution: $\left[\frac{\sqrt{x^2 - 4}}{4x}\right]_2^4$ is $\frac{\sqrt{12}}{16} - 0$, which is $\frac{2\sqrt{3}}{16} = \frac{\sqrt{3}}{8}$.
:::

::: problem id=x19 type=expression answer="(x+1)/(4sqrt(x^2+2x+5))" form=antiderivative set=extra
$\int \frac{dx}{(x^2 + 2x + 5)^{3/2}} = ?$
hint: Complete the square: $x^2 + 2x + 5 = (x + 1)^2 + 4$. Then let $x + 1 = 2\tan\theta$.
solution: It is like p7 with $a = 2$ and x replaced by $x + 1$: $\frac{1}{4}\sin\theta$, and $\sin\theta = \frac{x + 1}{\sqrt{(x + 1)^2 + 4}}$. Answer: $\frac{x + 1}{4\sqrt{x^2 + 2x + 5}} + C$.
:::

::: problem id=x20 type=numeric answer="4pi/3-sqrt(3)" set=extra creative=true
What is the area of the part of the disk $x^2 + y^2 \le 4$ to the right of the line $x = 1$? (exact)
hint: Area $= 2\int_1^2 \sqrt{4 - x^2}\,dx$. An antiderivative of $\sqrt{4 - x^2}$ is $\frac{x\sqrt{4 - x^2}}{2} + 2\arcsin\frac{x}{2}$.
solution: At 2: $0 + \pi$. At 1: $\frac{\sqrt{3}}{2} + \frac{\pi}{3}$. Difference $\frac{2\pi}{3} - \frac{\sqrt{3}}{2}$. Times 2: $\frac{4\pi}{3} - \sqrt{3}$.
:::
