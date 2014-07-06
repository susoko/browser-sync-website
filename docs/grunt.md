---
layout: documentation
title: "BrowserSync + Grunt.js"
page-label: "grunt"
---

We have an [official Plugin]({{site.links.grunt-github}}) for Grunt that makes it easy to incorporate
BrowserSync into your development workflow. Below are a few examples of common configurations to get you started - use them
as a jump-start but don't forget you can also use any of the other [BrowserSync options]({{site.links.options}}) as well.

{% include headerlink.html title="Install" slug="grunt-install" %}

First, you'll need to install the BrowserSync Plugin...

{% highlight bash %}
{% include snippets/grunt/install.txt %}
{% endhighlight %}

... and then add this line to your `Gruntfile.js`

{% highlight javascript %}
grunt.loadNpmTasks('grunt-browser-sync');
{% endhighlight %}


{% include headerlink.html title="Static File Server" slug="grunt-server" %}

The simplest example would be watching CSS files, & using the built-in server for static
HTML/CSS/JS files. This config alone will launch a mini-server (using your current working directory
as the base), watch your CSS files for changes & auto-inject those changes into all connected browsers. 

{% highlight javascript %}
{% include snippets/grunt/server.simple.js %}
{% endhighlight %}


{% include headerlink.html title="Proxy" slug="grunt-proxy" %}

If you already have a local server setup (with your vhosts etc), just tell BrowserSync all about it & it will do the rest for you.

{% highlight javascript %}
{% include snippets/grunt/proxy.js %}
{% endhighlight %}

{% include headerlink.html title="+ other watch tasks" slug="grunt-watch" %}

Browser Sync is not a replacement for regular `watch` tasks (such as compiling SASS, LESS etc), 
they are designed to be used together. If you intend to do this, set this option to true and be sure to call 
the watch task AFTER browserSync. For example, to compile SASS and then inject the CSS into all open browsers 
(without a page refresh), your config for all three tasks might look something like this:

{% highlight javascript %}
{% include snippets/grunt/full.watch.js %}
{% endhighlight %}





