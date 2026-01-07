// //Fade top navbar upon scroll
// $(document).ready(function(){
// 	var $window = $(window);
// 	//Fade and shrink stuff	
// 	$(window).scroll(function() {
// 		var y = $window.scrollTop() / 75; 
// 		var titleFade = 1 - y/.85;
// 		if($(window).scrollTop()<=65){
// 			$('.blog-author').css("opacity",titleFade);
// 			$('.blog-title').css("opacity",titleFade);	
// 			if($(window).scrollTop()>=54){
// 				var navdrop = Math.min(77,69 + ($(window).scrollTop()-54));
// 				$('.blog-nav').css("top",navdrop+"px");
// 				// console.log(navdrop);
// 			}
// 		}else{
// 			var nameFade = ($window.scrollTop()-65)/20;
// 			nameFade = Math.min(1,nameFade);
// 			$('.blog-author').css("opacity",nameFade);
// 			$('.blog-title').css("opacity",nameFade);
// 		}
// 	});
// });
		  
// //Pin navbar
// $(window).scroll(function(){
// 	if($(window).scrollTop()>65){
// 		$('.blog-title-wrap').css("height","45px");
// 		$('#site-head').css("position","fixed");
// 		$('div.navbar-padding').css("height","130px");
// 		$('.blog-title').css("font-size","30px");
// 		$('.blog-title').css("left","5px");
// 		$('.blog-author').css("top","12px");
// 		$('.blog-author').css("left","230px");
// 		$('.blog-author').css("font-size","20px");	
// 		$('.blog-author').css("position","absolute");		
// 		$('.blog-nav').css("top","12px");
// 	}else{	
// 		$('.blog-title-wrap').css("height","");
// 		$('#site-head').css("position","");
// 		$('div.navbar-padding').css("height","");
// 		$('.blog-title').css("font-size","");
// 		$('.blog-author').css("font-size","");
// 		$('.blog-author').css("top","");
// 		$('.blog-author').css("left","");
// 		$('.blog-title').css("left","");
// 		$('.blog-nav').css("top","");
// 	}
// });

// Creates figure captions under images
$(document).ready(function() {
	// Every image referenced from a Markdown document
	$(".post-content img").each(function() {
		// Let's put a caption if there is one
		if($(this).attr("alt"))
			$(this).wrap('<div class="image"></div>')
				.after('<div class="figcaption"><span>'+$(this).attr("alt")+'</span></div>');
		});
});

// Creates line numbers for code blocks
var pres = document.getElementsByTagName('pre'), codeText, codeLines;
for (var pl = pres.length, p = 0; p < pl; p++) {
    if ( pres[p].children[0].tagName == 'CODE' ) {

        codeText = pres[p].children[0].innerHTML.trim(); // use trim to strip empty last line
        pres[p].children[0].innerHTML = codeText.split("\n").map(function(line) {
            return '<span class="code-line">' + line + '</span>';
        }).join("\n");

        codeLines = pres[p].querySelectorAll('span.code-line');
        for (var cl = codeLines.length, c = 0; c < cl; c++) {
            codeLines[c].style.width = pres[p].scrollWidth + 'px';
        }
    }
}

// Sidebar Table of Contents Generator and Scrollspy
$(document).ready(function() {

    // Only run on single-post pages
    if ($('body').hasClass('home-template')) {
        return; // Not a single post page
    }

    // Check if post has a manual TOC
    var manualToc = $('.tableofcontents');
    if (manualToc.length === 0) {
        return; // No manual TOC, don't create sidebar
    }

    // Add class to body to enable sidebar styles
    $('body').addClass('has-sidebar-toc');

    // Extract TOC links from manual TOC (they contain # but may not start with it)
    var tocLinks = manualToc.find('a[href*="#"]');
    if (tocLinks.length === 0) {
        return; // No links to build from
    }

    // Build sidebar TOC structure
    var sidebarToc = $('#sidebar-toc');

    // Add heading
    var tocHeading = $('<h3>Table of Contents</h3>');
    sidebarToc.append(tocHeading);

    var tocList = $('<ul></ul>');

    tocLinks.each(function(index) {
        var link = $(this);
        var href = link.attr('href');
        var text = link.text().trim();

        // Add section number
        var numberedText = (index + 1) + '. ' + text;

        // Create list item with cloned link
        var listItem = $('<li></li>');
        var sidebarLink = $('<a></a>')
            .attr('href', href)
            .text(numberedText)
            .data('target', href);

        listItem.append(sidebarLink);
        tocList.append(listItem);
    });

    sidebarToc.append(tocList);

    // Scrollspy implementation
    var sections = [];
    var sidebarLinks = sidebarToc.find('a');

    tocLinks.each(function(index) {
        var href = $(this).attr('href');

        // Extract the hash fragment from the URL
        var hashIndex = href.indexOf('#');
        if (hashIndex === -1) {
            return; // No hash, skip this link
        }
        var targetId = href.substring(hashIndex + 1);

        // Try to find the section element using getElementById to avoid jQuery selector issues
        var sectionElement = document.getElementById(targetId);
        if (sectionElement) {
            var section = $(sectionElement);
            sections.push({
                element: section,
                link: $(sidebarLinks[index])
            });
        }
    });

    // Update active section on scroll
    var activeSection = null;

    function updateActiveSection() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Find the current section
        var current = null;
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var sectionTop = section.element.offset().top - 100; // Offset for header

            if (scrollPos >= sectionTop) {
                current = section;
            } else {
                break;
            }
        }

        // Update highlighting if changed
        if (current !== activeSection) {
            // Remove previous active
            if (activeSection) {
                activeSection.link.removeClass('active');
            }

            // Add new active
            if (current) {
                current.link.addClass('active');
                activeSection = current;
            }
        }
    }

    // Throttle scroll events for performance
    var scrollTimeout;
    $(window).on('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveSection, 50);
    });

    // Initial update
    updateActiveSection();
});

// Homepage Sidebar TOC - Shows post titles and expands TOCs for current post
$(document).ready(function() {

    // Only run on homepage
    if (!$('body').hasClass('home-template')) {
        return; // Not homepage
    }

    var sidebarToc = $('#sidebar-toc');
    var posts = [];

    // Collect all posts on the page
    $('.post').each(function(index) {
        var postElement = $(this);
        var postTitle = postElement.find('.post-title a').text().trim();
        var postUrl = postElement.find('.post-title a').attr('href');
        var manualToc = postElement.find('.tableofcontents');

        var postData = {
            index: index,
            element: postElement,
            title: postTitle,
            url: postUrl,
            hasToc: manualToc.length > 0,
            tocLinks: [],
            sidebarItem: null,
            tocList: null,
            sections: []
        };

        // If post has a TOC, extract the links
        if (postData.hasToc) {
            manualToc.find('a[href*="#"]').each(function() {
                var link = $(this);
                var href = link.attr('href');
                var text = link.text().trim();
                postData.tocLinks.push({ href: href, text: text });
            });
        }

        posts.push(postData);
    });

    // Build sidebar structure
    if (posts.length === 0) {
        return; // No posts found
    }

    // Add class to body to enable sidebar styles
    $('body').addClass('has-sidebar-toc');

    // Add heading
    var tocHeading = $('<h3>Posts on This Page</h3>');
    sidebarToc.append(tocHeading);

    var mainList = $('<ul class="homepage-toc-list"></ul>');

    // Create sidebar entries for each post
    posts.forEach(function(post) {
        var listItem = $('<li class="homepage-toc-post"></li>');

        // Post title (clickable)
        var titleLink = $('<a href="#" class="post-title-link"></a>')
            .text(post.title)
            .data('post-index', post.index)
            .click(function(e) {
                e.preventDefault();
                var scrollTarget = post.element.offset().top - 120;
                $('html, body').animate({ scrollTop: scrollTarget }, 300);
            });

        listItem.append(titleLink);

        // If post has TOC, create collapsed TOC list (hidden initially)
        if (post.hasToc && post.tocLinks.length > 0) {
            var tocList = $('<ul class="post-toc-list" style="display:none;"></ul>');

            post.tocLinks.forEach(function(tocLink, tocIndex) {
                var tocItem = $('<li></li>');
                var numberedText = (tocIndex + 1) + '. ' + tocLink.text;
                var sectionLink = $('<a></a>')
                    .attr('href', tocLink.href)
                    .text(numberedText);

                tocItem.append(sectionLink);
                tocList.append(tocItem);
            });

            listItem.append(tocList);
            post.tocList = tocList;

            // Build sections array for scrollspy within this post
            post.tocLinks.forEach(function(tocLink, tocIndex) {
                var href = tocLink.href;
                var hashIndex = href.indexOf('#');
                if (hashIndex !== -1) {
                    var targetId = href.substring(hashIndex + 1);
                    var sectionElement = document.getElementById(targetId);
                    if (sectionElement) {
                        post.sections.push({
                            element: $(sectionElement),
                            link: tocList.find('a').eq(tocIndex)
                        });
                    }
                }
            });
        }

        post.sidebarItem = listItem;
        mainList.append(listItem);
    });

    sidebarToc.append(mainList);

    // Add pagination links at the bottom
    var paginationNav = $('.pagination');
    if (paginationNav.length > 0) {
        var paginationDiv = $('<div class="sidebar-pagination"></div>');

        var newerLink = paginationNav.find('.newer-posts');
        var olderLink = paginationNav.find('.older-posts');

        if (newerLink.length > 0) {
            var newerText = newerLink.text().replace('Posts', '').trim();
            var newerClone = $('<a class="sidebar-pagination-link"></a>')
                .attr('href', newerLink.attr('href'))
                .text(newerText);
            paginationDiv.append(newerClone);
        }

        if (olderLink.length > 0) {
            var olderText = olderLink.text().replace('Posts', '').trim();
            var olderClone = $('<a class="sidebar-pagination-link"></a>')
                .attr('href', olderLink.attr('href'))
                .text(olderText);
            paginationDiv.append(olderClone);
        }

        if (paginationDiv.children().length > 0) {
            sidebarToc.append(paginationDiv);
        }
    }

    // Scrollspy: Track current post and current section
    var currentPost = null;
    var currentSection = null;

    function updateHomepageScrollspy() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Find which post is currently in view (middle of viewport)
        var viewportMiddle = scrollPos + (windowHeight / 2);

        var newCurrentPost = null;
        for (var i = posts.length - 1; i >= 0; i--) {
            var post = posts[i];
            var postTop = post.element.offset().top;
            var postBottom = postTop + post.element.outerHeight();

            if (viewportMiddle >= postTop && viewportMiddle <= postBottom) {
                newCurrentPost = post;
                break;
            }
        }

        // If current post changed, update sidebar
        if (newCurrentPost !== currentPost) {
            // Remove highlight and collapse previous post's TOC
            if (currentPost) {
                currentPost.sidebarItem.find('.post-title-link').removeClass('active-post');
                if (currentPost.tocList) {
                    // Clear any active section highlights before collapsing
                    currentPost.tocList.find('a').removeClass('active');
                    currentPost.tocList.slideUp(200);
                }
            }

            // Clear current section reference
            if (currentSection) {
                currentSection.link.removeClass('active');
                currentSection = null;
            }

            // Highlight and expand new post's TOC
            if (newCurrentPost) {
                newCurrentPost.sidebarItem.find('.post-title-link').addClass('active-post');
                if (newCurrentPost.tocList) {
                    newCurrentPost.tocList.slideDown(200);
                }
            }

            currentPost = newCurrentPost;
        }

        // If current post has TOC, update section highlighting
        if (currentPost && currentPost.sections.length > 0) {
            var newCurrentSection = null;

            for (var i = 0; i < currentPost.sections.length; i++) {
                var section = currentPost.sections[i];
                var sectionTop = section.element.offset().top - 100;

                if (scrollPos >= sectionTop) {
                    newCurrentSection = section;
                } else {
                    break;
                }
            }

            // Update section highlighting
            if (newCurrentSection !== currentSection) {
                // Remove previous highlight
                if (currentSection) {
                    currentSection.link.removeClass('active');
                }

                // Add new highlight
                if (newCurrentSection) {
                    newCurrentSection.link.addClass('active');
                }

                currentSection = newCurrentSection;
            }
        }
    }

    // Throttle scroll events
    var scrollTimeout;
    $(window).on('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateHomepageScrollspy, 50);
    });

    // Initial update
    updateHomepageScrollspy();
});
