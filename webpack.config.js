const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const rootModulePath = "./src/";
const rootBundlePath = "./src/bundle/";
const isDevBuild = true;
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


module.exports = {
    stats: { modules: false },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    entry: {
        'DIG': rootModulePath + "Index.tsx"
    },
    externals: {
        jQuery: 'jQuery'
      },
      node: {
        fs: 'empty'
      },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
          }),
 ....
