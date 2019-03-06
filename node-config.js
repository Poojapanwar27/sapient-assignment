const module = {
    rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader'
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

const plugins = {
    rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader'
        },
        {
          test: /\.(css|sass|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
          use: {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]'
              }
          }
        }
    ]
}
