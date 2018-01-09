function Task(gulp, pathFiles, plugins, fn){

  var runTasks = function () {
    gulp.task('css', function(cb) {
      var processors = [
        plugins.autoprefixer(),
        plugins.cssmqpacker()
      ];
      return gulp.src([pathFiles.src.app + "/**/*.scss", pathFiles.src.base + "/styles.scss"], { base: "./" })
        .pipe(plugins.sass())
        .pipe(plugins.postcss(processors))
        .pipe(plugins.urlVersion({ lastcommit: true }))
        .pipe(gulp.dest("./"))
        .on('end', fn.successHandler);
    });
  };

  return {
    run : runTasks
  }
}

module.exports = Task;
