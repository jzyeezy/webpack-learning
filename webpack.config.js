/**
 * Created by yeejo on 11/16/2015.
 */
module.exports = {
    context: __dirname + "/app/scripts",
    entry: "./app",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve: {
      modulesDirectories: ['node_modules']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};