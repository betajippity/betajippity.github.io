---
layout: post
title: Installing Numpy for Maya 2012 64-bit on OSX 10.7
tags: [Coding]
author: Yining Karl Li
---

On OSX 10.6, installing [Numpy](http://numpy.scipy.org/) for Maya 2012 was [simple enough](http://animateshmanimate.com/2011/03/30/python-numpy-and-maya-osx-and-windows/). You could do it either by directly copying the Numpy install folder into Maya's Python's site-packages folder or by adding a sys.path.append to Maya's UserSetup.py. The process was quite simple since OSX 10.6's default preinstalled version of Python was 2.6.x and Maya 2012 uses Python 2.6.x as well. 

However, OSX 10.7 comes with Python 2.7.x, so a few extra steps are needed: 

For Maya 2012 64-bit: 

1. OSX 10.7 comes with Python 2.7.x, but we need 2.6.x, so install 2.6.x using the official installer from here: http://www.python.org/ftp/python/2.6.6/python-2.6.6-macosx10.3.dmg 

2. Since we're using 64-bit Maya with 64-bit Python, we'll need a 64-bit build of Numpy. The official version distributed on scipy.numpy.org is 32-bit, so we'll need a 64-bit build. Thankfully, there is an unofficial 64-bit build in the form of the [Scipy Superpack for Mac OSX](http://stronginference.com/scipy-superpack/). Even though we're on OSX 10.7, we'll want the OSX 10.6 variety of the script since the OSX 10.7 is Python 2.7.x dependent: [http://idisk.mac.com/fonnesbeck-Public/superpack_10.6_2011.07.10.sh](http://idisk.mac.com/fonnesbeck-Public/superpack_10.6_2011.07.10.sh)
  
	EDIT (01/12/2012): I've been informed by Michael Frederickson that the link originally posted to the unofficial 64 bit Scipy Superpack build for 10.6 no longer works. Fortunately, I've backed up both the script and the required dependencies. The install script can be found here: [http://yiningkarlli.com/files/osx10.7numpy2.6/superpack_10.6_2011.07.10.sh](http://yiningkarlli.com/files/osx10.7numpy2.6/superpack_10.6_2011.07.10.sh)
  
3. Go to where the script downloaded to and in Terminal: 

	`chmod +x superpack_10.6_2011.07.10.sh 
	./superpack_10.6_2011.07.10.sh `

	If you don't already have GNU Fortran, make sure to answer 'yes' when the script asks. 
    
4. Once the script is done installing, in Terminal: 

	`ls /Library/Python/2.7/site-packages/ | grep numpy `
    
	You should get something like: `numpy-2.0.0.dev_b5cdaee_20110710-py2.6-macosx-10.6-universal.egg` 

	Even though we installed Numpy for Python 2.6.x, on Lion it installs to the 2.7 folder for some reason. No matter, you can either leave it there or move it to 2.6. 
    
5. Go to `/Users/[your username]/Library/Preferences/Autodesk/maya/2012-x64/scripts `

6. If you don't have a file named `userSetup.py`, make one and open it in a text editor. If yes, open it. 

7. Add these lines to the file: 

	`import os 
	import sys 
	sys.path.append('/Library/Python/2.7/site-packages/[thing you got from step 4]') `

8. Sidenote: installing Python 2.6.x sets your default OSX Python to 2.6.x, but if you want to go back to 2.7.x, just edit your `~/.bash_profile` and remove these lines: 

	`PATH="/Library/Frameworks/Python.framework/Versions/2.6/bin:${PATH}" 
	export PATH `

....and you should be done! In Maya, you should be able to just use import numpy and you'll be good to go! 
