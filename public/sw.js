(function (self) {
  const VERSION = 'VERSION10';
   self.addEventListener("install", function (e) {
     self.skipWaiting();
   });

  self.addEventListener("activate", function (e) {
    e.waitUntil(self.clients.claim());

    console.log("activate");

    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ type: "UPDATE_AVAILABLE" });
      });
    });
  });
})(self);
//# sourceMappingURL=sw.js.map
