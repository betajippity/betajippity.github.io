---
layout: post
title: Smoke Simulation Basics!
tags: [CIS563, Coding, Fluid Simulation]
author: Yining Karl Li
---

For [CIS563](http://www.seas.upenn.edu/~cis563/) (Physically Based Animation), our current assignment is to write a fluid simulator capable of simulating smoke inside of a box. For this assignment, we're using a semi-lagrangian approach based on [Robert Bridson](http://www.cs.ubc.ca/~rbridson/)'s 2007 SIGGRAPH [Course Notes on Fluid Simulation](http://www.cs.ubc.ca/~rbridson/fluidsimulation/fluids_notes.pdf).

I won't go into the nitty-gritty details of the math behind the simulation (for that, consult the Bridson notes), but I'll give a quick summary. Basically, we start with a specialized grid structure called the MAC (marker and cell) grid, where each grid cell stores information relevant to the point in space the cell represents, such as density, velocity, temperature, etc. We update values across the grid by pretending a particle carried the cell's values into the cell and using the velocity to extrapolate in time the particle's previous position, and look up the values from the grid cell the particle was previously in. We then use that information to perform advection and projection and solve the system through a [preconditioned conjugate gradient solver](http://en.wikipedia.org/wiki/Preconditioned_conjugate_gradient_method#The_preconditioned_conjugate_gradient_method).

So far I have implemented density advection, projection, buoyancy (via temperature advection), and vorticity. For the integration scheme I'm just using basic Eularian, which was the default for the framework we started with. Eularian seems stable enough for the smoke sim, but I might try to go ahead and implement RK4 later anyway, since I suspect RK4 won't smooth out details as much as basic Eularian.

I'm still missing the actual preconditioner, so for now I'm only testing the simulation on a 2D grid, since otherwise the simulation times will be really really long.

Here is a test on a 100x100 2D grid!

<div class='embed-container'><iframe src='https://player.vimeo.com/video/37842004' frameborder='0'>Smoke Simulator 100x100x1 Test</iframe></div>
