import{a as m,S as L,i as c}from"./assets/vendor-CRwkH7JT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h=t=>`
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
    `;m.defaults.baseURL="https://pixabay.com/api";const b="45503766-d567cf30782da5aa373afc201",v=(t,a)=>{const r={params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}};return m.get("/",r)},d=document.querySelector(".form"),w=document.querySelector(".form input"),p=document.querySelector(".gallery-list"),g=document.querySelector(".main-load-wrapper .loader"),l=document.querySelector(".loadMoreBtn"),u=document.querySelector(".load-more-wrapper .loader");let n=1,y;const S=()=>new L(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),q=S(),E=async t=>{t.preventDefault(),p.innerHTML="",y=d.elements.user_query.value.trim();try{g.classList.remove("visually-hidden"),l.classList.add("visually-hidden");const a=await v(y,n);d.reset(),g.classList.add("visually-hidden");let r=a.data.hits;if(y===""){c.error({title:"Error",message:"Please fill input field",position:"topRight"});return}if(r.length===0){c.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("visually-hidden"),p.innerHTML="",d.reset();return}const i=r.map(e=>h(e)).join("");p.insertAdjacentHTML("afterbegin",i),q.refresh(),l.classList.remove("visually-hidden")}catch{c.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),w.textContent="",g.classList.add("visually-hidden"),l.classList.add("visually-hidden")}},P=async()=>{const t=document.querySelector(".gallery-list li");try{n++,l.classList.add("visually-hidden"),u.classList.remove("visually-hidden");const a=await v(y,n);let r=a.data.hits,i=a.data.totalHits,e=Math.ceil(i/r.length);if(console.log(e),console.log(n),n>=e){c.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.classList.add("visually-hidden"),l.classList.add("visually-hidden");return}else{const s=r.map(f=>h(f)).join("");p.insertAdjacentHTML("beforeend",s),u.classList.add("visually-hidden"),l.classList.remove("visually-hidden");let o=t.getBoundingClientRect();console.log(o),window.scrollBy({top:o.top*o.y,behavior:"smooth"}),console.log(o)}}catch{c.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),d.elements.user_query.value="",u.classList.add("visually-hidden"),l.classList.remove("visually-hidden")}};d.addEventListener("submit",E);l.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
