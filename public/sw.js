const CACHE='tlm-shell-v1.2.0';
const ASSETS=['./','./index.html','./styles.css?v=1.2.0','./app.js?v=1.1.0','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(url.pathname.includes('/api/chat')) return;
  if(event.request.method!=='GET') return;
  event.respondWith(
    fetch(event.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(event.request,copy));
      return res;
    }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html')))
  );
});
