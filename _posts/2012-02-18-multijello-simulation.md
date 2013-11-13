---
layout: post
title: Multijello Simulation
tags: [CIS563, Coding, JelloSim]
author: Yining Karl Li
---

The first assignment of the semester for [CIS563](http://www.seas.upenn.edu/~cis563/) is to write a jello simulator using a particle-mass-spring system. The basic jello system involves building a particle grid where all of the particles are connected using a variety of springs, such as bend and shear springs, and then applying forces across the spring grid. In order to step the entire simulation forward in time, we also have to implement a stable integration scheme, such as RK4. For each step forward in time, we have to do intersection tests for each particle against solid objects in the simulation, such as the ground plane or boxes or spheres.

The particle-mass-spring we used is based directly on the [Baraff/Witkin 2001 SIGGRAPH Physically Based Animation Course Notes](http://www.pixar.com/companyinfo/research/pbm2001/).

For the actual assignment, we were only required to support a single jello interacting against boxes, spheres, cylinders, and the ground. However, I think basic primitives are a tad boring... so I went ahead and integrated mesh collisions as well. The mesh collision stuff is actually using the same OBJ mesh system and KD-Tree system that I am using for my pathtracer! I am planning on cleaning up my OBJ/KD-Tree system and releasing it on Github or something soon, as I think I will still find even more uses for it in graphics projects.

Of course, a natural extension of mesh support is jello-on-jello interaction, which is why I call my simulator "multijello" instead of just singular jello. For jello-on-jello, my approach is to update one jello at a time, and for each jello, treat all other jellos in the simulation as just more OBJ meshes. This solution yields pretty good results, although some interpenetration happens if the time step is too large or if jello meshes are too sparse.

Here's a video showcasing some things my jello simulator can do:

<div class='embed-container'><iframe src='https://player.vimeo.com/video/37098929' frameborder='0'>Experiments in Jello Simulation</iframe></div>
