"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandUsers = void 0;
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.name = faker_1.faker.name.firstName();
        this.location = {
            lat: Number(faker_1.faker.address.latitude()),
            lng: Number(faker_1.faker.address.longitude()),
        };
        this.color = faker_1.faker.color.human();
    }
    markerContent() {
        return `<h1> Name: ${this.name} </h1>
    `;
    }
}
exports.default = User;
const createRandUsers = (num) => {
    //create num amount of randos
    const randos = [];
    while (num > 0) {
        randos.push(new User());
        num--;
    }
    return randos;
};
exports.createRandUsers = createRandUsers;
