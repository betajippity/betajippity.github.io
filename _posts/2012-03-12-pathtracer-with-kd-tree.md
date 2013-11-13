---
layout: post
title: Pathtracer with KD-Tree
tags: [Coding, Pathtracer, Raytracer]
author: Yining Karl Li
---

I have finished my KD-Tree rewrite! My new KD-Tree implements the Surface-Area Heuristic for finding optimal splitting planes, and stops splitting once a node has either reached a certain sufficiently small surface area, or has a sufficiently small number of elements contained within itself. Basically, very standard KD-Tree stuff, but this time, properly implemented. As a result, I can now render meshes much quicker than before.

Here's a cow in a Cornell Box. Each iteration of the cow took about 3 minutes, which is a huge improvement over my old raytracer, but still leaves a lot of room for improvement:

[![](/content/images/2012/Mar/bovinetest.png)](/content/images/2012/Mar/bovinetest.png)

...and of course, the obligatory Stanford Dragon test. Each iteration took about 4 minutes for both of these images (the second one I let converge for a bit longer than the first one), and I made these renders a bit larger than the cow one:

[![](/content/images/2012/Mar/dragon2.png)](/content/images/2012/Mar/dragon2.png)

[![](/content/images/2012/Mar/dragon1.png)](/content/images/2012/Mar/dragon1.png)

So! Of course the KD-Tree could still use even more work, but for now it works well enough that I think I'm going to start focusing on other things, such as more interesting BSDFs and other performance enhancements.
