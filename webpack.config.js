const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const definePlugin = new webpack.DefinePlugin({
    _DEV_: JSON.stringify(DEVELOPMENT),
    _PROD_: JSON.stringify(PRODUCTION)
});

const baseConfig = {
    entry:__dirname+'/src/index.ts',
	module:{
		rules:[
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use:{
					loader: "ts-loader"
				}
			}
		]
    },
	plugins:[
		definePlugin
    ],
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
}

const productionConfig = {
    mode:"production"
}

const developmentConfig = {
    mode:"development",
    output:{
        pathinfo:true,
        path: path.resolve(__dirname,'dev'),
        publicPath:"/",
        filename:'js/bundle.js'
    },
    devServer:{
		contentBase: ["./","./dev"],
		port: 5050
	}
}

module.exports= merge(baseConfig,DEVELOPMENT?developmentConfig:productionConfig);