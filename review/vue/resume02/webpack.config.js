const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // module: {   loaders:[     {       test: /\.js[x]?$/,       exclude:
  // /node_modules/,       loader: 'babel-loader?presets[]=es2015&presets[]=react'
  //     },   ] },
  module: {
    rules: [
      {
        test: /\.less$/,
        use:['style-loader','css-loader','less-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
        less:path.join(__dirname,'less')
    }
  }
}