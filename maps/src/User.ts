import { faker } from "@faker-js/faker";
import Company from "./Company";

export default class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
}

type CreateRandos = (num: number) => Array<User | Company>;
export const createRandUsers: CreateRandos = (num) => {
  //create num amount of randos
  const randos: User[] = [];
  while (num > 0) {
    randos.push(new User());
    num--;
  }
  return randos;
};
