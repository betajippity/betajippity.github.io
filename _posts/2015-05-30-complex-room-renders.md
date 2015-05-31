---
layout: post
title: Complex Room Renders
tags: [Coding, Renderer]
author: Yining Karl Li
---

[![Rendered in Takua a0.5 using VCM. Model credits in the post below.]({{site.url}}/content/images/2015/May/preview/room_angle1.jpg)]({{site.url}}/content/images/2015/May/room_angle1.png)

I realize I have not posted in some weeks now, which means I still haven't gotten around to writing up Takua a0.5's architecture and VCM integrator. I'm hoping to get to that once I'm finished with my thesis work. In the meantime, here are some more pretty pictures rendered using Takua a0.5.

A few months back, I made a high-complexity scene designed to test Takua a0.5's capability for handling "real-world" workloads. The scene was also designed to have an extremely difficult illumination setup. The scene is an indoor room that is lit primarily from outside through glass windows. Yes, the windows are actually modeled as geometry with a glass BSDF! This means everything seen in these renders is being lit primarily through caustics! Of course, no real production scene would be set up in this manner, but I chose this difficult setup specifically to test the VCM integrator. There is a secondary source of light from a metal cylindrical lamp, but this light source is also difficult since the actual light is emitted from a sphere light inside of a reflective metal cylinder that blocks primary visibility from most angles.

The flowers and glass vase are the same ones from my earlier [Flower Vase Renders post](http://blog.yiningkarlli.com/2015/02/flower-vase-render.html). The original flowers and vase are by [Andrei Mikhalenko](https://www.behance.net/andi_mix), with custom textures of my own. The amazing, colorful Takua poster on the back wall is by my good friend [Alice Yang](http://alice-yang.tumblr.com/). The two main furniture pieces are by [ODESD2](http://odesd2.com.ua/ru), and the Braun SK4 record player model is by one of my favorite archviz artists, [Bertrand Benoit](http://bertrand-benoit.com/). The teapot is, of course, the famous Utah teapot. All textures, shading, and other models are my own.

As usual, all depth of field is completely in-camera and in-renderer. Also, all BSDFs in this scene are fairly complex; there is not a single simple diffuse surface anywhere in the scene! Instancing is used very heavily; the wicker baskets, notebooks, textbooks, chess pieces, teacups, and tea dishes are all instanced from single pieces of geometry. The floorboards are individually modeled but not instanced, since they all vary in length and slightly in width.

A few more pretty renders, all rendered in Takua a0.5 using VCM:

[![Closeup of Braun SK4 record player with DOF. Rendered using VCM.]({{site.url}}/content/images/2015/May/preview/room_angle4.jpg)]({{site.url}}/content/images/2015/May/room_angle4.png)

[![Flower vase and tea set. Rendered using VCM]({{site.url}}/content/images/2015/May/preview/room_angle6.jpg)]({{site.url}}/content/images/2015/May/room_angle6.png)

[![Floorboards, textbooks, and rough metal bin with DOF. The book covers are entirely made up. Rendered using VCM.]({{site.url}}/content/images/2015/May/preview/room_angle7.jpg)]({{site.url}}/content/images/2015/May/room_angle7.png)
