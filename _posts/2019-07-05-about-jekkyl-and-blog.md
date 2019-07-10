---
title: "Powered by Github Pages and Jekyll"
published: true
categories:
  - Blog
tags:
  - jekyll
  - github
header:
  image: /assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

How I created this page?

It has been a while since I came up with the idea to buy a domain and create a professional page (and blog!) to expose some of my work and share my experiences and thoughts.

My biggest concern was: where could I host this page?

I've done my research and many candidates appeared. As I was thinking to use WordPress or something similar, HostGator appeared as a possible option. It's not an expensive hosting, but I could make things more fun. So I just bought my [dherik.com](https://dherik.com) domain there and moved on.

So I came up with this idea of using Amazon or Azure. I could setup a website from scratch paying a small amount to maintain this server (I'm not expecting big traffic here, of course). On Amazon, this will cost something around 6 or 7 dollars, which is a bit expensive for such a simple site. Something simpler would fit better.

I've already heard about static website engines before and how useful they are for blogs and personal pages. My first contact with this kind of technology was in 2013 with [Axe](http://augustocampos.net/axe/blog/2013/06/o-que-e-o-axe.html), a Portuguese static content manager developed by [Augusto Campos](https://twitter.com/augustocc).

After some research about what are the best static content manager options, I realized my lack of time to dedicate to this setup. I needed something more practical and, why not, free? 

Finally, I found the answer to my prayers on [Github Pages](https://pages.github.com/). Github has [native support for the Jekyll](https://jekyllrb.com/docs/github-pages/), one of the most famous static content managers available. And not only that, but you can also choose a Jekyll template among lots of template repositories that are ready to use; you just need to fork it and you have a functional blog. 

My template choice was [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/). I forked their repository, renamed it to [dherik.github.io](https://dherik.github.io) and it's done!

The last step was to point the [dherik.com](https://dherik.com) domain to [dherik.github.io](https://dherik.github.io). With a little help from CloudFare, I could do that easily.
