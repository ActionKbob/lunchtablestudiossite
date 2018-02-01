const 	webpack = require( 'webpack' ),
		path = require( 'path' ),
		UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {

	entry : path.resolve( __dirname, 'src/scripts/main.js' ),

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
			},
			{
				test : /\.vue$/,
				loader : 'vue-loader'
			}
		]
	},

	resolve : {

		modules: [
			path.resolve( './node_modules' ),
			path.resolve( './src/scripts' )
		],
		
		extensions: [ '.js', '.vue', '.json' ],

		alias: {
            vue : 'vue/dist/vue.min'
        }
	},

	devtool : 'source-map',

	plugins : [
		new UglifyJSPlugin( {
			sourceMap : true
		} )
	],

	watch : true

}
