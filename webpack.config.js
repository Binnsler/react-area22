module.exports = {
  entry: ["./src/index.js"],

  output: {
    path: __dirname,
    filename: "app/js/bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
