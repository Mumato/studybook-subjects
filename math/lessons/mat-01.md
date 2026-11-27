---
id: mat-01
title: Matrices and row reduction
---
A **matrix** is a rectangle of numbers. Writing a system of equations as a matrix lets you solve it with a few simple, repeatable moves.

::: rule
The **augmented matrix** of a system keeps only the numbers: one row per equation, one column per unknown, then the constants after a bar. Entry $(i, j)$ is in row i, column j.

**Row operations** (they don't change the solutions):
- swap two rows
- multiply a row by a non-zero number
- add a multiple of one row to another: $R_2 \to R_2 + kR_1$

**Gaussian elimination:** use row operations to get zeros **below** the diagonal (row-echelon form), then solve from the bottom row up (back-substitution).
- a row $[0 \;\, 0 \mid c]$ with $c \ne 0$ means **no solution**
- a row of all zeros (with fewer leading entries than unknowns) means **infinitely many** solutions
:::

::: example
$x + 2y = 5$ and $3x - y = 1$:
$$\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 3 & -1 & 1 \end{array}\right]$$
$R_2 \to R_2 - 3R_1$:
$$\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 0 & -7 & -14 \end{array}\right]$$
Row 2: $-7y = -14$, so $y = 2$.
Row 1: $x + 4 = 5$, so $x = 1$.
:::

::: example
$x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.

$R_2 - 2R_1$ and $R_3 - R_1$, then swap $R_2$, $R_3$:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & -3 & -1 & -9 \end{array}\right]$$
$R_3 \to R_3 + 3R_2$ gives $[0 \;\, 0 \;\, {-7} \mid {-21}]$.

So $z = 3$, then $y = -4 + 6 = 2$, then $x = 6 - 2 - 3 = 1$.
:::

::: problem id=p1 type=numeric answer="4"
Write the augmented matrix of $2x - 3y = 7$ and $x + 4y = -2$. What is entry $(2, 2)$?
solution: Row 2 is $[1 \;\, 4 \mid -2]$: entry $(2, 2)$ is 4.
:::

::: problem id=p2 type=choice
Apply $R_2 \to R_2 - 2R_1$ to this matrix. What is the new row 2?
$$\left[\begin{array}{cc|c} 1 & 3 & 4 \\ 2 & 5 & 6 \end{array}\right]$$
- [x] $[0 \;\, {-1} \mid {-2}]$
- [ ] $[0 \;\, 1 \mid 2]$
- [ ] $[0 \;\, {-1} \mid 2]$
- [ ] $[2 \;\, 5 \mid 6]$
solution: $[2 - 2,\; 5 - 6 \mid 6 - 8] = [0 \;\, {-1} \mid {-2}]$.
:::

::: problem id=p3 type=numeric answer="2"
This is the augmented matrix of a system in x and y. What is x?
$$\left[\begin{array}{cc|c} 1 & 2 & 8 \\ 0 & 1 & 3 \end{array}\right]$$
solution: Row 2: $y = 3$. Row 1: $x + 6 = 8$, so $x = 2$.
:::

::: problem id=p4 type=numeric answer="3"
Solve by elimination: $x + y = 7$ and $2x - y = 2$. What is x?
solution: $R_2 \to R_2 - 2R_1$: $-3y = -12$, so $y = 4$.
Then $x = 7 - 4 = 3$.
:::

::: problem id=p5 type=numeric answer="2"
This is the augmented matrix of a system in x, y, z. What is x?
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 2 & 7 \\ 0 & 0 & 1 & 3 \end{array}\right]$$
solution: $z = 3$. $y + 6 = 7$, $y = 1$. $x + 1 + 3 = 6$, $x = 2$.
:::

::: problem id=p6 type=choice
Row reduction gives a row $[0 \;\, 0 \mid 5]$. What does the system have?
- [x] no solution
- [ ] infinitely many solutions
- [ ] exactly one solution
- [ ] the solution $x = 5$
solution: The row says $0x + 0y = 5$, which is impossible.
:::

::: problem id=p7 type=numeric answer="-1"
Solve $x + y + z = 2$, $x - y + z = 0$, $x + y - z = 4$. What is z?
hint: Subtract the third equation from the first.
solution: $R_1 - R_3$: $2z = -2$, $z = -1$.
$R_1 - R_2$: $2y = 2$, $y = 1$. Then $x = 2$.
:::

::: problem id=p8 type=numeric answer="-3"
Apply $R_2 \to R_2 - 4R_1$. What is the new entry $(2, 2)$?
$$\left[\begin{array}{cc|c} 1 & 2 & 3 \\ 4 & 5 & 6 \end{array}\right]$$
solution: $5 - 4 \times 2 = -3$.
:::

::: problem id=c1 type=numeric answer="3" creative=true
A shop sells pens, notebooks and folders. One of each costs 9 dollars. Two pens and a notebook cost 8 dollars. A pen and two folders cost 8 dollars. How much is a folder?
hint: Let p, n, f be the prices and write three equations.
solution: $p + n + f = 9$, $2p + n = 8$, $p + 2f = 8$.
First minus second: $f - p = 1$, so $f = p + 1$.
Then $p + 2p + 2 = 8$: $p = 2$, $f = 3$ (and $n = 4$).
:::

::: problem id=x1 type=numeric answer="7" set=extra
Write the augmented matrix of $5x - y = 3$ and $2x + 7y = 1$. What is entry $(2, 2)$?
solution: Row 2 is $[2 \;\, 7 \mid 1]$: entry 7.
:::

::: problem id=x2 type=numeric answer="-1" set=extra
Write the augmented matrix of $x + 2y - z = 4$, $3y + z = 0$, $2x - z = 5$. What is entry $(3, 3)$?
solution: Row 3 is $[2 \;\, 0 \;\, {-1} \mid 5]$ (no y means 0): entry $-1$.
:::

::: problem id=x3 type=choice set=extra
Which of these is **not** a row operation?
- [x] add 3 to every entry of a row
- [ ] swap two rows
- [ ] multiply a row by $-2$
- [ ] add twice row 1 to row 2
solution: Adding a number to every entry turns the equation into a different one, so the solutions change. The other three are the legal moves.
:::

::: problem id=x4 type=numeric answer="1" set=extra
What is x?
$$\left[\begin{array}{cc|c} 1 & 4 & 9 \\ 0 & 1 & 2 \end{array}\right]$$
solution: $y = 2$, then $x + 8 = 9$, $x = 1$.
:::

::: problem id=x5 type=numeric answer="2" set=extra
What is x?
$$\left[\begin{array}{cc|c} 2 & 1 & 7 \\ 0 & 3 & 9 \end{array}\right]$$
solution: $3y = 9$, $y = 3$. $2x + 3 = 7$, $x = 2$.
:::

::: problem id=x6 type=numeric answer="16" set=extra
Apply $R_2 \to R_2 + 3R_1$. What is the new constant in row 2?
$$\left[\begin{array}{cc|c} 1 & -2 & 5 \\ -3 & 4 & 1 \end{array}\right]$$
solution: $1 + 3 \times 5 = 16$. (Row 2 becomes $[0 \;\, {-2} \mid 16]$.)
:::

::: problem id=x7 type=numeric answer="1" set=extra
Solve $2x + y = 5$ and $x - y = 1$. What is y?
solution: Adding: $3x = 6$, $x = 2$. Then $y = 2 - 1 = 1$.
:::

::: problem id=x8 type=numeric answer="3" set=extra
Solve $3x + 2y = 12$ and $x + 2y = 8$. What is y?
solution: $R_1 - R_2$: $2x = 4$, $x = 2$. Then $2 + 2y = 8$, $y = 3$.
:::

::: problem id=x9 type=choice set=extra
Row reduction gives this. How many solutions are there?
$$\left[\begin{array}{cc|c} 1 & 3 & 2 \\ 0 & 0 & 0 \end{array}\right]$$
- [x] infinitely many
- [ ] none
- [ ] exactly one
- [ ] exactly two
solution: Only one real equation, $x + 3y = 2$, for two unknowns: every point on that line works.
:::

::: problem id=x10 type=numeric answer="2" set=extra
What is x?
$$\left[\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & 1 & 3 & 11 \\ 0 & 0 & 2 & 6 \end{array}\right]$$
solution: $z = 3$. $y + 9 = 11$, $y = 2$.
$x + 4 - 3 = 3$, $x = 2$.
:::

::: problem id=x11 type=numeric answer="-3" set=extra
Which k in $R_2 \to R_2 + kR_1$ makes entry $(2, 1)$ zero?
$$\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 6 & -1 & 4 \end{array}\right]$$
solution: $6 + 2k = 0$, so $k = -3$.
:::

::: problem id=x12 type=numeric answer="3" set=extra
From this matrix Sam gets $y = 12$. What is y really?
$$\left[\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & 2 & 6 \end{array}\right]$$
solution: Row 2 says $2y = 6$: divide, don't multiply. $y = 3$.
:::

::: problem id=x13 type=numeric answer="3" set=extra
Solve $x + y + z = 6$, $y + z = 5$, $z = 2$. What is y?
solution: $y = 5 - 2 = 3$ (and $x = 1$).
:::

::: problem id=x14 type=numeric answer="12" set=extra
A show sold 20 tickets for 160 dollars. Adult tickets cost 10 dollars and child tickets 5 dollars. How many adult tickets were sold?
solution: $a + c = 20$ and $10a + 5c = 160$.
$R_2 - 5R_1$: $5a = 60$, $a = 12$.
:::

::: problem id=x15 type=choice set=extra
Which system has no solution?
- [x] $x + y = 3$ and $2x + 2y = 7$
- [ ] $x + y = 3$ and $2x + 2y = 6$
- [ ] $x + y = 3$ and $x - y = 1$
- [ ] $x + 2y = 3$ and $2x + y = 3$
solution: $R_2 - 2R_1$ gives $[0 \;\, 0 \mid 1]$: impossible.
:::

::: problem id=x16 type=numeric answer="6" set=extra
For which k does $x + 2y = 3$, $2x + 4y = k$ have infinitely many solutions?
solution: $R_2 - 2R_1$ gives $[0 \;\, 0 \mid k - 6]$. All zeros needs $k = 6$.
:::

::: problem id=x17 type=numeric answer="3" set=extra
Solve $x + 2y + z = 8$, $2x + y - z = 1$, $x - y + 2z = 5$. What is z?
hint: Eliminate x from rows 2 and 3 first.
solution: $R_2 - 2R_1$: $-3y - 3z = -15$, so $y + z = 5$.
$R_3 - R_1$: $-3y + z = -3$.
Subtract: $4y = 8$, $y = 2$, $z = 3$ (and $x = 1$).
:::

::: problem id=x18 type=numeric answer="6" set=extra
Three numbers add to 12. The first is twice the second, and the third is the first plus the second. What is the third?
hint: Substitute $a = 2b$ and $c = a + b$ into the sum.
solution: $2b + b + 3b = 12$, so $b = 2$, $a = 4$, $c = 6$.
:::

::: problem id=x19 type=numeric answer="2" set=extra
Solve $2x + y - z = 3$, $x - y + z = 0$, $3x + 2y + z = 8$. What is y?
hint: Adding the first two rows removes y and z.
solution: $3x = 3$, $x = 1$. Then $y - z = 1$ and $2y + z = 5$.
Adding: $3y = 6$, $y = 2$ (and $z = 1$).
:::

::: problem id=x20 type=numeric answer="2" set=extra creative=true
The parabola $y = ax^2 + bx + c$ passes through $(1, 2)$, $(2, 7)$ and $(-1, 4)$. What is a?
hint: Each point gives one linear equation in a, b, c.
solution: $a + b + c = 2$, $4a + 2b + c = 7$, $a - b + c = 4$.
First minus third: $2b = -2$, $b = -1$.
Then $a + c = 3$ and $4a + c = 9$: $a = 2$, $c = 1$.
:::
