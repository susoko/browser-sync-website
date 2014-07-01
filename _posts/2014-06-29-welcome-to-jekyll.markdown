---
layout: post
title:  "Welcome to Jekyll!"
date:   2014-06-29 19:19:35
categories: jekyll update
---


###1. Static file server

Let's say you have a website with the following files:


    - index.html
    -- css/style.css
    -- js/jquery.min.js


... and you want to test it on multiple devices. That's really easy! Just create a file
at the same level as your <code>index.html</code> called something like <strong><code>bs.js</code></strong>
and enter the following:

{% highlight javascript %}
    {% include scripts/api/init.js %}
{% endhighlight %}

<p>Save that file (<strong>bs.js</strong>) and then in the same directory, just run the following command:</p>

{% highlight bash %}
$ node bs.js
{% endhighlight %}

That will start the BrowserSync server & open up a browser tab for you at something like <code>localhost:3000</code>. That
address will work in all browsers on your current machine - but if you want to test on external devices, then you'll
need the second address that was printed to the console when you ran the previous command.

You should see something along these lines in your console/terminal:
                    
{% highlight bash %}
$ [BS] Local: >>> http://localhost:3000
$ [BS] External: >>> http://192.168.0.4:3000
{% endhighlight %}

