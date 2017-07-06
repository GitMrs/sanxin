var gulp = require("gulp");
var webserver = require("gulp-webserver");
gulp.task("server",function(){
	gulp.src("./")
		.pipe(webserver({
			livereload:true,
			directorylisting:true,
			open:"./src/index.html"
		}))
})