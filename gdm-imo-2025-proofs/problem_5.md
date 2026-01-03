# Problem 5

Alice and Bazza are playing the inekoalaty game, a two-player game whose rules depend on a positive real number $\lambda$ which is known to both players.
On the $n^{th}$ turn of the game (starting with $n=1$) the following happens:
If $n$ is odd, Alice chooses a nonnegative real number $x_{n}$ such that

$$x_{1}+x_{2}+\cdot\cdot\cdot+x_{n}\le\lambda n$$

If $n$ is even, Bazza chooses a nonnegative real number $x_{n}$ such that

$$x_{1}^{2}+x_{2}^{2}+\cdot\cdot\cdot+x_{n}^{2}\le n$$

If a player cannot choose a suitable number $x_{n}$, the game ends and the other player wins. If the game goes on forever, neither player wins. All chosen numbers are known to both players.

Determine all values of $\lambda$ for which Alice has a winning strategy and all those for which Bazza has a winning strategy.

We determine the values of $\lambda$ for which Alice has a winning strategy and those for which Bazza has a winning strategy.
Let $S_{n}=\sum_{i=1}^{n}x_{i}$ and $Q_{n}=\sum_{i=1}^{n}x_{i}^{2}$. Alice (A) plays at odd $n$, ensuring $x_{n}\ge0$ and $S_{n}\le\lambda n$212. Bazza (B) plays at even $n$, ensuring $x_{n}\ge0$ and $Q_{n}\le n$.
The critical value for $\lambda$ is $1/\sqrt{2}$.
Case 1: $0<\lambda<\frac{1}{\sqrt{2}}$. Bazza has a winning strategy.
Let $\delta=\sqrt{2}-2\lambda$. Since $\lambda<\frac{1}{\sqrt{2}}$, we have $\delta>0$.
Bazza's strategy (B-MaxQ) is to ensure $Q_{2k}=2k$ at every turn $n=2k$. This requires choosing $x_{2k}=\sqrt{2k-Q_{2k-1}}$. This is feasible if $Q_{2k-1}\le2k$.
Let $C_{k}=\lambda(2k-1)-S_{2k-2}$216. $C_{k}$ be the budget available to Alice at the start of turn $2k-1$ (with $S_{0}=0$). Alice must choose $x_{2k-1}\in[0,C_{k}]$.
If $C_{k}<0$, Alice loses immediately. We analyze the evolution of $C_{k}$ assuming the game continues and Bazza follows B-MaxQ.
$C_{k+1}=\lambda(2k+1)-S_{2k}=C_{k}+2\lambda-(x_{2k-1}+x_{2k})$.
If Bazza successfully follows B-MaxQ up to turn $2k$, then $Q_{2k}=2k$ and $Q_{2k-2}=2k-2$. Thus, $x_{2k-1}^{2}+x_{2k}^{2}=Q_{2k}-Q_{2k-2}=2$. Since $x_{i}\ge0$, $(x_{2k-1}+x_{2k})^{2}=2+2x_{2k-1}x_{2k}\ge2$. So $x_{2k-1}+x_{2k}\ge\sqrt{2}$.
Therefore, $C_{k+1}\le C_{k}+2\lambda-\sqrt{2}=C_{k}-\delta$.
We must verify that B-MaxQ is always feasible as long as the game continues (i.e., $C_{k}\ge0$).
We proceed by induction. $C_{1}=\lambda$. Since $\delta>0$, if $C_{k}>0$ the sequence $C_{k}$ is strictly decreasing. Thus $C_{k}\le C_{1}=\lambda$. Since $\lambda<1/\sqrt{2}$, Alice must choose $x_{2k-1}\le C_{k}<1/\sqrt{2}$.
If Bazza maintained $Q_{2k-2}=2k-2$ then $Q_{2k-1}=Q_{2k-2}+x_{2k-1}^{2}=2k-2+x_{2k-1}^{2}< 2k-2+1/2=2k-3/2$. Since $Q_{2k-1}<2k$, Bazza can choose $x_{2k}$ to achieve $Q_{2k}=2k$. B-MaxQ is always feasible.
Since $C_{k+1}\le C_{k}-\delta$, the budget decreases by at least $\delta$ in each round pair.
$C_{k}\le C_{1}-(k-1)\delta=\lambda-(k-1)\delta$. Since $\lambda$ is fixed and $\delta>0$, there exists an integer $K$ such that $(K-1)\delta>\lambda$. For this $K$, $C_{K}<0$.
At turn $2K-1$, Alice needs to choose $x_{2K-1}\ge0$ such that $x_{2K-1}\le C_{K}$. Since $C_{K}<0$, no such choice exists. Bazza wins.
Case 2: $\lambda>\frac{1}{\sqrt{2}}$. Alice has a winning strategy.
Consider the function $h(K)=\frac{K\sqrt{2}}{2K-1}$ for $K\ge1$. $h(K)$ is strictly decreasing and $\lim_{K\rightarrow\infty}h(K)=1/\sqrt{2}$. Since $\lambda>1/\sqrt{2}$, there exists an integer $K\ge1$ such that $\lambda>h(K)$. This implies $L=\lambda(2K-1)>K\sqrt{2}$.

Alice's strategy (A-Spike-K): Play $x_{2i-1}=0$ for $i=1, ..., K-1$. At turn $2K-1$, play the maximum possible value.
First, we verify the feasibility. For $i<K$, Alice plays $x_{2i-1}=0$. She needs $S_{2i-1}=S_{2i-2}\le\lambda(2i-1)$. Bazza is constrained by $Q_{2i-2}\le2(i-1)$.
By the QM-AM inequality (or Cauchy-Schwarz), $S_{2i-2}\le\sqrt{(i-1)Q_{2i-2}}\le\sqrt{(i-1)2(i-1)}=(i-1)\sqrt{2}$. We check the constraint: $(i-1)\sqrt{2}\le\lambda(2i-1)$, or $\lambda\ge\frac{(i-1)\sqrt{2}}{2i-1}$. The RHS is an increasing sequence converging to $1/\sqrt{2}$. Since $\lambda>1/\sqrt{2}$, the strategy is feasible.
Now we analyze the outcome. Let $N=K-1$. Bazza has made $N$ moves $y_{i}=x_{2i}$ $(i=1, ..., N)$. At turn $2K-1$, Alice plays $x_{2K-1}=L-S_{2N}$. Since $S_{2N}\le N\sqrt{2}$ and $L>K\sqrt{2}=(N+1)\sqrt{2}$, $x_{2K-1}>\sqrt{2}>0$.
Alice wins if Bazza cannot move at turn $2K$, i.e., $Q_{2K-1}>2K$. $Q_{2K-1}=Q_{2N}+(L-S_{2N})^{2}$.
Bazza aims to minimize this quantity subject to his constraints: $y_{i}\ge0$ and $\sum_{j=1}^{i}y_{j}^{2}\le2i$. These constraints imply $Q_{2N}\le2N$, and consequently $S_{2N}\le N\sqrt{2}$.
Let $F(y)=Q_{2N}(y)+(L-S_{2N}(y))^{2}$. Consider the strategy $y^{*}=(\sqrt{2}, ..., \sqrt{2})$. This is feasible for Bazza as $\sum_{j=1}^{i}(\sqrt{2})^{2}=2i$. Let $S^{*}=N\sqrt{2}$ and $Q^{*}=2N$.
Let $y$ be any feasible strategy for Bazza. Let $\Delta S=S^{*}-S_{2N}(y)\ge0$. We compare $F(y)$ with $F(y^{*})$.
We use the identity $(y_{i}-\sqrt{2})^{2} = y_i^2 - 2y_i\sqrt{2} + 2$.
$Q_{2N}(y) = Q_{2N}(y)-2\sqrt{2}S_{2N}(y)+4N + 2\sqrt{2}S_{2N}(y)-4N$.
Actually, from source 290:
$Q_{2N}(y) - Q^{*} = \sum(y_{i}-\sqrt{2})^{2} + 2\sqrt{2}S_{2N}(y) - 4N = \sum(y_{i}-\sqrt{2})^{2} + 2\sqrt{2}(S^* - \Delta S) - 2\sqrt{2}S^* = \sum(y_{i}-\sqrt{2})^{2} - 2\sqrt{2}\Delta S$.
$F(y)-F(y^{*}) = Q_{2N}(y)-Q^{*}+(L-S_{2N}(y))^{2}-(L-S^{*})^{2}$.
$(L-S_{2N}(y))^{2} = (L-(S^{*}-\Delta S))^{2} = (L-S^{*})^{2} + 2(L-S^{*})\Delta S + (\Delta S)^{2}$.
$F(y)-F(y^{*}) = (\sum(y_{i}-\sqrt{2})^{2}-2\sqrt{2}\Delta S) + 2(L-S^{*})\Delta S + (\Delta S)^{2}$.
$F(y)-F(y^{*}) = \sum(y_{i}-\sqrt{2})^{2} + 2(L-S^{*}-\sqrt{2})\Delta S + (\Delta S)^{2}$.
By the choice of $K$, $L>K\sqrt{2}=(N+1)\sqrt{2}=S^{*}+\sqrt{2}$. Let $\epsilon=L-S^{*}-\sqrt{2}>0$.
$F(y)-F(y^{*})=\sum(y_{i}-\sqrt{2})^{2}+2\epsilon\Delta S+(\Delta S)^{2}$. Since all terms are non-negative, $F(y)\ge F(y^{*})$.
The minimum value of $Q_{2K-1}$ is $F(y^{*})$.
$Q_{2K-1}\ge F(y^{*})=2N+(L-N\sqrt{2})^{2}=2N+(\sqrt{2}+\epsilon)^{2}$. Since $\epsilon>0$, $(\sqrt{2}+\epsilon)^{2}>2$.
$Q_{2K-1}>2N+2=2K$. Bazza cannot move at turn $2K$. Alice wins.
Case 3: $\lambda=\frac{1}{\sqrt{2}}$. Neither player has a winning strategy.
We show that both players have a strategy to ensure the game continues forever (a draw).

Alice's drawing strategy (A-Zero): $x_{2k-1}=0$ for all $k$. We verify the game continues forever.
Alice's feasibility at turn $2k-1$: We need $S_{2k-2}\le\lambda(2k-1)$. Bazza maximizes $S_{2k-2}$ subject to $Q_{2k-2}\le2k-2$, achieving at most $(k-1)\sqrt{2}$.
We check: $(k-1)\sqrt{2}\le\frac{1}{\sqrt{2}}(2k-1)\iff2k-2\le2k-1$. True.
Bazza's survival at turn $2k$: We need $Q_{2k-1}\le2k$. $Q_{2k-1}=Q_{2k-2}\le2k-2<2k$. Bazza survives.
Alice's survival at turn $2k+1$: We need $S_{2k}\le\lambda(2k+1)$. Bazza maximizes $S_{2k}$ subject to $Q_{2k}\le2k$, achieving at most $k\sqrt{2}$.
We check: $k\sqrt{2}\le\frac{1}{\sqrt{2}}(2k+1)\iff2k\le2k+1$. True.
The game continues forever. Bazza cannot win.
Bazza's drawing strategy (B-MaxQ): $Q_{2k}=2k$. We verify the game continues forever.
Bazza's feasibility (survival). As shown in Case 1, if Bazza follows B-MaxQ, $S_{2k-2}\ge(k-1)\sqrt{2}$. Alice's budget $C_{k}=\lambda(2k-1)-S_{2k-2}$.
$C_{k}\le\frac{1}{\sqrt{2}}(2k-1)-(k-1)\sqrt{2} = \frac{2k-1-2(k-1)}{\sqrt{2}}=\frac{1}{\sqrt{2}}$.
Alice must choose $x_{2k-1}\le1/\sqrt{2}$. Then $Q_{2k-1}=2k-2+x_{2k-1}^{2}\le 2k-2+1/2<2k$246. B-MaxQ is feasible. Bazza survives.
Alice's survival. We must show $C_{k}>0$ for all $k$. $C_{1}=1/\sqrt{2}>0$.
$C_{k+1}=C_{k}+2\lambda-(x_{2k-1}+x_{2k})=C_{k}+\sqrt{2}-(x_{2k-1}+x_{2k})$.
Bazza ensures $x_{2k-1}^{2}+x_{2k}^{2}=2$. Let $g(t)=t+\sqrt{2-t^{2}}$. $C_{k+1}=C_{k}+\sqrt{2}-g(x_{2k-1})$. Alice chooses $x_{2k-1}\in[0,C_{k}]$.
To ensure Alice survives, we check the minimum possible budget for the next turn.
Since $C_{k}\le1/\sqrt{2}<1$ and $g(t)$ is increasing on $[0, 1]$ (as $g^{\prime}(t)=1-t/\sqrt{2-t^{2}}>0$ for $t<1$), $g(x_{2k-1})$ is maximized when $x_{2k-1}=C_{k}$.
$C_{k+1}\ge C_{k}+\sqrt{2}-g(C_{k})=\sqrt{2}-\sqrt{2-C_{k}^{2}}$.
If $C_{k}>0$ then $\sqrt{2-C_{k}^{2}}<\sqrt{2}$, so $C_{k+1}>0$. By induction, $C_{k}>0$ for all $k$. Alice survives. The game continues forever. Alice cannot win.
Conclusion:
Alice has a winning strategy if and only if $\lambda>\frac{1}{\sqrt{2}}$. Bazza has a winning strategy if and only if $0<\lambda<\frac{1}{\sqrt{2}}$. If $\lambda=\frac{1}{\sqrt{2}}$, neither player has a winning strategy.
