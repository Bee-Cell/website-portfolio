var gulp = require("gulp"),
    watch = require("gulp-watch");

//postcss imports and plugins to automate
var postcss = require("gulp-postcss"),
    autoPrefixer = require("autoprefixer"),
    cssVariable = require("postcss-simple-vars"),
    cssNested = require("postcss-nested"),
    mixins = require("postcss-mixins"),
    cssImport = require("postcss-import"),
    hexrgba = require("postcss-hexrgba");

//webpack
var webpack = require("webpack");
    

//the task for html
gulp.task("html", function(){
    console.log("starting the html task from watch");
    //in html browser sync automatically 
    
});

//the task for css
gulp.task("css", function(){
   console.log("starting css task from the watch"); 
    //in css we need post css features, manuplute and then convert into single file
    
    //load postcss config
    return gulp.src("./app/assets/styles/styles.css")
            .pipe(postcss([cssImport, mixins, cssVariable, cssNested, hexrgba, autoPrefixer]))
            .on('error', function(errorInfo){
                    console.log(errorInfo.toString());
                    //continue running
                    this.emit('end');
                })
            .pipe(gulp.dest("./app/temp/styles")) ;
});


//scripts 
gulp.task("script", function(callback){
    console.log("starting script task from the watch");
    //installing webpack locally inside watch
    webpack(require("./webpack.config.js"), function(err,  stats){
           if(err){
               console.log(err.toString());
           } 
            console.log(stats.toString());
            callback();
    }); 
});


//watch
gulp.task("watch", function(){
    
    //watching the html index 
    watch("./app/index.html", function(){
       gulp.start("html"); 
    });
    
    //watching the css from the assets
    watch("./app/assets/styles/**/*.css", function(){
       gulp.start("css"); 
    });
    
    //watching the scripts ./app/assets/scripts/**/*.js
    watch("./app/assets/scripts/**/*.js",function(){
        gulp.start("script");
    })
});