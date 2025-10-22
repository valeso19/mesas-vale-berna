const CACHE_NAME = 'mesas-vb-v2';
const urlsToCache = [
    '/mesas-vale-berna/',
    '/mesas-vale-berna/index.html',
    '/mesas-vale-berna/manifest.json',
    '/mesas-vale-berna/icon-192.png',
    '/mesas-vale-berna/icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
