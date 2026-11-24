---
id: prb-02
title: The addition rule
---
"A or B" means A happens, B happens, or both. Adding the two probabilities counts the "both" part twice, so subtract it once. (OpenStax ch. 3)

::: rule
$$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$$
- Events are **mutually exclusive** when they can't happen together: $P(A \text{ and } B) = 0$, so $P(A \text{ or } B) = P(A) + P(B)$.
- A Venn diagram helps: two circles, the overlap is "A and B".
:::

::: example
Of 200 students, 120 own a laptop, 90 own a tablet, and 50 own both.
$P(\text{laptop or tablet}) = \frac{120}{200} + \frac{90}{200} - \frac{50}{200} = \frac{160}{200} = 0.8$.
So $P(\text{neither}) = 1 - 0.8 = 0.2$.
:::

::: problem id=p1 type=numeric answer="4/13" tolerance=0.001
One card is drawn from a 52-card deck. What is $P(\text{heart or king})$? (A fraction, or 3 decimals.)
hint: 13 hearts, 4 kings, and one card is both.
solution: $\frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13} = 0.308$.
:::

::: problem id=p2 type=numeric answer="0.7"
$P(A) = 0.5$, $P(B) = 0.3$ and $P(A \text{ and } B) = 0.1$. Find $P(A \text{ or } B)$.
solution: $0.5 + 0.3 - 0.1 = 0.7$.
:::

::: problem id=p3 type=numeric answer="0.75"
$P(A) = 0.45$ and $P(B) = 0.30$, and A and B are mutually exclusive. Find $P(A \text{ or } B)$.
solution: Nothing to subtract: $0.45 + 0.30 = 0.75$.
:::

::: problem id=p4 type=numeric answer="0.15"
$P(A) = 0.6$, $P(B) = 0.4$, $P(A \text{ or } B) = 0.85$. Find $P(A \text{ and } B)$.
solution: $0.85 = 0.6 + 0.4 - P(A \text{ and } B)$, so $P(A \text{ and } B) = 0.15$.
:::

::: problem id=p5 type=numeric answer="0.45"
In a town, 40% of homes have a dog, 30% have a cat and 15% have both. What is the probability a home has **neither**?
solution: $P(\text{dog or cat}) = 0.40 + 0.30 - 0.15 = 0.55$. Neither: $1 - 0.55 = 0.45$.
:::

::: problem id=p6 type=numeric answer="0.25"
Same town: what is the probability a home has a dog but **no** cat?
hint: Take the dog homes and remove the ones that also have a cat.
solution: $0.40 - 0.15 = 0.25$.
:::

::: problem id=p7 type=choice
Which pair of events is mutually exclusive, for one roll of a die?
- [ ] "even" and "greater than 3"
- [x] "a 2" and "odd"
- [ ] "less than 4" and "even"
- [ ] "a 6" and "even"
solution: 2 is even, so "a 2" and "odd" can't both happen. The others share outcomes (4 or 6, 2, 6).
:::
