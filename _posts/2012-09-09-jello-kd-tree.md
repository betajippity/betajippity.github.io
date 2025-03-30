---
layout: post
title: Jello KD-Tree
tags: [Coding, JelloSim]
author: Yining Karl Li
---

I've started an effort to clean up, rewrite, and enhance my ObjCore library, and part of that effort includes taking my [KD-Tree viewer from Takua Render](http://blog.yiningkarlli.com/2012/06/more-kd-tree-fun.html) and making it just a standard component of ObjCore. As a result, I can now plug the latest version of ObjCore into any of my projects that use it and quickly wire up support for viewing the KD-Tree view for that project. Here's the [jello sim from a few months back](http://blog.yiningkarlli.com/2012/05/more-fun-with-jello.html) visualized as a KD-Tree:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53735319' frameborder='0' allow="fullscreen; picture-in-picture; encrypted-media">Jello Sim KD-Tree</iframe></div>

I've adopted a new standard grey background for OpenGL tests, since I've found that the higher amount of contrast this darker grey provides plays nicer with Vimeo's compression for a clearer result. But of course I'll still post stills too.

[![]({{site.url}}/content/images/2012/Sep/kd_jello0.png)]({{site.url}}/content/images/2012/Sep/kd_jello0.png)

[![]({{site.url}}/content/images/2012/Sep/kd_jello1.png)]({{site.url}}/content/images/2012/Sep/kd_jello1.png)

[![]({{site.url}}/content/images/2012/Sep/kd_jello2.png)]({{site.url}}/content/images/2012/Sep/kd_jello2.png)

Hopefully at the end of this clean up process, I'll have ObjCore in a solid enough of a state to post to Github.
