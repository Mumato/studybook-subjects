---
id: oli-03
title: Game theory
---
Game theory studies choices whose results depend on what others choose: perfect for oligopolies.

::: rule
A **payoff matrix** lists what each player gets for every pair of choices.
- A **dominant strategy** is best for a player **whatever** the other does.
- A **Nash equilibrium** is a pair of choices where each player's choice is best **given** the other's: no one wants to switch alone.
- In a **prisoner's dilemma**, each player's dominant strategy leads to an outcome worse for both than if they had cooperated.
- In **repeated** games, strategies like tit-for-tat (copy what the rival did last time) can sustain cooperation.
:::

::: example
Two stores choose a High or Low price. Profits (A, B):
- both High: (10, 10); A Low, B High: (15, 2); A High, B Low: (2, 15); both Low: (5, 5).
If B is High, A earns more with Low (15 > 10); if B is Low, A still does better with Low (5 > 2). Low is dominant for both, so the Nash equilibrium is both Low, (5, 5), worse for both than (10, 10).
:::

::: problem id=p1 type=choice
Profits (A, B): both High (10, 10); A Low, B High (15, 2); A High, B Low (2, 15); both Low (5, 5). What is A's dominant strategy?
- [ ] High
- [x] Low
- [ ] A has none
solution: Low beats High whether B picks High (15 > 10) or Low (5 > 2).
:::

::: problem id=p2 type=numeric answer="5"
In that game (both High (10, 10); A Low, B High (15, 2); A High, B Low (2, 15); both Low (5, 5)), what does each store earn in the Nash equilibrium?
solution: Both choose Low: 5 each.
:::

::: problem id=p3 type=numeric answer="4"
Two firms decide whether to advertise. Profits (A, B): both advertise (4, 4); only A advertises (8, 1); only B advertises (1, 8); neither (6, 6). What does A earn in the Nash equilibrium?
solution: Advertising is dominant for each (8 > 6 and 4 > 1), so both advertise: A earns 4.
:::

::: problem id=p4 type=choice
The advertising game above is a prisoner's dilemma because:
- [x] both would earn more if neither advertised, but each has reason to advertise
- [ ] one firm always wins
- [ ] there's no Nash equilibrium
- [ ] the firms can't see the payoffs
solution: (6, 6) beats (4, 4), yet each firm's dominant strategy is to advertise.
:::

::: problem id=p5 type=choice
Payoffs (A, B): A Up and B Left (3, 2); A Up and B Right (1, 1); A Down and B Left (0, 0); A Down and B Right (2, 3). Which pair is a Nash equilibrium?
- [x] A Up, B Left
- [ ] A Up, B Right
- [ ] A Down, B Left
solution: At (Up, Left), A would get 0 by switching to Down (less than 3) and B would get 1 by switching to Right (less than 2). Neither wants to move. (A Down, B Right is also one.)
:::

::: problem id=p6 type=choice
Two firms play the pricing game every month for years. Cooperation is more likely because:
- [x] cheating today can be punished next month (tit-for-tat)
- [ ] the payoffs change every month
- [ ] dominant strategies disappear
- [ ] the government sets the price
solution: A rival who cuts its price can expect its competitor to cut back, so keeping prices high pays over time.
:::

::: problem id=p7 type=choice
A Nash equilibrium is a situation where:
- [ ] both players get the highest possible payoff
- [x] no player can do better by changing only their own choice
- [ ] players cooperate
- [ ] one player has a dominant strategy
solution: Each is doing their best given what the other does. It need not be the best outcome for both.
:::
