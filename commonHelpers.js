import{S as d,i as c}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const u=t=>`
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
    `,p=t=>{const s="https://pixabay.com/api/",l="45503766-d567cf30782da5aa373afc201",a=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?key=${l}&${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},n=document.querySelector(".form"),i=document.querySelector(".gallery-list"),g=()=>new d(".image-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),m=g(),y=t=>{i.innerHTML="";const s=n.elements.user_query.value;if(s===""){t.preventDefault(),c.error({title:"Error",message:"Please fill input field",position:"topRight"});return}else{i.insertAdjacentHTML("afterbegin",'<div class="loader"></div>');let l=document.querySelector(".loader");p(s).then(a=>{if(a.hits.length===0){c.error({title:"Error",message:"Sorry,there are no images matching your search query. Please try again!",position:"topRight"}),i.innerHTML="",n.reset();return}l.classList.add("visually-hidden");const e=a.hits.map(r=>u(r)).join("");i.insertAdjacentHTML("afterbegin",e),m.refresh()}).catch(a=>{console.log(a.status)})}t.preventDefault()};n.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
