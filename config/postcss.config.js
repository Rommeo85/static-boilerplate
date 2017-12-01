module.exports = ctx => ({
  replace: true,
  plugins: {
    'css-mqpacker': {
      sort: true
    },
    'autoprefixer': {},
    'cssnano': ctx.env === 'prd' ? {} : false
  }
});
