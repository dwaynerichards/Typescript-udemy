/// <reference types="@types/google.maps" />

import User, { createRandUsers } from "./User";
import Company, { createRandCompany } from "./Company";
import CustomMap from "./CustomMap";

const company = new Company();
const user = new User();

const map = new CustomMap("map");
map.addMarker(...createRandCompany(5), ...createRandUsers(5));
