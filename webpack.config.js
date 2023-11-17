const path = require('path');

module.exports = {
    entry: {
        index : path.resolve(__dirname, 'src/index.js')
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        globalObject: 'this',
        library: {
            name: 'timesAgo',
            type: 'umd',
        },
    },
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ],
      },
      mode: 'production',
};