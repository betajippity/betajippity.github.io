---
layout: post
title: Flower Vase Renders
tags: [Coding, Renderer]
author: Yining Karl Li
---

[![Rendered in Takua a0.5 using BDPT. Nearly a quarter of a billion triangles.]({{site.url}}/content/images/2015/Feb/preview/flowers.cam2.jpg)]({{site.url}}/content/images/2015/Feb/flowers.cam2.png)

In order to test Takua a0.5, I've been using my renderer on some quick little "pretty picture" projects. I recently ran across a fantastic flower vase model by artist [Andrei Mikhalenko](https://www.behance.net/andi_mix) and used Andrei's model as the basis for a shading exercise. The above and following images are rendered entirely in Takua a0.5 using bidirectional pathtracing. I textured and shaded everything using Takua a0.5's layered material system, and also made some small modifications to the model (moved some flowers around, extended the stems to the bottom of the vase, and thickened the bottom of the vase). Additionally, I further subdivided the flower petals to gain additional detail and smoothness, meaning the final rendered model weighs in at nearly a quarter of a billion triangles. Obviously using such heavy models is not practical for a single prop in real world production, but I wanted to push the amount of geometry my renderer can handle. Overall, total memory usage for each of these renders hovered around 10.5 GB. All images were rendered at 1920x1080 resolution; click on each image to see the full resolution renders.

For the flowers, I split all of the flowers into five randomly distributed groups and assigned each group a different flower material. Each material is a two-sided material with a different BSDF assigned to each side, with side determined by the surface normal direction. For each flower, the outside BSDF has a slightly darker reflectance than the inner BSDF, which efficiently approximates the subsurface scattering effect real flowers have, but without actually having to use subsurface scattering. In this case, using a two-sided material to fake the effect of subsurface scattering is desirable since the model is so complex and heavy. Also, the stems and branches are all bump mapped.

[![Rendered in Takua a0.5 using BDPT. Note the complex caustics from the vase and water.]({{site.url}}/content/images/2015/Feb/preview/flowers.cam0.jpg)]({{site.url}}/content/images/2015/Feb/flowers.cam0.png)

This set of renders was a good test for bidirectional pathtracing because of the complex nature of the caustics in the vase and water; note that the branches inside of the vase and water cannot be efficiently rendered by unidirectional pathtracing since they are in glass and therefore cannot directly sample the light sources. The scene is lit by a pair of rectlights, one warmer and one cooler in temperature. This lighting setup, combined with the thick glass and water volume at the bottom of the vase, produces some interesting caustic on the ground beneath the vase.

The combination of the complex caustics and the complex geometry in the bouquet itself meant that a fairly deep maximum ray path length was required (16 bounces). Using BDPT helped immensely with resolving the complex bounce lighting inside of the bouquet, but the caustics proved to be difficult for BDPT; in all of these renders, everything except for the caustics converged within about 30 minutes on a quad-core Intel Core i7 machine, but the caustics took a few hours to converge in the top image, and a day to converge for the second image. I'll discuss caustic performance in BDPT compared to PPM and VCM in some upcoming posts.

[![Rendered in Takua a0.5 using BDPT. Depth of field and circular bokeh entirely in-camera.]({{site.url}}/content/images/2015/Feb/preview/flowers.cam1.jpg)]({{site.url}}/content/images/2015/Feb/flowers.cam1.png)

All depth of field is completely in-camera and in-renderer as well. No post processed depth of field whatsoever! For the time being, Takua a0.5 only supports circular apertures and therefore only circular bokeh, but I plan on adding custom aperture shapes after I finish my thesis work. In general, I think that testing my own renderer with plausibly real-world production quality scenes is very important. After all, having just a toy renderer with pictures of spheres is not very fun... the whole point of a renderer is to generate some really pretty pictures! For my next couple of posts, I'm planning on showing some more complex material/scene tests, and then moving onto discussing the PPM and VCM integrators in Takua.

---

## Addendum 2015-03-03

I should comment on the memory usage a bit more, since some folks have expressed interest in what I'm doing there. By default, the geometry actually weighs in closer to 30 GB in memory usage, so I had to implement some hackery to get this scene to fit in memory on a 16 GB machine. The hack is really simple: I added an optional half-float mode for geometry storage. In practice, using half-floats for geometry is usually not advisable due to precision loss, but in this particular scene, that precision loss becomes more acceptable due to a combination of depth of field hiding most alignment issues closer to camera, and sheer visual complexity making other alignment issues hard to spot without looking too closely. Additionally, for the flowers I also threw away all of the normals and recompute them on the fly at render-time. Recomputing normals on the fly results in a small performance hit, but it vastly preferable to going out of core.
