const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/typescript', '@babel/react'],
          plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread', 'emotion'],
        },
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
