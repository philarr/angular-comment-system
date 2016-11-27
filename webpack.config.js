var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    content: __dirname  + '/',
    entry: [
        'babel-polyfill',
        './app.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: './bundle.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            }
        }),
        new ExtractTextPlugin("app.css"), 
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, 
                loader: 'babel', 
                exclude: [/node_modules/]
            },
 
            {
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('style', 'css?localIdentName=[name]__[local]___[hash:base64:5]!sass'), 
                exclude: [/node_modules/]
            },  
            {
                test: /\.html$/, 
                loader: 'html', 
                exclude: [/node_modules/]
            },
            {
                test: /\.json$/, 
                loader: 'json', 
                exclude: [/node_modules/]
            },
        ]
    },
}