import{a as f,S,i as o}from"./assets/vendor-CRwkH7JT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const v=e=>`
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
    `;f.defaults.baseURL="https://pixabay.com/api";const b="45503766-d567cf30782da5aa373afc201",L=async(e,a)=>{const i={params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}};return await f.get("/",i)},n=document.querySelector(".form"),E=document.querySelector(".form input"),y=document.querySelector(".gallery-list"),m=document.querySelector(".main-load-wrapper .loader"),r=document.querySelector(".loadMoreBtn"),u=document.querySelector(".load-more-wrapper .loader");let c=1,p,h,l;const q=()=>new S(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),w=q(),x=async e=>{if(e.preventDefault(),y.innerHTML="",p=n.elements.user_query.value.trim(),c=1,p===""){o.error({title:"Error",message:"Please fill input field",position:"topRight"});return}else try{m.classList.remove("visually-hidden"),r.classList.add("visually-hidden");const a=await L(p,c);if(h=a.data.totalHits,n.reset(),m.classList.add("visually-hidden"),l=a.data.hits,l.length===0){o.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),r.classList.add("visually-hidden"),y.innerHTML="",n.reset();return}l.length<15?r.classList.add("visually-hidden"):r.classList.remove("visually-hidden");const i=l.map(d=>v(d)).join("");y.insertAdjacentHTML("afterbegin",i),w.refresh()}catch{o.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),E.textContent="",m.classList.add("visually-hidden"),r.classList.add("visually-hidden")}},P=async()=>{try{c++,r.classList.add("visually-hidden"),u.classList.remove("visually-hidden");const e=await L(p,c);r.classList.remove("visually-hidden"),u.classList.add("visually-hidden"),l=e.data.hits,h=e.data.totalHits,c*15>=h&&(o.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.classList.add("visually-hidden"),r.classList.add("visually-hidden"));const a=l.map(i=>v(i)).join("");y.insertAdjacentHTML("beforeend",a),R(),w.refresh()}catch{o.error({title:"Error",message:"Please check your internet connection and try again!",position:"topRight"}),n.elements.user_query.value="",u.classList.add("visually-hidden"),r.classList.remove("visually-hidden")}};function R(){let a=document.querySelector(".gallery-list li").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}n.addEventListener("submit",x);r.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
