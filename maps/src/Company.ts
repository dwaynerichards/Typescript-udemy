import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
import { CreateRandos } from "./User";
export default class Company {
  companyName: string;
  catchPhrase: string;
  color: string;

  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
    this.color = faker.color.human();
  }

  markerContent(): string {
    return `<h1> Company: ${this.companyName} </h1>
    <h3> Catchphrase: ${this.catchPhrase} </h3>
    `;
  }
}
export const createRandCompany: CreateRandos = (num) => {
  //create num amount of randos
  const randos: Mappable[] = [];
  while (num > 0) {
    randos.push(new Company());
    num--;
  }
  return randos;
};
