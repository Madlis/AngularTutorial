'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

var bc = './bower_components/';

gulp.task('js', function() {
  gulp.src('project/src/app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('project/build/app/'))
});

gulp.task('html', function() {
  gulp.src('project/src/*.html')
    .pipe(gulp.dest('project/build/'))
});

gulp.task('sass', function () {
  gulp.src('project/src/styles/*.scss')
      .pipe(sass())
      // .pipe(sass({outputStyle: 'compressed'}))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('project/build/styles'));
});

gulp.task('img', function() {
  gulp.src('project/src/img/**/*.*')
    .pipe(gulp.dest('project/build/img/'));
});

gulp.task('watch', function() {

  gulp.watch('project/src/app/**/*.js', ['js']);
  gulp.watch('project/src/styles/*.scss', ['sass']);
  gulp.watch('project/src/**/*.html', ['html']);
  gulp.watch('project/src/img/**/*.*', ['img']);
});

gulp.task('libs', function() {
  gulp.src(bc+'jquery/dist/jquery.js')
      .pipe(gulp.dest('./project/build/libs/jquery/'));

  gulp.src(bc+'bootstrap/dist/**/*.*')
      .pipe(gulp.dest('./project/build/libs/bootstrap/'));

  // gulp.src(bc+'bootstrap-material-design/dist/**/*.*')
  //     .pipe(gulp.dest('./builds/dist/libs/bootstrap-material-design/'));

  gulp.src([bc+'angular/angular.js',
            bc+'angular-animate/angular-animate.js',
            bc+'angular-cookies/angular-cookies.js',
            bc+'angular-i18n/angular-locale_ru-ru.js',
            bc+'angular-loader/angular-loader.js',
            bc+'angular-resource/angular-resource.js',
            bc+'angular-route/angular-route.js',
            bc+'angular-sanitize/angular-sanitize.js',
            bc+'angular-touch/angular-touch.js',
            bc+'firebase/firebase.js',
            bc+'angularfire/dist/angularfire.js',
          ])
      .pipe(concat('angular.concat.js'))
      .pipe(gulp.dest('./project/build/libs/angular/'));
});

gulp.task('webserver', function() {
  gulp.src('project/build/')
      .pipe(webserver({
        livereload: true,
        open: false
      }));
});

gulp.task('default', ['libs','html','img','js','sass','webserver','watch']);
