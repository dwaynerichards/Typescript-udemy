/// <reference types="@types/google.maps" />

import User from "./User";
import Company from "./Company";

const company = new Company();
const user = new User();
console.log("hello");
console.log(company);
console.log(user);

new google.maps.Map(document.getElementById("map")!, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
