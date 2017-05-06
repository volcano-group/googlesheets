const webpack = require('webpack');
const fs = require('fs');

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
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devtool: 'sourcemap'
};