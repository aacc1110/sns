const title = document.getElementById('title');

title.innerHTML = 'Hi from JS';
title.style.color = 'red';
console.dir(document);
document.title = 'vanillaJS';
console.dir(title);

function handleResize(e) {
  console.log(e);
}
window.addEventListener('resize', handleResize);

const CLICKED_CLASS = 'clicked';

function handleCalssname() {
  title.classList.toggle(CLICKED_CLASS);
  /*   const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  } */
}

title.addEventListener('mouseover', handleCalssname);

const BASE_COLOR = 'blue';
const OTHER_COLOR = 'red';
function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener('click', handleClick);
}

init();
function handleOnOffline() {
  console.log('offline');
}
window.addEventListener('offline', handleOnOffline);
