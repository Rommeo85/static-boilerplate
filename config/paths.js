const path = require('path');

module.exports = {
  build: 'dist',
  packages: 'src',
  cache: '.cache',
  tmp: '.tmp',

  getFolder: function(args, base) {
    args = (typeof(args) === 'object') ? Array.prototype.slice.call(args) : [args];
    base && args.unshift(base);
    return path.join.apply(this, args);
  },

  getBuildFolder: function() {
    let args = (typeof(arguments) === 'object') ? Array.prototype.slice.call(arguments) : [arguments];
    return this.getFolder(args, this.build);
  },

  getSourceFolder: function() {
    return this.getFolder(arguments, this.packages);
  },

  getCacheFolder: function() {
    return this.getFolder(arguments, this.cache);
  },

  getTempFolder: function(name) {
    return this.getBuildFolder(this.tmp, name ? name : '');
  },

  getSassTempFolder: function(name) {
    return this.getSourceFolder('sass', '.tmp', name ? name : '');
  }
};
