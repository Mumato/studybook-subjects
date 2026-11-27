---
id: lim-test
title: Limits test
pass: 0.8
---
::: problem id=t1 type=numeric answer="10"
$\lim_{x \to 4} (3x - 2) = ?$
solution: $12 - 2 = 10$.
:::

::: problem id=t2 type=numeric answer="10"
$\lim_{x \to 5} \frac{x^2 - 25}{x - 5} = ?$
solution: $x + 5 \to 10$.
:::

::: problem id=t3 type=numeric answer="2"
$\lim_{x \to \infty} \frac{6x^2}{3x^2 + x} = ?$
solution: $\frac{6}{3} = 2$.
:::

::: problem id=t4 type=numeric answer="1/2"
$\lim_{x \to 0} \frac{\sqrt{x + 1} - 1}{x} = ?$
solution: $\frac{1}{\sqrt{x + 1} + 1} \to \frac{1}{2}$.
:::

::: problem id=t5 type=numeric answer="7/3"
$f(x) = 2x + 1$ for $x < 3$ and $f(x) = ax$ for $x \ge 3$. Which a makes f continuous?
solution: $7 = 3a$, $a = \frac{7}{3}$.
:::

::: problem id=t6 type=text answers="yes"
From the left $f(x) \to 2$, and from the right $f(x) \to 2$, as $x \to 0$. Does $\lim_{x \to 0} f(x)$ exist? Type yes or no.
solution: Both sides agree: **yes**.
:::

::: problem id=t7 type=numeric answer="0"
$\lim_{x \to \infty} \frac{7}{x} = ?$
solution: **0**.
:::

::: problem id=t8 type=numeric answer="3"
$f(0.9) = 2.8$, $f(0.99) = 2.98$, $f(1.01) = 3.02$, $f(1.1) = 3.2$. What does $\lim_{x \to 1} f(x)$ seem to be?
solution: Both sides close in on **3**.
:::

::: problem id=t9 type=numeric answer="-3"
$\lim_{x \to -2} \frac{x^2 + x - 2}{x + 2} = ?$
solution: $\frac{(x + 2)(x - 1)}{x + 2} = x - 1 \to -3$.
:::

::: problem id=t10 type=numeric answer="1/10"
$\lim_{x \to 0} \frac{\sqrt{x + 25} - 5}{x} = ?$
solution: Conjugate: $\frac{1}{\sqrt{x + 25} + 5} \to \frac{1}{10}$.
:::

::: problem id=t11 type=numeric answer="2/5"
$\lim_{x \to \infty} \frac{2x^3 - x}{5x^3 + 4} = ?$
solution: Equal degrees: $\frac{2}{5}$.
:::

::: problem id=t12 type=numeric answer="-1"
$\lim_{x \to 0^-} \frac{|x|}{x} = ?$
solution: For $x < 0$, $|x| = -x$, so the fraction is $-1$.
:::

::: problem id=t13 type=choice
What kind of break does $\frac{x + 1}{x + 4}$ have at $x = -4$?
- [ ] a hole
- [ ] a jump
- [x] a vertical asymptote
solution: The top is $-3$, not 0, while the bottom goes to 0: a **vertical asymptote**.
:::

::: problem id=t14 type=choice
$f(x) = x^3 + 2x - 5$. In which interval does the IVT guarantee a root?
- [ ] $[-1, 0]$
- [ ] $[0, 1]$
- [x] $[1, 2]$
- [ ] $[2, 3]$
solution: $f(1) = -2$, $f(2) = 7$: a sign change. $f(-1) = -8$, $f(0) = -5$, $f(3) = 28$: no other change.
:::

::: problem id=t15 type=numeric answer="6"
$\lim_{x \to 0} \frac{\sin 6x}{x} = ?$
solution: $6 \cdot \frac{\sin 6x}{6x} \to 6$.
:::

::: problem id=t16 type=numeric answer="0"
$\lim_{x \to 0} x^2 \sin\frac{5}{x} = ?$
solution: $-x^2 \le x^2\sin\frac{5}{x} \le x^2$; squeeze to **0**.
:::

::: problem id=t17 type=numeric answer="1/20"
To show $\lim_{x \to 2} (4x - 3) = 5$ with $\varepsilon = 0.2$, what is the largest $\delta$ that works?
solution: $|4x - 8| = 4|x - 2| < 0.2$ means $|x - 2| < 0.05$.
:::

::: problem id=t18 type=numeric answer="1/2"
$\lim_{x \to 0} \frac{1 - \cos x}{x \sin x} = ?$
solution: Multiply by $1 + \cos x$: $\frac{\sin^2 x}{x \sin x (1 + \cos x)}$.
$= \frac{\sin x}{x} \cdot \frac{1}{1 + \cos x} \to \frac{1}{2}$.
:::
