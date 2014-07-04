---
layout: documentation
title: "BrowserSync options"
page-label: "options"
---

These are all the options that you can configure when using BrowserSync. It should be a single object &
works exactly the same with API or Gulp usage. Grunt is *slightly* different however, check the [Grunt Docs]({{ site.urls.grunt }})
for more info.

{{ site.urls }}

{% highlight javascript %}
{% include scripts/options/require.js %}
{% endhighlight %}


<h3 id="option-files">files <a href="#option-files" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Array|String</span></li>
</ul>



{% highlight javascript %}
// single file
files: "app/css/style.css"

// multiple files
files: ["app/css/style.css", "app/css/ie.css"]

// multiple files with glob
files: "app/css/*.css"

// multiple globs
files: ["app/css/*.css", "app/**.*.html", "app/js/**/*.js"]
{% endhighlight %}


<h3 id="option-ghostMode">ghostMode <a href="#option-ghostMode" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-logLevel">logLevel <a href="#option-logLevel" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String can be one of "info", "debug" or "silent"</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-server">server <a href="#option-server" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object|Boolean</span></li>
</ul>



{% highlight javascript %}
// Serve files from the app directory
server: {
    baseDir: "app"
}

// Serve files from the app directory with directory listing
server: {
    baseDir: "app",
    directory: true
}

// Multiple base directories
server: {
    baseDir: ["app", "dist"]
}

// Serve files from the app directory, with a specific index filename
server: {
    baseDir: "app",
    index: "index.htm"
}

// Serve files from the root directory
server: {
    baseDir: "./"
}

// Custom Middleware
server: {
    baseDir: "./",
    middleware: function (req, res, next) {
        console.log("Hi from middleware");
        next();
    }
}

// Multiple custom Middlewares
server: {
    baseDir: "./",
    middleware: [
        function (req, res, next) {
            console.log("Hi from first middleware");
            next();
        },
        function (req, res, next) {
            console.log("Hi from the second middleware");
            next();
        }
    ]
}
{% endhighlight %}


<h3 id="option-proxy">proxy <a href="#option-proxy" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String|Boolean</span></li>
</ul>



{% highlight javascript %}
// Using a vhost-based url
proxy: "local.dev"

// Using a localhost address with a port
proxy: "localhost:8888"

// Using localhost sub directories
proxy: "localhost/site1"
{% endhighlight %}


<h3 id="option-port">port <a href="#option-port" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-open">open <a href="#option-open" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-browser">browser <a href="#option-browser" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String|Array</span></li>
</ul>



{% highlight javascript %}
// Open the site in Chrome
browser: "google chrome"

// Open the site in Chrome & Firefox
browser: ["google chrome", "firefox"]
{% endhighlight %}


<h3 id="option-xip">xip <a href="#option-xip" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-hostnameSuffix">hostnameSuffix <a href="#option-hostnameSuffix" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean|String</span></li>
</ul>



{% highlight javascript %}
// Append '.xip.io' to the hostname. (eg: http://192.168.0.4.xip.io:3002)
hostnameSuffix: ".xip.io"
{% endhighlight %}


<h3 id="option-notify">notify <a href="#option-notify" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-debounce">debounce <a href="#option-debounce" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
</ul>

Number in milliseconds to wait before emitting file changed event

{% highlight javascript %}

{% endhighlight %}


<h3 id="option-scrollProportionally">scrollProportionally <a href="#option-scrollProportionally" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-scrollThrottle">scrollThrottle <a href="#option-scrollThrottle" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-reloadDelay">reloadDelay <a href="#option-reloadDelay" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-injectChanges">injectChanges <a href="#option-injectChanges" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}
// Inject CSS changes
injectChanges: true,

// Don't try to inject, just do a page refresh
injectChanges: false,
{% endhighlight %}


<h3 id="option-startPath">startPath <a href="#option-startPath" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String|Null</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-debugInfo">debugInfo <a href="#option-debugInfo" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-injectFileTypes">injectFileTypes <a href="#option-injectFileTypes" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Array</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-minify">minify <a href="#option-minify" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>

Whether to minify client script, or not.

{% highlight javascript %}

{% endhighlight %}


<h3 id="option-logConnections">logConnections <a href="#option-logConnections" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-host">host <a href="#option-host" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-codeSync">codeSync <a href="#option-codeSync" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}


<h3 id="option-timestamps">timestamps <a href="#option-timestamps" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
</ul>



{% highlight javascript %}

{% endhighlight %}

