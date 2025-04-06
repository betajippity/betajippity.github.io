---
layout: post
title: Why cd when you can go?
tags: [Coding]
author: Yining Karl Li
---

I learned a sweet trick from fellow Penn CIS student [Alexey Komissarouk](http://alexeymk.com/)'s blog today\: the 'go' command!

So in a standard \*nix bash CLI, you have you're typical cd command. We all know how to use cd.

But have you ever accidentally cd'd a file? "cd /stuff/blah.txt" makes no sense and just gets you a "Not a directory" error. So then you have to backtrack and use vim or emacs or nano or whatever... blarg. If you're using emacs or vim, you like efficiency and you've already lost efficiency by wasting a perfectly good moment trying to cd into a file.

Enter the 'go' command!

Add this bit of code to your .bashrc file and replace <span>$</span>EDITOR with the CLI text editor of your choice:

    go()
    {
    if [ -f $1 ]
    then
    $EDITOR $1
    else
    cd $1 && ls
    fi
    }

and you're all done! Now when you go to a directory, bash will cd and when you go to a file, bash will fire up vim or emacs or whatever.

As a side note, it might be fun to modify the 'go' command even further to automatically launch actions for other filetypes as well, like run javac whenever a .java is encountered or launch .jar files or run gcc or make whenever C++ makefiles are encountered. That's left as an exercise to the reader though!
