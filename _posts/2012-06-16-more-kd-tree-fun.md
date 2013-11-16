---
layout: post
title: More KD-Tree Fun
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

Lately progress on my [Takua Render](http://www.yiningkarlli.com/projects/takuarender) project has slowed down a bit, since over this summer I am interning at [Dreamworks Animation](http://www.dreamworksanimation.com/) during weekdays. However, in the evenings and on weekends I am still been working at stuff!

Something that I never got around to doing for no particularly good reason was visualizing my KD-tree implementation. As such, I've known for a long time that my KD-tree is suboptimal, but have not actually been able to quickly determine to what degree my KD-tree is inefficient. However, since I now have a number of OpenGL based diagnostic views for Takua Render, I figured I no longer had a good excuse to not visualize my KD-tree. So last night I did just that! Here is what I got for the Stanford Dragon:

[![]({{site.url}}/content/images/2012/Jun/kd1.png)]({{site.url}}/content/images/2012/Jun/kd1.png)

Just as I suspected, my KD-tree implementation was far from perfect. Some rough statistics I had my renderer output told me that even with the KD-tree, the renderer was still performing hundreds to even thousands of intersection tests against meshes. The above image explains why: each of those KD-tree leaf nodes are enormous, and therefore contain an enormous amount of objects!

Fortunately, after a bit of tinkering, I discovered that there's nothing actually wrong with the KD-tree implementation itself. Instead, the sparseness of the tree is coming from how I tuned the tree building operation. With a bit of tinkering, I managed to get a fairly improved tree:

[![]({{site.url}}/content/images/2012/Jun/kd2.png)]({{site.url}}/content/images/2012/Jun/kd2.png)

...and with a bit more of tuning and playing with maximum recursion depths:

[![]({{site.url}}/content/images/2012/Jun/kd3.png)]({{site.url}}/content/images/2012/Jun/kd3.png)

Previously, my KD-tree construction routine based the construction on only a maximum recursion depth; after the tree reached a certain height, the construction would stop. I've now modified the construction routine to use three separate criteria: a maximum recursion depth, minimum node bounding box volume, and a minimum number of objects per node. If any node meets any of the above three conditions, it is turned into a leaf node. As a result, I can now get extremely dense KD-trees that only have on average a low-single-digit number of objects per leaf node, as opposed to the average hundreds of objects per leaf node before:

[![]({{site.url}}/content/images/2012/Jun/kd4.png)]({{site.url}}/content/images/2012/Jun/kd4.png)

In theory, this improvement should allow for a fairly significant speedup, since the number of intersections per mesh should now be dramatically lower, leading to much higher ray throughput! I'm currently running some benchmarks to determine just how much of a performance boost better KD-trees will give me, and I'll post about those results soon!
