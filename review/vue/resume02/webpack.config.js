const path=require('path')
module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  // module: {
  //   loaders:[
  //     {
  //       test: /\.js[x]?$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader?presets[]=es2015&presets[]=react'
  //     },
  //   ]
  // },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}