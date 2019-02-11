module.exports = {
  entry: './src/app/app.js',                //Archivo a convertir
  output: {                                 //Ruta de destino para archivo convertido
      path: __dirname + '/src/public',
      filename: 'bundle.js',
      publicPath: '/'
  },
  module: {                                  // Reglas para Interactuar con Webpack
    rules : [
      {
        use: 'babel-loader',                //Utilizar babel-loader
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/, use: [{loader: 'file-loader', options: {}}]
      }]
  },
  devServer: {
    historyApiFallback: true,
  }
};