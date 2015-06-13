'use strict';

var gulp = require('gulp');

gulp.task("youSay", function() {
  console.log("You say: ");
});

gulp.task("hello", function() {
  console.log("Hello!");
});

gulp.task("goodbye", function() {
  console.log("Goodbye!");
});

gulp.task("default", ["youSay", "hello", "goodbye"], function() {
  console.log("This is the default task!");
});