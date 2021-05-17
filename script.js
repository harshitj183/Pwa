window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://raw.githubusercontent.com/harshitj183/Pwa/main/service-worker.js');
  }
});
