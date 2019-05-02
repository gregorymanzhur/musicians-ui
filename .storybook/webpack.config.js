const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'awesome-typescript-loader',
      },
      {
        loader: 'react-docgen-typescript-loader',
      },
    ],
    include: path.resolve(__dirname, '../src'),
  });

  config.resolve.extensions = ['.ts', '.tsx', '.js'];

  return config;
};
