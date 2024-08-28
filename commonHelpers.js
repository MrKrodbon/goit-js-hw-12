import{a as m,S as L,i as n}from"./assets/vendor-CRwkH7JT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h=t=>`
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
    `;m.defaults.baseURL="https://pixabay.com/api";const b="45503766-d567cf30782da5aa373afc201",v=(t,a)=>{const r={params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}};return m.get("/",r)},c=document.querySelector(".form"),w=document.querySelector(".form input"),u=document.querySelector(".gallery-list"),g=document.querySelector(".main-load-wrapper .loader"),l=document.querySelector(".loadMoreBtn"),d=document.querySelector(".load-more-wrapper .loader");let p=1,y;const S=()=>new L(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),q=S(),E=async t=>{t.preventDefault(),u.innerHTML="",y=c.elements.user_query.value.trim();try{g.classList.remove("visually-hidden"),l.classList.add("visually-hidden");const a=await v(y,p);c.reset(),g.classList.add("visually-hidden");let r=a.data.hits;if(y===""){n.error({title:"Error",message:"Please fill input field",position:"topRight"});return}if(r.length===0){n.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("visually-hidden"),u.innerHTML="",c.reset();return}const o=r.map(e=>h(e)).join("");u.insertAdjacentHTML("afterbegin",o),q.refresh(),l.classList.remove("visually-hidden")}catch{n.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),w.textContent="",g.classList.add("visually-hidden"),l.classList.add("visually-hidden")}},P=async()=>{const t=document.querySelector(".gallery-list li");try{p++,l.classList.add("visually-hidden"),d.classList.remove("visually-hidden");const a=await v(y,p);let r=a.data.hits,o=a.data.totalHits,e=Math.ceil(o/r.length);if(p>=e){n.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.classList.add("visually-hidden"),l.classList.add("visually-hidden");return}else{const s=r.map(f=>h(f)).join("");u.insertAdjacentHTML("beforeend",s),d.classList.add("visually-hidden"),l.classList.remove("visually-hidden");let i=t.getBoundingClientRect();console.log(i),window.scrollBy({top:i.top*i.y,behavior:"smooth"}),console.log(i)}}catch{n.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),c.elements.user_query.value="",d.classList.add("visually-hidden"),l.classList.remove("visually-hidden")}};c.addEventListener("submit",E);l.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
