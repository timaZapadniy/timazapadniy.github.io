'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2daeee7aa7eb4ffaf579699bcd70d580",
"index.html": "92bc1b7e1e33509f5b4f8eb1e482a79c",
"/": "92bc1b7e1e33509f5b4f8eb1e482a79c",
"main.dart.js": "f947e7033a46381ccff0be593540cce0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c11ba5a82a27187888a46066d39cd38a",
"assets/AssetManifest.json": "b53db81643d1e9d3fc42079cb2e0a538",
"assets/NOTICES": "29cdd2e98d46f71072ba1a9615293206",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/enemys/maddyson/mad3.png": "2bcb864f3b9602fdef9786d7fedbd3ad",
"assets/assets/enemys/maddyson/mad2.png": "41ec2f126cc582964e5f901eda05e692",
"assets/assets/enemys/maddyson/mad1.png": "9f73c7a7e661a30b1f586dc9ec7dd489",
"assets/assets/enemys/gachi/gachi3.png": "02d030d28116f44c57eb094119162cd3",
"assets/assets/enemys/gachi/gachi2.png": "a735aedf08005d47b621d596ca0e5606",
"assets/assets/enemys/gachi/gachi1.png": "04a2c19c0399f63cc6e5c3dc850620f8",
"assets/assets/enemys/enemy1.png": "8950eeacf689f92135e1955b19c37bb6",
"assets/assets/enemys/%25D0%2590%25D1%2580%25D1%2585%25D0%25B8%25D0%25B2.zip": "c05a75c5201cd7277ed18bd3a28b5efa",
"assets/assets/enemys/enemy3.png": "7b0b191acb7bcae838342fd7bc627ccd",
"assets/assets/enemys/enemy2.png": "a834ab20c958315618c044f7a071e209",
"assets/assets/enemys/fortnite/rabbit.png": "15560cc4131e75db8809f32a8a0324c4",
"assets/assets/enemys/fortnite/Scoundrel.png": "5e14b4d14d5f72b7363b609919fcc4ea",
"assets/assets/enemys/fortnite/Drift.png": "eae89656506018771d62fc254b932c99",
"assets/assets/enemys/fortnite/blackKnight.png": "be8741902ebaee71505a238c6ce56426",
"assets/assets/enemys/fortnite/rust.png": "f1b53bb16e1dd513c5e1d463011233c9",
"assets/assets/enemys/fortnite/tomatohead.png": "ec7d7d708c95295f8515b9a6ef150da3",
"assets/assets/enemys/fortnite/military.png": "0f627aec70898f04387f2cdf30623dee",
"assets/assets/enemys/fortnite/calamity.png": "9e3c15445fb09c51b6d97d4765e516d2",
"assets/assets/enemys/fortnite/banana.png": "db363b04e4ead17fdd3d6d42916684a0",
"assets/assets/enemys/fortnite/love.png": "ff4585bf919ee68f69d9e98a36469a23",
"assets/assets/character/main_char/hair.png": "5e6011a6e87b390530b5827575015d2d",
"assets/assets/character/main_char/band.png": "aa44fdacd446a3043545accdcb525b24",
"assets/assets/character/main_char/body.png": "f6f42ec3d41c47a1b142705269887c54",
"assets/assets/character/main_char/hand.png": "06bb997d7b1932cc71a1ef3b941959f7",
"assets/assets/character/main_char/head.png": "95706b9a8d66096756b6e0a200939b53",
"assets/assets/sfx/sword_basic.mp3": "3373c04b35ede0b622b8a5530151e6ae",
"assets/assets/sfx/basic1.mp3": "9dfba5b25f1c82db1f6e2c78e3114991",
"assets/assets/sfx/basic.mp3": "5bb995fd295b5ffd169c4c44d8e4bdb7",
"assets/assets/sfx/sword_crit.mp3": "f4c339fc2df17533ec24f03dd560c9d7",
"assets/assets/weapons/mage_branch.png": "872b5978c2ec25a5080fcfeafc1081c9",
"assets/assets/weapons/simple_branch.png": "75fa0e8e9b62c21933787fdfe4c8e0cb",
"assets/assets/weapons/branch.png": "8aabb26feae30669c360ae0cfa81ba80",
"assets/assets/backgrounds/2.png": "c72420b224956acd56818937892e5548",
"assets/assets/backgrounds/3.png": "a15b48e87687898e54d7eb53bf9f4ba9",
"assets/assets/backgrounds/1.png": "6a7050ff0582ad8693d543ee03116386",
"assets/assets/audio/back.wav": "8a274c6a8b22e4a6bb86d88f44d9c721",
"assets/assets/locations/fields.png": "ed13da58d1cd4d95bc3fe7cb47ed3aff",
"assets/assets/locations/fortnite.jpeg": "dafa67ef28598eff3b429549f75fe266",
"assets/assets/locations/gachimuchi.png": "0ffe9dea5a3e47149ad2dcb6c1830321",
"assets/assets/GUI/hero.png": "a0abe36746548f6e015309c14894eb11",
"assets/assets/GUI/inventory.jpeg": "09487d4b714e6b2af067cdd3226df297",
"assets/assets/GUI/play.jpeg": "3e73d0b59eebce9d00a8ee8437d1e8bf",
"assets/assets/GUI/skills.jpeg": "b80319451f3ef494f79d6fb70fa1872f",
"assets/assets/GUI/profile.jpeg": "9ba812d115635ad21d592fd3829dff4b",
"assets/assets/GUI/diamond.png": "b88a26c193f098ab8b4a032bbed4778d",
"assets/assets/GUI/coin.png": "e3653d309bb16510e897326cb9bd6bd5",
"assets/assets/items/img_animal.png": "9989ec3c558bccecd720f8c65b4f6bb9",
"assets/assets/items/img_hand1.png": "232b48a0c21025f9b285108a4d884255",
"assets/assets/items/img_hand2.png": "febe3727bab49e35b5205a27c676151d",
"assets/assets/items/img_head.png": "f156d478d8b2057d47ea99312851be50",
"assets/assets/items/img_hoop.png": "dc7506106c613a692994f3ea959f8edf",
"assets/assets/items/img_foot.png": "0aeae53b67a388f0ce8d56aeb6c8f3a9"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
