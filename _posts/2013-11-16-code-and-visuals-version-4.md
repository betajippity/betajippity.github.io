---
layout: post
title: Code & Visuals Version 4.0
tags: [Announcements]
author: Yining Karl Li
---

I'd like to introduce the newest version of my computer graphics blog, Code & Visuals! On the surface, everything has been redesigned with a new layer of polish; everywhere, the site is now simpler, cleaner, and the layout is now fully responsive. Under the hood, I've moved from Blogger to [Jekyll](http://jekyllrb.com/), hosted on [Github Pages](http://pages.github.com/).

As part of the move to Jekyll, I've opted to clean up a lot of old posts as well. This blog started as some combination of a devblog, doodleblog, and photoblog, but quickly evolved into a pure computer graphics blog. In the interest of keeping historical context intact, I've ported over most of my older non-computer graphics posts, with minor edits and touchups here and there. A handful of posts I didn't really like I've chosen to leave behind, but they can still be found on the [old Blogger-based version of this blog](http://yiningkarlli.blogspot.com).

The Atom feed URL for Code & Visuals is still the same as before, so that should transition over smoothly.

Why the move from Blogger to Jekyll/Github Pages? Here are the main reasons:

* Markdown/Github support. Blogger's posting interface is all kinds of terrible. With Jekyll/Github Pages, writing a new post is super nice: simply write a new post in a Markdown file, push to Github, and done. I love Markdown and I love Github, so its a great combo for me.
* Significantly faster site. Previous versions of this blog have always been a bit pokey speed-wise, since they relied on dynamic page generators (originally my hand-rolled PHP/MySQL CMS, then Wordpress, and then Blogger). However, Jekyll is a static page generator; the site is converted from Markdown and template code into static HTML/CSS once at generation time, and then simply served as pure HTML/CSS.
* Easier templating system. Jekyll's templating system is build on [Liquid](http://liquidmarkup.org/), which made building this new theme really fast and easy.
* Transparency. This entire blog's source is now [available on Github](https://github.com/betajippity/betajippity.github.io), and the theme is separately [available here](https://github.com/betajippity/codeandvisuals-theme).

I've been looking to replace Blogger for some time now. Before trying out Jekyll, I was tinkering with [Ghost](https://ghost.org/), and even fully built out a working version of Code & Visuals on a self-hosted Ghost instance. In fact, this current theme was originally built for Ghost and then ported to Jekyll after I decided to use Jekyll (both the Ghost and Jekyll versions of this theme are in the Github repo). However, Ghost as a platform is still extremely new and isn't quite ready for primetime yet; while Ghost's Markdown support and Node.js underpinnings are nice, Ghost is still missing crucial features like the ability to have an archive page. Plus, at the end of the day, Jekyll is just plain simpler; Ghost is still a CMS, Jekyll is just a collection of text files.

I intend to stay on a Jekyll/Github Pages based solution for a long time; I am very very happy with this system. Over time, I'll be moving all of my other couple of non-computer graphics blogs over to Jekyll as well. I'm still not sure if my main website needs to move to Jekyll though, since it already is coded up as a series of static pages and requires a slightly more complex layout on certain pages.

Over the past few months I haven't posted much, since over the summer almost all of my Pixar related work was under heavy NDA (and still is and will be for the foreseeable future, with the exception of [our SIGGRAPH demo](http://blog.yiningkarlli.com/2013/07/pixar-optix-lighting-preview-demo.html)), and a good deal of my work at Cornell's Program for Computer Graphics is under wraps as well while we work towards paper submissions. However, I have some new personal projects I'll write up soon, in addition to some older projects that I never posted about.

With that, welcome to Code & Visuals Version 4.0!
