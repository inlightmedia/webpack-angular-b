var webpack = require('webpack');

var config = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            // if this is true then all code that depends of ON_TEST to run will run 
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate!babel', exclude: '/node_modules/'},
            {test: /\.html$/, loader: 'raw', exclude: '/node_modules/'},
            {test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'},
            {test: /\.scss$/, loader: 'style!css!sass', exclude: '/node_modules/'},
            {test: /\.sass$/, loader: 'style!css!sass', exclude: '/node_modules/'}
        ]
    }
}

// Set the output of the bundleJS to be in the dist folder so that the dist folder has everything in it for production
if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module.exports = config;