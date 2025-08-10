---
layout: post
title: SIGGRAPH 2025 Talk- A Texture Streaming Pipeline for Real-Time GPU Ray Tracing
tags: [Hyperion, SIGGRAPH]
author: Yining Karl Li
---

This year at SIGGRAPH 2025, Mark Lee, Nathan Zeichner, and I have a talk about a GPU texture streaming system we've been working on for Disney Animation's in-house real-time GPU ray tracing previsualization renderer.
Of course, GPU texture streaming systems are not exactly something novel; pretty much every game engine and every GPU-based production renderer out there has one.
However, because Disney Animation's texturing workflow is 100% based on Ptex, our texture streaming system has to be built to support Ptex really well, and this imposes some interesting design requirements and constraints on the problem.
We thought that these design choices would make for an interesting talk!

Nathan will be presenting the talk at SIGGRAPH 2025 in Vancouver as part of the "Real-Time and Mobile Techniques" session on Sunday August 10th, starting at 9am.

[![A higher-res version of Figure 1 from the paper. A scene from Moana 2, rendered using our real-time GPU ray tracer (B, C, D) and compared with the final frame (A) from Disney’s Hyperion Renderer. Rendering without textures (D) is not a useful previsualization for (A). Without streaming, only the lowest resolution MIP tile per Ptex face can fit on the GPU (C). With our texture streaming, we handle 1.5 TB of Ptex files on disk using only 2 GB of GPU VRAM to achieve a result (B) that matches the texture detail of (A) while maintaining >95% of the average performance of (D), without stalls.]({{site.url}}/content/images/2025/Aug/gpuptex/preview/teaser.jpg)]({{site.url}}/content/images/2025/Aug/gpuptex/teaser.png)

Here is the paper abstract:

> Disney Animation makes heavy use of Ptex [[Burley and Lacewell 2008](https://doi.org/10.1111/j.1467-8659.2008.01253.x)] across our assets [[Burley et al. 2018]](https://dl.acm.org/citation.cfm?id=3182159), which required a new texture streaming pipeline for our new real-time ray tracer. Our goal was to create a scalable system which could provide a real-time, zero-stall experience to users at all times, even as the number of Ptex files expands into the tens of thousands. We cap the maximum size of the GPU cache to a relatively small footprint, and employ a fast LRU eviction scheme when we hit the limit.

The paper and related materials can be found at:

* [Project Page (Author’s Version and Demo Video)](https://www.yiningkarlli.com/projects/gpuptex.html)
* [Official Print Version (ACM Library)](https://doi.org/10.1145/3721239.3734098)

As usual, all of the technical details are in the paper and presentation, so this blog post is just my personal notes on this project.

We've been working on this project for a pretty long while, and what we're presenting in this talk is actually the second generation our team has built of a GPU texture streaming system with Ptex support.
The earlier first prototype of our GPU Ptex system was largely written by Joe Schutte, who we are very indebted to for paving the way and proving out various ideas, such as the use of [cuckoo hashing](https://en.wikipedia.org/wiki/Cuckoo_hashing) [[Erlingsson 2006]](https://www.researchgate.net/publication/248589354_A_cool_and_practical_alternative_to_traditional_hash_tables) for storing keys.
We learned a ton of lessons from that first prototype, which informed the modern incarnation of the system.
The core of the modern system was primarily written by Mark, with a lot of additional work from Nathan to generalize the system to support both our CUDA/Optix based GPU ray tracing previsualization renderer, and our in-house fork of Hydra's Storm rasterizer.
My role on the project was pretty small; I essentially was just a consultant contributing to some ideas and brainstorming, so I'm very grateful to Mark and Nathan for having allowed me to contribute to this talk!

One of the biggest lessons I've learned during my professional career has been the value of building systems twice- Chapter 11 of the famous [Mythical Man Month book by Frederick Brooks](https://en.wikipedia.org/wiki/The_Mythical_Man-Month) is all about the value of building a first version to throw away, because much of what is required to build an actually good solution can only be learned through the process of attempting to build a solution in the first place.
A lot of the design choices that went into the system described in our talk draws from both the earlier prototype that was built, and also upon past experience building texture streaming systems in other renderers.
For example, one big lesson that Mark and I both learned independently is that texture _filtering_ is extremely hard (and it's famously even harder in Ptex due to the need to filter across faces with potentially very different resolutions), and in a stochastic ray tracing renderer, a better solution is often to just point sample and lineraly interpolate between the two closest MIP levels.
Mark learned this on Moonray [[Lee et al. 2017]](https://dl.acm.org/citation.cfm?doid=3105762.3105768), and I've written about [learning this on the blog before](https://blog.yiningkarlli.com/2018/10/bidirectional-mipmap.html).
I think this project is a great example of both learning from previous attempts at the same general problem domain, but also avoiding the second-system effect; what we have today is really fast, really robust, and given how hard texture streaming generally is as a problem domain, I think Mark and Nathan did an impressive job in keeping the actual implementation compact, elegant, and easy to work with.

Of course we need to acknowledge that there have in fact been previous attempts at implementing Ptex on the GPU, with varying degrees of success.
[McDonald & Burley [2011]](https://doi.org/10.1145/2037826.2037840) was the first demonstrated implementation of Ptex on the GPU, but required a preprocessing step and had to deal with various complications imposed by using OpenGL/DirectX hardware texturing; this early implementation also didn't support texture streaming.
Our implementation is built primarily in CUDA and bypasses all of the traditional graphics API stuff for texturing; we deal with the per-face textures at the raw memory block level, which allows us to have zero preprocessing steps and have robust fast streaming from the CPU to the GPU.
[Kim et al. [2011]](https://doi.org/10.1145/2077378.2077417)'s solution was to pack all of the individual per-face textures into a single giant atlased texture; back when I worked on [Pixar's Optix-based preview path tracer (called RTP)](https://blog.yiningkarlli.com/2013/07/pixar-optix-lighting-preview-demo.html) this essentially was the solution that we used.
However, this solution faces major problems with MIP mapping, since faces that are next to each other in the atlas but non-adjacent in the mesh topology can bleed into each other while filtering to generate each level in the MIP chain for the single giant atlas.
By streaming the original per-face textures to the GPU and using exactly the same data as what's in the CPU Ptex implementation, we avoid all of the issues with atlasing.

An interesting thing that I think our system demonstrates is that some of the preexisting assumptions about Ptex that float around in the wider industry aren't necessarily true.
For some time now there's been an assumption that Ptex cannot be fast for incoherent access; while it is true that Hyperion gains performance advantages from coherent shading [[Eisenacher et al. 2013]](https://doi.org/10.1111/cgf.12158) and therefore coherent Ptex reads, I don't think this is really a property of Ptex itself (as hinted at by [PBRT's integration of Ptex](https://pharr.org/matt/blog/2018/07/16/moana-island-pbrt-5)).
One notable thing about our interactive GPU path tracing use case is that the Ptex access pattern is totally incoherent for secondary bounces- we use depth-first integrators in our previz path tracer.
The demo video we included with the talk doesn't really show this since in the demo video we just show a headlight-shaded view for the sake of clearly illustrating the texture streaming behavior, but in actual production usage our texture streaming system serves multi-bounce depth-first path tracing at interactive rates without a problem.

A final note on the demo video- unfortunately I had to capture the demo video over remote desktop at the time, so there are a few frame hitches and stalls in the video.
Those hitches and stalls come entirely from recording over remote desktop, not from the texture streaming system; in Nathan's presentation, we have some better demo videos that were recorded via direct video capture off of HDMI, and in those videos there are zero frame drops or stalls even when we force-evict the entire contents of the on-GPU texture cache.

I want to thank both the Hyperion development and Interactive Visualization development teams at Disney Animation for supporting this project, and of course we thank Brent Burley and Daniel Teece for their feedback and assistance with various Ptex topics.
Finally, thanks again to Mark and Nathan for being such great collaborators.
I've had the pleasure of working closely with Mark on a number of super cool projects over the years and I've learned vast amounts from him.
Nathan and I go back a very long way; we first met in school and we've been friends for around 15 years now, but this was the first time we've actually gotten to do a talk together, which was great fun!

That's all of my personal notes for this talk.
If this is interesting to you, please go check out the paper and catch the presentation either live at the conference or recorded afterwards!

**References**

Frederick P. Brooks, Jr. 1975. [_The Mythical Man-Month: Essays on Software Engineering_](https://www.cs.unc.edu/~brooks/), 1st ed. Addison-Wesley.

Brent Burley and Dylan Lacewell. 2008. [Ptex: Per-face Texture Mapping for Production Rendering](https://doi.org/10.1111/j.1467-8659.2008.01253.x). _Computer Graphics Forum (Proc. of Eurographics Symposium on Rendering)_ 27, 4 (Jun. 2008), 1155-1164.

Brent Burley, David Adler, Matt Jen-Yuan Chiang, Hank Driskill, Ralf Habel, Patrick Kelly, Peter Kutz, Yining Karl Li, and Daniel Teece. 2018. [The Design and Evolution of Disney's Hyperion Renderer](https://dl.acm.org/citation.cfm?id=3182159). _ACM Transactions on Graphics_. 37, 3 (2018), Article 33.

Christian Eisenacher, Gregory Nichols, Andrew Selle, and Brent Burley. 2013. [Sorted Deferred Shading for Production Path Tracing](https://doi.org/10.1111/cgf.12158). _Computer Graphics Forum (Proc. of Eurographics Symposium on Rendering)_ 32, 4 (Jul. 2013), 125-132.

Ulfar Erlingsson, Mark Manasse, and Frank Mcsherry. 2006. [A Cool and Practical Alternative to Traditional Hash Tables](https://www.researchgate.net/publication/248589354_A_cool_and_practical_alternative_to_traditional_hash_tables). Microsoft Research Tech Report.

Sujeong Kim, Karl Hillesland, and Justin Hensley. 2011. [A Space-efficient and Hardware-friendly Implementation of Ptex](https://doi.org/10.1145/2077378.2077417). In _ACM SIGGRAPH Asia 2011 Sketches_. Article 31.

Mark Lee, Brian Green, Feng Xie, and Eric Tabellion. 2017. [Vectorized Production Path Tracing](https://dl.acm.org/citation.cfm?doid=3105762.3105768). In _Proc. of High Performance Graphics (HPG 2017)_. Article 10.

John McDonald and Brent Burley. 2011. [Per-Face Texture Mapping for Real-time Rendering](https://doi.org/10.1145/2037826.2037840). In _ACM SIGGRAPH 2011 Talks_. Article 10.
