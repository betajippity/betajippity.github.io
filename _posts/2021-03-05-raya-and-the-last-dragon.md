---
layout: post
title: Raya and the Last Dragon
tags: [Films]
author: Yining Karl Li
---

After a break in 2020, [Walt Disney Animation Studios](http://www.disneyanimation.com/) has two films lined up for release in 2021!
The first of these is [Raya and the Last Dragon](https://www.disneyanimation.com/films/), which is simultaneously out in theaters and available on [Disney+ Premiere Access](http://www.disneyplus.com/) on the day this post is being released.
I've been working on Raya and the Last Dragon in some form or another since early 2018, and Raya and the Last Dragon is the first original film I've worked on at Disney Animation that I was able to witness from the very earliest idea all the way through to release; every other project I've worked on up until now was either based on a previous idea or began before I started at the studio.
Raya and the Last Dragon was an incredibly difficult film to make, in every possible aspect.
The story took time to really get right, the technology side of things saw many challenges and changes, and the main production of the film ran headfirst into the Covid-19 pandemic.
Just as production was getting into the swing of things last year, the Covid-19 pandemic forced the physical studio building to temporarily shut down, and the studio's systems/infrastructure teams had to scramble and go to heroic lengths to get production back up and running again from around 400 different homes.
As a result, Raya and the Last Dragon is the first Disney Animation film made entirely from our homes instead of from the famous "hat building".

In the end though, all of the trials and tribulations this production saw were more than worthwhile; Raya and the Last Dragon is the most beautiful film we've ever made, and the movie has a message and story about trust that is deeply relevant for the present time.
The Druun as a concept and villain in Raya and the Last Dragon actually long predate the Covid-19 pandemic; they've been a part of every version of the movie going back years, but the Druun's role in the movie's plot meant that the onset of the pandemic suddenly lent extra weight to this movie's core message.
Also, as someone of Asian descent, I'm so so proud that Raya and the Last Dragon's basis is found in diverse Southeast Asian cultures.
Early in the movie's conceptualization, before the movie even had a title or a main character, the movie's producers and directors and story team reached out to all of the people in the studio of Asian descent and engaged us in discussing how the Asian cultures we came from shaped our lives and our families.
These discussions continued for years throughout the production process, and throughlines from those discussions can be seen everywhere from the movie, from major thematic elements like the importance of food and sharing meals in the world of Kumandra, all the way down to tiny details like young Raya taking off her shoes when entering the Dragon Gem chamber.
The way I get to contribute to our films is always in the technical realm, but thanks to Fawn Veerasunthorn, Scott Sakamoto, Adele Lim, Osnat Shurer, Paul Briggs, and Dean Wellins, this is the first time where I feel like I maybe made some small, tiny, but important contribution creatively too!
Raya and the Last Dragon has spectacular fight scenes with real combat, and the fighting styles aren't just made up- they're directly drawn from Thailand, Malaysia, Cambodia, Laos, and Vietnam.
Young Raya's fighting sticks are Filipino Arnis sticks, the food in the film is recognizably dishes like fish amok, tom yam, chicken satay and more, Raya's main mode of transport is her pet Tuk Tuk, who has the same name as those motorbike carriages that can be found all over Southeast Asia; the list goes on and on.

From a rendering technology perspective, Raya and the Last Dragon in a lot of ways represents the culmination of a huge number of many-year-long initiatives that began on previous films.
Water is a huge part of Raya and the Last Dragon, and the water in the film looks so incredible because we've been able to build even further upon the water authoring pipeline [[Palmer et al. 2017]](https://dl.acm.org/citation.cfm?id=3085067) that we first built on [Moana](https://blog.yiningkarlli.com/2016/11/moana.html) and improved on [Frozen 2](https://blog.yiningkarlli.com/2019/11/froz2.html).
One small bit of rendering tech I worked on for this movie was further improving the robustness and stability of the water levelset meshing system that we first developed on Moana.
Other elements of the film, such as being able to render convincing darker skin and black hair, along with the colorful fur of the dragons, are the result of multi-year efforts to productionize path traced subsurface scattering [[Chiang et al. 2016b]](https://doi.org/10.1145/2897839.2927433) (first deployed on [Ralph Breaks the Internet](https://blog.yiningkarlli.com/2018/11/wir2.html)) and a highly artistically controllable principled hair shading model [[Chiang et al. 2016a]](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12830) (first deployed on [Zootopia](https://blog.yiningkarlli.com/2016/02/zootopia.html)).
The huge geometric complexity challenges that we've had to face on all of our previous projects prepared us for rendering Raya and the Last Dragon's setting, the vast world of Kumandra.
Even more niche features, such as our adaptive photon mapping system [[Burley et al. 2018]](https://dl.acm.org/citation.cfm?id=3182159), proved to be really useful on this movie, and even saw new improvements- Joe Schutte added support for more geometry types to the photon mapping system to allow for caustics to be cast on Sisu whenever Sisu was underwater.
Raya and the Last Dragon also contains a couple of more stylized sequences that look almost 2D, but even these sequences were rendered using Hyperion!
These more stylized sequences build upon the 3D-2D hybrid stylization experience that Disney Animation has gained over the years from projects such as [Paperman](https://www.disneyanimation.com/shorts/paperman/), [Feast](https://www.disneyanimation.com/shorts/feast/), and many of the [Short Circuit shorts](https://www.disneyplus.com/series/walt-disney-animation-studios-short-circuit-experimental-films/3S2DLVtMPA7V) [[Newfield and Staub 2020]](https://dl.acm.org/doi/10.1145/3388767.3409267).
I think all of the above is really what makes a production renderer a _production_ renderer- years and years of accumulated research, development, and experience over a variety of challenging projects forging a powerful, reliable tool custom tailored to our artists' work and needs.
Difficult problems are still difficult, but they're no longer scary, because now, we've seen them before!

For this movie though, the single biggest rendering effort by far was on volume rendering.
After encountering many volume rendering challenges on Moana, our team undertook an effort to replace Hyperion's previous volume rendering system [[Fong et al. 2017]](https://doi.org/10.1145/3084873.3084907) with a brand new, from scratch implementation based on new research we had conducted [[Kutz et al. 2017]](https://doi.org/10.1145/3072959.3073665).
The new system first saw wide deployment on Ralph Breaks the Internet, but all things considered, the volumes use cases on Ralph Breaks the Internet didn't actually require us to encounter the types of difficult cases we ran into on Moana, such as ocean foam and spray.
Frozen 2 was really the show where we got a second chance at tackling the ocean foam and spray and dense white clouds cases that we had first encounted on Moana, and new challenges on Frozen 2 with thin volumes gave my teammate Wayne Huang the opportunity to make the new volume rendering system even better.
Raya and the Last Dragon is the movie where I feel like all of the past few years of development on our modern volume rendering system came together- this movie threw every single imaginable type of volume rendering problem at us, often in complex combinations with each other.
On top of that, Raya and the Last Dragon has volumes in basically every single shot; the highly atmospheric, naturalistic cinematography on this film demanded more volumes than we've ever had on any past movie.
Wayne really was our MVP in the volume rendering arena; Wayne worked with our lighters to introduce a swath of powerful new tools to give artists unprecedented control and artistic flexibility in our modern volume rendering system [[Bryant et al. 2021]](https://doi.org/10.1145/3450623.3464676), and Wayne also made huge improvements in the volume rendering system's overall performance and efficiency [[Huang et al. 2021]](https://doi.org/10.1145/3450623.3464644).
We now have a single unified volume integrator that can robustly handle basically every volume you can think of: fog, thin atmospherics, fire, smoke, thick white clouds, sea foam, and even highly stylized effects such as the dragon magic [[Navarro & Rice 2021]](https://doi.org/10.1145/3450623.3464652) and the chaotic Druun characters [[Rice 2021]](https://doi.org/10.1145/3450623.3464647) in Raya and the Last Dragon.

A small fun new thing I got to do for this movie was to add support for arbitrarily custom texture-driven camera aperture shapes.
Raya and the Last Dragon's cinematography makes extensive use of shallow depth-of-field, and one idea the film's art directors had early on was to stylize bokeh shapes to resemble the Dragon Gem.
Hyperion has long had extensive support for fancy physically-based lensing features such as uniformly bladed apertures and cateye bokeh, but the request for a stylized bokeh required much more art-directability than we previously had in this area.
The texture-driven camera aperture feature I added to Hyperion is not necessarily anything innovative (similar features can be found on many commercial renderers), but iterating with artists to define and refine the feature's controls and behavior was a lot of fun.
There were also a bunch of fun nifty little details to solve, such as making sure that importance sampling ray directions based on a arbitrary textured aperture didn't mess up stratified sampling and Sobol distributions; repurposing hierarchical sample warping [[Clarberg et al. 2005]](https://dl.acm.org/doi/10.1145/1073204.1073328) wound up being super useful here.

There are a ton more really cool technical advancements that were made for Raya and the Last Dragon, and there were also several really ambitious, inspiring, and potentially revolutionary projects that just barely missed being deployed in time for this movie.
One extremely important point I want to highlight is that, as cool as all of the tech that we develop at Disney Animation is, at the end of the day our tech and tools are only as good as the artists that use them every day to handcraft our films.
Hyperion only renders amazing films because the artists using Hyperion are some of the best in the world; I count myself as super lucky to be able to work with my teammates and with our artists every day.
At SIGGRAPH 2021, most of the talks about Raya and the Last Dragon are actually from our artists, not our engineers!
Our artists had to come up with new crowd simulation techniques for handling the huge crowds seen in the movie [\[Nghiem 2021](https://doi.org/10.1145/3450623.3464650), [Luceño Ros et al. 2021\]](https://doi.org/10.1145/3450623.3464648), new cloth simulation techniques for all of the beautiful, super complex outfits worn by all of the characters [\[Kaur et al. 2021](https://doi.org/10.1145/3450623.3464660), [Kaur & Coetzee 2021\]](https://doi.org/10.1145/3450623.3464659), and even new effects techniques to simulate cooking delicious Southeast Asia-inspired food [[Wang & Mayeda 2021]](https://doi.org/10.1145/3450623.3464651).

Finally, here are a bunch of stills from the movie, 100% rendered using Hyperion.
Normally I post somewhere between 40 to 70 stills per film, but I had so many favorite images from Raya and the Last Dragon that for this post, there are considerably more.
You may notice what looks like noise in the stills below- it's not noise!
The actual renders are super clean thanks to Wayne's volumes work and David Adler's continued work on our Disney-Research-tech-based deep learning denoising system [\[Dahlberg et al. 2019](https://dl.acm.org/citation.cfm?id=3328150), [Vogels et al. 2018\]](https://doi.org/10.1145/3197517.3201388), but the film's cinematography style called for adding film grain back in after rendering.

I've pulled these from marketing materials, trailers, and Disney+; as usual, I'll try to update this post with higher quality stills once the film is out on Bluray.
Of course, the stills here are just a few of my favorites, and represent just a tiny fraction of the incredible imagery in this film.
If you like what you see here, I'd strongly encourage seeing the film on Disney+ or on Blu-Ray; whichever way, I suggest watching on the biggest screen you have available to you!

To try to help avoid spoilers, the stills below are presented in no particular order; however, if you want to avoid spoilers entirely, then please go watch the movie first and then come back here to be able to appreciate each still on its own!

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_007.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_007.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_001.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_001.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_043.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_043.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_109.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_109.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_024.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_024.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_061.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_061.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_068.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_068.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_107.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_107.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_016.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_016.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_038.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_038.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_113.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_113.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_029.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_029.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_053.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_053.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_076.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_076.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_027.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_027.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_078.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_078.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_095.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_095.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_101.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_101.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_074.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_074.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_066.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_066.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_015.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_015.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_018.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_018.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_063.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_063.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_084.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_084.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_093.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_093.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_119.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_119.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_087.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_087.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_110.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_110.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_099.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_099.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_077.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_077.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_081.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_081.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_060.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_060.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_032.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_032.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_004.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_004.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_013.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_013.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_011.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_011.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_012.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_012.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_047.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_047.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_050.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_050.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_055.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_055.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_056.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_056.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_064.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_064.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_071.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_071.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_089.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_089.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_091.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_091.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_116.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_116.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_124.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_124.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_121.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_121.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_082.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_082.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_083.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_083.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_096.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_096.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_017.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_017.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_040.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_040.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_041.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_041.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_048.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_048.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_057.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_057.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_069.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_069.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_086.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_086.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_092.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_092.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_125.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_125.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_105.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_105.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_034.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_034.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_045.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_045.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_006.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_006.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_023.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_023.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_031.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_031.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_039.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_039.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_021.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_021.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_037.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_037.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_042.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_042.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_005.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_005.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_020.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_020.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_002.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_002.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_052.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_052.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_062.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_062.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_103.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_103.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_070.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_070.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_075.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_075.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_033.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_033.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_072.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_072.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_079.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_079.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_085.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_085.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_051.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_051.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_035.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_035.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_014.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_014.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_104.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_104.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_114.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_114.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_115.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_115.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_022.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_022.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_028.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_028.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_046.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_046.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_054.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_054.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_100.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_100.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_067.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_067.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_112.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_112.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_123.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_123.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_073.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_073.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_065.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_065.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_122.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_122.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_080.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_080.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_003.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_003.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_025.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_025.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_036.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_036.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_049.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_049.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_008.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_008.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_059.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_059.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_030.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_030.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_117.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_117.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_118.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_118.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_120.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_120.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_088.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_088.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_102.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_102.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_090.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_090.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_106.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_106.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_044.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_044.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_009.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_009.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_026.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_026.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_058.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_058.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_098.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_098.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_010.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_010.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_019.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_019.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_097.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_097.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_108.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_108.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_111.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_111.jpg)

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_094.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_094.jpg)

Here is the credits frame for Disney Animation's rendering and visualization teams! The rendering and visualization teams are separate teams, but seeing them grouped together in the credits is very appropriate- we all are dedicated to making the best pixels possible for our films!

[![]({{site.url}}/content/images/2021/Mar/raya/RAYA_credits.jpg)]({{site.url}}/content/images/2021/Mar/raya/RAYA_credits.jpg)

All images in this post are courtesy of and the property of Walt Disney Animation Studios.

Also, one more thing: in theaters (and also on Disney+ starting in the summer), Raya and the Last Dragon is accompanied by our first new theatrical short in 5 years, called Us Again.
Us Again is one of my favorite shorts Disney Animation has ever made; it's a joyous, visually stunning celebration of life and dance and music.
I'll probably dedicate a separate post to Us Again once it's out on Disney+.

**References**

Brent Burley, David Adler, Matt Jen-Yuan Chiang, Hank Driskill, Ralf Habel, Patrick Kelly, Peter Kutz, Yining Karl Li, and Daniel Teece. 2018. [The Design and Evolution of Disney’s Hyperion Renderer](https://dl.acm.org/citation.cfm?id=3182159). _ACM Transactions on Graphics_. 37, 3 (2018), 33:1-33:22.

Marc Bryant, Ryan DeYoung, Wei-Feng Wayne Huang, Joe Longson, and Noel Villegas. 2021. [The Atmosphere of Raya and the Last Dragon](https://doi.org/10.1145/3450623.3464676). In _ACM SIGGRAPH 2021 Talks_. 51:1-51:2.

Matt Jen-Yuan Chiang, Benedikt Bitterli, Chuck Tappan, and Brent Burley. 2016. [A Practical and Controllable Hair and Fur Model for Production Path Tracing](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12830). _Computer Graphics Forum_. 35, 2 (2016), 275-283.

Matt Jen-Yuan Chiang, Peter Kutz, and Brent Burley. 2016. [Practical and Controllable Subsurface Scattering for Production Path Tracing](https://doi.org/10.1145/2897839.2927433). In _ACM SIGGRAPH 2016 Talks_. 49:1-49:2.

Petrik Clarberg, Wojciech Jarosz, Tomas Akenine-Möller, and Henrik Wann Jensen. 2005. [Wavelet Importance Sampling: Efficiently Evaluating Products of Complex Functions](https://dl.acm.org/doi/10.1145/1073204.1073328). _ACM Transactions on Graphics_. 24, 3 (2005), 1166-1175.

Henrik Dahlberg, David Adler, and Jeremy Newlin. 2019. [Machine-Learning Denoising in Feature Film Production](https://dl.acm.org/citation.cfm?id=3328150). In _ACM SIGGRAPH 2019 Talks_. 21:1-21:2.

Julian Fong, Magnus Wrenninge, Christopher Kulla, and Ralf Habel. 2017. [Production Volume Rendering](https://doi.org/10.1145/3084873.3084907). In _ACM SIGGRAPH 2017 Courses_.

Wei-Feng Wayne Huang, Peter Kutz, Yining Karl Li, and Matt Jen-Yuan Chiang. 2021. [Unbiased Emission and Scattering Importance Sampling for Heterogeneous Volumes](https://doi.org/10.1145/3450623.3464644). In _ACM SIGGRAPH 2021 Talks_. 3:1-3:2.

Avneet Kaur and Johann Francois Coetzee. 2021. [Wrapped Clothing on Disney’s Raya and the Last Dragon](https://doi.org/10.1145/3450623.3464659). In _ACM SIGGRAPH 2021 Talks_. 28:1-28:2.

Avneet Kaur, Erik Eulen, and Johann Francois Coetzee. 2021. [Creating Diversity and Variety in the People of Kumandra for Disney's Raya and the Last Dragon](https://doi.org/10.1145/3450623.3464660). In _ACM SIGGRAPH 2021 Talks_. 58:1-58:2.

Peter Kutz, Ralf Habel, Yining Karl Li, and Jan Novák. 2017. [Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes](https://doi.org/10.1145/3072959.3073665). _ACM Transactions on Graphics_. 36, 4 (2017), 111:1-111:16.

Alberto Luceño Ros, Kristin Chow, Jack Geckler, Norman Moses Joseph, and Nicolas Nghiem. 2021. [Populating the World of Kumandra: Animation at Scale for Disney's Raya and the Last Dragon](https://doi.org/10.1145/3450623.3464648). In _ACM SIGGRAPH 2021 Talks_. 39:1-39:2.

Mike Navarro and Jacob Rice. 2021. [Stylizing Volumes with Neural Networks](https://doi.org/10.1145/3450623.3464652). In _ACM SIGGRAPH 2021 Talks_. 54:1-54:2.

Jennifer Newfield and Josh Staub. 2020. [How Short Circuit Experiments: Experimental Filmmaking at Walt Disney Animation Studios](https://dl.acm.org/doi/10.1145/3388767.3409267). In _ACM SIGGRAPH 2020 Talks_. 72:1-72:2.

Nicolas Nghiem. 2021. [Mathematical Tricks for Scalable and Appealing Crowds in Walt Disney Animation Studios' Raya and the Last Dragon](https://doi.org/10.1145/3450623.3464650). In _ACM SIGGRAPH 2021 Talks_. 38:1-38:2.

Sean Palmer, Jonathan Garcia, Sara Drakeley, Patrick Kelly, and Ralf Habel. 2017. [The Ocean and Water Pipeline of Disney’s Moana](https://dl.acm.org/citation.cfm?id=3085067). In _ACM SIGGRAPH 2017 Talks_. 29:1-29:2.

Jacob Rice. 2021. [Weaving the Druun's Webbing](https://doi.org/10.1145/3450623.3464647). In _ACM SIGGRAPH 2021 Talks_. 32:1-32:2.

Thijs Vogels, Fabrice Rousselle, Brian McWilliams, Gerhard Röthlin, Alex Harvill, David Adler, Mark Meyer, and Jan Novák. 2018. [Denoising with Kernel Prediction and Asymmetric Loss Functions](https://doi.org/10.1145/3197517.3201388). _ACM Transactions on Graphics_. 37, 4 (2018), 124:1-124:15.

Cong Wang and Dale Mayeda. 2021. [Cooking Southeast Asia-Inspired Soup in Animated Film](https://doi.org/10.1145/3450623.3464651). In _ACM SIGGRAPH 2021 Talks_. 35:1-35:2.
