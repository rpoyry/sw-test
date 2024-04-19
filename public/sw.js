(function (self) {
  const VERSION = 'VERSION8';
  // self.addEventListener("install", function (e) {
  //   self.skipWaiting();
  // });

  self.addEventListener("activate", function (e) {
    // e.waitUntil(self.clients.claim());

    console.log("activate without claiming");

    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ type: "UPDATE_AVAILABLE" });
      });
    });
  });
})(self);
//# sourceMappingURL=sw.js.map
