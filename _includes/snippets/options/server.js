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