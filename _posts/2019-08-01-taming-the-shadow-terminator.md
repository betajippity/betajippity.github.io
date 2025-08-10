---
layout: post
title: SIGGRAPH 2019 Talk- Taming the Shadow Terminator
tags: [Hyperion, Shading, SIGGRAPH]
author: Yining Karl Li
---

This year at SIGGRAPH 2019, Matt Jen-Yuan Chiang, Brent Burley, and I had a talk that presents a technique for smoothing out the harsh shadow terminator problem that often arises when high-frequency bump or normal mapping is used in ray tracing.
We developed this technique as part general development on [Disney's Hyperion Renderer](https://www.disneyanimation.com/technology/innovations/hyperion) for the production of Frozen 2.
This work is mostly Matt's; Matt was very kind in allowing me to help out and play a small role on this project.

This work is contemporaneous with the recent work on the same shadow terminator problem that was carried out and [published by Estevez et al. from Sony Pictures Imageworks](https://link.springer.com/chapter/10.1007/978-1-4842-4427-2_12) and published in [Ray Tracing Gems](https://www.realtimerendering.com/raytracinggems/).
We actually found out about the Estevez et al. technique at almost exactly the same time that we submitted our SIGGRAPH talk, which proved to be very fortunate, since after our talk was accepted, we were than able to update our short paper with additional comparisons between Estevez et al. and our technique.
I think this is a great example of how having multiple rendering teams in the field tackling similar problems and sharing results provides a huge benefit to the field as a whole- we now have two different, really good solutions to what used to be a big shading problem!

[![A higher-res version of Figure 1 from the paper: (left) \<a href="https://blog.yiningkarlli.com/content/images/2019/Aug/header_shadingnormals.png"\>shading normals\</a\> exhibiting the harsh shadow terminator problem, (center) \<a href="https://blog.yiningkarlli.com/content/images/2019/Aug/header_chiang.png"\>our technique\</a\>, and (right) \<a href="https://blog.yiningkarlli.com/content/images/2019/Aug/header_estevez.png"\>Estevez et al.'s technique\</a\>.]({{site.url}}/content/images/2019/Aug/preview/header.jpg)]({{site.url}}/content/images/2019/Aug/header.png)

Here is the paper abstract:

> A longstanding problem with the use of shading normals is the discontinuity introduced into the cosine falloff where part of the hemisphere around the shading normal falls below the geometric surface. Our solution is to add a geometrically derived shadowing function that adds minimal additional shadowing while falling smoothly to zero at the terminator. Our shadowing function is simple, robust, efficient and production proven.

The paper and related materials can be found at:

* [Project Page (Author’s Version and Presentation Slides)](https://www.yiningkarlli.com/projects/shadowterminator.html)
* [Official Print Version (ACM Library)](https://dl.acm.org/doi/10.1145/3306307.3328172)

Matt Chiang presented the paper at SIGGRAPH 2019 in Los Angeles as part of the "Lucy in the Sky with Diamonds - Processing Visuals" Talks session.
A pdf version of the presentation slides, along with presenter notes, are available on my project page for the paper.
I'd also recommend getting the author's version of the short paper instead of the official version as well, since the author's version includes some typo fixes made after the official version was published.

Work on this project started early in the production of Frozen 2, when our look artists started to develop the shading of the dresses and costumes in Frozen 2.
Because intricate woven fabrics and patterns are an important part of the Scandinavian culture that Frozen 2 is inspired by, the shading in Frozen 2 pushed high-resolution high-frequency displacing and normal mapping further than we ever had before with Hyperion in order to make convincing looking textiles.
Because of how high-frequency the normal mapping was pushed, the bump/normal mapped shadow terminator problem became worse and worse and proved to be a major pain point for our look and lighting artists.
In the past, our look and lighting artists have worked around shadow terminator issues using a combination of techniques, such as falling back to full displacement, or using larger area lights to try to soften the shadow terminator.
However, these techniques can be problematic when they are in conflict with art direction, and force artists to think about an additional technical dimension when they otherwise would rather be focused on the artistry.

Our search for a solution began with Peter Kutz looking at ["Microfacet-based Normal Mapping for Robust Monte Carlo Path Tracing" by Schüssler et al.](https://dl.acm.org/doi/10.1145/3130800.3130806), which focused on addressing energy loss when rendering shading normals.
The Schüssler et al. 2017 technique solved the energy loss problem by constructing a microfacet surface comprised of _two_ facets per shading point, instead the the usual one.
The secondary facet is used to account for things like inter-reflections between the primary and secondary facets.
However, the Schüssler et al. 2017 technique wound up not solving the shadow terminator problems we were facing; using their shadowing function produced a look that was too flat.

Matt Chiang then realized that the secondary microfacet approach could be used to solve the shadow terminator problem using a different secondary microfacet configuration; instead of using a vertical second facet as in Schüssler, Matt made the secondary facet perpendicular to the shading normal.
By making the secondary facet perpendicular, as a light source slowly moves towards the grazing angle relative to the microfacet surface, peak brightness is maintained when the light is parallel to the shading normal, while additional shadowing is introduced beyond the parallel angle.
This solution worked extremely well, and is the technique presented in our talk / short paper.

The final piece of the puzzle was addressing a visual discontinuity produced by Matt's technique when the light direction reaches and moves beyond the shading normal.
Instead of falling smoothly to zero, the shape of the shadow terminator undergoes a hard shift from a cosing fall-off formed by the dot product of the shading normal and light direction to a linear fall-off.
Matt and I played with a number of different interpolation schemes to smooth out this transition, and eventually settled on a custom smooth-step function.
During this process, I made the observation that whatever blending function we used needed to introduce C1 continuity in order to remove the visual discontinuity.
This observation led Brent Burley to realize that instead of a complex custom smooth-step function, a simple Hermite interpolation would be enough; this Hermite interpolation is the one presented in the talk / short paper.

For a much more in-depth view at all of the above, complete with diagrams and figures and examples, I highly recommend looking at Matt's presentation slides and presenter notes.

Here is a test render of the Iduna character's costume from Frozen 2, from before we had this technique implemented in Hyperion.
The harsh shadow terminator produces an illusion that makes her arms and torso look boxier than the actual underlying geometry is:

[![Iduna's costume without our shadow terminator technique. Note how boxy the arms and torso look.]({{site.url}}/content/images/2019/Aug/iduna_hardterminator.png)]({{site.url}}/content/images/2019/Aug/iduna_hardterminator.png)

...and here is the same test render, but now with our soft shadow terminator fix implemented and enabled.
Note how her arms and torso now look properly rounded, instead of boxy!


[![Iduna's costume with our shadow terminator technique. The arms and torso look correctly rounded now.]({{site.url}}/content/images/2019/Aug/iduna_softterminator.png)]({{site.url}}/content/images/2019/Aug/iduna_softterminator.png)

This technique is now enabled by default across the board in Hyperion, and any article of clothing or costume you see in Frozen 2 is using this technique.
So, through this project, we got to play a small role in making Elsa, Anna, Kristoff, and everyone else look like themselves!