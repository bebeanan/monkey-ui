import gulp from 'gulp';
import babel from 'gulp-babel';
import less from 'gulp-less';
import concat from 'gulp-concat';
import cssmin from 'gulp-minify-css';
import gutil from "gulp-util";
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';

const dirs={
	src : ['./components/**/*.js','./components/**/*.jsx'],
	less :[	'./components/style/index.less',
			'./components/button/style/index.less',
			'./components/layout/style/index.less',
			'./components/modal/style/index.less',
			'./components/tree/style/index.less',
			'./components/message/style/index.less'
			],
	lib: 'lib',
	dist :'lib/dist'
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
		.pipe(less())
		.pipe(concat('monkeyui.css'))
		.pipe(cssmin())
		.pipe(gulp.dest(dirs.dist))
});

gulp.task('babel',() => {
	return gulp.src(dirs.src)
		.pipe(babel())
		.pipe(gulp.dest(dirs.lib))
});

gulp.task('build',()=>{
	gulp.start('babel', 'less');
});


