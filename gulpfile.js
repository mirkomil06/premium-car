global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  path: {
    serverDir: './app/build',
    tasks: require('./gulp/config'),
    src: {
      html: './app/src/*.{html,pug}',
      style: './app/src/styles/*.*',
      js: './app/src/script/*.js',
      img: './app/src/img/*.{jpg,jpeg,gif,png}',
      fonts: './app/src/fonts/**/**/*.*'
    },
    build: {
      html: './app/build',
      style: './app/build/styles/',
      js: './app/build/scripts/',
      img: './app/build/img/',
      fonts: './app/build/fonts/'
    },
    watch: {
      html: ['./app/src/*.{html,pug}', './app/src/view/*.{html,pug}'],
      style: './app/src/styles/**/*.*',
      js: './app/src/**/*.js',
      img: './app/src/img/**/*.{jpg,jpeg,gif,png}',
      fonts: './app/src/fonts/**/**/*.*'
    }
  },
  tasks: {
    default: ['html', 'style', 'js', 'img', 'fonts', 'watch', 'serve'],
    build: ['html', 'style', 'js', 'img','fonts']
  }
}

$.path.tasks.forEach(taskPath => require(taskPath)())


for (let key in $.tasks) {
  $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}

