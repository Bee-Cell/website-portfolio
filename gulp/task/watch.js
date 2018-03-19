//watch code here
var gulp = require("gulp"),
    watch = require("gulp-watch");
    browserSync = require("browser-sync").create();

//importing scriptsand styl
var scripts = require("./scripts"),
	styles = require("./styles");


//the task for html
gulp.task("html", function(){
    console.log("starting the html task from watch");
    //in html browser sync automatically 
    browserSync.reload();
    
});


//watch
gulp.task("watch", function(){

	//init browser sync
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
    
    //watching the html index 
    watch("./app/index.html", function(){
       gulp.start("html"); 
    });
    
    //watching the css from the assets
    watch("./app/assets/styles/**/*.css", function(){
       gulp.start("cssInject"); 
    });
    
    //watching the scripts ./app/assets/scripts/**/*.js
    watch("./app/assets/scripts/**/*.js",function(){
        gulp.start("scriptsRefresh");
    })
});

//browser sync with stream 
gulp.task("cssInject", ["styles"], function(){
	return gulp.src("./app/temp/styles/styles.css")
			.pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function(){
	browserSync.reload();
});