const path = require('path');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const TerserWebpackPlugin = require('terser-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { HotModuleReplacementPlugin } = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  entry: path.resolve(__dirname, 'src/index.js'),

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },

          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              esModule: true,
              modules: {
                compileType: 'module',
                mode: 'local',
                exportLocalsConvention: 'camelCaseOnly',
                namedExport: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxInitialRequests: 10,
      maxAsyncRequests: 10,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `${cacheGroupKey}.${packageName.replace('@', '')}`;
          },
        },
        common: {
          minChunks: 2,
          priority: -10,
        },
      },
    },
    runtimeChunk: 'single',
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: 'static/css/styles.[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
  ],
});
