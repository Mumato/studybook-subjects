---
id: prb-03
title: Conditional probability and independence
---
Knowing that one thing happened can change the chance of another. "Given B" means you only look at the cases where B happened. (OpenStax ch. 3)

::: rule
- **Conditional probability:** $P(A \mid B) = \frac{P(A \text{ and } B)}{P(B)}$.
- **Multiplication rule:** $P(A \text{ and } B) = P(B) \cdot P(A \mid B)$.
- A and B are **independent** when knowing one doesn't change the other: $P(A \mid B) = P(A)$. Then $P(A \text{ and } B) = P(A) \cdot P(B)$.
- Drawing **without replacement** makes draws dependent: the second draw's chances depend on the first.
:::

::: example
Of 200 students, 120 own a laptop and 50 own a laptop and a tablet.
$P(\text{tablet} \mid \text{laptop}) = \frac{50}{120} = 0.417$: among laptop owners, 41.7% also own a tablet.
Two cards drawn without replacement are both aces with probability $\frac{4}{52} \cdot \frac{3}{51} = 0.0045$.
:::

::: problem id=p1 type=numeric answer="5/9" tolerance=0.001
Of 200 students, 90 own a tablet and 50 own both a laptop and a tablet. What is $P(\text{laptop} \mid \text{tablet})$? (A fraction, or 3 decimals.)
solution: $50 / 90 = 5/9 = 0.556$.
:::

::: problem id=p2 type=numeric answer="0.6"
$P(A \text{ and } B) = 0.24$ and $P(B) = 0.4$. Find $P(A \mid B)$.
solution: $0.24 / 0.4 = 0.6$.
:::

::: problem id=p3 type=numeric answer="0.42"
You pass a math test with probability 0.7 and a chemistry test with probability 0.6, independently. What is the probability you pass both?
solution: Independent: $0.7 \times 0.6 = 0.42$.
:::

::: problem id=p4 type=numeric answer="0.88"
Same tests. What is the probability you pass **at least one**?
hint: The complement is failing both.
solution: Fail both: $0.3 \times 0.4 = 0.12$. At least one: $1 - 0.12 = 0.88$.
:::

::: problem id=p5 type=numeric answer="1/221" tolerance=0.0001
Two cards are drawn **without replacement**. What is the probability both are aces? (A fraction, or 4 decimals.)
solution: $\frac{4}{52} \cdot \frac{3}{51} = \frac{12}{2652} = \frac{1}{221} = 0.0045$.
:::

::: problem id=p6 type=choice
$P(A) = 0.4$, $P(B) = 0.5$ and $P(A \text{ and } B) = 0.2$. Are A and B independent?
- [x] Yes, because $0.4 \times 0.5 = 0.2$
- [ ] No, because $0.2 \ne 0.9$
- [ ] No, because they overlap
solution: $P(A) P(B) = 0.2 = P(A \text{ and } B)$, so they're independent. Overlapping is not the same as dependent.
:::

::: problem id=p7 type=numeric answer="0.0016"
A machine part fails with probability 0.04, independently of a second identical part. What is the probability both fail?
solution: $0.04 \times 0.04 = 0.0016$. That's why backups are used.
:::
