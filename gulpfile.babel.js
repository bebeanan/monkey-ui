import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from "gulp-util";
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';

const dirs={
	src : ['./components/**/*.js','./components/**/*.jsx'],
	less :['./components/**/*.less'],
	dist: 'lib'
}

gulp.task('webpack',() =>{
	webpack(webpackConfig,function (callback) {
		
	});
});
// gulp.task('dev',() =>{
// 	var myConfig = Object.create(webpackConfig);
// 	myConfig.devtool = 'eval';
// 	myConfig.debug = true;
//     new WebpackDevServer(webpack(myConfig), {
// 		publicPath: "./dist/",
// 		stats: { 
// 			colors: true 
// 		},
// 		inline : true,
// 		hot : true
//     }).listen(8080, "localhost", function(err) {
// 		if(err) throw new gutil.PluginError("webpack-dev-server", err);
// 		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
//     });
// });

gulp.task('less',() =>{
	return gulp.src(dirs.less)
		.pipe(gulp.dest(dirs.dist))
});

gulp.task('babel',() => {
	return gulp.src(dirs.src)
		.pipe(babel())
		.pipe(gulp.dest(dirs.dist))
});

gulp.task('build',()=>{
	gulp.start('babel', 'less');
});


