---
id: hea-03
title: Phase changes and thermodynamics
---
Melting and boiling soak up heat without warming anything. Engines turn heat into work, but never all of it. Two laws of thermodynamics govern every heat engine, fridge and living thing. (OpenStax College Physics 2e ch. 14-15)

::: rule
- While a substance **melts or boils**, the heat added breaks bonds instead of raising the temperature, so the temperature stays flat. Freezing and condensing give that heat back. **Evaporation cools**: the fastest molecules leave.
- **First law:** energy is conserved. Heat added = increase in internal energy + work done by the system.
- **Second law:** heat flows on its own only from hot to cold. No engine can turn all its heat into work. The best possible (ideal) efficiency, with temperatures in kelvin, is
$$\text{efficiency} = 1 - \frac{T_{cold}}{T_{hot}}$$
:::

![Heating ice until it boils away](assets/hea-curve.3x.png)

::: example
An engine takes in heat at 600 K and dumps waste heat at 300 K. Its ideal efficiency is
$$1 - \frac{300}{600} = 0.5 = 50\%$$
A real engine does worse, because of friction and other losses.
:::

::: problem id=p1 type=choice
A pot of water boils at 100 °C on a hot stove. Turning the burner up higher:
- [ ] raises the water's temperature above 100 °C
- [x] keeps it at 100 °C, but makes it boil away faster
- [ ] cools the water
solution: While it boils, the extra heat goes into turning water into steam, not into raising the temperature.
:::

::: problem id=p2 type=numeric answer="300"
A gas takes in 500 J of heat and does 200 J of work pushing a piston. By how much does its internal energy rise, in joules?
solution: First law: $500 = \Delta U + 200$, so $\Delta U = 300$ J.
:::

::: problem id=p3 type=numeric answer="40"
An engine runs between 500 K and 300 K. What is its ideal efficiency, in percent?
solution: $1 - 300/500 = 0.4 = 40\%$.
:::

::: problem id=p4 type=choice
Why does sweating cool you down?
- [ ] Sweat is colder than your skin.
- [x] Evaporating sweat carries heat away from your skin.
- [ ] Sweat reflects sunlight.
solution: The fastest-moving molecules escape as vapour, taking energy with them.
:::

::: problem id=p5 type=choice
You leave a fridge door open in a closed, insulated room, with the fridge running. The room:
- [ ] cools down
- [ ] stays the same
- [x] slowly warms up
solution: The fridge just moves heat from inside to the coils at the back, and its motor adds heat too. Overall, electrical energy ends up as heat in the room.
:::

::: problem id=p6 type=numeric answer="0"
Two blocks at the same temperature are pressed together. How much heat flows between them, in joules?
solution: Heat flows only when there's a temperature difference: none here.
:::

::: problem id=p7 type=choice creative=true
Steam at 100 °C causes much worse burns than boiling water at 100 °C. Why?
- [ ] Steam is actually hotter.
- [x] Steam condensing on your skin gives up its large latent heat before it even starts to cool.
- [ ] Steam moves faster.
solution: Each gram of steam that turns back into water releases about 2260 J, more than five times the heat that gram gives off cooling all the way from 100 °C to 0 °C.
:::
