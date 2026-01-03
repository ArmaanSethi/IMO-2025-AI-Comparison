# Problem 3

Let $\mathbb{N}$ denote the set of positive integers. A function $f:\mathbb{N}\rightarrow\mathbb{N}$ is said to be bonza if $f(a)$ divides $b^{a}-f(b)^{f(a)}$ for all positive integers $a$ and $b$.

Determine the smallest real constant $c$ such that $f(n)\le cn$ for all bonza functions $f$ and all positive integers $n$.

We want to determine the smallest real constant $c$ such that $f(n)\le cn$ for all bonza functions $f:\mathbb{N}\rightarrow\mathbb{N}$ and all $n\in\mathbb{N}$. A function $f$ is bonza if $f(a) \mid b^{a}-f(b)^{f(a)}$ for all $a, b\in\mathbb{N}$. Let $P(a,b)$ denote this assertion.

We will show that the smallest constant is $c=4$.

Part 1: Properties and Classification of Bonza Functions
First, we establish some basic properties. $P(a,a)$ implies $f(a)|a^{a}$. $P(1,1)$ implies $f(1)=1$. Let $S$ be the set of primes $p$ such that $f(p)>1$. Since $f(p)|p^{p}$, if $p\in S$, then $f(p)=p^{k}$ for some $k\ge1$.

Lemma 1: If $p\in S$ then $f(b)\equiv b \pmod p$ for all $b\in\mathbb{N}$.

Proof: $P(p,b)\Rightarrow f(p) \mid b^{p}-f(b)^{f(p)}$115. Since $p\in S$, $p \mid f(p)$. Thus $b^{p}\equiv f(b)^{f(p)} \pmod p$. By Fermat's Little Theorem (FLT), $b^{p}\equiv b \pmod p$116. Since $f(p)$ is a power of $p$, applying FLT repeatedly yields $f(b)^{f(p)}\equiv f(b) \pmod p$. Thus, $b\equiv f(b) \pmod p$.

Lemma 2 (Classification): The set $S$ is either the set of all primes $\mathbb{P}$, the empty set $\emptyset$, or the singleton set $\{2\}$.
Proof:
Case 1: $S$ is infinite. By Lemma 1, for any $b\in\mathbb{N}$, $f(b)-b$ is divisible by every prime in $S$. Since $S$ is infinite, $f(b)-b=0$, so $f(b)=b$ for all $b$119. Then $f(p)=p>1$ for all primes $p$, so $S=\mathbb{P}$.

Case 2: $S$ is finite. Let $M=\prod_{p\in S}p$. (If $S=\emptyset, M=1$) 121. Let $q$ be a prime not in $S$. Then $f(q)=1$. If $S$ is non-empty, for any $p\in S$, Lemma 1 gives $1=f(q)\equiv q \pmod p$122. Thus $q\equiv1 \pmod M$.
Suppose $S$ is finite and non-empty. Then $M\ge2$. Suppose $M>2$. Consider $A=M-1$124. Since $M>2$, $1<A<M$. We have $\gcd(A,M)=1$. Let $q_{0}$ be any prime factor of $A$. Then $q_{0} \nmid M$ so $q_{0}\notin S$. Thus $q_{0}\equiv1 \pmod M$.
This implies $M \mid q_{0}-1$, so $M\le q_{0}-1$. Since $q_{0} \le A$, $q_{0}\le A=M-1$. Combining these gives $M\le q_{0}-1\le(M-1)-1=M-2$.
$M\le M-2$, which is a contradiction. Therefore, if $S$ is finite and non-empty, we must have $M=2$. This means $S=\{2\}$.
If $S$ is empty, $M=1$.
Part 2: Establishing the Upper Bound $c\le4$
We analyze the three cases from Lemma 2129.

Case 1: $S=\mathbb{P}$. We found $f(n)=n$. Then $f(n)/n=1$.

Case 2: $S=\emptyset$. $f(p)=1$ for all primes $p$. Let $n\in\mathbb{N}$. If $f(n)>1$, let $q$ be a prime factor of $f(n)$131. Since $f(n)|n^{n}$, $q|n$. $P(n,q)\Rightarrow f(n)|q^{n}-f(q)^{f(n)}$. Since $q\notin S$, $f(q)=1$. So $f(n)|q^{n}-1$. Since $q|f(n), q|q^{n}-1$. As $q|n, q|q^{n}$. Thus $q|1$. Contradiction. So $f(n)=1$ for all $n$. $f(n)/n\le1$.

Case 3: $S=\{2\}$. $f(2)>1$, and $f(p)=1$ for all odd primes $p$.
First, we show $f(n)$ is a power of 2 for all $n$135. Let $q$ be an odd prime factor of $f(n)$. Then $q|n$. $f(q)=1$136. $P(n,q)\Rightarrow f(n)|q^{n}-f(q)^{f(n)}=q^{n}-1$. Since $q|f(n)$, $q|q^{n}-1$. This is impossible as $q|n$ implies $q|q^{n}$. Thus $f(n)$ is a power of 2137.
If $n$ is odd, $f(n)|n^{n}$ (odd). So $f(n)=1$.
If $n$ is even. Let $n=2^{k}m$, where $k=v_{2}(n)\ge1$ and $m$ is odd. Let $f(n)=2^{e}$. Let $b$ be any odd integer. $f(b)=1$. $P(n,b)\Rightarrow f(n)|b^{n}-f(b)^{f(n)}=b^{n}-1$. So $2^{e}|b^{n}-1$. Thus $e\le \min_{b \text{ odd}}v_{2}(b^{n}-1)$.
We need the following lemma to analyze the 2-adic valuation.
Lemma 3: Let $X$ be an odd integer and $K\ge1$ an integer. Then $v_{2}(X^{2^{K}}-1) = v_{2}(X^{2}-1)+K-1$.
Proof: We use induction on $K$. Base case $K=1$: $v_{2}(X^{2}-1) = v_{2}(X^{2}-1)+1-1$.
Inductive step: Assume it holds for $K\ge1$. We check $K+1$.
$v_{2}(X^{2^{K+1}}-1)=v_{2}((X^{2^{K}}-1)(X^{2^{K}}+1))$. Since $X$ is odd, $X^{2}\equiv1 \pmod 8$. Since $K\ge1$, $X^{2^{K}}=(X^{2})^{2^{K-1}}\equiv1^{2^{K-1}}=1 \pmod 8$. Thus $X^{2^{K}}+1\equiv2 \pmod 8$, so $v_{2}(X^{2^{K}}+1)=1$.
$v_{2}(X^{2^{K+1}}-1)=v_{2}(X^{2^{K}}-1)+1=(v_{2}(X^{2}-1)+K-1)+1=v_{2}(X^{2}-1)+K$.
Now we analyze $v_{2}(b^{n}-1)=v_{2}(b^{2^{k}m}-1)$. Let $X=b^{m}$. Since $b, m$ are odd, $X$ is odd. By Lemma 3 (with $K=k$), $v_{2}(b^{n}-1)=v_{2}(X^{2^{k}}-1)=v_{2}(X^{2}-1)+k-1$.
We want to minimize this over odd $b$. $X^{2}-1=b^{2m}-1$. Since $b^{m}$ is odd, $(b^{m})^{2}\equiv1 \pmod 8$, so $v_{2}(b^{2m}-1)\ge3$. The minimum is achieved when $b=3$. We calculate $v_{2}(3^{2m}-1)=v_{2}(9^{m}-1)$. $3^{m}-1=(9-1)(9^{m-1}+\cdot\cdot\cdot+1)$. The second factor is a sum of $m$ odd terms. Since $m$ is odd, the sum is odd. $v_{2}(9^{m}-1)=v_{2}(8)=3$. Thus, $\min_{b \text{ odd}}v_{2}(b^{n}-1)=3+(k-1)=k+2$. So $e\le k+2$.
The ratio is $\frac{f(n)}{n}=\frac{2^{e}}{2^{k}m}\le\frac{2^{k+2}}{2^{k}m}=\frac{4}{m}$. Since $m\ge1$, $f(n)/n\le4$.
In all cases, $f(n)\le4n$ for all bonza functions $f$. Thus $c\le4$.

Part 3: Construction and Lower Bound $c\ge4$
We construct a bonza function $g(n)$ that achieves the bound 4. Define $g(n)$ as follows:

$$g(n)=\begin{cases}1 & \text{if } n \text{ is odd} \\ 16 & \text{if } n=4 \\ 2 & \text{if } n \text{ is even and } n\ne4 \end{cases}$$

For $n=4$, $g(4)=16$, so $g(4)/4=4$. If $g$ is bonza, then $c\ge4$.
We verify that $g$ is bonza. We check $g(a)|b^{a}-g(b)^{g(a)}$.
Case 1: $a$ is odd. $g(a)=1$. The condition holds trivially.

Case 2: $a=4$. $g(4)=16$. We need $16|b^{4}-g(b)^{16}$. If $b$ is odd, $g(b)=1$. We need $16|b^{4}-1$. For any odd $b$, $b^{2} \pmod{16}$ is in $\{1,9\}$152. So $b^{4}\equiv1 \pmod{16}$. If $b$ is even, $v_{2}(b)\ge1$, $v_{2}(b^{4})\ge4$, so $16 \mid b^{4}$153. $g(b)$ is either 2 or 16. $g(b)$ is even. $v_{2}(g(b)^{16})\ge16$. So $16|g(b)^{16}$. The condition holds.

Case 3: $a$ is even and $a\ne4$. $g(a)=2$. $a\ge2$. We need $2|b^{a}-g(b)^{2}$. If $b$ is odd, $b^{a}$ is odd. $g(b)=1$. $b^{a}-g(b)^{2}$ is odd-1=even. If $b$ is even, $b^{a}$ is even (since $a\ge2$). $g(b)\in\{2,16\}$. $g(b)$ is even, so $g(b)^{2}$ is even. $b^{a}-g(b)^{2}$ is even. The condition holds.

The function $g(n)$ is bonza.

Conclusion
We have proved that $f(n)\le4n$ for all bonza functions $f$, so $c\le4$. We have constructed a bonza function $g(n)$ such that $g(4)/4=4$ so $c\ge4$. Therefore, the smallest real constant $c$ is 4158.

