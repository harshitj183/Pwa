window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('//raw.githubusercontent.com/harshitj183/Pwa/main/service-worker.js');
  }
});
