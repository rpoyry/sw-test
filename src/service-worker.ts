/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// Import the Workbox libraries
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

// Use the clientsClaim function to ensure that the service worker takes control of the clients immediately.
clientsClaim();

// Precache all of the assets generated by your build process.
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Cache images with a StaleWhileRevalidate strategy
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  // Trigger skipWaiting when a SKIP_WAITING message is received
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Add logic to check for updates and trigger an update prompt
// This logic can be triggered based on a timer or user interaction
function checkForUpdates() {
  // Perform update check logic here
  // For example, fetch a version number from an API endpoint

  // If a new version is available, send a message to the client to prompt an update
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: 'UPDATE_AVAILABLE' });
    });
  });
}

// Perform update check on service worker activation
self.addEventListener('activate', (event) => {
  // Ensure that the service worker activates immediately
  event.waitUntil(self.clients.claim());

  // Check for updates on activation
  checkForUpdates();

  // Perform subsequent update checks periodically
  setInterval(checkForUpdates, 24 * 60 * 60 * 1000); // Check for updates once a day
});

// Any other custom service worker logic can go here.
