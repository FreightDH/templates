const path = require('path');
const html = path.resolve(__dirname, '../src/**/*.html');
const scss = path.resolve(__dirname, '../src/**/*.scss');
const ts = path.resolve(__dirname, '../src/**/*.ts');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: [html, scss, ts],
  },
};
