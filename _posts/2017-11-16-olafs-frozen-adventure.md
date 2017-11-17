---
layout: post
title: Olaf's Frozen Adventure
tags: [Films]
author: Yining Karl Li
---

After an amazing 2016, we're having a bit of a break year this year at [Walt Disney Animation Studios](http://www.disneyanimation.com/).
We don't have a feature film this year; instead, we made a half-hour featurette called [Olaf's Frozen Adventure](https://www.disneyanimation.com/projects/olafsfrozenadventure), which will be released in front of Pixar's [Coco](https://www.pixar.com/feature-films/coco#coco-main) during Thanksgiving.
I think this is the first time a Disney Animation short/featurette has accompanied a Pixar film.
Olaf's Frozen Adventure is a fun little holiday story set in the world of Frozen, and I had the privilege of getting to play a small role in making Olaf's Frozen Adventure!
I got an official credit as part of a handful of engineers that did some specific, interesting technology development for Olaf's Frozen Adventure.

Olaf's Frozen Adventure is really really funny; because Olaf is the main character, the entire story takes on much more of a self-aware, at times somewhat absurdist tone.
The featurette also has a bunch of new songs~ there are six new songs in total, which is somehow pretty close to the original film's count of eight songs, but in a third of the runtime.
Olaf's Frozen Adventure was originally announced as a TV special, but the wider Walt Disney Company was so happy with the result that they decided to give us a theatrical release instead!

Something I personally find fascinating about Olaf's Frozen Adventure is comparing it visually with the original Frozen.
Olaf's Frozen Adventure is rendered entirely with Disney's [Hyperion Renderer](http://www.disneyanimation.com/technology/innovations/hyperion), compared with Frozen, which was rendered using pre-RIS Renderman.
While both films used our Disney BRDF, Olaf's Frozen Adventure benefits from all of the improvements and advancements that have been made during Big Hero 6, Zootopia, and Moana.
The original Frozen used dipole subsurface scattering, radiosity caching, and generally had fairly low geometric complexity relative to Hyperion-era films.
In comparison, Olaf's Frozen Adventure uses brute force subsurface scattering, uses path-traced global illumination, uses the full Disney BSDF (which is significantly extended from the Disney BRDF), uses our advanced fur/hair shader developed during Zootopia, and has much greater geometric complexity.
Some shots even utilize an extended version of the photon mapped caustics we developed during Moana.
Extensions to our photon mapping system is one of the things I worked on for Olaf's Frozen Adventure.
Even the water in Arendelle Harbor looks way better than in Frozen, since we were able to make use of the incredible water systems developed for Moana.
All of these advancements are discussed in our [SIGGRAPH 2017 Course Notes](http://www.yiningkarlli.com/projects/ptcourse2017.html).

As usual with Disney Animation projects I get to work on, here are some stills in no particular order, pulled from marketing material.
Even though Olaf's Frozen Adventure was originally meant for TV, we still put the same level of effort into it that we do with theatrical features, and I think it shows!

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_01.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_01.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_02.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_02.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_03.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_03.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_04.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_04.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_05.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_05.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_06.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_06.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_07.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_07.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_08.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_08.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_09.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_09.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_10.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_10.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_11.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_11.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_12.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_12.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_13.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_13.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_14.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_14.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_15.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_15.png)

[![]({{site.url}}/content/images/2017/Nov/preview/LOAF_16.jpg)]({{site.url}}/content/images/2017/Nov/LOAF_16.png)

All images in this post are courtesy of and the property of Walt Disney Animation Studios.
