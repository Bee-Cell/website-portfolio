//scripts funconaltiy 
var gulp = require("gulp");

//webpack
var webpack = require("webpack");

//scripts 
module.exports =  gulp.task("scripts", function(callback){
    console.log("starting script task from the watch");
    //installing webpack locally inside watch
   webpack(require("../../webpack.config.js"), function(err,  stats){
          if(err){
              console.log(err.toString());
          } 
           console.log(stats.toString());
           callback();
   }); 
});
