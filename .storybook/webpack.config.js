const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
        }
      },
      {
        loader: 'less-loader',
      },
    ],
  });

  return config;
};
