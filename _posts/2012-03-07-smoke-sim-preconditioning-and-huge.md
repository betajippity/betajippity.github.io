---
layout: post
title: Smoke Sim&#58 Preconditioning and Huge Grids
tags: [CIS563, Coding, Fluid Simulation]
author: Yining Karl Li
---

I have added preconditioning to my [smoke simulator](http://yiningkarlli.blogspot.com/2012/03/smoke-simulation-basics.html)! For the preconditioner, I am using [Incomplete Cholesky](http://en.wikipedia.org/wiki/Incomplete_Cholesky_factorization), which is the preconditioner recommended in chapter 4 of the [Bridson Fluid Course Notes](http://www.cs.ubc.ca/~rbridson/fluidsimulation/fluids_notes.pdf). I've also troubleshooted by vorticity implementation, so the simulation should produce more interesting/stable vortices now.

The key reason for implementing the preconditioner is simple: speed. With a faster convergence comes an added bonus: being able to do larger grids due to less time required per solve. Because of that speed increase, I can now run my simulations on 3D grids.

In previous years, the CIS563 smoke simulator framework usually hit a performance cliff at grids beyond around 50x50x50, but last year [Peter Kutz](http://peterkutz.com/) managed to push his smoke simulator to 90x90x36 by implementing a sparse A-Matrix structure, as opposed to storing every single data point, including empty ones, for the grid. This year's smoke simulation framework was updated to include some of Peter's improvements, and so Joe reckons that we should be able to push our smoke simulation grids pretty far. I've been scaling up starting from 10x10x10, and now I'm at 100x100x50:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/38057955' frameborder='0'>Smoke Simulator 100x100x50 Test</iframe></div>

This simulation took about 24 hours to run on a 2008 MacBook Pro with a 2.8 Ghz Core 2 Duo, but that is actually pretty good for fluid simulation! According to my rather un-scientific estimates, the simulation would take about 4 or 5 days without the preconditioner, and even longer without the sparse A-Matrix. I bet I can still push this further, and I'm starting to think about multithreading the simulation with [OpenMP](http://openmp.org/wp/) to get even more performance and even larger grids. We shall see.

One more thing: rendering this thing. So far I have not been doing any fancy rendering, just using the default OpenGL render that our framework came with. However, I want to get this into my [volumetric renderer](http://yiningkarlli.blogspot.com/2011/10/volumetric-renderer-for-rendering.html) at some point and maybe even try out the pseudo-black body stuff with it. Eventually I want to try rendering this out with my pathtracer too!
