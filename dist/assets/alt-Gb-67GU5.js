import"./modulepreload-polyfill-B5Qt9EMX.js";const o={location:{lat:0,lng:0,url:""}};function r(n){const t=n.target,e=t.parentNode;"geolocation"in navigator?(t.disabled=!0,t.innerHTML='<span class="loader"></span>',navigator.geolocation.getCurrentPosition(function(i){o.location.lat=i.coords.latitude,o.location.lng=i.coords.longitude,o.location.url=`https://www.bing.com/maps?cp=${o.location.lat}~${o.location.lng}&lvl=15&style=r`,e.insertBefore(document.createTextNode("Location fetched!"),t),e.querySelector("svg").classList.add("active"),e.removeChild(t),e.querySelector("button").disabled=!1,e.querySelector("button").classList.add("active")},()=>{a("Your browser or permission settings do not allow location fetching.")})):a("Your browser or permission settings do not allow location fetching.")}function s(n){n.preventDefault();const e=new FormData(n.target).get("name");if(e.trim()===""||o.location.lat===0||o.location.lng===0){document.getElementById("error").textContent="Please enter your name and get your location first!";return}document.getElementById("error").textContent="";const i=localStorage.getItem(e);if(i){l(i,"Stored location URL copied to clipboard.");return}o.location.url+=`&sp=point.${o.location.lat}_${o.location.lng}_${encodeURI(e)}`,localStorage.setItem(e,o.location.url),l(o.location.url,"Location URL copied to clipboard.")}function l(n,t){"clipboard"in navigator&&navigator.clipboard.writeText(n).then(function(){a(t)},function(){a("Failed to copy location URL to clipboard.")})}let c;function a(n){c&&clearTimeout(c);const t=document.getElementById("info-message");t.querySelector("p").textContent=n,t.classList.add("visible"),c=setTimeout(()=>{t.classList.remove("visible")},2e3)}const d=document.getElementById("get-location"),u=document.querySelector("form");d.addEventListener("click",r);u.addEventListener("submit",s);
