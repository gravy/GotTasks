var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/index.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/api',
      './src/components',
      './src/actions',
      './src/reducers'
    ],
    alias: {
      App: 'src/App.jsx',
      applicationStyles: 'src/styles/app.scss',
      configureStore: 'src/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componets)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname,'./node_modules/foundation-sites/scss')
    ]

  },
  devtool: 'cheap-module-eval-source-map'
}
