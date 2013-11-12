---
layout: post
title: Short-stack KD-Tree Traversal
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

In my last post, I talked about implementing history flag based kd-tree traversal. While the history flag based stackless traverse worked perfectly fine in terms of traversing the tree and finding the nearest intersection, I discovered over the past week that its performance is... less than thrilling. Unfortunately, the history flag system results in a huge amount of redundant node visits, since the entire system is state based and therefore necessarily needs to visit every node in a branch of the tree both to move down and up the branch.

So instead, I decided to try out a short-stack based approach. My initial concern with short-stack based approaches was the daunting memory requirements that keeping a short stack for a few hundred threads, however, I realized that realistically, a short stack never needs to be any larger than the maximum depth of the kd-tree being traversed. Since I haven't yet had a need to test a tree with a depth beyond 100, the memory usage required for keeping short stacks is reasonably predictable and manageable; as a precaution, however, I've also decided to allow for the system to fall back to a stackless traverse in the case that a tree's depth causes short stack memory usage to become unreasonable.

The actual short-stack traverse I'm using is a fairly standard while-while traverse based on the [2008 Kun Zhou realtime kd-tree paper](http://kunzhou.net/2008/kdtree.pdf) and the [2007 Daniel Horn GPU kd-tree paper](http://graphics.stanford.edu/papers/i3dkdtree/). I've added one small addition though: in addition to keeping a short stack for traversing the kd-tree, I've also added an optional second short stack that tracks the last N intersection test objects. The reason for keeping this second short stack is that kd-trees allow for objects to be split across multiple nodes; by tracking which objects we have already encountered, we can safely detect and skip objects that have already been tested. The object tracking short stack is meant to be rather small (say, no more than 10 to 15 objects at a time), and simply loops back and overwrites the oldest values in the stack when it overflows.

The new while-while traversal is significantly faster than the history flag approach, to the order of a 10x or better performance increase in some cases.

In order to validate that the entire kd traversal system works, I did a quick and dirty port of the old Rev 2 pathtracing integrator to run on top of the new Rev 3 framework. The following test images contain about 20000 faces and objects, and clocked in at about 6 samples per pixel per second with a tree depth of 15. Each image was rendered to 1024 samples per pixel:

[![](/content/images/2013/Mar/greencow.png)](/content/images/2013/Mar/greencow.png)

[![](/content/images/2013/Mar/glasscow.png)](/content/images/2013/Mar/glasscow.png)

I also attempted to render these images without any kd-tree acceleration as a control. Without kd-tree acceleration, each sample per pixel took upwards of 5 seconds, and I wound up terminating the renders before they got even close to completion.

The use of my old Rev 2 pathtracing core is purely temporary, however. The next task I'll be tackling is a total rewrite of the entire pathtracing system and associated lighting and brdf evaluation systems. Previously, this systems have basically been monolithic blocks of code, but with this rewrite, I want to create a more modular, robust system that can recycle as much code as possible between GPU and CPU implementations, the GL debugger, and eventually other integration methods, such as photon mapping.