module.exports = {
  entry: __dirname + "/client/app.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
