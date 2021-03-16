'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "79751828639a4ae0d68117836f99df40",
"index.html": "6aaa8defcb058ba34dc9a8d444a52a87",
"/": "6aaa8defcb058ba34dc9a8d444a52a87",
"main.dart.js": "f7902c9c6e6f1bf55e90c927b9e2093d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8af3f3bb398159bd26e4c38d57e66495",
"assets/AssetManifest.json": "116c33f243bd8d2edb522c101f7e5ab6",
"assets/NOTICES": "6f76f2595391b2a2321b3a99c9371d58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/user.png": "6df52dbed927bd0aaf69acff9bceca2e",
"assets/assets/images/welcome_image.png": "a25c0a6256da990a8694c383800fc1bb",
"assets/assets/images/Logo_dark.png": "5888d9fca63142928c8f535ca1a00baa",
"assets/assets/images/Item_3.png": "d11bc83958f80761052faa7b905e753d",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/Item_2.png": "bfb1c99d4de3967170667108f0ca0ad8",
"assets/assets/images/Video%2520Place%2520Here.png": "2bae4756fc9354578eb137136679941e",
"assets/assets/images/Item_1.png": "7cd88c0c89538723a03692ecd8cafbc5",
"assets/assets/images/Logo_light.png": "548e5e7812a26d086637486b3c7873ff",
"assets/assets/images/1.png": "cb4a9a175142d15aae60a65782da4abf",
"assets/assets/icons/Transfer.svg": "afc6001cc5d53124ffac78b68ad0ecbe",
"assets/assets/icons/search.svg": "3982c8422dec4afa14fb9304b37556ea",
"assets/assets/icons/Reply.svg": "378c21add4d4219e7969f647a2ea15be",
"assets/assets/icons/Markup%2520filled.svg": "40d059b79ceb381a4fff5cf4f94d7717",
"assets/assets/icons/Reply%2520all.svg": "cbeaee2532b1f864de2a7fb44c3da9dd",
"assets/assets/icons/Inbox.svg": "a4777c9e21a6fbd3802c164237a59b0e",
"assets/assets/icons/File.svg": "6ebd5cba586daf5f6a8cd2ae69974d01",
"assets/assets/icons/Markup.svg": "2a0f37b8f81e85e200239f26c8295718",
"assets/assets/icons/shopping-bag.svg": "1cc7453dcdc4892fd28095ef42c7d794",
"assets/assets/icons/Download.svg": "0605a445a2241a5f4d8039cbe62deb65",
"assets/assets/icons/Logo_light_theme.svg": "843463fe7e11bcc2619037d21794c4a9",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/Plus.svg": "db9e94598d5272bad2ed4d0095d3feb5",
"assets/assets/icons/Logo_dark_theme.svg": "49ae8d7fbd3f8a591d9485fed2faa2be",
"assets/assets/icons/Paperclip.svg": "d7e7dec5e3b15d70d1cc543902e3e3b8",
"assets/assets/icons/Angle%2520down.svg": "a0e3ff9e10cbd5a20fd4b3af570bb403",
"assets/assets/icons/back.svg": "dcfd2eb5ebb8ec8937c87999453c8ae6",
"assets/assets/icons/chat.svg": "d95b2e01e56f9f12d803848205435f19",
"assets/assets/icons/notification.svg": "8985abcb7a55124e6b08aff92eed4a7c",
"assets/assets/icons/Send.svg": "f29a3dd14ca59dec3c9cd1fe18cb8b4b",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/Printer.svg": "4984ba164d6a117030f2066d5aa59e1f",
"assets/assets/icons/Trash.svg": "4a2cbcd29c9e345be576fc644b154810",
"assets/assets/icons/More%2520vertical.svg": "23720f8fc4d7e46f590006947dd30b42",
"assets/assets/icons/Edit.svg": "b4342990aa20448ca5c23e421217b76a",
"assets/assets/icons/Angle%2520right.svg": "aae36377adfd82ebde3949fdcfd7d383",
"assets/assets/icons/cart_with_item.svg": "cd650a3a6c295fc1f59c130b56a68169",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/Sort.svg": "d3cfa59524245d5533c0ab4a5fc9d443",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
