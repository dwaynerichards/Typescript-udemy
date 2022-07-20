import { faker } from "@faker-js/faker";
import User from "./User";

export default class Company {
  companyName: string;
  catchPhrase: string;
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
  }
}
type CreateRandos = (num: number) => Array<User | Company>;
export const createRandCompany: CreateRandos = (num) => {
  //create num amount of randos
  const randos: Company[] = [];
  while (num > 0) {
    randos.push(new Company());
    num--;
  }
  return randos;
};
