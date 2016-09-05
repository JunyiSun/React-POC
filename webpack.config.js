//webpack.config.js
var path=require("path");

module.exports={
	entry:  "./public/javascripts/index.jsx",
	output: {
		path: path.join(__dirname,"./public/out"),
		filename: "bundle.js",
		publicPath: "./public/out/"
	},
	module: {
	          loaders: [
		            {test: /\.js$/, loader: "babel",query: {presets: ['react','es2015']}},	 	/*es6 to es5*/
		            {test: /\.jsx$/,loader: 'babel', query: {presets: ['react', 'es2015']}},	/*jsx to js,es5 to es6*/
		            {test: /\.css$/, loader: "style!css"},					 	/*css to css*/
		            {test: /\.(jpg|png|otf)$/, loader: "url?limit=8192"},			 	/*images */
		            {test: /\.scss$/, loader: "style!css!sass"}				 	/*sass to css*/
	          ]
    	}
};
