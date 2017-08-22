var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('default', ['css'], function() {

	browserSync.init({
    	server: "./" // INICIA SERVIDOR EN DIRECTORIO RAÍZ
    });

	gulp.watch("./sass/*.scss", ['css']); // OBSERVA LA FUNCIÓN 'CSS'
    gulp.watch("./*.html").on('change', browserSync.reload); // OBSERVA CAMBIOS EN *.HTML Y RECARGA BROWSER	

});

gulp.task('css', function() {
	return gulp.src('./sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});