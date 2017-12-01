const favicons = require('favicons');
const path = require('path');
const config = require('./config/favicons');
const fs = require('fs-extra');

favicons(config.src, config.options, (error, response) => {
  if (error) {
    throw error;
  }

  if (response.images) {
    response.images.forEach(image => fs.outputFileSync(path.join(config.dist.images, image.name), image.contents))
  }

  if (response.files) {
    response.files.forEach(file => fs.outputFileSync(path.join(config.dist.files, file.name), file.contents))
  }

  if (response.html) {
    fs.outputFileSync(config.dist.html, response.html.join(process.env.NODE_ENV === 'prd' ? '' : '\n'));
  }
});
