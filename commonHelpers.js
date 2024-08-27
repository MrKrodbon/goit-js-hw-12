import{a as m,S as v,i as c}from"./assets/vendor-CRwkH7JT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=r=>`
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
    `;m.defaults.baseURL="https://pixabay.com/api";const L="45503766-d567cf30782da5aa373afc201",f=(r,a)=>{const s={params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,page:a}};return m.get("/",s)},i=document.querySelector(".form"),d=document.querySelector(".gallery-list"),p=document.querySelector(".main-load-wrapper .loader"),o=document.querySelector(".loadMoreBtn"),y=document.querySelector(".load-more-wrapper .loader");let g=1,n;const w=()=>new v(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),_=w(),q=async r=>{r.preventDefault(),d.innerHTML="",n=i.elements.user_query.value;try{p.classList.remove("visually-hidden");const a=await f(n,g);p.classList.add("visually-hidden");let s=a.data.hits;if(n===""){c.error({title:"Error",message:"Please fill input field",position:"topRight"});return}if(s.length===0){c.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",i.reset(),i.elements.user_query.value="";return}const l=s.map(e=>h(e)).join("");d.insertAdjacentHTML("afterbegin",l),_.refresh(),o.classList.remove("visually-hidden")}catch{c.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),i.elements.user_query.value="",p.classList.add("visually-hidden"),o.classList.add("visually-hidden")}},b=async()=>{n=i.elements.user_query.value;try{g++,o.classList.add("visually-hidden"),y.classList.remove("visually-hidden");let a=(await f(n,g)).data.hits;if(a.length===0)throw new Error;const s=a.map(l=>h(l)).join("");d.insertAdjacentHTML("beforeend",s),y.classList.add("visually-hidden"),o.classList.remove("visually-hidden")}catch{c.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),y.classList.add("visually-hidden"),o.classList.add("visually-hidden")}};i.addEventListener("submit",q);o.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
