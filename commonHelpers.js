import{a as g,S as v,i as n}from"./assets/vendor-CRwkH7JT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h=t=>`
    <li class = "gallery-card">
      <div class="image-container">
          <a href="${t.largeImageURL}" class="original-image-link">
            <img class ="gallery-image" src="${t.webformatURL}" alt ="${t.tags}"/>
          </a>
          <div class ="gallery-image-info-container">
            <div class = "gallery-image-info">
                <p class ="gallery-text">Likes</p>
                <p class = "gallery-value">${t.likes}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Views</p>
              <p class = "gallery-value">${t.views}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Comments</p>
              <p class = "gallery-value">${t.comments}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Downloads</p>
              <p class = "gallery-value">${t.downloads}</p>
            </div>
          </div>
      </div>
    </li>
    `;g.defaults.baseURL="https://pixabay.com/api";const L="45503766-d567cf30782da5aa373afc201",f=async(t,a)=>{const r={params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}};return await g.get("/",r)},c=document.querySelector(".form"),w=document.querySelector(".form input"),u=document.querySelector(".gallery-list"),m=document.querySelector(".main-load-wrapper .loader"),l=document.querySelector(".loadMoreBtn"),o=document.querySelector(".load-more-wrapper .loader");let d=1,p="";const S=()=>new v(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),b=S(),E=async t=>{t.preventDefault(),d=1,u.innerHTML="",p=c.elements.user_query.value.trim();try{m.classList.remove("visually-hidden");const a=await f(p,d);c.reset(),m.classList.add("visually-hidden");let r=a.data.hits;if(p===""){n.error({title:"Error",message:"Please fill input field",position:"topRight"});return}if(r.length===0){n.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("visually-hidden"),u.innerHTML="",c.reset();return}const i=r.map(e=>h(e)).join("");u.insertAdjacentHTML("afterbegin",i),b.refresh(),l.classList.remove("visually-hidden")}catch{n.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),w.textContent="",m.classList.add("visually-hidden")}},q=async()=>{d++;try{l.classList.add("visually-hidden"),o.classList.remove("visually-hidden");const t=await f(p,d);l.classList.remove("visually-hidden"),o.classList.add("visually-hidden");let a=t.data.hits,r=t.data.totalHits;d*15>=r&&(n.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),o.classList.add("visually-hidden"),l.classList.add("visually-hidden")),o.classList.add("visually-hidden");const e=a.map(s=>h(s)).join("");u.insertAdjacentHTML("beforeend",e),x()}catch{n.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),c.elements.user_query.value="",o.classList.add("visually-hidden"),l.classList.remove("visually-hidden")}};function x(){let a=document.querySelector(".gallery-list li").getBoundingClientRect();window.scrollBy({top:a.top*a.y,behavior:"smooth"})}c.addEventListener("submit",E);l.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
