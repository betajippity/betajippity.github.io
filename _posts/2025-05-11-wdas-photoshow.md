---
layout: post
title: Photography Show at Disney Animation
tags: [Art, Photography]
author: Yining Karl Li
---

<div markdown="0">

<style type="text/css" rel="stylesheet">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 33px;
  height: 18.7px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14.3px;
  width: 14.3px;
  left: 2.2px;
  bottom: 2.2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #43b556;
}

input:focus + .slider {
  box-shadow: 0 0 1px #43b556;
}

input:checked + .slider:before {
  -webkit-transform: translateX(14.3px);
  -ms-transform: translateX(14.3px);
  transform: translateX(14.3px);
}

/* Rounded sliders */
.slider.round {
  border-radius:18.7px;
}

.slider.round:before {
  border-radius: 50%;
}

.hdr-unsupported-warning {
    color: #555555;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    display: block;
    width: 65%;
    margin: 5px auto;
}

.hdr-switch {
    color: #555555;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    display: block;
    margin: 5px auto;
}

</style>


<script type="text/javascript" src="/includes/js/jquery.min.js"></script>
<script type="text/javascript">
    function toggleHDR()
    {
        if ($('.hdr_toggle').is(":checked")) {  
            $(".hdr").show();
            $(".sdr").hide();
        } else {
            $(".hdr").hide();
            $(".sdr").show();
        }
    }

    function checkHDR()
    {
        if (window.matchMedia("(dynamic-range: high)").matches) {
            $(".hdr-unsupported-warning").hide();
        } else {
            $(".hdr-unsupported-warning").show();
        }
    }

    setInterval(function() {
        checkHDR();
    }, 2000);

    $(document).ready(function() {
        checkHDR();
    });
</script>

</div>
<div markdown="1">

The inside of Disney Animation's Burbank building is basically one gigantic museum-quality art gallery that happens to have an animation studio embedded within, and one really cool thing that the studio does from time to time is to put on an internal art show with work from various Disney Animation employees.
The latest show is a photography show, and I got to be a part of it and show some of my photos!
The show, titled _HAVE CAMERA, WILL TRAVEL_, was coordinated and designed by the amazing [Justin Hilden](https://www.justinhilden.com/) from Disney Animation's legendary [Animation Research Library](https://disneyanimation.com/team/arl-ink-paint/), and features work from seven Disney Animation photographers: [Alisha Andrews](https://www.instagram.com/lish_eye_photography/), [Rehan Butt](https://rehanbutt.com/photography), [Joel Dagang](https://www.instagram.com/joel.dagang/), [Brian Gaugler](https://www.instagram.com/photaugler), [Ashley Lam](https://www.ashleylam.com), [Madison Kennaugh](https://www.linkedin.com/in/madison-kennaugh), and myself.
My peers in the show are all incredible photographers whose work I find really inspiring; I encourage checking out their photography work online!
The show will be up inside of Disney Animation's Burbank studio for several months.

Ever since my dad gave my brother and me a camera when I was in high school, photography has been a major hobby of mine.
Today I have several cameras, a bunch of weird and fun and interesting lenses that I have collected over the years, and I take a _lot_ of photos every year (which has only ramped up even more after I became a dad myself).
However, I rarely, if ever, post or share my photos publicly; for me, my photography hobby is purely for myself and my close friends and family.
Participating in a photography show was a bit of a leap of faith for me, even within the restricted domain of inside of my workplace instead of in the general public.
I think I'm a passable photographer at this point, but certainly nowhere near amazing.
However, one advantage of having taken tens of thousands of photos over the past 15 years is that even if only a tiny percentage of my photos are good enough to show, a tiny percentage of tens of thousands is still enough to pull together a small collection to show.

I thought I'd share the photos I have in the show here on my blog as well.
There isn't really a coherent theme; these are just photos I've taken that I liked from the past several years.
Some are travel photos, some are of my family, and others are just interesting moments that I noticed.
I won't go into my photography and editing process and whatnot here; I'll save that for a future post.

I color grade my photos for both SDR and HDR; if you are using a device/browser that supports HDR<sup id="2025-05-11-photoshow-footnote-1-backlink">[1](#2025-05-11-photoshow-footnote-1)</sup> , give the "Enable HDR" toggle below a try!
If your device/browser doesn't support HDR for this site, a warning message will be displayed below; if there's no warning message, then that means your device/browser supports HDR for this site and the HDR toggle will work correctly for you.

I wrote a small artist's statement for the show:

> To me, a camera is actually a time machine. Taking photos gives me a way to connect back to moments and places in the past; for this reason I take a lot of photos mostly for my own memory, and every once in a rare while one of them is actually good enough to show other people!
>
> I shoot with whatever camera I happen to have on me at the moment. Sometimes it’s a big fancy DSLR, sometimes it’s the phone in my pocket, sometimes it’s something in between. I learned a long time ago that the best camera is just whatever one is in reach at the moment. 
>
> Thanks to Harmony for her patience every time I fumbled a lens in my backpack.

Here are my photos from the show, presented in no particular order:

<div class="hdr-unsupported-warning" style="display: none">
    <p>
    Warning: Your device/display/browser are not reporting HDR support for this website. Enabling HDR below may produce unexpected results; sticking with SDR (HDR not enabled) is recommended for your current device/display/browser.
    </p>
</div>

<p>
<div class='hdr-switch'>
    Enable HDR: <label class="switch">
    <input type="checkbox" class="hdr_toggle" name="hdr_toggle" value="1" onchange="toggleHDR()">
    <span class="slider round"></span> 
    </label>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-02.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-02.jpg" /></a>
    <div class="figcaption">
        <span>
            Los Angeles, California | Nikon Z8 | Smena Lomo T-43 40mm ƒ/4 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-02.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Los Angeles, California | Nikon Z8 | Smena Lomo T-43 40mm ƒ/4 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-01.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-01.jpg" /></a>
    <div class="figcaption">
        <span>
            Denver, Colorado | Nikon Z8 | Zeiss Planar T* 50mm ƒ/1.4 C/Y | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-01.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Denver, Colorado | Nikon Z8 | Zeiss Planar T* 50mm ƒ/1.4 C/Y | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-03.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-03.jpg" style="max-width: 66%" /></a>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Mammoth, California | iPhone 14 Pro | Telephoto Lens 77mm ƒ/2.8 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline  style="max-width: 66%" >
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-03.mp4" type="video/mp4">
    </video>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Mammoth, California | iPhone 14 Pro | Telephoto Lens 77mm ƒ/2.8 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-04.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-04.jpg"/></a>
    <div class="figcaption">
        <span>
            Burbank, California | Nikon Z8 | Zeiss Kipronar 105mm ƒ/1.9 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-04.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Burbank, California | Nikon Z8 | Zeiss Kipronar 105mm ƒ/1.9 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-05.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-05.jpg"/></a>
    <div class="figcaption">
        <span>
            Shanghai, China | Nikon Z8 | Nikon Nikkor Z 24-120mm ƒ/4 S | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-05.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Shanghai, China | Nikon Z8 | Nikon Nikkor Z 24-120mm ƒ/4 S | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-07.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-07.jpg"/></a>
    <div class="figcaption">
        <span>
            Burbank, California | Nikon Z8 | Asahi Pentax Super-Takumar 50mm ƒ/1.4 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-07.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Burbank, California | Nikon Z8 | Asahi Pentax Super-Takumar 50mm ƒ/1.4 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-08.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-08.jpg" style="max-width: 66%" /></a>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Philadelphia, Pennsylvania | iPhone 5s | Main Lens 29mm ƒ/2.2 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline  style="max-width: 66%" >
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-08.mp4" type="video/mp4">
    </video>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Philadelphia, Pennsylvania | iPhone 5s | Main Lens 29mm ƒ/2.2 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-06.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-06.jpg"/></a>
    <div class="figcaption">
        <span>
            Shanghai, China | Nikon D5100 | Nikon AF-S DX NIkkor 18-55mm ƒ/3.5-5.6 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-06.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Shanghai, China | Nikon D5100 | Nikon AF-S DX NIkkor 18-55mm ƒ/3.5-5.6 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-09.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-09.jpg"/></a>
    <div class="figcaption">
        <span>
            Burbank, California | Nikon Z8 | Nikon Nikkor Z 24-120mm ƒ/4 S | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-09.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Burbank, California | Nikon Z8 | Nikon Nikkor Z 24-120mm ƒ/4 S | Display Mode: HDR
        </span>
    </div>
</div>
</p>

Additionally, there were a few photos that I had originally picked out for the show but didn't make the cut in the end due to limited wall space.
I thought I'd include them here as well:

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-11.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-11.jpg" style="max-width: 66%" /></a>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Hualien, Taiwan | Nikon Z8 | Nikon Nikkor Z 24-120mm ƒ/4 S | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline  style="max-width: 66%" >
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-11.mp4" type="video/mp4">
    </video>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Hualien, Taiwan | Nikon Z8 | Nikon Nikkor Z 24-120mm ƒ/4 S | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-12.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-12.jpg" style="max-width: 66%" /></a>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Burbank, California | Fujifilm X-M1 | Fujifilm Fujinon XF 27mm ƒ/2.8 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline  style="max-width: 66%" >
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-12.mp4" type="video/mp4">
    </video>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Burbank, California | Fujifilm X-M1 | Fujifilm Fujinon XF 27mm ƒ/2.8 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-10.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-10.jpg" /></a>
    <div class="figcaption" >
        <span>
            Los Angeles, California | iPhone 5s | Main Lens 29mm ƒ/2.2 | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/wdas-photoshow-10.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Los Angeles, California | iPhone 5s | Main Lens 29mm ƒ/2.2 | Display Mode: HDR
        </span>
    </div>
</div>
</p>

Here's some additional commentary for each of the photos, presented in the same order that the photos are in:

1. The south hall of the Los Angeles Convention Center, taken while walking between sessions at a past SIGGRAPH.
2. My wife, Harmony Li, at Meow Wolf's Convergence Station art installation. The lens flares were a total happy accident.
3. The Panorama Gondola disappearing into a quickly descending blizzard near the top of Mammoth, taken while we were getting off of the mountain as quickly as we could. It doesn't look like it, but this is actually a color photograph.
4. Our then-four-month-old daughter hanging out with her grandparents in our backyard. This was the day she held a flower for the first time.
5. Someone taking a photo from inside of Shanghai's Museum of Art Pudong. I wonder if I'm in his photo too.
6. Our half border collie / half golden retriever, Tux, in a Santa hat for a Christmas shoot. I think my wife actually took this one, but she insisted that I include it in the show.
7. My then-girlfriend now-wife shooting a video project when we were in university. This was in Penn's Singh Center for Nanotechnology building.
8. A worker hanging a chandelier in Shanghai's 1933 Laoyangfang complex. This place used to be a municipal slaughterhouse but now contains creative spaces.
9. The Los Angeles skyline, as seen from the Stough Canyon trail above Burbank. The tiny dot in the center of the frame is actually a plane on landing approach to LAX.
10. My friend Alex stopping to take in the waves as a storm was approaching the eastern coast of Taiwan.
11. Looking past the Roy O. Disney building towards the Team Disney headquarters building on Disney's Burbank studio lot.
12. A past SIGGRAPH party somewhere in the fashion district in downtown Los Angeles.

Finally, here's a few snapshots of what the show looks like, towards the end of the show's opening.
The opening had a great turnout; thanks to everyone that came by!


<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-02.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-02.jpg" style="max-width: 66%" /></a>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Justin's awesome logo for the show. | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline  style="max-width: 66%" >
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-02.mp4" type="video/mp4">
    </video>
    <div class="figcaption" style="max-width: 66%">
        <span>
            Justin's awesome logo for the show. | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-03.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-03.jpg"/></a>
    <div class="figcaption">
        <span>
            Crowds dying down towards the end of the show's opeining. | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-03.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            Crowds dying down towards the end of the show's opeining. | Display Mode: HDR
        </span>
    </div>
</div>
</p>

<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-01.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-01.jpg" style="max-width: 66%" /></a>
    <div class="figcaption" style="max-width: 66%">
        <span>
            The gallery hallway looking in the other direction. | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline  style="max-width: 66%" >
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-01.mp4" type="video/mp4">
    </video>
    <div class="figcaption" style="max-width: 66%">
        <span>
            The gallery hallway looking in the other direction. | Display Mode: HDR
        </span>
    </div>
</div>
</p>


<p>
<div class="sdr">
    <a href="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-04.jpg"><img src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-04.jpg"/></a>
    <div class="figcaption">
        <span>
            My pieces framed and on the wall. | Display Mode: SDR
        </span>
    </div>
</div>
<div class="hdr" style="display: none">
    <video autoplay muted loop playsinline>
        <source src="{{site.url}}/content/images/2025/May/wdas-photoshow/show-opening-04.mp4" type="video/mp4">
    </video>
    <div class="figcaption">
        <span>
            My pieces framed and on the wall. | Display Mode: HDR
        </span>
    </div>
</div>
</p>


---

## Footnotes

<sup id="2025-05-11-photoshow-footnote-1">1</sup> At time of posting, this post's HDR mode makes use of browser HDR video support to display HDR pictures as single-frame HDR videos, since no browser has HDR image support enabled by default yet. The following devices/browsers are known to support HDR videos by default:

* Safari on iOS 14 or newer, running on the iPhone 12 generation or newer, and on iPhone 11 Pro.
* Safari on iPadOS 14 or newer, running on the 12 inch iPad Pros with M1 or M2 chip, and on all iPad Pros with M4 chip or newer.
* Safari or Chrome 87 or newer on macOS Big Sur or newer, running on the 2021 14 and 16 inch MacBook Pros or newer, or any Mac using a Pro Display XDR or other compatible HDR monitor.
* Chrome 87 or newer, or Edge 87 or newer, on Windows 10 or newer, running on any PC with a compatible DisplayHDR-1000 or higher display (examples: any monitor on [this list](https://www.displayninja.com/hdr-monitor-list/)). You may also need to adjust HDR settings in Windows.
* Chrome 87 or newer on Android 14 or newer, running on devices with an Android Ultra HDR compatible display (examples: Google Pixel 8 generation or newer, Samsung Galaxy S21 generation or newer, OnePlus 12 or newer, and various others).

On Apple devices without HDR-capable displays, iOS and macOS's [EDR system may still allow HDR imagery to look correct](https://prolost.com/blog/edr) under specific circumstances.
<a href="#2025-05-11-photoshow-footnote-1-backlink"><span class="material-symbols-outlined">keyboard_return</span></a>
