'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var ngconfig = require('gulp-ng-config');

var createConfigFile = function(task) {
  gulp.src('configfile.json')
  .pipe(ngconfig('pegasusCms.config', {environment: task, wrap: 'export default <%= module %>'}))
  .pipe(gulp.dest(path.join(conf.paths.src, '/app/components/constants')));
};

var currentTask = function(tasks) {
  var task = null;
  Object.keys(tasks).forEach(function(k){
    if (tasks[k].running) {
      task = k;
      return;
    }
  });
  return task;
};


gulp.task('local', function() {
  createConfigFile((currentTask(this.tasks)));
});

gulp.task('development', function() {
  createConfigFile((currentTask(this.tasks)));
});

gulp.task('production', function() {
  createConfigFile((currentTask(this.tasks)));
});
