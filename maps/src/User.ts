import { faker } from "@faker-js/faker";
import Company from "./Company";
import { Mappable } from "./CustomMap";
export type CreateRandos = (num: number) => Array<Mappable>;

export default class User implements Mappable {
  name: string;
  color: string;
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
    this.color = faker.color.human();
  }
  markerContent(): string {
    return `<h1> Name: ${this.name} </h1>
    `;
  }
}

export const createRandUsers: CreateRandos = (num) => {
  //create num amount of randos
  const randos: Mappable[] = [];
  while (num > 0) {
    randos.push(new User());
    num--;
  }
  return randos;
};
