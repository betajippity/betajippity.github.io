---
layout: post
title: DigiPro 2024 Paper- Cache Points For Production-Scale Occlusion-Aware Many-Lights Sampling And Volumetric Scattering
tags: [Hyperion, Light Transport, DigiPro]
author: Yining Karl Li
---

This year at DigiPro 2024, we had a conference paper that presents a deep dive into Hyperion's unique solution to the many-light sampling problem; we call this system "cache points".
DigiPro is one of my favorite computer graphics conferences precisely because of the emphasis the conference places on sharing how ideas work in the real world of production, and with this paper we've tried to combine a more traditional academic theory paper with DigiPro's production-forward mindset.
Instead of presenting some new thing that we've recently come up with and have maybe only used on one or two productions so far, this paper presents something that we've now actually had in the renderer and evolved for over a decade, and along with the core technique, the paper also goes into lessons we've learned from over a decade of production experience.

[![Figure 1 from the paper: A production scene from Us Again containing 4881396 light sources (analytical lights, emissive triangles, and emissive volumes), rendered using 32 samples per pixel with uniform light selection (a), locally optimal light selection (b), and our cache points system (c). Uniform light selection produces a faster result but converges poorly, while building a locally optimal light distribution per path vertex produces a more converged result but is much slower. Our cache points system (c) produces a noise level similar to (b) while maintaining performance closer to (a). To clearly show noise differences, this figure does not include the post-renderer compositing that is present in the final production frame.
]({{site.url}}/content/images/2024/Jul/cachepoints-paper/preview/teaser.jpg)]({{site.url}}/content/images/2024/Jul/cachepoints-paper/teaser.png)

Here is the paper abstract:

> A hallmark capability that defines a renderer as a production renderer is the ability to scale to handle scenes with extreme complexity, including complex illumination cast by a vast number of light sources. In this paper, we present Cache Points, the system used by Disney’s Hyperion Renderer to perform efficient unbiased importance sampling of direct illumination in scenes containing up to millions of light sources. Our cache points system includes a number of novel features. We build a spatial data structure over points that light sampling will occur from instead of over the lights themselves. We do online learning of occlusion and factor this into our importance sampling distribution. We also accelerate sampling in difficult volume scattering cases.
>
> Over the past decade, our cache points system has seen extensive production usage on every feature film and animated short produced by Walt Disney Animation Studios, enabling artists to design lighting environments without concern for complexity. In this paper, we will survey how the cache points system is built, works, impacts production lighting and artist workflows, and factors into the future of production rendering at Disney Animation.

The paper and related materials can be found at:

* [Project Page (Author’s Version and Supplementary Material)](https://www.yiningkarlli.com/projects/cachepoints.html)
* [Official Print Version (ACM Library)](http://dx.doi.org/10.1145/3665320.3670993)

One extremely important thing that I tried to get across in the acknowledgements section of the paper and presentation and that I want to really emphasize here is: although I'm the lead author of this paper, I am not at all the lead developer or primary inventor of the cache points system.
Over the past decade, many developers have since contributed to the system and the system has evolved significantly, but the core of cache points system was originally invented by Gregory Nichols and Peter Kutz, and the volume scattering extensions were primarily developed by Wei-Feng Wayne Huang.
Since Greg, Peter, and Wayne are no longer at Disney Animation, Charlotte and I wound up spearheading the paper because we're the developers who currently have the most experience working in the cache points system and therefore were in the best position to write about it.

The way this paper came about was somewhat circuitous and unplanned.
This paper actually originated as a section in what was intended to have been a course at SIGGRAPH a few years ago on path guiding techniques, to have been presented by Intel's graphics research group, Disney Research Studios, Disney Animation's Hyperion team, WetaFX's Manuka team, and Chaos Czech's Corona team.
However, because of scheduling and travel difficulties for several of the course presenters, the course wound up having to be withdrawn, and the material we had put together for presenting cache points got shelved.
Then, as the DigiPro deadline started to approach this year, we were asked by higher ups in the studio if we had anything that could make a good DigiPro submission.
After some thought, we realized that DigiPro was actually a great venue for presenting the cache points system because we could structure the paper and presentation as a combination of technical breakdown and production perspective from a decade's worth of production usage.
The final paper is a composed from three sources: a reworked version of what we had originally prepared for the abandoned course, a greatly expanded version of the material from our 2021 SIGGRAPH talk on our cache point based volume importance sampling techniques [[Huang et al. 2021]](https://doi.org/10.1145/3450623.3464644), and a bunch of new material consisting of production case studies and results on production scenes.

Overall I hope that the final paper is an interesting and useful read for anyone interested in light transport and production rendering, but I have to admit, I think that there are a couple of things I would have liked to rework and improve in the paper if we had more time.
I think the largest missing piece from the paper is a direct head-to-head comparison with a light BVH approach [[Estevez and Kulla 2018]](https://doi.org/10.1145/3233305); in the paper and presentation we discuss how our approach differs from light BVH approaches and why we chose our approach over a light BVH, but we don't actually present any direct comparisons in the results.
In the past we actually have more directly compared cache points to a light BVH implementation, but in the window we had to write this paper, we simply didn't have enough time to resurrect that old test, bring it up to date with the latest code in the production renderer, and conduct a thorough performance comparison.
Similarly, in the paper we mention that we actually implemented [Vevoda et al. [2018]](https://doi.org/10.1145/3197517.3201340)'s Bayesian online regression approach in Hyperion as a comparison point, but again, in the writing window for this paper, we just didn't have time to put together a fair up-to-date performance comparison.
I think that even without these comparisons our paper brings a lot of valuable information and insights (and evidently the paper referees agreed!), but I do think that the paper would be stronger had we found the time to include those direct comparisons.
Hopefully at some point in the near future I can find time to do those direct comparisons as a followup and put out the results in a supplemental followup or something.

Another detail of the paper that sits in the back of my head for revisting is the fact that even though cache points provides correct unbiased results, a lot of the internal implementation details depend on essentially empirically derived properties.
Nothing in cache points is totally arbitrary per se; in the paper we try to provide a strong rationale or justification for how we arrived upon each empirical property through logic and production experience.
However, at least from an abstract mathematical perspective, the empirically derived stuff is nonetheless somewhat unsatisfying!
On the other hand, however, in a great many ways this property is simply part of practical reality- what puts the _production_ in production rendering.

A topic that I think would be a really interesting bit of future work is combining cache points with ReSTIR [[Bitterli et al. 2020]](https://doi.org/10.1145/3386569.3392481).
One of the interesting things we've found with ReSTIR is that in terms of absolute quality, ReSTIR generally can benefit significantly from higher quality initial input samples (as opposed to just uniform sampling), but the quality benefit is usually more than offset by the greatly increased cost of drawing better initial samples from something like a light BVH.
Walking a light BVH on the GPU is a lot more computationally expensive than just drawing a uniform random number!
One thought that I've had is that because cache points aren't hierarchical, we could store them in a hash grid instead of a tree, allowing for fast constant-time lookups that might provide a better quality-vs-cost tradeoff that in turn might make use with ReSTIR feasible.

The presentation for this paper was an interesting challenge and a lot of fun to put together.
Our paper is very much written with a core rendering audience in mind, but the presentation at the DigiPro conference had to be built for a more general audience because the audience at DigiPro includes a wide, diverse selection of people from all across computer graphics, animation, and VFX, with varying levels of technical background and varying levels of familiarity with rendering.
The approach we took for the presentation was to keep things at a much higher level than the paper and try to convey the broad strokes of how cache points work and focus more on production results and lessons, while referring to the paper for the more nitty gritty details.
We put a lot of work into including a lot of animations in the presentation to better illustrate how each step of cache points works; the way we used animations was directly inspired by Alexander Rath's [amazing SIGGRAPH 2023 presentation](https://www.youtube.com/watch?v=2gMt0WzSVpM) on Focal Path Guiding [[Rath et al. 2023]](https://doi.org/10.1145/3588432.3591543).
However, instead of building custom presentation software with a built-in 2D ray tracer like Alex did, I just made all of our animations the hard and dumb way in Keynote.

Another nice thing the presentation includes is a better visual presentation (and somewhat expanded version) of the paper's results section.
A recording of the presentation is available on both my project page for the paper and on the official Disney Animation website's page for the paper.
I am very grateful to Dayna Meltzer, Munira Tayabji, and Nick Cannon at Disney Animation for granting permission and making it possible for us to share the presentation recording publicly.
The presentation is a bit on the long side (30 minutes), but hopefully is a useful and interesting watch!

## References

Benedikt Bitterli, Chris Wyman, Matt Pharr, Peter Shirley, Aaron Lefohn, and Wojciech Jarosz. 2020. [Spatiotemporal Reservoir Sampling for Real-Time Ray Tracing with Dynamic Direct Lighting](https://doi.org/10.1145/3386569.3392481). _ACM Transactions on Graphics (Proc. of SIGGRAPH)_ 39, 4 (Jul. 2020), Article 148.

Alejandro Conty Estevez and Christopher Kulla. 2018. [Importance Sampling of Many Lights with Adaptive Tree Splitting](https://doi.org/10.1145/3233305). _Proc. of the ACM on Computer Graphics and Interactive Techniques (Proc. of High Performance Graphics)_ 1, 2 (Aug. 2018), Article 25. 

Wei-Feng Wayne Huang, Peter Kutz, Yining Karl Li, and Matt Jen-Yuan Chiang. 2021. [Unbiased Emission and Scattering Importance Sampling for Heterogeneous Volumes](https://doi.org/10.1145/3450623.3464644). In _ACM SIGGRAPH 2021 Talks_. Article 3.

Alexander Rath, Ömercan Yazici, and Philipp Slusallek. 2023. [Focus Path Guiding for Light Transport Simulation](https://doi.org/10.1145/3588432.3591543). In _ACM SIGGRAPH 2023 Conference Proceedings_. Article 30.

Petr Vévoda, Ivo Kondapaneni, and Jaroslav Křivánek. 2018. [Bayesian Online Regression for Adaptive Direct Illumination Sampling](https://doi.org/10.1145/3197517.3201340). _ACM Transactions on Graphics (Proc. of SIGGRAPH)_ 37, 4 (Aug. 2018), Article 125.
