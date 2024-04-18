(function (self) {
    var versionNo = '6'; //VersionNo
    //Service worker contents...
    // self.addEventListener("install", function (event) {
    //     console.log("[Service Worker] Installing Service Worker...");
    // });
    // self.addEventListener("activate", function (event) {
    //     console.log("[Service Worker] Activating Service Worker...");
    //     return self.clients.claim();
    // });
    // self.addEventListener("message", function (event) {
    //     if (event && event.data && event.data.action === "skipWaiting") {
    //         self.skipWaiting();
    //     }
    // });
    // self.addEventListener('install', function(e) {
    //     self.skipWaiting();
    //   });
      
    //   self.addEventListener('activate', function(e) {
    //     e.waitUntil(self.clients.claim());

    //     self.clients.matchAll().then((clients) => {
    //         clients.forEach((client) => {
    //           client.postMessage({ type: 'UPDATE_AVAILABLE' });
    //         });
    //       });

    //     // self.registration.unregister()
    //     //   .then(function() {
    //     //     return self.clients.matchAll();
    //     //   })
    //     //   .then(function(clients) {
    //     //     clients.forEach(client => client.navigate(client.url))
    //     //   });
    //   });
    // // self.addEventListener("fetch", function (event) {
    // // });

    self.addEventListener('install', function(e) {
      self.skipWaiting();
    });
    
    self.addEventListener('activate', function(e) {
      self.registration.unregister()
        .then(function() {
          return self.clients.matchAll();
        })
        .then(function(clients) {
          clients.forEach(client => client.navigate(client.url))
        });
    });
})(self);
//# sourceMappingURL=sw.js.map