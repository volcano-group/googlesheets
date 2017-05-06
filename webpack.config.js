var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });



module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    plugins: [
      new webpack.BannerPlugin({banner: 'require("source-map-support").install();',
                                raw: true, entryOnly: false })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    externals: nodeModules,
    devtool: 'sourcemap'
};