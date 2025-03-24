---
layout: post
title: SIGGRAPH 2017 Course Notes- Recent Advances in Disney's Hyperion Renderer
tags: [Hyperion, SIGGRAPH]
author: Yining Karl Li
---

This year at SIGGRAPH 2017, Luca Fascione and Johannes Hanika from Weta Digital organized a Path Tracing in Production course.
The course was split into two halves: a first half about production renderers, and a second half about using production renderers to make movies.
Brent Burley presented our recent work on Disney's Hyperion Renderer as part of the first half of the course.
To support Brent's section of the course, the entire Hyperion team worked together to put together some course notes describing recent work in Hyperion done for Zootopia, Moana, and upcoming films.

[![Image from course notes Figure 8: a production frame from Zootopia, rendered using Disney's Hyperion Renderer.]({{site.url}}/content/images/2017/Jul/preview/course_notes_zootopia.jpg)]({{site.url}}/content/images/2017/Jul/course_notes_zootopia.png)

Here is the abstract for the course notes:

> Path tracing at Walt Disney Animation Studios began with the Hyperion renderer, first used in production on Big Hero 6. Hyperion is a custom, modern path tracer using a unique architecture designed to efficiently handle complexity, while also providing artistic controllability and efficiency.
> The concept of physically based shading at Disney Animation predates the Hyperion renderer. Our history with physically based shading significantly influenced the development of Hyperion, and since then, the development of Hyperion has in turn influenced our philosophy towards physically based shading.

The course notes and related materials can be found at:

* [Official Course Resources Page (Full course notes and supplemental materials)](https://jo.dreggn.org/path-tracing-in-production/2017/index.html)
* [Project Page (Author's Version)](https://www.yiningkarlli.com/projects/ptcourse2017.html)
* [Official Print Version (ACM Library)](https://dl.acm.org/citation.cfm?doid=3084873.3084904)

The course wasn't recorded due to proprietary content from various studios, but the overall course notes for the entire course cover everything that was presented.
The major theme of our part of the course notes (and Brent's presentation) is replacing multiple scattering approximations with accurate brute-force path-traced solutions.
Interestingly, the main motivator for this move is primarily a desire for better, more predictable and intuitive controls for artists, as opposed to simply just wanting better visual quality.
In the course notes, we specifically discuss fur/hair, path-traced subsurface scattering, and volume rendering.

The Hyperion team also had two other presentations at SIGGRAPH 2017:

* Ralf Habel presented several sections of the "[Production Volume Rendering](https://graphics.pixar.com/library/ProductionVolumeRendering/)"" course, which was jointly put together by Julian Fong and Magnus Wrenninge from Pixar Animation Studios, Christophe Kulla from Sony Imageworks, and Ralf Habel from Walt Disney Animation Studios.
* Peter Kutz presented our "[Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes](https://blog.yiningkarlli.com/2017/07/spectral-and-decomposition-tracking.html)" technical paper in the "Rendering Volumes" papers session.
