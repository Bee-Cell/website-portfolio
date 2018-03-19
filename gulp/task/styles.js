//css functionality
var gulp = require("gulp");

//postcss imports and plugins to automate
var postcss = require("gulp-postcss"),
    autoPrefixer = require("autoprefixer"),
    cssVariable = require("postcss-simple-vars"),
    cssNested = require("postcss-nested"),
    mixins = require("postcss-mixins"),
    cssImport = require("postcss-import"),
    hexrgba = require("postcss-hexrgba");



//the task for css
module.exports = gulp.task("styles", function(){
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
