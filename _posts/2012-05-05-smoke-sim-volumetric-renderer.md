---
layout: post
title: Smoke Sim + Volumetric Renderer
tags: [CIS560, CIS563, Coding, Fluid Simulation]
author: Yining Karl Li
date: 2012-05-05 01:00:00
---

Something I've had on my list of things to do for a few weeks now is mashing up my [volumetric renderer](http://yiningkarlli.blogspot.com/2011/10/volumetric-renderer-for-rendering.html) from CIS460 with my [smoke simulator](http://yiningkarlli.blogspot.com/2012/03/smoke-sim-preconditioning-and-huge.html) from CIS563.

Now I can cross that off of my list! Here is a 100x100x100 grid smoke simulation rendered out with pseudo Monte-Carlo black body lighting (described in my volumetric renderer post):

<div class='embed-container'><iframe src='https://player.vimeo.com/video/41543438' frameborder='0'>Smoke Simulator Pseudo-Blackbody Test</iframe></div>

The actual approach I took to integrating the two was to simply pipeline them instead of actually merging the codebases. I added a small extension to the smoke simulator that lets it output the smoke grid to the same voxel file format that the volumetric renderer reads in, and then wrote a small Python script that just iterates over all voxel files in a folder and calls the volumetric renderer over and over again.

I'm actually not entirely happy with the render... I don't think I picked very good settings for the pseudo-black body, so a lot of the render is overexposed and too bright. I'll probably tinker with that some later and re-render the whole thing, but before I do that I want to move the volumetric renderer onto the GPU with CUDA. Even with multithreading via OpenMP, the rendertimes per frame are still too high for my liking... Anyway, here are some stills!
 
[![](/content/images/2012/May/smoke_vr1.png)](/content/images/2012/May/smoke_vr1.png)

[![](/content/images/2012/May/smoke_vr2.png)](/content/images/2012/May/smoke_vr2.png)
