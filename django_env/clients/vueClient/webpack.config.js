const 	webpack = require( 'webpack' ),
		path = require( 'path' ),
		UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {

	entry : './src/scripts/app.js',

	output : {
		filename : 'bundle.js',
		path : path.resolve( __dirname, 'bin/resources/scripts/' )
	},

	module : {
		loaders : [
			{
				test : /\.jsx?$/,
				loader : 'babel-loader',
				exclude : /node_modules/
			}
		]
	},

	resolve : {
		modules : [
			path.resolve( './node_modules' ),
			path.resolve( './src/scripts' )
		],

		extentions : [ '.js', '.jsx', '.json' ],

		alias: {
            vue : 'vue/dist/vue.min'
        },

	},

	devtool : 'source-map',

	plugins : [
		new UglifyJSPlugin( {
			sourceMap : true
		} )
	],

	watch : true

}
