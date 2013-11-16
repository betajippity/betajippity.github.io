---
layout: post
title: April 14th CIS563 Progress Summary&#58 Meshes and Meshes and Meshes
tags: [CIS563, Coding, Collaborations, Fluid Simulation]
author: Yining Karl Li
---

This post is the second update for the [MultiFluids project](http://chocolatefudgesyrup.blogspot.com/)!

The past week for Dan and me has been all about meshes: mesh loading, mesh interactions, and mesh reconstruction! We integrated in a OBJ to Signed Distance Field convertor, which allowed us to then implement liquid-against-mesh interactions and use meshes to define starting liquid positions. We also figured out how to run marching cubes on signed distance fields, allowing us to export OBJ mesh sequences of our fluid simulation and bring our sims into Maya for rendering!

Here is a really cool render from this week:

[![]({{site.url}}/content/images/2012/Apr/reddragon.png)]({{site.url}}/content/images/2012/Apr/reddragon.png)

The posts for this week are:

1. [Surface Reconstruction via Marching Cubes](http://chocolatefudgesyrup.blogspot.com/2012/04/surface-reconstruction-via-marching.html): Level set goes in, OBJ comes out
2. [Mesh Interactions](http://chocolatefudgesyrup.blogspot.com/2012/04/mesh-interactions.html): Using meshes as interactable objects
3. [Meshes as Starting Liquid Volumes and Maya Integration](http://chocolatefudgesyrup.blogspot.com/2012/04/meshes-as-starting-liquid-volumes-and.html): Cool tests with a liquid Stanford Dragon

Check out the posts for details, images, and videos!
