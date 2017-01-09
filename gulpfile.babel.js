import gulp from 'gulp';
import babel from 'gulp-babel';
import less from 'gulp-less';
import concat from 'gulp-concat';
import cssmin from 'gulp-minify-css';
import gutil from "gulp-util";
import webpack from 'gulp-webpack';
import uglify from 'gulp-uglify';
import minifyHtml from 'gulp-htmlmin'
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';
import  HtmlWebpackPlugin from 'html-webpack-plugin';
import ts from 'ts-loader';
const dirs={
	demosrc : ['./demo/js/index.js'],
	src : ['./components/**/*.js','./components/**/*.jsx','./components/**/*.ts'],
	less :[	'./components/style/index.less',
			'./components/**/style/index.less',
			],
	lib: 'lib',
	demolib: 'showdemo/js',
	dist :'lib/dist'
}


gulp.task('less',() =>{
	return gulp.src(dirs.less)
		.pipe(less())
		.pipe(concat('monkeyui.css'))
		.pipe(cssmin())
		.pipe(gulp.dest(dirs.dist))
		.pipe(gulp.dest('./showdemo/css'))
});
//demo的css
gulp.task('demoless',() =>{
	return gulp.src('./demo/css/democss.css')
		.pipe(less())
		.pipe(concat('democss.css'))
		.pipe(cssmin())
		.pipe(gulp.dest(dirs.dist))
		.pipe(gulp.dest('./showdemo/css'))
});

gulp.task('babel',() => {
	return gulp.src(dirs.src)
		.pipe(babel())
		.pipe(gulp.dest(dirs.lib))
});
// 压缩 HTML
gulp.task('html', () => {
  return gulp.src('./demo/templates/index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./showdemo'))
});
//压缩js
gulp.task('demojs',() => {
	return gulp.src(dirs.demosrc)
		   .pipe(webpack({
		      watch: false,
		      output: {
		        filename: 'index.js',
		        comments: false,  // remove all comments
		      },
		      module: {
		        loaders: [
		          {
		            test: /\.js$/,
		            exclude: /node_modules/,
		            loader: 'babel'
		          },
		          {
		            test: /\.ts$/,
		            exclude: /node_modules/,
		            loader: 'ts-loader'
		          }
		        ]
      		},
		    }))
		.pipe(gulp.dest(dirs.demolib))
		/*ss.pipe(uglify(
	        {
	            mangle: true,//类型：Boolean 默认：true 是否修改变量名
	            compress: true,//类型：Boolean 默认：true 是否完全压缩
	            //preserveComments: 'all' //保留所有注释
	            comments: false
	        }
	      ))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest(dirs.demolib))
	    .pipe(size({
	      title: 'script minify'
	    }));*/
});


gulp.task('build',()=>{
	gulp.start('babel', 'less','demoless','demojs','html');
});

// 监控修改自动编译
gulp.task('watch', () => {
  gulp.watch('./components/**/style/*.less', ['build']);
  gulp.watch('./components/**/*.js', ['build']);
  gulp.watch('./components/**/*.jsx', ['build']);
  gulp.watch('./demo/js/**/*.js', ['build']);
  gulp.watch('./demo/templates/**/*.html', ['build']);
});

// 启动预览服务自动刷新浏览器
gulp.task('default', ['build', 'watch'], () => {
  const bs = browserSync.create();

  bs.init({
    notify: false,
    logPrefix: 'AMT',
    server: 'showdemo/'
  });
  gulp.watch('components', bs.reload);
  gulp.watch('demo', bs.reload);
});
