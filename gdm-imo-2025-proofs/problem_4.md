# Problem 4

A proper divisor of a positive integer $N$ is a positive divisor of $N$ other than $N$ itself. The infinite sequence $a_{1}, a_{2}, ...$ consists of positive integers, each of which has at least three proper divisors. For each $n\ge1$, the integer $a_{n+1}$ is the sum of the three largest proper divisors of $a_{n}$.
Determine all possible values of $a_{1}$.
We want to determine all possible values of $a_{1}$ such that the sequence defined by $a_{n+1}=S(a_{n})$ is an infinite sequence of positive integers, where $S(N)$ is the sum of the three largest proper divisors of $N$, and each $a_{n}$ has at least three proper divisors (i.e., the total number of divisors $\tau(a_{n})\ge4$).

Let $R(N)=S(N)/N$. If $\tau(N)\ge5$, and $1=d_{1}<d_{2}<d_{3}<d_{4}$ are the smallest divisors of $N$, then $R(N)=\frac{1}{d_{2}}+\frac{1}{d_{3}}+\frac{1}{d_{4}}$.

Step 1: Proving that $a_{n}$ is even for all n.
Suppose $N$ is odd and $\tau(N)\ge4$. The divisors of $N$ are odd. If $\tau(N)\ge5$, $d_{2}\ge3$, $d_{3}\ge5$, $d_{4}\ge7$. $R(N)\le\frac{1}{3}+\frac{1}{5}+\frac{1}{7}=\frac{71}{105}<1$.
If $\tau(N)=4$, $N=p^{3}$ or $N=pq$ for odd primes $p<q$. The proper divisors are $1, p, p^2$ or $1, p, q$.
$S(p^{3})=1+p+p^{2}$. For $p\ge3$, $p^{3}-(1+p+p^{2})=p^{2}(p-1)-p-1\ge9(2)-3-1=14>0$.
$S(pq)=1+p+q$. For $p\ge 3, q\ge 5$, $pq-(1+p+q)=(p-1)(q-1)-2\ge2\cdot4-2=6>0$.
In all cases, $S(N)<N$. Furthermore, the three largest proper divisors are odd, so their sum $S(N)$ is odd.
If $a_{n}$ were odd for some $n$. Since $\tau(a_{n})\ge4$ by the problem statement, $a_{n+1}=S(a_{n})<a_{n}$ and $a_{n+1}$ is odd. By induction, $(a_{k})_{k>n}$ would be a strictly decreasing infinite sequence of positive integers. This contradicts the Well-Ordering Principle.
Thus, $a_{n}$ is even for all $n$.
Step 2: Proving that $a_{n}$ is divisible by 3 for all n.
Suppose $N$ is even, $\tau(N)\ge4$ and $3 \nmid N$. $d_{2}=2$. Since $3 \nmid N$, $d_{3}\ge4$. If $\tau(N)\ge5$, $d_{4}\ge5$.
$R(N)\le\frac{1}{2}+\frac{1}{4}+\frac{1}{5}=\frac{19}{20}<1$.
If $\tau(N)=4$, $N=8$ or $N=2p$ (prime $p\ge5$). $S(8)=7<8$. $S(2p)=p+3<2p$. In all cases, $S(N)<N$.
We prove a lemma:
Lemma: Let $N$ be even, $\tau(N)\ge4$, and $3 \nmid N$. If $3|S(N)$, then $S(N)$ is odd.
Proof: If $\tau(N)=4$, $S(8)=7$, $S(2p)=p+3$. Since $3 \nmid p$, $3 \nmid p+3$. So $3 \nmid S(N)$. The implication holds vacuously. If $\tau(N)\ge5$, $R(N)=\frac{1}{2}+\frac{1}{d_{3}}+\frac{1}{d_{4}}$.
Since $3 \nmid N$, $3 \nmid d_{i}$. If $3|S(N)$, since $3 \nmid N$ we must have $v_{3}(R(N))>0$. $R(N)=\frac{d_{3}d_{4}+2d_{3}+2d_{4}}{2d_{3}d_{4}}$. The denominator is not divisible by 3. The numerator $X=d_{3}d_{4}+2d_{3}+2d_{4}$ must be divisible by 3. $X\equiv d_{3}d_{4}-d_{3}-d_{4}\equiv(d_{3}-1)(d_{4}-1)-1 \pmod 3$.
$X\equiv 0 \implies (d_{3}-1)(d_{4}-1)\equiv1 \pmod 3$. This requires $d_{3}\equiv2$ and $d_{4}\equiv2 \pmod 3$.
If $4|N$, since $3 \nmid N$, the divisors start 1, 2, 4. So $d_{3}=4$. But $4\equiv1 \pmod 3$, contradicting $d_{3}\equiv2 \pmod 3$.
Thus $v_{2}(N)=1$. $N=2M$ with $M$ odd, $3 \nmid M$. Let $p$ be the smallest prime factor of $M$ $(p\ge5)$.
$d_{3}=p$. We need $p\equiv2 \pmod 3$. $d_{4}$ is the next smallest divisor. $2p\equiv2(2)=4\equiv1 \pmod 3$. Since $d_{4}\equiv2 \pmod 3$, $d_{4}\ne2p$.
So $d_{4}$ must be the next smallest divisor of $M$, call it $m_{3}$. $d_{4}$ is odd. $S(N)=N/2+N/p+N/d_{4}=M+2M/p+2M/d_{4}$.
Since $M$ is odd and $p, d_{4}$ are odd divisors of $M$, $M/p$ and $M/d_{4}$ are odd integers. $S(N)=Odd+Even+Even=Odd$. The lemma is proved.
Now, suppose $3 \nmid a_{n}$ for some $n$. We know $a_{n}$ is even and $a_{n+1}=S(a_{n})<a_{n}$.
If $3|a_{n+1}$, by the Lemma applied to $a_{n}$, $a_{n+1}$ must be odd. This contradicts Step 1. Thus $3 \nmid a_{n+1}$.
By induction, $(a_{k})_{k\ge n}$ is a strictly decreasing infinite sequence of positive integers. Contradiction. Therefore, $3|a_{n}$ for all $n$.
Combining Step 1 and Step 2, $6|a_{n}$ for all $n$. Note that $6|N$ implies $\tau(N)\ge4$.
Step 3: Analyzing the dynamics when $6|N$
If $6|N$, the smallest divisors are 1, 2, 3. The fourth smallest divisor $d_{4}$ must be 4, 5, or 6. $R(N)=\frac{1}{2}+\frac{1}{3}+\frac{1}{d_{4}}=\frac{5}{6}+\frac{1}{d_{4}}$ (This holds even if $\tau(N)=4$ i.e., $N=6$, where $S(6)=6, R(6)=1$, and $d_{4}$ is formally $N=6$).

We identify three regimes:
Regime A (Growth): $d_{4}=4$. Occurs if $12|N$. $R(N)=13/12$.
Regime B (Boost): $d_{4}=5$. Occurs if $30|N$ and $4 \nmid N$ $(v_{2}(N)=1)$188. $R(N)=31/30$.

Regime C (Fixed Point): $d_{4}=6$. Occurs if $6|N$, $4 \nmid N, 5 \nmid N$. $R(N)=1$.

Step 4: Evolution of the sequence and constraints on $a_{1}$.
If $a_{n}\in B$, $v_{2}(a_{n})=1$. $a_{n+1}=(31/30)a_{n}$. $v_{2}(a_{n+1})=v_{2}(a_{n})+v_{2}(31/30)=1-1=0$. $a_{n+1}$ is odd. This contradicts Step 1. Thus, the sequence must remain in $A\cup C$.
If $a_{n}\in A$, $a_{n+1}=(13/12)a_{n}$. $v_{2}(a_{n+1})=v_{2}(a_{n})-2$. $v_{3}(a_{n+1})=v_{3}(a_{n})-1$. Since $6|a_{k}$ for all $k$, $v_{2}(a_{k})\ge1$ and $v_{3}(a_{k})\ge1$. As the valuations decrease in Regime A, the sequence cannot stay in A indefinitely. It must eventually reach Regime C and stabilize there $(a_{n+1}=a_{n})$.
In Regimes A $(R=13/12)$ and C $(R=1)$, $v_{5}(R(N))=0$. Thus $v_{5}(a_{n})$ is constant.
Let $L$ be the stable value in C. By definition of C, $5 \nmid L$. So $v_{5}(L)=0$. Therefore, $v_{5}(a_{1})=0$.
Step 5: Characterization of $a_{1}$.
Let $K\ge0$ be the number of steps the sequence spends in Regime A before reaching Regime C. $a_{1}, ..., a_{K}\in A$ (if $K\ge1$) and $a_{K+1}\in C$. Since $5 \nmid a_{1}$, $5 \nmid a_{n}$ for all $n$.
Let $A=v_{2}(a_{1})$ and $B=v_{3}(a_{1})$. $a_{K+1}=(13/12)^{K}a_{1}$.
$v_{2}(a_{K+1})=A-2K$.
$v_{3}(a_{K+1})=B-K$.
Since $a_{K+1}\in C$, we must have $v_{2}(a_{K+1})=1$ (as $6|a_{K+1}$ and $4 \nmid a_{K+1}$) and $v_{3}(a_{K+1})\ge1$.
$A-2K=1\Rightarrow A=2K+1$. $B-K\ge1\Rightarrow B\ge K+1$.
We verify that these conditions are sufficient. We must ensure $a_{i}\in A$ for $1\le i\le K$. This means $12|a_{i}$.
For $1\le i\le K$:
$v_{2}(a_{i})=A-2(i-1)=2K+1-2i+2=2(K-i)+3$. Since $i\le K, v_{2}(a_{i})\ge3$.
$v_{3}(a_{i})=B-(i-1)\ge(K+1)-(i-1)=K-i+2$. Since $i\le K, v_{3}(a_{i})\ge2$.
Thus $2^{3}\cdot3^{2}=72$ divides $a_{i}$198. This implies $12|a_{i}$, so $a_{i}\in A$. This also ensures that $a_{i+1}=(13/12)a_{i}$ is an integer. The sequence is valid.
We express the possible values of $a_{1}$. $a_{1}=2^{2K+1}3^{B}M$, where $K\ge0$, $B\ge K+1$, and $M$ is a positive integer such that $\gcd(M,30)=1$ (since $v_{5}(a_{1})=0$).
We rewrite this as: $a_{1}=(2^{2K+1}3^{K+1})\cdot(3^{B-(K+1)}M)$.
$2^{2K+1}3^{K+1}=(2\cdot4^{K})\cdot(3\cdot3^{K})=6\cdot(12^{K})$.
Let $J=3^{B-K-1}M$. $J$ is a positive integer. Since $\gcd(M,30)=1$, $J$ is not divisible by 2 or 5. That is, $\gcd(J,10)=1$. Conversely, any positive integer $J$ such that $\gcd(J,10)=1$ can be represented in this form for a given $K$ (by taking $B=K+1+v_{3}(J)$ and $M=J/3^{v_{3}(J)}$).
The set of all possible values of $a_{1}$ consists of the integers of the form $6J\cdot12^{K}$ where $K\ge0$ is an integer and $J$ is a positive integer such that $\gcd(J,10)=1$.

