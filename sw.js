
```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('<add-path-here>/pwabuilder-sw.js');
  });
```
