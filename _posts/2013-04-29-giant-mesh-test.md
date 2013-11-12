---
layout: post
title: Giant Mesh Test
tags: [Coding, Collaborations, Pathtracer]
author: Yining Karl Li
---

My friend/schoolmate [Zia Zhu](https://vimeo.com/user10815579) is an amazing modeler, and recently she was kind enough to lend me a ZBrush sculpt she did for use as a high-poly test model for Takua Render. The model is a sculpture of Venus, and is made up of slightly over a million quads, or about two million triangles once triangulated inside of Takua Render.

Here are some nice, pretty test renders I did. As usual, everything was rendered with Takua Render, and there has been absolutely zero post-processing:

[![](/content/images/2013/Apr/venus1.png)](/content/images/2013/Apr/venus1.png)

[![](/content/images/2013/Apr/venus21.png)](/content/images/2013/Apr/venus21.png)

[![](/content/images/2013/Apr/venus31.png)](/content/images/2013/Apr/venus31.png)

[![](/content/images/2013/Apr/venus41.png)](/content/images/2013/Apr/venus41.png)

Each one of these renders was lit using a single, large area light (with importance sampled direct lighting, of course). The material on the model is just standard lambert diffuse white; I'll do another set of test renders once I've finished rewriting my subsurface scatter system. Each render was set to 2800 samples per pixels and took about 20 minutes to render on a single GTX480. In other words, not spectacular, but not bad either.

The key takeaway from this series of tests was that Takua's performance still suffers significantly when datasets become extremely large; while the render took about 20 minutes, setup time (including memory transfer, etc) took nearly 5 minutes, which I'm not happy about. I'll be taking some time to rework Takua's memory manager.

On a happier note, KD-tree construction performed well! The KD-tree for the Venus sculpt was built out to a depth of 30 and took less than a second to build.

Here's a bonus image of what the sculpt looks like in the GL preview mode:

[![](/content/images/2013/Apr/venus_gl.png)](/content/images/2013/Apr/venus_gl.png)

Again, all credit for the actual model goes to the incredibly talented [Zia Zhu](https://vimeo.com/user10815579)!