(()=>{"use strict";const e=(e,n)=>{const t=document.createElement(e);return t.innerText=n,t},n=(e,n)=>{const t=document.createElement("img");return t.src=`/public/img/${e.toLowerCase()}`,t.alt=n,t},t=()=>document.createElement("div"),a=(a,o,s,c,i)=>{const r=t();r.className="card";const m=e("p",a),l=e("em",o),p=n(s,c),d=t();d.className="img-container menu",d.append(p);const u=e("p",i);return r.append(m,l,d,u),r},o=document.querySelector(".content"),s=()=>{o.innerHTML="";const a=e("p","Best ramen shop in town"),s=e("p","Established since Year 5739"),c=n("ishigami_senku.jpg","Owner Image"),i=t();i.className="img-container",i.append(c);const r=e("p","Visit us at Ishigami Village"),m=t();m.className="card",m.append(a,s,i,r),o.append(m)},c=document.querySelector(".content"),i=document.querySelector(".content"),r=Array.from(document.querySelectorAll(".nav-link"));function m(){r.forEach((e=>e.classList.remove("active"))),this.classList.add("active"),"Home"===this.innerText?s():"Menu"===this.innerText?(()=>{c.innerHTML="";const e=a("Ramen","Not just any ramen but the only ramen to exist made with foxtail millet","ramen.webp","Ramen Image","56 Stones"),n=a("Cola","It isn't a great meal without the perfect drink combi","cola.webp","Cola Image","15 Stones"),t=a("Cotton Candy","A perfect finishing touch dessert","cotton_candy.webp","Cotton Candy Image","15 Stones");c.append(e,n,t)})():"Contact"!==this.innerText||(()=>{i.innerHTML="";const a=t();a.className="card";const o=e("p","Don't miss us when visiting tokyo"),s=e("em","Unfortunately, our technology isn't there yet so no social platform available by now but you can find us on the map."),c=n("ishigami_village.png","Restaurant Location"),r=t();r.className="img-container map",r.append(c);const m=e("span","+Z15 654 234");a.append(o,s,r,m),i.append(a)})()}r.forEach((e=>{e.addEventListener("click",m)})),window.onload=s()})();