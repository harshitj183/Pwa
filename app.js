if('serviceWorker' in navigator){
  navigator.serviceWorker.register('https://raw.githubusercontent.com/harshitj183/Pwa/main/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}
