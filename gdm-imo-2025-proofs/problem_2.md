# Problem 2

Let $\Omega$ and $\Gamma$ be circles with centres $M$ and $N$, respectively, such that the radius of $\Omega$ is less than the radius of $\Gamma$. Suppose circles $\Omega$ and $\Gamma$ intersect at two distinct points $A$ and $B$. Line $MN$ intersects $\Omega$ at $C$ and $\Gamma$ at $D$, such that points $C, M, N$ and $D$ lie on the line in that order.

Let $P$ be the circumcentre of triangle $ACD$. Line $AP$ intersects $\Omega$ again at $E\ne A$. Line $AP$ intersects $\Gamma$ again at $F\ne A$. Let $H$ be the orthocentre of triangle $PMN$.
Prove that the line through $H$ parallel to $AP$ is tangent to the circumcircle of triangle $BEF$.
Complete Proof
1. Identification of P as the Excenter of $\triangle AMN$
Let $R_{1}$ and $R_{2}$ be the radii of $\Omega$ (center $M$) and $\Gamma$ (center $N$) respectively, with $R_{1}<R_{2}$.
$P$ is the circumcenter of $\triangle ACD$, so $PA=PC$. Since $A, C\in\Omega$, $MA=MC=R_{1}$58. Thus $PM$ is the perpendicular bisector of $AC$ and bisects $\angle AMC$.
The points $C, M, N, D$ are collinear in this order. This implies that the ray $MC$ is opposite to the ray $MN$. Therefore, $\angle AMC$ and $\angle AMN$ are supplementary. $\angle AMC$ is the exterior angle of $\triangle AMN$ at $M$. Since $PM$ bisects $\angle AMC$, $PM$ is the external angle bisector of $\triangle AMN$ at $M$.
Similarly, $PA=PD$ and $NA=ND=R_{2}$. $PN$ is the perpendicular bisector of $AD$ and bisects $\angle AND$63. Since $M, N, D$ are in order, the ray $ND$ is opposite to the ray $NM$64. Thus, $\angle AND$ is the exterior angle of $\triangle AMN$ at $N$. $PN$ is the external angle bisector of $\triangle AMN$ at $N$.

Therefore, $P$ is the excenter of $\triangle AMN$ opposite to $A$. Consequently, the line $AP$ is the internal angle bisector of $\angle MAN$.
Let $\angle MAN=2\phi$. Since the circles intersect at two distinct points $A$ and $B$, $\triangle AMN$ is non-degenerate, so $0<2\phi<180^{\circ}$ i.e., $0<\phi<90^{\circ}$.
2. Determining $\angle EBF$
By symmetry with respect to the line $MN$, $\triangle BMN\cong\triangle AMN$. Thus $\angle MBN = \angle MAN=2\phi$.
We use directed angles modulo $180^{\circ}$. Let $T_{M}(B)$ and $T_{N}(B)$ be the tangents to $\Omega$ and $\Gamma$ at $B$, respectively.
Since $T_{M}(B)\perp MB$ and $T_{N}(B)\perp NB$, we have $\angle(T_{M}(B), T_{N}(B)) = (MB, NB)$.
By the Tangent-Chord Theorem: In $\Omega$, $\angle(T_{M}(B),BE)=\angle(AB,AE)$. In $\Gamma$, $\angle(T_{N}(B),BF) = \angle(AB,AF)$.
Since $A, E, F$ are collinear on the line $AP$, the lines $AE$ and $AF$ are the same. Thus $\angle(AB,AE)=\angle(AB,AF)$.
We compute $(BE, BF)$:

$$(BE,BF)=\angle(BE,T_{M}(B))+\angle(T_{M}(B),T_{N}(B))+\angle(T_{N}(B),BF)$$

$$=-\angle(AB,AE)+\angle(MB,NB)+\angle(AB,AF)=\angle(MB,NB).$$
Thus, the geometric angle $\angle EBF=\angle MBN=2\phi$.

Since $R_{1}\ne R_{2}$, $\triangle AMN$ is not isosceles, so $AP$ (the angle bisector) is distinct from the altitude from $A$. Since $AB$ is perpendicular to $MN$, $AB$ is the altitude line. Thus $B$ is not on $AP$. Also $R_{1}\ne R_{2}$ implies $E\ne F$. Thus $\triangle BEF$ is non-degenerate. Let $\Sigma$ be its circumcircle.

3. Introduction of the Auxiliary Point V and its properties
Let $V$ be the point such that $AMVN$ is a parallelogram. We use vectors originating from $A$. $\vec{AV}=\vec{AM}+\vec{AN}$.
We calculate the lengths of $AE$ and $AF$. In $\triangle AME$, $MA=ME=R_{1}$ and $\angle MAE=\phi$. Thus $AE=2R_{1}\cos\phi$.
Similarly, $AF=2R_{2}\cos\phi$. Since $R_{1}<R_{2}$ and $\cos\phi>0$, $AE < AF$. $A, E, F$ are collinear in this order on $AP$, so $EF=AF-AE=2(R_{2}-R_{1})\cos\phi$.
We calculate the distances $VE$ and $VF$.

$\vec{VE}=\vec{AE}-\vec{AV}=\vec{AE}-(\vec{AM}+\vec{AN})$.

$$VE^2 = AE^2+ AM^2+ AN^2-2\vec{AE}\cdot\vec{AM}-2\vec{AE}\cdot\vec{AN}+2\vec{AM}\cdot\vec{AN}.$$

$AM=R_{1}, AN = R_2$. $\angle MAN=2\phi$. $\angle MAE=\angle NAE=\phi$.
$\vec{AE}\cdot\vec{AM} = AE \cdot R_1 \cos\phi = 2R_1^2 \cos^2\phi$.
$\vec{AE}\cdot\vec{AN} = AE \cdot R_2 \cos\phi = 2R_1 R_2 \cos^2\phi$.

$\vec{AM}\cdot\vec{AN} = R_1 R_2 \cos(2\phi) = R_1 R_2(2 \cos^2\phi - 1)$.

$$VE^{2}=(2R_{1}\cos\phi)^{2}+R_{1}^{2}+R_{2}^{2}-4R_{1}^{2}\cos^{2}\phi-4R_{1}R_{2}\cos^{2}\phi+2R_{1}R_{2}(2\cos^{2}\phi-1).$$

$$VE^{2}=R_{1}^{2}+R_{2}^{2}-4R_{1}R_{2}\cos^{2}\phi+4R_{1}R_{2}\cos^{2}\phi-2R_{1}R_{2}.$$

$$VE^{2}=R_{1}^{2}+R_{2}^{2}-2R_{1}R_{2}=(R_{2}-R_{1})^{2}.$$

So $VE=R_{2}-R_{1}$. A similar calculation shows $VF=R_{2}-R_{1}$. Thus $VE=VF$.
4. V lies on the circumcircle $\Sigma$
We calculate $\angle EVF$ using the Law of Cosines in the isosceles triangle $EVF$.

$$EF^{2} = VE^{2}+VF^{2}-2VE\cdot VF\cos(\angle EVF)=2VE^{2}(1-\cos(\angle EVF))$$

$$(2(R_{2}-R_{1})\cos\phi)^{2} = 2(R_{2}-R_{1})^{2}(1-\cos(\angle EVF)).$$

$$4\cos^{2}\phi=2(1-\cos(\angle EVF)).$$

$$\cos(\angle EVF)=1-2\cos^{2}\phi = -\cos(2\phi).$$
Since $2\phi\in(0,180^{\circ})$, $\angle EVF=180^{\circ}-2\phi$.

We have $\angle EBF+\angle EVF=2\phi+(180^{\circ}-2\phi)=180^{\circ}$. To conclude that $BEVF$ is cyclic, we must verify that $B$ and $V$ lie on opposite sides of the line $AP$.
We set up a coordinate system with $A$ at the origin $(0,0)$ and $AP$ along the positive x-axis.
We can orient it such that $M=(R_{1}\cos\phi, R_{1}\sin\phi)$ and $N=(R_{2}\cos\phi, -R_{2}\sin\phi)$. Then $V=M+N$ has y-coordinate $y_{V}=(R_{1}-R_{2})\sin\phi$. Since $R_{1}<R_{2}$ and $\phi>0$, $y_{V}<0$.
$B$ is the reflection of $A$ across the line $MN$.
The line $MN$ has the equation $y-y_{M} = m(x-x_{M})$, where the slope is $m=\frac{-(R_{1}+R_{2})\sin\phi}{(R_{2}-R_{1})\cos\phi}$.
The y-intercept $b$ (intersection with the axis perpendicular to $AP$ through $A$) is $y_{M}-mx_{M}$.

$$b=R_{1}\sin\phi-mR_{1}\cos\phi = R_{1}\sin\phi+\frac{R_{1}(R_{1}+R_{2})\sin\phi}{R_{2}-R_{1}}=\frac{2R_{1}R_{2}\sin\phi}{R_{2}-R_{1}}$$
Since $R_{i}>0$ and $\sin\phi>0$, $b>0$. The line $MN$ passes "above" $A$ with respect to the y-axis.
The reflection $B$ of $A(0,0)$ across the line $y=mx+b$ has y-coordinate $y_{B}=2b/(m^{2}+1)>0$. Since $y_{V}<0$ and $y_{B}>0$, $V$ and $B$ are on opposite sides of $AP$.
Thus, $BEVF$ is cyclic, and $V$ lies on $\Sigma$.
5. The Orthocenter H and the Tangency Condition
Let $I$ be the incenter of $\triangle AMN$. Since $P$ is the excenter opposite to $A$, the points $A, I, P$ are collinear on the line $AP$.
The internal bisector $MI$ and the external bisector $MP$ at $M$ are perpendicular. Similarly, $NI \perp NP$95. Thus, the quadrilateral $IMPN$ is cyclic. This circle is the circumcircle of $\triangle PMN$. Let $O$ be its center. $IP$ is the diameter, so $O$ is the midpoint of $IP$.
$H$ is the orthocenter of $\triangle PMN$. By Sylvester's theorem relating the circumcenter $O$ and the orthocenter $H$, we have (using vectors originating from $A$):

$$\vec{AH}=\vec{AP}+\vec{AM}+\vec{AN}-2\vec{AO}$$
By definition of $V$, $\vec{AV}=\vec{AM}+\vec{AN}$. So $\vec{AH}=\vec{AP}+\vec{AV}-2\vec{AO}$. The vector from $V$ to $H$ is $\vec{VH}=\vec{AH}-\vec{AV}=\vec{AP}-2\vec{AO}$.
Since $O$ is the midpoint of $IP$, $2\vec{AO}=\vec{AI}+\vec{AP}$.

$$\vec{VH}=\vec{AP}-(\vec{AI}+\vec{AP})=-\vec{AI}=\vec{IA}$$
Since $I$ and $A$ lie on the line $AP$, the vector $\vec{IA}$ is parallel to $AP$101. Thus, the line segment $VH$ is parallel to $AP$. The line through $H$ parallel to $AP$ is the line $VH$.
We must show that the line $VH$ is tangent to $\Sigma$.
Since $V\in\Sigma$ (Step 4), it suffices to show that $VH$ is perpendicular to the radius at $V$. Let $O_{\Sigma}$ be the center of $\Sigma$. We need to show $VH\perp O_{\Sigma}V$. Since $VH \parallel AP$, we need $AP\perp O_{\Sigma}V$.
The points $E, F$ lie on $AP$105. In Step 3, we proved $VE=VF$. Thus $V$ lies on the perpendicular bisector of the chord $EF$106. $O_{\Sigma}$ also lies on this bisector. Therefore, the line $O_{\Sigma}V$ is the perpendicular bisector of $EF$.
Thus $O_{\Sigma}V\perp EF$. Since $EF$ lies on $AP$, $O_{\Sigma}V\perp AP$.
We conclude that $VH\perp O_{\Sigma}V$. Therefore, the line $VH$, which is the line through $H$ parallel to $AP$, is tangent to the circumcircle of triangle $BEF$ at $V$.

