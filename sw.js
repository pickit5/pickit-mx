const CACHE='pickit-v4';
const FILES=['./','./index.html','./config.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
// Solo guarda archivos de la propia app; nunca datos, sesiones ni pagos.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
// Avisos de bolsas nuevas
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(x){}
  const title=String(d.title||'Pick It').slice(0,80),body=String(d.body||'Hay bolsas nuevas cerca de ti').slice(0,160);
  e.waitUntil(self.registration.showNotification(title,{body,icon:'icon-192.png',badge:'icon-192.png',tag:'pickit-bolsas',data:{url:'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if('focus' in w){w.navigate('./').catch(()=>{});return w.focus()}}return clients.openWindow('./')}))});
