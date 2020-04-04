import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "assets/fonts/Basic/Basic-Regular.ttf";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));




// /**
//    1. open the cache
//    2. fetch
//       a. if success --> update the cache then return
//       b. if error --> return the cache
//  */
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.open('mysite-dynamic').then(function(cache) {
//       return fetch(event.request).then(function(response) {
//         cache.put(event.request, response.clone());
//         return response;
//       })
//     })
//   );
// });

