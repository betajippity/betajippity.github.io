---
layout: post
title: More Experiments with Trees
tags: [3d Modeling, Art]
author: Yining Karl Li
---

Every once in a while, I [return](http://yiningkarlli.blogspot.com/2011/03/autumn-tree.html) to [trying](http://yiningkarlli.blogspot.com/2011/03/vray-tree.html) to make a good looking tree. Here's a frame from my latest attempt\:

[![](/content/images/2012/Aug/leaves.png)](/content/images/2012/Aug/leaves.png)

Have I finally managed to create a tree that I'm happy with? Well..... no. But I do think this batch comes closer than previous attempts! I've had a workflow for creating base tree geometry for a while now that I'm fairly pleased with, which is centered around using OnyxTREE as a starting point and then custom sculpting in Maya and Mudbox. However, I haven't tried actually animating trees before, and shading trees properly has remained a challenge. So, my goal this time around was to see if I could make any progress in animating and shading trees.

As a starting point, I played with just using the built in wind simulation tools in OnyxTREE, which was admittedly difficult to control. I found that having medium to high windspeeds usually led to random branches glitching out and jumping all over the place. I also wanted to make a weeping willow style tree, and even medium-low windspeeds often resulted in the hilarious results:

[![It turns out OnyxTREE runs fine in Wine on OSX. Huh](/content/images/2012/Aug/crazywind.png)](/content/images/2012/Aug/crazywind.png)

A bigger problem though was the sheer amount of storage space exporting animated tree sequences from Onyx to Maya requires. The only way to bring Onyx simulations into programs that aren't 3ds Max is to export the simulation as an obj sequence from Onyx and then import the sequence into whatever program. Maya doesn't have a native method to import obj sequences, so I wrote a custom Python script to take care of it for me. Here's a short compilation of some results: 

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53572074' frameborder='0'>Windy Tree Maya Tests</iframe></div>

One important thing I discovered was that the vertex numbering in each obj frame exported from Onyx remains consistent; this fact allowed for an important improvement. Instead of storing a gazillion individual frames of obj meshes, I experimented with dropping a large number of intermediate frames and leaving a relatively smaller number of keyframes which I then used as blendshape frames with more scripting hackery. This method works rather well; in the above video, the weeping willow at the end uses this approach. There is, however, a significant flaw with this entire Onyx based animation workflow: geometry clipping. Onyx's system does not resolve cases where leaves and entire branches clip through each other... while from a distance the trees look fine, up close the clipping can become quite apparent. For this reason, I'm thinking about abandoning the Onyx approach altogether down the line and perhaps experimenting with building my own tree rigs and procedurally animating them. That's a project for another day, however. 

On the shading front, my basic approach is still the same: use a Vray double sided material with a waxier, more specular shader for the "front" of the leaves and a more diffuse shader for the "back". In real life, leaves of course display an enormous amount of subsurface scattering, but leaves are a special case for subsurface scatter: they're really really thin! Normally subsurface scattering is a rather expensive effect to render, but for thin material cases, the Vray double sided material can quite efficiently approximate the subsurface effect for a fraction of the rendertime.

[![](/content/images/2012/Aug/doublesidedmat.png)](/content/images/2012/Aug/doublesidedmat.png)

Bark is fairly straightforward to, it all comes down to the displacement and bump mapping. Unfortunately, the limbs in the tree models I made this time around were straight because I forgot to go in and vary them up/sculpt them. Because of the straightness, my tree twigs don't look very good this time, even with a decent shader. Must remember for next time! Creating displacement bark maps from photographs or images sourced from Google Image Search or whatever is really simple; take your color texture into Photoshop, slam it to black and white, and adjust contrast as necessary:

[![](/content/images/2012/Aug/barkmaps.png)](/content/images/2012/Aug/barkmaps.png)

Here's a few seconds of rendered output with the camera inside of the tree's leaf canopy, pointed skyward. It's not exactly totally realistic looking, meaning it needs more work of course, but I do like the green-ess of the whole thing. More importantly, you can see the subsurface effect on the leaves from the double sided material!

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53569412' frameborder='0'>Windy Tree Render Test</iframe></div>

Something that continues to prove challenging is how my shaders hold up at various distances. The same exact shader (with a different leaf texture), looks great from a distance, but loses realism when the camera is closer. I did a test render of the weeping willow from further away using the same shader, and it looks a lot better. Still not perfect, but closer than previous attempts:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53569411' frameborder='0'>Willow Wind Test</iframe></div>

...and of course, a pretty still or two:

[![](/content/images/2012/Aug/willow1.png)](/content/images/2012/Aug/willow1.png)

[![](/content/images/2012/Aug/willow2.png)](/content/images/2012/Aug/willow2.png)

A fun experiment I tried was building a shader that can imitate the color change that occurs as fall comes around. This shader is in no way physically based, it's using just a pure mix function controlled through keyframes. Here's a quick test showing the result:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/46474571' frameborder='0'>Tree Color Test</iframe></div>

Eventually building a physically based leaf BSSDF system might be a fun project for my own renderer. Speaking of which, I couldn't resist throwing the weeping willow model through my KD-tree library to get a tree KD-tree:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/53546737' frameborder='0'>Tree KD-Tree</iframe></div>

Since the Vimeo compression kind of borks thin lines, here's a few stills:

[![](/content/images/2012/Aug/kd1.png)](/content/images/2012/Aug/kd1.png)

[![](/content/images/2012/Aug/kd2.png)](/content/images/2012/Aug/kd2.png)

Alright, that's all for this time! I will most likely return to trees yet again perhaps a few weeks or months from now, but for now, much has been learned!
