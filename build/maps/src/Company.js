"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandCompany = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    constructor() {
        this.companyName = faker_1.faker.company.companyName();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: Number(faker_1.faker.address.latitude()),
            lng: Number(faker_1.faker.address.longitude()),
        };
        this.color = faker_1.faker.color.human();
    }
    markerContent() {
        return `<h1> Company: ${this.companyName} </h1>
    <h3> Catchphrase: ${this.catchPhrase} </h3>
    `;
    }
}
exports.default = Company;
const createRandCompany = (num) => {
    //create num amount of randos
    const randos = [];
    while (num > 0) {
        randos.push(new Company());
        num--;
    }
    return randos;
};
exports.createRandCompany = createRandCompany;
