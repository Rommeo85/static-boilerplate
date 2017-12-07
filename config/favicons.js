const path = require('path');
const pkg = require('../package');
const paths = require('./paths');
const iconsPath = '/assets/favicons';
const distDir = paths.getBuildFolder(iconsPath);
const defaultOpts = require('rfg-config').defaultConf;

module.exports = {
  src: paths.getSourceFolder('assets', 'logo.png'),
  options: Object.assign(defaultOpts, {
    path: iconsPath,
    appName: pkg.name,
    appDescription: pkg.description,
    version: pkg.version
  }),
  output: {
    files: distDir,
    html: path.join(distDir, 'favicons.html')
  }
};
