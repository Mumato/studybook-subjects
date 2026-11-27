---
id: lim-05
title: The squeeze theorem and the precise definition
---
Some limits can't be found by algebra. The squeeze theorem traps them. The precise definition says exactly what "gets close" means.

::: rule
**Squeeze theorem:** if $g(x) \le f(x) \le h(x)$ near a, and

$$\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L,$$

then $\lim_{x \to a} f(x) = L$ too.

It proves $\lim_{x \to 0} \frac{\sin x}{x} = 1$, so also $\lim_{x \to 0} \frac{\sin kx}{x} = k$.

**Precise ($\varepsilon$-$\delta$) definition:** $\lim_{x \to a} f(x) = L$ means: for every $\varepsilon > 0$ there is a $\delta > 0$ so that

$0 < |x - a| < \delta$ gives $|f(x) - L| < \varepsilon$.

For a line $f(x) = mx + b$, $\delta = \frac{\varepsilon}{|m|}$ works.
:::

::: example
$\lim_{x \to 0} x^2 \sin\frac{1}{x}$: the sine wobbles forever, but it stays between $-1$ and 1. So

$-x^2 \le x^2 \sin\frac{1}{x} \le x^2$.

Both sides go to 0, so the limit is **0**.
:::

::: graph
x -1..1
y -1..1
plot x^2 red
plot -x^2 red
plot x^2*sin(1/x) blue
:::

::: example
Prove $\lim_{x \to 3} (2x - 1) = 5$.

$|f(x) - 5| = |2x - 6| = 2|x - 3|$.

This is below $\varepsilon$ when $|x - 3| < \frac{\varepsilon}{2}$. So choose $\delta = \frac{\varepsilon}{2}$. For $\varepsilon = 0.1$: $\delta = 0.05$.
:::

::: problem id=p1 type=numeric answer="0"
$\lim_{x \to 0} x^2 \cos\frac{1}{x} = ?$
hint: $-1 \le \cos\frac{1}{x} \le 1$, so trap it between $-x^2$ and $x^2$.
solution: $-x^2 \le x^2\cos\frac{1}{x} \le x^2$. Both sides go to 0, so the limit is **0**.
:::

::: problem id=p2 type=numeric answer="3"
$\lim_{x \to 0} \frac{\sin 3x}{x} = ?$
hint: Write it as $3 \cdot \frac{\sin 3x}{3x}$.
solution: $3 \cdot \frac{\sin 3x}{3x} \to 3 \cdot 1 = 3$.
:::

::: problem id=p3 type=numeric answer="1"
$1 - x^2 \le f(x) \le 1 + x^2$ for all x. What is $\lim_{x \to 0} f(x)$?
solution: Both bounds go to 1 at 0, so f is squeezed to **1**.
:::

::: problem id=p4 type=numeric answer="1/10"
To show $\lim_{x \to 2} (3x + 1) = 7$ with $\varepsilon = 0.3$, what is the largest $\delta$ that works?
hint: $|3x + 1 - 7| = 3|x - 2|$.
solution: $3|x - 2| < 0.3$ means $|x - 2| < 0.1$. So $\delta = 0.1$.
:::

::: problem id=p5 type=choice
For $\lim_{x \to 1} (5x - 2) = 3$, which $\delta$ works for every $\varepsilon$?
- [ ] $\delta = 5\varepsilon$
- [x] $\delta = \frac{\varepsilon}{5}$
- [ ] $\delta = \varepsilon + 5$
- [ ] $\delta = \frac{5}{\varepsilon}$
solution: $|5x - 2 - 3| = 5|x - 1| < \varepsilon$ when $|x - 1| < \frac{\varepsilon}{5}$.
:::

::: problem id=p6 type=numeric answer="0"
$\lim_{x \to \infty} \frac{\sin x}{x} = ?$
hint: $-\frac{1}{x} \le \frac{\sin x}{x} \le \frac{1}{x}$ for $x > 0$.
solution: Both bounds go to 0, so the limit is **0**.
:::

::: problem id=p7 type=numeric answer="1"
$\lim_{x \to 0} \frac{\tan x}{x} = ?$
hint: $\tan x = \frac{\sin x}{\cos x}$.
solution: $\frac{\sin x}{x} \cdot \frac{1}{\cos x} \to 1 \cdot 1 = 1$.
:::

::: problem id=p8 type=numeric answer="5/2"
$\lim_{x \to 0} \frac{\sin 5x}{\sin 2x} = ?$
hint: Divide top and bottom by x.
solution: $\frac{\sin 5x}{x} \to 5$ and $\frac{\sin 2x}{x} \to 2$. So the limit is $\frac{5}{2}$.
:::

::: problem id=x1 type=numeric answer="7" set=extra
$\lim_{x \to 0} \frac{\sin 7x}{x} = ?$
solution: $7 \cdot \frac{\sin 7x}{7x} \to 7$.
:::

::: problem id=x2 type=numeric answer="1" set=extra
$\lim_{x \to 0} \frac{x}{\sin x} = ?$
solution: It's $1 \div \frac{\sin x}{x} \to \frac{1}{1} = 1$.
:::

::: problem id=x3 type=numeric answer="1/4" set=extra
$\lim_{x \to 0} \frac{\sin x}{4x} = ?$
solution: $\frac{1}{4} \cdot \frac{\sin x}{x} \to \frac{1}{4}$.
:::

::: problem id=x4 type=numeric answer="0" set=extra
$\lim_{x \to 0} x \sin\frac{1}{x} = ?$
solution: $-|x| \le x\sin\frac{1}{x} \le |x|$, and $|x| \to 0$. So **0**.
:::

::: problem id=x5 type=numeric answer="0" set=extra
$\lim_{x \to \infty} \frac{\cos x}{x^2} = ?$
solution: $-\frac{1}{x^2} \le \frac{\cos x}{x^2} \le \frac{1}{x^2}$. Both go to 0.
:::

::: problem id=x6 type=numeric answer="1/200" set=extra
To show $\lim_{x \to 4} (2x - 3) = 5$ with $\varepsilon = 0.01$, what is the largest $\delta$ that works?
solution: $|2x - 8| = 2|x - 4| < 0.01$ means $|x - 4| < 0.005$.
:::

::: problem id=x7 type=numeric answer="2" set=extra
$2x \le f(x) \le x^2 + 1$ for all x. What is $\lim_{x \to 1} f(x)$?
solution: At 1 both bounds equal 2, so f is squeezed to **2**.
:::

::: problem id=x8 type=choice set=extra
Why can't you find $\lim_{x \to 0} \frac{\sin x}{x}$ by substituting?
- [ ] $\sin 0$ is undefined
- [x] You get $\frac{0}{0}$
- [ ] $\frac{\sin x}{x}$ has a vertical asymptote at 0
- [ ] The limit doesn't exist
solution: $\frac{\sin 0}{0} = \frac{0}{0}$, and there's nothing to factor. The squeeze theorem gives 1.
:::

::: problem id=x9 type=numeric answer="1" set=extra
$\lim_{x \to 0} \frac{\sin^2 x}{x^2} = ?$
solution: $\left(\frac{\sin x}{x}\right)^2 \to 1^2 = 1$.
:::

::: problem id=x10 type=numeric answer="6" set=extra
$\lim_{x \to 0} \frac{\sin 2x \cdot \sin 3x}{x^2} = ?$
solution: $\frac{\sin 2x}{x} \cdot \frac{\sin 3x}{x} \to 2 \cdot 3 = 6$.
:::

::: problem id=x11 type=numeric answer="1/2" set=extra
$\lim_{x \to 0} \frac{\sin x}{x + \tan x} = ?$
hint: Divide top and bottom by x.
solution: $\frac{\sin x / x}{1 + \tan x / x} \to \frac{1}{1 + 1} = \frac{1}{2}$.
:::

::: problem id=x12 type=choice set=extra
For $\lim_{x \to 2} (-4x + 1) = -7$, which $\delta$ works for every $\varepsilon$?
- [ ] $\delta = -\frac{\varepsilon}{4}$
- [x] $\delta = \frac{\varepsilon}{4}$
- [ ] $\delta = 4\varepsilon$
- [ ] $\delta = \varepsilon - 4$
solution: $|-4x + 8| = 4|x - 2| < \varepsilon$ when $|x - 2| < \frac{\varepsilon}{4}$. $\delta$ must be positive.
:::

::: problem id=x13 type=text answers="epsilon;ε" set=extra
In the precise definition, which Greek letter sets how close $f(x)$ must be to L? Type its name.
solution: **Epsilon** ($\varepsilon$) is the output tolerance; $\delta$ is how close x must be to a.
:::

::: problem id=x14 type=numeric answer="3/2" set=extra
To show $\lim_{x \to 3} \left(\frac{x}{3} + 1\right) = 2$ with $\varepsilon = 0.5$, what is the largest $\delta$ that works?
hint: The slope is $\frac{1}{3}$.
solution: $\left|\frac{x}{3} - 1\right| = \frac{1}{3}|x - 3| < 0.5$ means $|x - 3| < 1.5$.
:::

::: problem id=x15 type=choice set=extra
A student writes: "$\lim x^2 \sin\frac{1}{x} = \lim x^2 \cdot \lim \sin\frac{1}{x} = 0$" (as $x \to 0$). What's wrong?
- [ ] Nothing
- [x] $\lim \sin\frac{1}{x}$ doesn't exist, so the product law can't be used; squeeze instead
- [ ] The limit is really 1
- [ ] $x^2$ doesn't go to 0
solution: The product law needs both limits to exist. The answer 0 is right, but the reason is the squeeze theorem.
:::

::: problem id=x16 type=numeric answer="3/5" set=extra
$\lim_{x \to 0} \frac{\sin 3x}{\sin 5x} = ?$
hint: Divide top and bottom by x.
solution: $\frac{\sin 3x / x}{\sin 5x / x} \to \frac{3}{5}$.
:::

::: problem id=x17 type=numeric answer="-1" set=extra
$\lim_{x \to 0} \frac{x^2 - x}{\sin x} = ?$
hint: Factor the top as $x(x - 1)$.
solution: $\frac{x}{\sin x} \cdot (x - 1) \to 1 \cdot (-1) = -1$.
:::

::: problem id=x18 type=numeric answer="1/2" set=extra
$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = ?$
hint: Multiply top and bottom by $1 + \cos x$; use $1 - \cos^2 x = \sin^2 x$.
solution: $\frac{\sin^2 x}{x^2(1 + \cos x)}$.
$= \left(\frac{\sin x}{x}\right)^2 \cdot \frac{1}{1 + \cos x} \to 1 \cdot \frac{1}{2}$.
:::

::: problem id=x19 type=numeric answer="1/50" set=extra
To show $\lim_{x \to 1} \frac{6 - 3x}{2} = \frac{3}{2}$ with $\varepsilon = 0.03$, what is the largest $\delta$ that works?
hint: $\left|\frac{6 - 3x}{2} - \frac{3}{2}\right| = \frac{3}{2}|x - 1|$.
solution: $\frac{3}{2}|x - 1| < 0.03$ means $|x - 1| < 0.02$.
:::

::: problem id=x20 type=numeric answer="1" set=extra creative=true
$\lim_{x \to \infty} x \sin\frac{1}{x} = ?$
hint: Put $t = \frac{1}{x}$. As $x \to \infty$, $t \to 0^+$.
solution: $x\sin\frac{1}{x} = \frac{\sin t}{t} \to 1$.
:::
