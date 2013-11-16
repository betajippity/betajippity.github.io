---
layout: post
title: Stackless KD-Tree Traversal
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

I have a working, reasonably optimized, speedy GPU stackless kd-tree traversal implementation! Over the past few days, I implemented the history flag-esque approach I outlined in [this post](http://blog.yiningkarlli.com/2012/09/thoughts-on-stackless-kd-tree-traversal.html), and it works quite well!

The following image is a heatmap of a kd-tree built for the Stanford Dragon, showing the cost of tracing a ray through each pixel in the image. Brighter values mean more node traversals and intersection tests had to be done for that particular ray. The image was rendered entirely using Takua Render's CUDA pathtracing engine, and took roughly 100 milliseconds to complete:

[![]({{site.url}}/content/images/2013/Feb/dragon.png)]({{site.url}}/content/images/2013/Feb/dragon.png)

...and a similar heatmap, this time generated for a scene containing two mesh cows, two mesh helixes, and some cubes and spheres in a box:

[![]({{site.url}}/content/images/2013/Feb/cow.png)]({{site.url}}/content/images/2013/Feb/cow.png)

Although room for even further optimization still exists, as it always does, I am quite happy with the results so far. My new kd-tree construction system and stackless traversal system are both several orders of magnitude faster and more efficient than my older attempts.

Here's a bit of a cool image: in my OpenGL debugging view, I can now follow the kd-tree traversal for a single ray at a time and visualize the exact path and nodes encountered. This tool has been extremely useful for optimizing... without a visual debugging tool, no wonder my previous implementations had so many problems! The scene here is the same cow/helix scene, but rotated 90 degrees. The bluish green line coming in from the left is the ray, and the green boxes outline the nodes of the kd-tree that traversal had to check to get the correct intersection.

[![]({{site.url}}/content/images/2013/Feb/kdboxes_notree.png)]({{site.url}}/content/images/2013/Feb/kdboxes_notree.png)

...and here's the same image as above, but with all nodes that were skipped drawn in red. As you can see, the system is now efficient enough to cull the vast vast majority of the scene for each ray:

[![]({{site.url}}/content/images/2013/Feb/kdboxes_yestree.png)]({{site.url}}/content/images/2013/Feb/kdboxes_yestree.png)

The size of the nodes relative to the density of the geometry in their vicinity also speaks towards the efficiency of the new kd-tree construction system: empty spaces are quickly skipped through with enormous bounding boxes, whereas high density areas have much smaller bounding boxes to allow for efficient culling.

Over the next day or so, I fully expect I'll be able to reintegrate the actual pathtracing core, and have some nice images! Since the part of Takua that needed rewriting the most was the underlying scene and kd-tree system, I will be able to reuse a lot of the BRDF/emittance/etc. stuff from Takua Rev 2.
