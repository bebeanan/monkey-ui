import gulp from 'gulp';
import gulpLoadPlugins from  'gulp-load-plugins';
import babel from 'gulp-babel';
import less from 'gulp-less';
import concat from 'gulp-concat';
import cssmin from 'gulp-minify-css';
import gutil from "gulp-util";
import webpack from 'webpack';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';
const dirs={
	src : ['./components/**/*.js','./components/**/*.jsx'],
	less :[	'./components/style/index.less',
			'./components/**/style/index.less',
			// './components/layout/style/index.less',
			// './components/modal/style/index.less',
			// './components/tree/style/index.less',
			// './components/message/style/index.less',
			// './components/alert/style/index.less',
			// './components/collapse/style/index.less',
			// './components/input/style/index.less'
			],
	lib: 'lib',
	dist :'lib/dist'
}

gulp.task('webpack',() =>{
	webpack(webpackConfig,function (callback) {
		
	});
});

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

// 监控修改自动编译
gulp.task('watch', () => {
  gulp.watch('./components/**/style/*.less', ['build']);
  gulp.watch('./components/**/*.js', ['build']);
  gulp.watch('./components/**/*.jsx', ['build']);
  gulp.watch('./demo/**/*.js', ['build']);
  gulp.watch('./demo/js/**/*.js', ['build']);
  gulp.watch('./demo/**/*.html', ['build']);
});

// 启动预览服务自动刷新浏览器
gulp.task('default', ['build', 'watch'], () => {
 /* const bs = browserSync.create();

  bs.init({
    notify: false,
    logPrefix: 'AMT',
    server: 'demo/templates/'
  });
  gulp.watch('components', bs.reload);
  gulp.watch('demo', bs.reload);*/
});
