const PREFIX='planfolio:'+new URL(self.registration.scope).pathname+':',CACHE=PREFIX+'9dbb4cc483aa';
const FILES=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./favicon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>r.ok?r:caches.match(new URL('./index.html',self.registration.scope))).catch(()=>caches.match(new URL('./index.html',self.registration.scope))));return;}e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});
