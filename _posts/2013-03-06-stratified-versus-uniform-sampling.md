---
layout: post
title: Stratified versus Uniform Sampling
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

As part of Takua Render's new pathtracing core, I've implemented a system allowing for multiple sampling methods instead of just uniform sampling. The first new sampling method I've added in addition to uniform sampling is stratified sampling. Basically, in stratified sampling, instead of spreading samples per iteration across the entire probability region, the probability region is first divided into a number of equal sized, non-overlapping subregions, and then for each iteration, a sample is drawn with uniform probability from within a single subregion, called a strata. The result of stratified sampling is that samples are guaranteed to be more evenly spread across the entire probability domain instead of clustered within a single area, resulting in less visible noise for the same number of samples compared to uniform sampling. At the same time, since stratified sampling still maintains a random distribution within each strata, the aliasing problems associated with a totally even sample distribution are still avoided.

Here's a video showing a scene rendered in Takua Render with uniform and then stratified sampling. The video also shows a side-by-side comparison in its last third.

<div class='embed-container'><iframe src='https://player.vimeo.com/video/61209575' frameborder='0'>Takua Render Sampler Methods Comparison</iframe></div>

In the renders in the above video, stratified sampling is being used to choose new ray directions from diffuse surface bounces; instead of choosing a random point over the entire cosine-weighted hemisphere at an intersection point, the renderer first chooses a strata with the same steradian as all other strata, and then chooses a random sample within that solid angle. The strata is chosen sequentially for primary bounces, and then chosen randomly for all secondary bounces to maintain unbiased sampling over the whole render. As a result of the sequential strata selection for primary bounces, images rendered in Takua Render will not converged to an unbiased solution until N iterations have elapsed, where N is the number of strata the probability region is divided into. The number of strata can be set by the user as a value in the scene description which is then squared to get the total strata number. So, if a user specifies a strata level of 16, then the probability region will be divided into 256 strata and a unbiased result will not be reached until 256 or more samples per pixel have been taken.

Here's the Lamborghini model from last post at 256 samples per pixel with stratified (256 strata) and uniform sampling, to demonstrate how much less perceptible noise there is with the stratified sampler. From a distance, the uniform sampler renders may seem slightly darker side by side due to the higher percentage of noise, but if you compare them using the lightbox, you can see that the lighting and brightness is the same.

[![Stratified sampling, 256 strata, 256 samples per pixel](/content/images/2013/Mar/lambo_strat.png)](/content/images/2013/Mar/lambo_strat.png)

[![Uniform sampling, 256 samples per pixel](/content/images/2013/Mar/uniform.png)](/content/images/2013/Mar/uniform.png)

...and up-close crops with 400% zoom:
 
[![Stratified sampling, 256 strata, 256 samples per pixel, 400% crop](/content/images/2013/Mar/lambo_strat_crop.png)](/content/images/2013/Mar/lambo_strat_crop.png)

[![Uniform sampling, 256 samples per pixel, 400% crop](/content/images/2013/Mar/uniform_zoom.png)](/content/images/2013/Mar/uniform_zoom.png)

At some point soon I will also be implementing Halton sequence sampling and \[0,2\]-sequence sampling, but for the time being, stratified sampling is already providing a huge visual boost over uniform! In fact, I have a small secret to confess: all of the renders in the last post were rendered with the stratified sampler!