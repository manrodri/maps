import { User } from './User';
import { Company } from './Company';
import { mappable } from './interfaces';

export class Map {
    private googleMap: google.maps.Map;

    constructor(divId: string, mapProps: google.maps.MapOptions){
        const el = document.getElementById(divId)!
        this.googleMap = new google.maps.Map(el, mapProps)
    }

    addMarker(mappable: mappable): void{
        new google.maps.Marker({
            map: this.googleMap,
            position: {lat: mappable.location.lat, lng: mappable.location.lng}
        })
    }
}