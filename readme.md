Source code for [browsersync.io](http://browsersync.io/)

##Installation

To contribute, you'll need to fork this repo & install the following system-wide tools:
 
1. [jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)
4. [Bower](http://bower.io/) - `$ npm install -g bower` (mac users may need sudo)

Next, you need to install the *local* development tools & any 3rd parties libs

```
$ npm install && bower install
```

##Server + BrowserSync
As you can probably imagine, this project actually uses BrowserSync along with Gulp, Jekyll & a few other awesome projects
to make development a joy. To experience the awesomeness, just run the run the following command

```
$ gulp
```

This will compile & prefix the `SCSS` files into `CSS`, build the Jekyll site once & launch a browser window to view the site.
Any changes made to SCSS files will will be auto-injected via BrowserSync & any changes to Markdown or HTML files will cause
Jekyll to rebuild the site. (in which case, BrowserSync will wait until it's finished & then reload all browsers for you).