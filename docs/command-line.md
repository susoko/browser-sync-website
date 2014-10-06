---
layout: documentation
title: "BrowserSync Command Line Usage"
page-label: "command-line"
---

For *tinkering* or quick examples and playing around, the command-line usage can be quite helpful. 
After install BrowserSync globally, you can run it like this:

{% highlight bash %}
$ browser-sync start <options>
{% endhighlight %}

<h3 id="command-line-options">Options
    <a href="#command-line-options" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>

<p>These are the options you can use when running BrowserSync</p>

<table>
    
        <tr>
            <td>--files</td>
            <td>File paths to watch</td>
        </tr>
    
        <tr>
            <td>--exclude</td>
            <td>File patterns to ignore</td>
        </tr>
    
        <tr>
            <td>--server</td>
            <td>Run a Local server (uses your cwd as the web root)</td>
        </tr>
    
        <tr>
            <td>--index</td>
            <td>Specify which file should be used as the index page</td>
        </tr>
    
        <tr>
            <td>--startPath</td>
            <td>Specify the start path for the opened browser</td>
        </tr>
    
        <tr>
            <td>--https</td>
            <td>Enable SSL for local development</td>
        </tr>
    
        <tr>
            <td>--directory</td>
            <td>Show a directory listing for the server</td>
        </tr>
    
        <tr>
            <td>--proxy</td>
            <td>Proxy an existing server</td>
        </tr>
    
        <tr>
            <td>--xip</td>
            <td>Use xip.io domain routing</td>
        </tr>
    
        <tr>
            <td>--tunnel</td>
            <td>Use a public URL</td>
        </tr>
    
        <tr>
            <td>--open</td>
            <td>Choose which URL is auto-opened (local, external or tunnel)</td>
        </tr>
    
        <tr>
            <td>--config</td>
            <td>Specify a path to a bs-config.js file</td>
        </tr>
    
        <tr>
            <td>--host</td>
            <td>Specify a hostname to use</td>
        </tr>
    
        <tr>
            <td>--logLevel</td>
            <td>Set the logger output level (silent, info or debug)</td>
        </tr>
    
        <tr>
            <td>--port</td>
            <td>Specify a port to use</td>
        </tr>
    
        <tr>
            <td>--no-notify</td>
            <td>Disable the notify element in browsers</td>
        </tr>
    
        <tr>
            <td>--no-open</td>
            <td>Don't open a new browser window</td>
        </tr>
    
        <tr>
            <td>--no-ghost</td>
            <td>Disable Ghost Mode</td>
        </tr>
    
        <tr>
            <td>--no-online</td>
            <td>Force offline usage</td>
        </tr>
    
</table>



<h3 id="command-line-Files Examples-examples">Files Examples
    <a href="#command-line-Files Examples-examples" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>

{% highlight bash %}

# Single file
$ browser-sync start --files "css/core.css"

# Single Pattern
$ browser-sync start --files "css/*.css"

# Multiple files
$ browser-sync start --files "css/core.css, css/ie.css"

# Multiple Patterns
$ browser-sync start --files "css/*.css, *.html"

{% endhighlight %}

<h3 id="command-line-Server Examples-examples">Server Examples
    <a href="#command-line-Server Examples-examples" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>

{% highlight bash %}

# Static server using current directory as the root
$ browser-sync start --server

# Static server using the 'app' directory as the root
$ browser-sync start --server app

# Static server using current directory as the root with directory listing
$ browser-sync start --server --directory

{% endhighlight %}

<h3 id="command-line-Proxy Examples-examples">Proxy Examples
    <a href="#command-line-Proxy Examples-examples" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>

{% highlight bash %}

# Using a local.dev vhost
$ browser-sync start --proxy

# Using a local.dev vhost with PORT
$ browser-sync start --proxy local.dev:8001

# Using a localhost address
$ browser-sync start --proxy localhost:8001

# Using a localhost address in a sub-dir
$ browser-sync start --proxy localhost:8080/site1

{% endhighlight %}

<h3 id="command-line-Watching Files + Server-examples">Watching Files + Server
    <a href="#command-line-Watching Files + Server-examples" class="page-anchor"><i class="icon icon-external-link"></i></a></h3>

{% highlight bash %}

# Watch ALL CSS files for changes with a static server
$ browser-sync start --files "app/css/*.css" --server

#  Watch ALL CSS files for changes with a static server using "app" as the base directory
$ browser-sync start --files "app/css/*.css" --server "app"

{% endhighlight %}


