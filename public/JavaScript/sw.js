let cachename = 'fold1';

// Set all requried files under scope of SW
// What is worth saving to cache?

let files = [
    // HTML
    '../index.html',
    '../AboutMe.html',
    // Stylesheets
    '../CSS/AboutMe.css',
    '../CSS/BasicTemplate.css',
    '../CSS/Header.css',
    '../CSS/LandingPage.css',
    // Scripts
    '../JavaScript/sw.js',
    '../JavaScript/index.js',
    '../JavaScript/server.js',
    // Assets
    '../Images',
];


self.addEventListener('install', function(event) {
    // Perform install steps
      caches.open(cachename)
        .then(function(cache) {
          console.log('Opened cache');
          cache.addAll(files);
        })
  });
  

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(match){
                if(match){
                    return match;
                } else {
                    console.log("to be filled")
                    fetch(event.request)
                        .then(function(response){
                            return caches.open(cachename).then(function(cache){
                                cache.put(event.request, response.clone())
                                return response
                            })
                        })
                }
            })
    );
})