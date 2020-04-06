// 在 Service Worker 中你不能访问 BOM DOM 的 API

const CHCHE_V1 = 'cache-v2' // 缓存版本号

// 生命周期如下
self.addEventListener('install',e=>{
  // 有更新直接 activate
  // e.waitUntil(self.skipWaiting())
  // 每次 install  写入缓存
  e.waitUntil(caches.open(CHCHE_V1).then(cache=>{
    cache.addAll([
      '/', // 缓存路径
      './index.css', // 缓存资源名称
    ])
  }))
})

self.addEventListener('activate',e=>{
  // console.log('activate',e)
  // 在这里清理无效缓存
   e.waitUntil(caches.keys().then(cacheNames=>{
     return Promise.all(cacheNames.map(cacheName=>{
       if(cacheName!==CHCHE_V1){ // 历史的缓存名与当下的缓存名是否一致
        return caches.delete(cacheName)
       }
     }))
   }))
})

self.addEventListener('fetch',e=>{
  // console.log('fetch',e)
  // 先查缓存没有在进行静态资源的请求
  // 这样就算你关闭服务器，命中缓存也是可以显示出页面的
  e.respondWith(caches.open(CHCHE_V1).then(cache=>{
    return cache.match(e.request).then(res=>{
      if(res){ // 命中缓存就取缓存，否则进行fetch请求
        return res
      }
      fetch(e.request).then(res=>{
        cache.put(e.request,res.clone()) // 写入缓存供下次使用
        return res
      })
    })
  }))
})
self.registration.showNotification('Vibration Sample', {
  body: 'Buzz! Buzz!',
  icon: '../images/touch/chrome-touch-icon-192x192.png',
  vibrate: [200, 100, 200, 100, 200, 100, 200],
  tag: 'vibration-sample'
});