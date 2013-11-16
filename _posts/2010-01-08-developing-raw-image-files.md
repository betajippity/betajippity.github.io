---
layout: post
title: Developing Raw Image Files
tags: [Art, Adventures, Photoshop/Illustrator, Photos, APOD, Friends]
author: Yining Karl Li
---

First off, a disclaimer: I'm not by any means good at photography. I've never taken any photo classes and I barely have any idea of what I'm doing with a camera; I only know how to use a DSLR because I bugged Mary into showing me. So who knows? Maybe everything in this post is wildly off of what I'm actually supposed to be doing.

That being said, here's a quick note on something I've been playing with lately. Here's some technical background first:

So you know how when you take a picture with a film camera, you have to take out the film, go to a photo developing place, and get your film negatives printed as usable, viewable positives? Well, since the beginning of the 21st century, digital cameras have more or less replaced film cameras in all areas except for the most professional and in some vintage or specialized areas of photography. One of the things about digital cameras that people love the most is the fact that a digital camera produces an instantly usable JPG image that doesn't need to be sent to a local Walgreens or Costco for processing and doesn't need to be developed. With digital cameras, you get a nice bunch of files on a memory card instead of a roll of negative film. Awesome.

The problem is, JPGs don't give the flexibility that film negatives give. For normal, everyday use, JPGs are fantastic. With modern compression algorithms, you can get a really nice image with a pretty reasonable file size with JPGs, but what if your picture is overexposed or the white balance is off? Tough luck- a lot of photo programs out there today can do some adjustments and make some attempts at correction, but the fact that the JPG file format is a lossy compression format limits the editing options open to JPG files. Editing and correcting JPG files is possible, but doing so is not nearly as flexible as working with camera raw files. What is a camera raw file? To explain that, we need to look at lossy and nonlossy compression first.

So what is a lossy compression format? Well, let's start with what nonlossy, uncompressed data is. When a camera takes a picture, or a microphone records some sound, or a video camera takes some video, the data from the camera or microphone or whatnot is dumped into a pile of nonlossy, uncompressed data. The problem with nonlossy, uncompressed data is that it takes up an astronomical amount of storage space. For example, an uncompressed WAV audio file can take up hundreds of megabytes for a single three minute song. This is where  lossy compression comes in. An MP3 is a lossy compression of raw audio data like WAV files- an MP3 of a single three minute song is usually somewhere from 3 to 6 megabytes in size- much much smaller than the uncompressed WAV file. Yet, the sound that comes through your speakers or headphones from an MP3 is in almost all cases virtually indistinguishable from the sound from a WAV file, assuming that the MP3 was processed correctly. So how does the MP3 manage to sound, for all intents and purposes, the same but remain much smaller in size? The solution is simple- lossy compression such as MP3 files tosses out swaths of data from the uncompressed data, but do so in a way that the end result is still close enough to the original to be hard to distinguish. JPG files operate on the same principle as MP3s- they toss out tons of normally unneeded data to achieve a reasonably small file size while maintaining pretty good image quality (although there are cases where this fails, but that's a discussion for another day). That's the basics of lossy compression, if you want to learn more, the [Wikipedia article on the topic is excellent](http://en.wikipedia.org/wiki/Lossy_compression).

So what does all of that stuff have to do with photography? Well, just as how the raw (uncompressed) equivalent to an MP3 is a WAV file, the raw equivalent to a JPG is a camera raw file (the specific file format varies from camera manufacturer to manufacturer, but all of these formats do the same thing- store raw data). You can think of film negatives and the resulting positive prints as the film camera equivalent of camera raw files and JPGs. In fact, for this reason, camera raw files are often referred to as "digital negatives". Much like a film negative, a camera raw file by itself is unusable for printing or scrap booking or editing or whatnot, but since the camera raw file contains ALL of the data output from the camera's image sensor, the camera raw file can be used to produce a finished useable JPG.

So what's the point of using camera raw files if you can set your camera to automatically produce a JPG? Why go to the trouble of getting a JPG out of the raw file yourself? Take a look below at a shot of a sign in Times Square that I took on our trip to New York City:

[![]({{site.url}}/content/images/2010/Jan/timessquare_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/timessquare_beforeafter.jpg)

The image on the left is the JPG that the camera automatically processed. The image on the right is the same picture, but it's the JPG that I processed manually from the raw file. When you tell a camera to produce a JPG, the camera takes the raw file produced by its image sensor, and then processes that raw file into a JPG using some educated guesswork to set white balance, color grading, and so and so forth. Cameras today have gotten really good at automatically processing raw files into JPGs, but sometimes they don't get things exactly right. For example, in the camera processed JPG on the left, the photo has lost a lot of color information has been lost. As a result, the image on the left would look washed out when compared to real life. The image on the right has retained more or the color of the original real life scene, and has had corrections for both exposure and white balance errors in the original. The result is a photo much more accurate to what the scene looks like in real life.

That's the magic of raw files. Keeping and using RAW files lets you control the processing steps to produce the resulting JPG, and as a result you can coax a much more real life-accurate image out of the raw file, correct for exposure, white-balance, and other mistakes from shooting, and even change the look of the image away from reality if you wish. Almost all professional photographers today process their images manually from raw files for this very reason. Some examples of applications that support raw processing include Apple's Aperture and Adobe's Lightroom. I use Adobe Lightroom, but all of these applications do more or less the same thing and choosing one is really a matter of personal preference.

Let's take a look at some more examples (for all examples, "Before" images are camera processed JPGs and "After" images are processed in Adobe Lightroom):

[![]({{site.url}}/content/images/2010/Jan/timessquare2_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/timessquare2_beforeafter.jpg)

In the above nighttime shot of Times Square, the left image has been slightly underexposed. When I shot the original image, I purposely underexposed the image to lower the risk of blurring from my movement. However, the result is that the camera processed image wipes out a lot of details that are in the dark. Processing the raw file, however, allows details like the skyscraper windows and the night sky to be preserved. The image below is a small section of the above photo where some of this detail is most evident:

[![]({{site.url}}/content/images/2010/Jan/timessquare2detail_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/timessquare2detail_beforeafter.jpg)

Here's another example of correcting for underexposure, taken during a hang-out session at Emma's house:

[![]({{site.url}}/content/images/2010/Jan/emmasparty_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/emmasparty_beforeafter.jpg)

Emma's living room was fairly dimly lit, so taking well lit pictures would require long exposures, but people move during long exposures, resulting in blurry pictures. As an alternative, I purposely underexposed when shooting and then corrected that underexposure in raw processing later.

Now let's look at white balance correction with raw processing:

[![]({{site.url}}/content/images/2010/Jan/toysrus_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/toysrus_beforeafter.jpg)

In the above shot, the original photo has an extremely yellow/orange appearance because of the indoor lights at the Toys R Us we were in. The white balance in the original shot is clearly off, so as a result, the resulting camera processed JPG is very yellow/orange. Processing the raw file in Lightroom, however, affords us the opportunity to correct the white balance, resulting in an image much closer to what the human eye sees.

Here's another example of white balance correction:

[![]({{site.url}}/content/images/2010/Jan/funnysign_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/funnysign_beforeafter.jpg)

One more example of white balance correction, this time with delicious cupcakes from Magnolia Bakery.

[![]({{site.url}}/content/images/2010/Jan/cupcakes_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/cupcakes_beforeafter.jpg)

Now let's look at an example with overexposure:

[![]({{site.url}}/content/images/2010/Jan/gallery_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/gallery_beforeafter.jpg)

The above shot was taken in a gallery at the Museum of Modern Art. The original shot was overexposed, so as a result, the image on the left looks like the lights in the gallery are washing out everything else in the image. Colors look washed out and details in the floorboards and the artwork on the wall are lost. Applying exposure correction during raw processing, however, allows us to restore details and color. We're not actually adding anything new to the image- all of the details and colors lost in the camera processed JPG still remain in the raw file, we just need to bring them out. The shot below is a more extreme example of detail loss from overexposure and subsequent detail recovery in raw processing:

[![]({{site.url}}/content/images/2010/Jan/trainride_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/trainride_beforeafter.jpg)

In the top "before" image, overexposure has washed out details such as the train line map on the wall. The "before" image also has white balance issues. Processing, however, allows to get the image on the bottom. The crop below shows the detail we recovered in the train line map:

[![]({{site.url}}/content/images/2010/Jan/trainridedetail_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/trainridedetail_beforeafter.jpg)

Here's an example with flash. Typically using flash in photography is a bad, bad idea (more on that in the future), but sometimes the setting is so dark that you have to use flash. In the few cases where flash use is acceptable, however, flash still doesn't help out a lot. Flash certainly brightens up the scene, but also casts deep shadows and rarely succeeds in lighting a room evenly. The result is a photo where more is visible than sans flash, but the photo is still extremely dark:

[![]({{site.url}}/content/images/2010/Jan/busride_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/busride_beforeafter.jpg)

However, we can treat the problem as an exposure and white balance issue, which we can adjust and correct for in raw processing. As a result, we can even out the lighting in the picture somewhat and make the results from the flash a little less harsh.

Finally, Here's an example where sunlight acts a nuisance by causing exposure issues again:

[![]({{site.url}}/content/images/2010/Jan/chris_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/chris_beforeafter.jpg)

In the shot above, the sunlight streaming in the bus we were on made for excellent lighting, but also meant exposure issues and, as a result, washed out colors. Raw processing allows us to get the much more reality-accurate image in the right.

Another example of sunlight issues, this time on a skyscraper:

[![]({{site.url}}/content/images/2010/Jan/hotel_beforeafter.jpg)]({{site.url}}/content/images/2010/Jan/hotel_beforeafter.jpg)

All of the above being said, however, using camera raw files has drawbacks too. The main advantage using camera processed JPGs holds over camera raw files is ease and convenience- processing raw files takes time and adds an additional step to any photo processing workflow. On top of that, camera raw files can be anywhere from two to ten times as large as the equivalent JPG, depending on the nonlossy compression scheme used in the specific file format. Fortunately, however, many cameras today have an option to produce a JPG, but also keep a copy of the raw file in case you want to play with it yourself. This way you can instantly get a useable, workable JPG file, but can also go back and process the raw later if you feel so inclined.

In the end, whether or not a picture looks good or not requires more than just raw processing and is completely subjective. Even so, raw processing can still be useful. I have to admit, I'm not particularly good at actually framing shots or whatnot, but at least I can make sure any flaws in my photos are my fault alone and not the result of automatic camera processing.
