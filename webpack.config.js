const path = require('path')

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  context: __dirname,
  entry: ['./assets/js/index.js', './assets/js/cookies.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'js/[name].[contenthash:8].js',
    filename: 'js/main.js',
  },
  mode: devMode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false,
              modules: false,
              importLoaders: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}
