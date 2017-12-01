import create from './dom/create';
import prepend from './dom/prepend';

const nav = document.getElementsByClassName('nav')[0];
const asideNav = nav.cloneNode(true);
const body = document.body;
const page = document.getElementById('page');
const SHOW_SIDEBAR_CLASSNAME = 'show-sidebar';
const navToggle = create('button', {
  type: 'button',
  'class': 'nav-toggle'
});

function open() {
  body.classList.add(SHOW_SIDEBAR_CLASSNAME);
}

function close() {
  body.classList.remove(SHOW_SIDEBAR_CLASSNAME);
}

function toggle() {
  body.classList[body.classList.contains(SHOW_SIDEBAR_CLASSNAME) ? 'remove' : 'add'](SHOW_SIDEBAR_CLASSNAME);
}

let sidebar = create('aside', {
  'class': 'sidebar'
});

prepend(page, sidebar);

let btnSidebarClose = create('button', {
  type: 'button',
  'class': 'close-button',
  html: '&times;'
});

sidebar.appendChild(asideNav);
sidebar.appendChild(btnSidebarClose);

btnSidebarClose.addEventListener('click', close);
body.addEventListener('click', close);
sidebar.addEventListener('click', ev => ev.stopPropagation());

navToggle.addEventListener('click', ev => {
  ev.stopPropagation();
  toggle();
});

prepend(nav, navToggle);

export default {open, close, toggle};
