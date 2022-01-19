///accessibility///

window.interdeal={"sitekey":"8732e739ae764ab01a01903f60ca3e58","Position":"Left","Menulang":"EN","domains":{"js":"https://cdn.equalweb.com/","acc":"https://access.equalweb.com/"},"btnStyle":{"vPosition":["10%","30%"],"scale":["0.5","0.5"],"color":{"main":"#007CFF","second":"var(--submenu-color)"},"icon":{"type":11,"shape":"circle","outline":false}}};(function(doc,head,body){var coreCall=doc.createElement('script');coreCall.src='https://cdn.equalweb.com/core/4.0.4/accessibility.js';coreCall.defer=true;coreCall.integrity='sha512-LDvqiv8qYdF1MIqxiGZrvcDsmN6cZy0u0l23Dj7TVXmkVSNyzjtkcll8uCb8EGdwDVHjvisVYsAWuwTf6Mpu8g==';coreCall.crossOrigin='anonymous';coreCall.setAttribute('data-cfasync',true);body?body.appendChild(coreCall):head.appendChild(coreCall);})(document,document.head,document.body);

///accessibility///
///PWA botton ///
const installButton = document.getElementById("dev_blogger");window.addEventListener("beforeinstallprompt", e => {e.preventDefault();deferredPrompt = e;installButton.hidden = false;installButton.addEventListener("click", installApp);});function installApp() {deferredPrompt.prompt();installButton.disabled = true;deferredPrompt.userChoice.then(choiceResult => {if (choiceResult.outcome === "accepted") {installButton.hidden = true;} else {}installButton.disabled = false;deferredPrompt = null;});}window.addEventListener("appinstalled", evt => {console.log("appinstalled fired", evt);});


///PWA botton ///
 


///service worker ///
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}
///service worker ///


