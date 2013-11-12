---
layout: post
title: First Progress on New Pathtracing Core
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

I've started work on a completely new pathtracing core to replace the one used in Rev 2. The purpose of totally rewriting the entire pathtracing integrator and brdf systems is to produce something much more modular and robust; as much as possible, I am now decoupling brdf and new ray direction calculation from the actual pathtracing loop.

I'm still in the earliest stages of this rewrite, but I have some test images! Each of the following images was rendered out to somewhere around 25000 samples per pixel (a lot!), at about 5/6 samples per pixel per second. I let the renders run without a hard ending point and terminated them after I walked away for a while and came back, hence the inexact but enormous samples per pixel counts. Each scene was lit with my standard studio-styled lighting setup and in addition to the showcased model, uses a smooth backdrop that consists of about 10000 triangles.

Approximately 100000 face Stanford Dragon:

[![](/content/images/2013/Mar/dragon.png)](/content/images/2013/Mar/dragon.png)

Approximately 150000 face Deloreon model:

[![](/content/images/2013/Mar/deloreon.png)](/content/images/2013/Mar/deloreon.png)

Approximately 250000 face Lamborghini Aventador model:

[![](/content/images/2013/Mar/lambo_back.png)](/content/images/2013/Mar/lambo_back.png)

[![](/content/images/2013/Mar/lambo_front.png)](/content/images/2013/Mar/lambo_front.png)