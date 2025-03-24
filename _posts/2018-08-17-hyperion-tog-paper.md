---
layout: post
title: Transactions on Graphics Paper- The Design and Evolution of Disney's Hyperion Renderer
tags: [Hyperion, TOG, SIGGRAPH]
author: Yining Karl Li
---

The August 2018 issue of [ACM Transactions on Graphics](https://tog.acm.org) (Volume 37 Issue 3) is partially a special issue on production rendering, featuring five systems papers describing notable, major production renderers in use today.
I got to contribute to one of these papers as part of the Hyperion team at Walt Disney Animation Studios!
Our paper, titled "The Design and Evolution of Disney's Hyperion Renderer", discusses exactly what the title suggests.
We present a detailed look inside how Hyperion is designed today, discuss the decisions that went into its current design, and examine how Hyperion has evolved since the original EGSR 2013 "[Sorted Deferred Shading for Production Path Tracing](https://disney-animation.s3.amazonaws.com/uploads/production/publication_asset/70/asset/Sorted_Deferred_Shading_For_Production_Path_Tracing.pdf)" paper that was the start of Hyperion.
A number of Hyperion developers contributed to this paper as co-authors, along with Hank Driskill, who was the technical supervisor on Big Hero 6 and Moana and was one of the key supporters of Hyperion's early development and deployment.

[![Image from paper Figure 1: Production frames from Big Hero 6 (upper left), Zootopia (upper right), Moana (bottom left), and Olaf’s Frozen Adventure (bottom right), all rendered using Disney’s Hyperion Renderer.]({{site.url}}/content/images/2018/Aug/preview/design_of_hyperion.jpg)]({{site.url}}/content/images/2018/Aug/design_of_hyperion.png)

Here is the paper abstract:

> Walt Disney Animation Studios has transitioned to path-traced global illumination as part of a progression of brute-force physically based rendering in the name of artist efficiency. To achieve this without compromising our geometric or shading complexity, we built our Hyperion renderer based on a novel architecture that extracts traversal and shading coherence from large, sorted ray batches. In this article, we describe our architecture and discuss our design decisions. We also explain how we are able to provide artistic control in a physically based renderer, and we demonstrate through case studies how we have benefited from having a proprietary renderer that can evolve with production needs.

The paper and related materials can be found at:

* [Project Page (Author's Version)](https://www.yiningkarlli.com/projects/hyperiondesign.html)
* [Official Print Version (ACM Library)](https://dl.acm.org/citation.cfm?doid=3243123.3182159)

We owe a huge thanks to [Matt Pharr](https://pharr.org/matt/), who came up with the idea for a TOG special issue on production rendering and coordinated the writing of all of the papers, and [Kavita Bala](http://www.cs.cornell.edu/~kb/), who as editor-in-chief of TOG supported all of the special issue papers.
This issue has actually been in the works for some time; Matt Pharr contacted us over a year ago about putting together a special issue, and we began work on our paper in May 2017.
Matt and Kavita generously gave all of the contributors to the special issue a significant amount of time to write, and Matt provided a lot of valuable feedback and suggestions to all five of the final papers.
The end result is, in my opinion, something special indeed.
The five rendering teams that contributed papers in the end were Solid Angle's Arnold, Sony Imageworks' Arnold, Weta Digital's Manuka, Pixar's Renderman, and ourselves.
All five of the papers in the special issue are fascinating, well-written, highly technical rendering systems papers (as opposed to just marketing fluff), and absolutely worth a read!

Something important that I want to emphasize here is that the author lists for all five papers are somewhat deceptive.
One might think that the author lists represent all of the people responsible for each renderers' success; this idea is, of course, inaccurate.
For Hyperion, the authors on this paper represent just a small fraction of all of the people responsible for Hyperion's success.
Numerous engineers not on the author list have made significant contributions to Hyperion in the past, and the project relies enormously on all of the QA engineers, managers/leaders, TDs, artists, and production partners that test, lead, deploy, and use Hyperion every day.
We also owe an enormous amount to all of the researchers that we have collaborated directly with, or who we haven't collaborated directly with but have used their work.
The success of every production renderer comes not just from the core development team, but instead from the entire community of folks that surround a production renderer; this is just as true for Hyperion as it is for Renderman, Arnold, Manuka, etc.
The following is often said in our field but nonetheless true: building an advanced production renderer in a reasonable timeframe really is only possible through a massive team effort.

This summer, in addition to publishing this paper, members of the Hyperion team also presented the following at SIGGRAPH 2018:

* Peter Kutz was on the "[Design and Implementation of Modern Production Renderers](https://dl.acm.org/citation.cfm?id=3214901)" panel put together by Matt Pharr to discuss the five TOG production rendering papers. Originally Brent Burley was supposed to represent the Hyperion team, but due to some outside circumstances, Brent wasn't able to make it to SIGGRAPH this year, so Peter went in Brent's place.
* Matt Jen-Yuan Chiang presented a talk on rendering eyes, titled "[Plausible Iris Caustics and Limbal Arc Rendering](https://dl.acm.org/citation.cfm?id=3214751)", in the "It's a Material World" talks session.
