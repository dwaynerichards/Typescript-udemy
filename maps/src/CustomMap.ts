import User from "./User";
import Company from "./Company";
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
//create marker instance , takes a marker optios object which has a map prop,
//prop's val needs to be instance of map we want the marker placed on

export default class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addUserMarker() {}
  addCompanyMarker() {}

  addMarker(...entity: Array<Mappable>): void {
    entity.forEach((entry) => {
      new google.maps.Marker({
        map: this.googleMap,
        position: entry.location,
      });
    });
  }
}
