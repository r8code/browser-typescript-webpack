const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports= merge(common,{
    mode:"development",
	// entry:{app:['babel-polyfill','./src/index.ts']},
	entry:['babel-polyfill',__dirname+'/src/index.ts'],
	devtool: "source-map",
	devServer:{
		contentBase: ["./src"],
		host:"0.0.0.0",
		port: 5050
	},
	plugins:[
		new HtmlWebPackPlugin({
			template: "./src/dev.html",
			filename: "index.html"
		})
	]
});