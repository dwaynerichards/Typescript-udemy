import User from "./User";
import Company from "./Company";
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
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
  addMarker(...entity: Array<Mappable>): void {
    entity.forEach((entry) => {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: entry.location,
      });

      marker.addListener("click", () => {
        //return a string, iter obj adding keys and values to string
        const content = entry.markerContent();
        console.log(entry);
        const inforWindow = new google.maps.InfoWindow({
          content, //: txt,
        });
        inforWindow.open(this.googleMap, marker);
        //setTimeout(inforWindow.close, 3000);
      });
    });
  }
}
