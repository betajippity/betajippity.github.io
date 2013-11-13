---
layout: post
title: Subsurface Scattering and New Name
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

I implemented subsurface scattering in my renderer!

Here's a Stanford Dragon in a totally empty environment with just one light source providing illumination. The dragon is made up of a translucent purple jelly-like material, showing off the subsurface scattering effect:

[![](/content/images/2012/May/dragonsss_bright.png)](/content/images/2012/May/dragonsss_bright.png)

[Subsurface scattering](http://en.wikipedia.org/wiki/Subsurface_scattering) is an important behavior that light exhibits upon hitting some translucent materials; normal transmissive materials will simply transport light through the material and out the other side, but subsurface scattering materials will attenuate and scatter light before releasing the light somewhere not necessarily along a line from the entry point. This is what gives skin and translucent fruit and marble and a whole host of other materials their distinctive look.

There are currently a whole host of methods to rapidly approximate subsurface scattering, including some screen-space techniques that are actually fast enough for use in realtime renderers. However, my implementation at the moment is purely brute-force monte-carlo; while extremely physically accurate, it is also very very slow. In my implementation, when a ray enters a subsurface scattering material, I generate a random scatter direction via isotropic scattering, and then calculate light accumulation attenuation based on an absorption coefficient defined for the material. This approach is very similar to the one taken by [Peter](http://peterkutz.com/) and me in our [GPU pathtracer](http://www.blogger.com/gpupathtracer.blogspot.com).

At some point in the future I might try out a faster approximation method, but for the time being, I'm pretty happy with the visual result that brute-force monte-carlo scattering produces.

Here's the same subsurface scattering dragon from above, but now in the Cornell Box. Note the cool colored soft shadows beneath the dragon:

[![](/content/images/2012/May/subsurfacetest.png)](/content/images/2012/May/subsurfacetest.png)

Also, I've finally settled on a name for my renderer project: Takua Render! So, that is what I shall be calling my renderer from now on!
