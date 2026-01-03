# Problem 1

A line in the plane is called sunny if it is not parallel to any of the $z$-axis (likely typo for $x$-axis in source context), the $y$-axis, and the line $x+y=0$.

Let $n \ge 3$ be a given integer. Determine all nonnegative integers $k$ such that there exist $n$ distinct lines in the plane satisfying both of the following:
For all positive integers $a$ and $b$ with $a+b \le n+1$, the point $(a, b)$ is on at least one of the lines.

Exactly $k$ of the $n$ lines are sunny.

Restatement:
Let $n \ge 3$ be a given integer. We want to determine all nonnegative integers $k$ such that there exist $n$ distinct lines in the plane that cover the set of points $P_{n}=\{(a,b)\in \mathbb{Z}^{+}\times\mathbb{Z}^{+}:a+b\le n+1\}$, and exactly $k$ of these lines are sunny.
Definitions:
A line is sunny if it is not parallel to the $x$-axis (Horizontal, H), the $y$-axis (Vertical, V), or the line $x+y=0$ (Diagonal, D, slope -1).

Lines of these three types are called shady.

Claim:
We will show that the possible values for $k$ are $\{0, 1, 3\}$.
The proof relies on reducing the problem to the specific case where $n=k$ and all lines must be sunny. Let $C(k)$ be the assertion that $P_{k}$ can be covered by $k$ distinct sunny lines. We define $P_{0}=\emptyset$.

1. The Reduction Principle
Let $\mathcal{L}$ be a set of $n$ distinct lines covering $P_{n}$. Let $k$ be the number of sunny lines. Let $N_{V}, N_{H}, N_{D}$ be the number of V, H, D lines in $\mathcal{L}$, respectively. Then $N_{V}+N_{H}+N_{D}= n-k$.

Lemma 1 (Structural Lemma).
The $N_{V}$ vertical lines in $\mathcal{L}$ must be $\{x=1, ..., x= N_{V}\}$12. The $N_{H}$ horizontal lines must be $\{y=1, ..., y=N_{H}\}$. The $N_{D}$ diagonal lines must be $\{x+y=s\}$ for $s=n+2-N_{D}, ..., n+1$.
Proof.
Consider the column $C_{a}=P_{n}\cap\{x=a\}$. We have $|C_{a}|=n+1-a$. Suppose $x=a$ is not in $\mathcal{L}$. The points in $C_{a}$ must be covered by the other lines in $\mathcal{L}$. The $N_{V}$ vertical lines in $\mathcal{L}$ are distinct from $x=a$, so they do not cover any point in $C_{a}$. The remaining $n-N_{V}$ non-vertical lines each cover at most one point in $C_{a}$.
Thus, $|C_{a}|\le n-N_{V}$. Since $n+1-a\le n-N_{V}$, this implies $a\ge N_{V}+1$. By contraposition, if $1\le a\le N_{V}$, the line $x=a$ must be in $\mathcal{L}$. Since there are exactly $N_{V}$ vertical lines in $\mathcal{L}$, these must be $\{x=1, ..., x=N_{V}\}$. The argument for horizontal lines is symmetric.
For diagonal lines, consider the anti-diagonal $D_{s}=P_{n}\cap\{x+y=s\}$. We have $|D_{s}|=s-1$. If $x+y=s$ is not in $\mathcal{L}$, the points in $D_{s}$ must be covered by the $n-N_{D}$ lines with slope $\ne -1$. Thus, $s-1\le n-N_{D}$, so $s\le n+1-N_{D}$16. By contraposition, if $s\ge n+2-N_{D}$, the line $x+y=s$ must be in $\mathcal{L}$.

Theorem 1 (Reduction Theorem).
For $n\ge3$ and $0\le k\le n$, a configuration of $n$ distinct lines covering $P_{n}$ with exactly $k$ sunny lines exists if and only if $C(k)$ is true.
Proof.
($\Rightarrow$) Let $\mathcal{L}$ be such a configuration. Let $N_{V}, N_{H}, N_{D}$ be the counts of the shady lines, $N_{V}+N_{H}+N_{D}=n-k$19. By Lemma 1, the set of shady lines $\mathcal{N}$ is determined.
Let $R$ be the set of points in $P_{n}$ not covered by $\mathcal{N}$. $R=\{(a,b)\in P_{n} \mid a>N_{V}, b > N_{H}, a+b\le n+1-N_{D}\}$212121. The $k$ sunny lines $\mathcal{S}\subset\mathcal{L}$ must cover $R$.
Consider the translation $T(a,b)=(a-N_{V}, b-N_{H})=(a^{\prime}, b^{\prime})$. If $(a,b)\in R$, then $a^{\prime}\ge1, b^{\prime}\ge1$. Also, $a^{\prime}+b^{\prime}=a+b-(N_{V}+N_{H})\le(n+1-N_{D})-(N_{V}+N_{H})=n+1-(n-k)=k+1$.
$T$ maps $R$ bijectively to $P_{k}$. The translated lines $T(\mathcal{S})$ cover $P_{k}$22. Since translation preserves slopes, these $k$ lines are distinct and sunny. Thus $C(k)$ is true.
($\Leftarrow$) Suppose $C(k)$ is true. Let $\mathcal{L}_{k}$ be $k$ distinct sunny lines covering $P_{k}$. Let $N=n-k$. We construct a configuration for $P_{n}$24. Let $\mathcal{N}$ be the set of $N$ diagonal lines $\{x+y=s \mid s=k+2, ..., n+1\}$. Let $\mathcal{L}=\mathcal{L}_{k}\cup\mathcal{N}$. This set has $n$ lines. They are distinct since lines in $\mathcal{L}_{k}$ have slope $\ne -1$ and lines in $\mathcal{N}$ have slope 1. They cover $P_{n}$.
If $(a,b)\in P_{n}$, then $2\le a+b\le n+1$. If $a+b\le k+1$, then $(a,b)\in P_{k}$, covered by $\mathcal{L}_{k}$27. If $k+2\le a+b\le n+1$ then $(a, b)$ is covered by $\mathcal{N}$. The configuration has exactly $k$ sunny lines.
2. Analysis of the Core Problem $C(k)$
We determine the values of $k\ge0$ for which $P_{k}$ can be covered by $k$ distinct sunny lines.

$k=0$: $P_{0}=\emptyset$. Covered by 0 lines. $C(0)$ is true.

$k=1$: $P_{1}=\{(1,1)\}$. Covered by $y=x$ (slope 1, sunny). $C(1)$ is true.

$k=2$: $P_{2}=\{(1,1),(1,2),(2,1)\}$. The lines connecting any pair of these points are $x=1$ (V), $y=1$ (H), or $x+y=3$ (D). All are shady. A sunny line can cover at most one point of $P_{2}$33. To cover the 3 points, we need at least 3 sunny lines. Thus $C(2)$ is false.

$k\ge3$: Let $T_{k}$ be the convex hull of $P_{k}$35. $T_{k}$ is the triangle with vertices $V_{1}=(1,1)$, $V_{2}=(1, k)$, $V_{3}=(k,1)$36. The edges of $T_{k}$ lie on the lines $x=1$ (V), $y=1$ (H), and $x+y=k+1$ (D). These lines are shady.
Let $B_{k}$ be the set of points in $P_{k}$ lying on the boundary of $T_{k}$. Each edge contains $k$ points. Since the vertices are distinct (as $k\ge2$), the total number of points on the boundary is $|B_{k}|=3k-3$.
Suppose $P_{k}$ is covered by $k$ sunny lines $\mathcal{L}_{k}$. These lines must cover $B_{k}$. Let $L\in\mathcal{L}_{k}$40. Since $L$ is sunny, it does not coincide with the lines containing the edges of $T_{k}$. A line that does not contain an edge of a convex polygon intersects the boundary of the polygon at most at two points.
Thus, $|L\cap B_{k}|\le2$. The total coverage of $B_{k}$ by $\mathcal{L}_{k}$ is at most $2k$. We must have $|B_{k}|\le2k$.
$$3k-3\le2k \implies k\le3$$
Since we assumed $k\ge3$, we must have $k=3$.
$k=3$: We verify $C(3)$. $P_{3}$ consists of 6 points: $(1,1), (1, 2), (1, 3), (2, 1), (2, 2), (3, 1)$45. We provide a covering with 3 sunny lines:

$L_{1}: y=x$ (slope 1). Covers $(1, 1), (2, 2)$.

$L_{2}: 2x+y=5$ (slope -2). Covers $(1,3), (2, 1)$.

$L_{3}: x+2y=5$ (slope $-1/2$). Covers $(1,2), (3, 1)$.
These lines are sunny and cover $P_{3}$. $C(3)$ is true.
3. Conclusion
The property $C(k)$ is true if and only if $k\in\{0,1,3\}$.
By the Reduction Theorem, for a given $n\ge3$, a configuration with $k$ sunny lines exists if and only if $C(k)$ is true and $k\le n$.
Since $n\ge3$, the condition $k\le n$ is satisfied for all $k\in\{0,1,3\}$.

The possible values for $k$ are 0, 1, and 353.

