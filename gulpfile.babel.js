import gulp from 'gulp';
import babel from 'gulp-babel';

const dirs={
	src : ['./components/**/*.js','./components/**/*.jsx'],
	less :['./components/**/*.less'],
	dest: 'lib'
}

gulp.task('less',() =>{
	return gulp.src(dirs.less)
		.pipe(gulp.dest(dirs.dest))
});

gulp.task('babel',() => {
	return gulp.src(dirs.src)
		.pipe(babel())
		.pipe(gulp.dest(dirs.dest))
});


gulp.task('default',()=>{
	gulp.start('babel', 'less');
});

