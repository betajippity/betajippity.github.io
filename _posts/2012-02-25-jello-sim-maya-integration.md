---
layout: post
title: Jello Sim Maya Integration
tags: [CIS563, Coding, JelloSim]
author: Yining Karl Li
---

I ported my [jello simulation](http://blog.yiningkarlli.com/2012/02/multijello-simulation.html) to Maya!

Well, sort of.

Instead of building a full Maya plugin like my good friend [Dan Knowlton did](http://www.danknowlton.com/blog.php?id=295), I opted for a simpler approach: I write out the vertex positions for each jello cube for each time step to a giant text file, and then use a custom Python script in Maya to read the vertex positions from the text file and animate a cube inside of Maya. It is a bit hacky and not nearly as elegant as the full-Maya-plugin approach, but it works in a pinch.

I think beng able to integrate my coding projects into artistic projects is very important, since at the end of the day, the main point of computer graphics is to be able to produce a good looking image. As such, I thought putting some jello into my kitchen scene would be fun, so here is the result, rendered out with Vray (some day I want to replace Vray with my own renderer though!):

<div class='embed-container'><iframe src='https://player.vimeo.com/video/37534077' frameborder='0'>Jello Test</iframe></div>

The rendering process I'm using isn't perfect yet... the fact that the jello cubes are being simulated with relatively few vertices is extremely apparent in the above video, as can be seen in how angular the edges of the jello become when it wiggles. At the moment, I can think of two possible fixes: one, simple run the simulation with a higher vertex count, or two, render the jello as a subdivision surface with creased edges. Since the second option should in theory allow for better looking renders without impacting simulation time, I think I will try the subdivision method forst.

But for now, here are some pretty still frames:

[![]({{site.url}}/content/images/2012/Feb/jello_kitchen_01.png)]({{site.url}}/content/images/2012/Feb/jello_kitchen_01.png)

[![]({{site.url}}/content/images/2012/Feb/jello_kitchen_021.png)]({{site.url}}/content/images/2012/Feb/jello_kitchen_021.png)

[![]({{site.url}}/content/images/2012/Feb/jello_kitchen_03.png)]({{site.url}}/content/images/2012/Feb/jello_kitchen_03.png)

[![]({{site.url}}/content/images/2012/Feb/jello_kitchen_04.png)]({{site.url}}/content/images/2012/Feb/jello_kitchen_04.png)
