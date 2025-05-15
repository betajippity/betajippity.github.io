---
layout: post
title: SIGGRAPH 2023 Conference Paper- Progressive Null-tracking for Volumetric Rendering
tags: [Hyperion, Volume Rendering, SIGGRAPH]
author: Yining Karl Li
---

This year at SIGGRAPH 2023, we have a conference-track technical paper in collaboration with Zackary Misso and Wojciech Jarosz from Dartmouth College!
The paper is titled "[Progressive Null-tracking for Volumetric Rendering](http://dx.doi.org/10.1145/3588432.3591557)" and is the result of work that Zackary did while he was a summer intern with the Hyperion development team last summer.
On the Disney Animation side, Brent Burley, Dan Teece, and I oversaw Zack's internship work, while on the the Dartmouth side, Wojciech was involved in the project as both Zack's PhD advisor and as a consultant to Disney Animation.

[![Figure 1 from the paper: Most existing unbiased null-scattering methods for heterogeneous participating media require knowledge of a maximum density (majorant) to perform well. Unfortunately, bounding majorants are difficult to guarantee in production, and existing methods like ratio tracking and weighted delta tracking (top, left) suffer from extreme variance if the “majorant” (𝜇𝑡 =0.01) significantly underestimates the maximum density of the medium (𝜇𝑡 ≈3.0). Starting with the same poor estimate for a majorant (𝜇𝑡 = 0.01), we propose to instead clamp the medium density to the chosen majorant. This allows fast, low-variance rendering, but of a modified (biased) medium (top, center). We then show how to progressively update the majorant estimates (bottom row) to rapidly reduce this bias and ensure that the running average (top right) across multiple pixel samples converges to the correct result in the limit.]({{site.url}}/content/images/2023/Aug/progressive-null-tracking/preview/teaser.jpg)]({{site.url}}/content/images/2023/Aug/progressive-null-tracking/teaser.png)

Here is the paper abstract:

> Null-collision approaches for estimating transmittance and sampling free-flight distances are the current state-of-the-art for unbiased rendering of general heterogeneous participating media. However, null-collision approaches have a strict requirement for specifying a tightly bounding total extinction in order to remain both robust and performant; in practice this requirement restricts the use of null-collision techniques to only participating media where the density of the medium at every possible point in space is known a-priori. In production rendering, a common case is a medium in which density is defined by a black-box procedural function for which a bounding extinction cannot be determined beforehand. Typically in this case, a bounding extinction must be approximated by using an overly loose and therefore computation- ally inefficient conservative estimate. We present an analysis of how null-collision techniques degrade when a more aggressive initial guess for a bounding extinction underestimates the true maximum density and turns out to be non-bounding. We then build upon this analysis to arrive at two new techniques: first, a practical, efficient, consistent progressive algorithm that allows us to robustly adapt null-collision techniques for use with procedural media with unknown bounding extinctions, and second, a new importance sampling technique that improves ratio-tracking based on zero-variance sampling.

The paper and related materials can be found at:

* [Project Page (Author’s Version and Supplementary Material)](https://www.yiningkarlli.com/projects/progressivenulltracking.html)
* [Wojciech Jarosz's Project Page (Author’s Version and Supplementary Material)](https://cs.dartmouth.edu/~wjarosz/publications/misso23progressive.html)
* [Official Print Version (ACM Library)](http://dx.doi.org/10.1145/3588432.3591557)

One cool thing about this project is that this project both served as a direct extension of Zack's PhD research area and served as a direct extension of the approach we've been taking to volume rendering in Disney's Hyperion Renderer over the past 6 years.
Hyperion has always used unbiased transmittance estimators for volume rendering (as opposed to biased ray marching) [[Fong et al. 2017]](https://doi.org/10.1145/3084873.3084907), and Hyperion's modern volume rendering system is heavily based on null-collision theory [[Woodcock et al. 1965]](https://www.yiningkarlli.com/projects/specdecomptracking/references/Woodcock1965.pdf).
We've put significant effort into making a null-collision based volume rendering system robust and practical in production, which led to projects such as residual ratio tracking [[Novák et al. 2014]](https://doi.org/10.1145/2661229.2661292), spectral and decomposition tracking [[Kutz et al. 2017]](https://doi.org/10.1145/3072959.3073665) and approaches for unbiased emission and scattering importance sampling in heterogeneous volumes [[Huang et al. 2021]](https://doi.org/10.1145/3450623.3464644).
Over the past decade, many other production renderers [\[Christensen et al. 2018](https://dl.acm.org/citation.cfm?id=3182162), [Gamito 2018](https://doi.org/10.1145/3214834.3214864), [Novák et al. 2018\]](https://doi.org/10.1111/cgf.13383) have similarly made the shift to null-collision based volume rendering because of the many benefits that the null-collision framework brings, such as unbiased volume rendering and efficient handling of volumes with lots of high-order scattering due to the null-collision framework's ability to cheaply perform distance sampling.
Vanilla null-collision volume rendering does have shortcomings, such as difficulty in efficiently sampling optically thin volumes due to the fact that null-collision tracking techniques produce a binary transmittance estimate that is super noisy.
A lot of progress has been made in improving null-collision volume rendering's efficiency and robustness in these thin volumes cases [\[Villemin and Hery 2013](http://jcgt.org/published/0002/02/10/), [Villemin et al. 2018](http://graphics.pixar.com/library/ThinMediaRendering/), [Herholz et al. 2019](https://dl.acm.org/citation.cfm?id=3230635), [Miller et al. 2019\]](https://doi.org/10.1145/3306346.3323025); the intro to the paper goes into much more extensive detail about these advancements.

However, one major limitation of null-collision volume rendering that remained unsolved until this paper is that the null-collision framework requires knowing the maximum density, or _bounding majorant_ of a heterogeneous volume beforehand.
This is a fundamental requirement of null-collision volume rendering that makes using procedurally defined volumes difficult, since the maximum possible density value of a procedurally defined volume cannot be known a-priori without either putting into place a hard clamp or densely evaluating the procedural function.
As a result, renderers that use null-collision volume rendering typically only support procedurally defined volumes by pre-rasterizing the procedural function onto a fixed voxel grid, à la the volume pre-shading in Manuka [[Fascione et al. 2018]](https://dl.acm.org/citation.cfm?id=3182161). 
The need to pre-rasterize procedural volumes negates a lot of the workflow and artistic benefits of using procedural volumes; this is one of several reasons why other renderers continue to use ray-marching based integrators for volumes despite the bias and loss of efficiency at handling high-order scattering.
Inspired by ongoing challenges we were facing with rendering huge volume-scapes on Strange World at the time, we gave Zack a very open-ended challenge for his internship: brainstorm and experiment with ways to lift this limitation in null-collision volume rendering.

Zack's PhD research coming into this internship revolved around deeply investigating the math behind modern volume rendering theory, and from these investigations, Zack had previously found deep new insights into how to formulate volumetric transmittance [[Georgiev et al. 2019]](https://doi.org/10.1145/3355089.3356559) and cool new ways to de-bias previously biased techniques such as ray marching [[Misso et al. 2022]](https://doi.org/10.1145/3528223.3530160).
Zack's solution to the procedural volumes in null-collision volume rendering problem very much follows in the same trend as his previous papers; after initially attempting to find ways to adapt de-biased ray marching to fit into a null-collision system, Zack went back to first principles and had the insight that a better solution was to find a way to de-bias the result that one gets from clamping the majorant of a procedural function.
This idea really surprised me when he first proposed it; I had never thought about the problem from this perspective before.
Dan, Brent, and I were highly impressed!

In addition to the acknowledgements in the paper, I wanted to acknowledge here Henrik Falt and Jesse Erickson from Disney Animation, who spoke with Zack and us early in the project to help us better understand how better procedural volumes support in Hyperion could benefit FX artist workflows.
We are also very grateful to Disney Animation's CTO, Nick Cannon, for granting us permission to include example code implemented in Mitsuba as part of the paper's supplemental materials.

[![One of my favorite images from this paper: a procedurally displaced volumetric Stanford bunny rendered using the progressive null tracking technique from the paper.]({{site.url}}/content/images/2023/Aug/progressive-null-tracking/procedural_bunny.png)]({{site.url}}/content/images/2023/Aug/progressive-null-tracking/procedural_bunny.png)

A bit of a postscript: during the Q&A session after Zack's paper presentation at SIGGRAPH, Zack and I had a chat with Wenzel Jakob, Merlin Nimier-David, Delio Vicini, and Sébastien Speierer from [EPFL's Realistic Graphics Lab](https://rgl.epfl.ch).
Wenzel's group brought up a potential use case for this paper that we hadn't originally thought of.
Neural radiance fields (NeRFs) [\[Mildenhall et al. 2020](https://doi.org/10.1007/978-3-030-58452-8_24), [Takikawa et al. 2023\]](https://doi.org/10.1145/3587423.3595477) are typically rendered using ray marching, but this is often inefficient.
Rendering NeRFs using null tracking instead of ray marching is an interesting idea, but the neural networks that underpin NeRFs are essentially similar to procedural functions as far as null-collision tracking is concerned because there's no way to know a tight bounding majorant for a neural network a-priori without densely evaluating the neural network.
Progressive null tracking solves this problem and potentially opens the door to more efficient and interesting new ways to render NeRFs!
If you happen to be interested in this problem, please feel free to reach out to Zack, Wojciech, and myself.

Getting to work with Zack and Wojciech on this project was an honor and a blast; I count myself as very lucky that working at Disney Animation continues to allow me to meet and work with rendering folks from across our field!

## References

Brent Burley, David Adler, Matt Jen-Yuan Chiang, Hank Driskill, Ralf Habel, Patrick Kelly, Peter Kutz, Yining Karl Li, and Daniel Teece. 2018. [The Design and Evolution of Disney’s Hyperion Renderer](https://doi.org/10.1145/3182159). _ACM Transactions on Graphics_. 37, 3 (2018), 33:1-33:22.

Per H. Christensen, Julian Fong, Jonathan Shade, Wayne L Wooten, Brenden Schubert, Andrew Kensler, Stephen Friedman, Charlie Kilpatrick, Cliff Ramshaw, Marc Bannister, Brenton Rayner, Jonathan Brouillat, and Max Liani. 2018. [RenderMan: An Advanced Path Tracing Architecture for Movie Rendering](https://dl.acm.org/citation.cfm?id=3182162). _ACM Transactions on Graphics_. 37, 3 (2018), 30:1-30:21.

Luca Fascione, Johannes Hanika, Mark Leone, Marc Droske, Jorge Schwarzhaupt, Tomáš Davidovič, Andrea Weidlich, and Johannes Meng. 2018. [Manuka: A Batch-Shading Architecture for Spectral Path Tracing in Movie Production](https://dl.acm.org/citation.cfm?id=3182161). _ACM Transactions on Graphics_. 37, 3 (2018), 31:1-31:18.

Julian Fong, Magnus Wrenninge, Christopher Kulla, and Ralf Habel. 2017. [Production Volume Rendering](http://graphics.pixar.com/library/ProductionVolumeRendering). In _ACM SIGGRAPH 2021 Courses_. 2:1-2:97.

Manuel Gamito. 2018. [Path Tracing the Framestorian Way](https://doi.org/10.1145/3214834.3214864). In _SIGGRAPH 2018 Course Notes: Path Tracing in Production_. 52-61.

Sebastian Herholz, Yangyang Zhao, Oskar Elek, Derek Nowrouzezahrai, Hendrik P A Lensch, and Jaroslav Křivánek. 2019. [Volume Path Guiding Based on Zero-Variance Random Walk Theory](https://dl.acm.org/citation.cfm?id=3230635). _ACM Transactions on Graphics_. 38, 3 (2019), 24:1-24:19.

Wei-Feng Wayne Huang, Peter Kutz, Yining Karl Li, and Matt Jen-Yuan Chiang. 2021. [Unbiased Emission and Scattering Importance Sampling For Heterogeneous Volumes](https://dl.acm.org/doi/10.1145/3450623.3464644). In _ACM SIGGRAPH 2021 Talks_. 3:1-3:2.

Peter Kutz, Ralf Habel, Yining Karl Li, and Jan Novák. 2017. [Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes](https://doi.org/10.1145/3072959.3073665). _ACM Transactions on Graphics_. 36, 4 (2017), 111:1-111:16.

Ben Mildenhall, Pratul P. Srinivasan, Matthew Tancik, Jonathan T. Barron, Ravi Ramamoorthi, and Ren Ng. 2020. [NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis](https://doi.org/10.1007/978-3-030-58452-8_24). In _ECCV 2020: Proceedings of the 16th European Conference on Computer Vision_. 405-421.

Bailey Miller, Iliyan Georgiev, and Wojciech Jarosz. 2019. [A Null-Scattering Path Integral Formulation of Light Transport](https://doi.org/10.1145/3306346.3323025). _ACM Transactions on Graphics_. 38, 4 (@019), 44:1-44:13.

Jan Novák, Iliyan Georgiev, Johannes Hanika, and Wojciech Jarosz. 2018. [Monte Carlo Methods for Volumetric Light Transport Simulation](https://doi.org/10.1111/cgf.13383). _Computer Graphics Forum_. 37, 2 (2018), 551-576.

Jan Novák, Andrew Selle and Wojciech Jarosz. 2014. [Residual Ratio Tracking for Estimating Attenuation in Participating Media](https://dl.acm.org/citation.cfm?id=2661292). _ACM Transactions on Graphics_. 33, 6 (2014), 179:1-179:11.

Towaki Takikawa, Shunsuke Saito, James Tompkin, Vincent Sitzmann, Srinath Sridhar, Or Litany, and Alex Yu. 2023. [Neural Fields for Visual Computing](https://doi.org/10.1145/3587423.3595477). In _ACM SIGGRAPH 2023 Courses_. 10:1-10:227.

Ryusuke Villemin and Christophe Hery. 2013. [Practical Illumination from Flames](http://jcgt.org/published/0002/02/10/). _Journal of Computer Graphics Techniques_. 2, 2 (2013), 142-155.

Ryusuke Villemin, Magnus Wrenninge, and Julian Fong. 2018. [Efficient Unbiased Rendering of Thin Participating Media](http://graphics.pixar.com/library/ThinMediaRendering/). _Journal of Computer Graphics Techniques_. 7, 3 (2018), 50-65.

E. R. Woodcock, T. Murphy, P. J. Hemmings, and T. C. Longworth. 1965. [Techniques used in the GEM code for Monte Carlo neutronics calculations in reactors and other systems of complex geometry](https://www.yiningkarlli.com/projects/specdecomptracking/references/Woodcock1965.pdf). In _Applications of Computing Methods to Reactor Problems_. Argonne National Laboratory.
