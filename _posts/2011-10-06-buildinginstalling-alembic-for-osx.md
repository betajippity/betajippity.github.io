---
layout: post
title: Building/Installing Alembic for OSX
tags: [Coding]
author: Yining Karl Li
---

[Alembic](http://www.alembic.io/) is a new open-source computer graphics interchange framework being developed by [Sony Imageworks](http://opensource.imageworks.com/) and [ILM](http://www.ilm.com/). The basic idea is that moving animation rigs and data and whatnot between packages can be a very tricky procedure since every package has its own way to handle animation, so why not bake out all of that animation data into a common interchange format? So, for example, instead of having to import a Maya rig into Houdini, you could rig/animate in Maya, bake out the animation to Alembic, bring that into Houdini to conduct simulations with, and then bake out the animation and bring it back into Maya. This is a trend that a number of studios including Sony, ILM, Pixar, etc. have been moving toward for some time.

I’ve been working on a project lately (more on that later) that makes use of Alembic, but I found that the only way to actually get Alembic is to build it from source. That’s not terribly difficult, but there’s not really any guides out there for folks who might not be as comfortable with building things from source. So, I wrote up a little guide!

Here’s how to build Alembic for OSX (10.6 and 10.7):

1. Alembic has a lot of dependencies that can be annoying to build/install by hand, so we’re going to cheat and use Homebrew. To install Homebrew:

  	`/usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/gist/323731)"`

2. Get/build/install cmake with Homebrew:

  	`brew install cmake`

3. Get/build/install Boost with Homebrew:

  	`brew install Boost`

4. Get/build/install HDF5 with Homebrew:

  	`brew install HDF5`
  
  	HDF5 has to make install itself, so this may take some time to run. Be patient.

5. Unfortunately, ilmbase is not a standard UNIX package, so we can’t use Homebrew. We’ll have to build ilmbase manually. Get it from:

  	http://download.savannah.nongnu.org/releases/openexr/ilmbase-1.0.2.tar.gz
  
  	Untar/unzip to a readily accessible directory and cd into the ilmbase directory. Run:

  	`./configure`
  
  	After that finishes, we get to the annoying part: ilmbase by default makes use of a deprecated GCC 3.x compiler flag called Wno-long-double, which no longer exists in GCC 4.x. We’ll have to deactivate this flag in ilmbase’s makefiles manually in order to build correctly. In each and every of the following files:
  
	`/Half/Makefile
	/HalfTest/Makefile
	/Iex/Makefile
	/IexTest/Makefile
	/IlmThread/Makefile
	/Imath/Makefile
	/ImathTest/Makefile`
  
  	Find the following line:
  
  	`CXXFLAGS = -g -O2 -D_THREAD_SAFE -Wno-long-double`
  
  	and delete it from the makefile.
  
  	Once all of that is done, you can make and then make install like normal.
  
  	Now move the ilmbase folder to somewhere safe. Something like /Developer/Dependencies might work, or alternatively /usr/include/

6. Time to actually build Alembic. Get the source tarball from:

	`http://code.google.com/p/alembic/wiki/GettingAlembic`

	Untar/unzip into a readily accessible directory and then create a build root directory parallel to the source root you just created:

	`mkdir ALEMBIC_BUILD`

	The build root doesn’t necesarily have to be parallel, but here we’ll assume it is for the sake of consistency.

7. Now cd into ALEMBIC_BUILD and bootstrap the Alembic build process. The bootstrap script is a python script:

	`python ../[Your Alembic Source Root]/build/bootstrap/alembic_bootstrap.py`

	The script will ask you for a whole bunch of paths:

	For “Please enter the location where you would like to build the Alembic”, enter the full path to your `ALEMBIC_BUILD` directory.

	For “Enter the path to lexical_cast.hpp:”, enter the full path to your lexical_cast.hpp, which should be something like `/usr/local/include/boost/lexical_cast.hpp`

	For “Enter the path to libboost_thread:”, your path should be something like `/usr/local/lib/libboost_thread-mt.a
	`
	For “Enter the path to zlib.h”, your path should be something like `/usr/include/zlib.h`

	For “Enter the path to libz.a”, we’re actually not going to link against libz.a. We’ll be using libz.dylib instead, which should be at something like `/usr/lib/libz.dylib`

	For “Enter the path to hdf5.h”, your path should be something like `/usr/local/include/hdf5.h`

	For “Enter the path to libhdf5.a”, your path should be something like `/usr/local/Cellar/hdf5/1.x.x/lib/libhdf5.a `(unless you did not use Homebrew for installing hdf5, in which case libhdf5.a will be in whatever lib directory you installed it to)

	For “Enter the path to ImathMath.h”, your path should be something like `/usr/local/include/OpenEXR/ImathMath.h`

	For “Enter the path to libImath.a”, your path should be something like `/usr/local/lib/libImath.a`

	Now hit enter, and let the script finish running!

8. If everything is bootstrapped correctly, you can now make. This will take a while, be patient.

9. Once the make finishes successfully, run make test to check for any problems.

10. Finally, run make install, and we’re done! Alembic should install to something like `/usr/bin/alembic-1.x.x/.`
