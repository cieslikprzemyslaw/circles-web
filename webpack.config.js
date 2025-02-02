const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    plugins: [
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|ts|jsx|tsx|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8
        })
    ]
}