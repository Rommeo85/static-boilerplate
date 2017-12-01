const path = require('path');
const pkg = require('../package');
const paths = require('./paths');
const iconsPath = 'assets/favicons';
const iconsDistDir = paths.getBuildFolder(iconsPath);

module.exports = {
  src: paths.getSourceFolder('assets/logo.png'),
  options: {
    appName: pkg.name,                          // Your application's name. `string`
    appDescription: pkg.description,            // Your application's description. `string`
    developerName: null,                        // Your (or your developer's) name. `string`
    developerURL: null,                         // Your (or your developer's) URL. `string`
    background: '#fff',                         // Background colour for flattened icons. `string`
    theme_color: '#fff',                        // Theme color for browser chrome. `string`
    path: iconsPath,                            // Path for overriding default icons path. `string`
    display: 'browser',                         // Android display: 'browser' or 'standalone'. `string`
    orientation: 'portrait',                    // Android orientation: 'portrait' or 'landscape'. `string`
    start_url: '/?homescreen=1',                // Android start application's URL. `string`
    version: pkg.version,                       // Your application's version number. `number`
    logging: false,                             // Print logs to console? `boolean`
    online: false,                              // Use RealFaviconGenerator to create favicons? `boolean`
    preferOnline: false
  },
  dist: {
    images: iconsDistDir,
    files: iconsDistDir,
    html: path.join(iconsDistDir, 'favicons.html')
  }
};
