"use strict";


const addFriendSection = document.querySelector(".js-addFriends");
const saveBtn = document.querySelector(".js-saveBtn");
const getBtn = document.querySelector(".js-getBtn");
const urlAllInfo = "https://randomuser.me/api/?results=10";
let sectionUser = document.querySelector(".js-allUsers");

let allInfoApi = [];
let friends = [];

//función para pedir datos API
const getDataUser = () => {
  fetch(urlAllInfo)
    .then((response) => response.json())
    .then((data) => {
      allInfoApi = data.results;
      renderTenUsers();
      })
    .catch((error) => {
      console.error("Error en la petición fetch:", error);
    });
};
getDataUser();

//evento click en botón guardar y se almacena en LS los usuarios de pantalla.
// 1-evento clic
// 2-guardar en variable los usuarios : nombre variable = función con setItem?
const handleSave = () => {
    localStorage.setItem("users", JSON.stringify(allInfoApi));

};

//función para encontrar el id del elemento clicado y añadir propiedad isFriend:
const handleFriend = (event) => {
  const cardClicked = event.currentTarget;
  
  const cardClickedId = event.currentTarget.id;
 
  //con find() obtengo el primer elemento que cumple mi condición
  const whoIsClicked = allInfoApi.find(
    (user) => cardClickedId === user.login.uuid
  );
 
  //con findIndex () busco y encuentro la posición o index de un elemento:
  const indexUser = allInfoApi.findIndex(
    (user) => user.login.uuid === cardClickedId
  );
 
  //si la posición de
  if (indexUser !== -1) {
    allInfoApi[indexUser].isFriend = true;
  
    friends.push(whoIsClicked);
    
  }
  renderTenUsers(friends, sectionUser);
};

//función para escuchar evento sobre todos los articles (mis tarjetas de usuario)
const FindId = () => {
  const allCardUser = document.querySelectorAll(".js-all-users-art");
  for (const oneCard of allCardUser) {
    oneCard.addEventListener("click", handleFriend);
  }
};

//función actualizar-pintar en pantalla los 10 usuarios random
const renderTenUsers = () => {
  sectionUser.innerHTML = "";
  for (let i = 0; i < allInfoApi.length; i++) {
    if (allInfoApi[i].isFriend) {
      sectionUser.innerHTML += `<article class="allUsersArt isFriend  js-all-users-art" id="${
        allInfoApi[i].login.uuid
      }">
        <figure class="allUsersArt__figallUsersArt__fig"><img class="allUsersArt__fig--img" src="${
          allInfoApi[i].picture.medium
        }" alt="imagen de usuario"/></figure>
        <h3 class="allUsersArt__h3">  ${
          allInfoApi[i].name.first + " " + allInfoApi[i].name.last
        }</h3>
        <p class="allUsersArt__p" > <img class="allUsersArt__fig--icon" src= "../images/user.png" alt =""/> ${
          allInfoApi[i].login.username
        } </p>
        <p class="allUsersArt__p" ><img class="allUsersArt__fig--icon" src= "images/home.png" alt =/> ${
          allInfoApi[i].location.city
        }</p>
        <p class="allUsersArt__p" >${allInfoApi[i].location.country}</p>
        </article>`;
    } else {
      sectionUser.innerHTML += `<article class="allUsersArt js-all-users-art" id="${
        allInfoApi[i].login.uuid
      }">
          <figure class="allUsersArt__figallUsersArt__fig"><img class="allUsersArt__fig--img" src="${
            allInfoApi[i].picture.medium
          }" alt="imagen de usuario"/></figure>
          <h3 class="allUsersArt__h3">  ${
            allInfoApi[i].name.first + " " + allInfoApi[i].name.last
          }</h3>
          <p class="allUsersArt__p" > <img class="allUsersArt__fig--icon" src= "images/user.png" alt =""/> ${
            allInfoApi[i].login.username
          } </p>
          <p class="allUsersArt__p" ><img class="allUsersArt__fig--icon" src= "images/home.png" alt =/> ${
            allInfoApi[i].location.city
          }</p>
          <p class="allUsersArt__p" >${allInfoApi[i].location.country}</p>
          </article>`;
    }
  }
  FindId();
};


const handleRecover = (event) => {
  event.preventDefault();
  console.log('Me han clicado!');
  const savedUsers = JSON.parse(localStorage.getItem("users"));
  console.log(savedUsers);
  if (savedUsers !== null) {
    allInfoApi = savedUsers;
    console.log(allInfoApi);
    renderTenUsers();
  } 
};


getBtn.addEventListener("click", handleRecover);
saveBtn.addEventListener("click", handleSave); 

console.log('Guardaste!')

