"use strict";var precacheConfig=[["/index.html","8d6dfc2033b6dd0e00c3f6da23caa786"],["/static/css/main.09e43415.css","9f3cc51d3218a02ad76f67c1764376eb"],["/static/js/main.dbc94986.js","43d0f8c0bc91ea74905b9df798b81e17"],["/static/media/12-phones.ce6c8b6f.png","ce6c8b6f93623758c6b5d6587a704e00"],["/static/media/Design-thinking-workbook.ffb4363e.pdf","ffb4363e2acf1cb4c35a4dfb3f520166"],["/static/media/back-arrow-hover.0975d690.png","0975d6908a19a74ef068b86bd1717c7e"],["/static/media/back-arrow.5226a159.png","5226a159f784a13412e402cd02ff9603"],["/static/media/backpacker.72ba1f70.png","72ba1f701720fdc94e87d8009798c4b1"],["/static/media/cards.f664a737.png","f664a7375a7faf79c46972cdbe36ce34"],["/static/media/cat-with-plant.fc9f4906.png","fc9f49068ad7c08e14a66969f6e7b329"],["/static/media/cat.32414e80.png","32414e80d468a9cfbcb6330e9f81e2d4"],["/static/media/daihan.72c2c00b.png","72c2c00b6a00ba6fa7cd8cace27df41f"],["/static/media/dt-cover.9fc2cc70.png","9fc2cc70d6d944a5eb8aaaf4b1e30cc8"],["/static/media/dt-page3.26f564c7.png","26f564c773e40174fc275b757b341d1e"],["/static/media/dt-page4.437ed5fb.png","437ed5fbc0c6bdd566f20c73c0db039b"],["/static/media/empty-state-header.c2c1c3cd.png","c2c1c3cdca2378bd39652fe54d39d916"],["/static/media/empty.c01cf52e.png","c01cf52e89399de5a33d3fe0fecf3217"],["/static/media/emptyall.51a9f904.png","51a9f904f34b9d44271ce76e0c6c5586"],["/static/media/flower.4b820210.png","4b8202102abe36e3fab90bdf22ce5110"],["/static/media/food.b2eae797.png","b2eae797ac337a360435a7acc1933e2a"],["/static/media/founder.7592b582.png","7592b5821e6caf7240b1919f2477a345"],["/static/media/gradient.ca5a06dc.png","ca5a06dc8a27c3e24fac4811b9806491"],["/static/media/hamburger.9f385413.svg","9f385413dcae84f208fde3b76813dbf2"],["/static/media/hand-with-cards.a6b7a6a6.png","a6b7a6a611905ed26caf1799e6d91588"],["/static/media/header.34e5ba4b.png","34e5ba4b74d8918d1f459cf7c8e98cde"],["/static/media/icon.9d76c44f.png","9d76c44f81d8400c97e1963a032ddc8c"],["/static/media/illu.cd699103.png","cd69910341e7956b35bd2851acb2d96b"],["/static/media/illu1.3a87040a.png","3a87040acf28a55752cace9d854d69ad"],["/static/media/inspiration.c5786759.png","c5786759ed4e23121d620da5b7af6b91"],["/static/media/mid-header.ad7c5837.png","ad7c5837cf5a91de9be6d0f6ce2b66c3"],["/static/media/mock-up.6a9c27cf.png","6a9c27cf629acbd7d09f9a542611f1da"],["/static/media/my-computer.670f2957.png","670f2957b8b89d9e90a38b4920d20f5f"],["/static/media/original.a8312b8a.png","a8312b8ae1c160a7ffc1b18071dc36ed"],["/static/media/our-brand.079d92c2.png","079d92c23e026e7fe3686c93dedf0ac9"],["/static/media/people.8761c724.png","8761c724c15a6e478ee32e37f5ba9adf"],["/static/media/rbc-dots.6523db9a.png","6523db9afb8a5f9cf447c5b254c238a6"],["/static/media/rbcx-logo.7476cc27.png","7476cc2737328f0d458ee674e76e770b"],["/static/media/rbcx.9e7801fa.gif","9e7801fa9e48399125734d3fd247316a"],["/static/media/rocket-banner.65ea3d98.png","65ea3d985d3c9698239453876d593fa9"],["/static/media/shapes.47b62359.png","47b6235959d1968bac9a85fa251e91ce"],["/static/media/toolbar.dd9ff046.png","dd9ff04651d8c44716bd9315092ebcd4"],["/static/media/venture-inside.84a8ed69.png","84a8ed6960164a10b8847059dfcec0a4"],["/static/media/yellow.eaa2b3c8.png","eaa2b3c8635af72c649dc8290ab32021"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});