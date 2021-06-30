const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	//our index file
	entry: path.resolve(__dirname, 'src/index.js'),

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},

				resolve: {
					extensions: ['.js', '.jsx'],
				},
			},
			//Allows use of images
			{
				test: /\.(png|jpg|gif|jpeg)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash:8].[ext]',
						outputPath: 'static/media/',
					},
				},
			},

			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[hash:8].[ext]',
					outputPath: 'static/media/',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'), //we put the file that we created in public folder
			inject: true,
		}),
	],
}
