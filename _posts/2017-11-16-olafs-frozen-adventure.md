---
layout: post
title: Olaf's Frozen Adventure
tags: [Films]
author: Yining Karl Li
---

After an amazing 2016, [Walt Disney Animation Studios](http://www.disneyanimation.com/) is having a bit of a break year this year.
Disney Animation doesn't have a feature film this year; instead, we made a half-hour featurette called [Olaf's Frozen Adventure](https://www.disneyanimation.com/projects/olafsfrozenadventure), which will be released in front of Pixar's [Coco](https://www.pixar.com/feature-films/coco#coco-main) during Thanksgiving.
I think this is the first time a Disney Animation short/featurette has accompanied a Pixar film.
Olaf's Frozen Adventure is a fun little holiday story set in the world of Frozen, and I had the privilege of getting to play a small role in making Olaf's Frozen Adventure!
I got an official credit as part of a handful of engineers that did some specific, interesting technology development for Olaf's Frozen Adventure.

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_01.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_01.png)

Olaf's Frozen Adventure is really really funny; because Olaf is the main character, the entire story takes on much more of a self-aware, at times somewhat absurdist tone.
The featurette also has a bunch of new songs- there are six new songs in total, which is somehow pretty close to the original film's count of eight songs, but in a third of the runtime.
Olaf's Frozen Adventure was originally announced as a TV special, but the wider Walt Disney Company was so happy with the result that they decided to give Olaf's Frozen Adventure a theatrical release instead!

Something I personally find fascinating about Olaf's Frozen Adventure is comparing it visually with the original Frozen.
Olaf's Frozen Adventure is rendered entirely with Disney's [Hyperion Renderer](http://www.disneyanimation.com/technology/innovations/hyperion), compared with Frozen, which was rendered using pre-RIS Renderman.
While both films used our Disney BRDF [[Burley 2012]](https://doi.org/10.1145/2343483.2343493) and Ptex [[Burley and Lacewell 2008]](https://doi.org/10.1111/j.1467-8659.2008.01253.x), Olaf's Frozen Adventure benefits from all of the improvements and advancements that have been made during Big Hero 6, Zootopia, and Moana.
The original Frozen used dipole subsurface scattering, radiosity caching, and generally had fairly low geometric complexity relative to Hyperion-era films.
In comparison, Olaf's Frozen Adventure uses brute force subsurface scattering, uses path-traced global illumination, uses the full Disney BSDF (which is significantly extended from the Disney BRDF) [[Burley 2015]](https://doi.org/10.1145/2776880.2787670), uses our advanced fur/hair shader developed during Zootopia [[Chiang et al. 2016]](https://doi.org/10.1111/cgf.12830), and has much greater geometric complexity.
A great example of the greater geometric complexity is the knitted scarf sequence [[Staub et al. 2018]](https://doi.org/10.1145/3214745.3214817), where 2D animation was brought into Hyperion as a texture map to drive the colors on a knitted scarf that was modeled and rendered down to the fiber level.
Some shots even utilize an extended version of the photon mapped caustics we developed during Moana; the photon mapped caustics system on Moana only supported distant lights as a photon source, but for Olaf's Frozen Adventure, the photon mapping system was extended to support all of Hyperion's existing light types as photon sources.
These extensions to our photon mapping system is one of the things I worked on for Olaf's Frozen Adventure, and was used for lighting the ice crystal tree that Elsa creates at the end of the film.
Even the water in Arendelle Harbor looks way better than in Frozen, since the FX artists were able to make use of the incredible water systems developed for Moana [[Palmer et al. 2017]](https://doi.org/10.1145/3084363.3085067).
Many of these advancements are discussed in our SIGGRAPH 2017 Course Notes [[Burley et al. 2017]](http://www.yiningkarlli.com/projects/ptcourse2017.html).

One of the huge advantages to working on an in-house production rendering team in a vertically integrated studio is being able to collaborate and partner closely with productions on executing long-term technical visions.
Because of the show leadership's confidence in our long-term development efforts targeted at later shows, the artists on Olaf's Frozen Adventure were willing to take on and try out early versions of a number of new features in Hyperion that were originally targeted at later shows.
Some of these "preview" features wound up making a big difference on Olaf's Frozen Adventure, and lessons learned on Olaf's Frozen Adventure were instrumental in making these features much more robust and complete on Ralph Breaks the Internet.

One major feature was brute force path-traced subsurface scattering; Peter Kutz, Matt Chiang, and Brent Burley had originally started development during Moana's production on brute force path-traced subsurface scattering [[Chiang 2016]](https://doi.org/10.1145/2897839.2927433) as a replacement for Hyperion's existing normalized diffusion based subsurface scattering [[Burley 2015]](https://doi.org/10.1145/2776880.2787670).
This feature wasn't completed in time for use on Moana (although some initial testing was done using Moana assets), but was far enough along by Olaf's Frozen Adventure was in production that artists started to experiment with it.
If I remember correctly, the characters in Olaf's Frozen Adventure are still using normalized diffusion, but path-traced subsurface wound up finding extensive use in rendering all of the snow in the show, since the additional detail that path-traced subsurface brings out helped highlight the small granular details in the snow.
A lot of lessons learned from using path-traced subsurface scattering on the snow were then applied to making path-traced subsurface scattering more robust and easier to use and control.
These experiences gave us the confidence to go ahead with full-scale deployment on Ralph Breaks the Internet, which uses path-traced subsurface scattering for everything including characters.

Another major development effort that found experimental use on Olaf's Frozen Adventure were some large overhauls to Hyperion's ray traversal system.
During the production of Moana, we started running into problems with how large instance groups are structured in Hyperion.
Moana's island environments featured vast quantities of instanced vegetation geometry, and because of how the instancing was authored, Hyperion's old strategy for grouping instances in the top-level BVH wound up producing heavily overlapping BVH leaves, which in extreme cases could severely degrade traversal performance.
On Moana, the solution to this problem was to change how instances were authored upstream in the pipeline, but the way that the renderer wanted instances organized was fairly different from how artists and our pipeline like to think about instances, which made authoring more difficult.
This problem motivated Peter Kutz and I to develop a new traversal system that would be less sensitive to how instance groups were authored; the system we came up with allows Hyperion to internally break up top-level BVH nodes with large overlapping bounds into smaller, tighter subbounds based on the topology of the lower-level BVHs.
It turns out this system is conceptually essentially identical to BVH rebraiding [[Benthin et al. 2017]](https://doi.org/10.1145/3105762.3105776), but we developed and deployed this system independently before Benthin 2017 was published.
As part of this effort, we also wound up revisiting Hyperion's original cone-based packet traversal strategy [[Eisenacher et al. 2013]](https://doi.org/10.1111/cgf.12158) and, motivated by extensive testing and statistical performance analysis, developed a new, simpler, higher performance multithreading strategy for handling Hyperion's ultra-wide batched ray traversal.
Olaf's Frozen Adventure has a sequence where Olaf and Sven are being pulled down a mountainside through a forest by a burning sled; the enormous scale of the groundplane and large quantities of instanced trees proved to be challenging for Hyperion's old traversal system.
We were able to partner with the artists to deploy a mid-development prototype of our new traversal system on this sequence, and were able to cut traversal times by up to close to an order of magnitude in some cases.
As a result, the artists were able to render this sequence with reasonable render times, and we were able to field-test the new traversal system prior to studio-wide deployment and iron out various kinks that were found along the way.

The last major mid-development Hyperion feature that saw early experimental use on Olaf's Frozen Adventure was our new, next-generation spectral and decomposition tracking [[Kutz et al. 2017]](https://doi.org/10.1145/3072959.3073665) based null-collision volume rendering system, which was written with the intention of eventually completely replacing Hyperion's existing residual ratio tracking [[Novák 2014]](https://doi.org/10.1145/2661229.2661292) based volume rendering system [[Fong 2017]](https://doi.org/10.1145/3084873.3084907).
Artists on Olaf's Frozen Adventure ran into some difficulties with rendering loose, fluffy white snow, where the bright white appearance is the result of high-order scattering requiring large numbers of bounces.
We realized that this problem is essentially identical to the problem of rendering white puffy clouds, which also have an appearance dominated by energy from high-order scattering.
Since null-collision volume integration is specifically very efficient at handling high-order scattering, we gave the artists an early prototype version of Hyperion's new volume rendering system to experiment with rendering loose fluffy snow as a volume.
The initial results looked great; I'm not sure if this approach wound up being used in the final film, but this experiment gave both us and the artists a lot of confidence in the new volume rendering system and provided valuable feedback.

As usual with Disney Animation projects I get to work on, here are some stills in no particular order, from the film.
Even though Olaf's Frozen Adventure was originally meant for TV, the whole studio still put the same level of effort into it that goes into full theatrical features, and I think it shows!

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_02.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_02.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_03.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_03.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_04.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_04.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_05.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_05.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_06.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_06.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_07.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_07.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_08.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_08.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_09.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_09.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_10.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_10.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_11.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_11.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_12.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_12.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_13.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_13.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_14.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_14.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_15.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_15.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_17.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_17.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_18.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_18.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_19.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_19.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_20.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_20.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_22.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_22.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_23.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_23.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_26.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_26.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_24.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_24.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_25.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_25.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_21.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_21.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_27.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_27.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_16.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_16.png)

Here is a credits frame with my name! I wasn't actually expecting to get a credit on Olaf's Frozen Adventure, but because I had spent a lot of time supporting the show and working with artists on deploying experimental Hyperion features to solve particularly difficult shots, the show decided to give me a credit! I was very pleasantly surprised by that; my teammate Matt Chiang got a credit as well for similar reasons.

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_credits.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_credits.png)

All images in this post are courtesy of and the property of Walt Disney Animation Studios.

## References

Carsten Benthin, Sven Woop, Ingo Wald, and Attila T. Áfra. 2017. [Improved Two-Level BVHs using Partial Re-Braiding](https://doi.org/10.1145/3105762.3105776). In _Proc. of High Performance Graphics (HPG 2017)_. Article 7.

Brent Burley. [Physically Based Shading at Disney](https://doi.org/10.1145/2343483.2343493). 2012. In _ACM SIGGRAPH 2012 Course Notes: [Practical Physically-Based Shading in Film and Game Production](https://blog.selfshadow.com/publications/s2012-shading-course/)_.

Brent Burley. [Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering](https://doi.org/10.1145/2776880.2787670). 2015. In _ACM SIGGRAPH 2015 Course Notes: [Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2015-shading-course)_.

Brent Burley, David Adler, Matt Jen-Yuan Chiang, Ralf Habel, Patrick Kelly, Peter Kutz, Yining Karl Li, and Daniel Teece. 2017. [Recent Advances in Disney's Hyperion Renderer](https://www.yiningkarlli.com/projects/ptcourse2017.html). In _ACM SIGGRAPH 2017 Course Notes: [Path Tracing in Production Part 1](http://dx.doi.org/10.1145/3084873.3084904)_

Brent Burley and Dylan Lacewell. 2008. [Ptex: Per-face Texture Mapping for Production Rendering](https://doi.org/10.1111/j.1467-8659.2008.01253.x). _Computer Graphics Forum (Proc. of Eurographics Symposium on Rendering)_ 27, 4 (Jun. 2008), 1155-1164.

Matt Jen-Yuan Chiang, Benedikt Bitterli, Chuck Tappan, and Brent Burley. 2016. [A Practical and Controllable Hair and Fur Model for Production Path Tracing](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12830). _Computer Graphics Forum (Proc. of Eurographics)_ 35, 2 (May 2016), 275-283.

Matt Jen-Yuan Chiang, Peter Kutz, and Brent Burley. 2016. [Practical and Controllable Subsurface Scattering for Production Path Tracing](https://doi.org/10.1145/2897839.2927433). In _ACM SIGGRAPH 2016 Talks_. Article 49.

Christian Eisenacher, Gregory Nichols, Andrew Selle, and Brent Burley. 2013. [Sorted Deferred Shading for Production Path Tracing](https://doi.org/10.1111/cgf.12158). _Computer Graphics Forum (Proc. of Eurographics Symposium on Rendering)_ 32, 4 (Jul. 2013), 125-132.

Julian Fong, Magnus Wrenninge, Christopher Kulla, and Ralf Habel. 2017. [Production Volume Rendering](https://doi.org/10.1145/3084873.3084907). In _ACM SIGGRAPH 2017 Courses_. Article 2.

Peter Kutz, Ralf Habel, Yining Karl Li, and Jan Novák. 2017. [Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes](https://doi.org/10.1145/3072959.3073665). _ACM Transactions on Graphics (Proc. of SIGGRAPH)_ 36, 4 (Aug. 2017), Article 111.

Jan Novák, Andrew Selle and Wojciech Jarosz. 2014. [Residual Ratio Tracking for Estimating Attenuation in Participating Media](https://dl.acm.org/citation.cfm?id=2661292). _ACM Transactions on Graphics (Proc. of SIGGRAPH Asia)_ 33, 6 (Nov. 2014), Article 179.

Sean Palmer, Jonathan Garcia, Sara Drakeley, Patrick Kelly, and Ralf Habel. 2017. [The Ocean and Water Pipeline of Disney’s Moana](https://doi.org/10.1145/3084363.3085067). In _ACM SIGGRAPH 2017 Talks_. Article 29.

Josh Staub, Alessandro Jacomini, Dan Lund. 2018. [The Handiwork Behind "Olaf's Frozen Adventure"](https://doi.org/10.1145/3214745.3214817). In _ACM SIGGRAPH 2018 Talks_. Article 26.
