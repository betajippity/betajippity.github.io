---
layout: post
title: Volumetric Renderer Revisited
tags: [Coding]
author: Yining Karl Li
---

I've been meaning to add animation support to my [volume renderer](http://blog.yiningkarlli.com/2011/10/a-volumetric-renderer-for-rendering-volumes.html) for demoreel purposes for a while now, so I did that this week! Here's a rotating cloud animation: 

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53634239' frameborder='0'>Animated Cloud Render Test</iframe></div>

...and of course, a still or two:

[![]({{site.url}}/content/images/2012/Sep/cloud1.png)]({{site.url}}/content/images/2012/Sep/cloud1.png)

[![]({{site.url}}/content/images/2012/Sep/cloud2.png)]({{site.url}}/content/images/2012/Sep/cloud2.png)

Instead of just rotating the camera around the cloud, I wanted for the cloud itself to rotate but have the noise field it samples stay stationary, resulting in a cool kind of morphing effect with the cloud's actual shape. In order to author animations easily, I implemented a fairly rough, crude version of Maya integration. I wrote a script that will take spheres and point lights in Maya and build a scene file for my volume renderer using the Maya spheres to define cloud clusters and the point lights to define... well... lights. With an easy bit of scripting, I can do this for each frame in a keyframed animation in Maya and then simply call the volume renderer once for each frame. Here's what the above animation's Maya scene file looks like:

[![]({{site.url}}/content/images/2012/Sep/maya.png)]({{site.url}}/content/images/2012/Sep/maya.png)

Also, since my pseudo-blackbody trick was originally intended to simulate the appearance of a fireball, I tried creating an animation of a fireball by just scaling a sphere:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53714601' frameborder='0'>Animated Pseudo-Blackbody Test</iframe></div>

...and as usual again, stills:

[![]({{site.url}}/content/images/2012/Sep/blackbody1.png)]({{site.url}}/content/images/2012/Sep/blackbody1.png)

[![]({{site.url}}/content/images/2012/Sep/blackbody2.png)]({{site.url}}/content/images/2012/Sep/blackbody2.png)

So that's that for the volume renderer for now! I think this might be the end of the line for this particular incarnation of the volume renderer (it remains the only piece of tech I'm keeping around that is more or less unmodified from its original CIS460/560 state). I think the next time I revisit the volume renderer, I'm either going to port it entirely to CUDA, as my good friend [Adam Mally](https://vimeo.com/user6054073) did with his, or I'm going to integrate it into my renderer project, [Peter Kutz](http://peterkutz.com/) style.
