var gulp = require( 'gulp' ),
	webpack = require( 'webpack' ),
	sass = require( 'gulp-sass' ),
	sourcemaps = require( 'gulp-sourcemaps' ),
	plumber = require( 'gulp-plumber' ),
	clean = require( 'gulp-clean' );

gulp.task( 'build', [ 'build-markup', 'build-scripts', 'build-styles' ] );

gulp.task( 'build-markup', function(){

	gulp.src( 'src/markup/**/*.html' )
		.pipe( gulp.dest( 'bin/' ) );

} );

gulp.task( 'build-scripts', function(){
	
	webpack( require( './webpack.config.js' ), ( err, stats ) => {
		if( err ) console.logError( "Webpack", err );
		console.log( stats.toString() );
	} );

	// gulp.src( 'src/scripts/main.js' )
	// 	.pipe( webpack( require( './webpack.config.js' ) ) )
	// 	.pipe( gulp.dest( 'bin/resources/scripts' ) );

} );

gulp.task( 'build-styles', function(){
	
	gulp.src( 'src/styles/app.scss' )
		.pipe( plumber() )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle : 'compressed' } ) )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( 'bin/resources/styles' ) );

} );

gulp.task( 'watch', function(){

	gulp.watch( 'src/markup/**/*.html', [ 'build-markup' ] );

} );

gulp.task( 'clean', function(){

	return 	gulp.src( 'bin/', { read: false } )
				.pipe( clean( { force : true } ) );

} );

gulp.task( 'default', [ 'clean' ],function(){

	gulp.start( 'build' );

} );

gulp.task( 'dev', [ 'default' ], function(){

	gulp.start( 'watch' );

} );
