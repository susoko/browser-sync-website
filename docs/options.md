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
{% include snippets/options/require.js %}
{% endhighlight %}


<h3 id="option-files">files <a href="#option-files" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Array|String</span></li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>

BrowserSync can watch your files as you work. Changes you make will either
be injected into the page (CSS & images) or will cause all browsers to do
a full-page refresh instead.

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
    
        <ul>
            
                <li>clicks - Default: true</li>
            
                <li>scroll - Default: true</li>
            
                <li>location - Default: false</li>
            
                <li>forms - Default: true</li>
            
        </ul>
    
</ul>



{% highlight javascript %}
// Here you can disable/enable each feature individually
ghostMode: {
    clicks: true,
        location: true,
        forms: true,
        scroll: false
}

// Or switch them all off in one go
ghostMode: false
{% endhighlight %}
<h3 id="option-logLevel">logLevel <a href="#option-logLevel" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String</span></li>
    
    <li class="default">Default: <span class="color-teal">info</span></li>
    
</ul>

Can be either "info", "debug" or "silent"

{% highlight javascript %}
// Show me additional info about the process
logLevel: "debug"

// Just show basic info
logLevel: "info"

// output NOTHING to the commandline
logLevel: "silent"
{% endhighlight %}
<h3 id="option-server">server <a href="#option-server" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object|Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
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
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
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
    
    <li class="default">Default: <span class="color-teal">3000</span></li>
    
</ul>



{% highlight javascript %}
// Use a specific port (instead of the one auto-detected by BrowserSync)
port: 8080
{% endhighlight %}
<h3 id="option-open">open <a href="#option-open" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Stop the browser from automatically opening
open: false
{% endhighlight %}
<h3 id="option-tunnel">tunnel <a href="#option-tunnel" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String|Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal"></span></li>
    
</ul>



{% highlight javascript %}
// Tunnel the BrowserSync server through a random Public URL
// -> http://randomstring23232.localtunnel.me
tunnel: true

// Attempt to use the URL "http://my-private-site.localtunnel.me"
tunnel: "my-private-site"
{% endhighlight %}
<h3 id="option-browser">browser <a href="#option-browser" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String|Array</span></li>
    
    <li class="default">Default: <span class="color-teal">default</span></li>
    
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
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>



{% highlight javascript %}
// Use the xip.io
xip: true
{% endhighlight %}
<h3 id="option-hostnameSuffix">hostnameSuffix <a href="#option-hostnameSuffix" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean|String</span></li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>



{% highlight javascript %}
// Append '.xip.io' to the hostname. (eg: http://192.168.0.4.xip.io:3002)
hostnameSuffix: ".xip.io"
{% endhighlight %}
<h3 id="option-notify">notify <a href="#option-notify" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Don't show any notifications in the browser.
notify: false
{% endhighlight %}
<h3 id="option-debounce">debounce <a href="#option-debounce" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
    
    <li class="default">Default: <span class="color-teal">0</span></li>
    
</ul>

Number in milliseconds to wait before emitting file changed event

{% highlight javascript %}
// Wait for 0.2 seconds since the last file changed to actually reload the browser
debounce: 200
{% endhighlight %}
<h3 id="option-scrollProportionally">scrollProportionally <a href="#option-scrollProportionally" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
scrollProportionally: false // Sync viewports to TOP position
{% endhighlight %}
<h3 id="option-scrollThrottle">scrollThrottle <a href="#option-scrollThrottle" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
    
    <li class="default">Default: <span class="color-teal">0</span></li>
    
</ul>



{% highlight javascript %}
scrollThrottle: 100 // only send scroll events every 100 milliseconds
{% endhighlight %}
<h3 id="option-reloadDelay">reloadDelay <a href="#option-reloadDelay" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span></li>
    
    <li class="default">Default: <span class="color-teal">0</span></li>
    
</ul>



{% highlight javascript %}
// Wait for 2 seconds before any browsers should try to inject/reload a file.
reloadDelay: 2000
{% endhighlight %}
<h3 id="option-injectChanges">injectChanges <a href="#option-injectChanges" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
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
    
    <li class="default">Default: <span class="color-teal">null</span></li>
    
</ul>



{% highlight javascript %}
// Open the first browser window at URL + "/info.php"
startPath: "/info.php"
{% endhighlight %}
<h3 id="option-minify">minify <a href="#option-minify" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>

Whether to minify client script, or not.

{% highlight javascript %}
// Don't minify the client-side JS
minify: false
{% endhighlight %}
<h3 id="option-logConnections">logConnections <a href="#option-logConnections" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>



{% highlight javascript %}
// Log connections
logConnections: true

// Don't log connections
logConnections: false
{% endhighlight %}
<h3 id="option-host">host <a href="#option-host" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String</span></li>
    
    <li class="default">Default: <span class="color-teal">null</span></li>
    
</ul>



{% highlight javascript %}
// Override host detection if you know the correct IP to use
host: "192.168.1.1"
{% endhighlight %}
<h3 id="option-codeSync">codeSync <a href="#option-codeSync" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Don't send any file-change events to browsers
codeSync: true,
{% endhighlight %}
<h3 id="option-timestamps">timestamps <a href="#option-timestamps" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Don't append timestamps to injected files
timestamps: false
{% endhighlight %}