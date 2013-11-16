---
layout: post
title: Stuff About Fonts
tags: [Announcements, Omjii, Coding, Typography]
author: Yining Karl Li
---

Just a quick note:

Today we've added a nifty little addition to Omjii's Switcheroo tool- Typesetting options!

[![]({{site.url}}/content/images/2010/Jan/switcherootypeset.png)]({{site.url}}/content/images/2010/Jan/switcherootypeset.png)

Up to now, the site has been typeset exclusively with Omjii's custom YiningStyle Mark II font (download link [here](http://www.omjii.com/css/fonts/YiningStyleMarkII.ttf)). We've been accomplishing custom typesetting through the use of the @font-face rules that are in CSS3, meaning all HTML5/CSS3 compliant browsers (Firefox 3.5 and up, Safari 4 and up, Chrome 2 and up, etc) have been displaying Omjii with our custom font. Internet Explorer users see the site typeset in Arial since IE has really bizarre support for @font-face (don't worry, we're working on a workaround).

Now, however, you can use the Switcheroo tool to retypeset the site in Helvetica! We're implemented this new option due to request by several readers (Mindy was particularly outspoken about this). We'll add other fonts in the future.

The Switcheroo Typeset option works like all other Switcheroo options.

On a related note, if you're on a PC and have noticed that the Omjii font (and all other fonts on your computer, for that matter) looks jagged, the reason is probably because you have ClearType turned off. ClearType is Windows' font-smoothing option for the Windows font renderer. Basically, font-smoothing is a method for making fonts on computer screens look less jagged and more, well, smooth. Mac OSX users, don't worry about this, OSX smooths fonts by default.

A visual example might be the best way to explain the difference between font-smoothing and sans font-smoothing. Here's Omjii's font sans font-smoothing:

![{{site.url}}/content/images/2010/Jan/fontwrong.png]({{site.url}}/content/images/2010/Jan/fontwrong.png)

...and here with font-smoothing:

![{{site.url}}/content/images/2010/Jan/fontright.png]({{site.url}}/content/images/2010/Jan/fontright.png)

Clearly, font-smoothing looks much nicer!
