---
layout: post
title: Omjii+Wordpress=New Blogging System
tags: [Coding, Announcements, Omjii]
author: Yining Karl Li
---

As you can see, my blog looks different from what it looked like a few days back! What's going on?

Omjii Blogs is getting a massive massive overhaul, that's what's going on.

8 months ago, Jason, Chris, and I announced the [Omjii Blog System](http://omjii.com/blog/karu/2009/10/31/omjii-blog-engine-preview/), a blogging engine derived from the Omjii Comic System powering our little webcomic. Initially the creation of the Omjii Blog System was meant to be just an exercise in designing and coding a basic dynamic content management system. This meant that the Omjii Blog System took shape as a relatively simple blogging engine that delivered the core functionality of a blog, but omitted a lot of the bells and whistles offered by systems built by people who actually know what they are doing, such as WordPress or Movable Type or Blogger. We invited our friends to try out the Omjii Blog System and give the system a general real-life usage test in order to evaluate how good of a job we did. After 8 months of continuous use, I think we can safely say that the Omjii Blog System successfully met our goal of a simple, lightweight content management system.

However, in those 8 months, the test blogs that started on the Omjii Blog System developed into full-fledged actual blogs, regularly updated by their authors. Omjii Blogs now faces a very different purpose from its original purpose- initially designed as an academic exercise, Omjii Blogs is now supporting live, actual blogs by our friends. Now that Omjii Blogs is a real life, albeit very small, blogging platform, we need to be able to address all of the blogging needs of our users- needs that the Omjii Blog System was not designed to handle. As a result, we have decided to move forward with deploying a modified version of [WordPress MultiUser](http://mu.wordpress.org/) on Omjii Blogs. Most of the modifications made to WordPress MU were to integrate WordPress MU into our existing Omjii system and to ensure backward compatibility with the Omjii Blog System. All Omjii blogs will be migrated from the Omjii Blog System to the much more powerful WordPress MU system. So what does this change mean? Here are four of the many new changes:

1. Better, faster, more robust editing tools. While writing a post, you can now switch between visual and HTML modes to get your post to look exactly the way you want it to look. Inserting images and videos from Youtube, Vimeo, etc. is now much easier as well.

2. File uploads. You can now upload images, music files, video files, documents, PDFs, pretty much anything you please (minus a few security related restrictions, such as PHP files) to a folder in your blog.

3. Configurable layouts. Instead of being restricted to the standard Omjii layout of the Omjii Blog System, you can now stack text, navigation elements, widgets, etc. any way you please.

4. Themes. Instead of having to stick with the preset Omjii look and style, you can make your blog look any way you want by using WordPress themes. All standard WordPress themes work with our Omjii variant of WordPress MU, although some themes require minor tweaking to work. For that reason, before you can apply a new theme you have picked out, we need to screen the theme first to make sure necessary tweaks are made. Don't worry, we won't stand in the way of your creativity and refuse the use of any themes. Our tweaks also won't change the outward appearance of the theme, the tweaks are only made to the underlying mechanics that run the theme.

Here are some examples of themes, demonstrated with the [Emma Blog](http://www.omjii.com/emma). The Omjii Blog System look is on the left, WordPress themes are displayed to the right:

[![](/content/images/2010/Jun/wordpress_screen1.jpg)](/content/images/2010/Jun/wordpress_screen1.jpg)

[![](/content/images/2010/Jun/wordpress_screen2.jpg)](/content/images/2010/Jun/wordpress_screen2.jpg)

[![](/content/images/2010/Jun/wordpress_screen3.jpg)](/content/images/2010/Jun/wordpress_screen3.jpg)

[![](/content/images/2010/Jun/wordpress_screen4.jpg)](/content/images/2010/Jun/wordpress_screen4.jpg)

Applying a new theme doesn't require any coding or messy work at all. All you have to do is click a button. The new themes functionality brought to Omjii Blogs by the adoption of WordPress MU is really really cool.

The modifications we've made to WordPress MU are for getting WordPress MU to integrate into Omjii's existing user system and to ensure backward compatibility with the Omjii Blog System. So what does that mean?

1. Nothing has changed about how you log into Omjii. Just as before, logging in is done through the Switcheroo tool and the main Omjii site is still the same Omjii you know and (hopefully) love. However, when you sign in to your Omjii account, you will also be automatically signed into Omjii's WordPress MU system as well, so you can start posting without having to dig around for a new login page on Omjii. You can also sign in separately to WordPress MU.

2. Every last bit of content that was written and posted on the Omjii Blog System will show up in WordPress MU. We have added a layer to WordPress MU that allowed WordPress MU to be able to read, understand, and import posts from the Omjii Blog System. Your Omjii Blog will now sport a new look due to WordPress MU, but not a single word you wrote has been lost in the process.

3. Similar to how all of your content remains intact in WordPress MU, all of the metadata surrounding your posts also remain intact. Facebook Comments made to your posts on the Omjii Blog System show up completely intact in WordPress MU as if no change ever occurred. Even all of your permalinks are intact- going to a permalink for a post originally written in the Omjii Blog System will now lead to the same post in your WordPress MU powered blog. Even your RSS feed works just like it always has- you don't even need to point subscribers at a new RSS feed location.

We've worked hard to make sure that the transition from the Omjii Blog System to WordPress MU will be perfectly smooth and absolutely seamless. Happy blogging!
