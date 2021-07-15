const button = document.getElementById('button');
const toastContainer = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = [
  'info',
  'success',
  'error'
];

button.addEventListener('click', () => createNotification());

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(getRandomType());
  notif.innerText = getRandomMessage();
  toastContainer.appendChild(notif);
  setTimeout(() => toastContainer.removeChild(notif), 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}