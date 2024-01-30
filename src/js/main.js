"use strict";

console.log(">> Ready :)");

const allUserSection = document.querySelector(".js-allUsers");
const addFriendSection = document.querySelector(".js-addFriends");
const saveBtn = document.querySelector(".js-saveBtn");
const getBtn = document.querySelector(".js-getBtn");
const urlAllInfo = "https://randomuser.me/api/?results=10";
const sectionUser = document.querySelector(".js-allUsers");

let allInfoApi = [];
let allInfoId = [];

//función para pedir datos API
const getDataUser = () => {
  fetch(urlAllInfo)
    .then((response) => response.json())
    .then((data) => {
      allInfoApi = data.results;
      console.log(allInfoApi);
      renderTenUsers();
    })

    .catch((error) => {
      console.error("Error en la petición fetch:", error);
    });
};
getDataUser();

//función añadir clase para objeto con propiedad isFriend=true
const friend = () => {
  for (let i = 0; i <= allInfoId; i++) {
    if (allInfoId.contains(isFriend)) {
      //                                                                                 <------------------- AQUÍ !!
    }
  }
};

//función añadir propiedad nueva
// const addProperty = () => {
//   const newProperty = {
//     isFriend: true,
//   };

//   for (let i = 0; i < allInfoId.length; i++) {
//     allInfoId[i].isFriend = true;
//     newProperty[allInfoId[i]];
//   }
// };

//función para encontrar el id del elemento clicado y añadir propiedad isFriend:
const handleFriend = (event) => {
  const cardClicked = event.currentTarget;
  console.log(cardClicked);
  const cardClickedId = event.currentTarget.id;
  console.log(cardClickedId);
  //con find() obtengo el primer elemento que cumple mi condición
  const whoIsClicked = allInfoApi.find(
    (user) => cardClickedId === user.login.uuid
  );
  console.log(whoIsClicked);
  //con findIndex () busco y encuentro la posición o index de un elemento:
  const indexUSer = allInfoApi.findIndex(
    (user) => user.login.uuid === cardClickedId
  );
  console.log(indexUSer);
  //si la posición de
  if (indexUSer !== -1) {
    allInfoApi[indexUSer].isFriend = true;
    console.log(allInfoApi);
    allInfoId.push(whoIsClicked); //debería ser whoIsClicked o cardClicked?
    
 //                                                               <---------------------------------------AQUÍ!!!
    renderTenUsers();   //si descomento y se ejecuta me multiplica los resultados con cada click.
  }
};



//función para escuchar evento sobre todos los articles (mis tarjetas de usuario)
const FindId = () => {
  const allCardUser = document.querySelectorAll(".js-all-users-art");
  for (const oneCard of allCardUser) {
    oneCard.addEventListener("click", handleFriend);
  }
};

//función para saber el elemento clicado
// const handleClick =(event)=>{
//   event.preventDefault();
//  const cardClicked = event.currentTarget.id;
//  console.log(cardClicked)
//   const clicked = allInfoApi.map((user) => cardClicked === user.login.uuid);
//   allInfoId.push(clicked);
//   console.log(allInfoId);
//     console.log(clicked);
//     if ( cardClicked === allInfoId ) {
//           addProperty();
//           allCardUser.classList.add('isFriend');
//         }
//       }
//  sectionUser.addEventListener('click', handleClick);

//función actualizar-pintar en pantalla los 10 usuarios random
const renderTenUsers = (arrayUsers) => {
  //limpiar section ""
  for (let i = 0; i < allInfoApi.length; i++) {
    let friend = "";
    // if (  )
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
  FindId();
  // handleClick();
};
