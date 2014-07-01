---
layout: documentation
title: "BrowserSync API"
page-label: "api"
---

Our API is incredibly simple & powerful. You can use it to create your own
tiny node program for local development or integrate with other tools. To use it, simply <code>require</code> the BrowserSync module like you would any other.
This will give you access to the public methods detailed below.

{% highlight javascript %}
{% include scripts/api/require.js %}
{% endhighlight %}

###browserSync( config, callback ) {#browser-sync-init}

* config 
* \- Object
* {:.recede} \- [optional]

This is the main configuration for your BrowserSync instance and can contain any of the [available options](/docs/options)
If you do not pass a config an argument for configuration, BrowserSync will still run; but it will be in the `snippet` mode

* callback
* \- Function
* {:.recede} \- [optional]

If you pass a callback function, it will be called when BrowserSync has completed all setup tasks and is ready to use. This
is useful when you need to wait for information (for example: urls, port etc). The first argument will be an error, if any occurred
during startup and the second will be the running BrowserSync instance.

{% highlight javascript %}
{% include scripts/api/init.js %}
{% endhighlight %}


###.reload( arg )

* arg
* \- String \| Array \| Object
* {:.recede} \- [optional]

Can be a single filepath, an array of file paths, or a config object for streams support.
No arguments will cause all browsers to refresh. Streams are also supported, so if you are processing files you can `.pipe()` them to the reload method at the exact point that you 
want to browsers to be informed. Please checkout the [GulpJS Section]({{site.links.gulp}}) for more examples of using the streams support.

The `reload` method will inform all browsers about changed files and will either cause the browser to refresh, or inject the files where possible.

{% highlight javascript %}
{% include scripts/api/reload.string.js %}
{% endhighlight %}


###.notify( content )

* content 
* \- String

Can be a regular string, or HTML (as it's inserted into the DOM via `innerHTML`)

You can flash a message to all browsers by calling this method. You could use this for displaying console errors,
waiting messages, or anything else! A common use-case would be to notify a user that an async task has started/finished -
compiling SASS/LESS for example. That's exactly how we use it to build <em>this</em> website, along with a little notification 
when Jekyll is re-building.


{% highlight javascript %}
{% include scripts/api/notify.js %}
{% endhighlight %}

###.active {#browser-sync-active}

* property
* \- Boolean

A simple true/false flag that you can use to determine if there's a currently-running BrowserSync instance



{% highlight javascript %}
{% include scripts/api/active.js %}
{% endhighlight %}

###.exit()

This method will close any running server, stop file watching & exit the current process.

{% highlight javascript %}
{% include scripts/api/exit.js %}
{% endhighlight %}