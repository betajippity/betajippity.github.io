---
layout: post
title: Pathtracer Time
tags: [Coding, Pathtracer]
author: Yining Karl Li
---

This semester I am setting out on an independent study under the direction of [Joe Kider](http://www.graphics.cornell.edu/~kiderj/) to build a pathtracer (obviously inspired by my friend and fellow DMD student [Peter Kutz](http://peterkutz.com/computergraphics/)). Global illumination rendering techniques are becoming more and more relevant in industry today as hardware performance in the past few years has begun to reach a point where GI in commercial productions is suddenly no longer unfeasibly expensive. Some houses like Sony Imageworks have already moved to full GI renderers like Arnold, while other studios like Pixar are in the process of adopting GI based renderers or extending their existing renderers to support GI lighting. This industry move, coupled with the fact that GI quite simply produces [very](http://vimeo.com/15630517) [pretty](http://vimeo.com/7809605) [results](http://vimeo.com/5407991), sparked my initial interesting in GI techniques like pathtracing. Having built a basic raytracer last semester, I decided in typical over-confident style: "how hard could it be?"

Here's my project abstract:

_Both path tracing and bidirectional scatter distribution functions (BSDFs) are ideas that have existed within the field of computer graphics for many years and have seen numerous implementations in a variety of rendering pack- ages. Similarly, creating images of convincing plant life is a technical challenge that a host of solutions now exist for. However, achieving dynamic plant effects such as the change of a plants coloring during the transition from summer to fall is a task that to date has been mostly been accomplished using procedural techniques and various compositing tricks._

_The goal of this project is to build a path tracing based renderer that is designed specifically with the intent to facil- itate achieving dynamic plant effects with a more physically based approach by introducing a new time component to the existing bidirectional scatter distribution model. By allowing BSDFs to vary over not only space but also over time, plant effects such as leaf decay could be achieved through shaders with appearances that are driven through physically based mathematical models instead of procedural techniques. In other words, this project has two main prongs: develop a robust path tracer with at least basic functionality, and then develop and implement a time- dependent BSDF model within the path tracer._

...and here's some background that I wrote up for my proposal...

_**1. INTRODUCTION**_

_Efficiently rendering convincing images with direct and indirect lighting has been a major problem in the field of computer graphics since the field’s very inception, as con- vincingly realistic graphics in games and movies depends upon lighting that can accurately mimic that of reality. Known generally as global illumination, the indirect light- ing problem has in the past decade seen a number of solu- tions such as path tracing and photon mapping that can generate convincingly realistic images with reasonable computational resource consumption and efficiency.
One of the key discoveries that enabled the development of modern global illumination techniques is the concept of Bidirectional Scattering Distribution Functions, or BSDFs. Developed as a superset and generalization of two other concepts known as bidirectional reflectance distribution functions (BRDFs) and bidirectional transmittance distribu- tion functions (BTDFs), BSDF is a general mathematical function that describes how light is scattered by a certain surface, given the material properties of the surface. BSDFs are useful today for representing the material properties of an object at a single point in time; however, in reality mate- rial properties can change and morph over time, as exem- plified by the natural phenomena of leaf color changes from summer to fall.
This project will attempt to build a prototype of a path tracing renderer with a BSDF model modified to include an additional time component to allow for material properties to change over time in a way representative of how material properties change over time in reality. The hope is that
such a renderer will prove to be useful in future attempts to recreate natural phenomena using physically based models, such as leaf decay._

...and the actual goal of the project... 

_**1.1 Design Goals**_

_The project’s goal is to develop a reasonably robust and efficient path tracing renderer with a BSDF model modified to include an additional time component. In order to prove the feasibility of such a modified BSDF model, the end goal is to be able to use the renderer to produce images of plant life with changing surface material properties, in addition to standard test image such as Cornell Box tests that validate the functionality of the underlying basic path tracer._

...and finally, what I'm hoping I'll actually be able to produce at the end of this independent study:

_1.2 **Projects Proposed Features and Functionality**_

_The proposed renderer should allow a user to load a sce- ne with an arbitrary number of lights, materials, and objects and render out a realistic, global illumination based render. The renderer should be able to render implicitly defined objects such as spheres and cubes in addition to meshes defined in the .obj format. The renderer should also allow users to specify changes in object/light/camera transfor- mations over time in addition to changes in materials and BSDFs over time and render out a series of frames showing the scene at various points in time. A graphical interface would be a nice additional feature, but is not a priority of this project._

I'll be posting at least weekly updates to this blog showing my progress. In my next post, I'll go over some of the papers and sources Joe gave me to look over and explain some of the basic mechanics of how a pathtracer works. Apologies for the casual reader for this particular post being extremely text heavy; I shall have images to show soon!
