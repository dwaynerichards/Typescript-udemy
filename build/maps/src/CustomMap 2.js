"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create marker instance , takes a marker optios object which has a map prop,
//prop's val needs to be instance of map we want the marker placed on
class CustomMap {
    constructor(id) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addMarker(...entity) {
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
exports.default = CustomMap;
