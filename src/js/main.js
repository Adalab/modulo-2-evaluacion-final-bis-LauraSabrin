"use strict";

console.log(">> Ready :)");

const allUserSection = document.querySelector(".js-allUsers");
const addFriendSection = document.querySelector(".js-addFriends");
const saveBtn = document.querySelector(".js-saveBtn");
const getBtn = document.querySelector(".js-getBtn");
const urlAllInfo = "https://randomuser.me/api/?results=10";
const sectionUser = document.querySelector(".js-allUsers");
const cardUser = ('.js-all-users-art');
let allInfo = [];
let i = " ";


//función para pedir datos API
const getDataUser =()=> {
fetch(urlAllInfo)
  .then((response) => response.json())
  .then((data) => {
    allInfo = data.results;
    console.log(allInfo);
    renderTenUsers();
    
  })
  
  .catch((error) => {
    console.error("Error en la petición fetch:", error);
  });



// allInfo.push(newProperty);
// console.log(allInfo);
// let myInfo = allInfo.concat(newProperty);
// console.log(myInfo);
}
getDataUser();

//función actualizar-pintar en pantalla los 10 usuarios random
const renderTenUsers = (arrayUsers) => {
  for (let i = 0; i < allInfo.length; i++) {
    allUserSection.innerHTML += `<article class="allUsersArt  js-all-users-art" id="${allInfo[i].login.uuid}">
  <figure class="allUsersArt__figallUsersArt__fig"><img class="allUsersArt__fig--img" src="${
    allInfo[i].picture.medium}" alt="imagen de usuario"/></figure>
  <h3 class="allUsersArt__h3">  ${
    allInfo[i].name.first + " " + allInfo[i].name.last
  }</h3>
  <p class="allUsersArt__p" > <img class="allUsersArt__fig--icon" src= "images/user.png" alt =""/> ${
    allInfo[i].login.username
  } </p>
  <p class="allUsersArt__p" ><img class="allUsersArt__fig--icon" src= "images/home.png" alt =/> ${
    allInfo[i].location.city
  }</p>
  <p class="allUsersArt__p" >${allInfo[i].location.country}</p>
</article>`;
    // console.log(allInfo[i].picture.medium);
    // const imagen = allInfo[i].picture.medium !== undefined ? allInfo.picture.medium :'esto es undefided';
    // console.log(imagen);
    // console.log(allInfo[i].name.first + " " + allInfo[i].name.last);
    // console.log(allInfo[i].location.city);
    // console.log(allInfo[i].location.country);
    console.log(allInfo[i].login.uuid);
  }

};

//función añadir propiedad nueva para comprobar si está clicado como amigo
const addProperty =()=> {
const newProperty = {};
newProperty.isFriend = true;
console.log(newProperty);
for (let i = 0; i < allInfo.length; i++) {
 allInfo[i].isFriend = true;
  console.log(allInfo);

}
};


const handleClick =(event)=>{
  event.preventDefault();
  console.log(event.currentTarget.id);
  const cardClicked = ;
  console.log(cardClicked);
  console.log('me diste un click');
  if (cardClicked === event.target) {
    addProperty();
    
  }
}; 

cardUser.addEventListener('click', handleClick);

