module.exports = {
  imgSrc(name) {
    return 'assets/' + name;
  },

  faviconsHtml() {
    const fs = require('fs-extra');
    const faviconsHtmlPath = require('./favicons').dist.html;
    return fs.readFileSync(faviconsHtmlPath);
  }
};
