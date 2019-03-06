const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rules = {
    rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(css|sass|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          use: {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]'
              }
          }
        }
    ]
}

module.exports = rules;