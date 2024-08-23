import{S as d,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=r=>`
    <li class = "gallery-card">
      <div class="image-container">
          <a href="${r.largeImageURL}" class="original-image-link">
            <img class ="gallery-image" src="${r.webformatURL}" alt ="${r.tags}"/>
          </a>
          <div class ="gallery-image-info-container">
            <div class = "gallery-image-info">
                <p class ="gallery-text">Likes</p>
                <p class = "gallery-value">${r.likes}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Views</p>
              <p class = "gallery-value">${r.views}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Comments</p>
              <p class = "gallery-value">${r.comments}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Downloads</p>
              <p class = "gallery-value">${r.downloads}</p>
            </div>
          </div>
      </div>
    </li>
    `,p=r=>{const a="https://pixabay.com/api/",s="45503766-d567cf30782da5aa373afc201",l=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${a}?key=${s}&${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},i=document.querySelector(".form"),c=document.querySelector(".gallery-list"),y=()=>new d(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),g=y(),m=r=>{r.preventDefault(),c.innerHTML="";const a=i.elements.user_query.value;if(a===""){n.error({title:"Error",message:"Please fill input field",position:"topRight"});return}else{let s=document.querySelector(".loader");s.classList.remove("visually-hidden"),p(a).then(l=>{if(l.hits.length===0){n.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",i.reset(),i.elements.user_query.value="",s.classList.add("visually-hidden");return}s.classList.add("visually-hidden");const e=l.hits.map(t=>u(t)).join("");c.insertAdjacentHTML("afterbegin",e),i.elements.user_query.value="",g.refresh()}).catch(()=>{n.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),s.classList.add("visually-hidden")})}};i.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
