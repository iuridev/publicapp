const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'src','index.js'),
  output: {
    path: path.resolve(__dirname,'public','bundle.js'),
    filename: 'bundle.js'
  },

  devServer:{
    contentBase : path.resolve(__dirname, 'public')
  },

  module:{
    rules: [
      {
        text: /\.js$/,
        exclude: /mode_modules/,
        use:{
          loader : 'babel-leader',
        }
      }      
    ]
  }
};