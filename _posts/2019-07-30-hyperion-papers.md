---
layout: post
title: Hyperion Publications
tags: [Hyperion]
author: Yining Karl Li
---
Every year at SIGGRAPH (and sometimes at other points in the year), members of the Hyperion team inevitably get asked if there is any publicly available information about [Disney's Hyperion Renderer](https://www.disneyanimation.com/technology/hyperion/).
The answer is: yes, there is actually a lot of publicly available information!

[![Figure 1: Previews of the first page of every Hyperion-related publication from Disney Animation, Disney Research Studios, and other research partners.]({{site.url}}/content/images/2019/Jul/FirstPagesv3_prev.png)]({{site.url}}/content/images/2019/Jul/FirstPagesv3.png)

One amazing aspect of working at Walt Disney Animation Studios is the huge amount of support and encouragement we get from our managers and the wider studio for publishing and sharing our work with the wider academic world and industry.
As part of this sharing, the Hyperion team has had the opportunity to publish a number of papers over the years detailing various interesting techniques used in the renderer.

I think it's very important to mention here that another one of my favorite aspects of working on the Hyperion team is the deep collaboration we get to engage in with our sister rendering team at [Disney Research Studios](https://studios.disneyresearch.com) (formerly known as Disney Research Zürich).
The vast majority of the Hyperion team's publications are joint works with Disney Research Studios, and I personally think it's fair to say that all of Hyperion's most interesting advanced features are just as much the result of research and work from Disney Research Studios as they are the result of our team's own work.
Without a doubt, Hyperion, and by extension, our movies, would not be what they are today without Disney Research Studios.
Of course, we also collaborate closely with our sister rendering teams at [Pixar Animation Studios](https://www.pixar.com) and [Industrial Light & Magic](https://www.ilm.com) as well, and there are numerous examples where collaboration between all of these teams has advanced the state of the art in rendering for the whole industry.

So without further ado, below are all of the papers that the Hyperion team has published or worked on or had involvement with over the years, either by ourselves or with our counterparts at Disney Research Studios, Pixar, ILM, and other research groups.
If you've ever been curious to learn more about Disney's Hyperion Renderer, here are 34 publications with a combined 393 pages of material!
For each paper, I'll link to a preprint version, link to the official publisher's version, and link any additional relevant resources for the paper.
I'll also give the citation information, give a brief description, list the teams involved, and note how the paper is relevant to Hyperion.
This post is meant to be a living document; I'll come back and update it down the line with future publications. Publications are listed in chronological order.

1. **Ptex: Per-Face Texture Mapping for Production Rendering**
    
    [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/) and [Dylan Lacewell](https://www.linkedin.com/in/dylanlacewell/). Ptex: Per-face Texture Mapping for Production Rendering. *Computer Graphics Forum (Proceedings of Eurographics Symposium on Rendering 2008)*, 27(4), June 2008.

    * [Preprint Version](https://drive.google.com/open?id=1EdMYHhs4h_ICcSgGfA4GzZoRNI_yVryA)
    * [Official Publisher's Version](https://doi.org/10.1111/j.1467-8659.2008.01253.x)
    * [Open Source Project](http://ptex.us)

    Internal project from Disney Animation. This paper describes per-face textures, a UV-free way of texture mapping. Ptex is the texturing system used in Hyperion for all non-procedural texture maps. Every Disney Animation film made using Hyperion is textured entirely with Ptex. Ptex is also available in many commercial renderers, such as [Pixar's RenderMan](https://renderman.pixar.com)!

2. **Physically-Based Shading at Disney**

    [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Physically Based Shading at Disney. In *ACM SIGGRAPH 2012 Course Notes: Practical Physically-Based Shading in Film and Game Production*, August 2012.

    * [Preprint Version](https://drive.google.com/open?id=1SwEWQadyMPo5m49kIACoFq2R6q0bZJz7) (Updated compared to official version)
    * [Official Publisher's Version](https://doi.org/10.1145/2343483.2343493)
    * [Physically Based Shading SIGGRAPH 2012 Course](https://blog.selfshadow.com/publications/s2012-shading-course/)

    Internal project from Disney Animation. This paper describes the Disney BRDF, a physically principled shading model with a artist-friendly parameterization and layering system. The Disney BRDF is the basis of Hyperion's entire shading system. The Disney BRDF has also gained widespread industry adoption the basis of a wide variety of physically based shading systems, and has influenced the design of shading systems in a number of other production renderers. Every Disney Animation film made using Hyperion is shaded using the Disney BSDF (an extended version of the Disney BRDF, described in a later paper).

3. **Sorted Deferred Shading for Production Path Tracing**

    [Christian Eisenacher](https://www.linkedin.com/in/christian-eisenacher-477ab983/), [Gregory Nichols](https://www.linkedin.com/in/gregory-nichols/), [Andrew Selle](http://www.andyselle.com), and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Sorted Deferred Shading for Production Path Tracing. *Computer Graphics Forum (Proceedings of Eurographics Symposium on Rendering 2013)*, 32(4), June 2013.

    * [Preprint Version](https://drive.google.com/open?id=1zha14cniwtvy8Xkn2Jv9jE5Y1T50VSJS)
    * [Official Publisher's Version](https://doi.org/10.1111/cgf.12158)

    Internal project from Disney Animation. Won the Best Paper Award at EGSR 2013! This paper describes the sorted deferred shading architecture that is at the very core of Hyperion. Along with the previous two papers in this list, this is one of the foundational papers for Hyperion; every film rendered using Hyperion is rendered using this architecture.

4. **Residual Ratio Tracking for Estimating Attenuation in Participating Media**

    [Jan Novák](http://drz.disneyresearch.com/~jnovak/), [Andrew Selle](http://www.andyselle.com), and [Wojciech Jarosz](https://cs.dartmouth.edu/~wjarosz/). Residual Ratio Tracking for Estimating Attenuation in Participating Media. *ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia 2014)*, 33(6), November 2014.

    * [Preprint Version](https://drive.google.com/open?id=1b1RkW3eFAgM-i6IZ_m0jmQcPfr7cOLEz)
    * [Official Publisher's Version](https://doi.org/10.1145/2661229.2661292)
    * [Project Page](http://drz.disneyresearch.com/~jnovak/publications/RRTracking/)

    Joint project between Disney Research Studios and Disney Animation. This paper described a pair of new, complementary techniques for evaluating transmittance in heterogeneous volumes. These two techniques made up the core of Hyperion's first and second generation volume rendering implementations, used from *Big Hero 6* up through *Moana*.

5. **Visualizing Building Interiors using Virtual Windows**

    [Norman Moses Joseph](https://www.linkedin.com/in/normanmosesjoseph/), [Brett Achorn](https://www.imdb.com/name/nm0009853/), [Sean D. Jenkins](https://www.linkedin.com/in/sean-jenkins-a1352062/), and [Hank Driskill](https://www.linkedin.com/in/hank-driskill-1a7140165/). Visualizing Building Interiors using Virtual Windows. In *ACM SIGGRAPH Asia 2014 Technical Briefs*, December 2014.

    * [Preprint Version](https://drive.google.com/file/d/1ugDBwIxmYKGCMOyfNSF2fwMhRX6BjR_g)
    * [Official Publisher's Version](https://doi.org/10.1145/2669024.2669029)

    Internal project from Disney Animation. This paper describes Hyperion's "hologram shader", which is used for creating the appearance of parallaxed, fully shaded, detailed building interiors without adding additional geometric complexity to a scene. This technique was developed for *Big Hero 6*. Be sure to check out the supplemental materials on the publisher site for a cool video breakdown of the technique.

6. **Path-space Motion Estimation and Decomposition for Robust Animation Filtering**

    [Henning Zimmer](https://graphics.ethz.ch/~hzimmer/), [Fabrice Rousselle](https://research.nvidia.com/person/fabrice-rousselle), [Wenzel Jakob](http://rgl.epfl.ch/people/wjakob/), [Oliver Wang](http://zurich.disneyresearch.com/~owang/), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), [Wojciech Jarosz](https://cs.dartmouth.edu/~wjarosz/), [Olga Sorkine-Hornung](http://igl.ethz.ch/people/sorkine/), and [Alexander Sorkine-Hornung](http://www.ahornung.net/). Path-space Motion Estimation and Decomposition for Robust Animation Filtering. *Computer Graphics Forum (Proceedings of Eurographics Symposium on Rendering 2015)*, 34(4), June 2015.

    * [Preprint Version](https://drive.google.com/open?id=19Me6xkA9jBIlydMMgEeC9Uor93MqBhtW)
    * [Official Publisher's Version](http://doi.org/10.1111/cgf.12685)
    * [Project Page](https://cs.dartmouth.edu/~wjarosz/publications/zimmer15path.html)

    Joint project between Disney Research Studios, ETH Zürich, and Disney Animation. This paper describes a denoising technique suitable for animated sequences. Not directly used in Hyperion's denoiser, but both inspired by and influential towards Hyperion's first generation denoiser.

7. **Portal-Masked Environment Map Sampling**

    [Benedikt Bitterli](https://benedikt-bitterli.me), [Jan Novák](http://drz.disneyresearch.com/~jnovak/), and [Wojciech Jarosz](https://cs.dartmouth.edu/~wjarosz/). Portal-Masked Environment Map Sampling. *Computer Graphics Forum (Proceedings of Eurographics Symposium on Rendering 2015)*, 34(4), June 2015.

    * [Preprint Version](https://drive.google.com/open?id=14zzjee1MAhUPsQ2vUzPQyZFo-J8Gud7b)
    * [Official Publisher's Version](http://doi.org/10.1111/cgf.12674)
    * [Project Page](https://benedikt-bitterli.me/pmems.html)

    Joint project between Disney Research Studios and Disney Animation. This paper describes an efficient method for importance sampling environment maps. This paper was actually derived from the technique Hyperion uses for importance sampling lights with IES profiles, which has been used on all films rendered using Hyperion.

8. **A Practical and Controllable Hair and Fur Model for Production Path Tracing**
    
    [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), [Benedikt Bitterli](https://benedikt-bitterli.me), [Chuck Tappan](https://www.linkedin.com/in/chuck-tappan-40762450/), and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). A Practical and Controllable Hair and Fur Model for Production Path Tracing. In *ACM SIGGRAPH 2015 Talks*, August 2015.

    * [Preprint Version](https://drive.google.com/open?id=19k6mnZMJXmgDSwy1Hcb7fFdMstALjTto)
    * [Official Publisher's Version](http://doi.org/10.1145/2775280.2792559)

    Joint project between Disney Research Studios and Disney Animation. This short paper gives an overview of Hyperion's fur and hair model, originally developed for use on Zootopia. A full paper was published later with more details. This fur/hair model is Hyperion's fur/hair model today, used on every film beginning with *Zootopia* to present. 

9. **Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering**
    
    [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering. In *ACM SIGGRAPH 2015 Course Notes: Physically Based Shading in Theory and Practice*, August 2015.

    * [Preprint Version](https://drive.google.com/open?id=1KJgmVRZqEI7rCdSSeT6_lZJerTTQ0AiH)
    * [Official Publisher's Version](https://doi.org/10.1145/2776880.2787670)
    * [Physically Based Shading SIGGRAPH 2015 Course](https://blog.selfshadow.com/publications/s2015-shading-course)

    Internal project from Disney Animation. This paper describes the full Disney BSDF (sometimes referred to in the wider industry as Disney BRDF v2) used in Hyperion, and also describes a novel subsurface scattering technique called normalized diffusion subsurface scattering. The Disney BSDF is the shading model for everything ever rendered using Hyperion, and normalized diffusion was Hyperion's subsurface model from *Big Hero 6* up through *Moana*. For a public open-source implementation of the Disney BSDF, check out [PBRT v3](https://github.com/mmp/pbrt-v3)'s implementation. Also, check out [Pixar's RenderMan](https://renderman.pixar.com) for an implementation in a commercial renderer!

10. **Approximate Reflectance Profiles for Efficient Subsurface Scattering**

    [Per H Christensen](https://www.seanet.com/~myandper/per.htm) and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Approximate Reflectance Profiles for Efficient Subsurface Scattering. *Pixar Technical Memo*, #15-04, August 2015.
    
    * [Preprint Version](https://drive.google.com/open?id=1kJfJId-I5DjhUnHH-Q6fgsrNc7ZW1MIq)
    * [Official Pixar Research Version and Project Page](http://graphics.pixar.com/library/ApproxBSSRDF/)
    * [Updates and Errata](https://www.seanet.com/~myandper/abstract/memo1504.htm)

    Joint project between Pixar and Disney Animation. This paper presents several useful parameterizations for the normalized diffusion subsurface scattering model presented in the previous paper in this list. These parameterizations are used for the normalized diffusion implementation in [Pixar's RenderMan 21](https://rmanwiki.pixar.com/display/REN/PxrSurface) and later.

11. **Big Hero 6: Into the Portal**
    
    [David Hutchins](https://www.linkedin.com/in/david-hutchins-21a9507/), [Olun Riley](https://www.linkedin.com/in/olun-riley/), [Jesse Erickson](https://www.linkedin.com/in/popsopdop/), [Alexey Stomakhin](http://alexey.stomakhin.com), [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/), and [Michael Kaschalk](https://www.linkedin.com/in/michael-kaschalk-49b7683/). Big Hero 6: Into the Portal. In *ACM SIGGRAPH 2015 Talks*, August 2015.
    
    * [Preprint Version](https://drive.google.com/open?id=1cCDmWf6pKDaIarDRK0YkARhm5_kQlF4_)
    * [Official Publisher's Version](https://doi.org/10.1145/2775280.2792521)    

    Internal project from Disney Animation. This short paper describes some interesting volume rendering challenges that Hyperion faced during the production of *Big Hero 6*'s climax sequence, set in a volumetric fractal portal world.

12. **A Practical and Controllable Hair and Fur Model for Production Path Tracing**
    
    [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), [Benedikt Bitterli](https://benedikt-bitterli.me), [Chuck Tappan](https://www.linkedin.com/in/chuck-tappan-40762450/), and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). A Practical and Controllable Hair and Fur Model for Production Path Tracing. *Computer Graphics Forum (Proceedings of Eurographics 2016)*, 35(2), May 2016.
    
    * [Preprint Version](https://drive.google.com/open?id=1cVxBWddi2yClj_A_bca_emRduPJ6GN8Q)
    * [Official Publisher's Version](https://doi.org/10.1111/cgf.12830)
    * [Project Page](https://benedikt-bitterli.me/pchfm/)
    * [Implementation Guide by Matt Pharr](https://www.pbrt.org/hair.pdf)  

    Joint project between Disney Research Studios and Disney Animation. This paper gives an overview of Hyperion's fur and hair model, originally developed for use on *Zootopia*. This fur/hair model is Hyperion's fur/hair model today, used on every film beginning with *Zootopia* to present. This paper is now also implemented in the open source [PBRT v3](https://github.com/mmp/pbrt-v3/blob/master/src/materials/hair.h) renderer, and also serves as the basis of the hair/fur shader in Chaos Group's [V-Ray Next](https://www.chaosgroup.com/blog/v-ray-next-the-science-behind-the-new-hair-shader) renderer.

13. **Subdivision Next-Event Estimation for Path-Traced Subsurface Scattering**

    [David Koerner](https://www.linkedin.com/in/david-koerner-41233611), [Jan Novák](http://drz.disneyresearch.com/~jnovak/), [Peter Kutz](https://www.linkedin.com/in/peterkutz/), [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/), and [Wojciech Jarosz](https://cs.dartmouth.edu/~wjarosz/). Subdivision Next-Event Estimation for Path-Traced Subsurface Scattering. In *Proceedings of EGSR 2016, Experimental Ideas & Implementations*, June 2016.
    2016-06-24,

    * [Preprint Version](https://drive.google.com/open?id=1iMwNqPr-l-_xTViWqxXYIuP8S_he7t8k)
    * [Official Publisher's Version](https://doi.org/10.2312/sre.20161214)
    * [Project Page](http://drz.disneyresearch.com/~jnovak/publications/SNEE/index.html)

    Joint project between Disney Research Studios, University of Stuttgart, Dartmouth College, and Disney Animation. This paper describes a method for accelerating brute force path traced subsurface scattering; this technique was developed during early experimentation in making path traced subsurface scattering practical for production in Hyperion.

14. **Nonlinearly Weighted First-Order Regression for Denoising Monte Carlo Renderings**
    
    [Benedikt Bitterli](https://benedikt-bitterli.me), [Fabrice Rousselle](https://research.nvidia.com/person/fabrice-rousselle), [Bochang Moon](http://sglab.kaist.ac.kr/~bcmoon/), [José A. Iglesias-Guitian](http://www.j4lley.com/), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), [Kenny Mitchell](http://www.disneyresearch.com/people/kenny-mitchel/), [Wojciech Jarosz](https://cs.dartmouth.edu/~wjarosz/), and [Jan Novák](http://drz.disneyresearch.com/~jnovak/). Nonlinearly Weighted First-Order Regression for Denoising Monte Carlo Renderings. *Computer Graphics Forum (Proceedings of Eurographics Symposium on Rendering 2016)*, 35(4), July 2016.

    * [Preprint Version](https://drive.google.com/open?id=1cwtHef8gq5m-oKbc2yKDY3jwnbJB1iLQ)
    * [Official Publisher's Version](https://doi.org/10.1111/cgf.12954)
    * [Project Page](https://benedikt-bitterli.me/nfor/)

    Joint project between Disney Research Studios, Edinburgh Napier University, Dartmouth College, and Disney Animation. This paper describes a high-quality, stable denoising technique based on a thorough analysis of previous technique. This technique was developed during a larger project to develop a state-of-the-art successor to Hyperion's first generation denoiser.

15. **Practical and Controllable Subsurface Scattering for Production Path Tracing**

    [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), [Peter Kutz](https://www.linkedin.com/in/peterkutz/), and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Practical and Controllable Subsurface Scattering for Production Path Tracing. In *ACM SIGGRAPH 2016 Talks*, July 2016.
    
    * [Preprint Version](https://drive.google.com/open?id=1YzdsAbG60dCUkq6xo_HH8nBseILfHfZW)
    * [Official Publisher's Version](https://doi.org/10.1145/2897839.2927433)

    Internal project from Disney Animation. This short paper describes the novel parameterization and multi-wavelength sampling strategy used to make path traced subsurface scattering practical for production. Both of these are implemented in Hyperion's path traced subsurface scattering system and have been in use on all shows beginning with *Olaf's Frozen Adventure* to present.

16. **Efficient Rendering of Heterogeneous Polydisperse Granular Media**

    [Thomas Müller](https://tom94.net), [Marios Papas](https://graphics.ethz.ch/~mpapas/), [Markus Gross](https://la.disneyresearch.com/people/markus-gross/), [Wojciech Jarosz](https://cs.dartmouth.edu/~wjarosz/), and [Jan Novák](http://drz.disneyresearch.com/~jnovak/). Efficient Rendering of Heterogeneous Polydisperse Granular Media. *ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia 2016)*, 35(6), November 2016.
    
    * [Preprint Version](https://drive.google.com/open?id=1qFwr6_JL29uextdtyNurOFQId0CahvVc)
    * [Official Publisher's Version](https://doi.org/10.1145/2980179.2982429)
    * [Project Page](https://cs.dartmouth.edu/~wjarosz/publications/muller16efficient.html)

    External project from Disney Research Studios, ETH Zürich, and Dartmouth College, inspired in part by production problems encountered at Disney Animation related to rendering things like sand, snow, etc. This technique uses shell transport functions to accelerate path traced rendering of massive assemblies of grains. [Thomas Müller](https://tom94.net) implemented an experimental version of this technique in Hyperion, along with an interesting extension for applying the shell transport theory to volume rendering.

17. **Practical Path Guiding for Efficient Light-Transport Simulation**

    [Thomas Müller](https://tom94.net), [Markus Gross](https://la.disneyresearch.com/people/markus-gross/), and [Jan Novák](http://drz.disneyresearch.com/~jnovak/). Practical Path Guiding for Efficient Light-Transport Simulation. *Computer Graphics Forum (Proceedings of Eurographics Symposium on Rendering 2017)*, 36(4), July 2017.

    * [Preprint Version](https://drive.google.com/open?id=1xJeK76y7BjWHMHpIL31o08f9eJzytGNU) (Updated compared to official version)
    * [Official Publisher's Version](https://doi.org/10.1111/cgf.13227)
    * [Project Page](http://drz.disneyresearch.com/~jnovak/publications/PathGuide/index.html)

    External joint project between Disney Research Studios and ETH Zürich, inspired in part by challenges with handling complex light transport efficiently in Hyperion. Won the Best Paper Award at EGSR 2017! This paper describes a robust, unbiased technique for progressively learning complex indirect illumination in a scene during a render and intelligently guiding paths to better sample difficult indirect illumination effects. Implemented in Hyperion, along with a number of interesting improvements documented in a later paper. In use on *Frozen 2* and future films. 

18. **Kernel-predicting Convolutional Networks for Denoising Monte Carlo Renderings**

    [Steve Bako](http://www.ece.ucsb.edu/~sbako/), [Thijs Vogels](https://tvogels.nl/), [Brian McWilliams](https://www.inf.ethz.ch/personal/mcbrian/), [Mark Meyer](http://graphics.pixar.com/people/mmeyer/), [Jan Novák](http://drz.disneyresearch.com/~jnovak/), [Alex Harvill](https://graphics.pixar.com/library/indexAuthorAlex_Harvill.html), [Pradeep Sen](http://www.ece.ucsb.edu/~psen/), [Tony DeRose](http://graphics.pixar.com/people/derose/), and [Fabrice Rousselle](https://research.nvidia.com/person/fabrice-rousselle). Kernel-predicting Convolutional Networks for Denoising Monte Carlo Renderings. *ACM Transactions on Graphics (Proceedings of SIGGRAPH 2017)*, 36(4), July 2017.

    * [Preprint Version](https://drive.google.com/open?id=18jrs2MPiZ5UUqNiSlrerzzb5JX1ba_zM)
    * [Official Publisher's Version](https://doi.org/10.1145/3072959.3073708)
    * [Project Page](http://drz.disneyresearch.com/~jnovak/publications/KPCN/index.html)

    External joint project between University of California Santa Barbara, Disney Research Studios, ETH Zürich, and Pixar, developed as part of the larger effort to develop a successor to Hyperion's first generation denoiser. This paper describes a supervised learning approach for denoising filter kernels using deep convolutional neural networks. This technique is the basis of the modern Disney-Research-developed second generation deep-learning denoiser in use by the rendering teams at Pixar and ILM, and by the Hyperion iteam at Disney Animation.

19. **Production Volume Rendering**

    [Julian Fong](https://www.linkedin.com/in/jfong), [Magnus Wrenninge](http://magnuswrenninge.com), [Christopher Kulla](https://fpsunflower.github.io/ckulla/), and [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/). Production Volume Rendering. In *ACM SIGGRAPH 2017 Courses*, July 2017.
    
    * [Preprint Version](https://drive.google.com/file/d/1eFr_4IKzt796Ns4Iv3OjR3ni0Y7QigP5/view?usp=drivesdk) (Updated compared to official version)
    * [Official Publisher's Version](https://doi.org/10.1145/3084873.3084907)
    * [Production Volume Rendering SIGGRAPH 2017 Course](https://graphics.pixar.com/library/ProductionVolumeRendering/index.html)
    
    Joint publication from Pixar, Sony Pictures Imageworks, and Disney Animation. This course covers volume rendering in modern path tracing renderers, from basic theory all the way to practice. The last chapter details the inner workings of Hyperion's first and second generation transmittance estimation based volume rendering system, used from *Big Hero 6* up through *Moana*.

20. **Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes**
    
    [Peter Kutz](https://www.linkedin.com/in/peterkutz/), [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/), [Yining Karl Li](https://www.yiningkarlli.com), and [Jan Novák](http://drz.disneyresearch.com/~jnovak/). Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes. *ACM Transactions on Graphics (Proceedings of SIGGRAPH 2017)*, 36(4), July 2017.

	* [Preprint Version](https://drive.google.com/file/d/198A1h93ZE7SuKEidx7FCwspJkAWqYG7e/view?usp=drivesdk)
    * [Official Publisher's Version](https://doi.org/10.1145/3072959.3073665)
    * [Project Page](https://www.yiningkarlli.com/projects/specdecomptracking.html)
    
    Joint project between Disney Research Studios and Disney Animation. This paper describes two complementary new null-collision tracking techniques: decomposition tracking and spectral tracking. The paper also introduces to computer graphics an extended integral formulation of null-collision algorithms, originally developed in the field of reactor physics. These two techniques are the basis of Hyperion's modern third generation null-collision tracking based volume rendering system, in use beginning on *Olaf's Frozen Adventure* to present.

21. **The Ocean and Water Pipeline of Disney’s Moana**

    [Sean Palmer](https://www.linkedin.com/in/seanpalmer/), [Jonathan Garcia](https://www.imdb.com/name/nm3376120/), [Sara Drakeley](https://www.linkedin.com/in/sara-drakeley-37290/), [Patrick Kelly](https://www.linkedin.com/in/patrick-kelly-1424b86/), and [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/). The Ocean and Water Pipeline of Disney’s Moana. In *ACM SIGGRAPH 2017 Talks*, July 2017.
    
	* [Preprint Version](https://drive.google.com/file/d/1q4dum1dBhKTBK6fDqiIX-Bm9JrppAamm/view?usp=drivesdk)
    * [Official Publisher's Version](https://doi.org/10.1145/3084363.3085067)
    
    Internal project from Disney Animation. This short paper describes the water pipeline developed for *Moana*, including the level set compositing and rendering system that was implemented in Hyperion. This system has since found additional usage on shows since *Moana*.

22. **Recent Advancements in Disney’s Hyperion Renderer**

    [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/), [Patrick Kelly](https://www.linkedin.com/in/patrick-kelly-1424b86/), [Peter Kutz](https://www.linkedin.com/in/peterkutz/), [Yining Karl Li](https://www.yiningkarlli.com), and [Daniel Teece](https://www.linkedin.com/in/daniel-teece-2650358/). Recent Advancements in Disney’s Hyperion Renderer. In *ACM SIGGRAPH 2017 Course Notes: Path Tracing in Production Part 1*, August 2017.
    
    * [Preprint Version](https://drive.google.com/file/d/1kFpp_7I8vH8LHsf1Si94pqMkHxwinMSU/view?usp=drivesdk) (Updated compared to official version)
    * [Official Publisher's Version](https://doi.org/10.1145/3084873.3084904)
    * [Path Tracing in Production SIGGRAPH 2017 Course](https://jo.dreggn.org/path-tracing-in-production/2017/index.html)
    
    Publication from Disney Animation. This paper describes various advancements in Hyperion since *Big Hero 6* up through *Moana*, with a particular focus towards replacing multiple scattering approximations with true, brute-force path-traced solutions for both better artist workflows and improved visual quality.

23. **Denoising with Kernel Prediction and Asymmetric Loss Functions**

    [Thijs Vogels](https://tvogels.nl/), [Fabrice Rousselle](https://research.nvidia.com/person/fabrice-rousselle), [Brian McWilliams](https://www.inf.ethz.ch/personal/mcbrian/), [Gerhard Rothlin](https://la.disneyresearch.com/people/gerhard-rothlin/), [Alex Harvill](https://graphics.pixar.com/library/indexAuthorAlex_Harvill.html), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), [Mark Meyer](http://graphics.pixar.com/people/mmeyer/), and [Jan Novák](http://drz.disneyresearch.com/~jnovak/). Denoising with Kernel Prediction and Asymmetric Loss Functions. *ACM Transactions on Graphics (Proceedings of SIGGRAPH 2018)*, 37(4), August 2017.
    
    * [Preprint Version](https://drive.google.com/open?id=1qAu5DTDfxPPCFyGGzyoG4ggnz7877BEB)
    * [Official Publisher's Version](https://doi.org/10.1145/3197517.3201388)
    * [Project Page](http://drz.disneyresearch.com/~jnovak/publications/KPAL/index.html)

    Joint project between Disney Research Studios, Pixar, and Disney Animation. This paper describes a variety of improvements and extensions made to the 2017 *Kernel-predicting Convolutional Networks for Denoising Monte Carlo Renderings* paper; collectively, these improvements comprise the modern Disney-Research-developed second generation deep-learning denoiser in use in production at Pixar, ILM, and Disney Animation. At Disney Animation, used experimentally on *Ralph Breaks the Internet* and in full production beginning with *Frozen 2*.

24. **Plausible Iris Caustics and Limbal Arc Rendering**

    [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0) and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Plausible Iris Caustics and Limbal Arc Rendering. *ACM SIGGRAPH 2018 Talks*, August 2018.

	* [Preprint Version](https://drive.google.com/open?id=1Wibzqi9JIb4-DvXUyYKVfrbfrhu1bpQs)
    * [Official Publisher's Version](https://doi.org/10.1145/3214745.3214751)

    Internal project from Disney Animation. This paper describes a technique for rendering realistic, physically based eye caustics using manifold next-event estimation combined with a plausible procedural geometric eye model. This realistic eye model is implemented in Hyperion for use in future unannounced projects.

25. **The Design and Evolution of Disney’s Hyperion Renderer**

    [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), [Hank Driskill](https://www.linkedin.com/in/hank-driskill-1a7140165/), [Ralf Habel](https://www.linkedin.com/in/ralf-habel-6a74bb2/), [Patrick Kelly](https://www.linkedin.com/in/patrick-kelly-1424b86/), [Peter Kutz](https://www.linkedin.com/in/peterkutz/), [Yining Karl Li](https://www.yiningkarlli.com), and [Daniel Teece](https://www.linkedin.com/in/daniel-teece-2650358/). The Design and Evolution of Disney’s Hyperion Renderer. *ACM Transactions on Graphics*, 37(3), August 2018.
    
    * [Preprint Version](https://drive.google.com/open?id=1RbRr_rMJ1CIpcGsGWO4iuZKZ76utgMcd)
    * [Official Publisher's Version](https://doi.org/10.1145/3182159)
    * [Project Page](https://www.yiningkarlli.com/projects/hyperiondesign.html)

    Publication from Disney Animation. This paper is a systems architecture paper for the entirety of Hyperion. The paper describes the history of Disney's Hyperion Renderer, the internal architecture, various systems such as shading, volumes, many-light sampling, emissive geometry, path simplification, fur rendering, photon-mapped caustics, subsurface scattering, and more. The paper also describes various challenges that had to be overcome for practical production use and artistic controllability. This paper covers everything in Hyperion beginning from *Big Hero 6* up through *Ralph Breaks the Internet*.

26. **Clouds Data Set**

    [Walt Disney Animation Studios](https://www.disneyanimation.com). Clouds Data Set, August 2018.

    * [Official Page](https://www.disneyanimation.com/resources/clouds/)
    * [License](https://disney-animation.s3.amazonaws.com/uploads/production/data_set_asset/6/asset/License_Cloud.pdf)

    Publicly released data set for rendering research, by Disney Animation. This data set was produced by our production artists as part of the development process for Hyperion's modern third generation null-collision tracking based volume rendering system.

27. ***Moana* Island Scene Data Set**

    [Walt Disney Animation Studios](https://www.disneyanimation.com). *Moana* Island Scene Data Set, August 2018.

    * [Official Page](https://www.disneyanimation.com/resources/moana-island-scene/)
    * [License](https://disney-animation.s3.amazonaws.com/uploads/production/data_set_asset/4/asset/License_Moana.pdf)

    Publicly released data set for rendering research, by Disney Animation.
    This data set is an actual production scene from *Moana*, originally rendered using Hyperion and ported to PBRT v3 for the public release. This data set gives a sense of the typical scene complexity and rendering challenges that Hyperion handles every day in production.

28. **Denoising Deep Monte Carlo Renderings**

    [Delio Vicini](https://rgl.epfl.ch/people/dvicini), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), [Jan Novák](http://drz.disneyresearch.com/~jnovak/), [Fabrice Rousselle](https://research.nvidia.com/person/fabrice-rousselle), and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Denoising Deep Monte Carlo Renderings. *Computer Graphics Forum*, 38(1), February 2019.

    * [Preprint Version](https://drive.google.com/file/d/1n904HlzXQx_ahiRruyCh9KTQjCLZ9lDM/view?usp=sharing)
    * [Official Publisher's Version](https://doi.org/10.1111/cgf.13533)
    * [Project Page](http://drz.disneyresearch.com/~jnovak/publications/DeepZDenoising/index.html)

    Joint project between Disney Research Studios and Disney Animation. This paper presents a technique for denoising deep (meaning images with multiple depth bins per pixel) renders, for use with deep-compositing workflows. This technique was developed as part of general denoising research from Disney Research Studios and the Hyperion team.

29. **The Challenges of Releasing the *Moana* Island Scene**

    [Rasmus Tamstorf](https://www.linkedin.com/in/rasmus-tamstorf-22835a1/) and [Heather Pritchett](https://www.linkedin.com/in/heather-pritchett-8067592/). The Challenges of Releasing the *Moana* Island Scene. In *Proceedings of EGSR 2019, Industry Track*, July 2019.

    * [Preprint Version](https://drive.google.com/open?id=18jLb3XNqXCvi2R7Yyb2E2aCdJ26zBBF7)
    * [Official Publisher's Version](https://doi.org/10.2312/sr.20191223)

    Short paper from Disney Animation's research department, discussing some of the challenges involved in preparing a production Hyperion scene for public release. The Hyperion team provided various support and advice to the larger studio effort to release the *Moana* Island Scene.

30. **Practical Path Guiding in Production**

    [Thomas Müller](https://tom94.net). Practical Path Guiding in Production. In *ACM SIGGRAPH 2019 Course Notes: Path Guiding in Production*, July 2019.
    
    * [Preprint Version](https://drive.google.com/open?id=1Dxa2Wm4j2Hv40KIUK3K_yg_v-acOU9rt)
    * [Official Publisher's Version](https://doi.org/10.1145/3305366.3328091)
    * [Path Guiding in Production SIGGRAPH 2019 Course](https://jo.dreggn.org/path-tracing-in-production/2019/index.html)

    Joint project between Disney Research Studios and Disney Animation. This paper presents a number of improvements and extensions made to *Practical Path Guiding* developed by in Hyperion by [Thomas Müller](https://tom94.net) and the Hyperion team. In use in production on *Frozen 2*.

31. **Machine-Learning Denoising in Feature Film Production**

    [Henrik Dahlberg](https://henrikdahlberg.github.io), [David Adler](https://www.linkedin.com/in/david-adler-5ab7b21/), and [Jeremy Newlin](https://www.linkedin.com/in/jeremy-newlin-07a87946/). Machine-Learning Denoising in Feature Film Production. In *ACM SIGGRAPH 2019 Talks*, July 2019.
    
    * [Preprint Version](https://drive.google.com/open?id=1CdUC9caWNSShHNvIj4kge7BWQczXWr79)
    * [Official Publisher's Version](https://doi.org/10.1145/3306307.3328150)

    Joint publication from Pixar, Industrial Light & Magic, and Disney Animation. Describes how the modern Disney-Research-developed second generation deep-learning denoiser was deployed into production at Pixar, ILM, and Disney Animation.

32. **Taming the Shadow Terminator**

    [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), [Yining Karl Li](https://www.yiningkarlli.com), and [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). Taming the Shadow Terminator. In *ACM SIGGRAPH 2019 Talks*, August 2019.
    
    * [Preprint Version](https://drive.google.com/open?id=1Yb6GUP3pIuNiH9Xgq2P0L99V3JAQ7emM) (Updated compared to official version)
    * [Official Publisher's Version](https://doi.org/10.1145/3306307.3328172)
    * [Project Page](https://www.yiningkarlli.com/projects/shadowterminator.html)

    Internal project from Disney Animation. This short paper describes a solution to the long-standing "shadow terminator" problem associated with using shading normals. The technique in this paper is implemented in Hyperion and has been in use in production starting on *Frozen 2* through present.

33. **On Histogram-Preserving Blending for Randomized Texture Tiling**

    [Brent Burley](https://www.linkedin.com/in/brent-burley-56972557/). On Histogram-Preserving Blending for Randomized Texture Tiling. *Journal of Computer Graphics Techniques*, 8(4), November 2019.

    * [Preprint Version](https://drive.google.com/open?id=1kiMQUCcX_tEyQXWtsAPWZLVZTQt6OL_i)
    * [Official Publisher's Version](http://www.jcgt.org/published/0008/04/02/)

    Internal project from Disney Animation. This paper describes some modiciations to the histogram-preserving hex-tiling algorithm of Heitz and Neyret; these modifications make implementing the Heitz and Neyret technique easier and more efficient. This paper describes Hyperion's implementation of the technique, in use in production starting on *Frozen 2* through present.

34. **The Look and Lighting of "Show Yourself" in "Frozen 2"**

    [Amol Sathe](https://dl.acm.org/author/Sathe,%20Amol), [Lance Summers](https://dl.acm.org/author/Summers,%20Lance), [Matt Jen-Yuan Chiang](http://dl.acm.org/author_page.cfm?id=99658729701&coll=DL&dl=ACM&trk=0), and [James Newland](https://dl.acm.org/author/Newland,%20James). The Look and Lighting of "Show Yourself" in "Frozen 2". In *ACM SIGGRAPH 2020 Talks*, August 2020.

    * [Preprint Version](https://drive.google.com/file/d/1XVyhzCP_RDusyrfrsKlR8hIuq0fs_WJF/edit)
    * [Official Publisher's Version](https://doi.org/10.1145/3388767.3407388)

    Internal project from Disney Animation. This paper describes some of the unusual challenges encountered in lighting the glacier environment from Frozen 2 using Hyperion, and includes a description of a new tabulation-based approach to microfacet multiple scattering implemented in Hyperion.

[![Figure 2: Hyperion logo, modeled by Disney Animation artist Chuck Tappan and rendered in Disney's Hyperion Renderer.]({{site.url}}/content/images/2019/Jul/hyperion_logo.png)]({{site.url}}/content/images/2019/Jul/hyperion_logo.png)

Again, this post is meant to be a living document; any new publications with involvement from the Hyperion team will be added here.
Of course, the Hyperion team is not the only team at Disney Animation that regularly publishes; for a full list of publications from Disney Animation, see the [official Disney Animation publications page](https://www.disneyanimation.com/technology/publications).
The [Disney Animation Technology website](https://www.technology.disneyanimation.com) is also worth keeping an eye on if you want to keep up on what our engineers and TDs are working on!

If you're just getting started and want to learn more about rendering in general, the must-read text that every rendering engineer has on their desk or bookshelf is [Physically Based Rendering 3rd Edition](http://www.pbr-book.org) by Matt Pharr, Wenzel Jakob, and Greg Humphreys (now available online completely for free!).
Also, the de-facto standard beginner's text today is the [Ray Tracing in One Weekend](https://www.amazon.com/gp/product/B01B5AODD8) series by Peter Shirley, which provides a great, gentle, practical introduction to ray tracing, and is also available completely for free. 
Also take a look at [Real-Time Rendering 4th Edition](http://www.realtimerendering.com/book.html), [Ray Tracing Gems](http://www.realtimerendering.com/raytracinggems/) (also available online for free), [The Graphics Codex](http://graphicscodex.com) by Morgan McGuire, and Eric Haines's [Ray Tracing Resources page](http://www.realtimerendering.com/raytracing.html).

Many other amazing rendering teams at both large studios and commercial vendors also publish regularly, and I highly recommend keeping up with all of their work too!
For a good starting point into exploring the wider world of production rendering, check out the [ACM Transactions on Graphics Special Issue on Production Rendering](https://dl.acm.org/citation.cfm?id=3243123), which is edited by Matt Pharr and contains extensive, detailed systems papers on [Pixar's RenderMan](https://dl.acm.org/citation.cfm?id=3182162), [Weta Digital's Manuka](https://dl.acm.org/citation.cfm?id=3182161), [Solid Angle (Autodesk)'s Arnold](https://dl.acm.org/citation.cfm?id=3182160), [Sony Picture Imageworks' Arnold](https://dl.acm.org/citation.cfm?id=3180495), and of course [Disney Animation's Hyperion](https://dl.acm.org/citation.cfm?id=3182159).
A sixth paper that I would group with five above is the High Performance Graphics 2017 paper detailing the architecture of [DreamWorks Animation's MoonRay](http://doi.org/10.1145/3105762.3105768).

For even further exploration, extensive course notes are available from SIGGRAPH courses every year. Particularly good recurring courses to look at from past years are the Path Tracing in Production course ([2017](https://jo.dreggn.org/path-tracing-in-production/2017/index.html), [2018](https://jo.dreggn.org/path-tracing-in-production/2018/index.html), [2019](https://jo.dreggn.org/path-tracing-in-production/2019/index.html)), the absolutely legendary Physically Based Shading course ([2010](http://renderwonk.com/publications/s2010-shading-course/), [2012](https://blog.selfshadow.com/publications/s2012-shading-course), [2013](https://blog.selfshadow.com/publications/s2013-shading-course), [2014](https://blog.selfshadow.com/publications/s2014-shading-course), [2015](https://blog.selfshadow.com/publications/s2015-shading-course), [2016](https://blog.selfshadow.com/publications/s2016-shading-course), [2017](https://blog.selfshadow.com/publications/s2017-shading-course/)), the various incarnations of a volume rendering course ([2011](https://magnuswrenninge.com/productionvolumerendering), [2017](https://graphics.pixar.com/library/ProductionVolumeRendering/), [2018](https://cs.dartmouth.edu/~wjarosz/publications/novak18monte-sig.html)), and now due to the dawn of ray tracing in games, [Advances in Real-Time Rendering](http://advances.realtimerendering.com) and [Open Problems in Real-Time Rendering](https://openproblems.realtimerendering.com).
Also, Stephen Hill typically collects links to all publicly available course notes, slides, source code, and more for SIGGRAPH each year after the conference on [his blog](https://blog.selfshadow.com); both his blog and the blogs listed on the sidebar of his website are essentially mandatory reading in the rendering world.
Also, interesting rendering papers are always being published in journals and at conferences.
The major journals to check are [ACM Transactions on Graphics (TOG)](https://tog.acm.org), [Computer Graphics Forum (CGF)](https://www.eg.org/wp/eurographics-publications/cgf/), and the [Journal of Computer Graphics Techniques (JCGT)](http://www.jcgt.org); the major academic conferences where rendering stuff appears are SIGGRAPH, SIGGRAPH Asia, EGSR (Eurographics Symposium on Rendering), HPG (High Performance Graphics), MAM (Workshop on Material Appearance Modeling), EUROGRAPHICS, and i3D (ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games); another three industry conferences where interesting stuff often appears are DigiPro, GDC (Game Developers Conference) and GTC (Graphics Technology Conference).
A complete listing of the contents for all of these conferences every year, along with links to preprints, is [compiled by Ke-Sen Huang](http://kesen.realtimerendering.com).

A large number of people have contributed directly to Hyperion's development since the beginning of the project, in a variety of capacities ranging from core developers to support staff and all the way to notable interns. In no particular order, including both present and past: Daniel Teece, Brent Burley, David Adler, Matt Jen-Yuan Chen, Yining Karl Li, Mark Lee, Wei-Feng Wayne Huang, Joe Schutte, Andrew Gartner, Jennifer Yu, Peter Kutz, Ralf Habel, Patrick Kelly, Gregory Nichols, Andrew Selle, Christian Eisenacher, Jan Novák, Ben Spencer, Doug Lesan, Lisa Young, Tami Valdez, Andrew Fisher, Noah Kagan, Benedikt Bitterli, Thomas Müller, Tizian Zeltner, Mathijs Molenaar, Laura Lediav, Guillaume Loubet, David Koerner, Simon Kallweit, Gabor Liktor, Ulrich Muller, and Serge Sretschinsky.
Our closest research partners at Disney Research Studios and elsewhere include (in no particular order): Marios Papas, Per Christensen, Julian Fong, Christophe Hery, Wojciech Jarosz, Fabrice Rouselle, Rasmus Tamstorf, Ryusuke Villemin, and Magnus Wrenninge.
Invaluable support from studio leadership over the years has been provided by (again, in no particular order): Nick Cannon, Golriz Fanai, Bettina Martin, Laura Franek, Collin Larkins, Rajesh Sharma, Chuck Tappan, Sean Jenkins, Darren Robinson, Hank Driskill, Kyle Odermatt, Adolph Lusinsky, Ernie Petti, Kelsey Hurley, Tad Miller, Mark Hammel, Mohit Kallianpur, Brian Leach, Josh Staub, Steve Goldberg, Scott Kersavage, Andy Hendrickson, Dan Candela, Ed Catmull, and many others.
Of course, beyond this enormous list, there is an even more enormous list of countless artists, technical directors, production supervisors, and other technology development teams at Disney Animation who motivated Hyperion, participated in its development, and contributed to its success.
If anything in this post has caught your interest, keep an eye out for open position listings on [DisneyAnimation.com](https://www.disneyanimation.com/careers/open-positions); maybe these lists can one day include you!

Finally, here is a list of all publicly released and announced projects to date made using Disney's Hyperion Renderer:

**Feature Films**: [Big Hero 6](https://www.disneyanimation.com/films/big-hero-6/) (2014), [Zootopia](https://www.disneyanimation.com/films/zootopia/) (2016), [Moana](https://www.disneyanimation.com/films/moana/) (2016), [Ralph Breaks the Internet](https://www.disneyanimation.com/films/ralph-breaks-the-internet/) (2018), [Frozen 2](https://www.disneyanimation.com/films/frozen-2/) (2019), [Raya and the Last Dragon](https://www.disneyanimation.com/) (2021)

**Shorts and Featurettes**: [Feast](https://www.disneyanimation.com/shorts/feast/) (2014), [Frozen Fever](https://www.disneyanimation.com/shorts/frozen-fever/) (2015), [Inner Workings](https://www.disneyplus.com/movies/inner-workings/2am4tRzFOOXl) (2016), [Gone Fishing](https://www.imdb.com/title/tt6467284/) (2017), [Olaf's Frozen Adventure](https://www.disneyplus.com/movies/olafs-frozen-adventure/5zrFDkAANpLi) (2017), [Myth: A Frozen Tale](https://www.disneyanimation.com/shorts/myth/)<sup>1</sup> (2019), [Once Upon a Snowman](https://www.disneyplus.com/movies/once-upon-a-snowman/2tBSdZv6bB4L) (2020)

**Animated Series**: [At Home With Olaf](https://www.youtube.com/playlist?list=PLxnVeUnlga-Eg3hSTyV2GXjiJYdjQl2nt) (2020)

**Short Circuit Shorts**: [Exchange Student](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Just a Thought](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Jing Hua](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Elephant in the Room](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Puddles](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Lightning in a Bottle](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Zenith](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Drop](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Fetch](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Downtown](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Hair-Jitsu](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [The Race](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Lucky Toupée](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) (2020), [Cycles](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V)<sup>2</sup> (2020), [A Kite's Tale](https://twitter.com/disneyanimation/status/1149743115130920960?lang=en)<sup>2</sup> (2020)

**Intern Shorts**: [Ventana](https://ohmy.disney.com/insider/2017/10/19/you-must-watch-this-beautiful-short-created-by-walt-disney-animation-interns/) (2017), [Voilà](https://ohmy.disney.com/news/2018/12/05/voila-walt-disney-animation-studios-interns/) (2018), [Maestro](https://ohmy.disney.com/movies/2019/09/19/watch-maestro-a-beautiful-short-from-this-years-walt-disney-animation-studios-interns/) (2019)

**Filmmaker Co-op Shorts**: [Weeds](https://www.imdb.com/title/tt7592274/) (2017)

<sup>1</sup> VR project running on Unreal Engine, with shading and textures baked out of Disney's Hyperion Renderer.

<sup>2</sup> VR project running on Unity, with shading and textures baked out of Disney's Hyperion Renderer.
