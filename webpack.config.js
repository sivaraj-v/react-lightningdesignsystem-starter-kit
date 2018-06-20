const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack_rules = [];
const webpack_plugins = [];
const pathConfig = {
  index: path.resolve(__dirname, './src/index.html'),
  src: path.resolve(__dirname, './src/js/app.js'),
  dest: path.resolve(__dirname, './dist'),
  publicPath: '',
  customPath: {
    img: 'img/[hash]-[name].[ext]',
    js: 'js/bundle-[chunkhash].js',
    css: 'css/[name]-min.css',
    fonts: process.env.NODE_ENV === 'production' ? 'css/fonts/[name].[ext]' : './fonts/[name].[ext]'
  }
};
const webpackOption = {
  entry: pathConfig.src,
  output: {
    path: pathConfig.dest,
    filename: pathConfig.customPath.js, // "bundle-[chunkhash].js"
    publicPath: pathConfig.publicPath // you will get dist configuration virtually else you won't get err: GET http://localhost:8081/dist/bundle.js net::ERR_ABORTED
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: webpack_rules
  },
  plugins: webpack_plugins,
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
let babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules\/(?!(@salesforce | @salesforce-ux)\/).*/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['babel-preset-env', 'es2015', 'react', '@salesforce/babel-preset-design-system-react'],
      plugins: [require('babel-plugin-transform-object-rest-spread'), 'dynamic-import-webpack'],
      cacheDirectory: true
    }
  }
};
let cssLoader = {
  test: /\.(s*)css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader']
  })
}
let fontLoader = {
  test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
  loader: 'file-loader',
  options: {
    name: pathConfig.customPath.fonts,
    publicPath: function(url) {
      return url.replace(/public/, '..')
    },
  },
}
let imageLoader = {
  test: /\.(png|jp(e*)g|svg)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 8000, // Convert images < 8kb to base64 strings
      name: pathConfig.customPath.img
    }
  }]
}
// Plugins
let HtmlWebpackPluginData = new HtmlWebpackPlugin({
  title: 'Custom template',
  // Load a custom template (lodash by default see the FAQ for details)
  template: pathConfig.index
})
let cleanOptions = {
  root: __dirname,
  exclude: ['notRemove'], //ignore your folder on build
  verbose: false,
  dry: false,
  beforeEmit: false,
  allowExternal: false,
};
let pathsToClean = ['dist/'];
webpack_rules.push(babelLoader);
webpack_rules.push(cssLoader);
webpack_rules.push(imageLoader);
webpack_rules.push(fontLoader);

webpack_plugins.push(HtmlWebpackPluginData);
webpack_plugins.push(new ExtractTextPlugin({
  filename: pathConfig.customPath.css
}))
webpack_plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}))
webpack_plugins.push(new CopyWebpackPlugin([
  {
    from: './src/assets',
    to: './css'
  },
]));
webpack_plugins.push(new CleanWebpackPlugin(pathsToClean, cleanOptions))
module.exports = webpackOption;