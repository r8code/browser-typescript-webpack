const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const definePlugin = new webpack.DefinePlugin({
	_DEV_: JSON.stringify(DEVELOPMENT),
	_PROD_: JSON.stringify(PRODUCTION)
});

module.exports = {
	
	resolve:{
		extensions:['.ts','.tsx','.js','.json']
	},
	module:{
		rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: "url-loader",
					// options: { limit: 10000, mimetype: "application/font-woff", name: "asset/font/[name].[ext]" }
					options: { limit: 10000, mimetype: "application/font-woff", name: "font/[name].[ext]" }
				}]
			},
			{
				test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: "url-loader",
					options: { limit: 10000, mimetype: "application/octet-stream" }
				}]
            },
            {
                test: /\.worker\.js$/,
                use:{
                    loader: 'worker-loader',
                    options:{inline: true}
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