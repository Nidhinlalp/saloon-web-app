'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "77b39573d8f52d828d54438f638f7fa3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d462169d48058ab8fa8d8ad437273c12",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b776a161a12200a32ca8b47912a053a",
".git/logs/refs/heads/main": "d8fd3531a9aa2c9efc885909980f92b8",
".git/logs/refs/remotes/origin/main": "8269aad77981cf2edb52f2f985bdb7b6",
".git/logs/refs/remotes/origin1/main": "9619341e63572cdae73b632ab9d7315d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/7c887d6c99d6a447814e8d4ac3c3888dd89804": "79071afca3a163c6db434936364ab347",
".git/objects/13/edc8b19810237e58bbac146041d46a9c80e41a": "5b0cf8dca450b6b430181253fe71ef94",
".git/objects/14/d78ad5fa3ef3fe4a30479814b3cd35b2f68177": "2af4f244f99754ed85797d16972293a7",
".git/objects/24/722976ce2d56971f1b6d8ff0a634966a1d29d4": "1bf2e78929c75ac4c0a7c6222e25b459",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/33/33cb7b490c7281c5d8db5af06d412836d85dea": "1caa4424f65544aa0f903c5610cdbfe2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/49/8df839da8de1dae7caa30476b6679eb4feeff6": "8795ebc7b6d6107d9fb2dbaffac43f44",
".git/objects/4f/da5bef252ce7c5cce34172a33d9d277867c2ce": "60ce6a17e3de816189bece9d8ccd0618",
".git/objects/56/6e809e9bec359ee1fc402169b6c85fc27ef0fa": "025ed0c431be9aeb9196bef383ff691e",
".git/objects/5e/51dfc203b932e873c91138b8eb25bfacc61f19": "a1c84120010a9d9a270091189a1788c4",
".git/objects/71/ea5adf810b2f3519aa089a90eee86a69c4aaab": "ec5af293582b1efb57a1154f5097162b",
".git/objects/74/d349f3a4740c5dfe98c10ef759e00a58adb664": "f144e24a9b42082dc5f809cf85cd041f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b1d405e5d46fcbd6471ab06bc2a583d29e26d1": "d6c64b50db80e9b1ce8dcb8c09b660da",
".git/objects/84/2494421a142f3c8ddbee012392f0fb73333875": "0636adbdd2acba905826a0194b2396d5",
".git/objects/87/055f7545eee741f92284fd71df1d43553ef2b1": "6dfd40890555230786b93f2d54b43b0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/a59223458b81e630f52e693702dace20e20eb5": "300ada108bbfb00125104da58698cd51",
".git/objects/99/6b2fb59e62ddcee4dc1d1f56e31993df073e88": "c1b95d65d2e253d53d11149128cc7bae",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a0/01c62de6f19c30f29f5bf018895064bec19e24": "fe1d6fdcc7140dc950a486126102d76c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/582361892a1359ea5a243a0958f812bbfbc59e": "9beeb9265900166ea6e52d0e40b76cbd",
".git/objects/ad/b89adb4f511990b0552c5b8c8c18fb1bd29a62": "6fce42e5db35ff8ab75078830c188c50",
".git/objects/ae/d3db496ea54d2094b8535ce3c1c890f4636a3d": "8ae0456c06964896a647f49c2f0f30d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2dd7eddd74ee9bf47b4a2b646b4f83a320b3bf": "d2e3e9f77fc171693c481797cb3d0a1d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/a2a638e0b4d9202cab1646781034eb4f5b4709": "ad5406567645888839376b94ce5cd788",
".git/objects/bd/34741a1e6ade7c3f30911a37de6871f609520a": "0afbb9e7c68ae2c814a9800e9f153dd9",
".git/objects/be/b4b7a3803d386481b9471ab0a62727348bc0c3": "b45ffe83c6c7731ed3e0637760b6d4fa",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/054da6dc72e45f4040f94a0e639a9122292b12": "fd5cd0fb4f96669c6be0534ae8d5a702",
".git/objects/c4/0b9b5c4fb5bae865a627a11cea20cefc216eb2": "d71563d3a14b97d8a45dccc7020cc938",
".git/objects/c5/2d886cc49a2e46d37f35513f5b1621495fd9b8": "77724bd85dcf9ecff79b6b7edfa7ab00",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ce/948286f5da5005f3773fc1dcaf99503ed39c86": "00aa8a6244b2027bfce5b240b444bbd3",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/fa912289f9cc04be99ce0696a8da74dccfa0ca": "ac0ab959bc89be7cf31088cf66eb6ef5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/f517ea67202a36e117e8966a71cbeb1de2fe41": "ba2c8e3e0216dc35693bc031c2539c7f",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/c505131841a1c6c0ba5f9e17ddaceafad822b9": "3a2c7c953ce74f03cdbbd5aa6831182b",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e7/4ae17e8f638462283ca226e2cf59400a3728c1": "e5945e9265f0e48f3b28bfe33e9d7856",
".git/objects/e8/a2132d887264b2d445455eedd12d2cfc737460": "950874709b5bb1539308ffb7bf6cafce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f085abc23b4686f8765dba5f03982f130906fe": "2740fff70cced409076729f8ad816f0c",
".git/objects/ee/c72573c8302d495c35a6474fa9391fe6bfde22": "9556f961d8baa7156dfbd87640a78970",
".git/objects/f3/f91c3392827732876e0ba94619e0b70cd9da3d": "bd57f5258eced773977e5a37591184cb",
".git/objects/f6/662f3d1ebb2182ff3fbfce39e4ceb03b5bcc00": "949a0f444b6019ab97c4073f84e19729",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "65e4f8d146121b642582f00b53944d48",
".git/refs/remotes/origin/main": "d2b5240c4766b66fd30e6052c4865742",
".git/refs/remotes/origin1/main": "65e4f8d146121b642582f00b53944d48",
"assets/AssetManifest.bin": "18b213b077240126fd748eb062a6a7cb",
"assets/AssetManifest.json": "bb2c4b393a904d1e4dccadd0ed33e23a",
"assets/assets/fonts/VisbyBold.otf": "acedbc39ef270b01a3e4091f2b673d31",
"assets/assets/fonts/VisbyLight.otf": "8f8e3a269ab2b2839ff4b9054879a660",
"assets/assets/fonts/VisbyMedium.otf": "915b4df6c9ec500fa7679ffb2f149fdd",
"assets/assets/fonts/VisbyRegular.otf": "e31ab27b1f557697d6ebe75acc6cf250",
"assets/assets/fonts/VisbySemibold.otf": "ebed52ab55bcbac8a6ca445f62350726",
"assets/assets/images/cutting.jpeg": "f089646ee782f968866671b2575a81ee",
"assets/assets/images/google.png": "a343e13eee5ddcac9eb154cea0bcf575",
"assets/assets/images/ic_menu.png": "28681636a747e28c71d53ee7ddf56921",
"assets/assets/images/ic_search.png": "a9d42edc2a44a458fb0b3db6783ce6c6",
"assets/assets/images/ic_star.png": "0b529bca8665cf4775e7836f1e38d378",
"assets/assets/images/img_onbaording.png": "3f4a15c20449d00a43542e5a016a8243",
"assets/assets/images/Shampooing.jpeg": "aa1c44bdc40d023e0de710264fdc3036",
"assets/assets/images/shaving.jpeg": "6ba4d248aa3241cd067b0514bb430f3d",
"assets/assets/images/styling.jpeg": "3661bbdac4b11d99cecbbeb017152600",
"assets/assets/images/triming.jpeg": "d381910f36e8baf163b021aeb6b1c152",
"assets/FontManifest.json": "883eed8182badd690a5ab6f87834cedc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "941c0c7ba7e178407774f67a2294607b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce2dff4ebc0a9287b5f374b8041fa128",
"/": "ce2dff4ebc0a9287b5f374b8041fa128",
"main.dart.js": "57764694b471b289361bd43188fdfa2f",
"manifest.json": "fe45bdbf3c2f82ecffc85c122711ddc6",
"version.json": "67cc748d27784b64553b8d190bc7fbab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
