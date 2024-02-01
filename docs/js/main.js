document.querySelector(".js-addFriends");const n=document.querySelector(".js-saveBtn"),c=document.querySelector(".js-getBtn");document.querySelector(".js-deleteBtn");const o="https://randomuser.me/api/?results=10";let t=document.querySelector(".js-allUsers"),e=[];const u=()=>{fetch(o).then(s=>s.json()).then(s=>{e=s.results,a()}).catch(s=>{console.error("Error en la petición fetch:",s)})};u();const d=()=>{localStorage.setItem("users",JSON.stringify(e))},g=s=>{s.currentTarget;const r=s.currentTarget.id;e.find(l=>r===l.login.uuid);const i=e.findIndex(l=>l.login.uuid===r);i!==-1&&(e[i].isFriend=!0),a()},m=()=>{const s=document.querySelectorAll(".js-all-users-art");for(const r of s)r.addEventListener("click",g)},a=()=>{t.innerHTML="";for(let s=0;s<e.length;s++)e[s].isFriend?t.innerHTML+=`<article class="allUsersArt isFriend  js-all-users-art" id="${e[s].login.uuid}">
        <figure class="allUsersArt__figallUsersArt__fig"><img class="allUsersArt__fig--img" src="${e[s].picture.medium}" alt="imagen de usuario"/></figure>
        <h3 class="allUsersArt__h3">  ${e[s].name.first+" "+e[s].name.last}</h3>
        <p class="allUsersArt__p" > <img class="allUsersArt__fig--icon" src= "../images/user.png" alt =""/> ${e[s].login.username} </p>
        <p class="allUsersArt__p" ><img class="allUsersArt__fig--icon" src= "images/home.png" alt =/> ${e[s].location.city}</p>
        <p class="allUsersArt__p" >${e[s].location.country}</p>
        </article>`:t.innerHTML+=`<article class="allUsersArt js-all-users-art" id="${e[s].login.uuid}">
          <figure class="allUsersArt__figallUsersArt__fig"><img class="allUsersArt__fig--img" src="${e[s].picture.medium}" alt="imagen de usuario"/></figure>
          <h3 class="allUsersArt__h3">  ${e[s].name.first+" "+e[s].name.last}</h3>
          <p class="allUsersArt__p" > <img class="allUsersArt__fig--icon" src= "images/user.png" alt =""/> ${e[s].login.username} </p>
          <p class="allUsersArt__p" ><img class="allUsersArt__fig--icon" src= "images/home.png" alt =/> ${e[s].location.city}</p>
          <p class="allUsersArt__p" >${e[s].location.country}</p>
          </article>`;m()},_=s=>{s.preventDefault();const r=JSON.parse(localStorage.getItem("users"));r!==null&&(e=r,a())};c.addEventListener("click",_);n.addEventListener("click",d);
//# sourceMappingURL=main.js.map
