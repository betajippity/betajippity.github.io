---
layout: post
title: Blurred Glossy Reflections
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

[![](/content/images/2012/Dec/glossy_glossy_test.png)](/content/images/2012/Dec/glossy_glossy_test.png)

Over the past few months I haven't been making as much progress on my renderer as I would have liked, mainly because another major project has been occupying most of my attention: TAing/restructuring the [GPU Programming](http://cis565-fall-2012.github.com/) course here at Penn. I'll probably write a post at the end of the semester with detailed thoughts and comments about that later. More on that later!

I recently had a bit of extra time, which I used to tackle a piece of super low hanging fruit: blurred glossy reflections. The simplest brute force approach blurred glossy reflections is to take the reflected ray direction from specular reflection, construct a lobe around that ray, and sample across the lobe instead of only along the reflected direction. The wider the lobe, the blurrier the glossy reflection gets. The following diagram, borrowed from Wikipedia, illustrates this property:

[![](/content/images/2012/Dec/glossylobe.png)](/content/images/2012/Dec/glossylobe.png)

In a normal raytracer or rasterization based renderer, blurred glossy reflections require something of a compromise between speed and visual quality (much like many other effects!), since using a large number of samples within the glossy specular lobe to achieve a high quality reflection can be prohibitively expensive. This cost-quality tradeoff is therefore similar to the tradeoffs that must be made in any distributed raytracing effect. However, in a pathtracer, we're already using a massive number of samples, so we can fold the blurred glossy reflection work into our existing high sample count. In a GPU renderer, we have massive amounts of compute as well, making blurred glossy reflections far more tractable than in a traditional system.

The image at the top of this post shows three spheres of varying gloss amounts in a modified Cornell box with a glossy floor and reflective colored walls, rendered entirely inside of Takua-RT. Glossy to glossy light transport is an especially inefficient scenario to resolve in pathtracing, but throwing brute force GPU compute at it allows for arriving at a good solution reasonably quickly: the above image took around a minute to render at 800x800 resolution. Here is another test of blurred glossy reflections, this time in a standard diffuse Cornell box:

[![](/content/images/2012/Dec/glossytest_1.png)](/content/images/2012/Dec/glossytest_1.png)

...and some tests showing varying degrees of gloss, within a modified Cornell box with glossy left and right walls. Needless to say, all of these images were also rendered entirely inside of Takua-RT.

[![Full specular reflection](/content/images/2012/Dec/glossytest_4.png)](/content/images/2012/Dec/glossytest_4.png)

[![Approximately 10% blurred glossy reflection](/content/images/2012/Dec/glossytest_3.png)](/content/images/2012/Dec/glossytest_3.png)

[![Approximately 30% blurred glossy reflection](/content/images/2012/Dec/glossytest_2.png)](/content/images/2012/Dec/glossytest_2.png)

Finally, here's another version of the first image in this post, but with the camera in the wrong place. You can see a bit of the stand-in sky I have right now. I'm working on a sun & sky system right now, but since its not ready yet, I have a simple gradient serving as a stand-in right now. I'll post more about sun & sky when I'm closer to finishing with it... I'm not doing anything [fancy like Peter Kutz is doing](http://skyrenderer.blogspot.com/) (his sky renderer blog is definitely worth checking out, by the way), just standard Preetham et. al. style.

[![](/content/images/2012/Dec/glossy_glossy_sky.png)](/content/images/2012/Dec/glossy_glossy_sky.png)
