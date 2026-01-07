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
