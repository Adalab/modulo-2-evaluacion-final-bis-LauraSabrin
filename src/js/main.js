"use strict";

console.log(">> Ready :)");

const allUserSection = document.querySelector(".js-allUsers");
const addFriendSection = document.querySelector(".js-addFriends");
const saveBtn = document.querySelector(".js-saveBtn");
const getBtn = document.querySelector(".js-getBtn");
const urlAllInfo = "https://randomuser.me/api/?results=10";
const urlSpecificInfo =
  "https://randomuser.me/api/?inc=,name,location,picture,login";
let allInfo = [];
let specificInfo = [];

fetch(urlAllInfo)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    allInfo = data.results;
    // console.log(allInfo);
    // console.log(allInfo[1].name.first);
    // console.log(allInfo[2].location.city);
    // console.log(allInfo[3].login.username);
    // console.log(allInfo.slice(0, 11));
  });
const showUsers = () => {
  allUserSection.innerHTML = ` <article class ="articleUser">
<img class="userPicture" src="" alt="foto del usuario">
<h2 class="nameTitle"></h2>
<span class="userCity" ></span>
<span class="userName" ></span>
</article> `;
};

// for (let i = 0; i <= allInfo.length; i++) {
//     if (allInfo[i].name !== null || " ") {
//        const namesUser = specificInfo.push(allInfo[i].name);
//        console.log(specificInfo)
//     }

// }
// };
// showUsers ();
