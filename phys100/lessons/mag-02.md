---
id: mag-02
title: Electromagnetic induction
---
If currents make magnetic fields, can magnetic fields make currents? Faraday found they can, but only when the field **changes**. Almost all our electricity comes from this. (OpenStax College Physics 2e ch. 23)

::: rule
- **Electromagnetic induction:** a **changing** magnetic field through a coil makes a voltage in it. A magnet moving in or out of a coil works; a magnet sitting still does nothing.
- Faster change, or more turns, gives more voltage.
- A **generator** spins coils in a magnetic field: mechanical energy in, electrical energy out.
- A **transformer** changes the voltage of alternating current (AC):
$$\frac{V_{out}}{V_{in}} = \frac{N_{out}}{N_{in}}$$
- In an ideal transformer, power in = power out, so stepping voltage up steps current down.
:::

![](assets/mag-induce@3x.png)

::: example
A transformer has 1000 turns on its input side and 50 on its output side. Plugged into 240 V:
$$V_{out} = 240 \times \frac{50}{1000} = 12 \text{ V}$$
That's what's inside many phone and laptop chargers.
:::

::: problem id=p1 type=choice
A magnet sits motionless inside a coil connected to a meter. The meter shows:
- [ ] a steady current
- [x] no current
- [ ] a growing current
solution: Induction needs a *changing* field. Move the magnet and the needle jumps.
:::

::: problem id=p2 type=numeric answer="12"
A transformer has 100 turns on its input and 10 on its output. The input is 120 V. What is the output voltage, in volts?
![](assets/mag-transformer@3x.png)
solution: $120 \times 10/100 = 12$ V.
:::

::: problem id=p3 type=numeric answer="600"
A transformer has 10 input turns and 500 output turns. With 12 V in, what voltage comes out, in volts?
solution: $12 \times 500/10 = 600$ V: a step-up transformer.
:::

::: problem id=p4 type=numeric answer="20"
An ideal transformer takes in 120 V at 2 A and puts out 12 V. What current comes out, in amperes?
hint: Power in = power out.
solution: Power in $= 240$ W. Out: $240 / 12 = 20$ A.
:::

::: problem id=p5 type=choice
A generator converts:
- [x] mechanical energy into electrical energy
- [ ] electrical energy into mechanical energy
- [ ] heat into magnetism
solution: Something (steam, wind, water) turns its coils in a magnetic field. A motor does the reverse.
:::

::: problem id=p6 type=choice
Why don't transformers work with steady (DC) current from a battery?
- [ ] DC is too weak.
- [x] Steady current makes a steady magnetic field, and induction needs a changing one.
- [ ] Transformers only work on high voltage.
solution: AC reverses many times a second, so its field keeps changing.
:::

::: problem id=p7 type=choice creative=true
Power companies send electricity across the country at hundreds of thousands of volts. Why so high?
- [ ] High voltage travels faster.
- [x] For the same power, high voltage means low current, and low current wastes much less energy heating the wires.
- [ ] Homes need high voltage.
solution: $P = IV$: raise $V$ and $I$ drops. Wire heating grows with the *square* of the current, so a tenth of the current means a hundredth of the loss. Transformers step it back down near your home.
:::
