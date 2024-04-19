(function (self) {
  const VERSION = 'VERSION9';
  // Listen for messages from the main thread
  self.addEventListener('message', (event) => {
    // Trigger skipWaiting when a SKIP_WAITING message is received
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  self.addEventListener("activate", function (e) {
    e.waitUntil(self.clients.claim());

    // self.clients.matchAll().then((clients) => {
    //   clients.forEach((client) => {
    //     client.postMessage({ type: "UPDATE_AVAILABLE" });
    //   });
    // });
  });
})(self);
//# sourceMappingURL=sw.js.map
