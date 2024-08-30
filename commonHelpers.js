import{a as v,S,i as d}from"./assets/vendor-CRwkH7JT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const f=e=>`
    <li class = "gallery-card">
      <div class="image-container">
          <a href="${e.largeImageURL}" class="original-image-link">
            <img class ="gallery-image" src="${e.webformatURL}" alt ="${e.tags}"/>
          </a>
          <div class ="gallery-image-info-container">
            <div class = "gallery-image-info">
                <p class ="gallery-text">Likes</p>
                <p class = "gallery-value">${e.likes}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Views</p>
              <p class = "gallery-value">${e.views}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Comments</p>
              <p class = "gallery-value">${e.comments}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Downloads</p>
              <p class = "gallery-value">${e.downloads}</p>
            </div>
          </div>
      </div>
    </li>
    `;v.defaults.baseURL="https://pixabay.com/api";const b="45503766-d567cf30782da5aa373afc201",L=async(e,r)=>{const l={params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}};return await v.get("/",l)},c=document.querySelector(".form"),P=document.querySelector(".form input"),p=document.querySelector(".gallery-list"),u=document.querySelector(".main-load-wrapper .loader"),s=document.querySelector(".loadMoreBtn"),y=document.querySelector(".load-more-wrapper .loader");let o=1,g,m,n;const q=()=>new S(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),w=q(),x=async e=>{if(e.preventDefault(),p.innerHTML="",g=c.elements.user_query.value.trim(),g===""){d.error({title:"Error",message:"Please fill input field",position:"topRight"}),u.classList.add("visually-hidden"),s.classList.add("visually-hidden");return}else try{u.classList.remove("visually-hidden"),s.classList.add("visually-hidden");const r=await L(g,o);if(m=r.data.totalHits,c.reset(),u.classList.add("visually-hidden"),n=r.data.hits,n.length===0){d.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),s.classList.add("visually-hidden"),p.innerHTML="",c.reset();return}n.length<15?s.classList.add("visually-hidden"):s.classList.remove("visually-hidden");const l=n.map(i=>f(i)).join("");p.insertAdjacentHTML("afterbegin",l),w.refresh()}catch{d.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),P.textContent="",u.classList.add("visually-hidden"),s.classList.add("visually-hidden")}},E=async()=>{try{o++,s.classList.add("visually-hidden"),y.classList.remove("visually-hidden");const e=await L(g,o);s.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),n=e.data.hits,m=e.data.totalHits,o*15>=m&&(d.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),y.classList.add("visually-hidden"),s.classList.add("visually-hidden"),o=1);const l=n.map(i=>f(i)).join("");p.insertAdjacentHTML("beforeend",l),R(),w.refresh()}catch{d.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),c.elements.user_query.value="",o=1,y.classList.add("visually-hidden"),s.classList.remove("visually-hidden")}};function R(){const e=document.querySelector(".gallery-list li").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}c.addEventListener("submit",x);s.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
