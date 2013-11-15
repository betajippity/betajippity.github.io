---
layout: post
title: City Street&#58 Playing with Z-Depth and Ambient Occlusion
tags: [3d Modeling, Art]
author: Yining Karl Li
---

I haven't managed to make any progress on actually finishing this project since my last post, but I have had a bit of time to play with ambient occlusion and z-depth mapping. So... same render as before, but now with depth of field and some ambient occlusion:

[![](/content/images/2010/Nov/testrender7_composite_ao_zv2.jpg)](/content/images/2010/Nov/testrender7_composite_ao_zv2.jpg)

...and the z-depth map:

[![](/content/images/2010/Nov/z.jpg)](/content/images/2010/Nov/z.jpg)

...and the ambient occlusion map. I did the leaves on the trees by transparency mapping the planes where the leaves went on the model, but because of that I wasn't sure how I was supposed to ambient occlude the trees. So I removed them for the ambient occlusion map:

[![](/content/images/2010/Nov/a_o.jpeg)](/content/images/2010/Nov/a_o.jpeg)

I actually found an alternate way to render out the z-depth map, but I'm not entirely sure this is as physically accurate as the standard way Maya does z-depth:

[![](/content/images/2010/Nov/z_alt.jpg)](/content/images/2010/Nov/z_alt.jpg)

Hopefully more soon!
