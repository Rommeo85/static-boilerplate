const config = require('../config');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const paths = config.paths;

let tempDirPath = paths.getSassTempFolder();

// generate viewport config
let importViewPortsConfig = () => {
  let filePath = path.join(tempDirPath, `_viewports-conf.sass`);
  let breakpointsMap = [];
  let screenVars = '';

  Object.keys(config.viewports).forEach(key => {
    let screenWidthPx = config.viewports[key] + 'px';
    let varName = '$screen-' + key;

    screenVars += `${varName}: ${screenWidthPx}\n`;
    breakpointsMap.push(`${key}: ${varName}`);
  });

  fs.outputFileSync(filePath, `${screenVars}$breakpoints: (${breakpointsMap.join(', ')})`);

  return filePath;
};

/** sass file importer to enable using glob patterns */
let sassFileImporter = (url, parent, done) => {
  if (url === 'viewports-config') {
    done({file: importViewPortsConfig()});
    return;
  }

  let base = path.join(path.dirname(parent), url);

  if (glob.hasMagic(base)) {
    glob(base, {nodir: true}, (err, files) => {
      let contents = files.map(cur => {
        let importPath = path.relative(tempDirPath, cur).replace(/\\/g, '/');
        return `@import "${importPath}";`
      }).join('\n');

      let fileName = url.replace(/[\.\\\/*_]+/g, '_').replace(/_$/, '');
      fileName = /^_/.test(fileName) ? fileName : '_' + fileName;

      let tempFilePath = path.join(tempDirPath, `${fileName}.scss`);
      fs.outputFileSync(tempFilePath, contents);

      done({file: tempFilePath});
    });
  } else {
    done({file: url});
  }
};

module.exports = sassFileImporter;