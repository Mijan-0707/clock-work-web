'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fb78e079f8fc42078bf40b2a2471d571",
"version.json": "f313c22dc18f235f6fee1671df2f5378",
"index.html": "a3acbeb90b0ac3eeaadd39a9feb12628",
"/": "a3acbeb90b0ac3eeaadd39a9feb12628",
"main.dart.js": "2141fc566e29d367f082ecb1651175de",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7abe013df7f294a88e143dec7f817d45",
"assets/AssetManifest.json": "4f6fcc2d85470b7ff40a21ddec97ef00",
"assets/NOTICES": "9dbb4863820ab5deae5f15fb367cd993",
"assets/FontManifest.json": "38a3a886d96d804ccb0a88a1df46db8a",
"assets/AssetManifest.bin.json": "b0d9aa78e4b95ea4398a96eb32d96a5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "66325af4a4a74d7a5198f5663bf760cd",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/data.json": "b11d045c169ade90e92f60bb6178d1e0",
"assets/assets/videos/README.md": "3224cb805de8e2c7444f8527f9512071",
"assets/assets/graphics/clients/client_12.png": "17c5f783500d850b8c1cb784f84f05c6",
"assets/assets/graphics/clients/client_13.png": "08d932d87248b0535caf1b48c89debee",
"assets/assets/graphics/clients/client_11.png": "5b7831a1121db81679307568e6ea9d22",
"assets/assets/graphics/clients/client_10.png": "d45489a082c15a267fd8680384fc7c9d",
"assets/assets/graphics/clients/client_28.png": "2bc34cc8598fd8b280e6af524070f8d3",
"assets/assets/graphics/clients/client_14.png": "c6c033db65b4bf4f84a131997d5dc2f5",
"assets/assets/graphics/clients/client_15.png": "022e4c330e8c022343dce40688394c83",
"assets/assets/graphics/clients/client_17.png": "18ddb3d621740d8ca4d45391d3ac1142",
"assets/assets/graphics/clients/client_16.png": "261b4b111ec952ad8639bd4e8b48872d",
"assets/assets/graphics/clients/client_7.png": "6355a3346657d8cc01ed7b60676b2bc3",
"assets/assets/graphics/clients/client_6.png": "6537537fe1a210726c3188395d94d524",
"assets/assets/graphics/clients/client_4.png": "d9c06b7d0fe4273bef3bf750a2551016",
"assets/assets/graphics/clients/client_5.png": "0b30f2bd366bc6b7de894c96f47cff71",
"assets/assets/graphics/clients/client_1.png": "19c39b1dd698e1d06196eaa5c9b13bf4",
"assets/assets/graphics/clients/client_2.png": "53105f5d63832d23ce8d7c28c683c45e",
"assets/assets/graphics/clients/client_3.png": "59eafacce66f151365a2f486c6e8c459",
"assets/assets/graphics/clients/README.md": "dd0296ff9af6a6e93c3217b7105493ad",
"assets/assets/graphics/clients/client_8.png": "74a6d2187fe06493621cd2b46dbdd9ec",
"assets/assets/graphics/clients/client_9.png": "004796d18a8bd8069ddfeb1ddbec5b5b",
"assets/assets/graphics/clients/client_27.png": "9654a27016d00c63a0829a308870c3ec",
"assets/assets/graphics/clients/client_26.png": "6b04f99d0c292f73c693baa8c4aed3d7",
"assets/assets/graphics/clients/client_24.png": "c76333da5180448df41ba73e0d5481c1",
"assets/assets/graphics/clients/client_18.png": "c9364a324fca672046300dcf23fbcab3",
"assets/assets/graphics/clients/client_19.png": "f8a09d83b1d1cedc39991a920ca554b6",
"assets/assets/graphics/clients/client_25.png": "d85b8d0930a6beb0dbf0698e1bf4f756",
"assets/assets/graphics/clients/client_21.png": "d641e5055da17028782f0988ce31b048",
"assets/assets/graphics/clients/client_20.png": "d452577bd5bf59b834051bc94ead771e",
"assets/assets/graphics/clients/client_22.png": "8bafaec1490c75531eb3c47073aa8e2e",
"assets/assets/graphics/clients/client_23.png": "9af82da4b54feecfe320613746cfd32c",
"assets/assets/graphics/circle.svg": "da246be7897ac9cf1775a1698281c264",
"assets/assets/graphics/clock_white.svg": "1e9ad48468158ea6d8587cb29479ca54",
"assets/assets/graphics/gear_gif.gif": "dd4876ebdf4437a1df13aa2474a45ea4",
"assets/assets/graphics/clock_work_360.svg": "e433125ee8c7b0c34b73fd116153a52b",
"assets/assets/graphics/gears.svg": "86c606fa44d8e8d5a5cd7a2c12cc2fa1",
"assets/assets/graphics/clock_red_side.png": "3498bb78781ad639a5ed495ec6c50e73",
"assets/assets/graphics/clock.png": "21abd9928458b753d8ff661beed02056",
"assets/assets/graphics/4.png": "f3bc6588e68ab9d06481636caf4d0656",
"assets/assets/graphics/clock_black_side.png": "ac56099ba4896a43f4d3d56f9e1912f9",
"assets/assets/graphics/clock_black.svg": "9fbc93f72982f7e4680c35299010e065",
"assets/assets/graphics/3.png": "cedea7936da9369b87d74bb3dbfcd826",
"assets/assets/graphics/triangles.svg": "14804a6d2b7f390c1b099ee504687727",
"assets/assets/fonts/allerDisplay.ttf": "4cf80f22e2f9d7f0b9bd2381d6c5886c",
"assets/assets/fonts/almonte_woodgrain.ttf": "75b52b557740a520c8e36a89f2e69047",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
