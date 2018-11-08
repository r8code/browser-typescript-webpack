const merge = require('webpack-merge');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

const obfuscatorPlugin = new JavaScriptObfuscator({
	compact: true,
	controlFlowFlattening: false,
	controlFlowFlatteningThreshold: 0.75,
	deadCodeInjection: false,
	deadCodeInjectionThreshold: 0.4,
	debugProtection: false,
	debugProtectionInterval: false,
	disableConsoleOutput: false,
	log: false,
	mangle: true,
	renameGlobals: false,
	reservedNames: [],
	rotateStringArray: true,
	seed: 0,
	selfDefending: false,
	sourceMap: false,
	sourceMapBaseUrl: '',
	sourceMapFileName: '',
	sourceMapMode: 'separate',
	stringArray: true,
	stringArrayEncoding: true,
	stringArrayThreshold: 0.8,
	unicodeEscapeSequence: false
});

module.exports= merge(common,{
	mode:'production',
	entry:[__dirname+'/src/customlib.ts'],
	output: {
		path: path.join(__dirname,'/dist'),
		filename: 'customlib.js',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	plugins:[
		// new CleanWebpackPlugin(['public'],{root:path.resolve('../server')}),
		new CleanWebpackPlugin(['dist']),
		obfuscatorPlugin,
		// new CopyWebpackPlugin([{
		// 	from: './src/lib/rtmp_worker.min.js',
		// 	to: './'
		// }])
	]
});