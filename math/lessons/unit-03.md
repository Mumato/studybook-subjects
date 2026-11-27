---
id: unit-03
title: Graphs of sine and cosine
---
::: rule
$y = \sin x$ and $y = \cos x$ are waves that repeat every $2\pi$ (the **period**) and go between $-1$ and 1 (the **amplitude** is 1).

For $y = a\sin(bx)$:
- amplitude $= |a|$
- period $= \frac{2\pi}{b}$
:::

::: example
$y = 2\sin x$ goes up to 2 and down to $-2$. $y = \sin 2x$ repeats twice as fast, with period π.
:::

::: graph
x -0.5..7
y -2.5..2.5
plot sin(x) blue
plot 2sin(x) red
:::

::: problem id=p1 type=numeric answer="3"
What is the amplitude of $y = 3\sin x$?
solution: $|3| = 3$.
:::

::: problem id=p2 type=numeric answer="pi"
What is the period of $y = \sin 2x$?
solution: $\frac{2\pi}{2} = \pi$.
:::

::: problem id=p3 type=numeric answer="2"
What is the largest value of $y = 2\cos x$?
solution: The amplitude is 2, so the maximum is **2**.
:::

::: problem id=p4 type=choice
What is the period of $y = \cos x$?
- [ ] π
- [x] 2π
- [ ] 1
solution: Sine and cosine repeat every $2\pi$.
:::

::: problem id=p5 type=numeric answer="0"
$\sin \pi = ?$
solution: The wave crosses 0 at π: **0**.
:::

::: problem id=p6 type=numeric answer="4pi"
What is the period of $y = \sin \frac{x}{2}$?
hint: $b = \frac{1}{2}$.
solution: $\frac{2\pi}{1/2} = 4\pi$.
:::

::: problem id=p7 type=numeric answer="4"
What is the amplitude of $y = -4\sin x$?
solution: $|-4| = 4$ (the minus only flips the wave).
:::

::: problem id=p8 type=numeric answer="3"
How many times is $\sin x = 0$ for $0 \le x \le 2\pi$?
solution: At $0$, $\pi$ and $2\pi$: **3** times.
:::

::: problem id=x1 type=numeric answer="7" set=extra
What is the amplitude of $y = 7\cos x$?
solution: $|7| = 7$.
:::

::: problem id=x2 type=numeric answer="pi/2" set=extra
What is the period of $y = \sin 4x$?
solution: $\frac{2\pi}{4} = \frac{\pi}{2}$.
:::

::: problem id=x3 type=numeric answer="6pi" set=extra
What is the period of $y = \cos\frac{x}{3}$?
solution: $\frac{2\pi}{1/3} = 6\pi$.
:::

::: problem id=x4 type=numeric answer="1/2" set=extra
What is the amplitude of $y = -\frac{1}{2}\sin x$?
solution: $\left|-\frac{1}{2}\right| = \frac{1}{2}$.
:::

::: problem id=x5 type=numeric answer="-3" set=extra
What is the smallest value of $y = 3\sin x$?
solution: It swings between 3 and $-3$: minimum $-3$.
:::

::: problem id=x6 type=numeric answer="2" set=extra
What is the period of $y = 5\sin(\pi x)$?
solution: $\frac{2\pi}{\pi} = 2$.
:::

::: problem id=x7 type=numeric answer="4" set=extra
Where does $y = 4\cos 2x$ cross the y-axis? Give the y-value.
solution: At $x = 0$: $4\cos 0 = 4$.
:::

::: problem id=x8 type=choice set=extra
A wave passes through $(0, 0)$ and goes **up** from there, with amplitude 1 and period $2\pi$. Which is it?
- [x] $y = \sin x$
- [ ] $y = \cos x$
- [ ] $y = -\sin x$
- [ ] $y = -\cos x$
solution: $\sin 0 = 0$ and sine rises first. ($\cos 0 = 1$, and $-\sin x$ goes down first.)
:::

::: problem id=x9 type=expression answer="2sin(2x)" set=extra
Write a sine wave $y = a\sin(bx)$ with $a, b > 0$, amplitude 2 and period π.
solution: $a = 2$. $\frac{2\pi}{b} = \pi$ gives $b = 2$: $y = 2\sin 2x$.
:::

::: problem id=x10 type=expression answer="3sin(x/2)" set=extra
Write a sine wave $y = a\sin(bx)$ with $a, b > 0$, amplitude 3 and period $4\pi$.
solution: $a = 3$. $\frac{2\pi}{b} = 4\pi$ gives $b = \frac{1}{2}$: $y = 3\sin\frac{x}{2}$.
:::

::: problem id=x11 type=point answer="1,3" set=extra
Click the highest point of $y = 3\sin\left(\frac{\pi x}{2}\right)$ for $0 < x < 4$.
graph:
x -1..5
y -4..4
plot 3sin(pi*x/2) blue
hint: The period is 4, so the first peak is a quarter of the way along.
solution: Period $\frac{2\pi}{\pi/2} = 4$. The peak is at $x = 1$, height 3: $(1, 3)$.
:::

::: problem id=x12 type=point answer="1,-2" set=extra
Click the lowest point of $y = 2\cos(\pi x)$ for $0 < x < 2$.
graph:
x -1..3
y -3..3
plot 2cos(pi*x) red
solution: Period 2. Cosine is lowest halfway through a period: $x = 1$, $y = -2$.
:::

::: problem id=x13 type=numeric answer="5" set=extra
How many times is $\sin 2x = 0$ for $0 \le x \le 2\pi$?
solution: $2x = 0, \pi, 2\pi, 3\pi, 4\pi$, so $x = 0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}, 2\pi$: **5** times.
:::

::: problem id=x14 type=numeric answer="4" set=extra
What is $y = 4\sin\frac{x}{2}$ at $x = \pi$?
solution: $4\sin\frac{\pi}{2} = 4 \cdot 1 = 4$.
:::

::: problem id=x15 type=choice set=extra
Raj says the period of $y = \sin 3x$ is $6\pi$. What is it really?
- [ ] $6\pi$
- [ ] $3\pi$
- [x] $\frac{2\pi}{3}$
- [ ] $\frac{\pi}{3}$
solution: Divide, don't multiply: $\frac{2\pi}{3}$. A bigger b makes the wave faster.
:::

::: problem id=x16 type=numeric answer="1/2" set=extra
A spring's position is $y = 5\cos(4\pi t)$ cm, with t in seconds. How long does one full bounce (one period) take, in seconds?
solution: $\frac{2\pi}{4\pi} = \frac{1}{2}$ s.
:::

::: problem id=x17 type=numeric answer="3" set=extra
How many full waves (periods) does $y = \sin 3x$ complete for $0 \le x \le 2\pi$?
solution: Period $\frac{2\pi}{3}$ fits into $2\pi$ exactly **3** times.
:::

::: problem id=x18 type=numeric answer="3" set=extra
The graph of $y = a\sin(bx)$ (with $a, b > 0$) has its first peak at $\left(\frac{\pi}{6}, 5\right)$. What is b?
hint: The first peak of a sine wave comes a quarter period after 0.
solution: Quarter period $= \frac{\pi}{6}$, so the period is $\frac{2\pi}{3}$. $\frac{2\pi}{b} = \frac{2\pi}{3}$, $b = 3$.
:::

::: problem id=x19 type=numeric answer="2" set=extra
How many solutions does $\sin x = \frac{1}{2}$ have for $0 \le x \le 2\pi$?
hint: Picture the line $y = \frac{1}{2}$ crossing one full sine wave.
solution: The line crosses the hump above the axis twice (at $\frac{\pi}{6}$ and $\frac{5\pi}{6}$): **2**.
:::

::: problem id=x20 type=multi answers="pi/4;5pi/4" set=extra creative=true
Where do $y = \sin x$ and $y = \cos x$ cross for $0 \le x < 2\pi$?
hint: Where are sine and cosine equal on the unit circle?
solution: $\sin x = \cos x$ on the line $y = x$: at $\frac{\pi}{4}$ (both $\frac{\sqrt{2}}{2}$) and $\frac{5\pi}{4}$ (both $-\frac{\sqrt{2}}{2}$).
:::
