---
layout: post
title: First Pathtraced Image!
tags: [Coding, Pathtracer, Raytracer]
author: Yining Karl Li
---

Behold, the very first image produced using my pathtracer!

[![](/content/images/2012/Mar/frame_3.png)](/content/images/2012/Mar/frame_3.png)

Granted, the actual image is not terribly interesting- just a cube inside of a standard [Cornell box](http://en.wikipedia.org/wiki/Cornell_Box) type setup, but it was rendered entirely using my own pathtracer! Aside from being converted from a BMP file to a PNG, this render has not been modified in any way whatsoever outside of my renderer (I have yet to name it). This render is the result of a thousand iterations. Here are some comparisons of the variance in the render at various iteration levels (click through to the full size versions to get an actual sense of the variance levels):

[![Upper Left: 1 iteration. Upper Right: 5 iterations. Lower Left: 10 iterations. Lower Right: 15 iterations.](/content/images/2012/Mar/pass0-15.png)](/content/images/2012/Mar/pass0-15.png)

[![Upper Left: 1 iteration. Upper Right: 250 iterations. Lower Left: 500 iterations. Lower Right: 750 iterations.](/content/images/2012/Mar/pass0-750.png)](/content/images/2012/Mar/pass0-750.png)

Each iteration took about 15 seconds to finish.

Unfortunately, I have not been able to move as quickly with this project as I would like, due to other schoolwork and TAing for CIS277. Nonetheless, here's where I am right now:

Currently the renderer is in a very very basic primitive state. Instead of extending my raytracer, I've opted for a completely from scratch start. The only piece of code brought over from the raytracer was the OBJ mesh system I wrote, since that was written to be fairly modular anyway. Right now my pathtracer works entirely through indirect lighting and only supports diffuse surfaces... like I said, very basic! Adding direct lighting should speed up render convergence, especially for scenes with small light sources. Also, right now the pathtracer only uses single direction pathtracing from the camera into the scene... adding bidirectional pathtracing should lead to another performance boost.

I'm still working on rewriting my KD-tree system, that should be finished within the next few days.  

Something that is fairly high on my list of things to do right now is redesign the architecture for my renderer... right now, for each iteration, the renderer traces a path through a pixel all the way to its recursion depth before moving on to the next pixel. As soon as possible I want to move the renderer to use an iterative (as opposed to recursive) accumulated approach for each iteration (slightly confusing terminology, here i mean iteration as in each render pass), which, oddly enough, is something that my old raytracer already does. I've already started moving towards the accumulated approach; right now, I store the first set of raycasts from the camera and reuse those rays in each iteration.

One cool thing that storing the initial ray cast allows me to do is to generate a z-depth version of the render for "free":

[![](/content/images/2012/Mar/frame_3z.png)](/content/images/2012/Mar/frame_3z.png)

Okay, hopefully by my next post I'll have the KD-tree rewrite done!
