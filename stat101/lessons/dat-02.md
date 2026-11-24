---
id: dat-02
title: Sampling methods and bias
---
A sample is only useful if it looks like the population. How you choose it matters more than how big it is. (OpenStax ch. 1)

::: rule
- **Simple random sample (SRS):** every group of $n$ individuals is equally likely to be chosen.
- **Stratified:** split the population into groups (strata) and take a random sample from **each** group.
- **Cluster:** split into groups (clusters), randomly pick some clusters, and measure **everyone** in them.
- **Systematic:** pick a random start, then take every $k$-th individual from a list ($k = N / n$).
- **Convenience:** take whoever is easy to reach. This is not random and often biased.
- **Bias** is a systematic error: the method tends to miss in the same direction. Common causes: **undercoverage**, **nonresponse**, **voluntary response** and **leading questions**.
:::

::: example
A school has 1,200 students in grades 9 to 12 and wants a sample of 60.
- Stratified: randomly pick 15 students from **each** grade.
- Cluster: number the 48 homerooms, randomly pick 2, survey every student in them.
- Systematic: $k = 1200 / 60 = 20$. Pick a random start from 1 to 20, say 7, then take students 7, 27, 47, ...
:::

::: problem id=p1 type=choice
A gym splits its members into men and women and randomly chooses 40 of each. This is a:
- [ ] simple random sample
- [x] stratified sample
- [ ] cluster sample
- [ ] convenience sample
solution: Random samples from **each** group: stratified.
:::

::: problem id=p2 type=choice
A city randomly picks 10 of its 120 city blocks and interviews every household on those blocks. This is a:
- [ ] stratified sample
- [x] cluster sample
- [ ] systematic sample
- [ ] simple random sample
solution: Some groups chosen at random, everyone in them measured: cluster.
:::

::: problem id=p3 type=numeric answer="25"
A factory makes 5,000 phones a day and wants a systematic sample of 200. Every how many phones should it take one?
solution: $k = N / n = 5000 / 200 = 25$.
:::

::: problem id=p4 type=choice
A radio host asks listeners to phone in and say whether they support a new tax. 80% of callers oppose it. The main problem is:
- [ ] the sample is too small
- [x] voluntary response bias
- [ ] it's a cluster sample
- [ ] nothing: 80% is clear
solution: People with strong feelings (often negative) choose to call. The sample doesn't represent all listeners, let alone all voters.
:::

::: problem id=p5 type=choice
A phone survey only calls landlines. Which bias is this most likely to cause?
- [x] undercoverage
- [ ] nonresponse
- [ ] a leading question
- [ ] no bias
solution: People without landlines (often younger people) can't be chosen, so part of the population is left out.
:::

::: problem id=p6 type=choice
"Don't you agree that the unfair parking fee should be removed?" is an example of:
- [ ] nonresponse
- [ ] undercoverage
- [x] a leading question
- [ ] stratified sampling
solution: The word "unfair" and "don't you agree" push people toward one answer.
:::

::: problem id=p7 type=numeric answer="30"
A university has 6,000 first-years, 4,000 second-years and 2,000 others. A stratified sample of 60 takes each group in proportion to its size. How many first-years are in it?
solution: First-years are $6000 / 12000 = 1/2$ of the population, so $60 / 2 = 30$.
:::

::: problem id=p8 type=choice creative=true
Making a biased sample much **bigger** (say, from 500 to 50,000 people chosen the same way):
- [ ] removes the bias
- [x] doesn't fix the bias
- [ ] always makes the bias worse
solution: A bigger sample reduces random variation, but a systematic error stays: you just get a more precise wrong answer.
:::
