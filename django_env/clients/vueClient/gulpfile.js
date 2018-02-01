var gulp = require( 'gulp' ),
	webpack = require( 'gulp-webpack' ),
	clean = require( 'gulp-clean' );

gulp.task( 'build', [ 'build-markup', 'build-scripts' ] );

gulp.task( 'build-markup', function(){

	gulp.src( 'src/markup/**/*.html' )
		.pipe( gulp.dest( 'bin/' ) );

} );

gulp.task( 'build-scripts', function(){
	
	gulp.src( 'src/scripts/app.js' )
		.pipe( webpack( require( './webpack.config.js' ) ) )
		.pipe( gulp.dest( 'bin/resources/scripts' ) );

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
