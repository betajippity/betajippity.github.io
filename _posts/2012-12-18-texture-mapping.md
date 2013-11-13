---
layout: post
title: Texture Mapping
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

A few weeks back I started work on another piece of super low-hanging fruit\: texture mapping! Before I delve into the details, here's a test render showing three texture mapped spheres with varying degrees of glossiness in a glossy-walled Cornell box. I was also playing with logos for Takua render and put a test logo idea on the back wall for fun:

[![](/content/images/2012/Dec/texture3.png)](/content/images/2012/Dec/texture3.png)

...and the same scene with the camera tilted down just to show off the glossy floor (because I really like the blurry glossy reflections):

[![](/content/images/2012/Dec/texture2.png)](/content/images/2012/Dec/texture2.png)

My texturing system can, of course, support textures of arbitrary resolution. The black and white grid and colored UV tile textures in the above render are square 1024x1024, while the Earth texture is rectangular 1024x512. Huge textures are handled just fine, as demonstrated by the following render using a giant 2048x2048, color tweaked version of [Simon Page's Space Janus wallpaper](http://simoncpage.co.uk/blog/2012/03/ipad-hd-retina-wallpaper/):

![](/content/images/2012/Dec/texture4.png)

Of course UV transformations are supported. Here's the same texture with a 35 degree UV rotation applied and tiling switched on:

[![](/content/images/2012/Dec/sampleScene_uvrotated.png)](/content/images/2012/Dec/sampleScene_uvrotated.png)

Since memory is always at a premium, especially on the GPU, I've implemented textures in a fashion inspired by geometry instancing and node based material systems, such as the system for Maya. Inside of my renderer, I represent texture files as a file node containing the raw image data, streamed from disk via [stb_image](http://nothings.org/stb_image.c). I then apply transformations, UV operations, etc through a texture properties node, which maintains a pointer to the relevant texture file node, and then materials point to whatever texture properties nodes they need. This way, texture data can be read and stored once in memory and recycled as many times as needed, meaning that a well formatted scene file can altogether eliminate the need for redundant texture read/storage in memory. This system allows me to create amusing scenes like the following one, where a single striped texture is reused in a number of materials with varied properties:

[![](/content/images/2012/Dec/stripes.png)](/content/images/2012/Dec/stripes.png)

Admittedly I made that stripe texture really quickly in Photoshop without too much care for straightness of lines, so it doesn't actually tile very well. Hence why the sphere in the lower front shows a discontinuity in its texture... that's not glitchy UVing, just a crappy texture!

I've also gone ahead and extended my materials system to allow any material property to be driven with a texture. In fact, the stripe room render above is using the same stripe texture to drive reflectiveness on the side walls, resulting in reflective surfaces where the texture is black and diffuse surfaces where the texture is white. Here's another example of texture driven material properties showing emission being driven using the same color-adjusted Space Janus texture from before:

[![](/content/images/2012/Dec/texture_light_big.png)](/content/images/2012/Dec/texture_light_big.png)

Even refractive and reflective index of refraction can be driven with textures, which can yield some weird/interesting results. Here are a pair of renders showing a refractive red cube with uniform IOR, and with IOR driven with a Perlin noise map:

[![Uniform refractive IOR](/content/images/2012/Dec/stripe_glass.1.png)](/content/images/2012/Dec/stripe_glass.1.png)

[![Refractive IOR driven with a Perlin noise texture map](/content/images/2012/Dec/stripe_glass_uv.0.png)](/content/images/2012/Dec/stripe_glass_uv.0.png)

The nice thing about a node-style material representation is that I should be able to easily plug in procedural functions in place of textures whenever I get around to implementing some (that way I can use procedural Perlin noise instead of using a noise texture).

Here's an admittedly kind of ugly render using the color UV grid texture to drive refractive color:

[![](/content/images/2012/Dec/stripe_glass_color.png)](/content/images/2012/Dec/stripe_glass_color.png)

For some properties, I've had to add a requirement to specify a range of valid values by the user when using a texture map, since RGB values don't map well to said properties. An example would be glossiness, where a gloss value range of 0% to 100% leaves little room for detailed adjustment. Of course this issue can be fixed by adding support for floating point image formats such as OpenEXR, which is coming very soon! In the following render, the back wall's glossiness is being driven using the stripe texture (texture driven IOR is also still in effect on the red refractive cube):

[![](/content/images/2012/Dec/stripe_gloss.0.png)](/content/images/2012/Dec/stripe_gloss.0.png)

Of course, even with nice instancing schemes, textures potentially can take up a gargantuan amount of memory, which poses a huge problem in the GPU world where onboard memory is at a premium. I still need to think more about how I'm going to deal with memory footprints larger than on-device memory, but at the moment my plan is to let the renderer allocate and overflow into pinned host memory whenever it detects that the needed footprint is within some margin of total available device memory. This concern is also a major reason why I've decided to stick with CUDA for now... until OpenCL gets support for a unified address space for pinned memory, I'm not wholly sure how I'm supposed to deal with memory overflow issues in OpenCL. I haven't reexamine OpenCL in a little while now though, so perhaps it is [time to take another look](http://blog.vsampath.com/2012/05/ed-opencl-vs-cuda-mid-2012-edition.html).

Unfortunately, something I discovered while in the process of extending my material system to support texture driven properties is that my renderer could probably use a bit of refactoring for the sake of organization and readability. Since I now have some time over winter break and am planning on making my Github repo for Takua-RT public soon, I'll probably undertake a bit of code refactoring over the next few weeks.
