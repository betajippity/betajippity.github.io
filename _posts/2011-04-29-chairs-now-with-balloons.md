---
layout: post
title: Chairs…. now with Balloons!
tags: [3d Modeling, Art]
author: Yining Karl Li
---

Oops, I haven't posted in a while...

A few weeks back I decided to try out overhauling one of my previous projects with VRay. I figured the chairs project would be fun, so...

[![]({{site.url}}/content/images/2011/Apr/shot3.jpg)]({{site.url}}/content/images/2011/Apr/shot3.jpg)

Wwwwaaaayyyy prettier than before. I really like VRay, although I feel that setting it up is a bit more involved than MentalRay is. Still haven't made too many inroads with Photorealistic Renderman yet, so I can't comment on that quite yet.

Oh, also, as you can see, I added balloons too. I like balloons.

[![]({{site.url}}/content/images/2011/Apr/shot0.jpg)]({{site.url}}/content/images/2011/Apr/shot0.jpg)

I decided to add balloons after seeing an article on [RonenBerkerman.com](http://www.ronenbekerman.com/) a while back about shading balloons using VRay in 3DSMax. I'm using VRay in Maya, however, so I had to figure out how to recreate the shader in Maya's Hypershade. The shader network winded up looking like this:

[![]({{site.url}}/content/images/2011/Apr/balloonshadernetwork.png)]({{site.url}}/content/images/2011/Apr/balloonshadernetwork.png)

It's \*almost\* fully procedural, minus that one black and white ramp image that I wound up using for a lot of things. Replacing that image with a procedural ramp shader to make the entire shader fully procedural probably wouldn't be very hard at all, but I got lazy :p

I was originally going to post breakdowns of all of the settings for each node in the shading network as well, but again, I'm lazy. So instead, [here's the shader in a Maya .ma file](http://www.yiningkarlli.com/files/BalloonShader.zip)!

A few more renders:

[![]({{site.url}}/content/images/2011/Apr/shot1.jpg)]({{site.url}}/content/images/2011/Apr/shot1.jpg)

[![]({{site.url}}/content/images/2011/Apr/shot2.jpg)]({{site.url}}/content/images/2011/Apr/shot2.jpg)

[![]({{site.url}}/content/images/2011/Apr/shot4.jpg)]({{site.url}}/content/images/2011/Apr/shot4.jpg)

As soon as my last finals are over in about a week, I'll catch up with my backlog of things that need to be posted. I'm planning on posting a series of posts introducing some concepts in graphics programming that I learned in CIS277 this semester. I'm not going to go super duper in depth (for that, take CIS277! Dr. Norm Badler is an awesome professor.), but at the very least I'll highlight some of the cooler things I learned. That class was really neat, we wound up writing our own 2D animation software from scratch and our final team project assignment was to build our own 3D modeling software. Basically, we made mini-Maya. My team (Adam Mally, Stewart Hills, and me) got some really neat stuff to work. 

Speaking of Stewart, Stewart and I both will be interning at Pixar this summer! We got into their Pixar Undergraduate Program... uh... program. PUP essentially is a 10 week crash course on Pixar's production pipeline, so we'll be learning about everything from modeling to simulation to using Photorealistic Renderman. I'm really looking forward to that.
