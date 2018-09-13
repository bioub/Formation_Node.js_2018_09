const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, {mode}) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: mode === 'production',
      }
    }),
  ];

  return {
    devtool: false,
    entry: './src/js/index.js',
    output: {
      filename: mode === 'development' ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": {
                    "chrome": "68",
                    "ie": "11",
                  }
                }]
              ]
            }
          }
        }
      ]
    }
  };
};
