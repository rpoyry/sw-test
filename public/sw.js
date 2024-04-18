(function (self) {
    const VERSION = 'v2b951622';
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
    self.addEventListener('install', function(e) {
        self.skipWaiting();
      });
      
      self.addEventListener('activate', function(e) {
        e.waitUntil(self.clients.claim());

        self.clients.matchAll().then((clients) => {
            clients.forEach((client) => {
              client.postMessage({ type: 'UPDATE_AVAILABLE' });
            });
          });

        // self.registration.unregister()
        //   .then(function() {
        //     return self.clients.matchAll();
        //   })
        //   .then(function(clients) {
        //     clients.forEach(client => client.navigate(client.url))
        //   });
      });


    setInterval(() => {
      console.log("Try updating SW");

      if (self.registration.active) {
        console.log("is active");
        
        self.registration.update();
      }
    }, 10000)
    // self.addEventListener("fetch", function (event) {
    // });
})(self);
//# sourceMappingURL=sw.js.map