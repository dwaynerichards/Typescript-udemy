/// <reference types="@types/google.maps" />

import User, { createRandUsers } from "./User";
import Company, { createRandCompany } from "./Company";
import CustomMap from "./CustomMap";

const company = new Company();
const user = new User();

console.log("hello");
console.log(company);
console.log(user);

const map = new CustomMap("map");
const companies = createRandCompany(5);
const users = createRandUsers(5);
map.addMarker(...createRandCompany(5), ...createRandUsers(5));
