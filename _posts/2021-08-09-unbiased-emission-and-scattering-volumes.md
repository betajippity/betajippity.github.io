---
layout: post
title: SIGGRAPH 2021 Talk- Unbiased Emission and Scattering Importance Sampling for Heterogeneous Volumes
tags: [Hyperion, Volume Rendering, SIGGRAPH]
author: Yining Karl Li
---

This year at SIGGRAPH 2021, Wei-Feng Wayne Huang, Peter Kutz, Matt Jen-Yuan Chiang, and I have a talk that presents a pair of new distance-sampling techniques for improving emission and scattering importance sampling for volume path tracing cases where low-order heterogeneous scattering dominates.
These techniques were developed as part of our ongoing development on [Disney's Hyperion Renderer](https://www.disneyanimation.com/technology/hyperion/) and first saw full-fledged production use on Raya and the Last Dragon, although limited testing of in-progress versions also happened on Frozen 2.
This work was led by Wayne, building upon important groundwork that was put in place by Peter before Peter left Disney Animation.
Matt and I played more of an advisory or consulting role on this project, mostly helping with brainstorming, puzzling through ideas, and figuring out how to formally describe and present these new techniques.

[![A higher-res version of Figure 1 from the paper: a torch embedded in thin anisotropic heterogeneous mist. Equal-time comparison of a conventional null-collision approach (left), incorporating our emission sampling strategy (middle), and additionally combining with our scattering sampling strategy via MIS (right).]({{site.url}}/content/images/2021/Aug/unbiased-emission-and-scattering-volumes/preview/teaser.jpg)]({{site.url}}/content/images/2021/Aug/unbiased-emission-and-scattering-volumes/teaser.png)

Here is the paper abstract:

_We present two new distance-sampling methods for production volume path tracing. We extend the null-collision integral formulation to efficiently gather heterogeneous volumetric emission, achieving higher-quality results. Additionally, we propose a tabulation-based approach to importance sample volumetric in-scattering through a spatial guiding data structure. Our methods improve the sampling efficiency for scenarios where low-order heterogeneous scattering dominates, which tends to cause high variance renderings with existing null-collision methods._

The paper and related materials can be found at:

* [Project Page (Author’s Version and Supplementary Material)](https://www.yiningkarlli.com/projects/emissionscattervolumes.html)
* [Official Print Version (ACM Library)](https://dl.acm.org/doi/10.1145/3450623.3464644)

As covered in several previous publications, several years ago we replaced Hyperion's old residual ratio tracking [\[Novák et al. 2014](https://dl.acm.org/citation.cfm?id=2661292) , [Fong et al. 2017\]](http://graphics.pixar.com/library/ProductionVolumeRendering) based volume rendering system with a new, state of the art, null-collision (also called delta tracking or Woodcock tracking) tracking theory based volume rendering system.
Null-collision volume rendering systems are extremely good at dense volumes where light transport is dominated by high-order scattering, such as clouds and snow and sea foam.
However, null-collision volume rendering systems historically have struggled with efficiently rendering optically thin volumes dominated by low-order scattering, such as mist and fog.
The reason null-collision systems struggle with optically thin volumes is because in a thin volume, the average sampled distance is usually very large, meaning that ray often goes right through the volume with very few scattering events [[Villemin et al. 2018]](http://jcgt.org/published/0007/03/03/).
Since we can only evaluate illumination at each scattering event, not having a lot of scattering events means that the illumination estimate is necessarily often very low-quality, leading to tons of noise.

Frozen 2's forest scenes tended to include large amounts of atmospheric fog to lend the movie a moody look; these atmospherics proved to be a major challenge for Hyperion's modern volume rendering system.
Going in to Raya and the Last Dragon, we knew that the challenge was only going to get harder: from fairly early on in Raya and the Last Dragon's production, we already knew that the cinematography direction for the film was going to rely heavily on atmospherics and fog [[Bryant et al. 2021]](https://doi.org/10.1145/3450623.3464676) even more than Frozen 2's cinematography did.
To make things even harder, we also knew that a lot of these atmospherics were going to be lit using emissive volume light sources like fire or torches; not only did we need a good way to improve how we sampled scattering events, but we also needed a better way to sample emission.

The solution to the second problem (emission sampling) actually came long before the solution to the first problem (scattering sampling).
When we first implemented our new volume rendering system, we evaluated the emission term only when an absorption even happened, which is an intuitive interpretation of a random walk since each interaction is associated with one particular event.
However, shortly after we wrote our Spectral and Decomposition Tracking paper [[Kutz et al. 2017]](https://doi.org/10.1145/3072959.3073665), Peter realized that absorption and emission can actually also be evaluated at scattering and null-collision events too, and provided that some care was taken, doing so could be kept unbiased and mathematically correct as well.
Peter implemented this technique in Hyperion before he move on from Disney Animation; later, through experiences from using an early version of this technique on Frozen 2, Wayne realized that the relationship between voxel size and majorant value needed to be factored in to this technique.
When Wayne made the necessary modifications from his realization, the end result sped up this technique dramatically and in some scenes sped up overall volume rendering by up to a factor of 2x.
A complete description of how all of the above is done and how it can be kept unbiased and mathematically correct makes up the first part of our talk.

The solution to the first problem (scattering sampling) came out of many brainstorming and discussion sessions between Wayne, Matt, and myself.
At each volume scattering point, there are three terms that need to be sampled: transmittance, radiance, and the phase function.
The latter two are directly analogous to incoming radiance and the BRDF lobe at a surface scattering event; transmittance is an additional thing that volumes have to worry about over what surfaces care about.
The problem we were facing in optically thin volumes fundamentally boiled down to cases where these three terms have extremely different distributions for the same point in space.
In surface path tracing, the solution to this type of problem is well understood: sample these different distributions using separate techniques and combine using MIS [[Villemin & Hery 2013]](http://jcgt.org/published/0002/02/10/).
However, we had two obstacles preventing us from using MIS here: first, MIS requires knowing a sampling pdf, and at the time, computing the sampling pdf for distance sampling in a null-collision system was an unsolved problem.
Second, we needed a way to do distance sampling based off of not transmittance, but instead the product of incoming radiance and the phase function; this term needed to be learned on-the-fly and stored in an easy-to-sample spatial data structure.
Fortunately, almost exactly around the time we were discussing these problems, [[Miller et al.]](https://doi.org/10.1145/3306346.3323025) 2019 was published, which solved the longstanding open research problem around computing a usable pdf for distance samples, allowing for MIS.
Our idea for on-the-fly learning of the product of incoming radiance and the phase function was to simply piggyback off of Hyperion's existing cache points light-selection-guiding data structure [[Burley et al. 2018]](https://doi.org/10.1145/3182159).
Wayne worked through the details of all of the above and implemented both in Hyperion, and also figured out how to combine this technique with the previously existing transmittance-based distance sampling and with Peter's emission sampling technique; the detailed description of this technique makes up the second part of our talk.
The end product is a system that combines different techniques for handling thin and thick volumes to produce good, efficient results in a single unified volume integrator!

Because of the limited length of the SIGGRAPH Talks short paper format, we had to compress our text significantly to fit into the required short paper length.
We put much more detail into the slides that Wayne presented at SIGGRAPH 2021; for anyone that is interested and is attending SIGGRAPH 2021, I'd highly recommend giving the talk a watch (and then going to see all of the other cool Disney Animation talks this year)!
For anyone interested in the technique post-SIGGRAPH 2021, hopefully we'll be able to get a version of the slides cleared for release by the studio at some point.

Wayne's excellent implementations of the above techniques proved to be an enormous win for both rendering efficiency and artist workflows on Raya and the Last Dragon; I personally think we would have had enormous difficulties in hitting the lighting art direction on Raya and the Last Dragon if it weren't for Wayne's work.
I owe Wayne a huge debt of gratitude for letting me be a small part of this project; the discussions were very fun, seeing it all come together was very exciting, and helping put the techniques down on paper for the SIGGRAPH talk was an excellent exercise in figuring out how to communicate cutting edge research clearly.

<div class='embed-container-cinema'>
<iframe src="/content/images/2021/Aug/unbiased-emission-and-scattering-volumes/comparisons/beforeaftercomparison_crop_embed.html" frameborder="0" border="0" scrolling="no"></iframe></div>
<div class="figcaption">A frame from Raya and the Last Dragon without our techniques (left), and with both our scattering and emission sampling applied (right). Both images are rendered using 32 spp per volume pass; surface passes are denoised and composited with non-denoised volume passes to isolate noise from volumes. A video version of this comparison is included in our talk's supplementary materials. For a larger still comparison, <a href="/content/images/2021/Aug/unbiased-emission-and-scattering-volumes/comparisons/beforeaftercomparison_crop.html">click here.</a></div>

**References**

Marc Bryant, Ryan DeYoung, Wei-Feng Wayne Huang, Joe Longson, and Noel Villegas. 2021. [The Atmosphere of Raya and the Last Dragon](https://doi.org/10.1145/3450623.3464676). In _ACM SIGGRAPH 2021 Talks_. 51:1-51:2.

Brent Burley, David Adler, Matt Jen-Yuan Chiang, Hank Driskill, Ralf Habel, Patrick Kelly, Peter Kutz, Yining Karl Li, and Daniel Teece. 2018. [The Design and Evolution of Disney’s Hyperion Renderer](https://doi.org/10.1145/3182159). _ACM Transactions on Graphics_. 37, 3 (2018), 33:1-33:22.

Julian Fong, Magnus Wrenninge, Christopher Kulla, and Ralf Habel. 2017. [Production Volume Rendering](http://graphics.pixar.com/library/ProductionVolumeRendering). In _ACM SIGGRAPH 2021 Courses_. 2:1-2:97.

Peter Kutz, Ralf Habel, Yining Karl Li, and Jan Novák. 2017. [Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes](https://doi.org/10.1145/3072959.3073665). In _ACM Transactions on Graphics_. 36, 4 (2017), 111:1-111:16.

Bailey Miller, Iliyan Georgiev, and Wojciech Jarosz. 2019. [A Null-Scattering Path Integral Formulation of Light Transport](https://dl.acm.org/doi/10.1145/3306346.3323025). _ACM Transactions on Graphics_. 38, 4 (2019). 44:1-44:13.

Jan Novák, Andrew Selle and Wojciech Jarosz. 2014. [Residual Ratio Tracking for Estimating Attenuation in Participating Media](https://dl.acm.org/citation.cfm?id=2661292). _ACM Transactions on Graphics_. 33, 6 (2014), 179:1-179:11.

Ryusuke Villemin and Christophe Hery. 2013. [Practical Illumination from Flames](http://jcgt.org/published/0002/02/10/). _Journal of Computer Graphics Techniques_. 2, 2 (2013), 142-155.

Ryusuke Villemin, Magnus Wrenninge, and Julian Fong. 2018. [Efficient Unbiased Rendering of Thin Participating Media](http://jcgt.org/published/0007/03/03/). _Journal of Computer Graphics Techniques_. 7, 3 (2018), 50-65.
