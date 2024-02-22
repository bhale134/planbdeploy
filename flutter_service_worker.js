'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "9b86cf98614d0094e1859ad9df34beca",
"/": "9b86cf98614d0094e1859ad9df34beca",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d8cc9d6d26ded4e0906b2b6bc2c51f4f",
"assets/NOTICES": "dc5fc6deda698e13378ba96a1a03dfc7",
"assets/AssetManifest.bin": "fc913411dd4dfebfc4a357472ac56792",
"assets/AssetManifest.json": "46e69d173690c47fe98b83870f111f7e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "31a0d6e434dea5a846efffe59170c479",
"assets/AssetManifest.bin.json": "af32349d24e584e2db01544bd0260a59",
"assets/assets/search.svg": "b2feb1c702b9b4c46343cfc222770c0d",
"assets/assets/drop.svg": "7b8b2af526b2e2512c2682f889fef14f",
"assets/assets/document.svg": "3495668510842cd9097776c7db2cd607",
"assets/assets/user1.svg": "f86f2b489ef70f5670667a460bb3f6e6",
"assets/assets/clients.svg": "958290aa0f9ecfe764441b86308676fc",
"assets/assets/preview.svg": "4cd5ed50a96edd841f6aa3295bc26172",
"assets/assets/man.jpeg": "3667d100cf087238f2cdf0a45a6c587c",
"assets/assets/image.svg": "797996801453e2cab4ae0e32c1522438",
"assets/assets/airpod2.jpeg": "3542382802b4cc76eb8dda8ebbdfc0c5",
"assets/assets/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/noproduct.png": "76d025fffc140179017b515045ea7d4a",
"assets/assets/404imagered.png": "6fcded5f6ec9ada7d92678539e0ab4af",
"assets/assets/sweat.png": "2a75bb852891bca812c8d5e0898c72a3",
"assets/assets/google.png": "bf7882b7f715633557ea110d333d9c75",
"assets/assets/pie-chart.svg": "23d3f5bae0abfbd169de394912e752af",
"assets/assets/Dall4.png": "09d8014ada94b66da23ba4acbe5a1acb",
"assets/assets/Dallbg1.png": "775b70eb60b9da6f9ece1299c9bed33e",
"assets/assets/Dallbg2.png": "3c8278a373ebd667537f42269c7327c4",
"assets/assets/Dall1.png": "4bd2cb51a442eb63e3e5b74d506f67ff",
"assets/assets/images/box.png": "2c768d2a638f558fbe746e75503b8f17",
"assets/assets/images/hijab.png": "e15045ba638cd1a4ad01cea0080b3cb0",
"assets/assets/images/marc.jpeg": "d0a3e8185726d337c8cf5acc253670a5",
"assets/assets/images/plant.png": "8472dc97f9f0c7ea0d26d688dc3e5f8e",
"assets/assets/images/webpage.png": "0ffad732753eaedd7e92e27fca39c446",
"assets/assets/images/medaille.png": "4e4177c63576d36ec8135c0cd263160c",
"assets/assets/images/brush.png": "7f16681b9bac6ea11c9f819831b731c5",
"assets/assets/images/lotion.png": "8ddc004cc521aba054a63068bb44382f",
"assets/assets/images/certified.png": "9ca8d88ec60e3a6a913a79364ba7382f",
"assets/assets/images/shoe.png": "e71a48ab0c67c757aa57490664cffe7d",
"assets/assets/images/hijab.webp": "e69cc3b80ddf8714490202fb1e17923b",
"assets/assets/images/detailsTest.png": "315710fd013904503e8ecc5cdd26c015",
"assets/assets/images/kitchen.png": "184b285ef3affdb74d37f43c1cf2a90a",
"assets/assets/images/logo.png": "3b60586122f76aa004703540c9fa253d",
"assets/assets/images/gift.png": "c8512834196d02337fdc146c31f006f8",
"assets/assets/images/writter.png": "8d05fc991a33d42ced504581c600e8d0",
"assets/assets/images/templateImg.png": "8625f64dcbc26a62456c002e4cc6232f",
"assets/assets/images/jeans.png": "93b83f72b02f26e959d053bc2285ffed",
"assets/assets/images/cosmetic.png": "fca61ef7a736df3a47753c9eab0432a4",
"assets/assets/images/card.png": "2ab987e6fc25c2be2217636a643409f3",
"assets/assets/images/kitty.png": "fc331d6b39e8eae90e13459b59f90119",
"assets/assets/images/avatar.png": "d30e15a23e08f09fd62e87f4d5fe5f49",
"assets/assets/images/webpage2.png": "c70a657e8bdad6654ecb90f524a6d5c0",
"assets/assets/images/logo1.png": "9f16beb1408332613335621b71dc4ca6",
"assets/assets/images/addArticle.png": "de1cddcf119da3abe4b6a4d0cb1a4a3b",
"assets/assets/attente.svg": "7a9f63ed699f6a6259ac6953710df4b8",
"assets/assets/logoM.png": "aa1fe1b0952f9192d3c6175eedc109b8",
"assets/assets/Dall5.png": "3d7af7b014f4897e77a6a78ea74e330a",
"assets/assets/engrenage.svg": "8a3f90d2140fe88eb6f79728edeff50e",
"assets/assets/loading.png": "5e55813eb9e551a5c25c3303731f9c4d",
"assets/assets/404image.png": "6343038a79950bae47a27d9467662bc2",
"assets/assets/airpod3.jpeg": "4d0ad6b6f033ed08ef016a8e9d36c8d7",
"assets/assets/noimage.png": "c5eaa7645bae9a14a24b67c12d5448a6",
"assets/assets/clipboard.svg": "908a3ba351834d8111a9184f96ee1d15",
"assets/assets/ring.svg": "6ed7f9f01871f426e979afb4e2252bf2",
"assets/assets/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/credit-card.svg": "e20c5068e78d4d9a1c719e93f7e84ef6",
"assets/assets/trophy.svg": "e036099c505d72b2455e1f8388e6376d",
"assets/assets/vide.png": "d46e47d183c6fefbe0a4b9116df59737",
"assets/assets/Dall-MMB.png": "c5a9ecaffe52ed818f8a4144852042c1",
"assets/assets/card.png": "299e694bfe68985abd9c4e3ea19802d2",
"assets/assets/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/internet.svg": "f7327fef798faee381fe08625839b24f",
"assets/assets/airpod1.jpeg": "b396fdce591345c0bda091d840bd1168",
"assets/assets/wifi.svg": "c83a375863190fc9862addc8fab99d49",
"assets/assets/express.svg": "8a2a6a4ed2e5fa0eebfc42e0db08330e",
"assets/assets/avatar.png": "d30e15a23e08f09fd62e87f4d5fe5f49",
"assets/assets/webpage2.png": "c70a657e8bdad6654ecb90f524a6d5c0",
"assets/assets/message.svg": "2defa601de494e4967130b7fc7f28811",
"assets/assets/annuler.svg": "9e0a5d66cde0faf6cb634be396e0c1dd",
"assets/assets/imgupload.png": "fae03f1a9c98c169a01b4056530f98bd",
"assets/assets/ajout.svg": "9b765b67b9d750b58e7cdbc6cf2624dd",
"assets/assets/product.svg": "bcf4742327c677eee6ef4380a86bae2b",
"assets/assets/calendar.svg": "5da24f42cc2eac5ba7f84b37d2163055",
"assets/assets/electricity.svg": "b5f6b7666493bd2736f57883b466bb52",
"assets/assets/airpodF.png": "148b047352296d06f02a54cbb050fe18",
"assets/assets/logoPrincipal.png": "f8d1cc71d2d059d8c126bf5f9a18e9a5",
"assets/assets/transfer.svg": "d4e0e58b46a323d2b0dcb37ec672f2ce",
"assets/assets/vip.svg": "8d64c480555067d9b7e5bd0488e712ac",
"assets/assets/fait.svg": "ad4183364cca3600ee179dce197ca685",
"assets/assets/mac-action.svg": "2527f1ab853e49d4d5e9802369653b97",
"assets/assets/politic.svg": "401ddf6eedcf60b11768cb55ec6c0c4c",
"assets/assets/invoice.svg": "f7d19983441244e6bd59d7b121b34da0",
"assets/assets/DallB.png": "17fd0e3a3c8c2e9a74590a4f60ca0a2f",
"assets/assets/Dall2.png": "94e38df701a72237425ff037d725c39a",
"assets/assets/Dall3.png": "eb08d82cac8938439a96ddc87f61aa19",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"version.json": "e4c52fd77f461331ddf1d7c3b02e83d3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4a3eb40eded0a47a7e61040ce3972e32",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "2f1f29ee902fd38aa79388bbe3e33544"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
