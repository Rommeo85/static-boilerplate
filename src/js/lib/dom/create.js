export default (tag, attributes) => {
  let el = document.createElement(tag);

  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(attr => {
      if (attr === 'html') {
        el.innerHTML = attributes[attr];
      } else {
        el.setAttribute(attr, attributes[attr]);
      }
    });
  }

  return el;
};
