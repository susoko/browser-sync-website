---
layout: documentation
title: "BrowserSync options"
page-label: "options"
---

These are all the options that you can configure when using BrowserSync. Create a single object and pass 
it as the [first argument](/docs/api/#api-browserSync) (for GulpJS and normal API usage). If you're using Grunt, you can 
still use all of these options, but you need to provide them as detailed in the [BrowserSync Grunt Documentation]({{site.links.grunt}})

{% highlight javascript %}
{% include snippets/options/require.js %}
{% endhighlight %}


<h3 id="option-files">files <a href="#option-files" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Array | String</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>

<p>BrowserSync can watch your files as you work. Changes you make will either
be injected into the page (CSS &amp; images) or will cause all browsers to do
a full-page refresh. See <a href="https://github.com/isaacs/minimatch">isaacs&#39;s minimatch</a> for more information on glob patterns.</p>


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
<h3 id="option-watchOptions">watchOptions <a href="#option-watchOptions" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object</span>
    
    </li>
    
    <li class="since">Since: <span class="color-teal">1.3.0</span></li>
    
    <li class="default">Default: <span class="color-teal">undefined</span></li>
    
</ul>

<p>File watching options that get passed along to <a href="https://github.com/shama/gaze">Gaze</a>. Check out the <a href="https://github.com/shama/gaze#properties">properties</a>
section of their docs to see which options they support.
for availbable options</p>


{% highlight javascript %}
// Options passed to Gaze
watchOptions: {
    debounceDelay: 1000
}
{% endhighlight %}
<h3 id="option-server">server <a href="#option-server" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object | Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>

<p>Use the built-in static server for basic HTML/JS/CSS websites.</p>


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

// Since version 1.2.1
server: {
    baseDir: "app",
    routes: {
        "/bower_components": "../bower_components"
    }
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
    <li class="type">Type: <span class="color-teal">String | Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>

<p>Proxy an EXISTING vhost. BrowserSync will wrap your existing url and provide a different one to use.</p>


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
    <li class="type">Type: <span class="color-teal">Number</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">3000</span></li>
    
</ul>



{% highlight javascript %}
// Use a specific port (instead of the one auto-detected by BrowserSync)
port: 8080
{% endhighlight %}
<h3 id="option-https">https <a href="#option-https" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="since">Since: <span class="color-teal">1.3.0</span></li>
    
    <li class="default">Default: <span class="color-teal">undefined</span></li>
    
</ul>

<p>Enable https for localhost development. <strong>Note:</strong> Proxy and Tunnel not currently supported.</p>


{% highlight javascript %}
// Enable HTTPS for static file server
https: true
{% endhighlight %}
<h3 id="option-ghostMode">ghostMode <a href="#option-ghostMode" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object</span>
    
        <ul class="nav nav--stacked subprops">
            
                <li><b>clicks</b> - Default: <span class="color-teal">true</span></li>
            
                <li><b>scroll</b> - Default: <span class="color-teal">true</span></li>
            
                <li><b>location</b> - Default: <span class="color-teal">false</span></li>
            
                <li><b>forms</b> - Default: <span class="color-teal">true</span></li>
            
        </ul>
    </li>
    
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
    <li class="type">Type: <span class="color-teal">String</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">info</span></li>
    
</ul>

<p>Can be either &quot;info&quot;, &quot;debug&quot;, &quot;warn&quot;, or &quot;silent&quot;</p>


{% highlight javascript %}
// Show me additional info about the process
logLevel: "debug"

// Just show basic info
logLevel: "info"

// output NOTHING to the commandline
logLevel: "silent"
{% endhighlight %}
<h3 id="option-logPrefix">logPrefix <a href="#option-logPrefix" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String</span>
    
    </li>
    
    <li class="since">Since: <span class="color-teal">1.5.1</span></li>
    
    <li class="default">Default: <span class="color-teal">BS</span></li>
    
</ul>

<p>Change the console logging prefix. Useful if you&#39;re creating your
own project based on BrowserSync</p>


{% highlight javascript %}
logPrefix: "My Awesome Project"

// [My Awesome Project] Local URL: http://localhost:3000
// [My Awesome Project] Watching files....
// [My Awesome Project] File changed: "index.html"
{% endhighlight %}
<h3 id="option-logConnections">logConnections <a href="#option-logConnections" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>



{% highlight javascript %}
// Log connections
logConnections: true

// Don't log connections
logConnections: false
{% endhighlight %}
<h3 id="option-logFileChanges">logFileChanges <a href="#option-logFileChanges" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Log information about changed files
logFileChanges: true

// Don't log file changes
logFileChanges: false
{% endhighlight %}
<h3 id="option-logSnippet">logSnippet <a href="#option-logSnippet" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">: Boolean</span>
    
    </li>
    
    <li class="since">Since: <span class="color-teal">1.5.2</span></li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>

<p>Log the snippet to the console when you&#39;re in snippet mode (no proxy/server)</p>


{% highlight javascript %}

{% endhighlight %}
<h3 id="option-tunnel">tunnel <a href="#option-tunnel" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String | Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">null</span></li>
    
</ul>



{% highlight javascript %}
// Tunnel the BrowserSync server through a random Public URL
// -> http://randomstring23232.localtunnel.me
tunnel: true

// Attempt to use the URL "http://my-private-site.localtunnel.me"
tunnel: "my-private-site"
{% endhighlight %}
<h3 id="option-online">online <a href="#option-online" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">undefined</span></li>
    
</ul>

<p>Some features of BrowserSync (such as <code>xip</code> &amp; <code>tunnel</code>) require an internet connection, but if you&#39;re
working offline, you can reduce start-up time by setting this option to <code>false</code></p>


{% highlight javascript %}
// Will not attempt to determine your network status, assumes you're ONLINE.
online: true

// Will not attempt to determine your network status, assumes you're OFFLINE
online: false
{% endhighlight %}
<h3 id="option-open">open <a href="#option-open" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean | String</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>

<p>Decide which URL to open automatically when BrowserSync starts. Defaults to &quot;local&quot; if none set.
Can be true, &quot;local&quot;, &quot;external&quot; or &quot;tunnel&quot;</p>


{% highlight javascript %}
// Stop the browser from automatically opening
open: false

// Open the localhost URL
open: true

// The following availble since v1.3.0

// Open the external URL - must be online.
open: "external"

// Open the tunnel URL - must also set the `tunnel` option
open: "tunnel"
{% endhighlight %}
<h3 id="option-browser">browser <a href="#option-browser" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String | Array</span>
    
    </li>
    
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
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">false</span></li>
    
</ul>

<p>Requires an internet connection - useful for services such as <a href="https://typekit.com/">Typekit</a>
as it allows you to configure domains such as <code>*.xip.io</code> in your kit settings</p>


{% highlight javascript %}
// Append '.xip.io' to the hostname. (eg: http://192.168.0.4.xip.io:3002)
xip: true
{% endhighlight %}
<h3 id="option-notify">notify <a href="#option-notify" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>

<p>The small pop-over notifications in the browser are not always needed/wanted.</p>


{% highlight javascript %}
// Don't show any notifications in the browser.
notify: false
{% endhighlight %}
<h3 id="option-scrollProportionally">scrollProportionally <a href="#option-scrollProportionally" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
scrollProportionally: false // Sync viewports to TOP position
{% endhighlight %}
<h3 id="option-scrollThrottle">scrollThrottle <a href="#option-scrollThrottle" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">0</span></li>
    
</ul>



{% highlight javascript %}
scrollThrottle: 100 // only send scroll events every 100 milliseconds
{% endhighlight %}
<h3 id="option-reloadDelay">reloadDelay <a href="#option-reloadDelay" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Number</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">0</span></li>
    
</ul>



{% highlight javascript %}
// Wait for 2 seconds before any browsers should try to inject/reload a file.
reloadDelay: 2000
{% endhighlight %}
<h3 id="option-injectChanges">injectChanges <a href="#option-injectChanges" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
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
    <li class="type">Type: <span class="color-teal">String | Null</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">null</span></li>
    
</ul>



{% highlight javascript %}
// Open the first browser window at URL + "/info.php"
startPath: "/info.php"
{% endhighlight %}
<h3 id="option-minify">minify <a href="#option-minify" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>

<p>Whether to minify client script, or not.</p>


{% highlight javascript %}
// Don't minify the client-side JS
minify: false
{% endhighlight %}
<h3 id="option-host">host <a href="#option-host" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">String</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">null</span></li>
    
</ul>



{% highlight javascript %}
// Override host detection if you know the correct IP to use
host: "192.168.1.1"
{% endhighlight %}
<h3 id="option-codeSync">codeSync <a href="#option-codeSync" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Don't send any file-change events to browsers
codeSync: true,
{% endhighlight %}
<h3 id="option-timestamps">timestamps <a href="#option-timestamps" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Boolean</span>
    
    </li>
    
    <li class="default">Default: <span class="color-teal">true</span></li>
    
</ul>



{% highlight javascript %}
// Don't append timestamps to injected files
timestamps: false
{% endhighlight %}
<h3 id="option-socket">socket <a href="#option-socket" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>
<ul class="param-list">
    <li class="type">Type: <span class="color-teal">Object</span>
    
        <ul class="nav nav--stacked subprops">
            
                <li><b>path</b> - Default: <span class="color-teal">"/browser-sync/socket.io"</span></li>
            
                <li><b>clientPath</b> - Default: <span class="color-teal">"/browser-sync"</span></li>
            
                <li><b>namespace</b> - Default: <span class="color-teal">"/browser-sync"</span></li>
            
        </ul>
    </li>
    
</ul>

<p>Configure the Socket.IO path and namespace to avoid collisions.</p>


{% highlight javascript %}

{% endhighlight %}
