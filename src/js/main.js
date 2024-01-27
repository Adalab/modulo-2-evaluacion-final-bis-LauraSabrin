'use strict';

console.log(">> Ready :)");

const allUserSection = document.querySelector(".js-allUsers");
const addFriendSection = document.querySelector(".js-addFriends");
const saveBtn = document.querySelector(".js-saveBtn");
const getBtn = document.querySelector(".js-getBtn");
const urlAllInfo = "https://randomuser.me/api/?results=10";
const urlSpecific ="https://randomuser.me/api/?inc=,name,location,picture,login";
let allInfo = [];
let specificInfo = [];
let i = " ";


fetch(urlAllInfo)
.then((response) => response.json())
.then((data)=> {
  // console.log(data);
  allInfo = data.results;
  console.log(allInfo);
  renderTenUsers();

})
.catch((error) => {
  console.error("Error en la petición fetch:", error);
});

const renderTenUsers =()=> {
for (let i = 0; i <= allInfo.length; i++) {
  allUserSection.innerHTML += `<article class="allUsers">
  <figure class="allUsers__fig"><img class="allUsers__fig--img" src="${allInfo[i].picture.medium}" alt="imagen de usuario"></figure>
  <h3 class="allUsers__h3">${allInfo[i].name.first + ' ' + allInfo[i].name.last}</h3>
  <p class="allUsers__p" >${allInfo[i].location.city}</p>
  <p class="allUsers__p" >${allInfo[i].location.country}</p>
</article>`;

console.log(allInfo[i].picture.medium);
console.log(allInfo[i].name.first + ' ' + allInfo[i].name.last);
console.log(allInfo[i].location.city);
console.log(allInfo[i].location.country);
}
}
renderTenUsers();




//intentos inconclusos:

// fetch(urlAllInfo)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     allInfo = data.results;
//     console.log(allInfo);
//     console.log(allInfo[1].name.first);
//     console.log(allInfo[2].location.city);
//     console.log(allInfo[3].login.username);
//     console.log(allInfo.slice(0, 11));
//   });


  // for (const info of allInfo) {
  //   const names = allInfo[1].name.first;
  //   console.log(allInfo[1].name.first);
  //   if (allInfo[1].name.first !== null ) {
  //     allInfo.push(info);
  //     console.log(allInfo);
  //   }
    
  // }



  // const getSpecificInfo =()=> {
  //   for (let i = 0; i <= 10; i++) {
  //     specificInfo.push(allInfo[i].location.city);
  //     console.log(specificInfo);
  
  //   }
  // }

// const showUsers = () => {
//   allUserSection.innerHTML = ` <article class ="articleUser">
// <img class="userPicture" src="" alt="foto del usuario">
// <h2 class="nameTitle"></h2>
// <span class="userCity" ></span>
// <span class="userName" ></span>
// </article> `;
// };

// for (let i = 0; i <= allInfo.length; i++) {
//     if (allInfo[i].name !== null || " ") {
//        const namesUser = allInfo.push(allInfo[i].name);
//        console.log(allInfo)
//     }

// }
// };
// showUsers ();
