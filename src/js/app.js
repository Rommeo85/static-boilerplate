import ready from './lib/dom/ready';

ready(() => {
  const View = require('viewport');
  const view = new View(require('../../config/viewports'));

  function addSidebar() {
    if (view.lt('sm')) {
      require('./lib/sidebar');
      view.offChange(addSidebar);
    } else {
      view.onChange(addSidebar);
    }
  }

  addSidebar();
});
