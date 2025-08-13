---
layout: post
title: SIGGRAPH 2025 Course Notes- Path Guiding Surfaces and Volumes in Disney's Hyperion Renderer- A Case Study
tags: [Hyperion, SIGGRAPH]
author: Yining Karl Li
---

This year at SIGGRAPH 2025, Sebastian Herholz from Intel organized a followup to 2019's Path Guiding in Production Course [[Vorba et al. 2019]](https://cgg.mff.cuni.cz/~jaroslav/papers/2019-path-guiding-course/index.htm).
[This year's edition of the course](https://sherholz.github.io/siggraph2025-path-guiding-course/) includes presentations by Sebastian on Intel's [Open Path Guiding library](https://github.com/RenderKit/openpgl) and on general advice for integrating path guiding techniques into a unidirectional path tracing renderer, a presentation by Martin Šik on how Chaos's Corona Renderer uses advanced photon guiding techniques in their caustics solver, and a presentation by Lea Reichardt and Marco Manzi on the work Disney Animation and Disney Research\|Studios have put into Hyperion's second-generation path guiding system for surfaces and volumes.
I strongly encourage checking out the whole course, but wanted to highlight Lea and Marco's presentation in particular; they put a ton of care and effort into what I think is a really cool and unique look into what it takes to bridge cutting edge research into a production rendering environment.
The course notes were written by the four presenters above, in addition to Brian Green and myself from the Hyperion development team.

The course will be presented on Tuesday August 12th, startng at 3:45 PM.

[![Figure 1 from the paper. A production scene from Moana 2, rendered using path guiding in Disney’s Hyperion Renderer. From left to right: reference baseline, 64 SPP without path guiding, 64 SPP with path guiding, and visualization of the path guiding spatio-directional field at 256 SPP. © 2025 Disney.]({{site.url}}/content/images/2025/Aug/pathguidingcourse/preview/teaser.jpg)]({{site.url}}/content/images/2025/Aug/pathguidingcourse/teaser.png)

Here is the abstract:

> We present our approach to implementing a second-generation path guiding system in Disney's Hyperion Renderer, which draws upon many lessons learned from our earlier first-generation path guiding system. We start by focusing on the technical challenges associated with implementing path guiding in a wavefront style path tracer and present our novel solutions to these challenges. We will then present some powerful visualization and debugging tools that we developed along the way to both help us validate our implementation's correctness and help us gain deeper insight into how path guiding performs in a complex production setting. Deploying path guiding in a complex production setting raises various interesting challenges that are not present in purely academic settings; we will explore what we learned from solving many of these challenges. Finally, we will look at some concrete production test results and discuss how these results inform our large scale deployment of path guiding in production. By providing a comprehensive review of what it took for us to achieve this deployment on a large scale in our production environment, we hope that we can provide useful lessons and inspiration for anyone else looking to similarly deploy path guiding in production, and also provide motivation for interesting future research directions.

The paper and related materials can be found at:

* [Project Page (Author’s Version and Demo Video)](https://www.yiningkarlli.com/projects/pathguidingcourse2025.html)
* [Official Course Website](https://sherholz.github.io/siggraph2025-path-guiding-course/)
* [Official Print Version (ACM Library)](https://doi.org/10.1145/3721241.3733994)

All of the technical details are in the paper and presentation (and with 80 pages of course notes, of which 36 pages is the Disney Animation / Disney Research\|Studios chapter, there are technical details for days!), so this blog post is just some personal thoughts on this project.

As mentioned in the abstract, what we're presenting in this course is our second-generation path guiding system.
Disney Animation and Disney Research\|Studios have a long history of working on path guiding; one of landmark papers in modern path guiding was Practical Path Guiding (PPG) [[Müller et al. 2017]](https://doi.org/10.1111/cgf.14428), which came out of Disney Research\|Studios, and Hyperion was one of the first production renderers to implement PPG [[Müller 2019]](https://cgg.mff.cuni.cz/~jaroslav/papers/2019-path-guiding-course/index.htm).
We've used path guiding on a limited number of shots on most movies starting with Frozen 2, but as the course notes go into more detail on, for a variety of reasons our first generation path guiding system never gained widespread adoption.
Several years ago, based on a research proposal drafted by Wei-Feng Wayne Huang while he was still at Disney Animation, we kicked off of a large scale project to further improve path guiding and bring it to a point where we could get widespread adoption and provide significant benefits to production.
This project is a collaboration between Disney Research\|Studios, Disney Animation, Pixar, ILM, and Sebastian Herholz from Intel; the second-generation path guiding system in Hyperion is a product of this project.

Personally, this project is one of my all-time favorite projects that I've gotten to be a part of, and I think this project really highlights what an incredible research organization Disney Research\|Studios is.
Getting to collaborate with rendering colleagues from across multiple labs and studios is always fun and interesting, and I think for projects like this, the huge amount of production and engineering expertise that the various Disney studios bring combined with the world-class research talent at Disney Research\|Studios and ETH Zürich (which Disney Research\|Studios is academically partnered with) gives unique perspectives and capabilities for tackling difficult problems.
On top of the production experience from three cutting edge studios, Disney Research\|Studios also has deep access to both source code and the engineering teams for not one but _two_ extremely mature production rendering systems, Hyperion [[Burley et al. 2018]](https://doi.org/10.1145/3182159) and RenderMan [[Christensen et al. 2018]](https://doi.org/10.1145/3182162); I don't think there's anything else quite like this setup in our industry, and I think it's insanely cool that we get to work together like this!

One of the largest focus points for our second-generation path guiding efforts was to find a way to guide jointly for both surfaces _and_ volumes; our first-generation PPG based system only supported surfaces.
Over the past decade our artists have made heavier and heavier use of volumetrics in each successive project, to the point where now almost every shot in our movies contains some form of volumetrics, ranging from subtly atmospherics all the way to enormously complex setups like the storm battle at the end of Moana 2.
We already knew from past experience that extending PPG to volumes wasn't as easy as it might look, and a second-generation path guiding system would likely need to be a significant departure from PPG.
Towards the start of this project we learned that Sebastian Herholz at Intel was working in a similar direction and had incorporated a wide swath of recent path guiding research [\[Müller et al. 2017](https://doi.org/10.1111/cgf.13227), [Herholz et al. 2019](https://doi.org/10.1145/3230635), [Ruppert et al. 2020](https://doi.org/10.1145/3386569.3392421), [Xu et al. 2024\]](https://doi.org/10.1145/3687982) into Intel's open source [OpenPGL library](https://github.com/RenderKit/openpgl); at this point the project was expanded to include a collaboration with Sebastian.
This collaboration has been extraordinarily fruitful, with work from the Disney side of things helping inform development for OpenPGL and expertise from Sebastian helping us build on top of OpenPGL.

An interesting aspect of our next-generation path guiding project is that this project has been _both_ an academic research project _and_ a production engineering project; over the past several years, this project has spawned a series of cool research papers, but has also included a huge effort to get all of this research implemented in Hyperion and RenderMan and into artists' hands to actually make movies with, which means solving tons of practical production problems that sit outside of the usual research focus.
On the research side, so far the project has spawned three papers.
[Dodik et al. [2022]](https://doi.org/10.1111/cgf.13227) improved upon PPG by using spatio-directional mixture models to improve guiding's ability to learn and product sample arbitrarily oriented BSDFs.
[Xu et al. [2024]](https://doi.org/10.1145/3687982) introduces a way to guide volume scattering probaiblity (which is indirectly related to distance sampling) in volume rendering, which historically has been a major missing piece in path guiding in volumes.
The most recent paper, [Rath et al. [2025]](https://doi.org/10.2312/sr.20251181), looks at how to incorporate GPU based _neural_ forms of path guiding into existing CPU based renderers.
Each of these research papers tackles a major challenge we've found while working towards making path guiding practical in production.

To bridge between the research work and building a practical production system, we've put a lot of work into solving both more architectural technical challenges, and more artist facing user experience challenges.
One of the largest architectural technical challenges has been fitting path guiding, which learns from full path histories, into Hyperion's wavefront rendering architecture [[Eisenacher et al. 2013]](https://doi.org/10.1111/cgf.12158), in which path histories are not kept beyond the current bounce for each path (RenderMan XPU [[Christensen et al. 2025]](https://doi.org/10.1111/cgf.70218) is also a wavefront system, so the challenges there are similar).
Artist facing user experience challenges involve the reality that production renderers include many features that break physics to allow for better artistic control and more predictable results, which are difficult to account for when developing path guiding techniques in a purely academic renderer.
Solving these engineering and user experience challenges in order to build a practical production system is the focus of our part of the course this year.
What we're presenting in the course is really a snapshot of where we were at the beginning of the year; the material in the course represents enormous progress towards a robust practical system, but this project is very much still in progress and we've made additional advancements since we finished writing the course materials; hopefully we can present even more next year!

My favorite part of working on these projects is always getting to work with and learn from really cool people.
On the Disney Research side, this project has been led by Marco Manzi and Marios Papas, with significant contributions by Alexander Rath, Tiziano Portenier, and engineering support from Lento Manickathan.
On the Disney Animation side, Lea Reichardt, Brian Green, and I have been working closely with Marco to build out the production system.
Of course we have a long list of artists and TDs to thank on the production side for supporting and trying out this project; a full list of acknowledgements can be found on my project page and in the course notes.
Pushing path guiding forward in research and production together has been the type of project where everyone on the project learns a lot from each other, the studios learn a lot and gain incredibly powerful and useful new tools, and the wider research community benefits as a whole.
Investing in these types of large scale, longer term research projects is always a daunting task, and the fact that our studio leadership has given so much support this project and given us the time and resources to really make it a big success is just another testament towards the commitment Disney as a whole has towards making the best movies we can possibly make!

**References**

Brent Burley, David Adler, Matt Jen-Yuan Chiang, Hank Driskill, Ralf Habel, Patrick Kelly, Peter Kutz, Yining Karl Li, and Daniel Teece. 2018. [The Design and Evolution of Disney's Hyperion Renderer](https://doi.org/10.1145/3182159). _ACM Transactions on Graphics_. 37, 3 (2018), Article 33.

Per H. Christensen, Julian Fong, Jonathan Shade, Wayne L Wooten, Brenden Schubert, Andrew Kensler, Stephen Friedman, Charlie Kilpatrick, Cliff Ramshaw, Marc Bannister, Brenton Rayner, Jonathan Brouillat, and Max Liani. 2018. [RenderMan: An Advanced Path Tracing Architecture for Movie Rendering](https://doi.org/10.1145/3182162). _ACM Transactions on Graphics_. 37, 3 (2018), Article 30.

Per H. Christensen, Julian Fong, Charlie Kilpatrick, Francisco Gonzalez Garcia, Srinath Ravichandran, Akshay Shah, Ethan Jaszewski, Stephen Friedman, James Burgess, Trina M. Roy, Tom Nettleship, Meghana Seshadri, and Susan Salituro, 2025. [RenderMan XPU: A Hybrid CPU+GPU Renderer for Interactive and Final-Frame Rendering](https://doi.org/10.1111/cgf.70218). _Computer Graphics Forum (Proc. of High Performance Graphics)_ 44, 8 (Jun. 2025), Article e70218.

Ana Dodik, Marios Papas, Cengiz Öztireli, and Thomas Müller. 2022. [Path Guiding Using Spatio-Directional Mixture Models](https://doi.org/10.1111/cgf.14428). _Computer Graphics Forum (Proc. of Eurographics)_ 41, 1 (Feb. 2022), 172-189.

Christian Eisenacher, Gregory Nichols, Andrew Selle, and Brent Burley. 2013. [Sorted Deferred Shading for Production Path Tracing](https://doi.org/10.1111/cgf.12158). _Computer Graphics Forum_. 32, 4 (2013), 125-132.

Sebastian Herholz, Yangyang Zhao, Oskar Elek, Derek Nowrouzezahrai, Hendrik P. A. Lensch, and Jaroslav Křivánek. 2019. [Volume Path Guiding Based on Zero-Variance Random Walk Theory](https://doi.org/10.1145/3230635). _ACM Transactions on Graphics (Proc. of SIGGRAPH)_ 38, 3 (Jun 2019), Article 25.

Thomas Müller, Markus Gross, and Jan Novák. 2017. [Practical Path Guiding for Efficient Light-Transport Simulation](https://doi.org/10.1111/cgf.13227). _Computer Graphics Forum (Proc. of Eurographics Symposium on Rendering)_ 36, 4 (Jun. 2017), 91-100.

Thomas Müller. 2019. [Practical Path Guiding in Production](https://cgg.mff.cuni.cz/~jaroslav/papers/2019-path-guiding-course/index.htm). In _ACM SIGGRAPH 2019 Course Notes: [Path Guiding in Production](https://cgg.mff.cuni.cz/~jaroslav/papers/2019-path-guiding-course/index.htm)_. 37-50.

Alexander Rath, Marco Manzi, Farnood Salehi, Sebastian Weiss, Tiziano Portenier, Saeed Hadadan, and Marios Papas. 2025. [Neural Resampling with Optimized Candidate Allocation](https://doi.org/10.2312/sr.20251181). In _Proc. of Eurographics Symposium on Rendering (EGSR 2025)_. Article 20251181.

Lukas Ruppert, Sebastian Herholz, and Hendrik P. A. Lensch. 2020. [Robust Fitting of Parallax-Aware Mixtures for Path Guiding](https://doi.org/10.1145/3386569.3392421). _ACM Transactions on Graphics (Proc. of SIGGRAPH)_ 39, 4 (Aug 2020), Article 147.

Jiří Vorba, Johannes Hanika, Sebastian Herholz, Thomas Müller, Jaroslav Křivánek, and Alexander Keller. 2019. [Path Guiding in Production](https://cgg.mff.cuni.cz/~jaroslav/papers/2019-path-guiding-course/index.htm). In _ACM SIGGRAPH 2019 Courses_. Article 18.

Kehan Xu, Sebastian Herholz, Marco Manzi, Marios Papas, and Markus Gross. 2024. [Volume Scattering Probability Guiding](https://doi.org/10.1145/3687982). _ACM Transactions on Graphics (Proc. of SIGGRAPH Asia)_ 43, 6 (Nov. 2024), Article 184.
