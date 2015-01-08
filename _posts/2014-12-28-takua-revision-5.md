---
layout: post
title: Takua Render Revision 5
tags: [Coding, Renderer]
author: Yining Karl Li
---

[![Rough blue metallic XYZRGB Dragon model in a Cornell Box, rendered entirely with Takua Render a0.5]({{site.url}}/content/images/2014/Dec/xyzrgb_dragon.png)]({{site.url}}/content/images/2014/Dec/xyzrgb_dragon.png)

I haven't posted much at all this past year due, but I've been working on some stuff that I'm really excited about! For the past year and a half, I've been building a new, much more advanced version of Takua Render completely from scratch. In this post, I'll give a brief introduction and runthrough of the new version of Takua, which I've numbered as Revision 5 or a0.5. Since I first started exploring the world of renderer construction a few years back, I've learned an immense amount about every part of building a renderer, ranging all the way from low level architecture all the way up to light transport and surface algorithms. I've also been fortunate and lucky enough to be able to meet and talk to a lot of people working on professional, industry quality renderers and people from some of the best rendering research groups in the world, and so this new version of my own renderer is an attempt at applying everything I've learned and building a base for even further future improvement and research projects.

Very broadly, the two things I'm most proud of with Takua a0.5 are the internal renderer architecture and a lot of work on integrators and light transport. Takua a0.5's internal architecture is heavily influenced by Disney's [Sorted Deferred Shading](https://disney-animation.s3.amazonaws.com/uploads/production/publication_asset/70/asset/Sorted_Deferred_Shading_For_Production_Path_Tracing.pdf) paper, the internal architecture of [NVIDIA's Optix engine](http://graphics.cs.williams.edu/papers/OptiXSIGGRAPH10/Parker10OptiX.pdf), and the modular architecture of [Mitsuba Render](https://www.mitsuba-renderer.org/). In the light transport area, Takua a0.5 implements not just unidirectional pathtracing with direct light importance sampling (PT), but also correctly implements multiple importance sampled bidirectional pathtracing (BDPT), progressive photon mapping (PPM), and the relatively new [vertex connection and merging](https://graphics.cg.uni-saarland.de/fileadmin/cguds/papers/2012/georgiev_sa2012/georgiev_sa2012.pdf) (VCM) algorithm. I'm planning on writing a series of posts in the next few weeks/months that will dive in depth into Takua a0.5's various features.

Takua a0.5 has also marked a pretty large shift in strategy in terms of targeted hardware. In previous versions of Takua, I did a lot of exploration with getting the entire renderer to run on CUDA-enabled GPUs. In the interest of increased architectural flexibility, Takua a0.5 does not have a 100% GPU mode anymore. Instead, Takua a0.5 is structured in such a way that certain individual modules can be accelerated by running on the GPU, but overall much of the core of the renderer is designed to make efficient use of the CPU to achieve high performance while bypassing a lot of the complexity of building a pure GPU renderer. Again, I'll have a detailed post on this decision later down the line.

Here is a list of the some of the major new things in Takua a0.5:

* Completely modular plugin system
    * Programmable ray/shader queue/dispatch system
    * Natively bidirectional BSDF system
    * Multiple geometry backends optimized for different hardware
    * Plugin systems for cameras, lights, acceleration structures, geometry, viewers, materials, surface patterns, BSDFs, etc.
* Task-based concurrency and parallelism via Intel's TBB library
* Mitsuba/PBRT/Renderman 19 RIS style integrator system
    * Unidirectional pathtracing with direct light importance sampling
    * Lighttracing with camera importance sampling
    * Bidirectional pathtracing with multiple importance sampling
    * Progressive photon mapping
    * Vertex connection and merging
    * All integrators designed to be re-entrant and capable of deferred operations
* Native animation support
    * Renderer-wide keyframing/animation support
    * Transformational AND deformational motion blur
    * Motion blur support for all camera, material, surface pattern, light, etc. attributes
    * Animation/keyframe sequences can be instanced in addition to geometry instancing

The blue metallic XYZRGB dragon image is a render that was produced using only Takua a0.5. Since I now have access to the original physical Cornell Box model, I thought it would be fun to use a 100% measurement-accurate model of the Cornell Box as a test scene while working on Takua a0.5. All of these renders have no post-processing whatsoever. Here are some other renders made as tests during development:

[![Vanilla Cornell Box with measurements taken directly off of the original physical Cornell Box model.]({{site.url}}/content/images/2014/Dec/cornellbox.png)]({{site.url}}/content/images/2014/Dec/cornellbox.png)

[![Glass Stanford Dragon producing some interesting caustics on the floor.]({{site.url}}/content/images/2014/Dec/dragon.png)]({{site.url}}/content/images/2014/Dec/dragon.png)

[![Floating glass ball as another caustics test.]({{site.url}}/content/images/2014/Dec/glassball.png)]({{site.url}}/content/images/2014/Dec/glassball.png)

[![Mirror cube.]({{site.url}}/content/images/2014/Dec/mirrorcube.png)]({{site.url}}/content/images/2014/Dec/mirrorcube.png)

[![Deformational motion blur test using a glass rectangular prism with the top half twisting over time.]({{site.url}}/content/images/2014/Dec/animblur.png)]({{site.url}}/content/images/2014/Dec/animblur.png)

[![A really ugly texture test that for some reason I kind of like.]({{site.url}}/content/images/2014/Dec/uvbox.png)]({{site.url}}/content/images/2014/Dec/uvbox.png)

More interesting non-Cornell Box renders coming in later posts!

