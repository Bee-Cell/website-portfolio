//watch code here
var gulp = require("gulp"),
    watch = require("gulp-watch");

//importing scriptsand styl
var scripts = require("./scripts"),
	styles = require("./styles");


//the task for html
gulp.task("html", function(){
    console.log("starting the html task from watch");
    //in html browser sync automatically 
    
});


//watch
gulp.task("watch", function(){
    
    //watching the html index 
    watch("./app/index.html", function(){
       gulp.start("html"); 
    });
    
    //watching the css from the assets
    watch("./app/assets/styles/**/*.css", function(){
       gulp.start("styles"); 
    });
    
    //watching the scripts ./app/assets/scripts/**/*.js
    watch("./app/assets/scripts/**/*.js",function(){
        gulp.start("scripts");
    })
});