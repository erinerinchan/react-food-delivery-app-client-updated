const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index.jsx')
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[fullhash].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, '..', 'src')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      }, {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      overrideConfig: {
        rules: {
          'linebreak-style': 0
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      filename: 'index.html'
    }),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: false
    },
    allowedHosts: 'all',
    port: process.env.PORT || 8080,
  }
}
