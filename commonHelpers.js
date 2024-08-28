import{a as m,S as L,i as c}from"./assets/vendor-CRwkH7JT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h=t=>`
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
    `;m.defaults.baseURL="https://pixabay.com/api";const b="45503766-d567cf30782da5aa373afc201",f=(t,s)=>{const a={params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}};return m.get("/",a)},d=document.querySelector(".form"),w=document.querySelector(".form input"),p=document.querySelector(".gallery-list"),g=document.querySelector(".main-load-wrapper .loader"),o=document.querySelector(".loadMoreBtn"),u=document.querySelector(".load-more-wrapper .loader");let n=1,y;const S=()=>new L(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),q=S(),E=async t=>{t.preventDefault(),p.innerHTML="",y=d.elements.user_query.value;try{g.classList.remove("visually-hidden");const s=await f(y,n);d.reset(),g.classList.add("visually-hidden");let a=s.data.hits;if(y===""){c.error({title:"Error",message:"Please fill input field",position:"topRight"});return}if(a.length===0){c.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),p.innerHTML="",d.reset();return}const i=a.map(e=>h(e)).join("");p.insertAdjacentHTML("afterbegin",i),q.refresh(),o.classList.remove("visually-hidden")}catch{c.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),w.textContent="",g.classList.add("visually-hidden"),o.classList.add("visually-hidden")}},P=async()=>{const t=document.querySelector(".gallery-list li");try{n++,o.classList.add("visually-hidden"),u.classList.remove("visually-hidden");const s=await f(y,n);let a=s.data.hits,i=s.data.totalHits,e=Math.ceil(i/a.length);if(console.log(e),console.log(n),n>=e){c.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.classList.add("visually-hidden"),o.classList.add("visually-hidden");return}else{const r=a.map(v=>h(v)).join("");p.insertAdjacentHTML("beforeend",r),u.classList.add("visually-hidden"),o.classList.remove("visually-hidden");let l=t.getBoundingClientRect();console.log(l),window.scrollBy({top:l.top*l.y,behavior:"smooth"}),console.log(l)}}catch{c.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),d.elements.user_query.value="",u.classList.add("visually-hidden"),o.classList.remove("visually-hidden")}};d.addEventListener("submit",E);o.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
