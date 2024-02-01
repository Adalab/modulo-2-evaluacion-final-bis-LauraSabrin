"use strict";

const addFriendSection = document.querySelector(".js-addFriends");
const saveBtn = document.querySelector(".js-saveBtn");
const getBtn = document.querySelector(".js-getBtn");
const deleteBtn =document.querySelector('.js-deleteBtn');
const urlAllInfo = "https://randomuser.me/api/?results=10";
let sectionUser = document.querySelector(".js-allUsers");
let allInfoApi = [];
let friends = [];

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

const handleSave = () => {
  localStorage.setItem("users", JSON.stringify(allInfoApi));
};

const handleFriend = (event) => {
  const cardClicked = event.currentTarget;
  const cardClickedId = event.currentTarget.id;
  const whoIsClicked = allInfoApi.find(
    (user) => cardClickedId === user.login.uuid
  );
   
  const indexUser = allInfoApi.findIndex(
    (user) => user.login.uuid === cardClickedId
  );
  if (indexUser !== -1) {
    allInfoApi[indexUser].isFriend = true;
    friends.push(whoIsClicked);
  }
  renderTenUsers(friends, sectionUser);
};

const FindId = () => {
  const allCardUser = document.querySelectorAll(".js-all-users-art");
  for (const oneCard of allCardUser) {
    oneCard.addEventListener("click", handleFriend);
  }
};

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
  const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers !== null) {
    allInfoApi = savedUsers;
    renderTenUsers();
  } 
};

getBtn.addEventListener("click", handleRecover);
saveBtn.addEventListener("click", handleSave); 



