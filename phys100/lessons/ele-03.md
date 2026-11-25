---
id: ele-03
title: Series and parallel circuits
---
Old holiday lights went dark when one bulb failed; the lights in your house don't. The difference is how the parts are connected. (OpenStax College Physics 2e ch. 21)

::: rule
- **Series:** one path. The same current flows through every part; resistances **add**: $R = R_1 + R_2$. If one part breaks, the whole circuit stops.
- **Parallel:** separate branches. Each branch gets the **full voltage** and works on its own. More branches mean **more total current** from the source.
- Homes are wired in **parallel**. A **fuse** or **circuit breaker** cuts the power if too much current flows.
:::

![](assets/ele-series@3x.png)

![](assets/ele-parallel@3x.png)

::: example
Two 3 Ω bulbs on a 12 V battery.
- In series: $R = 6$ Ω, so $I = 12/6 = 2$ A through both.
- In parallel: each bulb gets 12 V, so each carries $12/3 = 4$ A, and the battery supplies $4 + 4 = 8$ A. The parallel bulbs glow brighter, and drain the battery faster.
:::

::: problem id=p1 type=numeric answer="2"
A 2 Ω and a 4 Ω resistor are in series with a 12 V battery. What current flows, in amperes?
solution: $R = 2 + 4 = 6$ Ω; $I = 12/6 = 2$ A.
:::

::: problem id=p2 type=numeric answer="6"
Three 2 Ω resistors are connected in series. What is their total resistance, in ohms?
solution: $2 + 2 + 2 = 6$ Ω.
:::

::: problem id=p3 type=numeric answer="4"
Two 6 Ω bulbs are connected in parallel to a 12 V battery. What total current does the battery supply, in amperes?
solution: Each bulb gets 12 V: $12/6 = 2$ A each, $4$ A in total.
:::

::: problem id=p4 type=choice
In the series circuit, one bulb burns out. What happens to the other?
![](assets/ele-series@3x.png)
- [ ] It glows brighter.
- [x] It goes out too.
- [ ] Nothing changes.
solution: There's only one path: a break anywhere stops the current everywhere.
:::

::: problem id=p5 type=choice
In the parallel circuit, one bulb burns out. What happens to the other?
![](assets/ele-parallel@3x.png)
- [x] It stays lit just as before.
- [ ] It goes out.
- [ ] It gets dimmer.
solution: Its own branch still connects it across the full battery voltage.
:::

::: problem id=p6 type=choice
You plug more and more appliances into one wall circuit. The total current in the circuit's wires:
- [x] increases, until the breaker may trip
- [ ] decreases
- [ ] stays the same
solution: Each appliance is another parallel branch drawing its own current.
:::

::: problem id=p7 type=choice creative=true
A bird sits on a bare high-voltage power line and is perfectly safe. Why?
- [ ] Birds' feet are insulators.
- [ ] The line's voltage is too low to matter.
- [x] Both feet are on the same wire, so there's almost no voltage between them and almost no current flows through the bird.
solution: Current needs a voltage difference. If the bird touched the line and a pole (or another wire) at the same time, it would complete a circuit, with deadly results.
:::
